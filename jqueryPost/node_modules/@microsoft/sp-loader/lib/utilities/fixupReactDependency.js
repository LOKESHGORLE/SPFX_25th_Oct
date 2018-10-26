import { _SPFlight } from '@microsoft/sp-core-library';
import { react15Version, react16Version, reactComponentId, reactDomComponentId } from './componentConstants';
export default function fixupReactDependency(manifest, moduleConfiguration) {
    if (manifest.isInternal &&
        (moduleConfiguration.id === reactComponentId
            || moduleConfiguration.id === reactDomComponentId)) {
        if (_SPFlight.isEnabled(1187 )) {
            moduleConfiguration.version = react16Version;
        }
        else {
            moduleConfiguration.version = react15Version;
        }
    }
}
