import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import SystemJsLoader from './SystemJsLoader';
/**
 * Loads a component from a manifest.
 *
 * @param manifest - Manifest of the module to load.
 * @returns          A promise containing the loaded module.
 */
export default function loadComponent<TComponent>(manifest: IClientSideComponentManifest, systemJsLoader: SystemJsLoader): Promise<TComponent>;
