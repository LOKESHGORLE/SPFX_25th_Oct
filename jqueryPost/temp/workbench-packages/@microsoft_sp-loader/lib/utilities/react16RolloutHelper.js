import { _SPFlight } from '@microsoft/sp-core-library';
import { react15Version, react16Version, reactComponentId, reactDomComponentId } from './componentConstants';
var REACT_NAME = 'react';
export function fixupReactDependency(manifest, moduleConfiguration) {
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
export function manifestHasWrongReactDependency(manifest) {
    var scriptResources = manifest.loaderConfig.scriptResources;
    if (!scriptResources.hasOwnProperty(REACT_NAME)) {
        return false;
    }
    if (_SPFlight.isEnabled(1187 )) {
        return scriptResources[REACT_NAME].version !== react16Version;
    }
    else {
        return scriptResources[REACT_NAME].version !== react15Version;
    }
}
