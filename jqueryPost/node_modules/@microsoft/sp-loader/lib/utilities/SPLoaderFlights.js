import { _SPFlight } from '@microsoft/sp-core-library';
var SPLoaderFlights = (function () {
    function SPLoaderFlights() {
    }
    SPLoaderFlights._useNewBootSequence = function () {
        return _SPFlight.isEnabled(182 );
    };
    SPLoaderFlights._webApiFeatureEnabled = function () {
        return _SPFlight.isEnabled(375 );
    };
    SPLoaderFlights._webApiThirdPartyAppFeatureEnabled = function () {
        return _SPFlight.isEnabled(1206 );
    };
    return SPLoaderFlights;
}());
export default SPLoaderFlights;
