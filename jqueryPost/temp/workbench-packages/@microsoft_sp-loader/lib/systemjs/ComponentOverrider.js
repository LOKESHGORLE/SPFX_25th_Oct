import { Validate } from '@microsoft/sp-core-library';
import ComponentStore from '../stores/ComponentStore';
import ManifestStore from '../stores/ManifestStore';
import { manifestHasWrongReactDependency } from '../utilities/react16RolloutHelper';
import normalizeName from './normalizeName';
import SystemJsLoader from './SystemJsLoader';
var ComponentOverrider = (function () {
    function ComponentOverrider() {
    }
    ComponentOverrider.overrideComponent = function (componentId, componentModule, serviceScope) {
        Validate.isNotNullOrUndefined(componentModule, 'componentModule');
        var manifest = ManifestStore.instance.tryGetManifest(componentId);
        if (!manifest) {
            return;
        }
        if (manifestHasWrongReactDependency(manifest)) {
            return;
        }
        var normalizedName = normalizeName(manifest);
        serviceScope.consume(SystemJsLoader.serviceKey).ensure(normalizedName, componentModule);
        ComponentStore.instance.storeLoadedComponent(manifest.id, manifest.version, componentModule);
    };
    return ComponentOverrider;
}());
export default ComponentOverrider;
