import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import RequireJsLoader from './RequireJsLoader';
/**
 * Loads a component from a manifest.
 *
 * @param manifest - Manifest of the module to load.
 * @returns          A promise containing the loaded module.
 */
export default function loadComponent<TComponent>(manifest: IClientSideComponentManifest, requireJsLoader: RequireJsLoader): Promise<TComponent>;
