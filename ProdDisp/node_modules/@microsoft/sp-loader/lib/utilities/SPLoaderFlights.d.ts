/**
 * Class to expose flight checks on sp-loader
 *
 * @internal
 */
export default class SPLoaderFlights {
    /**
     * Returns true if the SPFx should use the new boot sequence, which will support cross-app navigation.
     *
     * @internal
     */
    static _useNewBootSequence(): boolean;
    /**
     * Returns true if SPFx should initialize the Azure AD objects in this environment.
     */
    static _webApiFeatureEnabled(): boolean;
    /**
   * Returns true if SPFx should initialize the token provider class with the 3rd party Service Principal.
   */
    static _webApiThirdPartyAppFeatureEnabled(): boolean;
}
