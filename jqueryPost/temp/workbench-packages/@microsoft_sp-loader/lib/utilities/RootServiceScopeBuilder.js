var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Guid, ServiceScope, Environment, EnvironmentType, Validate } from '@microsoft/sp-core-library';
import { _DynamicDataManager } from '@microsoft/sp-dynamic-data';
import { PageContext } from '@microsoft/sp-page-context';
import { HttpClient, SPHttpClient, _GraphHttpClientContext, AadTokenProvider, DigestCache, _AadTokenProviders, _AadConstants } from '@microsoft/sp-http';
import { _logSourceServiceKey, _LogSource, _TraceLogger } from '@microsoft/sp-diagnostics';
import SPLoaderFlights from './SPLoaderFlights';
var RootServiceScopeBuilder = (function () {
    function RootServiceScopeBuilder() {
    }
    RootServiceScopeBuilder.build = function (preloadedData) {
        var serviceScope = ServiceScope.startNewRoot();
        serviceScope.provide(_logSourceServiceKey, RootServiceScopeBuilder._logSource);
        serviceScope.createDefaultAndProvide(PageContext.serviceKey);
        serviceScope.createDefaultAndProvide(HttpClient.serviceKey);
        serviceScope.createDefaultAndProvide(SPHttpClient.serviceKey);
        serviceScope.createDefaultAndProvide(_DynamicDataManager.serviceKey);
        var _graphContext = serviceScope.createDefaultAndProvide(_GraphHttpClientContext.serviceKey);
        var digestCache = serviceScope.createDefaultAndProvide(DigestCache.serviceKey);
        serviceScope.finish();
        this._initializeGraphHttpClient(_graphContext, preloadedData);
        this._initializeDigestCache(digestCache, preloadedData);
        return serviceScope;
    };
    RootServiceScopeBuilder._initializeGraphHttpClient = function (graphContext, preloadedData) {
        if (DATACENTER && Environment.type !== EnvironmentType.Local) {
            graphContext.initialize(preloadedData.spPageContextInfo.webServerRelativeUrl, preloadedData.spPageContextInfo.msGraphEndpointUrl);
            if (SPLoaderFlights._webApiFeatureEnabled()) {
                try {
                    var redirectPartialUri = window.location.origin + '/_forms/';
                    var defaultAadConfiguration = {
                        aadInstanceUrl: preloadedData.spPageContextInfo.aadInstanceUrl,
                        aadTenantId: preloadedData.spPageContextInfo.aadTenantId,
                        aadUserId: preloadedData.spPageContextInfo.aadUserId,
                        redirectUri: redirectPartialUri + _AadConstants.SPFX_SINGLE_SIGN_ON_REPLY_URL,
                        servicePrincipalId: ''
                    };
                    var preconfiguredAppConfiguration = __assign({}, defaultAadConfiguration, { servicePrincipalId: _AadConstants.PRE_AUTHORIZED_APP_PRINCIPAL_ID });
                    if (SPLoaderFlights._webApiThirdPartyAppFeatureEnabled()) {
                        var thirdPartyServicePrincipalId = preloadedData.spPageContextInfo.spfx3rdPartyServicePrincipalId;
                        if (thirdPartyServicePrincipalId !== undefined && thirdPartyServicePrincipalId !== Guid.empty.toString()) {
                            _AadTokenProviders._initialize(new AadTokenProvider(__assign({}, defaultAadConfiguration, { servicePrincipalId: thirdPartyServicePrincipalId })), preconfiguredAppConfiguration);
                        }
                    }
                    else {
                        _AadTokenProviders._initialize(new AadTokenProvider(__assign({}, defaultAadConfiguration, { servicePrincipalId: _AadConstants.CONFIGURABLE_APP_PRINCIPAL_ID })), preconfiguredAppConfiguration);
                    }
                }
                catch (e) {
                    _TraceLogger.logVerbose(this._logSource, 'AadTokenProviders: Failed to initialize');
                }
            }
        }
    };
    RootServiceScopeBuilder._initializeDigestCache = function (digestCache, preloadedData) {
        Validate.isNotNullOrUndefined(preloadedData, 'preloadedData');
        Validate.isNotNullOrUndefined(preloadedData.spPageContextInfo, 'preloadedData.spPageContextInfo');
        _TraceLogger.logVerbose(this._logSource, 'ServiceScopeBuilder: Added preloaded FormDigestValue to cache');
        if (preloadedData.spPageContextInfo) {
            var expirationTimestamp = (1000 * preloadedData.spPageContextInfo.formDigestTimeoutSeconds) -
                this.PRELOAD_DIGEST_EXPIRATION_SLOP_MS;
            if (expirationTimestamp < 0) {
                expirationTimestamp = 0;
            }
            digestCache.addDigestToCache(preloadedData.spPageContextInfo.webServerRelativeUrl, preloadedData.spPageContextInfo.formDigestValue, expirationTimestamp);
            digestCache.addDigestToCache(preloadedData.spPageContextInfo.webAbsoluteUrl, preloadedData.spPageContextInfo.formDigestValue, expirationTimestamp);
        }
    };
    RootServiceScopeBuilder._logSource = _LogSource.create('RootServiceScope');
    RootServiceScopeBuilder.PRELOAD_DIGEST_EXPIRATION_SLOP_MS = 30000; 
    return RootServiceScopeBuilder;
}());
export default RootServiceScopeBuilder;
