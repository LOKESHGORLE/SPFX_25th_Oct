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
export declare function fixupReactDependency(manifest: IClientSideComponentManifest, moduleConfiguration: IComponentModuleConfiguration): void;
/**
 * Returns true if the manifest has the WRONG version of React. This code returning true triggers some code to make
 * sure the assembly bundle is not used (as it's already linked with a bad react).
 * If the component doesn't depend on React there is nothing to do.
 */
export declare function manifestHasWrongReactDependency(manifest: IClientSideComponentManifest): boolean;
