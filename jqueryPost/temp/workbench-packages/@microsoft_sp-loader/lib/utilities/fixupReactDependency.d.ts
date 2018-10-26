import { IClientSideComponentManifest, IComponentModuleConfiguration } from '@microsoft/sp-module-interfaces';
/**
 * If the manifest is internal (first-party) and it's trying to load React or ReactDOM, it checks the React 16
 * rollout flight to decide which version of React to use.
 * This modifies the moduleConfiguration object in place.
 *
 * In any other case, it does nothing.
 *
 * @param manifest - Manifest to check
 * @param moduleConfiguration - Component dependency to check
 */
export default function fixupReactDependency(manifest: IClientSideComponentManifest, moduleConfiguration: IComponentModuleConfiguration): void;
