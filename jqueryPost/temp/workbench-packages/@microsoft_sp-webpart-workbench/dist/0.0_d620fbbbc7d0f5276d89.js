webpackJsonp8be81a5c_af38_4bb2_af97_afa3b64dfbed_1_6_0([0],Array(311).concat([
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/Persona.types.js
module.exports = __webpack_require__(381);

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/PersonaConsts.js
module.exports = __webpack_require__(382);

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/BasePicker.types.js
module.exports = __webpack_require__(353);

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/BasePicker.js
module.exports = __webpack_require__(345);

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/utilities/selection/interfaces.js
module.exports = __webpack_require__(348);

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Specifies the type of a principal.
 */
var PrincipalType;
(function (PrincipalType) {
    /**
     * Enumeration whose value specifies no principal type. Value = 0.
     */
    PrincipalType[PrincipalType["none"] = 0] = "none";
    /**
     * Enumeration whose value specifies a user as the principal type. Value = 1.
     */
    PrincipalType[PrincipalType["user"] = 1] = "user";
    /**
     * Enumeration whose value specifies a distribution list as the principal type. Value = 2.
     */
    PrincipalType[PrincipalType["distributionList"] = 2] = "distributionList";
    /**
     * Enumeration whose value specifies a security group as the principal type. Value = 4.
     */
    PrincipalType[PrincipalType["securityGroup"] = 4] = "securityGroup";
    /**
     * Enumeration whose value specifies a group (2) as the principal type. Value = 8.
     */
    PrincipalType[PrincipalType["sharePointGroup"] = 8] = "sharePointGroup";
    /**
     * Enumeration whose value specifies all principal types. Value = 15.
     */
    PrincipalType[PrincipalType["all"] = 15] = "all";
})(PrincipalType || (PrincipalType = {}));
exports.default = PrincipalType;



/***/ }),
/* 317 */,
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/Suggestions/Suggestions.js
module.exports = __webpack_require__(337);

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/Suggestions/SuggestionsController.js
module.exports = __webpack_require__(341);

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Autofill/Autofill.js
module.exports = __webpack_require__(344);

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/Persona.js
module.exports = __webpack_require__(362);

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/Persona.base.js
module.exports = __webpack_require__(367);

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/PersonaCoin/PersonaCoin.js
module.exports = __webpack_require__(374);

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/PersonaCoin/PersonaCoin.base.js
module.exports = __webpack_require__(375);

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/PersonaPresence/PersonaPresence.base.js
module.exports = __webpack_require__(380);

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/PeoplePicker/PeoplePicker.scss.js
module.exports = __webpack_require__(398);

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/TagPicker/TagItem.js
module.exports = __webpack_require__(401);

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/TagPicker/TagItem.scss.js
module.exports = __webpack_require__(402);

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// OneDrive:CoverageThreshold(50)
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ApiUrlHelper_1 = __webpack_require__(406);
var ISpPageContext_1 = __webpack_require__(407);
var FeatureOverrides_1 = __webpack_require__(70);
var DataSource_1 = __webpack_require__(408);
var PrincipalType_1 = __webpack_require__(316);
var ItemUrlHelper_1 = __webpack_require__(330);
var Error_1 = __webpack_require__(414);
var ABExperiment_1 = __webpack_require__(128);
var Killswitch_1 = __webpack_require__(117);
var EmailAddressParser_1 = __webpack_require__(417);
exports.PeoplePickerGraph = { ODB: 387 };
exports.DisablePeoplePickerGraphExperiment = { ODB: 776 };
exports.EnablePeoplePickerGraphDLErrorExperiment = { ODB: 779 };
var PeoplePickerDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(PeoplePickerDataSource, _super);
    function PeoplePickerDataSource(paramsOrOriginalParams, dependencies) {
        var _this = this;
        var pageContext = isOriginalParams(paramsOrOriginalParams) ? paramsOrOriginalParams : dependencies.pageContext;
        _this = _super.call(this, {}, {
            pageContext: pageContext
        }) || this;
        var apiUrlHelper = isOriginalParams(paramsOrOriginalParams) ? paramsOrOriginalParams.apiUrlHelper : dependencies.apiUrlHelper;
        _this._imageAbsoluteWebUrl = paramsOrOriginalParams.imageAbsoluteWebUrl || '';
        _this._apiUrlHelper = apiUrlHelper ? apiUrlHelper : new ApiUrlHelper_1.ApiUrlHelper({}, {
            itemUrlHelper: new ItemUrlHelper_1.ItemUrlHelper({}, { pageContext: pageContext }),
            pageContext: pageContext
        });
        _this._capabilities = {
            supportsMruCaching: true
        };
        if (dependencies) {
            _this._dataRequestor = dependencies.dataRequestor;
            _this._graphPeoplePickerHelper = dependencies.graphPeoplePickerHelper;
        }
        return _this;
    }
    PeoplePickerDataSource.prototype.getCapabilities = function () {
        return this._capabilities;
    };
    PeoplePickerDataSource.prototype.getPersonaDetails = function (accountID) {
        var _this = this;
        return this.dataRequestor.getData({
            url: this._apiUrlHelper.build().segment('sp.publishing.personmagazine.GetPersonMagazineUserProfileDataForUser').parameter('accountName', accountID).toString(),
            qosName: 'GetPersonaDetails',
            parseResponse: function (responseText) {
                var transformPerson = function (rawPerson) { return ({
                    name: rawPerson.DisplayName,
                    email: rawPerson.Email,
                    userId: rawPerson.AccountName,
                    office: rawPerson.Office,
                    image: rawPerson.PictureUrl,
                    job: rawPerson.Title,
                    department: rawPerson.DepartmentName,
                    phone: rawPerson.Phone,
                    sip: rawPerson.Lync
                }); };
                var response = JSON.parse(responseText);
                var rawProfile = response.d.GetPersonMagazineUserProfileDataForUser;
                var ret = {
                    personDetails: transformPerson(rawProfile.Primary),
                    managerChain: rawProfile.ManagerChain.results.map(transformPerson),
                    directReports: rawProfile.DirectReports.results.map(transformPerson)
                };
                ret.personDetails.profilePage = ISpPageContext_1.getServerUrl(_this._pageContext) + "/_layouts/15/me.aspx?p=" + encodeURIComponent(ret.personDetails.sip) + "&origin=ProfileODBCard";
                return ret;
            }
        });
    };
    PeoplePickerDataSource.prototype.getPickerEntityInformation = function (person) {
        var groupId = 0;
        if (person.principalType === PrincipalType_1.default.sharePointGroup) {
            groupId = Number(person.rawPersonData.EntityData.SPGroupID);
        }
        var additionalPostData = JSON.stringify({
            entityInformationRequest: {
                PrincipalType: person.principalType,
                EmailAddress: person.email,
                GroupId: groupId
            }
        });
        return this.dataRequestor.getData({
            url: this._apiUrlHelper.build().segment('SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.GetPickerEntityInformation').toString(),
            additionalPostData: additionalPostData,
            qosName: 'getPickerEntityInformation',
            noRedirect: true,
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                var entityInformation = {
                    totalMemberCount: response.d.TotalMemberCount,
                    person: person
                };
                return entityInformation;
            }
        });
    };
    PeoplePickerDataSource.prototype.resolve = function (query, context) {
        var _this = this;
        return this.dataRequestor.getData({
            url: this._apiUrlHelper.build().segment('SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerResolveUser').toString(),
            additionalPostData: this._constructPostBody(query, context),
            qosName: 'Resolve',
            parseResponse: function (responseText) {
                var response = JSON.parse(responseText);
                var responseData = JSON.parse(response.d.ClientPeoplePickerResolveUser);
                var personArray = [];
                personArray[0] = responseData;
                if (Killswitch_1.Killswitch.isActivated("067ca2b4-2244-4153-8dfa-d11e6b4487bb", "03/19/2018", "Only overwrite display text if it is null or empty")) {
                    if (!responseData.IsResolved) {
                        personArray[0].DisplayText = responseData.Key;
                    }
                }
                else {
                    if (!responseData.IsResolved) {
                        if (!!responseData.EntityData.IsBlockedOnODB && responseData.EntityData.IsBlockedOnODB.toLowerCase() === "true") {
                            //do nothing for ODB policy.
                        }
                        else {
                            personArray[0].DisplayText = responseData.Key;
                        }
                    }
                }
                personArray = _this._transformData(personArray, context.filterExternalUsers);
                var person = personArray[0];
                if (context.filterExternalUsers && person && person.entityType === 1 /* externalUser */) {
                    // If filterExternalUsers is passed then mark any existing external user in directory as unresolved
                    // and change its entity type to default.
                    person.isResolved = false;
                    person.entityType = 0 /* regularUser */;
                }
                else if (context.blockViaPolicy && !context.filterExternalUsers && person && !person.isResolved && person.multipleMatches.length === 0) {
                    person.isResolved = true;
                    person.isExternal = true;
                    person.entityType = 1 /* externalUser */;
                }
                if (context.isGraphDistributionList && context.useGraph && person.isExternal) {
                    person.entityType = 2 /* group */;
                    person.principalType = PrincipalType_1.default.distributionList;
                }
                return person;
            }
        });
    };
    PeoplePickerDataSource.prototype.search = function (query, context) {
        if (context.useGraph && this._graphPeoplePickerHelper && this._graphPeoplePickerHelper.canUseGraph()) {
            return this._graphSearch(query, context);
        }
        else {
            return this.sharePointSearch(query, context);
        }
    };
    PeoplePickerDataSource.prototype.sharePointSearch = function (query, context) {
        var _this = this;
        // Make sure to hide the search directory button when we're already searching via SP
        if (context.onToggleGetMoreResults) {
            context.onToggleGetMoreResults(false);
        }
        return this.dataRequestor.getData({
            url: this._apiUrlHelper.build().segment('SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser').toString(),
            additionalPostData: this._constructPostBody(query, context),
            qosName: 'Search',
            parseResponse: function (responseText) {
                var _a = context.allowSharePointGroups, allowSharePointGroups = _a === void 0 ? true : _a, filterExternalUsers = context.filterExternalUsers, forceResolve = context.forceResolve;
                var response = JSON.parse(responseText);
                var peopleArray = JSON.parse(response.d.ClientPeoplePickerSearchUser);
                var entities = _this._transformData(peopleArray, filterExternalUsers);
                if (filterExternalUsers) {
                    entities = entities.filter(function (person) { return person.entityType !== 1 /* externalUser */; });
                }
                var noResults = !entities.length;
                entities = entities.filter(function (person) {
                    if (person.principalType === PrincipalType_1.default.sharePointGroup) {
                        return allowSharePointGroups;
                    }
                    else if (person.principalType === PrincipalType_1.default.securityGroup) {
                        /**
                         * If SharePoint groups are allowed, that means ALL security groups are allowed as well.
                         * If SharePoint groups aren't allowed, that means only email-enabled security groups are allowed.
                         */
                        return allowSharePointGroups || _this._isValidEmail(person.email, true /* isSecurityGroup */);
                    }
                    else {
                        return _this._isValidEmail(person.email, false /* isSecurityGroup */);
                    }
                });
                if (Killswitch_1.Killswitch.isActivated('cc7520a8-6922-4e12-81c1-179764750212', '3/29/2018', 'Disable limiting no results behavior to e-mail addresses.')) {
                    if (forceResolve && noResults) {
                        entities.push({
                            name: query,
                            userId: query,
                            email: query
                        });
                    }
                }
                else {
                    /**
                     * If the query returned no results and the query is an email, add
                     * that email as a suggestion.
                     */
                    if (entities.length === 0 &&
                        _this._isValidEmail(query, false /* isSecurityGroup */)) {
                        var rawData = {
                            Key: query,
                            IsResolved: false
                        };
                        entities.push({
                            email: query,
                            entityType: 1 /* externalUser */,
                            isResolved: true,
                            job: query,
                            name: query,
                            userId: query,
                            rawData: rawData,
                            rawPersonData: rawData,
                            isExternal: true
                        });
                    }
                }
                return entities;
            }
        });
    };
    PeoplePickerDataSource.prototype.subscribePresence = function (accountID, fnCallback) {
        var _this = this;
        try {
            this._ensureSkypePresence();
            if (!O365Shell_Shim.SkypeIntegration.isAvailable()) {
                return null; //If skypeIntegration is not available for this user, return null so that we can handle not showing presence gracefully.
            }
            var fnPresenceCallback_1 = function (type) {
                try {
                    switch (type) {
                        case 0:// Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Unknown:
                            fnCallback(0 /* Unknown */);
                            break;
                        case 1:// Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Online:
                            fnCallback(1 /* Online */);
                            break;
                        case 2:// Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Busy:
                            fnCallback(2 /* Busy */);
                            break;
                        case 3:// Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.DoNotDisturb:
                            fnCallback(3 /* DoNotDisturb */);
                            break;
                        case 4:// Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.BeRightBack:
                            fnCallback(4 /* BeRightBack */);
                            break;
                        case 5:// Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Away:
                            fnCallback(5 /* Away */);
                            break;
                        case 6:// Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Offline:
                            fnCallback(6 /* Offline */);
                            break;
                        case 8:// Microsoft.O365.SuiteApi.SkypeIntegration.SkypePresenceState.Hidden:
                            fnCallback(7 /* Hidden */);
                            break;
                        default:
                            fnCallback(0 /* Unknown */);
                            break;
                    }
                }
                catch (e) {
                    // do nothing
                }
            };
            this._skypeIntegration.TrackPresence(accountID, fnPresenceCallback_1);
            var disposable = {
                dispose: function () {
                    try {
                        _this._skypeIntegration.UntrackPresence(accountID, fnPresenceCallback_1);
                    }
                    catch (e) {
                        // do nothing
                    }
                }
            };
            return disposable;
        }
        catch (e) {
            // do nothing
        }
        return null;
    };
    PeoplePickerDataSource.prototype.sendSourceName = function () {
        return 'PeoplePickerDataSource';
    };
    PeoplePickerDataSource.prototype._constructPostBody = function (query, context) {
        var strBody = {
            queryParams: {
                'QueryString': query,
                'MaximumEntitySuggestions': context.maximumEntitySuggestions,
                'AllowEmailAddresses': context.allowEmailAddresses,
                'AllowOnlyEmailAddresses': context.allowOnlyEmailAddresses,
                'PrincipalType': context.principalType,
                'PrincipalSource': context.principalSource,
                'SharePointGroupID': context.groupID,
                'QuerySettings': context.querySettings
            }
        };
        return JSON.stringify(strBody);
    };
    PeoplePickerDataSource.prototype._ensureSkypePresence = function () {
        var _this = this;
        try {
            if (!Boolean(this._skypeIntegration)) {
                var skypeIntegration_1 = new O365Shell_Shim.SkypeIntegration();
                skypeIntegration_1.OnApiReady(function () {
                    _this._skypeIntegration = skypeIntegration_1;
                });
            }
        }
        catch (e) {
            //do nothing. Basically skype presence didn't work so degrade gracefully
        }
    };
    PeoplePickerDataSource.prototype._graphSearch = function (query, context) {
        var _this = this;
        return this._graphPeoplePickerHelper.getGraphToken().then(function (oAuthToken) {
            /**
             * If we don't have a valid auth token, the auth call failed and we should fallback to SP search.
             */
            if (!oAuthToken) {
                return _this.sharePointSearch(query, context);
            }
            /**
             * Currently, mail-enabled security groups and legacy DLs are returned the same way from Graph. The former is an allowed share target while
             * the latter is not. Our two options for dealing with this are to:
             *   1. Call resolve when a user selects a PublicDistributionList returned by Graph. If it's a legacy DL, show an error message to the user.
             *   2. Filter out all PublicDistributionList objects returned by Graph and have the user click through to search the directory for more result
             * Putting this experiment behind a killswitch, not a flight, as calling Graph via the people picker is already behind a flight.
             */
            var graphRequestUrl = "https://graph.microsoft.com/v1.0/me/people?$search=\"" + query + "\"&$top=30&$select=displayName,scoredEmailAddresses,personType,department,jobTitle,userPrincipalName";
            var shouldExperiment = FeatureOverrides_1.default.isFeatureEnabled(exports.EnablePeoplePickerGraphDLErrorExperiment);
            var isExperimentOn = false;
            if (shouldExperiment) {
                var experiment = new ABExperiment_1.ABExperiment({
                    name: "FilterPublicDistributionLists",
                    startDate: "02/15/2018"
                });
                isExperimentOn = experiment.IsExperimentOn();
            }
            if (!isExperimentOn) {
                graphRequestUrl += '&$filter=personType/subclass ne \'PublicDistributionList\'';
            }
            return _this._dataRequestor.send({
                apiName: 'Graph.PeopleSearch',
                path: graphRequestUrl,
                headers: {
                    Authorization: 'Bearer ' + oAuthToken
                },
                needsAuthorization: false
            }).then(function (data) {
                // Enable the "Search Directory" button for Graph search
                if (context.onToggleGetMoreResults) {
                    context.onToggleGetMoreResults(true);
                }
                var rawPeople = data.value;
                var people = [];
                rawPeople.forEach(function (rawPerson) {
                    var rawData = _this._transformToSharePointRawPerson(rawPerson);
                    var email = rawPerson.scoredEmailAddresses[0] ? rawPerson.scoredEmailAddresses[0].address : '';
                    var isImplicit = rawPerson.personType.subclass === 'ImplicitContact';
                    var isOrganizationUser = rawPerson.personType.subclass === 'OrganizationUser';
                    var isUnifiedGroup = rawPerson.personType.class === 'Group' && rawPerson.personType.subclass === 'UnifiedGroup';
                    var isPublicDistributionList = rawPerson.personType.subclass === 'PublicDistributionList';
                    var person = {
                        department: rawPerson.department,
                        email: email,
                        image: isImplicit ? undefined : '/_layouts/15/userphoto.aspx?size=S&accountname=' + email,
                        job: rawPerson.jobTitle || email,
                        name: rawPerson.displayName,
                        providerName: !isOrganizationUser ? undefined : 'Provider',
                        userId: rawPerson.userPrincipalName || email,
                        rawData: rawData,
                        rawPersonData: rawData,
                        isExternal: !isOrganizationUser
                    };
                    if (isOrganizationUser) {
                        person.entityType = 0 /* regularUser */;
                        person.principalType = PrincipalType_1.default.user;
                        person.isResolved = true;
                    }
                    else if (isUnifiedGroup) {
                        person.entityType = 2 /* group */;
                        person.principalType = PrincipalType_1.default.sharePointGroup;
                        person.isResolved = false; // We still want to call resolve on unified groups so that we can get member count for UI
                    }
                    else {
                        person.principalType = isPublicDistributionList ? PrincipalType_1.default.distributionList : PrincipalType_1.default.none;
                        person.entityType = rawPerson.personType.class === 'Group' ? 2 /* group */ : 1 /* externalUser */;
                        person.isResolved = false;
                        person.providerName = undefined;
                    }
                    people.push(person);
                });
                /**
                 * If the query returned no results and the query is an email, add
                 * that email as a suggestion.
                 */
                if (people.length === 0 &&
                    _this._isValidEmail(query, false /* isSecurityGroup */)) {
                    var rawData = {
                        Key: query,
                        IsResolved: false // Set as false to sharing APIs verify user.
                    };
                    people.push({
                        email: query,
                        entityType: 1 /* externalUser */,
                        isResolved: true,
                        job: query,
                        name: query,
                        userId: query,
                        rawData: rawData,
                        rawPersonData: rawData,
                        isExternal: true
                    });
                }
                return people;
            }, function (error) {
                /**
                 * Graph returning a 404 in search means that the resource to search doesn't exist. 401 means
                 * the user did not authenticate correctly. 403 means the user doesn't have permission to call Graph.
                 * Disable calls for the user and fallback to SP search in these cases.
                 */
                if (Error_1.isGraphError(error)) {
                    switch (error.status) {
                        case 401:
                        case 403:
                        case 404:
                            _this._graphPeoplePickerHelper.disableGraphCallsForPicker();
                            return _this.sharePointSearch(query, context);
                        default:
                            return null; // Handle error, probably
                    }
                }
                return null; // Handle error, probably
            });
        });
    };
    PeoplePickerDataSource.prototype._isValidEmail = function (email, isSecurityGroup) {
        /**
         * Users without an email address assigned are valid in ShareLink scenarios.
         * Security groups without an email address are not valid in ShareLink scenarios.
         */
        if (!email) {
            return !isSecurityGroup;
        }
        // Known input that causes issues (and cannot exist in a valid email address).
        if (email.indexOf(' ') > -1 || email.indexOf(';') > -1) {
            return false;
        }
        // If result has an associated email, ensure that it is valid
        if (!Killswitch_1.Killswitch.isActivated('85cfc348-6fc6-4b40-9578-1e669e8aeab1', '07/06/2018', 't-jasm, more restrictive email validation.')) {
            return EmailAddressParser_1.default.isValidEmailSyntax(email, true);
        }
        else {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
    };
    PeoplePickerDataSource.prototype._transformData = function (data, filterExternalUsers) {
        var _this = this;
        return data.map(function (rawPerson) {
            var rawEntityData = rawPerson.EntityData;
            var person = {
                name: rawPerson.DisplayText,
                email: rawEntityData.Email,
                userId: rawPerson.Key,
                job: rawEntityData.Title,
                department: rawEntityData.Department,
                phone: rawEntityData.MobilePhone,
                providerName: rawPerson.ProviderDisplayName,
                entityType: rawPerson.EntityType,
                isResolved: rawPerson.IsResolved,
                multipleMatches: rawPerson.MultipleMatches,
                rawPersonData: rawPerson,
                //set "rawData" to be the value exactly returned by the server. For list metadata, we need this exact value
                //when we write back to the list.
                rawData: rawPerson
            };
            if (person.multipleMatches.length > 0) {
                person.multipleMatches = _this._transformData(person.multipleMatches, filterExternalUsers);
                if (filterExternalUsers) {
                    person.multipleMatches = person.multipleMatches.filter(function (person) { return person.entityType !== 1 /* externalUser */; });
                }
            }
            /**
             * If this._imageAbsoluteWebURL is set, it means that url should prepend the normal imageUrlApi
             */
            var imageUrlApi = '/_layouts/15/userphoto.aspx?size=S&accountname=';
            var email = person.email;
            if (person.isResolved) {
                if (email) {
                    person.image = _this._imageAbsoluteWebUrl + imageUrlApi + email;
                }
                else {
                    person.image = null;
                }
            }
            // calculate entity type
            var serverType = rawEntityData.PrincipalType || rawPerson.EntityType;
            switch (serverType) {
                case "UNVALIDATED_EMAIL_ADDRESS":
                case "GUEST_USER":
                    person.entityType = 1 /* externalUser */;
                    person.principalType = PrincipalType_1.default.user;
                    person.isExternal = true;
                    break;
                case "SecGroup":
                case "SharePointGroup":
                case "FormsRole":
                    person.entityType = 2 /* group */;
                    if (serverType === "SharePointGroup") {
                        person.principalType = PrincipalType_1.default.sharePointGroup;
                    }
                    else {
                        person.principalType = PrincipalType_1.default.securityGroup;
                    }
                    break;
                default:
                    person.entityType = 0 /* regularUser */;
                    person.principalType = PrincipalType_1.default.user;
            }
            return person;
        });
    };
    PeoplePickerDataSource.prototype._transformToSharePointRawPerson = function (rawPerson) {
        var rawPersonSharePoint = {
            Key: rawPerson.userPrincipalName,
            IsResolved: false // Set as false to sharing APIs verify user.
        };
        return rawPersonSharePoint;
    };
    return PeoplePickerDataSource;
}(DataSource_1.default));
exports.PeoplePickerDataSource = PeoplePickerDataSource;
function isOriginalParams(params) {
    var originalParams = params;
    return !!originalParams.webAbsoluteUrl;
}



/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var SimpleUri_1 = __webpack_require__(119);
var StringHelper_1 = __webpack_require__(65);
var ItemUrlHelperBasic_1 = __webpack_require__(331);
var AddressParser_1 = __webpack_require__(69);
tslib_1.__exportStar(__webpack_require__(331), exports);
var idParamKey = 'id';
var listUrlKey = 'listurl';
/**
 * Specifies how the default site relates to the site specified in the item URL.
 */
var SiteRelation;
(function (SiteRelation) {
    /** The default site and the item exist on the same site (SPWeb) */
    SiteRelation[SiteRelation["sameSite"] = 0] = "sameSite";
    /** The default site and the item exist on a different site (SPWeb) */
    SiteRelation[SiteRelation["crossSite"] = 1] = "crossSite";
    /** Unable to determine if the default site and the item are on different sites. */
    SiteRelation[SiteRelation["unknown"] = 2] = "unknown";
})(SiteRelation = exports.SiteRelation || (exports.SiteRelation = {}));
/**
 * Backing implementation of the result from a call to ItemUrlHelper.getUrlParts.
 * This class relies heavily on lazy-initialization of values in order to improve performance.
 *
 * @class ItemUrlParts
 * @implements {IItemUrlParts}
 */
var ItemUrlParts = /** @class */ (function (_super) {
    tslib_1.__extends(ItemUrlParts, _super);
    function ItemUrlParts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ItemUrlParts.prototype, "isCrossDomain", {
        get: function () {
            return this._getIsCrossDomain();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlParts.prototype, "isCrossList", {
        get: function () {
            return this._getIsCrossList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlParts.prototype, "siteRelation", {
        get: function () {
            return this._getSiteRelation();
        },
        enumerable: true,
        configurable: true
    });
    ItemUrlParts.prototype._getIsCrossDomain = function () {
        var currentAuthority = this._getCurrentAuthority();
        var isCrossDomain = !StringHelper_1.equalsCaseInsensitive(new SimpleUri_1.default(this._getServerUrl()).authority, currentAuthority);
        this._getIsCrossDomain = function () { return isCrossDomain; };
        return isCrossDomain;
    };
    ItemUrlParts.prototype._getIsCrossList = function () {
        var fullListUrl = this._getFullListUrl();
        var defaultFullListUrl = this._getDefaultListUrl();
        var isCrossList = !StringHelper_1.equalsCaseInsensitive(fullListUrl, defaultFullListUrl);
        this._getIsCrossList = function () { return isCrossList; };
        return isCrossList;
    };
    ItemUrlParts.prototype._getSiteRelation = function () {
        var siteRelation = SiteRelation.unknown;
        if (this._getIsCrossDomain()) {
            // All cross-domain URLs are to be treated as remote sites.
            siteRelation = SiteRelation.crossSite;
        }
        else if (this.webUrl !== void 0) {
            // If webUrl is explicitly provided, then it is either the current site or it is remote.
            // No ambiguity.
            if (StringHelper_1.equalsCaseInsensitive(ItemUrlHelperBasic_1.removeDelimiter(this.defaultFullWebUrl), ItemUrlHelperBasic_1.removeDelimiter(this._getFullWebUrl()))) {
                siteRelation = SiteRelation.sameSite;
            }
            else {
                siteRelation = SiteRelation.crossSite;
            }
        }
        else {
            // If webUrl is not explicitly provided, then look at the provided child URL, either listUrl or path.
            var serverRelativeCurrentWebUrl = new SimpleUri_1.default(this.defaultFullWebUrl).path;
            // Do this check with listUrl, falling back to path.
            var serverRelativeUrl = this._getServerRelativeListUrl() ||
                this._getServerRelativePath();
            if (serverRelativeUrl !== void 0) {
                if (!ItemUrlHelperBasic_1.startsWith(ItemUrlHelperBasic_1.appendDelimiter(serverRelativeUrl), ItemUrlHelperBasic_1.appendDelimiter(serverRelativeCurrentWebUrl))) {
                    // If url doesn't contain default web URL, then it definitely is cross site
                    siteRelation = SiteRelation.crossSite;
                }
                else {
                    var itemUri = new SimpleUri_1.default(ItemUrlHelperBasic_1.removeDelimiter(serverRelativeUrl));
                    var webUri = new SimpleUri_1.default(ItemUrlHelperBasic_1.removeDelimiter(serverRelativeCurrentWebUrl));
                    if (itemUri.segments.length - 1 === webUri.segments.length || (itemUri.segments.length - 2 === webUri.segments.length &&
                        itemUri.segments[itemUri.segments.length - 2] === 'Lists')) {
                        // We know that the site contains the default web Url, but we need to check if server-relative URL contains any potential web URL
                        // Example: If default web URL is http://server/engineering and list URL is http://server/engineering/workItems, then
                        // it's safe to assume that they are on the same web.
                        // Lists is a special folder that contains lists--- one can't create a subweb named Lists. So it's safe to assume they're on the same web.
                        siteRelation = SiteRelation.sameSite;
                    }
                    else {
                        // Site is on the same domain and contains default web url, but the item URL is not one-level
                        // under the default web URL so we can't say whether it's on the same site or not.
                        // Example: If default web URL is http://server/marketing/ and list URL is
                        // http://server/marketing/sales/Forecast, we don't know if "sales" is a subsite
                        // of "marketing" or just a folder.
                        siteRelation = SiteRelation.unknown;
                    }
                }
            }
        }
        this._getSiteRelation = function () { return siteRelation; };
        return siteRelation;
    };
    ItemUrlParts.prototype._getFullWebUrl = function () {
        var fullWebUrl;
        var serverUrl = this._getServerUrl();
        var serverRelativeWebUrl = this._getServerRelativeWebUrl();
        if (serverRelativeWebUrl !== void 0) {
            fullWebUrl = "" + serverUrl + serverRelativeWebUrl;
        }
        this._getFullWebUrl = function () { return fullWebUrl; };
        return fullWebUrl;
    };
    return ItemUrlParts;
}(ItemUrlHelperBasic_1.ItemUrlPartsBasic));
exports.ItemUrlParts = ItemUrlParts;
/**
 * Component which consumes known information about SharePoint item URLs and constructs
 * normalized URLs for use in item keys and API calls.
 *
 * Different SharePoint API methods return URLs to items, lists, and sites with different formats.
 * This component can be used to extract the necessary information from these URLs and construct
 * invariant versions.
 *
 * The logic in this component codifies all the assumptions made about the format of SharePoint URLs
 * by the web layer.
 *
 * Note, URLs passed in as '/' are assumed to mean the server-relative root. These are internally treated
 * as '' but any URL which evaluates back to the server-relative root will be returned as '/'.
 *
 * @export
 * @class ItemUrlHelper
 *
 * @example
 *  import ItemUrlHelper, { resourceKey as itemUrlHelperKey } from '../dataSources/url/odb/ItemUrlHelper';
 *
 *  let itemUrlHelper = this.resources.consume(itemUrlHelperKey);
 *
 *  // Given only a webUrl and a path, extract a list URL and a server-relative URL.
 *  let {
 *      serverRelativeItemUrl,
 *      normalizedListUrl
 *  } = itemUrlHelper.getUrlParts({
 *      path: 'https://contoso.sharepoint.com/teams/finance/Shared_Documents/reports/Yearly.xlsx',
 *      webUrl: '/teams/finance'
 *  });
 *
 *  let itemKey = this._urlDataSource.getKey({
 *      [UrlQueryKeys.idParamKey]: serverRelativeItemUrl,
 *      [UrlQueryKeys.listUrlKey]: normalizedListUrl
 *  });
 */
var ItemUrlHelper = /** @class */ (function (_super) {
    tslib_1.__extends(ItemUrlHelper, _super);
    function ItemUrlHelper(params, dependencies) {
        var _this = this;
        var _a = dependencies.itemUrlPartsType, itemUrlPartsType = _a === void 0 ? ItemUrlParts : _a;
        _this = _super.call(this, {
            context: dependencies.pageContext,
            itemUrlPartsType: itemUrlPartsType
        }) || this;
        return _this;
    }
    /**
 * Extracts the available URL parts for an item given available information.
 * Any or all of the inputs may be provided, though the outputs may be undefined
 * if insufficient information is provided.
 *
 * @param {IGetUrlPartsOptions} [params={}]
 * @returns {IItemUrlParts}
 */
    ItemUrlHelper.prototype.getUrlParts = function (options) {
        return _super.prototype.getUrlParts.call(this, options);
    };
    ItemUrlHelper.prototype.getItemUrlParts = function (key) {
        var keyParts = AddressParser_1.deserializeQuery(key);
        return this.getUrlParts({
            path: keyParts[idParamKey],
            listUrl: keyParts[listUrlKey]
        });
    };
    return ItemUrlHelper;
}(ItemUrlHelperBasic_1.ItemUrlHelperBasic));
exports.ItemUrlHelper = ItemUrlHelper;



/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SimpleUri_1 = __webpack_require__(119);
var StringHelper_1 = __webpack_require__(65);
/**
 * Backing implementation of the result from a call to ItemUrlHelper.getUrlParts.
 * This class relies heavily on lazy-initialization of values in order to improve performance.
 *
 * @class ItemUrlParts
 * @implements {IItemUrlParts}
 */
var ItemUrlPartsBasic = /** @class */ (function () {
    function ItemUrlPartsBasic(params) {
        /* tslint:disable:no-use-before-declare */
        var defaultFullWebUrl = params.defaultFullWebUrl, defaultListUrl = params.defaultListUrl, _a = params.options, _b = _a === void 0 ? {} : _a, _c = _b.path, path = _c === void 0 ? undefined : _c, _d = _b.listUrl, listUrl = _d === void 0 ? undefined : _d, _e = _b.webUrl, webUrl = _e === void 0 ? undefined : _e, _f = _b.mayInferListUrl, mayInferListUrl = _f === void 0 ? false : _f;
        /* tslint:enable:no-use-before-declare */
        this.defaultFullWebUrl = convertFromRootUrl(defaultFullWebUrl);
        this.defaultListUrl = convertFromRootUrl(defaultListUrl);
        this.path = convertFromRootUrl(path);
        this.listUrl = convertFromRootUrl(listUrl);
        this.webUrl = convertFromRootUrl(webUrl);
        this.mayInferListUrl = mayInferListUrl;
    }
    Object.defineProperty(ItemUrlPartsBasic.prototype, "serverRelativeItemUrl", {
        get: function () {
            return convertToRootUrl(this._getServerRelativeItemUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "serverRelativeListUrl", {
        get: function () {
            return convertToRootUrl(this._getServerRelativeListUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "fullListUrl", {
        get: function () {
            return this._getFullListUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "normalizedListUrl", {
        get: function () {
            return convertToRootUrl(this._getNormalizedListUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "fullItemUrl", {
        get: function () {
            return this._getFullItemUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "normalizedItemUrl", {
        get: function () {
            return convertToRootUrl(this._getNormalizedItemUrl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "listRelativeItemUrl", {
        get: function () {
            return this._getListRelativeItemUrl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemUrlPartsBasic.prototype, "webRelativeItemUrl", {
        get: function () {
            return this._getWebRelativeItemUrl();
        },
        enumerable: true,
        configurable: true
    });
    ItemUrlPartsBasic.prototype._getCurrentAuthority = function () {
        var currentAuthority = new SimpleUri_1.default(this.defaultFullWebUrl).authority;
        this._getCurrentAuthority = function () { return currentAuthority; };
        return currentAuthority;
    };
    ItemUrlPartsBasic.prototype._getNormalizedItemUrl = function () {
        var normalizedItemUrl;
        var fullItemUrl = this._getFullItemUrl();
        if (fullItemUrl !== void 0) {
            var fullItemUri = new SimpleUri_1.default(fullItemUrl);
            if (StringHelper_1.equalsCaseInsensitive(fullItemUri.authority, this._getCurrentAuthority())) {
                normalizedItemUrl = fullItemUri.path;
            }
            else {
                normalizedItemUrl = fullItemUrl;
            }
        }
        this._getNormalizedItemUrl = function () { return normalizedItemUrl; };
        return normalizedItemUrl;
    };
    ItemUrlPartsBasic.prototype._getNormalizedListUrl = function () {
        var normalizedListUrl;
        var fullListUrl = this._getFullListUrl();
        var defaultListUrl = this._getDefaultListUrl();
        if (fullListUrl !== void 0 && !StringHelper_1.equalsCaseInsensitive(fullListUrl, defaultListUrl)) {
            if (StringHelper_1.equalsCaseInsensitive(new SimpleUri_1.default(fullListUrl).authority, this._getCurrentAuthority())) {
                // Remove the domain if the list is on the current domain.
                normalizedListUrl = this._getServerRelativeListUrl();
            }
            else {
                // The list on not on the current server and is not the default.
                normalizedListUrl = fullListUrl;
            }
        }
        this._getNormalizedListUrl = function () { return normalizedListUrl; };
        return normalizedListUrl;
    };
    ItemUrlPartsBasic.prototype._getServerUrl = function () {
        // One of the provided inputs should have a domain.
        // Extract the authority from that input to use as the base for all full URLs.
        var serverUrl = this.path && new SimpleUri_1.default(this.path).authority ||
            this.listUrl && new SimpleUri_1.default(this.listUrl).authority ||
            this.webUrl && new SimpleUri_1.default(this.webUrl).authority ||
            this.defaultListUrl && new SimpleUri_1.default(this.defaultListUrl).authority ||
            new SimpleUri_1.default(this.defaultFullWebUrl).authority;
        this._getServerUrl = function () { return serverUrl; };
        return serverUrl;
    };
    ItemUrlPartsBasic.prototype._getServerRelativeListUrl = function () {
        var serverRelativeListUrl;
        if (this.listUrl !== void 0) {
            serverRelativeListUrl = new SimpleUri_1.default(this.listUrl).path;
        }
        else {
            // Since no list URL was provided, we will check if we can use the default list URL
            var defaultListUrl = this._getDefaultListUrl();
            var mayInferListUrl = this.mayInferListUrl;
            if (defaultListUrl !== void 0 || mayInferListUrl) {
                var serverRelativePath = this._getServerRelativePath();
                var serverRelativeDefaultListUrl = new SimpleUri_1.default(defaultListUrl).path;
                if (serverRelativePath === void 0 && (this.webUrl === void 0 ||
                    serverRelativeDefaultListUrl && startsWith(appendDelimiter(serverRelativeDefaultListUrl), appendDelimiter(this._getServerRelativeWebUrl()))) ||
                    serverRelativeDefaultListUrl && startsWith(appendDelimiter(serverRelativePath), appendDelimiter(serverRelativeDefaultListUrl))) {
                    // If the default list URL contains the specified path (or there is no path), then the default list is the correct list.
                    serverRelativeListUrl = serverRelativeDefaultListUrl;
                }
                else if (serverRelativePath !== void 0 && (this.defaultListUrl === '' || mayInferListUrl)) {
                    // If defaultListUrl was actually the empty string, or inference is permitted,
                    // attempt to reconstruct the list URL as the next segment after the web URL within the item's path.
                    var serverRelativeWebUrl = this._getServerRelativeWebUrl();
                    if (startsWith(appendDelimiter(serverRelativePath), appendDelimiter(serverRelativeWebUrl))) {
                        // Assume that the list name is the next segment of the path after the webUrl.
                        // NOTE: This is a bug since a list can exist in folders on the web!
                        var listName = new SimpleUri_1.default(serverRelativePath).segments[new SimpleUri_1.default(serverRelativeWebUrl).segments.length];
                        serverRelativeListUrl = "" + appendDelimiter(serverRelativeWebUrl) + listName;
                    }
                }
            }
        }
        this._getServerRelativeListUrl = function () { return serverRelativeListUrl; };
        return serverRelativeListUrl;
    };
    ItemUrlPartsBasic.prototype._getFullListUrl = function () {
        var fullListUrl;
        var serverUrl = this._getServerUrl();
        var serverRelativeListUrl = this._getServerRelativeListUrl();
        if (serverRelativeListUrl !== void 0) {
            fullListUrl = "" + serverUrl + serverRelativeListUrl;
        }
        return fullListUrl;
    };
    ItemUrlPartsBasic.prototype._getFullItemUrl = function () {
        var fullItemUrl;
        var serverUrl = this._getServerUrl();
        var serverRelativeItemUrl = this._getServerRelativeItemUrl();
        if (serverRelativeItemUrl !== void 0) {
            fullItemUrl = "" + serverUrl + serverRelativeItemUrl;
        }
        this._getFullItemUrl = function () { return fullItemUrl; };
        return fullItemUrl;
    };
    ItemUrlPartsBasic.prototype._getServerRelativeWebUrl = function () {
        var serverRelativeWebUrl;
        var serverRelativeListUrl;
        if (this.webUrl !== void 0) {
            serverRelativeWebUrl = new SimpleUri_1.default(this.webUrl).path;
        }
        else if ((this.defaultListUrl || this.listUrl) && !this.mayInferListUrl &&
            (serverRelativeListUrl = this._getServerRelativeListUrl()) !== void 0) {
            // If there is list information, and the listUrl may not be inferred from this web URL (which would be recursive),
            // attempt to infer the web from the list.
            var serverRelativeListUri = new SimpleUri_1.default(serverRelativeListUrl);
            serverRelativeWebUrl = "" + serverRelativeListUri.segments.slice(0, -1).join('/');
        }
        else if (this.defaultFullWebUrl) {
            serverRelativeWebUrl = new SimpleUri_1.default(this.defaultFullWebUrl).path;
        }
        this._getServerRelativeWebUrl = function () { return serverRelativeWebUrl; };
        return serverRelativeWebUrl;
    };
    ItemUrlPartsBasic.prototype._getServerRelativePath = function () {
        var serverRelativePath;
        if (this.path !== void 0) {
            // Path is the only pointer directly to the item.
            serverRelativePath = new SimpleUri_1.default(this.path).path;
        }
        this._getServerRelativePath = function () { return serverRelativePath; };
        return serverRelativePath;
    };
    ItemUrlPartsBasic.prototype._getServerRelativeItemUrl = function () {
        var serverRelativeItemUrl;
        if (this.path) {
            serverRelativeItemUrl = this._getServerRelativePath();
        }
        else if (this.listUrl) {
            serverRelativeItemUrl = this._getServerRelativeListUrl();
        }
        else if (this.webUrl) {
            serverRelativeItemUrl = this._getServerRelativeWebUrl();
        }
        else if (this.defaultListUrl) {
            serverRelativeItemUrl = this._getServerRelativeListUrl();
        }
        else if (this.defaultFullWebUrl) {
            serverRelativeItemUrl = this._getServerRelativeWebUrl();
        }
        this._getServerRelativeItemUrl = function () { return serverRelativeItemUrl; };
        return serverRelativeItemUrl;
    };
    ItemUrlPartsBasic.prototype._getListRelativeItemUrl = function () {
        var listRelativeItemUrl;
        var serverRelativePath = this._getServerRelativePath();
        var serverRelativeListUrl = this._getServerRelativeListUrl();
        var serverRelativeListUrlStem;
        if (this.path !== void 0 &&
            serverRelativeListUrl !== void 0 &&
            startsWith(appendDelimiter(serverRelativePath), serverRelativeListUrlStem = appendDelimiter(serverRelativeListUrl))) {
            listRelativeItemUrl = serverRelativePath && serverRelativePath.substring(serverRelativeListUrlStem.length);
        }
        this._getListRelativeItemUrl = function () { return listRelativeItemUrl; };
        return listRelativeItemUrl;
    };
    ItemUrlPartsBasic.prototype._getWebRelativeItemUrl = function () {
        var webRelativeItemUrl;
        var serverRelativePath = this._getServerRelativePath();
        var serverRelativeWebUrl = this._getServerRelativeWebUrl();
        var serverRelativeWebUrlStem;
        if (this.path !== void 0 &&
            serverRelativeWebUrl !== void 0 &&
            startsWith(appendDelimiter(serverRelativePath), serverRelativeWebUrlStem = appendDelimiter(serverRelativeWebUrl))) {
            webRelativeItemUrl = serverRelativePath && serverRelativePath.substring(serverRelativeWebUrlStem.length);
        }
        this._getWebRelativeItemUrl = function () { return webRelativeItemUrl; };
        return webRelativeItemUrl;
    };
    ItemUrlPartsBasic.prototype._getDefaultListUrl = function () {
        var defaultListUrl;
        if (this.defaultListUrl !== void 0) {
            if (new SimpleUri_1.default(this.defaultListUrl).authority) {
                // If the default list supplies its own domain, use it instead of the current server domain.
                defaultListUrl = this.defaultListUrl;
            }
            else {
                // Assume the list is on the current domain.
                defaultListUrl = "" + this._getCurrentAuthority() + this.defaultListUrl;
            }
        }
        this._getDefaultListUrl = function () { return defaultListUrl; };
        return defaultListUrl;
    };
    return ItemUrlPartsBasic;
}());
exports.ItemUrlPartsBasic = ItemUrlPartsBasic;
function convertToRootUrl(url) {
    if (url === '') {
        return '/';
    }
    return url;
}
function convertFromRootUrl(url) {
    if (url === '/') {
        return '/';
    }
    return url;
}
function removeDelimiter(segment) {
    if (segment === void 0) { segment = ''; }
    if (segment[segment.length - 1] === '/') {
        return segment.substring(0, segment.length - 1);
    }
    else {
        return segment;
    }
}
exports.removeDelimiter = removeDelimiter;
function appendDelimiter(segment) {
    if (segment === void 0) { segment = ''; }
    if (segment[segment.length - 1] === '/') {
        return segment;
    }
    else {
        return segment + "/";
    }
}
exports.appendDelimiter = appendDelimiter;
function startsWith(body, query) {
    var trimmedNormalizedBody = body.toUpperCase();
    var trimmedNormalizedQuery = query && query.toUpperCase();
    return trimmedNormalizedBody.substring(0, trimmedNormalizedQuery && trimmedNormalizedQuery.length || 0) === trimmedNormalizedQuery;
}
exports.startsWith = startsWith;
/**
 * Component which consumes known information about SharePoint item URLs and constructs
 * normalized URLs for use in item keys and API calls.
 *
 * Different SharePoint API methods return URLs to items, lists, and sites with different formats.
 * This component can be used to extract the necessary information from these URLs and construct
 * invariant versions.
 *
 * The logic in this component codifies all the assumptions made about the format of SharePoint URLs
 * by the web layer.
 *
 * Note, URLs passed in as '/' are assumed to mean the server-relative root. These are internally treated
 * as '' but any URL which evaluates back to the server-relative root will be returned as '/'.
 *
 * @export
 * @class ItemUrlHelperBasic
 */
var ItemUrlHelperBasic = /** @class */ (function () {
    function ItemUrlHelperBasic(params) {
        var context = params.context, _a = params.itemUrlPartsType, itemUrlPartsType = _a === void 0 ? ItemUrlPartsBasic : _a;
        this.itemUrlPartsType = itemUrlPartsType;
        this.itemUrlContext = context;
    }
    /**
     * Extracts the available URL parts for an item given available information.
     * Any or all of the inputs may be provided, though the outputs may be undefined
     * if insufficient information is provided.
     *
     * @param {IGetUrlPartsOptions} [params={}]
     * @returns {IItemUrlParts}
     */
    ItemUrlHelperBasic.prototype.getUrlParts = function (options) {
        var _a = this.itemUrlContext, webAbsoluteUrl = _a.webAbsoluteUrl, listUrl = _a.listUrl;
        return new this.itemUrlPartsType({
            defaultFullWebUrl: webAbsoluteUrl,
            defaultListUrl: listUrl,
            options: options
        });
    };
    return ItemUrlHelperBasic;
}());
exports.ItemUrlHelperBasic = ItemUrlHelperBasic;



/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var UriEncoding_1 = __webpack_require__(45);
/**
 * Implementation of an extendable SharePoint API URL.
 * Method on this class mutate the underlying object and return the same object back to the caller.
 */
var ApiUrlBasic = /** @class */ (function () {
    function ApiUrlBasic(params) {
        this._webAbsoluteUrl = params.webAbsoluteUrl;
        this._segments = [];
        this._parameters = [];
        this._rawParameters = [];
        this._lastParameterId = 0;
    }
    ApiUrlBasic.prototype.toString = function () {
        var querySegments = [];
        if (this._parameters.length) {
            querySegments.push(this._parameters.map(function (_a) {
                var name = _a.name, serializedValue = _a.serializedValue;
                return name + "=" + serializedValue;
            }).join('&'));
        }
        querySegments.push.apply(querySegments, this._rawParameters);
        var query;
        if (querySegments.length) {
            query = "?" + querySegments.join('&');
        }
        else {
            query = '';
        }
        var _a = this._webUrl, webUrl = _a === void 0 ? this._webAbsoluteUrl : _a;
        var parts = [webUrl, '_api'].concat(this._segments);
        return "" + parts.join('/') + query;
    };
    ApiUrlBasic.prototype.segment = function (name) {
        return this._extend({
            segments: [name]
        });
    };
    ApiUrlBasic.prototype.segments = function () {
        var segments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            segments[_i] = arguments[_i];
        }
        return this._extend({
            segments: segments
        });
    };
    ApiUrlBasic.prototype.methodWithAliases = function (name, parameters) {
        var apiUrl = this;
        var methodArguments = [];
        for (var _i = 0, _a = Object.keys(parameters); _i < _a.length; _i++) {
            var parameter = _a[_i];
            var value = parameters[parameter];
            var autoParameter = apiUrl._autoParameter(value);
            apiUrl = autoParameter.apiUrl;
            methodArguments.push(parameter + "=" + autoParameter.name);
        }
        return apiUrl.segment(name + "(" + methodArguments.join(',') + ")");
    };
    ApiUrlBasic.prototype.method = function (name) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        var apiUrl = this;
        var methodArguments = [];
        for (var _a = 0, parameters_1 = parameters; _a < parameters_1.length; _a++) {
            var value = parameters_1[_a];
            var autoParameter = apiUrl._autoParameter(value);
            apiUrl = autoParameter.apiUrl;
            methodArguments.push(autoParameter.name);
        }
        return apiUrl.segment(name + "(" + methodArguments.join(',') + ")");
    };
    ApiUrlBasic.prototype.parameter = function (name, value) {
        return this._parameter(name, value);
    };
    ApiUrlBasic.prototype.parameters = function (parameters) {
        var apiUrl = this;
        for (var _i = 0, _a = Object.keys(parameters); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            var value = parameters[name_1];
            apiUrl = apiUrl.parameter(name_1, value);
        }
        return apiUrl;
    };
    ApiUrlBasic.prototype.oDataParameter = function (name, value) {
        return this.parameter(name, {
            raw: value
        });
    };
    ApiUrlBasic.prototype.rawParameter = function (queryString) {
        return this._extend({
            rawParameters: [queryString]
        });
    };
    ApiUrlBasic.prototype._autoParameter = function (value) {
        var lastParameterId = this._lastParameterId + 1;
        var name = "@a" + lastParameterId;
        var apiUrl = this._extend({
            lastParameterId: lastParameterId
        })._parameter(name, value);
        return {
            name: name,
            apiUrl: apiUrl
        };
    };
    ApiUrlBasic.prototype._parameter = function (name, value) {
        var serializedValue;
        if (isJson(value)) {
            serializedValue = UriEncoding_1.default.encodeRestUriStringToken(JSON.stringify(value.json));
        }
        else if (isGuid(value)) {
            serializedValue = "guid'" + value.guid + "'";
        }
        else if (isRaw(value)) {
            serializedValue = value.raw;
        }
        else if (typeof value === 'number') {
            serializedValue = "" + value;
        }
        else if (typeof value === 'boolean') {
            serializedValue = "" + value;
        }
        else {
            serializedValue = "'" + UriEncoding_1.default.encodeRestUriStringToken(value) + "'";
        }
        return this._extend({
            parameters: [{
                    name: name,
                    serializedValue: serializedValue
                }]
        });
    };
    ApiUrlBasic.prototype.clone = function () {
        return new ApiUrlBasic({
            webAbsoluteUrl: this._webAbsoluteUrl
        });
    };
    ApiUrlBasic.prototype._extend = function (state) {
        if (state === void 0) { state = {}; }
        var apiUrl = this.clone();
        apiUrl._webUrl = this._webUrl;
        apiUrl._lastParameterId = this._lastParameterId;
        (_a = apiUrl._parameters).push.apply(_a, this._parameters);
        (_b = apiUrl._segments).push.apply(_b, this._segments);
        (_c = apiUrl._rawParameters).push.apply(_c, this._rawParameters);
        if ('webUrl' in state) {
            apiUrl._webUrl = state.webUrl;
        }
        if ('lastParameterId' in state) {
            apiUrl._lastParameterId = state.lastParameterId;
        }
        if ('parameters' in state) {
            (_d = apiUrl._parameters).push.apply(_d, state.parameters);
        }
        if ('rawParameters' in state) {
            (_e = apiUrl._rawParameters).push.apply(_e, state.rawParameters);
        }
        if ('segments' in state) {
            (_f = apiUrl._segments).push.apply(_f, state.segments);
        }
        return apiUrl;
        var _a, _b, _c, _d, _e, _f;
    };
    return ApiUrlBasic;
}());
exports.ApiUrlBasic = ApiUrlBasic;
/**
 * Component which assists in constructing SharePoint API URLs.
 *
 * @export
 * @class ApiUrlHelperBasic
 *
 * @example
 *  let apiUrlHelper = new ApiUrlHelperBasic({ webAbsoluteUrl: webAbsoluteUrl });
 *  let apiUrl = apiUrlHelper.build()
 *      .segment('web')
 *      .method('GetList', serverRelativeListUrl)
 *      .segment('RenderListFilterData')
 *      .parameter('FieldInternalName', fieldInternalName!);
 *
 *  this._dataRequestor.getData({
 *      url: apiUrl.toString(),
 *      method: 'post',
 *      qosName: 'GetFilterData'
 *  }).then(() => {
 *      // Something.
 *  });
 */
var ApiUrlHelperBasic = /** @class */ (function () {
    function ApiUrlHelperBasic(params) {
        this._apiUrlType = /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super.call(this, { webAbsoluteUrl: params.webAbsoluteUrl }) || this;
            }
            return class_1;
        }(ApiUrlBasic));
    }
    /**
     * Starts building a new SharePoint API URL.
     *
     * @returns {IApiUrlBasic}
     */
    ApiUrlHelperBasic.prototype.build = function () {
        return new this._apiUrlType();
    };
    /**
     * Generates a GetContextWebInformation API call URL based on any input URL against
     * a SharePoint server.
     *
     * @param {string} url
     * @returns {string}
     */
    ApiUrlHelperBasic.prototype.contextInfoUrl = function (fullItemUrl) {
        var layoutsIndex = fullItemUrl.indexOf('/_layouts/');
        var contextInfoRootUrl;
        if (layoutsIndex > -1) {
            contextInfoRootUrl = fullItemUrl.substring(0, layoutsIndex);
        }
        else {
            var lastSegmentIndex = fullItemUrl.lastIndexOf('/');
            var lastExtensionIndex = fullItemUrl.lastIndexOf('.');
            if (lastExtensionIndex > lastSegmentIndex) {
                contextInfoRootUrl = fullItemUrl.substring(0, lastExtensionIndex) + "_" + fullItemUrl.substring(lastExtensionIndex + 1);
            }
            else {
                contextInfoRootUrl = fullItemUrl;
            }
        }
        return contextInfoRootUrl + "/_api/contextinfo";
    };
    return ApiUrlHelperBasic;
}());
exports.ApiUrlHelperBasic = ApiUrlHelperBasic;
function isGuid(value) {
    return !!value && typeof value === 'object' && ('guid' in value);
}
function isRaw(value) {
    return !!value && typeof value === 'object' && ('raw' in value);
}
function isJson(value) {
    return !!value && typeof value === 'object' && ('json' in value);
}



/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/Pickers.js
module.exports = __webpack_require__(334);

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_pickers_index__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_pickers_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_pickers_index__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__components_pickers_index__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__components_pickers_index__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/index.js
module.exports = __webpack_require__(336);

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Suggestions_Suggestions__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Suggestions_Suggestions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Suggestions_Suggestions__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__Suggestions_Suggestions__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__Suggestions_Suggestions__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Suggestions_SuggestionsController__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Suggestions_SuggestionsController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Suggestions_SuggestionsController__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__Suggestions_SuggestionsController__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__Suggestions_SuggestionsController__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AutoFill_BaseAutoFill__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AutoFill_BaseAutoFill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__AutoFill_BaseAutoFill__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2__AutoFill_BaseAutoFill__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_2__AutoFill_BaseAutoFill__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BasePicker__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BasePicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__BasePicker__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_3__BasePicker__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_3__BasePicker__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BasePicker_types__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BasePicker_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__BasePicker_types__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_4__BasePicker_types__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_4__BasePicker_types__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PeoplePicker_PeoplePicker__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PeoplePicker_PeoplePicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__PeoplePicker_PeoplePicker__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_5__PeoplePicker_PeoplePicker__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_5__PeoplePicker_PeoplePicker__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TagPicker_TagPicker__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TagPicker_TagPicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__TagPicker_TagPicker__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_6__TagPicker_TagPicker__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_6__TagPicker_TagPicker__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TagPicker_TagItem__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TagPicker_TagItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__TagPicker_TagItem__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_7__TagPicker_TagItem__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_7__TagPicker_TagItem__[key]; }) }(__WEBPACK_IMPORT_KEY__));










/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionActionType", function() { return SuggestionActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionsItem", function() { return SuggestionsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suggestions", function() { return Suggestions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Spinner__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Suggestions_scss__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Suggestions_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Suggestions_scss__);






var styles = __WEBPACK_IMPORTED_MODULE_5__Suggestions_scss__;
var SuggestionActionType;
(function (SuggestionActionType) {
    SuggestionActionType[SuggestionActionType["none"] = 0] = "none";
    SuggestionActionType[SuggestionActionType["forceResolve"] = 1] = "forceResolve";
    SuggestionActionType[SuggestionActionType["searchMore"] = 2] = "searchMore";
})(SuggestionActionType || (SuggestionActionType = {}));
var SuggestionsItem = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](SuggestionsItem, _super);
    function SuggestionsItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuggestionsItem.prototype.render = function () {
        var _a = this.props, suggestionModel = _a.suggestionModel, RenderSuggestion = _a.RenderSuggestion, onClick = _a.onClick, className = _a.className, onRemoveItem = _a.onRemoveItem, isSelectedOverride = _a.isSelectedOverride, removeButtonAriaLabel = _a.removeButtonAriaLabel;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-Suggestions-item', styles.suggestionsItem, (_b = {},
                _b['is-suggested ' + styles.suggestionsItemIsSuggested] = suggestionModel.selected || isSelectedOverride,
                _b), className) },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Button__["CommandButton"], { onClick: onClick, className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-Suggestions-itemButton', styles.itemButton) }, RenderSuggestion(suggestionModel.item, this.props)),
            this.props.showRemoveButton ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Button__["IconButton"], { iconProps: { iconName: 'Cancel', style: { fontSize: '12px' } }, title: removeButtonAriaLabel, ariaLabel: removeButtonAriaLabel, onClick: onRemoveItem, className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-Suggestions-closeButton', styles.closeButton) })) : (null)));
        var _b;
    };
    return SuggestionsItem;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));

var Suggestions = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Suggestions, _super);
    function Suggestions(suggestionsProps) {
        var _this = _super.call(this, suggestionsProps) || this;
        _this._forceResolveButton = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this._searchForMoreButton = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this._selectedElement = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this.SuggestionsItemOfProperType = SuggestionsItem;
        /**
         * Returns true if the event was handled, false otherwise
         */
        _this.tryHandleKeyDown = function (keyCode, currentSuggestionIndex) {
            var isEventHandled = false;
            var newSelectedActionType = null;
            var currentSelectedAction = _this.state.selectedActionType;
            var suggestionLength = _this.props.suggestions.length;
            if (keyCode === 40 /* down */) {
                switch (currentSelectedAction) {
                    case SuggestionActionType.forceResolve:
                        if (suggestionLength > 0) {
                            _this._refocusOnSuggestions(keyCode);
                            newSelectedActionType = SuggestionActionType.none;
                        }
                        else if (_this._searchForMoreButton.current) {
                            newSelectedActionType = SuggestionActionType.searchMore;
                        }
                        else {
                            newSelectedActionType = SuggestionActionType.forceResolve;
                        }
                        break;
                    case SuggestionActionType.searchMore:
                        if (_this._forceResolveButton.current) {
                            newSelectedActionType = SuggestionActionType.forceResolve;
                        }
                        else if (suggestionLength > 0) {
                            _this._refocusOnSuggestions(keyCode);
                            newSelectedActionType = SuggestionActionType.none;
                        }
                        else {
                            newSelectedActionType = SuggestionActionType.searchMore;
                        }
                        break;
                    case SuggestionActionType.none:
                        if (currentSuggestionIndex === -1 && _this._forceResolveButton.current) {
                            newSelectedActionType = SuggestionActionType.forceResolve;
                        }
                        break;
                }
            }
            else if (keyCode === 38 /* up */) {
                switch (currentSelectedAction) {
                    case SuggestionActionType.forceResolve:
                        if (_this._searchForMoreButton.current) {
                            newSelectedActionType = SuggestionActionType.searchMore;
                        }
                        else if (suggestionLength > 0) {
                            _this._refocusOnSuggestions(keyCode);
                            newSelectedActionType = SuggestionActionType.none;
                        }
                        break;
                    case SuggestionActionType.searchMore:
                        if (suggestionLength > 0) {
                            _this._refocusOnSuggestions(keyCode);
                            newSelectedActionType = SuggestionActionType.none;
                        }
                        else if (_this._forceResolveButton.current) {
                            newSelectedActionType = SuggestionActionType.forceResolve;
                        }
                        break;
                    case SuggestionActionType.none:
                        if (currentSuggestionIndex === -1 && _this._searchForMoreButton.current) {
                            newSelectedActionType = SuggestionActionType.searchMore;
                        }
                        break;
                }
            }
            if (newSelectedActionType !== null) {
                _this.setState({ selectedActionType: newSelectedActionType });
                isEventHandled = true;
            }
            return isEventHandled;
        };
        _this._getMoreResults = function () {
            if (_this.props.onGetMoreResults) {
                _this.props.onGetMoreResults();
            }
        };
        _this._forceResolve = function () {
            if (_this.props.createGenericItem) {
                _this.props.createGenericItem();
            }
        };
        _this._shouldShowForceResolve = function () {
            return _this.props.showForceResolve ? _this.props.showForceResolve() : false;
        };
        _this._onClickTypedSuggestionsItem = function (item, index) {
            return function (ev) {
                _this.props.onSuggestionClick(ev, item, index);
            };
        };
        _this._refocusOnSuggestions = function (keyCode) {
            if (typeof _this.props.refocusSuggestions === 'function') {
                _this.props.refocusSuggestions(keyCode);
            }
        };
        _this._onRemoveTypedSuggestionsItem = function (item, index) {
            return function (ev) {
                var onSuggestionRemove = _this.props.onSuggestionRemove;
                onSuggestionRemove(ev, item, index);
                ev.stopPropagation();
            };
        };
        _this.state = {
            selectedActionType: SuggestionActionType.none,
        };
        return _this;
    }
    Suggestions.prototype.componentDidMount = function () {
        this.scrollSelected();
        this.activeSelectedElement = this._selectedElement ? this._selectedElement.current : null;
    };
    Suggestions.prototype.componentDidUpdate = function () {
        // Only scroll to selected element if the selected element has changed. Otherwise do nothing.
        // This prevents some odd behavior where scrolling the active element out of view and clicking on a selected element
        // will trigger a focus event and not give the clicked element the click.
        if (this._selectedElement.current && this.activeSelectedElement !== this._selectedElement.current) {
            this.scrollSelected();
            this.activeSelectedElement = this._selectedElement.current;
        }
    };
    Suggestions.prototype.render = function () {
        var _a = this.props, forceResolveText = _a.forceResolveText, mostRecentlyUsedHeaderText = _a.mostRecentlyUsedHeaderText, searchForMoreText = _a.searchForMoreText, className = _a.className, moreSuggestionsAvailable = _a.moreSuggestionsAvailable, noResultsFoundText = _a.noResultsFoundText, suggestions = _a.suggestions, isLoading = _a.isLoading, isSearching = _a.isSearching, loadingText = _a.loadingText, onRenderNoResultFound = _a.onRenderNoResultFound, searchingText = _a.searchingText, isMostRecentlyUsedVisible = _a.isMostRecentlyUsedVisible, resultsMaximumNumber = _a.resultsMaximumNumber, resultsFooterFull = _a.resultsFooterFull, resultsFooter = _a.resultsFooter, _b = _a.isResultsFooterVisible, isResultsFooterVisible = _b === void 0 ? true : _b, suggestionsAvailableAlertText = _a.suggestionsAvailableAlertText, suggestionsHeaderText = _a.suggestionsHeaderText;
        var noResults = function () {
            return noResultsFoundText ?
                (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { role: 'alert', className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-Suggestions-none', styles.suggestionsNone) }, noResultsFoundText)) : null;
        };
        // MostRecently Used text should supercede the header text if it's there and available.
        var headerText = suggestionsHeaderText;
        if (isMostRecentlyUsedVisible && mostRecentlyUsedHeaderText) {
            headerText = mostRecentlyUsedHeaderText;
        }
        var footerTitle = undefined;
        if (isResultsFooterVisible) {
            footerTitle = (suggestions.length >= resultsMaximumNumber) ? resultsFooterFull : resultsFooter;
        }
        var hasNoSuggestions = (!suggestions || !suggestions.length) && !isLoading;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-Suggestions', className ? className : '', styles.root) },
            headerText ?
                (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-Suggestions-title', styles.suggestionsTitle) }, headerText)) : (null),
            forceResolveText && this._shouldShowForceResolve() && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Button__["CommandButton"], { componentRef: this._forceResolveButton, className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-forceResolve-button', styles.actionButton, (_c = {},
                    _c['is-selected ' + styles.buttonSelected] = this.state.selectedActionType === SuggestionActionType.forceResolve,
                    _c)), onClick: this._forceResolve }, forceResolveText)),
            isLoading && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Spinner__["Spinner"], { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-Suggestions-spinner', styles.suggestionsSpinner), label: loadingText })),
            hasNoSuggestions ?
                (onRenderNoResultFound ? onRenderNoResultFound(undefined, noResults) : noResults()) :
                this._renderSuggestions(),
            searchForMoreText && moreSuggestionsAvailable && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Button__["CommandButton"], { componentRef: this._searchForMoreButton, className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-SearchMore-button', styles.actionButton, (_d = {},
                    _d['is-selected ' + styles.buttonSelected] = this.state.selectedActionType === SuggestionActionType.searchMore,
                    _d)), iconProps: { iconName: 'Search' }, onClick: this._getMoreResults }, searchForMoreText)),
            isSearching ?
                (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Spinner__["Spinner"], { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-Suggestions-spinner', styles.suggestionsSpinner), label: searchingText })) : (null),
            footerTitle && !moreSuggestionsAvailable && !isMostRecentlyUsedVisible && !isSearching ?
                (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-Suggestions-title', styles.suggestionsTitle) }, footerTitle(this.props))) : (null),
            (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { role: 'alert', "aria-live": 'polite', className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-Suggestions-suggestionsAvailable', styles.suggestionsAvailable) }, (!isLoading && !isSearching && suggestions && suggestions.length > 0 && suggestionsAvailableAlertText) ?
                suggestionsAvailableAlertText : null))));
        var _c, _d;
    };
    Suggestions.prototype.hasSuggestedAction = function () {
        return this._searchForMoreButton.current !== undefined || this._forceResolveButton.current !== undefined;
    };
    Suggestions.prototype.hasSuggestedActionSelected = function () {
        return (this.state.selectedActionType !== SuggestionActionType.none);
    };
    Suggestions.prototype.executeSelectedAction = function () {
        switch (this.state.selectedActionType) {
            case SuggestionActionType.forceResolve:
                this._forceResolve();
                break;
            case SuggestionActionType.searchMore:
                this._getMoreResults();
                break;
        }
    };
    Suggestions.prototype.focusAboveSuggestions = function () {
        if (this._forceResolveButton.current) {
            this.setState({ selectedActionType: SuggestionActionType.forceResolve });
        }
        else if (this._searchForMoreButton.current) {
            this.setState({ selectedActionType: SuggestionActionType.searchMore });
        }
    };
    Suggestions.prototype.focusBelowSuggestions = function () {
        if (this._searchForMoreButton.current) {
            this.setState({ selectedActionType: SuggestionActionType.searchMore });
        }
        else if (this._forceResolveButton.current) {
            this.setState({ selectedActionType: SuggestionActionType.forceResolve });
        }
    };
    Suggestions.prototype.focusSearchForMoreButton = function () {
        if (this._searchForMoreButton.current) {
            this._searchForMoreButton.current.focus();
        }
    };
    // TODO get the element to scroll into view properly regardless of direction.
    Suggestions.prototype.scrollSelected = function () {
        if (this._selectedElement.current && this._selectedElement.current.scrollIntoView !== undefined) {
            this._selectedElement.current.scrollIntoView(false);
        }
    };
    Suggestions.prototype._renderSuggestions = function () {
        var _this = this;
        var _a = this.props, onRenderSuggestion = _a.onRenderSuggestion, removeSuggestionAriaLabel = _a.removeSuggestionAriaLabel, suggestionsItemClassName = _a.suggestionsItemClassName, resultsMaximumNumber = _a.resultsMaximumNumber, showRemoveButtons = _a.showRemoveButtons, suggestionsContainerAriaLabel = _a.suggestionsContainerAriaLabel;
        var suggestions = this.props.suggestions;
        var TypedSuggestionsItem = this.SuggestionsItemOfProperType;
        if (resultsMaximumNumber) {
            suggestions = suggestions.slice(0, resultsMaximumNumber);
        }
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-Suggestions-container', styles.suggestionsContainer), id: 'suggestion-list', role: 'list', "aria-label": suggestionsContainerAriaLabel }, suggestions.map(function (suggestion, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: suggestion.selected ? _this._selectedElement : '', 
                // tslint:disable-next-line:no-string-literal
                key: suggestion.item['key'] ? suggestion.item['key'] : index, id: 'sug-' + index, role: 'listitem', "aria-label": suggestion.ariaLabel },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](TypedSuggestionsItem, { id: 'sug-item' + index, suggestionModel: suggestion, RenderSuggestion: onRenderSuggestion, onClick: _this._onClickTypedSuggestionsItem(suggestion.item, index), className: suggestionsItemClassName, showRemoveButton: showRemoveButtons, removeButtonAriaLabel: removeSuggestionAriaLabel, onRemoveItem: _this._onRemoveTypedSuggestionsItem(suggestion.item, index) }));
        })));
    };
    return Suggestions;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/Spinner.js
var package = __webpack_require__(1);
module.exports = {}
for (var key in package) {
  if (package.hasOwnProperty(key)) {
    module.exports[key] = package[key];
  }
}
Object.defineProperty(module.exports, "__esModule", { value: true });

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/Suggestions/Suggestions.scss.js
module.exports = __webpack_require__(340);

/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionsItem", function() { return suggestionsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeButton", function() { return closeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionsItemIsSuggested", function() { return suggestionsItemIsSuggested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemButton", function() { return itemButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionButton", function() { return actionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonSelected", function() { return buttonSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionsTitle", function() { return suggestionsTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionsContainer", function() { return suggestionsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionsNone", function() { return suggestionsNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionsSpinner", function() { return suggestionsSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionsAvailable", function() { return suggestionsAvailable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__);
/* tslint:disable */

Object(__WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__["loadStyles"])([{ "rawString": ".root_7d6cc1a2{min-width:260px}.suggestionsItem_7d6cc1a2{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;position:relative}.suggestionsItem_7d6cc1a2:hover{background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.suggestionsItem_7d6cc1a2:hover .closeButton_7d6cc1a2{display:block}.suggestionsItem_7d6cc1a2.suggestionsItemIsSuggested_7d6cc1a2{background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.suggestionsItem_7d6cc1a2.suggestionsItemIsSuggested_7d6cc1a2:hover{background:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.suggestionsItem_7d6cc1a2.suggestionsItemIsSuggested_7d6cc1a2:hover{background:Highlight;color:HighlightText}}@media screen and (-ms-high-contrast: active){.suggestionsItem_7d6cc1a2.suggestionsItemIsSuggested_7d6cc1a2{background:Highlight;color:HighlightText;-ms-high-contrast-adjust:none}}.suggestionsItem_7d6cc1a2.suggestionsItemIsSuggested_7d6cc1a2 .closeButton_7d6cc1a2:hover{background:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.suggestionsItem_7d6cc1a2.suggestionsItemIsSuggested_7d6cc1a2 .itemButton_7d6cc1a2{color:HighlightText}}.suggestionsItem_7d6cc1a2 .closeButton_7d6cc1a2{display:none;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.suggestionsItem_7d6cc1a2 .closeButton_7d6cc1a2:hover{background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.actionButton_7d6cc1a2{background:none;background-color:transparent;border:0;cursor:pointer;margin:0;position:relative;border-top:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";height:40px;width:100%;font-size:12px}[dir='ltr'] .actionButton_7d6cc1a2{padding-left:8px}[dir='rtl'] .actionButton_7d6cc1a2{padding-right:8px}[dir='ltr'] .actionButton_7d6cc1a2{text-align:left}[dir='rtl'] .actionButton_7d6cc1a2{text-align:right}.actionButton_7d6cc1a2:hover{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";cursor:pointer}.actionButton_7d6cc1a2:focus,.actionButton_7d6cc1a2:active{background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.actionButton_7d6cc1a2 .ms-Button-icon{font-size:16px;width:25px}.actionButton_7d6cc1a2 .ms-Button-label{margin:0 4px 0 9px}html[dir='rtl'] .actionButton_7d6cc1a2 .ms-Button-label{margin:0 9px 0 4px}.buttonSelected_7d6cc1a2{background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.suggestionsTitle_7d6cc1a2{padding:0 12px;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d4" }, { "rawString": ";font-size:12px;line-height:40px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.suggestionsContainer_7d6cc1a2{overflow-y:auto;overflow-x:hidden;max-height:300px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.suggestionsNone_7d6cc1a2{text-align:center;color:" }, { "theme": "info", "defaultValue": "#666666" }, { "rawString": ";font-size:12px;line-height:30px}.suggestionsSpinner_7d6cc1a2{margin:5px 0;white-space:nowrap;line-height:20px;font-size:12px}html[dir='ltr'] .suggestionsSpinner_7d6cc1a2{padding-left:14px}html[dir='rtl'] .suggestionsSpinner_7d6cc1a2{padding-right:14px}html[dir='ltr'] .suggestionsSpinner_7d6cc1a2{text-align:left}html[dir='rtl'] .suggestionsSpinner_7d6cc1a2{text-align:right}.suggestionsSpinner_7d6cc1a2 .ms-Spinner-circle{display:inline-block;vertical-align:middle}.suggestionsSpinner_7d6cc1a2 .ms-Spinner-label{display:inline-block;margin:0px 10px 0 16px;vertical-align:middle}html[dir='rtl'] .suggestionsSpinner_7d6cc1a2 .ms-Spinner-label{margin:0px 16px 0 10px}.itemButton_7d6cc1a2.itemButton_7d6cc1a2{width:100%;height:100%;padding:7px 12px}@media screen and (-ms-high-contrast: active){.itemButton_7d6cc1a2.itemButton_7d6cc1a2{color:WindowText}}.closeButton_7d6cc1a2.closeButton_7d6cc1a2{padding:0 4px;height:auto;width:32px}@media screen and (-ms-high-contrast: active){.closeButton_7d6cc1a2.closeButton_7d6cc1a2{color:WindowText}}.closeButton_7d6cc1a2.closeButton_7d6cc1a2:hover{background:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.suggestionsAvailable_7d6cc1a2{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}\n" }]);
var root = "root_7d6cc1a2";
var suggestionsItem = "suggestionsItem_7d6cc1a2";
var closeButton = "closeButton_7d6cc1a2";
var suggestionsItemIsSuggested = "suggestionsItemIsSuggested_7d6cc1a2";
var itemButton = "itemButton_7d6cc1a2";
var actionButton = "actionButton_7d6cc1a2";
var buttonSelected = "buttonSelected_7d6cc1a2";
var suggestionsTitle = "suggestionsTitle_7d6cc1a2";
var suggestionsContainer = "suggestionsContainer_7d6cc1a2";
var suggestionsNone = "suggestionsNone_7d6cc1a2";
var suggestionsSpinner = "suggestionsSpinner_7d6cc1a2";
var suggestionsAvailable = "suggestionsAvailable_7d6cc1a2";


/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionsController", function() { return SuggestionsController; });
var SuggestionsController = /** @class */ (function () {
    function SuggestionsController() {
        var _this = this;
        this._isSuggestionModel = function (value) {
            return value.item !== undefined;
        };
        this._ensureSuggestionModel = function (suggestion) {
            if (_this._isSuggestionModel(suggestion)) {
                return suggestion;
            }
            else {
                return {
                    item: suggestion,
                    selected: false,
                    ariaLabel: suggestion.name || suggestion.primaryText
                };
            }
        };
        this.suggestions = [];
        this.currentIndex = -1;
    }
    SuggestionsController.prototype.updateSuggestions = function (newSuggestions, selectedIndex) {
        if (newSuggestions && newSuggestions.length > 0) {
            this.suggestions = this.convertSuggestionsToSuggestionItems(newSuggestions);
            this.currentIndex = 0;
            if (selectedIndex !== undefined) {
                this.suggestions[selectedIndex].selected = true;
                this.currentSuggestion = this.suggestions[selectedIndex];
            }
        }
        else {
            this.suggestions = [];
            this.currentIndex = -1;
            this.currentSuggestion = undefined;
        }
    };
    /**
     * Increments the suggestion index and gets the next suggestion in the list.
     */
    SuggestionsController.prototype.nextSuggestion = function () {
        if (this.suggestions && this.suggestions.length) {
            if (this.currentIndex < (this.suggestions.length - 1)) {
                this.setSelectedSuggestion(this.currentIndex + 1);
                return true;
            }
            else if (this.currentIndex === (this.suggestions.length - 1)) {
                this.setSelectedSuggestion(0);
                return true;
            }
        }
        return false;
    };
    /**
     * Decrements the suggestion index and gets the previous suggestion in the list.
     */
    SuggestionsController.prototype.previousSuggestion = function () {
        if (this.suggestions && this.suggestions.length) {
            if (this.currentIndex > 0) {
                this.setSelectedSuggestion(this.currentIndex - 1);
                return true;
            }
            else if (this.currentIndex === 0) {
                this.setSelectedSuggestion(this.suggestions.length - 1);
                return true;
            }
        }
        return false;
    };
    SuggestionsController.prototype.getSuggestions = function () {
        return this.suggestions;
    };
    SuggestionsController.prototype.getCurrentItem = function () {
        return this.currentSuggestion;
    };
    SuggestionsController.prototype.getSuggestionAtIndex = function (index) {
        return this.suggestions[index];
    };
    SuggestionsController.prototype.hasSelectedSuggestion = function () {
        return this.currentSuggestion ? true : false;
    };
    SuggestionsController.prototype.removeSuggestion = function (index) {
        this.suggestions.splice(index, 1);
    };
    SuggestionsController.prototype.createGenericSuggestion = function (itemToConvert) {
        var itemToAdd = this.convertSuggestionsToSuggestionItems([itemToConvert])[0];
        this.currentSuggestion = itemToAdd;
    };
    SuggestionsController.prototype.convertSuggestionsToSuggestionItems = function (suggestions) {
        return Array.isArray(suggestions)
            ? suggestions.map(this._ensureSuggestionModel)
            : [];
    };
    SuggestionsController.prototype.deselectAllSuggestions = function () {
        if (this.currentIndex > -1) {
            this.suggestions[this.currentIndex].selected = false;
            this.currentIndex = -1;
        }
    };
    SuggestionsController.prototype.setSelectedSuggestion = function (index) {
        if (index > this.suggestions.length - 1 || index < 0) {
            this.currentIndex = 0;
            this.currentSuggestion.selected = false;
            this.currentSuggestion = this.suggestions[0];
            this.currentSuggestion.selected = true;
        }
        else {
            if (this.currentIndex > -1) {
                this.suggestions[this.currentIndex].selected = false;
            }
            this.suggestions[index].selected = true;
            this.currentIndex = index;
            this.currentSuggestion = this.suggestions[index];
        }
    };
    return SuggestionsController;
}());



/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/AutoFill/BaseAutoFill.js
module.exports = __webpack_require__(343);

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Autofill_Autofill__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Autofill_Autofill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Autofill_Autofill__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__Autofill_Autofill__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__Autofill_Autofill__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Deprecated, import directly from the component folder now.



/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autofill", function() { return Autofill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAutoFill", function() { return BaseAutoFill; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);



var SELECTION_FORWARD = 'forward';
var SELECTION_BACKWARD = 'backward';
var Autofill = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Autofill, _super);
    function Autofill(props) {
        var _this = _super.call(this, props) || this;
        _this._inputElement = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this._autoFillEnabled = true;
        // Composition events are used when the character/text requires several keystrokes to be completed.
        // Some examples of this are mobile text input and langauges like Japanese or Arabic.
        // Find out more at https://developer.mozilla.org/en-US/docs/Web/Events/compositionstart
        _this._onCompositionStart = function (ev) {
            _this._autoFillEnabled = false;
        };
        // Composition events are used when the character/text requires several keystrokes to be completed.
        // Some examples of this are mobile text input and langauges like Japanese or Arabic.
        // Find out more at https://developer.mozilla.org/en-US/docs/Web/Events/compositionstart
        _this._onCompositionEnd = function (ev) {
            var inputValue = _this._getCurrentInputValue();
            _this._tryEnableAutofill(inputValue, _this.value, false, true);
            // Due to timing, this needs to be async, otherwise no text will be selected.
            _this._async.setTimeout(function () { return _this._updateValue(inputValue); }, 0);
        };
        _this._onClick = function () {
            if (_this._value && _this._value !== '' && _this._autoFillEnabled) {
                _this._autoFillEnabled = false;
            }
        };
        _this._onKeyDown = function (ev) {
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            // If the event is actively being composed, then don't alert autofill.
            // Right now typing does not have isComposing, once that has been fixed any should be removed.
            if (!ev.nativeEvent.isComposing) {
                switch (ev.which) {
                    case 8 /* backspace */:
                        _this._autoFillEnabled = false;
                        break;
                    case 37 /* left */:
                    case 39 /* right */:
                        if (_this._autoFillEnabled) {
                            _this._value = _this.state.displayValue;
                            _this._autoFillEnabled = false;
                        }
                        break;
                    default:
                        if (!_this._autoFillEnabled) {
                            if (_this.props.enableAutofillOnKeyPress.indexOf(ev.which) !== -1) {
                                _this._autoFillEnabled = true;
                            }
                        }
                        break;
                }
            }
        };
        _this._onInputChanged = function (ev) {
            var value = _this._getCurrentInputValue(ev);
            // Right now typing does not have isComposing, once that has been fixed any should be removed.
            _this._tryEnableAutofill(value, _this._value, ev.nativeEvent.isComposing);
            _this._updateValue(value);
        };
        _this._onChanged = function () {
            // Swallow this event, we don't care about it
            // We must provide it because React PropTypes marks it as required, but onInput serves the correct purpose
            return;
        };
        /**
         * Updates the current input value as well as getting a new display value.
         * @param newValue The new value from the input
         */
        _this._updateValue = function (newValue) {
            _this._value = _this.props.onInputChange ? _this.props.onInputChange(newValue) : newValue;
            _this.setState({
                displayValue: _this._getDisplayValue(_this._value, _this.props.suggestedDisplayValue)
            }, function () { return _this._notifyInputChange(_this._value); });
        };
        _this._value = props.defaultVisibleValue || '';
        _this.state = {
            displayValue: props.defaultVisibleValue || ''
        };
        return _this;
    }
    Object.defineProperty(Autofill.prototype, "cursorLocation", {
        get: function () {
            if (this._inputElement.current) {
                var inputElement = this._inputElement.current;
                if (inputElement.selectionDirection !== SELECTION_FORWARD) {
                    return inputElement.selectionEnd;
                }
                else {
                    return inputElement.selectionStart;
                }
            }
            else {
                return -1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "isValueSelected", {
        get: function () {
            return Boolean(this.inputElement && (this.inputElement.selectionStart !== this.inputElement.selectionEnd));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "selectionStart", {
        get: function () {
            return this._inputElement.current ? this._inputElement.current.selectionStart : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "selectionEnd", {
        get: function () {
            return this._inputElement.current ? this._inputElement.current.selectionEnd : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autofill.prototype, "inputElement", {
        get: function () {
            return this._inputElement.current;
        },
        enumerable: true,
        configurable: true
    });
    Autofill.prototype.componentWillReceiveProps = function (nextProps) {
        var newValue;
        if (this.props.updateValueInWillReceiveProps) {
            newValue = this.props.updateValueInWillReceiveProps();
        }
        newValue = this._getDisplayValue(newValue ? newValue : this._value, nextProps.suggestedDisplayValue);
        if (typeof newValue === 'string') {
            this.setState({ displayValue: newValue });
        }
    };
    Autofill.prototype.componentDidUpdate = function () {
        var value = this._value;
        var _a = this.props, suggestedDisplayValue = _a.suggestedDisplayValue, shouldSelectFullInputValueInComponentDidUpdate = _a.shouldSelectFullInputValueInComponentDidUpdate;
        var differenceIndex = 0;
        if (this._autoFillEnabled && value && suggestedDisplayValue && this._doesTextStartWith(suggestedDisplayValue, value)) {
            var shouldSelectFullRange = false;
            if (shouldSelectFullInputValueInComponentDidUpdate) {
                shouldSelectFullRange = shouldSelectFullInputValueInComponentDidUpdate();
            }
            if (shouldSelectFullRange && this._inputElement.current) {
                this._inputElement.current.setSelectionRange(0, suggestedDisplayValue.length, SELECTION_BACKWARD);
            }
            else {
                while (differenceIndex < value.length && value[differenceIndex].toLocaleLowerCase() === suggestedDisplayValue[differenceIndex].toLocaleLowerCase()) {
                    differenceIndex++;
                }
                if (differenceIndex > 0 && this._inputElement.current) {
                    this._inputElement.current.setSelectionRange(differenceIndex, suggestedDisplayValue.length, SELECTION_BACKWARD);
                }
            }
        }
    };
    Autofill.prototype.render = function () {
        var displayValue = this.state.displayValue;
        var nativeProps = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getNativeProps"])(this.props, __WEBPACK_IMPORTED_MODULE_2__Utilities__["inputProperties"]);
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, nativeProps, { ref: this._inputElement, value: displayValue, autoCapitalize: 'off', autoComplete: 'off', onCompositionStart: this._onCompositionStart, onCompositionEnd: this._onCompositionEnd, onChange: this._onChanged, onInput: this._onInputChanged, onKeyDown: this._onKeyDown, onClick: this.props.onClick ? this.props.onClick : this._onClick, "data-lpignore": true })));
    };
    Autofill.prototype.focus = function () {
        this._inputElement.current && this._inputElement.current.focus();
    };
    Autofill.prototype.clear = function () {
        this._autoFillEnabled = true;
        this._updateValue('');
        this._inputElement.current && this._inputElement.current.setSelectionRange(0, 0);
    };
    Autofill.prototype._getCurrentInputValue = function (ev) {
        if (ev && ev.target && ev.target.value) {
            return ev.target.value;
        }
        else if (this.inputElement && this.inputElement.value) {
            return this.inputElement.value;
        }
        else {
            return '';
        }
    };
    /**
     * Attempts to enable autofill. Whether or not autofill is enabled depends on the input value,
     * whether or not any text is selected, and only if the new input value is longer than the old input value.
     * Autofill should never be set to true if the value is composing. Once compositionEnd is called, then
     * it should be completed.
     * See https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent for more information on composition.
     * @param newValue
     * @param oldValue
     * @param isComposing if true then the text is actively being composed and it has not completed.
     * @param isComposed if the text is a composed text value.
     */
    Autofill.prototype._tryEnableAutofill = function (newValue, oldValue, isComposing, isComposed) {
        if (!isComposing
            && newValue
            && this._inputElement.current
            && this._inputElement.current.selectionStart === newValue.length
            && !this._autoFillEnabled
            && (newValue.length > oldValue.length || isComposed)) {
            this._autoFillEnabled = true;
        }
    };
    Autofill.prototype._notifyInputChange = function (newValue) {
        if (this.props.onInputValueChange) {
            this.props.onInputValueChange(newValue);
        }
    };
    /**
     * Returns a string that should be used as the display value.
     * It evaluates this based on whether or not the suggested value starts with the input value
     * and whether or not autofill is enabled.
     * @param inputValue the value that the input currently has.
     * @param suggestedDisplayValue the possible full value
     */
    Autofill.prototype._getDisplayValue = function (inputValue, suggestedDisplayValue) {
        var displayValue = inputValue;
        if (suggestedDisplayValue
            && inputValue
            && this._doesTextStartWith(suggestedDisplayValue, displayValue)
            && this._autoFillEnabled) {
            displayValue = suggestedDisplayValue;
        }
        return displayValue;
    };
    Autofill.prototype._doesTextStartWith = function (text, startWith) {
        if (!text || !startWith) {
            return false;
        }
        return text.toLocaleLowerCase().indexOf(startWith.toLocaleLowerCase()) === 0;
    };
    Autofill.defaultProps = {
        enableAutofillOnKeyPress: [40 /* down */, 38 /* up */]
    };
    return Autofill;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));

/**
 *  Legacy, @deprecated, do not use.
 */
var BaseAutoFill = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](BaseAutoFill, _super);
    function BaseAutoFill() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BaseAutoFill;
}(Autofill));



/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePicker", function() { return BasePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePickerListBelow", function() { return BasePickerListBelow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FocusZone__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FocusZone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__FocusZone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Callout__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Callout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Callout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_selection_index__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_selection_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__utilities_selection_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Suggestions_Suggestions__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Suggestions_Suggestions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Suggestions_Suggestions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Suggestions_SuggestionsController__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Suggestions_SuggestionsController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Suggestions_SuggestionsController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BasePicker_types__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BasePicker_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__BasePicker_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Autofill_index__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Autofill_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Autofill_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BasePicker_scss__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BasePicker_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__BasePicker_scss__);











var styles = __WEBPACK_IMPORTED_MODULE_10__BasePicker_scss__;
var BasePicker = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](BasePicker, _super);
    function BasePicker(basePickerProps) {
        var _this = _super.call(this, basePickerProps) || this;
        _this.root = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this.input = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this.focusZone = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this.suggestionElement = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this.SuggestionOfProperType = __WEBPACK_IMPORTED_MODULE_6__Suggestions_Suggestions__["Suggestions"];
        _this.dismissSuggestions = function (ev) {
            var selectItemFunction = function () {
                if (_this.props.onDismiss) {
                    _this.props.onDismiss(ev, _this.suggestionStore.currentSuggestion ? _this.suggestionStore.currentSuggestion.item : undefined);
                }
                if (!ev || (ev && !ev.defaultPrevented)) {
                    // Select the first suggestion if one is available when user leaves.
                    if (_this.canAddItems() && _this.suggestionStore.hasSelectedSuggestion() && _this.state.suggestedDisplayValue) {
                        _this.addItemByIndex(0);
                    }
                }
            };
            if (_this.currentPromise) {
                _this.currentPromise.then(function () { return selectItemFunction(); });
            }
            else {
                selectItemFunction();
            }
            _this.setState({ suggestionsVisible: false });
        };
        _this.refocusSuggestions = function (keyCode) {
            _this.resetFocus();
            if (_this.suggestionStore.suggestions && _this.suggestionStore.suggestions.length > 0) {
                if (keyCode === 38 /* up */) {
                    _this.suggestionStore.setSelectedSuggestion(_this.suggestionStore.suggestions.length - 1);
                }
                else if (keyCode === 40 /* down */) {
                    _this.suggestionStore.setSelectedSuggestion(0);
                }
            }
        };
        _this.onInputChange = function (value) {
            _this.updateValue(value);
            _this.setState({
                moreSuggestionsAvailable: true,
                isMostRecentlyUsedVisible: false
            });
        };
        _this.onSuggestionClick = function (ev, item, index) {
            _this.addItemByIndex(index);
            _this.setState({ suggestionsVisible: false });
        };
        _this.onSuggestionRemove = function (ev, item, index) {
            if (_this.props.onRemoveSuggestion) {
                _this.props.onRemoveSuggestion(item);
            }
            _this.suggestionStore.removeSuggestion(index);
        };
        _this.onInputFocus = function (ev) {
            // Only trigger all of the focus if this component isn't already focused.
            // For example when an item is selected or removed from the selected list it should be treated
            // as though the input is still focused.
            if (!_this.state.isFocused) {
                _this.setState({ isFocused: true });
                _this.selection.setAllSelected(false);
                if (_this.input.current && _this.input.current.value === '' && _this.props.onEmptyInputFocus) {
                    _this.onEmptyInputFocus();
                    _this.setState({
                        isMostRecentlyUsedVisible: true,
                        moreSuggestionsAvailable: false,
                        suggestionsVisible: true
                    });
                }
                else if (_this.input.current && _this.input.current.value) {
                    _this.setState({
                        isMostRecentlyUsedVisible: false,
                        suggestionsVisible: true
                    });
                }
                if (_this.props.inputProps && _this.props.inputProps.onFocus) {
                    _this.props.inputProps.onFocus(ev);
                }
            }
        };
        _this.onInputBlur = function (ev) {
            if (_this.props.inputProps && _this.props.inputProps.onBlur) {
                _this.props.inputProps.onBlur(ev);
            }
            // Only blur the entire component if an unrelated element gets focus. Otherwise treat it as though it still has focus.
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["elementContains"])(_this.root.value, ev.relatedTarget)) {
                _this.setState({ isFocused: false });
                if (_this.props.onBlur) {
                    _this.props.onBlur(ev);
                }
            }
        };
        _this.onKeyDown = function (ev) {
            var keyCode = ev.which;
            switch (keyCode) {
                case 27 /* escape */:
                    if (_this.state.suggestionsVisible) {
                        _this.setState({ suggestionsVisible: false });
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    break;
                case 9 /* tab */:
                case 13 /* enter */:
                    if (_this.suggestionElement.current && _this.suggestionElement.current.hasSuggestedActionSelected()) {
                        _this.suggestionElement.current.executeSelectedAction();
                    }
                    else if (!ev.shiftKey && _this.suggestionStore.hasSelectedSuggestion() && _this.state.suggestionsVisible) {
                        _this.completeSuggestion();
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    else {
                        _this._onValidateInput();
                    }
                    break;
                case 8 /* backspace */:
                    if (!_this.props.disabled) {
                        _this.onBackspace(ev);
                    }
                    ev.stopPropagation();
                    break;
                case 46 /* del */:
                    if (!_this.props.disabled) {
                        if (_this.input.current && ev.target === _this.input.current.inputElement && _this.state.suggestionsVisible && _this.suggestionStore.currentIndex !== -1) {
                            if (_this.props.onRemoveSuggestion) {
                                _this.props.onRemoveSuggestion(_this.suggestionStore.currentSuggestion.item);
                            }
                            _this.suggestionStore.removeSuggestion(_this.suggestionStore.currentIndex);
                            _this.forceUpdate();
                        }
                        else {
                            _this.onBackspace(ev);
                        }
                    }
                    ev.stopPropagation();
                    break;
                case 38 /* up */:
                    if (_this.input.current && ev.target === _this.input.current.inputElement && _this.state.suggestionsVisible) {
                        if (_this.suggestionElement.current && _this.suggestionElement.current.tryHandleKeyDown(keyCode, _this.suggestionStore.currentIndex)) {
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        else {
                            if (_this.suggestionElement.current && _this.suggestionElement.current.hasSuggestedAction() && _this.suggestionStore.currentIndex === 0) {
                                ev.preventDefault();
                                ev.stopPropagation();
                                _this.suggestionElement.current.focusAboveSuggestions();
                                _this.suggestionStore.deselectAllSuggestions();
                                _this.forceUpdate();
                            }
                            else {
                                if (_this.suggestionStore.previousSuggestion()) {
                                    ev.preventDefault();
                                    ev.stopPropagation();
                                    _this.onSuggestionSelect();
                                }
                            }
                        }
                    }
                    break;
                case 40 /* down */:
                    if (_this.input.current && ev.target === _this.input.current.inputElement && _this.state.suggestionsVisible) {
                        if (_this.suggestionElement.current && _this.suggestionElement.current.tryHandleKeyDown(keyCode, _this.suggestionStore.currentIndex)) {
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        else {
                            if (_this.suggestionElement.current && _this.suggestionElement.current.hasSuggestedAction() && (_this.suggestionStore.currentIndex + 1) === _this.suggestionStore.suggestions.length) {
                                ev.preventDefault();
                                ev.stopPropagation();
                                _this.suggestionElement.current.focusBelowSuggestions();
                                _this.suggestionStore.deselectAllSuggestions();
                                _this.forceUpdate();
                            }
                            else {
                                if (_this.suggestionStore.nextSuggestion()) {
                                    ev.preventDefault();
                                    ev.stopPropagation();
                                    _this.onSuggestionSelect();
                                }
                            }
                        }
                    }
                    break;
            }
        };
        _this.onItemChange = function (changedItem, index) {
            var items = _this.state.items;
            if (index >= 0) {
                var newItems = items;
                newItems[index] = changedItem;
                _this._updateSelectedItems(newItems);
            }
        };
        _this.onGetMoreResults = function () {
            _this.setState({
                isSearching: true
            }, function () {
                if (_this.props.onGetMoreResults && _this.input.current) {
                    var suggestions = _this.props.onGetMoreResults(_this.input.current.value, _this.state.items);
                    var suggestionsArray = suggestions;
                    var suggestionsPromiseLike = suggestions;
                    if (Array.isArray(suggestionsArray)) {
                        _this.updateSuggestions(suggestionsArray);
                        _this.setState({ isSearching: false });
                    }
                    else if (suggestionsPromiseLike.then) {
                        suggestionsPromiseLike.then(function (newSuggestions) {
                            _this.updateSuggestions(newSuggestions);
                            _this.setState({ isSearching: false });
                        });
                    }
                }
                else {
                    _this.setState({ isSearching: false });
                }
                if (_this.input.current) {
                    _this.input.current.focus();
                }
                _this.setState({
                    moreSuggestionsAvailable: false,
                    isResultsFooterVisible: true
                });
            });
        };
        _this.addItemByIndex = function (index) {
            _this.addItem(_this.suggestionStore.getSuggestionAtIndex(index).item);
            if (_this.input.current) {
                _this.input.current.clear();
            }
            _this.updateValue('');
        };
        _this.addItem = function (item) {
            var processedItem = _this.props.onItemSelected ? _this.props.onItemSelected(item) : item;
            if (processedItem === null) {
                return;
            }
            var processedItemObject = processedItem;
            var processedItemPromiseLike = processedItem;
            if (processedItemPromiseLike && processedItemPromiseLike.then) {
                processedItemPromiseLike.then(function (resolvedProcessedItem) {
                    var newItems = _this.state.items.concat([resolvedProcessedItem]);
                    _this._updateSelectedItems(newItems);
                });
            }
            else {
                var newItems = _this.state.items.concat([processedItemObject]);
                _this._updateSelectedItems(newItems);
            }
            _this.setState({ suggestedDisplayValue: '' });
        };
        _this.removeItem = function (item) {
            var items = _this.state.items;
            var index = items.indexOf(item);
            if (index >= 0) {
                var newItems = items.slice(0, index).concat(items.slice(index + 1));
                _this._updateSelectedItems(newItems);
            }
        };
        _this.removeItems = function (itemsToRemove) {
            var items = _this.state.items;
            var newItems = items.filter(function (item) { return itemsToRemove.indexOf(item) === -1; });
            var firstItemToRemove = itemsToRemove[0];
            var index = items.indexOf(firstItemToRemove);
            _this._updateSelectedItems(newItems, index);
        };
        _this._isFocusZoneInnerKeystroke = function (ev) {
            // If suggestions are shown const up/down keys control them, otherwise allow them through to control the focusZone.
            if (_this.state.suggestionsVisible) {
                switch (ev.which) {
                    case 38 /* up */:
                    case 40 /* down */:
                        return true;
                }
            }
            if (ev.which === 13 /* enter */) {
                return true;
            }
            return false;
        };
        var items = basePickerProps.selectedItems || basePickerProps.defaultSelectedItems || [];
        _this.suggestionStore = new __WEBPACK_IMPORTED_MODULE_7__Suggestions_SuggestionsController__["SuggestionsController"]();
        _this.selection = new __WEBPACK_IMPORTED_MODULE_5__utilities_selection_index__["Selection"]({ onSelectionChanged: function () { return _this.onSelectionChange(); } });
        _this.selection.setItems(items);
        _this.state = {
            items: items,
            suggestedDisplayValue: '',
            isMostRecentlyUsedVisible: false,
            moreSuggestionsAvailable: false,
            isFocused: false,
            isSearching: false
        };
        return _this;
    }
    Object.defineProperty(BasePicker.prototype, "items", {
        get: function () {
            return this.state.items;
        },
        enumerable: true,
        configurable: true
    });
    BasePicker.prototype.componentWillUpdate = function (newProps, newState) {
        if (newState.items && newState.items !== this.state.items) {
            this.selection.setItems(newState.items);
        }
    };
    BasePicker.prototype.componentDidMount = function () {
        this.selection.setItems(this.state.items);
        this._onResolveSuggestions = this._async.debounce(this._onResolveSuggestions, this.props.resolveDelay);
    };
    BasePicker.prototype.componentWillReceiveProps = function (newProps) {
        var _this = this;
        var newItems = newProps.selectedItems;
        if (newItems) {
            var focusIndex_1;
            // If there are less new items than old items then something was removed and we
            // should try to keep focus consistent
            if (newItems.length < this.state.items.length) {
                focusIndex_1 = this.state.items.indexOf(this.selection.getSelection()[0]);
            }
            this.setState({
                items: newProps.selectedItems
            }, function () {
                if (focusIndex_1 >= 0) {
                    _this.resetFocus(focusIndex_1);
                }
            });
        }
    };
    BasePicker.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this.loadingTimer) {
            this._async.clearTimeout(this.loadingTimer);
        }
        if (this.currentPromise) {
            this.currentPromise = undefined;
        }
    };
    BasePicker.prototype.focus = function () {
        if (this.focusZone.current) {
            this.focusZone.current.focus();
        }
    };
    BasePicker.prototype.focusInput = function () {
        if (this.input.current) {
            this.input.current.focus();
        }
    };
    BasePicker.prototype.completeSuggestion = function () {
        if (this.suggestionStore.hasSelectedSuggestion() && this.input.current) {
            this.addItem(this.suggestionStore.currentSuggestion.item);
            this.updateValue('');
            this.input.current.clear();
        }
    };
    BasePicker.prototype.render = function () {
        var suggestedDisplayValue = this.state.suggestedDisplayValue;
        var _a = this.props, className = _a.className, inputProps = _a.inputProps, disabled = _a.disabled;
        var currentIndex = this.suggestionStore.currentIndex;
        var activeDescendant = currentIndex > -1 ? 'sug-' + currentIndex : undefined;
        var selectedSuggestionAlert = undefined;
        if (this.props.enableSelectedSuggestionAlert) {
            var selectedSuggestion = currentIndex > -1 ? this.suggestionStore.getSuggestionAtIndex(this.suggestionStore.currentIndex) : undefined;
            var selectedSuggestionAlertText = selectedSuggestion ? selectedSuggestion.ariaLabel : undefined;
            selectedSuggestionAlert = (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: styles.screenReaderOnly, role: 'alert', id: 'selected-suggestion-alert', "aria-live": 'assertive' },
                selectedSuggestionAlertText,
                " "));
        }
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: this.root, className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-BasePicker', className ? className : ''), onKeyDown: this.onKeyDown },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__FocusZone__["FocusZone"], { componentRef: this.focusZone, direction: __WEBPACK_IMPORTED_MODULE_3__FocusZone__["FocusZoneDirection"].bidirectional, isInnerZoneKeystroke: this._isFocusZoneInnerKeystroke },
                selectedSuggestionAlert,
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__utilities_selection_index__["SelectionZone"], { selection: this.selection, selectionMode: __WEBPACK_IMPORTED_MODULE_5__utilities_selection_index__["SelectionMode"].multiple },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-BasePicker-text', styles.pickerText, this.state.isFocused && styles.inputFocused), role: 'list' },
                        this.renderItems(),
                        this.canAddItems() && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__Autofill_index__["Autofill"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, inputProps, { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-BasePicker-input', styles.pickerInput), ref: this.input, onFocus: this.onInputFocus, onBlur: this.onInputBlur, onInputValueChange: this.onInputChange, suggestedDisplayValue: suggestedDisplayValue, "aria-activedescendant": activeDescendant, "aria-owns": this.state.suggestionsVisible ? 'suggestion-list' : undefined, "aria-expanded": !!this.state.suggestionsVisible, "aria-haspopup": 'true', autoCapitalize: 'off', autoComplete: 'off', role: 'combobox', disabled: disabled, "aria-controls": 'selected-suggestion-alert', onInputChange: this.props.onInputChange })))))),
            this.renderSuggestions()));
    };
    BasePicker.prototype.canAddItems = function () {
        var items = this.state.items;
        var itemLimit = this.props.itemLimit;
        return itemLimit === undefined || items.length < itemLimit;
    };
    BasePicker.prototype.renderSuggestions = function () {
        var TypedSuggestion = this.SuggestionOfProperType;
        return this.state.suggestionsVisible && this.input ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Callout__["Callout"], { isBeakVisible: false, gapSpace: 5, target: this.input.current ? this.input.current.inputElement : undefined, onDismiss: this.dismissSuggestions, directionalHint: 4 /* bottomLeftEdge */, directionalHintForRTL: 6 /* bottomRightEdge */ },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](TypedSuggestion, __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({ onRenderSuggestion: this.props.onRenderSuggestionsItem, onSuggestionClick: this.onSuggestionClick, onSuggestionRemove: this.onSuggestionRemove, suggestions: this.suggestionStore.getSuggestions(), ref: this.suggestionElement, onGetMoreResults: this.onGetMoreResults, moreSuggestionsAvailable: this.state.moreSuggestionsAvailable, isLoading: this.state.suggestionsLoading, isSearching: this.state.isSearching, isMostRecentlyUsedVisible: this.state.isMostRecentlyUsedVisible, isResultsFooterVisible: this.state.isResultsFooterVisible, refocusSuggestions: this.refocusSuggestions, removeSuggestionAriaLabel: this.props.removeButtonAriaLabel }, this.props.pickerSuggestionsProps)))) : (null);
    };
    BasePicker.prototype.renderItems = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, removeButtonAriaLabel = _a.removeButtonAriaLabel;
        var onRenderItem = this.props.onRenderItem;
        var items = this.state.items;
        return items.map(function (item, index) { return onRenderItem({
            item: item,
            index: index,
            key: item.key ? item.key : index,
            selected: _this.selection.isIndexSelected(index),
            onRemoveItem: function () { return _this.removeItem(item); },
            disabled: disabled,
            onItemChange: _this.onItemChange,
            removeButtonAriaLabel: removeButtonAriaLabel
        }); });
    };
    BasePicker.prototype.resetFocus = function (index) {
        var items = this.state.items;
        if (items.length && index >= 0) {
            var newEl = this.root.current && this.root.current.querySelectorAll('[data-selection-index]')[Math.min(index, items.length - 1)];
            if (newEl && this.focusZone.current) {
                this.focusZone.current.focusElement(newEl);
            }
        }
        else if (!this.canAddItems()) {
            items[items.length - 1].selected = true;
            this.resetFocus(items.length - 1);
        }
        else {
            if (this.input.current) {
                this.input.current.focus();
            }
        }
    };
    BasePicker.prototype.onSuggestionSelect = function () {
        if (this.suggestionStore.currentSuggestion) {
            var currentValue = this.input.current ? this.input.current.value : '';
            var itemValue = this._getTextFromItem(this.suggestionStore.currentSuggestion.item, currentValue);
            this.setState({ suggestedDisplayValue: itemValue });
        }
    };
    BasePicker.prototype.onSelectionChange = function () {
        this.forceUpdate();
    };
    BasePicker.prototype.updateSuggestions = function (suggestions) {
        this.suggestionStore.updateSuggestions(suggestions, 0);
        this.forceUpdate();
    };
    BasePicker.prototype.onEmptyInputFocus = function () {
        var onEmptyInputFocus = this.props.onEmptyInputFocus;
        var suggestions = onEmptyInputFocus(this.state.items);
        this.updateSuggestionsList(suggestions);
    };
    BasePicker.prototype.updateValue = function (updatedValue) {
        this._onResolveSuggestions(updatedValue);
    };
    BasePicker.prototype.updateSuggestionsList = function (suggestions, updatedValue) {
        var _this = this;
        var suggestionsArray = suggestions;
        var suggestionsPromiseLike = suggestions;
        // Check to see if the returned value is an array, if it is then just pass it into the next function.
        // If the returned value is not an array then check to see if it's a promise or PromiseLike. If it is then resolve it asynchronously.
        if (Array.isArray(suggestionsArray)) {
            if (updatedValue !== undefined) {
                this.resolveNewValue(updatedValue, suggestionsArray);
            }
            else {
                this.suggestionStore.updateSuggestions(suggestionsArray, 0);
            }
        }
        else if (suggestionsPromiseLike && suggestionsPromiseLike.then) {
            if (!this.loadingTimer) {
                this.loadingTimer = this._async.setTimeout(function () {
                    _this.setState({
                        suggestionsLoading: true
                    });
                }, 500);
            }
            // Clear suggestions
            this.suggestionStore.updateSuggestions([]);
            if (updatedValue !== undefined) {
                this.setState({
                    suggestionsVisible: this.input.current ? (this.input.current.value !== '' && this.input.current.inputElement === document.activeElement) : false
                });
            }
            else {
                this.setState({
                    suggestionsVisible: this.input.current ? this.input.current.inputElement === document.activeElement : false
                });
            }
            // Ensure that the promise will only use the callback if it was the most recent one.
            var promise_1 = this.currentPromise = suggestionsPromiseLike;
            promise_1.then(function (newSuggestions) {
                if (promise_1 === _this.currentPromise) {
                    if (updatedValue !== undefined) {
                        _this.resolveNewValue(updatedValue, newSuggestions);
                    }
                    else {
                        _this.suggestionStore.updateSuggestions(newSuggestions);
                        _this.setState({
                            suggestionsLoading: false
                        });
                    }
                    if (_this.loadingTimer) {
                        _this._async.clearTimeout(_this.loadingTimer);
                        _this.loadingTimer = undefined;
                    }
                }
            });
        }
    };
    BasePicker.prototype.resolveNewValue = function (updatedValue, suggestions) {
        this.suggestionStore.updateSuggestions(suggestions, 0);
        var itemValue = undefined;
        if (this.suggestionStore.currentSuggestion) {
            itemValue = this._getTextFromItem(this.suggestionStore.currentSuggestion.item, updatedValue);
        }
        this.setState({
            suggestionsLoading: false,
            suggestedDisplayValue: itemValue,
            suggestionsVisible: this.input.current ? (this.input.current.value !== '' && this.input.current.inputElement === document.activeElement) : false
        });
    };
    BasePicker.prototype.onChange = function (items) {
        if (this.props.onChange) {
            this.props.onChange(items);
        }
    };
    // This is protected because we may expect the backspace key to work differently in a different kind of picker.
    // This lets the subclass override it and provide it's own onBackspace. For an example see the BasePickerListBelow
    BasePicker.prototype.onBackspace = function (ev) {
        if (this.state.items.length && !this.input.current || this.input.current && (!this.input.current.isValueSelected && this.input.current.cursorLocation === 0)) {
            if (this.selection.getSelectedCount() > 0) {
                this.removeItems(this.selection.getSelection());
            }
            else {
                this.removeItem(this.state.items[this.state.items.length - 1]);
            }
        }
    };
    /**
     * Controls what happens whenever there is an action that impacts the selected items.
     * If selectedItems is provided as a property then this will act as a controlled component and it will not update it's own state.
     */
    BasePicker.prototype._updateSelectedItems = function (items, focusIndex) {
        var _this = this;
        if (this.props.selectedItems) {
            // If the component is a controlled component then the controlling component will need
            this.onChange(items);
        }
        else {
            this.setState({ items: items }, function () {
                _this._onSelectedItemsUpdated(items, focusIndex);
            });
        }
    };
    BasePicker.prototype._onSelectedItemsUpdated = function (items, focusIndex) {
        this.resetFocus(focusIndex);
        this.onChange(items);
    };
    BasePicker.prototype._onResolveSuggestions = function (updatedValue) {
        var suggestions = this.props.onResolveSuggestions(updatedValue, this.state.items);
        if (suggestions !== null) {
            this.updateSuggestionsList(suggestions, updatedValue);
        }
    };
    BasePicker.prototype._onValidateInput = function () {
        if (this.props.onValidateInput && this.input.current && this.props.onValidateInput(this.input.current.value) !== __WEBPACK_IMPORTED_MODULE_8__BasePicker_types__["ValidationState"].invalid && this.props.createGenericItem) {
            var itemToConvert = this.props.createGenericItem(this.input.current.value, this.props.onValidateInput(this.input.current.value));
            this.suggestionStore.createGenericSuggestion(itemToConvert);
            this.completeSuggestion();
        }
    };
    BasePicker.prototype._getTextFromItem = function (item, currentValue) {
        if (this.props.getTextFromItem) {
            return this.props.getTextFromItem(item, currentValue);
        }
        else {
            return '';
        }
    };
    return BasePicker;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));

var BasePickerListBelow = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](BasePickerListBelow, _super);
    function BasePickerListBelow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasePickerListBelow.prototype.render = function () {
        var suggestedDisplayValue = this.state.suggestedDisplayValue;
        var _a = this.props, className = _a.className, inputProps = _a.inputProps, disabled = _a.disabled;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: this.root, className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-BasePicker', className ? className : ''), onKeyDown: this.onKeyDown },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__utilities_selection_index__["SelectionZone"], { selection: this.selection, selectionMode: __WEBPACK_IMPORTED_MODULE_5__utilities_selection_index__["SelectionMode"].multiple },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-BasePicker-text', styles.pickerText, this.state.isFocused && styles.inputFocused) },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__Autofill_index__["Autofill"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, inputProps, { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-BasePicker-input', styles.pickerInput), ref: this.input, onFocus: this.onInputFocus, onBlur: this.onInputBlur, onInputValueChange: this.onInputChange, suggestedDisplayValue: suggestedDisplayValue, "aria-activedescendant": this.state.suggestionsVisible ? 'sug-' + this.suggestionStore.currentIndex : undefined, "aria-owns": this.state.suggestionsVisible ? 'suggestion-list' : undefined, "aria-expanded": !!this.state.suggestionsVisible, "aria-haspopup": 'true', autoCapitalize: 'off', autoComplete: 'off', role: 'combobox', disabled: disabled }))))),
            this.renderSuggestions(),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__FocusZone__["FocusZone"], { componentRef: this.focusZone, className: 'ms-BasePicker-selectedItems', isCircularNavigation: true, direction: __WEBPACK_IMPORTED_MODULE_3__FocusZone__["FocusZoneDirection"].bidirectional, isInnerZoneKeystroke: this._isFocusZoneInnerKeystroke }, this.renderItems())));
    };
    BasePickerListBelow.prototype.onBackspace = function (ev) {
        // override the existing backspace method to not do anything because the list items appear below.
    };
    return BasePickerListBelow;
}(BasePicker));



/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/utilities/selection/index.js
module.exports = __webpack_require__(347);

/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__interfaces__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__interfaces__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__interfaces__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selection__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Selection__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__Selection__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__Selection__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SelectionZone__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SelectionZone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__SelectionZone__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2__SelectionZone__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_2__SelectionZone__[key]; }) }(__WEBPACK_IMPORT_KEY__));





/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return SELECTION_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return SelectionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return SelectionDirection; });
var SELECTION_CHANGE = 'change';
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["none"] = 0] = "none";
    SelectionMode[SelectionMode["single"] = 1] = "single";
    SelectionMode[SelectionMode["multiple"] = 2] = "multiple";
})(SelectionMode || (SelectionMode = {}));
var SelectionDirection;
(function (SelectionDirection) {
    SelectionDirection[SelectionDirection["horizontal"] = 0] = "horizontal";
    SelectionDirection[SelectionDirection["vertical"] = 1] = "vertical";
})(SelectionDirection || (SelectionDirection = {}));


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/utilities/selection/Selection.js
module.exports = __webpack_require__(350);

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__interfaces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Utilities__);


var Selection = /** @class */ (function () {
    function Selection(options) {
        if (options === void 0) { options = {}; }
        var onSelectionChanged = options.onSelectionChanged, getKey = options.getKey, _a = options.canSelectItem, canSelectItem = _a === void 0 ? function (item) { return true; } : _a, _b = options.selectionMode, selectionMode = _b === void 0 ? __WEBPACK_IMPORTED_MODULE_0__interfaces__["SelectionMode"].multiple : _b;
        this.mode = selectionMode;
        this._getKey = getKey || defaultGetKey;
        this._changeEventSuppressionCount = 0;
        this._exemptedCount = 0;
        this._anchoredIndex = 0;
        this._unselectableCount = 0;
        this._onSelectionChanged = onSelectionChanged;
        this._canSelectItem = canSelectItem;
        this._isModal = false;
        this.setItems([], true);
    }
    Selection.prototype.canSelectItem = function (item) {
        return this._canSelectItem(item);
    };
    Selection.prototype.getKey = function (item, index) {
        var key = this._getKey(item, index);
        return (typeof key === 'number' || key) ?
            "" + key :
            '';
    };
    Selection.prototype.setChangeEvents = function (isEnabled, suppressChange) {
        this._changeEventSuppressionCount += isEnabled ? -1 : 1;
        if (this._changeEventSuppressionCount === 0 && this._hasChanged) {
            this._hasChanged = false;
            if (!suppressChange) {
                this._change();
            }
        }
    };
    Selection.prototype.isModal = function () {
        return this._isModal;
    };
    Selection.prototype.setModal = function (isModal) {
        if (this._isModal !== isModal) {
            this.setChangeEvents(false);
            this._isModal = isModal;
            if (!isModal) {
                this.setAllSelected(false);
            }
            this._change();
            this.setChangeEvents(true);
        }
    };
    /**
     * Selection needs the items, call this method to set them. If the set
     * of items is the same, this will re-evaluate selection and index maps.
     * Otherwise, shouldClear should be set to true, so that selection is
     * cleared.
     */
    Selection.prototype.setItems = function (items, shouldClear) {
        if (shouldClear === void 0) { shouldClear = true; }
        var newKeyToIndexMap = {};
        var newUnselectableIndices = {};
        var hasSelectionChanged = false;
        this.setChangeEvents(false);
        // Reset the unselectable count.
        this._unselectableCount = 0;
        // Build lookup table for quick selection evaluation.
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item) {
                var key = this.getKey(item, i);
                if (key) {
                    newKeyToIndexMap[key] = i;
                }
            }
            newUnselectableIndices[i] = item && !this.canSelectItem(item);
            if (newUnselectableIndices[i]) {
                this._unselectableCount++;
            }
        }
        if (shouldClear) {
            this.setAllSelected(false);
        }
        // Check the exemption list for discrepencies.
        var newExemptedIndicies = {};
        for (var indexProperty in this._exemptedIndices) {
            if (this._exemptedIndices.hasOwnProperty(indexProperty)) {
                var index = Number(indexProperty);
                var item = this._items[index];
                var exemptKey = item ? this.getKey(item, Number(index)) : undefined;
                var newIndex = exemptKey ? newKeyToIndexMap[exemptKey] : index;
                if (newIndex === undefined) {
                    // We don't know the index of the item any more so it's either moved or removed.
                    // In this case we reset the entire selection.
                    this.setAllSelected(false);
                    break;
                }
                else {
                    // We know the new index of the item. update the existing exemption table.
                    newExemptedIndicies[newIndex] = true;
                    hasSelectionChanged = hasSelectionChanged || (newIndex !== index);
                }
            }
        }
        this._exemptedIndices = newExemptedIndicies;
        this._keyToIndexMap = newKeyToIndexMap;
        this._unselectableIndices = newUnselectableIndices;
        this._items = items || [];
        this._selectedItems = null;
        if (hasSelectionChanged) {
            this._change();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.getItems = function () {
        return this._items;
    };
    Selection.prototype.getSelection = function () {
        if (!this._selectedItems) {
            this._selectedItems = [];
            var items = this._items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (this.isIndexSelected(i)) {
                        this._selectedItems.push(items[i]);
                    }
                }
            }
        }
        return this._selectedItems;
    };
    Selection.prototype.getSelectedCount = function () {
        return this._isAllSelected ? (this._items.length - this._exemptedCount - this._unselectableCount) : (this._exemptedCount);
    };
    Selection.prototype.getSelectedIndices = function () {
        if (!this._selectedIndices) {
            this._selectedIndices = [];
            var items = this._items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (this.isIndexSelected(i)) {
                        this._selectedIndices.push(i);
                    }
                }
            }
        }
        return this._selectedIndices;
    };
    Selection.prototype.isRangeSelected = function (fromIndex, count) {
        if (count === 0) {
            return false;
        }
        var endIndex = fromIndex + count;
        for (var i = fromIndex; i < endIndex; i++) {
            if (!this.isIndexSelected(i)) {
                return false;
            }
        }
        return true;
    };
    Selection.prototype.isAllSelected = function () {
        var selectableCount = this._items.length - this._unselectableCount;
        // In single mode, we can only have a max of 1 item.
        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__interfaces__["SelectionMode"].single) {
            selectableCount = Math.min(selectableCount, 1);
        }
        return ((this.count > 0) &&
            (this._isAllSelected && this._exemptedCount === 0) ||
            (!this._isAllSelected && (this._exemptedCount === selectableCount) && selectableCount > 0));
    };
    Selection.prototype.isKeySelected = function (key) {
        var index = this._keyToIndexMap[key];
        return this.isIndexSelected(index);
    };
    Selection.prototype.isIndexSelected = function (index) {
        return !!((this.count > 0) &&
            (this._isAllSelected && !this._exemptedIndices[index] && !this._unselectableIndices[index]) ||
            (!this._isAllSelected && this._exemptedIndices[index]));
    };
    Selection.prototype.setAllSelected = function (isAllSelected) {
        if (isAllSelected && this.mode !== __WEBPACK_IMPORTED_MODULE_0__interfaces__["SelectionMode"].multiple) {
            return;
        }
        var selectableCount = this._items ? (this._items.length - this._unselectableCount) : 0;
        this.setChangeEvents(false);
        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
            this._exemptedIndices = {};
            if (isAllSelected !== this._isAllSelected || this._exemptedCount > 0) {
                this._exemptedCount = 0;
                this._isAllSelected = isAllSelected;
                this._change();
            }
            this._updateCount();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.setKeySelected = function (key, isSelected, shouldAnchor) {
        var index = this._keyToIndexMap[key];
        if (index >= 0) {
            this.setIndexSelected(index, isSelected, shouldAnchor);
        }
    };
    Selection.prototype.setIndexSelected = function (index, isSelected, shouldAnchor) {
        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__interfaces__["SelectionMode"].none) {
            return;
        }
        // Clamp the index.
        index = Math.min(Math.max(0, index), this._items.length - 1);
        // No-op on out of bounds selections.
        if (index < 0 || index >= this._items.length) {
            return;
        }
        this.setChangeEvents(false);
        var isExempt = this._exemptedIndices[index];
        var canSelect = !this._unselectableIndices[index];
        if (canSelect) {
            if (isSelected && this.mode === __WEBPACK_IMPORTED_MODULE_0__interfaces__["SelectionMode"].single) {
                // If this is single-select, the previous selection should be removed.
                this.setAllSelected(false);
            }
            // Determine if we need to remove the exemption.
            if (isExempt && ((isSelected && this._isAllSelected) ||
                (!isSelected && !this._isAllSelected))) {
                delete this._exemptedIndices[index];
                this._exemptedCount--;
            }
            // Determine if we need to add the exemption.
            if (!isExempt && ((isSelected && !this._isAllSelected) ||
                (!isSelected && this._isAllSelected))) {
                this._exemptedIndices[index] = true;
                this._exemptedCount++;
            }
            if (shouldAnchor) {
                this._anchoredIndex = index;
            }
        }
        this._updateCount();
        this.setChangeEvents(true);
    };
    Selection.prototype.selectToKey = function (key, clearSelection) {
        this.selectToIndex(this._keyToIndexMap[key], clearSelection);
    };
    Selection.prototype.selectToIndex = function (index, clearSelection) {
        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__interfaces__["SelectionMode"].none) {
            return;
        }
        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__interfaces__["SelectionMode"].single) {
            this.setIndexSelected(index, true, true);
            return;
        }
        var anchorIndex = this._anchoredIndex || 0;
        var startIndex = Math.min(index, anchorIndex);
        var endIndex = Math.max(index, anchorIndex);
        this.setChangeEvents(false);
        if (clearSelection) {
            this.setAllSelected(false);
        }
        for (; startIndex <= endIndex; startIndex++) {
            this.setIndexSelected(startIndex, true, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.toggleAllSelected = function () {
        this.setAllSelected(!this.isAllSelected());
    };
    Selection.prototype.toggleKeySelected = function (key) {
        this.setKeySelected(key, !this.isKeySelected(key), true);
    };
    Selection.prototype.toggleIndexSelected = function (index) {
        this.setIndexSelected(index, !this.isIndexSelected(index), true);
    };
    Selection.prototype.toggleRangeSelected = function (fromIndex, count) {
        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__interfaces__["SelectionMode"].none) {
            return;
        }
        var isRangeSelected = this.isRangeSelected(fromIndex, count);
        var endIndex = fromIndex + count;
        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__interfaces__["SelectionMode"].single && count > 1) {
            return;
        }
        this.setChangeEvents(false);
        for (var i = fromIndex; i < endIndex; i++) {
            this.setIndexSelected(i, !isRangeSelected, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype._updateCount = function () {
        var count = this.getSelectedCount();
        if (count !== this.count) {
            this.count = count;
            this._change();
        }
        if (!this.count) {
            this.setModal(false);
        }
    };
    Selection.prototype._change = function () {
        if (this._changeEventSuppressionCount === 0) {
            this._selectedItems = null;
            this._selectedIndices = undefined;
            __WEBPACK_IMPORTED_MODULE_1__Utilities__["EventGroup"].raise(this, __WEBPACK_IMPORTED_MODULE_0__interfaces__["SELECTION_CHANGE"]);
            if (this._onSelectionChanged) {
                this._onSelectionChanged();
            }
        }
        else {
            this._hasChanged = true;
        }
    };
    return Selection;
}());

function defaultGetKey(item, index) {
    return item && item.key ?
        item.key :
        "" + index;
}


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/utilities/selection/SelectionZone.js
module.exports = __webpack_require__(352);

/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionZone", function() { return SelectionZone; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interfaces__);




// Selection definitions:
//
// Anchor index: the point from which a range selection starts.
// Focus index: the point from which layout movement originates from.
//
// These two can differ. Tests:
//
// If you start at index 5
// Shift click to index 10
//    The focus is 10, the anchor is 5.
// If you shift click at index 0
//    The anchor remains at 5, the items between 0 and 5 are selected and everything else is cleared.
// If you click index 8
//    The anchor and focus are set to 8.
var SELECTION_DISABLED_ATTRIBUTE_NAME = 'data-selection-disabled';
var SELECTION_INDEX_ATTRIBUTE_NAME = 'data-selection-index';
var SELECTION_TOGGLE_ATTRIBUTE_NAME = 'data-selection-toggle';
var SELECTION_INVOKE_ATTRIBUTE_NAME = 'data-selection-invoke';
var SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME = 'data-selection-all-toggle';
var SELECTION_SELECT_ATTRIBUTE_NAME = 'data-selection-select';
var SelectionZone = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](SelectionZone, _super);
    function SelectionZone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._root = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        /**
         * In some cases, the consuming scenario requires to set focus on a row without having SelectionZone
         * react to the event. Note that focus events in IE <= 11 will occur asynchronously after .focus() has
         * been called on an element, so we need a flag to store the idea that we will bypass the "next"
         * focus event that occurs. This method does that.
         */
        _this.ignoreNextFocus = function () {
            _this._handleNextFocus(false);
        };
        _this._onMouseDownCapture = function (ev) {
            if (document.activeElement !== ev.target && !Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["elementContains"])(document.activeElement, ev.target)) {
                _this.ignoreNextFocus();
                return;
            }
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["elementContains"])(ev.target, _this._root.current)) {
                return;
            }
            var target = ev.target;
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                    _this.ignoreNextFocus();
                    break;
                }
                target = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getParent"])(target);
            }
        };
        /**
         * When we focus an item, for single/multi select scenarios, we should try to select it immediately
         * as long as the focus did not originate from a mouse down/touch event. For those cases, we handle them
         * specially.
         */
        _this._onFocus = function (ev) {
            var target = ev.target;
            var selection = _this.props.selection;
            var isToggleModifierPressed = _this._isCtrlPressed || _this._isMetaPressed;
            var selectionMode = _this._getSelectionMode();
            if (_this._shouldHandleFocus && selectionMode !== __WEBPACK_IMPORTED_MODULE_3__interfaces__["SelectionMode"].none) {
                var isToggle = _this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME);
                var itemRoot = _this._findItemRoot(target);
                if (!isToggle && itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    if (isToggleModifierPressed) {
                        // set anchor only.
                        selection.setIndexSelected(index, selection.isIndexSelected(index), true);
                        if (_this.props.enterModalOnTouch && _this._isTouch && selection.setModal) {
                            selection.setModal(true);
                            _this._setIsTouch(false);
                        }
                    }
                    else {
                        if (_this.props.isSelectedOnFocus) {
                            _this._onItemSurfaceClick(ev, index);
                        }
                    }
                }
            }
            _this._handleNextFocus(false);
        };
        _this._onMouseDown = function (ev) {
            _this._updateModifiers(ev);
            var target = ev.target;
            var itemRoot = _this._findItemRoot(target);
            // No-op if selection is disabled
            if (_this._isSelectionDisabled(target)) {
                return;
            }
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
                    break;
                }
                else if (itemRoot) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if ((target === itemRoot || _this._shouldAutoSelect(target))
                        && !_this._isShiftPressed && !_this._isCtrlPressed) {
                        _this._onInvokeMouseDown(ev, _this._getItemIndex(itemRoot));
                        break;
                    }
                    else if (_this.props.disableAutoSelectOnInputElements &&
                        (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT')) {
                        return;
                    }
                }
                target = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getParent"])(target);
            }
        };
        _this._onTouchStartCapture = function (ev) {
            _this._setIsTouch(true);
        };
        _this._onClick = function (ev) {
            _this._updateModifiers(ev);
            var target = ev.target;
            var itemRoot = _this._findItemRoot(target);
            // No-op if selection is disabled
            if (_this._isSelectionDisabled(target)) {
                return;
            }
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
                    _this._onToggleAllClick(ev);
                    break;
                }
                else if (itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        if (_this._isShiftPressed) {
                            _this._onItemSurfaceClick(ev, index);
                        }
                        else {
                            _this._onToggleClick(ev, index);
                        }
                        break;
                    }
                    else if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        _this._onInvokeClick(ev, index);
                        break;
                    }
                    else if (target === itemRoot) {
                        _this._onItemSurfaceClick(ev, index);
                        break;
                    }
                    else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT') {
                        return;
                    }
                }
                target = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getParent"])(target);
            }
        };
        _this._onContextMenu = function (ev) {
            var target = ev.target;
            var _a = _this.props, onItemContextMenu = _a.onItemContextMenu, selection = _a.selection;
            if (onItemContextMenu) {
                var itemRoot = _this._findItemRoot(target);
                if (itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    var skipPreventDefault = onItemContextMenu(selection.getItems()[index], index, ev.nativeEvent);
                    // In order to keep back compat, if the value here is undefined, then we should still
                    // call preventDefault(). Only in the case where true is explicitly returned should
                    // the call be skipped.
                    if (!skipPreventDefault) {
                        ev.preventDefault();
                    }
                }
            }
        };
        /**
         * In multi selection, if you double click within an item's root (but not within the invoke element or input elements),
         * we should execute the invoke handler.
         */
        _this._onDoubleClick = function (ev) {
            var target = ev.target;
            if (_this._isSelectionDisabled(target)) {
                return;
            }
            var onItemInvoked = _this.props.onItemInvoked;
            var itemRoot = _this._findItemRoot(target);
            var selectionMode = _this._getSelectionMode();
            if (itemRoot && onItemInvoked && selectionMode !== __WEBPACK_IMPORTED_MODULE_3__interfaces__["SelectionMode"].none && !_this._isInputElement(target)) {
                var index = _this._getItemIndex(itemRoot);
                while (target !== _this._root.current) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME) ||
                        _this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if (target === itemRoot) {
                        _this._onInvokeClick(ev, index);
                        break;
                    }
                    target = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getParent"])(target);
                }
                target = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getParent"])(target);
            }
        };
        _this._onKeyDownCapture = function (ev) {
            _this._updateModifiers(ev);
            _this._handleNextFocus(true);
        };
        _this._onKeyDown = function (ev) {
            _this._updateModifiers(ev);
            var target = ev.target;
            if (_this._isSelectionDisabled(target)) {
                return;
            }
            var selection = _this.props.selection;
            var isSelectAllKey = ev.which === 65 /* a */ && (_this._isCtrlPressed || _this._isMetaPressed);
            var isClearSelectionKey = ev.which === 27 /* escape */;
            // Ignore key downs from input elements.
            if (_this._isInputElement(target)) {
                // A key was pressed while an item in this zone was focused.
                return;
            }
            var selectionMode = _this._getSelectionMode();
            // If ctrl-a is pressed, select all (if all are not already selected.)
            if (isSelectAllKey && selectionMode === __WEBPACK_IMPORTED_MODULE_3__interfaces__["SelectionMode"].multiple && !selection.isAllSelected()) {
                selection.setAllSelected(true);
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            // If escape is pressed, clear selection (if any are selected.)
            if (isClearSelectionKey && selection.getSelectedCount() > 0) {
                selection.setAllSelected(false);
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            var itemRoot = _this._findItemRoot(target);
            // If a key was pressed within an item, we should treat "enters" as invokes and "space" as toggle
            if (itemRoot) {
                var index = _this._getItemIndex(itemRoot);
                while (target !== _this._root.current) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        // For toggle elements, assuming they are rendered as buttons, they will generate a click event,
                        // so we can no-op for any keydowns in this case.
                        break;
                    }
                    else if (_this._shouldAutoSelect(target)) {
                        // If the event went to an element which should trigger auto-select, select it and then let
                        // the default behavior kick in.
                        _this._onInvokeMouseDown(ev, index);
                        break;
                    }
                    else if ((ev.which === 13 /* enter */ || ev.which === 32 /* space */) &&
                        (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT')) {
                        return false;
                    }
                    else if (target === itemRoot) {
                        if (ev.which === 13 /* enter */) {
                            _this._onInvokeClick(ev, index);
                            ev.preventDefault();
                            return;
                        }
                        else if (ev.which === 32 /* space */) {
                            _this._onToggleClick(ev, index);
                            ev.preventDefault();
                            return;
                        }
                        break;
                    }
                    target = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getParent"])(target);
                }
            }
        };
        return _this;
    }
    SelectionZone.prototype.componentDidMount = function () {
        var win = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getWindow"])(this._root.current);
        var scrollElement = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["findScrollableParent"])(this._root.current);
        // Track the latest modifier keys globally.
        this._events.on(win, 'keydown, keyup', this._updateModifiers, true);
        this._events.on(scrollElement, 'click', this._tryClearOnEmptyClick);
        this._events.on(document.body, 'touchstart', this._onTouchStartCapture, true);
        this._events.on(document.body, 'touchend', this._onTouchStartCapture, true);
    };
    SelectionZone.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({ className: 'ms-SelectionZone', ref: this._root, onKeyDown: this._onKeyDown, onMouseDown: this._onMouseDown, onKeyDownCapture: this._onKeyDownCapture, onClick: this._onClick, role: 'presentation', onDoubleClick: this._onDoubleClick, onContextMenu: this._onContextMenu }, {
            onMouseDownCapture: this._onMouseDownCapture,
            onFocusCapture: this._onFocus
        }), this.props.children));
    };
    SelectionZone.prototype._isSelectionDisabled = function (target) {
        while (target !== this._root.current) {
            if (this._hasAttribute(target, SELECTION_DISABLED_ATTRIBUTE_NAME)) {
                return true;
            }
            target = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getParent"])(target);
        }
        return false;
    };
    SelectionZone.prototype._onToggleAllClick = function (ev) {
        var selection = this.props.selection;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === __WEBPACK_IMPORTED_MODULE_3__interfaces__["SelectionMode"].multiple) {
            selection.toggleAllSelected();
            ev.stopPropagation();
            ev.preventDefault();
        }
    };
    SelectionZone.prototype._onToggleClick = function (ev, index) {
        var selection = this.props.selection;
        var selectionMode = this._getSelectionMode();
        selection.setChangeEvents(false);
        if (this.props.enterModalOnTouch && this._isTouch && !selection.isIndexSelected(index) && selection.setModal) {
            selection.setModal(true);
            this._setIsTouch(false);
        }
        if (selectionMode === __WEBPACK_IMPORTED_MODULE_3__interfaces__["SelectionMode"].multiple) {
            selection.toggleIndexSelected(index);
        }
        else if (selectionMode === __WEBPACK_IMPORTED_MODULE_3__interfaces__["SelectionMode"].single) {
            var isSelected = selection.isIndexSelected(index);
            selection.setAllSelected(false);
            selection.setIndexSelected(index, !isSelected, true);
        }
        else {
            selection.setChangeEvents(true);
            return;
        }
        selection.setChangeEvents(true);
        ev.stopPropagation();
        // NOTE: ev.preventDefault is not called for toggle clicks, because this will kill the browser behavior
        // for checkboxes if you use a checkbox for the toggle.
    };
    SelectionZone.prototype._onInvokeClick = function (ev, index) {
        var _a = this.props, selection = _a.selection, onItemInvoked = _a.onItemInvoked;
        if (onItemInvoked) {
            onItemInvoked(selection.getItems()[index], index, ev.nativeEvent);
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    SelectionZone.prototype._onItemSurfaceClick = function (ev, index) {
        var selection = this.props.selection;
        var isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === __WEBPACK_IMPORTED_MODULE_3__interfaces__["SelectionMode"].multiple) {
            if (this._isShiftPressed) {
                selection.selectToIndex(index, !isToggleModifierPressed);
            }
            else if (isToggleModifierPressed) {
                selection.toggleIndexSelected(index);
            }
            else {
                this._clearAndSelectIndex(index);
            }
        }
        else if (selectionMode === __WEBPACK_IMPORTED_MODULE_3__interfaces__["SelectionMode"].single) {
            this._clearAndSelectIndex(index);
        }
    };
    SelectionZone.prototype._onInvokeMouseDown = function (ev, index) {
        var selection = this.props.selection;
        // Only do work if item is not selected.
        if (selection.isIndexSelected(index)) {
            return;
        }
        this._clearAndSelectIndex(index);
    };
    SelectionZone.prototype._tryClearOnEmptyClick = function (ev) {
        if (!this.props.selectionPreservedOnEmptyClick &&
            this._isNonHandledClick(ev.target)) {
            this.props.selection.setAllSelected(false);
        }
    };
    SelectionZone.prototype._clearAndSelectIndex = function (index) {
        var selection = this.props.selection;
        var isAlreadySingleSelected = selection.getSelectedCount() === 1 && selection.isIndexSelected(index);
        if (!isAlreadySingleSelected) {
            selection.setChangeEvents(false);
            selection.setAllSelected(false);
            selection.setIndexSelected(index, true, true);
            if (this.props.enterModalOnTouch && this._isTouch && selection.setModal) {
                selection.setModal(true);
                this._setIsTouch(false);
            }
            selection.setChangeEvents(true);
        }
    };
    /**
     * We need to track the modifier key states so that when focus events occur, which do not contain
     * modifier states in the Event object, we know how to behave.
     */
    SelectionZone.prototype._updateModifiers = function (ev) {
        this._isShiftPressed = ev.shiftKey;
        this._isCtrlPressed = ev.ctrlKey;
        this._isMetaPressed = ev.metaKey;
    };
    SelectionZone.prototype._findItemRoot = function (target) {
        var selection = this.props.selection;
        while (target !== this._root.current) {
            var indexValue = target.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME);
            var index = Number(indexValue);
            if (indexValue !== null && index >= 0 && index < selection.getItems().length) {
                break;
            }
            target = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getParent"])(target);
        }
        if (target === this._root.current) {
            return undefined;
        }
        return target;
    };
    SelectionZone.prototype._getItemIndex = function (itemRoot) {
        return Number(itemRoot.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME));
    };
    SelectionZone.prototype._shouldAutoSelect = function (element) {
        return this._hasAttribute(element, SELECTION_SELECT_ATTRIBUTE_NAME);
    };
    SelectionZone.prototype._hasAttribute = function (element, attributeName) {
        var isToggle = false;
        while (!isToggle && element !== this._root.current) {
            isToggle = element.getAttribute(attributeName) === 'true';
            element = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getParent"])(element);
        }
        return isToggle;
    };
    SelectionZone.prototype._isInputElement = function (element) {
        return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
    };
    SelectionZone.prototype._isNonHandledClick = function (element) {
        var doc = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getDocument"])();
        if (doc && element) {
            while (element && element !== doc.documentElement) {
                if (Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["isElementTabbable"])(element)) {
                    return false;
                }
                element = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getParent"])(element);
            }
        }
        return true;
    };
    SelectionZone.prototype._handleNextFocus = function (handleFocus) {
        var _this = this;
        if (this._shouldHandleFocusTimeoutId) {
            this._async.clearTimeout(this._shouldHandleFocusTimeoutId);
            this._shouldHandleFocusTimeoutId = undefined;
        }
        this._shouldHandleFocus = handleFocus;
        if (handleFocus) {
            this._async.setTimeout(function () {
                _this._shouldHandleFocus = false;
            }, 100);
        }
    };
    SelectionZone.prototype._setIsTouch = function (isTouch) {
        var _this = this;
        if (this._isTouchTimeoutId) {
            this._async.clearTimeout(this._isTouchTimeoutId);
            this._isTouchTimeoutId = undefined;
        }
        this._isTouch = true;
        if (isTouch) {
            this._async.setTimeout(function () {
                _this._isTouch = false;
            }, 300);
        }
    };
    SelectionZone.prototype._getSelectionMode = function () {
        var selection = this.props.selection;
        var _a = this.props.selectionMode, selectionMode = _a === void 0 ? selection ? selection.mode : __WEBPACK_IMPORTED_MODULE_3__interfaces__["SelectionMode"].none : _a;
        return selectionMode;
    };
    SelectionZone.defaultProps = {
        isMultiSelectEnabled: true,
        isSelectedOnFocus: true,
        selectionMode: __WEBPACK_IMPORTED_MODULE_3__interfaces__["SelectionMode"].multiple
    };
    return SelectionZone;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationState", function() { return ValidationState; });
var ValidationState;
(function (ValidationState) {
    ValidationState[ValidationState["valid"] = 0] = "valid";
    ValidationState[ValidationState["warning"] = 1] = "warning";
    ValidationState[ValidationState["invalid"] = 2] = "invalid";
})(ValidationState || (ValidationState = {}));


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Autofill/index.js
module.exports = __webpack_require__(355);

/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Autofill__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Autofill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Autofill__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__Autofill__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__Autofill__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/BasePicker.scss.js
module.exports = __webpack_require__(357);

/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickerText", function() { return pickerText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputFocused", function() { return inputFocused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickerInput", function() { return pickerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenReaderOnly", function() { return screenReaderOnly; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__);
/* tslint:disable */

Object(__WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__["loadStyles"])([{ "rawString": ".pickerText_4fe0caaf{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid " }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";min-width:180px;min-height:30px}.pickerText_4fe0caaf:hover{border-color:" }, { "theme": "inputBorderHovered", "defaultValue": "#212121" }, { "rawString": "}.pickerText_4fe0caaf.inputFocused_4fe0caaf{border-color:" }, { "theme": "inputFocusBorderAlt", "defaultValue": "#0078d4" }, { "rawString": "}.pickerInput_4fe0caaf{height:34px;border:none;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;outline:none;padding:0 6px 0px}.screenReaderOnly_4fe0caaf{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}\n" }]);
var pickerText = "pickerText_4fe0caaf";
var inputFocused = "inputFocused_4fe0caaf";
var pickerInput = "pickerInput_4fe0caaf";
var screenReaderOnly = "screenReaderOnly_4fe0caaf";


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/PeoplePicker/PeoplePicker.js
module.exports = __webpack_require__(359);

/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePeoplePicker", function() { return BasePeoplePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListPeoplePicker", function() { return MemberListPeoplePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalPeoplePicker", function() { return NormalPeoplePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompactPeoplePicker", function() { return CompactPeoplePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPeoplePicker", function() { return ListPeoplePicker; });
/* harmony export (immutable) */ __webpack_exports__["createGenericItem"] = createGenericItem;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BasePicker__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BasePicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__BasePicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BasePicker_types__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BasePicker_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__BasePicker_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PeoplePickerItems_SelectedItemDefault__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PeoplePickerItems_SelectedItemDefault___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__PeoplePickerItems_SelectedItemDefault__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PeoplePickerItems_SuggestionItemDefault__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PeoplePickerItems_SuggestionItemDefault___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__PeoplePickerItems_SuggestionItemDefault__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PeoplePicker_scss__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PeoplePicker_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__PeoplePicker_scss__);

/* tslint:disable */

/* tslint:enable */






var BasePeoplePicker = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](BasePeoplePicker, _super);
    function BasePeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BasePeoplePicker;
}(__WEBPACK_IMPORTED_MODULE_3__BasePicker__["BasePicker"]));

var MemberListPeoplePicker = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](MemberListPeoplePicker, _super);
    function MemberListPeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MemberListPeoplePicker;
}(__WEBPACK_IMPORTED_MODULE_3__BasePicker__["BasePickerListBelow"]));

/**
 * Standard People Picker.
 */
var NormalPeoplePicker = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](NormalPeoplePicker, _super);
    function NormalPeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalPeoplePicker.defaultProps = {
        onRenderItem: function (props) { return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__PeoplePickerItems_SelectedItemDefault__["SelectedItemDefault"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, props)); },
        onRenderSuggestionsItem: function (props, itemProps) { return Object(__WEBPACK_IMPORTED_MODULE_6__PeoplePickerItems_SuggestionItemDefault__["SuggestionItemNormal"])(__WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, props), __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, itemProps)); },
        createGenericItem: createGenericItem
    };
    return NormalPeoplePicker;
}(BasePeoplePicker));

/**
* Compact layout. It uses small personas when displaying search results.
*/
var CompactPeoplePicker = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](CompactPeoplePicker, _super);
    function CompactPeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompactPeoplePicker.defaultProps = {
        onRenderItem: function (props) { return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__PeoplePickerItems_SelectedItemDefault__["SelectedItemDefault"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, props)); },
        onRenderSuggestionsItem: function (props, itemProps) { return Object(__WEBPACK_IMPORTED_MODULE_6__PeoplePickerItems_SuggestionItemDefault__["SuggestionItemSmall"])(__WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, props), __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, itemProps)); },
        createGenericItem: createGenericItem
    };
    return CompactPeoplePicker;
}(BasePeoplePicker));

/**
 * MemberList layout. The selected people show up below the search box.
 */
var ListPeoplePicker = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](ListPeoplePicker, _super);
    function ListPeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListPeoplePicker.defaultProps = {
        onRenderItem: function (props) { return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__PeoplePickerItems_SelectedItemDefault__["SelectedItemDefault"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, props)); },
        onRenderSuggestionsItem: function (props, itemProps) { return Object(__WEBPACK_IMPORTED_MODULE_6__PeoplePickerItems_SuggestionItemDefault__["SuggestionItemNormal"])(__WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, props), __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, itemProps)); },
        createGenericItem: createGenericItem
    };
    return ListPeoplePicker;
}(MemberListPeoplePicker));

function createGenericItem(name, currentValidationState, allowPhoneInitials) {
    var personaToConvert = {
        key: name,
        primaryText: name,
        imageInitials: '!',
        ValidationState: currentValidationState
    };
    if (currentValidationState !== __WEBPACK_IMPORTED_MODULE_4__BasePicker_types__["ValidationState"].warning) {
        personaToConvert.imageInitials = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getInitials"])(name, Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getRTL"])(), allowPhoneInitials);
    }
    return personaToConvert;
}


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/PeoplePicker/PeoplePickerItems/SelectedItemDefault.js
module.exports = __webpack_require__(361);

/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedItemDefault", function() { return SelectedItemDefault; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Persona__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Persona___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Persona__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BasePicker_types__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BasePicker_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__BasePicker_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PickerItemsDefault_scss__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PickerItemsDefault_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__PickerItemsDefault_scss__);

/* tslint:disable */

/* tslint:enable */





var styles = __WEBPACK_IMPORTED_MODULE_6__PickerItemsDefault_scss__;
var SelectedItemDefault = function (peoplePickerItemProps) {
    var item = peoplePickerItemProps.item, onRemoveItem = peoplePickerItemProps.onRemoveItem, index = peoplePickerItemProps.index, selected = peoplePickerItemProps.selected, removeButtonAriaLabel = peoplePickerItemProps.removeButtonAriaLabel;
    var itemId = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getId"])();
    var onClickIconButton = function (removeItem) {
        return function () {
            if (removeItem) {
                removeItem();
            }
        };
    };
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-PickerPersona-container', styles.personaContainer, (_a = {}, _a['is-selected ' + styles.personaContainerIsSelected] = selected, _a), (_b = {}, _b['is-invalid ' + styles.validationError] = item.ValidationState === __WEBPACK_IMPORTED_MODULE_4__BasePicker_types__["ValidationState"].warning, _b)), "data-is-focusable": true, "data-is-sub-focuszone": true, "data-selection-index": index, role: 'listitem', "aria-labelledby": 'selectedItemPersona-' + itemId },
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-PickerItem-content', styles.itemContent), id: 'selectedItemPersona-' + itemId },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Persona__["Persona"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, item, { presence: item.presence !== undefined ? item.presence : __WEBPACK_IMPORTED_MODULE_3__Persona__["PersonaPresence"].none, size: __WEBPACK_IMPORTED_MODULE_3__Persona__["PersonaSize"].size28 }))),
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Button__["IconButton"], { onClick: onClickIconButton(onRemoveItem), iconProps: { iconName: 'Cancel', style: { fontSize: '12px' } }, className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-PickerItem-removeButton', styles.removeButton), ariaLabel: removeButtonAriaLabel })));
    var _a, _b;
};


/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Persona_index__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Persona_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Persona_index__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__components_Persona_index__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__components_Persona_index__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/index.js
module.exports = __webpack_require__(364);

/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Persona__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Persona___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Persona__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__Persona__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__Persona__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Persona_base__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Persona_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Persona_base__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__Persona_base__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__Persona_base__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Persona_types__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Persona_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Persona_types__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2__Persona_types__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_2__Persona_types__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PersonaCoin_index__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PersonaCoin_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__PersonaCoin_index__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_3__PersonaCoin_index__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_3__PersonaCoin_index__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PersonaConsts__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PersonaConsts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__PersonaConsts__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_4__PersonaConsts__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_4__PersonaConsts__[key]; }) }(__WEBPACK_IMPORT_KEY__));







/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/Persona.js
module.exports = __webpack_require__(366);

/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Persona", function() { return Persona; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Persona_base__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Persona_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Persona_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Persona_styles__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Persona_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Persona_styles__);



/**
 * Personas are used for rendering an individual's avatar, presence and details.
 * They are used within the PeoplePicker components.
 */
var Persona = Object(__WEBPACK_IMPORTED_MODULE_0__Utilities__["styled"])(__WEBPACK_IMPORTED_MODULE_1__Persona_base__["PersonaBase"], __WEBPACK_IMPORTED_MODULE_2__Persona_styles__["getStyles"]);


/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaBase", function() { return PersonaBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tooltip__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PersonaCoin_PersonaCoin__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PersonaCoin_PersonaCoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__PersonaCoin_PersonaCoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Persona_types__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Persona_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Persona_types__);






var getClassNames = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["classNamesFunction"])();
/**
 * Persona with no default styles.
 * [Use the `getStyles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Styling)
 */
var PersonaBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](PersonaBase, _super);
    function PersonaBase(props) {
        var _this = _super.call(this, props) || this;
        _this._renderElement = function (text, className, render) {
            return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: className }, render
                ? render(_this.props)
                : text && (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Tooltip__["TooltipHost"], { content: text, overflowMode: __WEBPACK_IMPORTED_MODULE_3__Tooltip__["TooltipOverflowMode"].Parent, directionalHint: 0 /* topLeftEdge */ }, text))));
        };
        _this._warnDeprecations({ 'primaryText': 'text' });
        return _this;
    }
    PersonaBase.prototype.render = function () {
        var _a = this.props, hidePersonaDetails = _a.hidePersonaDetails, onRenderOptionalText = _a.onRenderOptionalText, onRenderPrimaryText = _a.onRenderPrimaryText, onRenderSecondaryText = _a.onRenderSecondaryText, onRenderTertiaryText = _a.onRenderTertiaryText;
        var size = this.props.size;
        // These properties are to be explicitly passed into PersonaCoin because they are the only props directly used
        var _b = this.props, allowPhoneInitials = _b.allowPhoneInitials, className = _b.className, coinProps = _b.coinProps, showUnknownPersonaCoin = _b.showUnknownPersonaCoin, coinSize = _b.coinSize, getStyles = _b.getStyles, imageAlt = _b.imageAlt, imageInitials = _b.imageInitials, imageShouldFadeIn = _b.imageShouldFadeIn, imageShouldStartVisible = _b.imageShouldStartVisible, imageUrl = _b.imageUrl, initialsColor = _b.initialsColor, onPhotoLoadingStateChange = _b.onPhotoLoadingStateChange, onRenderCoin = _b.onRenderCoin, onRenderInitials = _b.onRenderInitials, presence = _b.presence, showSecondaryText = _b.showSecondaryText, theme = _b.theme;
        var personaCoinProps = {
            allowPhoneInitials: allowPhoneInitials,
            coinProps: coinProps,
            showUnknownPersonaCoin: showUnknownPersonaCoin,
            coinSize: coinSize,
            imageAlt: imageAlt,
            imageInitials: imageInitials,
            imageShouldFadeIn: imageShouldFadeIn,
            imageShouldStartVisible: imageShouldStartVisible,
            imageUrl: imageUrl,
            initialsColor: initialsColor,
            onPhotoLoadingStateChange: onPhotoLoadingStateChange,
            onRenderCoin: onRenderCoin,
            onRenderInitials: onRenderInitials,
            presence: presence,
            size: size,
            text: this._getText()
        };
        var classNames = getClassNames(getStyles, {
            theme: theme,
            className: className,
            showSecondaryText: showSecondaryText,
            presence: presence,
            size: size,
        });
        var divProps = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getNativeProps"])(this.props, __WEBPACK_IMPORTED_MODULE_2__Utilities__["divProperties"]);
        var personaDetails = (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.details },
            this._renderElement(this._getText(), classNames.primaryText, onRenderPrimaryText),
            this._renderElement(this.props.secondaryText, classNames.secondaryText, onRenderSecondaryText),
            this._renderElement(this.props.tertiaryText, classNames.tertiaryText, onRenderTertiaryText),
            this._renderElement(this.props.optionalText, classNames.optionalText, onRenderOptionalText),
            this.props.children));
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, divProps, { className: classNames.root, style: coinSize ? { height: coinSize, minWidth: coinSize } : undefined }),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__PersonaCoin_PersonaCoin__["PersonaCoin"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, personaCoinProps)),
            (!hidePersonaDetails || (size === __WEBPACK_IMPORTED_MODULE_5__Persona_types__["PersonaSize"].size10 || size === __WEBPACK_IMPORTED_MODULE_5__Persona_types__["PersonaSize"].tiny)) && personaDetails));
    };
    /**
     * Deprecation helper for getting text.
     */
    PersonaBase.prototype._getText = function () {
        return this.props.text || this.props.primaryText || '';
    };
    PersonaBase.defaultProps = {
        size: __WEBPACK_IMPORTED_MODULE_5__Persona_types__["PersonaSize"].size48,
        presence: __WEBPACK_IMPORTED_MODULE_5__Persona_types__["PersonaPresence"].none,
        imageAlt: ''
    };
    PersonaBase = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["customizable"])('Persona', ['theme'])
    ], PersonaBase);
    return PersonaBase;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/Tooltip.js
module.exports = __webpack_require__(369);

/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Tooltip_index__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Tooltip_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Tooltip_index__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__components_Tooltip_index__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__components_Tooltip_index__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Tooltip/index.js
module.exports = __webpack_require__(371);

/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tooltip__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Tooltip__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__Tooltip__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__Tooltip__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tooltip_base__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tooltip_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Tooltip_base__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__Tooltip_base__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__Tooltip_base__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tooltip_types__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tooltip_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Tooltip_types__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2__Tooltip_types__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_2__Tooltip_types__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TooltipHost__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TooltipHost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TooltipHost__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_3__TooltipHost__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_3__TooltipHost__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TooltipHost_types__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TooltipHost_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__TooltipHost_types__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_4__TooltipHost_types__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_4__TooltipHost_types__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_DirectionalHint__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_DirectionalHint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__common_DirectionalHint__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_5__common_DirectionalHint__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_5__common_DirectionalHint__[key]; }) }(__WEBPACK_IMPORT_KEY__));








/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Tooltip/TooltipHost.js
module.exports = __webpack_require__(133);

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/common/DirectionalHint.js
var package = __webpack_require__(1);
module.exports = {}
for (var key in package) {
  if (package.hasOwnProperty(key)) {
    module.exports[key] = package[key];
  }
}
Object.defineProperty(module.exports, "__esModule", { value: true });

/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaCoin", function() { return PersonaCoin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonaCoin_base__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonaCoin_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PersonaCoin_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PersonaCoin_styles__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PersonaCoin_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__PersonaCoin_styles__);



/**
 * PersonaCoin is used to render an individual's avatar and presence.
 */
var PersonaCoin = Object(__WEBPACK_IMPORTED_MODULE_0__Utilities__["styled"])(__WEBPACK_IMPORTED_MODULE_1__PersonaCoin_base__["PersonaCoinBase"], __WEBPACK_IMPORTED_MODULE_2__PersonaCoin_styles__["getStyles"]);


/***/ }),
/* 375 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaCoinBase", function() { return PersonaCoinBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Styling__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Styling__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PersonaPresence_index__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PersonaPresence_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__PersonaPresence_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Image__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Persona_types__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Persona_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Persona_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PersonaInitialsColor__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PersonaInitialsColor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__PersonaInitialsColor__);









var getClassNames = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["classNamesFunction"])();
var SIZE_TO_PIXELS = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].tiny] = 20,
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].extraExtraSmall] = 24,
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].extraSmall] = 28,
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].small] = 40,
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].regular] = 48,
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].large] = 72,
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].extraLarge] = 100,
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].size24] = 24,
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].size28] = 28,
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].size10] = 20,
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].size32] = 32,
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].size40] = 40,
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].size48] = 48,
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].size72] = 72,
    _a[__WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].size100] = 100,
    _a);
/**
 * PersonaCoin with no default styles.
 * [Use the `getStyles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Styling)
 */
var PersonaCoinBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](PersonaCoinBase, _super);
    function PersonaCoinBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onRenderCoin = function (props) {
            var _a = _this.props, coinSize = _a.coinSize, getStyles = _a.getStyles, imageUrl = _a.imageUrl, imageAlt = _a.imageAlt, imageShouldFadeIn = _a.imageShouldFadeIn, imageShouldStartVisible = _a.imageShouldStartVisible, theme = _a.theme, showUnknownPersonaCoin = _a.showUnknownPersonaCoin;
            var size = _this.props.size;
            var classNames = getClassNames(getStyles, {
                theme: theme,
                size: size,
                showUnknownPersonaCoin: showUnknownPersonaCoin
            });
            return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Image__["Image"], { className: classNames.image, imageFit: __WEBPACK_IMPORTED_MODULE_6__Image__["ImageFit"].cover, src: imageUrl, width: coinSize || SIZE_TO_PIXELS[size], height: coinSize || SIZE_TO_PIXELS[size], alt: imageAlt, shouldFadeIn: imageShouldFadeIn, shouldStartVisible: imageShouldStartVisible, onLoadingStateChange: _this._onPhotoLoadingStateChange }));
        };
        _this._onRenderInitials = function (props) {
            var imageInitials = props.imageInitials;
            var allowPhoneInitials = props.allowPhoneInitials, showUnknownPersonaCoin = props.showUnknownPersonaCoin;
            if (showUnknownPersonaCoin) {
                return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Icon__["Icon"], { iconName: 'Help' });
            }
            var isRTL = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getRTL"])();
            imageInitials = imageInitials || Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getInitials"])(_this._getText(), isRTL, allowPhoneInitials);
            return (imageInitials !== ''
                ? __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null, imageInitials)
                : __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Icon__["Icon"], { iconName: 'Contact' }));
        };
        _this._onPhotoLoadingStateChange = function (loadState) {
            _this.setState({
                isImageLoaded: loadState === __WEBPACK_IMPORTED_MODULE_6__Image__["ImageLoadState"].loaded,
                isImageError: loadState === __WEBPACK_IMPORTED_MODULE_6__Image__["ImageLoadState"].error
            });
            _this.props.onPhotoLoadingStateChange && _this.props.onPhotoLoadingStateChange(loadState);
        };
        _this._warnDeprecations({ 'primaryText': 'text' });
        _this.state = {
            isImageLoaded: false,
            isImageError: false
        };
        return _this;
    }
    PersonaCoinBase.prototype.render = function () {
        var _a = this.props, className = _a.className, coinProps = _a.coinProps, showUnknownPersonaCoin = _a.showUnknownPersonaCoin, coinSize = _a.coinSize, getStyles = _a.getStyles, imageUrl = _a.imageUrl, _b = _a.onRenderCoin, onRenderCoin = _b === void 0 ? this._onRenderCoin : _b, _c = _a.onRenderInitials, onRenderInitials = _c === void 0 ? this._onRenderInitials : _c, presence = _a.presence, theme = _a.theme;
        var size = this.props.size;
        var divProps = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getNativeProps"])(this.props, __WEBPACK_IMPORTED_MODULE_2__Utilities__["divProperties"]);
        var coinSizeStyle = coinSize ? { width: coinSize, height: coinSize } : undefined;
        var personaPresenceProps = {
            coinSize: coinSize,
            presence: presence,
            size: size,
            theme: theme,
        };
        // Use getStyles from props, or fall back to getStyles from styles file.
        var classNames = getClassNames(getStyles, {
            theme: theme,
            className: (coinProps && coinProps.className) ? coinProps.className : className,
            size: size,
            showUnknownPersonaCoin: showUnknownPersonaCoin,
        });
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, divProps, { className: classNames.coin }),
            (size !== __WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].size10 && size !== __WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].tiny)
                ? (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, coinProps, { className: classNames.imageArea, style: coinSizeStyle }),
                    !this.state.isImageLoaded &&
                        (!imageUrl || this.state.isImageError) &&
                        (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_3__Styling__["mergeStyles"])(classNames.initials, !showUnknownPersonaCoin && { backgroundColor: Object(__WEBPACK_IMPORTED_MODULE_8__PersonaInitialsColor__["initialsColorPropToColorCode"])(this.props) }), style: coinSizeStyle, "aria-hidden": 'true' }, onRenderInitials(this.props, this._onRenderInitials))),
                    onRenderCoin(this.props, this._onRenderCoin),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__PersonaPresence_index__["PersonaPresence"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, personaPresenceProps)))) : ( // Otherwise, render just PersonaPresence.
            this.props.presence
                ? __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__PersonaPresence_index__["PersonaPresence"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, personaPresenceProps))
                : // Just render Contact Icon if there isn't a Presence prop.
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Icon__["Icon"], { iconName: 'Contact', className: classNames.size10WithoutPresenceIcon })),
            this.props.children));
    };
    /**
     * Deprecation helper for getting text.
     */
    PersonaCoinBase.prototype._getText = function () {
        return this.props.text || this.props.primaryText || '';
    };
    PersonaCoinBase.defaultProps = {
        size: __WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaSize"].size48,
        presence: __WEBPACK_IMPORTED_MODULE_7__Persona_types__["PersonaPresence"].none,
        imageAlt: '',
    };
    PersonaCoinBase = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["customizable"])('PersonaCoin', ['theme'])
    ], PersonaCoinBase);
    return PersonaCoinBase;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));

var _a;


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/PersonaPresence/index.js
module.exports = __webpack_require__(377);

/***/ }),
/* 377 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PersonaPresence__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PersonaPresence___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PersonaPresence__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__PersonaPresence__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__PersonaPresence__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonaPresence_base__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonaPresence_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PersonaPresence_base__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__PersonaPresence_base__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__PersonaPresence_base__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/PersonaPresence/PersonaPresence.js
module.exports = __webpack_require__(379);

/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaPresence", function() { return PersonaPresence; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonaPresence_base__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonaPresence_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PersonaPresence_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PersonaPresence_styles__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PersonaPresence_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__PersonaPresence_styles__);



/**
 * PersonaPresence is used to render an individual's presence.
 */
var PersonaPresence = Object(__WEBPACK_IMPORTED_MODULE_0__Utilities__["styled"])(__WEBPACK_IMPORTED_MODULE_1__PersonaPresence_base__["PersonaPresenceBase"], __WEBPACK_IMPORTED_MODULE_2__PersonaPresence_styles__["getStyles"]);


/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaPresenceBase", function() { return PersonaPresenceBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Persona_types__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Persona_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Persona_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PersonaConsts__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PersonaConsts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__PersonaConsts__);






var coinSizeFontScaleFactor = 6;
var coinSizePresenceScaleFactor = 3;
var presenceMaxSize = 40;
var presenceFontMaxSize = 20;
var getClassNames = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["classNamesFunction"])();
/**
 * PersonaPresence with no default styles.
 * [Use the `getStyles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Styling)
 */
var PersonaPresenceBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](PersonaPresenceBase, _super);
    function PersonaPresenceBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onRenderIcon = function (className, styles) { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Icon__["Icon"], { className: className, iconName: _this._determineIcon(), style: styles })); };
        _this._determineIcon = function () {
            var presence = _this.props.presence;
            if (presence !== __WEBPACK_IMPORTED_MODULE_4__Persona_types__["PersonaPresence"].none) {
                var userPresence = __WEBPACK_IMPORTED_MODULE_4__Persona_types__["PersonaPresence"][presence];
                switch (userPresence) {
                    case 'online':
                        userPresence = 'SkypeCheck';
                        break;
                    case 'away':
                        userPresence = 'SkypeClock';
                        break;
                    case 'dnd':
                        userPresence = 'SkypeMinus';
                        break;
                    default:
                        userPresence = '';
                }
                return userPresence;
            }
        };
        return _this;
    }
    PersonaPresenceBase.prototype.render = function () {
        var _a = this.props, coinSize = _a.coinSize, getStyles = _a.getStyles, // Use getStyles from props.
        presence = _a.presence, theme = _a.theme;
        var size = Object(__WEBPACK_IMPORTED_MODULE_5__PersonaConsts__["sizeBoolean"])(this.props.size);
        // Render Presence Icon if Persona is above size 32.
        var renderIcon = !(size.isSize10 || size.isSize16 || size.isSize24 || size.isSize28 || size.isSize32) && (coinSize ? coinSize > 32 : true);
        var presenceHeightWidth = coinSize ? (coinSize / coinSizePresenceScaleFactor < presenceMaxSize ? coinSize / coinSizePresenceScaleFactor + 'px' : presenceMaxSize + 'px') : '';
        var presenceFontSize = coinSize ? (coinSize / coinSizeFontScaleFactor < presenceFontMaxSize ? coinSize / coinSizeFontScaleFactor + 'px' : presenceFontMaxSize + 'px') : '';
        var coinSizeWithPresenceIconStyle = coinSize ? { fontSize: presenceFontSize, lineHeight: presenceHeightWidth } : undefined;
        var coinSizeWithPresenceStyle = coinSize ? { width: presenceHeightWidth, height: presenceHeightWidth } : undefined;
        // Use getStyles from props, or fall back to getStyles from styles file.
        var classNames = getClassNames(getStyles, {
            theme: theme,
            presence: presence,
            size: this.props.size,
        });
        if (presence === __WEBPACK_IMPORTED_MODULE_4__Persona_types__["PersonaPresence"].none) {
            return null;
        }
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.presence, style: coinSizeWithPresenceStyle }, renderIcon && this._onRenderIcon(classNames.presenceIcon, coinSizeWithPresenceIconStyle)));
    };
    PersonaPresenceBase = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["customizable"])('PersonaPresence', ['theme'])
    ], PersonaPresenceBase);
    return PersonaPresenceBase;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaSize", function() { return PersonaSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaPresence", function() { return PersonaPresence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaInitialsColor", function() { return PersonaInitialsColor; });
var PersonaSize;
(function (PersonaSize) {
    /**
     * tiny size has been deprecated in favor of standardized numeric sizing. Use size10 instead.
     * @deprecated
     */
    PersonaSize[PersonaSize["tiny"] = 0] = "tiny";
    /**
     *
     * extraExtraSmall size has been deprecated in favor of standardized numeric sizing. Use size24 instead.
     * @deprecated
     */
    PersonaSize[PersonaSize["extraExtraSmall"] = 1] = "extraExtraSmall";
    /**
     * extraSmall size has been deprecated in favor of standardized numeric sizing. Use size32 instead.
     * @deprecated
     */
    PersonaSize[PersonaSize["extraSmall"] = 2] = "extraSmall";
    /**
     * small size has been deprecated in favor of standardized numeric sizing. Use size40 instead.
     * @deprecated
     */
    PersonaSize[PersonaSize["small"] = 3] = "small";
    /**
     * regular size has been deprecated in favor of standardized numeric sizing. Use size48 instead.
     * @deprecated
     */
    PersonaSize[PersonaSize["regular"] = 4] = "regular";
    /**
     * large size has been deprecated in favor of standardized numeric sizing. Use size72 instead.
     * @deprecated
     */
    PersonaSize[PersonaSize["large"] = 5] = "large";
    /**
     * extraLarge size has been deprecated in favor of standardized numeric sizing. Use size100 instead.
     * @deprecated
     */
    PersonaSize[PersonaSize["extraLarge"] = 6] = "extraLarge";
    PersonaSize[PersonaSize["size28"] = 7] = "size28";
    PersonaSize[PersonaSize["size16"] = 8] = "size16";
    PersonaSize[PersonaSize["size10"] = 9] = "size10";
    PersonaSize[PersonaSize["size24"] = 10] = "size24";
    PersonaSize[PersonaSize["size32"] = 11] = "size32";
    PersonaSize[PersonaSize["size40"] = 12] = "size40";
    PersonaSize[PersonaSize["size48"] = 13] = "size48";
    PersonaSize[PersonaSize["size72"] = 14] = "size72";
    PersonaSize[PersonaSize["size100"] = 15] = "size100";
})(PersonaSize || (PersonaSize = {}));
var PersonaPresence;
(function (PersonaPresence) {
    PersonaPresence[PersonaPresence["none"] = 0] = "none";
    PersonaPresence[PersonaPresence["offline"] = 1] = "offline";
    PersonaPresence[PersonaPresence["online"] = 2] = "online";
    PersonaPresence[PersonaPresence["away"] = 3] = "away";
    PersonaPresence[PersonaPresence["dnd"] = 4] = "dnd";
    PersonaPresence[PersonaPresence["blocked"] = 5] = "blocked";
    PersonaPresence[PersonaPresence["busy"] = 6] = "busy";
})(PersonaPresence || (PersonaPresence = {}));
var PersonaInitialsColor;
(function (PersonaInitialsColor) {
    PersonaInitialsColor[PersonaInitialsColor["lightBlue"] = 0] = "lightBlue";
    PersonaInitialsColor[PersonaInitialsColor["blue"] = 1] = "blue";
    PersonaInitialsColor[PersonaInitialsColor["darkBlue"] = 2] = "darkBlue";
    PersonaInitialsColor[PersonaInitialsColor["teal"] = 3] = "teal";
    PersonaInitialsColor[PersonaInitialsColor["lightGreen"] = 4] = "lightGreen";
    PersonaInitialsColor[PersonaInitialsColor["green"] = 5] = "green";
    PersonaInitialsColor[PersonaInitialsColor["darkGreen"] = 6] = "darkGreen";
    PersonaInitialsColor[PersonaInitialsColor["lightPink"] = 7] = "lightPink";
    PersonaInitialsColor[PersonaInitialsColor["pink"] = 8] = "pink";
    PersonaInitialsColor[PersonaInitialsColor["magenta"] = 9] = "magenta";
    PersonaInitialsColor[PersonaInitialsColor["purple"] = 10] = "purple";
    PersonaInitialsColor[PersonaInitialsColor["black"] = 11] = "black";
    PersonaInitialsColor[PersonaInitialsColor["orange"] = 12] = "orange";
    /**
     * Red is a color that often has a special meaning, so it is considered a reserved color and can only be set with overrides
     */
    PersonaInitialsColor[PersonaInitialsColor["red"] = 13] = "red";
    PersonaInitialsColor[PersonaInitialsColor["darkRed"] = 14] = "darkRed";
    /**
     * Transparent is not intended to be used with typical initials due to accessibility issues.
     * Its primary use is for overflow buttons, so it is considered a reserved color and can only be set with overrides.
     */
    PersonaInitialsColor[PersonaInitialsColor["transparent"] = 15] = "transparent";
})(PersonaInitialsColor || (PersonaInitialsColor = {}));


/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personaSize", function() { return personaSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personaPresenceSize", function() { return personaPresenceSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeBoolean", function() { return sizeBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presenceBoolean", function() { return presenceBoolean; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Persona_types__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Persona_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Persona_types__);

// Persona Sizes
var personaSize;
(function (personaSize) {
    personaSize.size10 = '20px';
    personaSize.size16 = '16px';
    personaSize.size24 = '24px';
    personaSize.size28 = '28px';
    personaSize.size32 = '32px';
    personaSize.size40 = '40px';
    personaSize.size48 = '48px';
    personaSize.size72 = '72px';
    personaSize.size100 = '100px';
})(personaSize || (personaSize = {}));
// Persona Presence Sizes
var personaPresenceSize;
(function (personaPresenceSize) {
    personaPresenceSize.size6 = '6px';
    personaPresenceSize.size8 = '8px';
    personaPresenceSize.size12 = '12px';
    personaPresenceSize.size20 = '20px';
    personaPresenceSize.size28 = '28px';
    personaPresenceSize.border = '2px';
})(personaPresenceSize || (personaPresenceSize = {}));
var sizeBoolean = function (size) { return ({
    isSize10: size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].size10 || size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].tiny,
    isSize16: size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].size16,
    isSize24: size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].size24 || size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].extraExtraSmall,
    isSize28: size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].size28 || size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].extraSmall,
    isSize32: size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].size32,
    isSize40: size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].size40 || size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].small,
    isSize48: size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].size48,
    isSize72: size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].size72 || size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].large,
    isSize100: size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].size100 || size === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaSize"].extraLarge,
}); };
var presenceBoolean = function (presence) { return ({
    isAvailable: presence === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaPresence"].online,
    isAway: presence === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaPresence"].away,
    isBlocked: presence === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaPresence"].blocked,
    isBusy: presence === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaPresence"].busy,
    isDoNotDisturb: presence === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaPresence"].dnd,
    isOffline: presence === __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaPresence"].offline,
}); };


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/PersonaPresence/PersonaPresence.styles.js
module.exports = __webpack_require__(384);

/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Styling__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonaConsts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PersonaConsts__);


var GlobalClassNames = {
    presence: 'ms-Persona-presence',
    presenceIcon: 'ms-Persona-presenceIcon',
};
var getStyles = function (props) {
    var theme = props.theme;
    var semanticColors = theme.semanticColors;
    var classNames = Object(__WEBPACK_IMPORTED_MODULE_0__Styling__["getGlobalClassNames"])(GlobalClassNames, theme);
    var size = Object(__WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["sizeBoolean"])(props.size);
    var presence = Object(__WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["presenceBoolean"])(props.presence);
    // Presence colors
    var presenceColorAvailable = '#7FBA00';
    var presenceColorAway = '#FCD116';
    var presenceColorBusy = '#D93B3B';
    var presenceColorDnd = '#E81123';
    var presenceColorOffline = '#93ABBD';
    return ({
        presence: [
            classNames.presence,
            {
                position: 'absolute',
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].size12,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].size12,
                borderRadius: '50%',
                top: 'auto',
                right: "-" + __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].border,
                bottom: "-" + __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].border,
                border: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].border + " solid " + semanticColors.bodyBackground,
                textAlign: 'center',
                boxSizing: 'content-box',
                backgroundClip: 'content-box',
                MsHighContrastAdjust: 'none',
                selectors: (_a = {},
                    _a[__WEBPACK_IMPORTED_MODULE_0__Styling__["HighContrastSelector"]] = {
                        borderColor: 'Window',
                        backgroundColor: 'WindowText',
                    },
                    _a)
            },
            size.isSize10 && {
                right: 'auto',
                top: '7px',
                left: 0,
                border: 0,
                selectors: (_b = {},
                    _b[__WEBPACK_IMPORTED_MODULE_0__Styling__["HighContrastSelector"]] = {
                        top: '9px',
                        border: '1px solid WindowText',
                    },
                    _b)
            },
            (size.isSize10 || size.isSize24 || size.isSize28 || size.isSize32) && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].size8,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].size8,
            },
            size.isSize16 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].size6,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].size6,
                borderWidth: '1.5px',
            },
            size.isSize72 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].size20,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].size20,
            },
            size.isSize100 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].size28,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].size28,
            },
            presence.isAvailable && {
                backgroundColor: presenceColorAvailable,
                selectors: (_c = {},
                    _c[__WEBPACK_IMPORTED_MODULE_0__Styling__["HighContrastSelector"]] = {
                        backgroundColor: 'Highlight',
                    },
                    _c)
            },
            presence.isAway && {
                backgroundColor: presenceColorAway,
            },
            presence.isBlocked && [
                {
                    backgroundColor: semanticColors.bodyBackground,
                    selectors: (_d = {
                            ':before': {
                                content: '""',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                border: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].border + " solid " + presenceColorBusy,
                                borderRadius: '50%',
                                boxSizing: 'border-box',
                            },
                            // Only show :after at larger sizes
                            ':after': (size.isSize40 || size.isSize48 || size.isSize72 || size.isSize100) ? {
                                content: '""',
                                width: '100%',
                                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].border,
                                backgroundColor: presenceColorBusy,
                                transform: 'translateY(-50%) rotate(-45deg)',
                                position: 'absolute',
                                top: '50%',
                                left: 0,
                            } : undefined
                        },
                        _d[__WEBPACK_IMPORTED_MODULE_0__Styling__["HighContrastSelector"]] = {
                            backgroundColor: 'WindowText',
                            selectors: {
                                ':before': {
                                    width: "calc(100% - " + __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].border + ")",
                                    height: "calc(100% - " + __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].border + ")",
                                    top: parseFloat(__WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].border) / 2 + 'px',
                                    left: parseFloat(__WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].border) / 2 + 'px',
                                    borderColor: 'Window',
                                },
                                ':after': {
                                    width: "calc(100% - " + parseFloat(__WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].border) * 2 + "px)",
                                    left: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].border,
                                    backgroundColor: 'Window',
                                }
                            }
                        },
                        _d)
                },
            ],
            presence.isBusy && {
                backgroundColor: presenceColorBusy,
            },
            presence.isDoNotDisturb && {
                backgroundColor: presenceColorDnd,
            },
            presence.isOffline && {
                backgroundColor: presenceColorOffline,
            },
        ],
        presenceIcon: [
            classNames.presenceIcon,
            {
                color: semanticColors.bodyBackground,
                fontSize: '6px',
                lineHeight: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].size12,
                verticalAlign: 'top',
                selectors: (_e = {},
                    _e[__WEBPACK_IMPORTED_MODULE_0__Styling__["HighContrastSelector"]] = {
                        color: 'Window',
                    },
                    _e)
            },
            size.isSize72 && {
                fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].small,
                lineHeight: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].size20,
            },
            size.isSize100 && {
                fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].medium,
                lineHeight: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaPresenceSize"].size28,
            },
            presence.isAway && {
                position: 'relative',
                left: '1px',
            },
        ]
    });
    var _a, _b, _c, _d, _e;
};


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/Image.js
var package = __webpack_require__(1);
module.exports = {}
for (var key in package) {
  if (package.hasOwnProperty(key)) {
    module.exports[key] = package[key];
  }
}
Object.defineProperty(module.exports, "__esModule", { value: true });

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/PersonaInitialsColor.js
module.exports = __webpack_require__(387);

/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["initialsColorPropToColorCode"] = initialsColorPropToColorCode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Persona_types__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Persona_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Persona_types__);

/**
 * These colors are considered reserved colors and can only be set with overrides:
 * - Red is a color that often has a special meaning.
 * - Transparent is not intended to be used with typical initials due to accessibility issues,
 *   its primary use is for Facepile overflow buttons.
 */
var COLOR_SWATCHES_LOOKUP = [
    __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].lightGreen,
    __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].lightBlue,
    __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].lightPink,
    __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].green,
    __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].darkGreen,
    __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].pink,
    __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].magenta,
    __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].purple,
    __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].black,
    __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].teal,
    __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].blue,
    __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].darkBlue,
    __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].orange,
    __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].darkRed
];
var COLOR_SWATCHES_NUM_ENTRIES = COLOR_SWATCHES_LOOKUP.length;
function getInitialsColorFromName(displayName) {
    var color = __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].blue;
    if (!displayName) {
        return color;
    }
    var hashCode = 0;
    for (var iLen = displayName.length - 1; iLen >= 0; iLen--) {
        var ch = displayName.charCodeAt(iLen);
        var shift = iLen % 8;
        // tslint:disable-next-line:no-bitwise
        hashCode ^= (ch << shift) + (ch >> (8 - shift));
    }
    color = COLOR_SWATCHES_LOOKUP[hashCode % COLOR_SWATCHES_NUM_ENTRIES];
    return color;
}
function personaInitialsColorToHexCode(personaInitialsColor) {
    switch (personaInitialsColor) {
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].lightBlue:
            return '#6BA5E7';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].blue:
            return '#2D89EF';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].darkBlue:
            return '#2B5797';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].teal:
            return '#00ABA9';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].lightGreen:
            return '#99B433';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].green:
            return '#00A300';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].darkGreen:
            return '#1E7145';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].lightPink:
            return '#E773BD';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].pink:
            return '#FF0097';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].magenta:
            return ' #7E3878';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].purple:
            return '#603CBA';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].black:
            return '#1D1D1D';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].orange:
            return '#DA532C';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].red:
            return '#EE1111';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].darkRed:
            return '#B91D47';
        case __WEBPACK_IMPORTED_MODULE_0__Persona_types__["PersonaInitialsColor"].transparent:
            return 'transparent';
    }
}
function initialsColorPropToColorCode(props) {
    var primaryText = props.primaryText, text = props.text;
    var initialsColor = props.initialsColor;
    var initialsColorCode;
    if (typeof initialsColor === 'string') {
        initialsColorCode = initialsColor;
    }
    else {
        initialsColor = initialsColor !== undefined ? initialsColor : getInitialsColorFromName(text || primaryText);
        initialsColorCode = personaInitialsColorToHexCode(initialsColor);
    }
    return initialsColorCode;
}


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/PersonaCoin/PersonaCoin.styles.js
module.exports = __webpack_require__(389);

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Styling__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonaConsts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PersonaConsts__);


var GlobalClassNames = {
    coin: 'ms-Persona-coin',
    imageArea: 'ms-Persona-imageArea',
    image: 'ms-Persona-image',
    initials: 'ms-Persona-initials',
    size10: 'ms-Persona--size10',
    size16: 'ms-Persona--size16',
    size24: 'ms-Persona--size24',
    size28: 'ms-Persona--size28',
    size32: 'ms-Persona--size32',
    size40: 'ms-Persona--size40',
    size48: 'ms-Persona--size48',
    size72: 'ms-Persona--size72',
    size100: 'ms-Persona--size100',
};
var getStyles = function (props) {
    var className = props.className, theme = props.theme;
    var palette = theme.palette;
    var size = Object(__WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["sizeBoolean"])(props.size);
    var classNames = Object(__WEBPACK_IMPORTED_MODULE_0__Styling__["getGlobalClassNames"])(GlobalClassNames, theme);
    // Static colors used when displaying 'unknown persona' coin
    var unknownPersonaBackgroundColor = palette.neutralLight;
    var unknownPersonaFontColor = palette.redDark;
    return ({
        coin: [
            classNames.coin,
            size.isSize10 && classNames.size10,
            size.isSize16 && classNames.size16,
            size.isSize24 && classNames.size24,
            size.isSize28 && classNames.size28,
            size.isSize32 && classNames.size32,
            size.isSize40 && classNames.size40,
            size.isSize48 && classNames.size48,
            size.isSize72 && classNames.size72,
            size.isSize100 && classNames.size100,
            className
        ],
        size10WithoutPresenceIcon: {
            fontSize: '10px',
            position: 'absolute',
            top: '5px',
            right: 'auto',
            left: 0,
        },
        imageArea: [
            classNames.imageArea,
            {
                position: 'relative',
                textAlign: 'center',
                flex: '0 0 auto',
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size48,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size48,
            },
            size.isSize10 && {
                overflow: 'visible',
                background: 'transparent',
                height: 0,
                width: 0,
            },
            size.isSize16 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size16,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size16,
            },
            size.isSize24 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size24,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size24,
            },
            size.isSize28 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size28,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size28,
            },
            size.isSize32 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size32,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size32,
            },
            size.isSize40 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size40,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size40,
            },
            size.isSize72 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size72,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size72,
            },
            size.isSize100 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size100,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size100,
            },
        ],
        image: [
            classNames.image,
            {
                marginRight: '10px',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0,
                borderRadius: '50%',
                perspective: '1px',
            },
            size.isSize10 && {
                overflow: 'visible',
                background: 'transparent',
                height: 0,
                width: 0,
            },
            size.isSize16 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size16,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size16,
            },
            size.isSize24 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size24,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size24,
            },
            size.isSize28 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size28,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size28,
            },
            size.isSize32 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size32,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size32,
            },
            size.isSize40 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size40,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size40,
            },
            size.isSize72 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size72,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size72,
            },
            size.isSize100 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size100,
                width: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size100,
            },
        ],
        initials: [
            classNames.initials,
            {
                borderRadius: '50%',
                color: props.showUnknownPersonaCoin ? unknownPersonaFontColor : palette.white,
                fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].large,
                fontWeight: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontWeights"].regular,
                lineHeight: '46px',
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size48,
                selectors: (_a = {},
                    _a[__WEBPACK_IMPORTED_MODULE_0__Styling__["HighContrastSelector"]] = {
                        border: '1px solid WindowText',
                        MsHighContrastAdjust: 'none',
                        color: 'WindowText',
                        boxSizing: 'border-box',
                        backgroundColor: 'Window !important',
                    },
                    _a)
            },
            props.showUnknownPersonaCoin && {
                backgroundColor: unknownPersonaBackgroundColor
            },
            (size.isSize16 || size.isSize24 || size.isSize28) && {
                fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].xSmall,
            },
            size.isSize16 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size16,
                lineHeight: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size16,
            },
            size.isSize24 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size24,
                lineHeight: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size24,
            },
            size.isSize28 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size28,
                lineHeight: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size28,
            },
            (size.isSize32 || size.isSize40) && {
                fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].medium,
            },
            size.isSize32 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size32,
                lineHeight: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size32,
            },
            size.isSize40 && {
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size40,
                lineHeight: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size40,
            },
            size.isSize72 && {
                fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].xxLarge,
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size72,
                lineHeight: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size72,
            },
            size.isSize100 && {
                fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].superLarge,
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size100,
                lineHeight: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size100,
            }
        ]
    });
    var _a;
};


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/Persona.styles.js
module.exports = __webpack_require__(391);

/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Styling__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonaConsts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PersonaConsts__);


var GlobalClassNames = {
    root: 'ms-Persona',
    size10: 'ms-Persona--size10',
    size16: 'ms-Persona--size16',
    size24: 'ms-Persona--size24',
    size28: 'ms-Persona--size28',
    size32: 'ms-Persona--size32',
    size40: 'ms-Persona--size40',
    size48: 'ms-Persona--size48',
    size72: 'ms-Persona--size72',
    size100: 'ms-Persona--size100',
    available: 'ms-Persona--online',
    away: 'ms-Persona--away',
    blocked: 'ms-Persona--blocked',
    busy: 'ms-Persona--busy',
    doNotDisturb: 'ms-Persona--donotdisturb',
    offline: 'ms-Persona--offline',
    details: 'ms-Persona-details',
    primaryText: 'ms-Persona-primaryText',
    secondaryText: 'ms-Persona-secondaryText',
    tertiaryText: 'ms-Persona-tertiaryText',
    optionalText: 'ms-Persona-optionalText',
    textContent: 'ms-Persona-textContent',
};
var getStyles = function (props) {
    var className = props.className, showSecondaryText = props.showSecondaryText, theme = props.theme;
    var palette = theme.palette;
    var classNames = Object(__WEBPACK_IMPORTED_MODULE_0__Styling__["getGlobalClassNames"])(GlobalClassNames, theme);
    var size = Object(__WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["sizeBoolean"])(props.size);
    var presence = Object(__WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["presenceBoolean"])(props.presence);
    var showSecondaryTextDefaultHeight = '16px';
    var sharedTextStyles = {
        color: palette.neutralSecondary,
        fontWeight: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontWeights"].regular,
        fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].small,
    };
    return ({
        root: [
            classNames.root,
            __WEBPACK_IMPORTED_MODULE_0__Styling__["normalize"],
            {
                color: palette.neutralPrimary,
                fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].medium,
                fontWeight: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontWeights"].regular,
                position: 'relative',
                height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size48,
                minWidth: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size48,
                display: 'flex',
                alignItems: 'center',
                selectors: {
                    '.contextualHost': {
                        display: 'none',
                    },
                    ':hover': {
                        selectors: {
                            '$primaryText': {
                                color: palette.neutralDark,
                            }
                        }
                    }
                }
            },
            size.isSize10 && [
                classNames.size10,
                {
                    height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size10,
                    minWidth: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size10,
                }
            ],
            size.isSize16 && [
                classNames.size16,
                {
                    height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size16,
                    minWidth: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size16,
                }
            ],
            size.isSize24 && [
                classNames.size24,
                {
                    height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size24,
                    minWidth: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size24,
                }
            ],
            size.isSize24 && showSecondaryText && {
                height: '36px',
            },
            size.isSize28 && [
                classNames.size28,
                {
                    height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size28,
                    minWidth: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size28,
                }
            ],
            size.isSize28 && showSecondaryText && {
                height: '32px',
            },
            size.isSize32 && [
                classNames.size32,
                {
                    height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size32,
                    minWidth: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size32,
                }
            ],
            size.isSize40 && [
                classNames.size40,
                {
                    height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size40,
                    minWidth: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size40,
                }
            ],
            size.isSize48 && classNames.size48,
            size.isSize72 && [
                classNames.size72,
                {
                    height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size72,
                    minWidth: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size72,
                }
            ],
            size.isSize100 && [
                classNames.size100,
                {
                    height: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size100,
                    minWidth: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size100,
                }
            ],
            /**
             * Modifiers: presence
             */
            presence.isAvailable && classNames.available,
            presence.isAway && classNames.away,
            presence.isBlocked && classNames.blocked,
            presence.isBusy && classNames.busy,
            presence.isDoNotDisturb && classNames.doNotDisturb,
            presence.isOffline && classNames.offline,
            className,
        ],
        details: [
            classNames.details,
            {
                padding: '0 24px 0 16px',
                minWidth: 0,
                width: '100%',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
            },
            size.isSize10 && {
                paddingLeft: '17px',
            },
            (size.isSize24 || size.isSize28) && {
                padding: '0 12px',
            }
        ],
        primaryText: [
            classNames.primaryText,
            __WEBPACK_IMPORTED_MODULE_0__Styling__["noWrap"],
            {
                color: palette.neutralPrimary,
                fontWeight: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontWeights"].regular,
                fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].large,
            },
            showSecondaryText && {
                height: showSecondaryTextDefaultHeight,
                lineHeight: showSecondaryTextDefaultHeight,
                overflowX: 'hidden',
            },
            size.isSize10 && {
                fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].small,
                lineHeight: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size10,
            },
            (size.isSize16 || size.isSize24 || size.isSize28 || size.isSize32 || size.isSize40) && {
                fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].medium,
            },
            size.isSize16 && {
                lineHeight: __WEBPACK_IMPORTED_MODULE_1__PersonaConsts__["personaSize"].size28,
            },
            size.isSize24 && showSecondaryText && { height: '18px' },
            size.isSize72 && {
                fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].xLarge,
            },
            size.isSize100 && {
                fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].xLarge,
                fontWeight: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontWeights"].semilight,
            }
        ],
        secondaryText: [
            classNames.secondaryText,
            __WEBPACK_IMPORTED_MODULE_0__Styling__["noWrap"],
            sharedTextStyles,
            (size.isSize10 || size.isSize16 || size.isSize24 || size.isSize28 || size.isSize32) && {
                display: 'none',
            },
            size.isSize24 && showSecondaryText && {
                height: '18px',
            },
            (size.isSize72 || size.isSize100) && {
                fontSize: __WEBPACK_IMPORTED_MODULE_0__Styling__["FontSizes"].medium,
            },
            showSecondaryText && {
                display: 'block',
                height: showSecondaryTextDefaultHeight,
                lineHeight: showSecondaryTextDefaultHeight,
                overflowX: 'hidden',
            }
        ],
        tertiaryText: [
            classNames.tertiaryText,
            __WEBPACK_IMPORTED_MODULE_0__Styling__["noWrap"],
            sharedTextStyles,
            {
                display: 'none',
            },
            (size.isSize72 || size.isSize100) && {
                display: 'block',
            }
        ],
        optionalText: [
            classNames.optionalText,
            __WEBPACK_IMPORTED_MODULE_0__Styling__["noWrap"],
            sharedTextStyles,
            {
                display: 'none',
            },
            size.isSize100 && {
                display: 'block',
            }
        ],
        textContent: [
            classNames.textContent,
            __WEBPACK_IMPORTED_MODULE_0__Styling__["noWrap"]
        ],
    });
};


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Persona/PersonaCoin/index.js
module.exports = __webpack_require__(393);

/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PersonaCoin__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PersonaCoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PersonaCoin__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__PersonaCoin__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__PersonaCoin__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonaCoin_base__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonaCoin_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PersonaCoin_base__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__PersonaCoin_base__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__PersonaCoin_base__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/PeoplePicker/PeoplePickerItems/PickerItemsDefault.scss.js
module.exports = __webpack_require__(395);

/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personaContainer", function() { return personaContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeButton", function() { return removeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personaContainerIsSelected", function() { return personaContainerIsSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationError", function() { return validationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemContent", function() { return itemContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personaDetails", function() { return personaDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemContainer", function() { return itemContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__);
/* tslint:disable */

Object(__WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__["loadStyles"])([{ "rawString": ".personaContainer_27aff86c{border-radius:15px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";margin:1px 2px;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;max-width:300px;vertical-align:middle}.personaContainer_27aff86c::-moz-focus-inner{border:0}.personaContainer_27aff86c{outline:transparent}.personaContainer_27aff86c{position:relative}.ms-Fabric--isFocusVisible .personaContainer_27aff86c:focus:after{content:'';position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;pointer-events:none;border:1px solid " }, { "theme": "focusBorder", "defaultValue": "#000000" }, { "rawString": "}.personaContainer_27aff86c:hover{background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.personaContainer_27aff86c:hover .removeButton_27aff86c{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.personaContainer_27aff86c.personaContainerIsSelected_27aff86c{background:" }, { "theme": "blue", "defaultValue": "#0078d4" }, { "rawString": "}.personaContainer_27aff86c.personaContainerIsSelected_27aff86c .ms-Persona-primaryText{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.personaContainer_27aff86c.personaContainerIsSelected_27aff86c .ms-Persona-primaryText{color:HighlightText}}.personaContainer_27aff86c.personaContainerIsSelected_27aff86c .removeButton_27aff86c .ms-Button-icon{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.personaContainer_27aff86c.personaContainerIsSelected_27aff86c .removeButton_27aff86c .ms-Button-icon{color:HighlightText}}.personaContainer_27aff86c.personaContainerIsSelected_27aff86c .removeButton_27aff86c:hover{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";background:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.personaContainer_27aff86c.personaContainerIsSelected_27aff86c{border-color:Highlight;background:Highlight;-ms-high-contrast-adjust:none}}.personaContainer_27aff86c.validationError_27aff86c .ms-Persona-primaryText{color:" }, { "theme": "redDark", "defaultValue": "#a80000" }, { "rawString": ";border-bottom:2px dotted " }, { "theme": "redDark", "defaultValue": "#a80000" }, { "rawString": "}.personaContainer_27aff86c.validationError_27aff86c .ms-Persona-initials{font-size:20px}.personaContainer_27aff86c.validationError_27aff86c.personaContainerIsSelected_27aff86c{background:" }, { "theme": "redDark", "defaultValue": "#a80000" }, { "rawString": "}.personaContainer_27aff86c.validationError_27aff86c.personaContainerIsSelected_27aff86c .ms-Persona-primaryText{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";border-bottom:2px dotted " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.personaContainer_27aff86c.validationError_27aff86c.personaContainerIsSelected_27aff86c .removeButton_27aff86c:hover{background:" }, { "theme": "red", "defaultValue": "#e81123" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.personaContainer_27aff86c{border:1px solid WindowText}}.personaContainer_27aff86c .itemContent_27aff86c{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;min-width:0px;max-width:100%;overflow:hidden}.personaContainer_27aff86c .removeButton_27aff86c{border-radius:15px;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:28px;height:28px;-ms-flex-preferred-size:28px;flex-basis:28px}.personaContainer_27aff86c .removeButton_27aff86c:hover{background:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.personaContainer_27aff86c .personaDetails_27aff86c{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.itemContainer_27aff86c{display:inline-block;vertical-align:top}\n" }]);
var personaContainer = "personaContainer_27aff86c";
var removeButton = "removeButton_27aff86c";
var personaContainerIsSelected = "personaContainerIsSelected_27aff86c";
var validationError = "validationError_27aff86c";
var itemContent = "itemContent_27aff86c";
var personaDetails = "personaDetails_27aff86c";
var itemContainer = "itemContainer_27aff86c";


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/PeoplePicker/PeoplePickerItems/SuggestionItemDefault.js
module.exports = __webpack_require__(397);

/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionItemNormal", function() { return SuggestionItemNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionItemSmall", function() { return SuggestionItemSmall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Persona__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Persona___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Persona__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PeoplePicker_scss__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PeoplePicker_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__PeoplePicker_scss__);

/* tslint:disable */

/* tslint:enable */



var styles = __WEBPACK_IMPORTED_MODULE_4__PeoplePicker_scss__;
var SuggestionItemNormal = function (personaProps, suggestionItemProps) {
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-PeoplePicker-personaContent', styles.peoplePickerPersonaContent) },
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Persona__["Persona"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({ presence: personaProps.presence !== undefined ? personaProps.presence : __WEBPACK_IMPORTED_MODULE_3__Persona__["PersonaPresence"].none, size: __WEBPACK_IMPORTED_MODULE_3__Persona__["PersonaSize"].size24, className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-PeoplePicker-Persona', styles.peoplePickerPersona), showSecondaryText: true }, personaProps))));
};
var SuggestionItemSmall = function (personaProps, suggestionItemProps) {
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-PeoplePicker-personaContent', styles.peoplePickerPersonaContent) },
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Persona__["Persona"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({ presence: personaProps.presence !== undefined ? personaProps.presence : __WEBPACK_IMPORTED_MODULE_3__Persona__["PersonaPresence"].none, size: __WEBPACK_IMPORTED_MODULE_3__Persona__["PersonaSize"].size24, className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-PeoplePicker-Persona', styles.peoplePickerPersona) }, personaProps))));
};


/***/ }),
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultContent", function() { return resultContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultItem", function() { return resultItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peoplePickerPersona", function() { return peoplePickerPersona; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peoplePicker", function() { return peoplePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peoplePickerPersonaContent", function() { return peoplePickerPersonaContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__);
/* tslint:disable */

Object(__WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__["loadStyles"])([{ "rawString": ".resultContent_fe01814c{display:table-row}.resultContent_fe01814c .resultItem_fe01814c{display:table-cell;vertical-align:bottom}.peoplePickerPersona_fe01814c{width:180px}.peoplePickerPersona_fe01814c .ms-Persona-details{width:100%}.peoplePicker_fe01814c .ms-BasePicker-text{min-height:40px}.peoplePickerPersonaContent_fe01814c{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n" }]);
var resultContent = "resultContent_fe01814c";
var resultItem = "resultItem_fe01814c";
var peoplePickerPersona = "peoplePickerPersona_fe01814c";
var peoplePicker = "peoplePicker_fe01814c";
var peoplePickerPersonaContent = "peoplePickerPersonaContent_fe01814c";


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/pickers/TagPicker/TagPicker.js
module.exports = __webpack_require__(400);

/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagPicker", function() { return TagPicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BasePicker__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BasePicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__BasePicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TagItem__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TagItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__TagItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TagItem_scss__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TagItem_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__TagItem_scss__);

/* tslint:disable */


/* tslint:enable */



var styles = __WEBPACK_IMPORTED_MODULE_5__TagItem_scss__;
var TagPicker = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](TagPicker, _super);
    function TagPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TagPicker.defaultProps = {
        onRenderItem: function (props) { return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__TagItem__["TagItem"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, props), props.item.name); },
        onRenderSuggestionsItem: function (props) { return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-TagItem-TextOverflow', styles.tagItemTextOverflow) },
            " ",
            props.name,
            " "); }
    };
    return TagPicker;
}(__WEBPACK_IMPORTED_MODULE_3__BasePicker__["BasePicker"]));



/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagItem", function() { return TagItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icon__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TagItem_scss__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TagItem_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TagItem_scss__);
/* tslint:disable */

/* tslint:enable */



var styles = __WEBPACK_IMPORTED_MODULE_3__TagItem_scss__;
var TagItem = function (props) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: Object(__WEBPACK_IMPORTED_MODULE_1__Utilities__["css"])('ms-TagItem', styles.root, { 'is-selected': props.selected }, props.selected && styles.isSelected), role: 'listitem', key: props.index, "data-selection-index": props.index, "data-is-focusable": (props.enableTagFocusInDisabledPicker || !props.disabled) && true },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: Object(__WEBPACK_IMPORTED_MODULE_1__Utilities__["css"])('ms-TagItem-text', styles.tagItemText), "aria-label": props.children }, props.children),
    !props.disabled &&
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: Object(__WEBPACK_IMPORTED_MODULE_1__Utilities__["css"])('ms-TagItem-close', styles.tagItemClose), onClick: props.onRemoveItem },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Icon__["Icon"], { iconName: 'Cancel' })))); };


/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelected", function() { return isSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagItemText", function() { return tagItemText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagItemClose", function() { return tagItemClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagItemButton", function() { return tagItemButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagItemTextOverflow", function() { return tagItemTextOverflow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__);
/* tslint:disable */

Object(__WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__["loadStyles"])([{ "rawString": ".root_77d1a260{-webkit-box-sizing:content-box;box-sizing:content-box;-ms-flex-negative:1;flex-shrink:1;background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";margin:2px;height:26px;line-height:26px;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;max-width:300px}.root_77d1a260::-moz-focus-inner{border:0}.root_77d1a260{outline:transparent}.root_77d1a260{position:relative}.ms-Fabric--isFocusVisible .root_77d1a260:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "focusBorder", "defaultValue": "#000000" }, { "rawString": "}.root_77d1a260:hover{background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.root_77d1a260.isSelected_77d1a260{background:" }, { "theme": "neutralQuaternary", "defaultValue": "#d0d0d0" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.root_77d1a260.isSelected_77d1a260{border:1px solid WindowFrame}}.root_77d1a260.isSelected_77d1a260:hover{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.root_77d1a260{border:1px solid WindowText}}.tagItemText_77d1a260{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:30px;margin:0 8px}.tagItemClose_77d1a260{cursor:pointer;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-size:12px;display:inline-block;text-align:center;vertical-align:top;width:30px;height:100%;-ms-flex-negative:0;flex-shrink:0}.tagItemButton_77d1a260{width:100%;height:100%}.tagItemTextOverflow_77d1a260{overflow:hidden;text-overflow:ellipsis;max-width:60vw}\n" }]);
var root = "root_77d1a260";
var isSelected = "isSelected_77d1a260";
var tagItemText = "tagItemText_77d1a260";
var tagItemClose = "tagItemClose_77d1a260";
var tagItemButton = "tagItemButton_77d1a260";
var tagItemTextOverflow = "tagItemTextOverflow_77d1a260";


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(404);
var loader = __webpack_require__(3);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".mentionSuggestions_99f132d2{width:100%}.spAtMentionField_99f132d2 a[data-sp-mention-user-id]{color:\"[theme:themeTertiary, default:#71afe5]\";font-weight:lighter}.spAtMentionField_99f132d2 a[data-sp-mention-user-id]:not([access-type=\"0\"]){color:\"[theme:themePrimary, default:#0078d4]\";font-weight:700}", ""]);

// exports


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(329), exports);
tslib_1.__exportStar(__webpack_require__(418), exports);
tslib_1.__exportStar(__webpack_require__(419), exports);
tslib_1.__exportStar(__webpack_require__(420), exports);



/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ItemUrlHelper_1 = __webpack_require__(330);
var ApiUrlHelperBasic_1 = __webpack_require__(332);
tslib_1.__exportStar(__webpack_require__(332), exports);
/**
 * Implementation of an extendable SharePoint API URL. Method on this class mutate the underlying object and return the same object back to the caller.
 */
var ApiUrl = /** @class */ (function (_super) {
    tslib_1.__extends(ApiUrl, _super);
    function ApiUrl(params, dependencies) {
        var _this = _super.call(this, {
            webAbsoluteUrl: dependencies.pageContext.webAbsoluteUrl
        }) || this;
        _this._pageContext = dependencies.pageContext;
        _this._itemUrlHelper = dependencies.itemUrlHelper;
        return _this;
    }
    ApiUrl.prototype.webByUrl = function (options) {
        return this.webByItemUrl(this._itemUrlHelper.getUrlParts(options));
    };
    ApiUrl.prototype.webByItemUrl = function (urlParts) {
        var siteRelation = urlParts.siteRelation, isCrossDomain = urlParts.isCrossDomain, fullItemUrl = urlParts.fullItemUrl;
        var apiUrl = this;
        if (isCrossDomain || siteRelation === ItemUrlHelper_1.SiteRelation.crossSite) {
            apiUrl = apiUrl.method('SP.RemoteWeb', fullItemUrl);
        }
        return apiUrl.segment('web');
    };
    ApiUrl.prototype.listById = function (urlParts, listId) {
        return this.webByItemUrl(urlParts).segment('lists').method('GetById', listId);
    };
    ApiUrl.prototype.clone = function () {
        return new ApiUrl({
            webAbsoluteUrl: this._pageContext.webAbsoluteUrl
        }, {
            pageContext: this._pageContext,
            itemUrlHelper: this._itemUrlHelper
        });
    };
    return ApiUrl;
}(ApiUrlHelperBasic_1.ApiUrlBasic));
exports.ApiUrl = ApiUrl;
/**
 * Component which assists in constructing SharePoint API URLs.
 *
 * @export
 * @class ApiUrlHelper
 *
 * @example
 *  import ApiUrlHelper, { resourceKey as apiUrlHelperKey } from './ApiUrlHelper';
 *  let apiUrlHelper = this.resources.consume(apiUrlHelperKey);
 *
 *  let apiUrl = apiUrlHelper.build()
 *      .webByItemKey(item.key)
 *      .segment('Folders')
 *      .segment('Add');
 *
 *  this._dataRequestor.getData({
 *      url: apiUrl.toString(),
 *      method: 'post',
 *      qosName: 'AddFolder'
 *  }).then(() => {
 *      // Something.
 *  });
 */
var ApiUrlHelper = /** @class */ (function (_super) {
    tslib_1.__extends(ApiUrlHelper, _super);
    function ApiUrlHelper(params, dependencies) {
        var _this = _super.call(this, { webAbsoluteUrl: dependencies && dependencies.pageContext ? dependencies.pageContext.webAbsoluteUrl : '' }) || this;
        var itemUrlHelper = dependencies.itemUrlHelper, pageContext = dependencies.pageContext;
        var _a = dependencies.apiUrlType, apiUrlType = _a === void 0 ? /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super.call(this, {}, {
                    itemUrlHelper: itemUrlHelper,
                    pageContext: pageContext
                }) || this;
            }
            return class_1;
        }(ApiUrl)) : _a;
        _this._apiUrlType = apiUrlType;
        return _this;
    }
    /**
     * Starts building a new SharePoint API URL.
     *
     * @returns {IApiUrl}
     */
    ApiUrlHelper.prototype.build = function () {
        return new this._apiUrlType();
    };
    return ApiUrlHelper;
}(ApiUrlHelperBasic_1.ApiUrlHelperBasic));
exports.ApiUrlHelper = ApiUrlHelper;



/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// backcompat, this enum has moved, todo phkuo
/**
 * See the equivalent in SPWeb
 * Variants documentation: https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/variants
 *  0: no emphasis - appears as normal
 *  1: intentionally omitted
 *  2: soft variant - light tint of the primary color as background
 *  3: strong variant - primary color as background, text uses original background color; white on brand blue by default
 */
var SPVariantThemeType;
(function (SPVariantThemeType) {
    SPVariantThemeType[SPVariantThemeType["None"] = 0] = "None";
    SPVariantThemeType[SPVariantThemeType["Neutral"] = 1] = "Neutral";
    SPVariantThemeType[SPVariantThemeType["Soft"] = 2] = "Soft";
    SPVariantThemeType[SPVariantThemeType["Strong"] = 3] = "Strong";
})(SPVariantThemeType = exports.SPVariantThemeType || (exports.SPVariantThemeType = {}));
/**
 * Web property flags enum
 * property name matchs SPWebPropertyFlags2 definition in sts/stsom/SPWeb.cs
 */
var SPWebPropertyFlags2;
(function (SPWebPropertyFlags2) {
    /** Indicates whether site footer is enabled in this web */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEnabled"] = 2] = "FooterEnabled";
    /** Indicates whether mega menu is enabled on this web */
    SPWebPropertyFlags2[SPWebPropertyFlags2["MegaMenuEnabled"] = 128] = "MegaMenuEnabled";
})(SPWebPropertyFlags2 = exports.SPWebPropertyFlags2 || (exports.SPWebPropertyFlags2 = {}));
/** Default site logo URL */
exports.DEFAULT_LOGO_URL = '_layouts/15/images/siteicon.png';
/**
 * Gets the absolute URL of the server (like https://microsoft.sharepoint.com).
 * Input can be an ISpPageContext or other object containing absolute and server-relative web URLs.
 *
 * @example
 *  Returns "https://microsoft.sharepoint.com"
 *      getServerUrl({
 *          webAbsoluteUrl: "https://microsoft.sharepoint.com/sites/odsp",
 *          webServerRelativeUrl: "/sites/odsp"
 *      })
 *
 * Returns "http://server"
 *     getServerUrl({
 *          webAbsoluteUrl: "http://server",
 *          webServerRelativeUrl: "/"
 *     })
 */
function getServerUrl(pageContext) {
    'use strict';
    var webAbsoluteUrl = pageContext.webAbsoluteUrl, webServerRelativeUrl = pageContext.webServerRelativeUrl;
    // Handle cases like http://server site collection, where webServerRelativeUrl will be '/'
    return webServerRelativeUrl === '/' || webServerRelativeUrl === ''
        ? webAbsoluteUrl
        : webAbsoluteUrl.substring(0, webAbsoluteUrl.lastIndexOf(webServerRelativeUrl));
}
exports.getServerUrl = getServerUrl;
/**
 * In most cases, returns the webServerRelativeUrl as-is.
 * For the root web (http://server), returns ''.
 *
 * This function is needed because the root web's webServerRelativeUrl will be '/',
 * which is usually not desirable when combining with other paths. For example:
 *    Good:  '/myweb' + '/_api/contextinfo' => '/myweb/_api/contextinfo'
 *    Bad:   '/'      + '/_api/contextinfo' => '//_api/contextinfo'
 *    Fixed: ''       + '/_api/contextinfo' => '/_api/contextinfo'
 *
 * @param pageContext - An ISpPageContext or other object containing the server-relative URL of a web
 */
function getSafeWebServerRelativeUrl(pageContext) {
    'use strict';
    return pageContext.webServerRelativeUrl === '/' ? '' : pageContext.webServerRelativeUrl;
}
exports.getSafeWebServerRelativeUrl = getSafeWebServerRelativeUrl;
/**
 * Returns true if the current web is the root of a site collection associated with a group.
 * Otherwise it returns false.
 */
function isGroupWebContext(pageContext) {
    'use strict';
    return pageContext && !!pageContext.groupId &&
        pageContext.webAbsoluteUrl === pageContext.siteAbsoluteUrl;
}
exports.isGroupWebContext = isGroupWebContext;
/**
 * Returns true if the current web templates is one of the modern templates: STS#3, GROUP#0, SITEPAGEPUBLISHING#0.
 */
function isModernTemplate(pageContext) {
    var modernTemplates = ['STS#3', 'GROUP#0', 'SITEPAGEPUBLISHING#0'];
    return modernTemplates.indexOf(pageContext.webTemplateConfiguration) !== -1;
}
exports.isModernTemplate = isModernTemplate;



/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var DataRequestor_1 = __webpack_require__(409);
/* Use this as a base class for any generic data source */
/* For a data source that provides a list of items use the ItemDataSource */
var DataSource = /** @class */ (function () {
    function DataSource(params, dependencies) {
        var pageContext = this._pageContext = dependencies.pageContext;
        var _a = dependencies.dataRequestorType, dataRequestorType = _a === void 0 ? /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1(params) {
                return _super.call(this, params, {
                    pageContext: pageContext
                }) || this;
            }
            return class_1;
        }(DataRequestor_1.default)) : _a;
        var _b = params.dataSourceName, dataSourceName = _b === void 0 ? 'DataSource' : _b;
        this.dataSourceName = dataSourceName;
        this.dataRequestor = new dataRequestorType({
            qosName: dataSourceName
        });
    }
    DataSource.prototype.needsRequestDigest = function (url) {
        return true;
    };
    /**
     *
     *
     * @protected
     * @template T The type of the data returned by the parseResponse callback param.
     * @param {() => string} getUrl Lambda that returns the URL to which the datasource should make
     *                              the request.
     * @param {(responseText: string) => T} parseResponse Function that takes in the response.
     *
     * @param {string} qosName Named used to Qos Logging.
     * @param {() => string} getAdditionalPostData Lambda that returns the additional POST string blob.
     * @param {string} method Method used to make the request.
     * @param {{ [key: string]: string }} additionalHeaders Additional headers to send as part of the request.
     * @param {string} contentType defaults to application/json;odata=verbose.
     * @param {number} maxRetries Maximum number of times to retry the request, defaults to 0.
     * @param {boolean} noRedirect Optional, defaults to false. If true and user hits 403, will redirect to auth.
     * @param {boolean} crossSiteCollectionCall
     * @param {(errorData: IErrorData) => string} Optional override for qos error handler
     * @returns {Promise<T>}
     */
    DataSource.prototype.getData = function (getUrl, parseResponse, qosName, getAdditionalPostData, method, additionalHeaders, contentType, // defaults to application/json;odata=verbose
    maxRetries, noRedirect, crossSiteCollectionCall, qosHandler, customQosLogger) {
        if (method === void 0) { method = 'POST'; }
        var url = getUrl();
        return this.dataRequestor.getData({
            url: url,
            parseResponse: parseResponse,
            qosName: qosName,
            qosHandler: qosHandler,
            customQosLogger: customQosLogger,
            additionalPostData: getAdditionalPostData && getAdditionalPostData(),
            method: method,
            additionalHeaders: additionalHeaders,
            contentType: contentType,
            maxRetries: maxRetries,
            noRedirect: noRedirect,
            crossSiteCollectionCall: crossSiteCollectionCall,
            needsRequestDigest: this.needsRequestDigest(url)
        });
    };
    return DataSource;
}());
exports.DataSource = DataSource;
exports.default = DataSource;



/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Promise_1 = __webpack_require__(27);
var Async_1 = __webpack_require__(67);
var Retry_1 = __webpack_require__(410);
var Qos_event_1 = __webpack_require__(31);
var Api_event_1 = __webpack_require__(411);
var RUMOneLogger_1 = __webpack_require__(44);
var ServerConnection_1 = __webpack_require__(412);
var Killswitch_1 = __webpack_require__(117);
var DataRequestor = /** @class */ (function () {
    function DataRequestor(params, dependencies) {
        this._pageContext = dependencies ? dependencies.pageContext : params.pageContext;
        this._qosName = params.qosName;
        this._async = new Async_1.default(this);
    }
    DataRequestor.parseJSON = function (responseText) {
        return responseText && JSON.parse(responseText) || undefined;
    };
    DataRequestor.prototype.getData = function (_a) {
        var _this = this;
        var url = _a.url, _b = _a.parseResponse, parseResponse = _b === void 0 ? DataRequestor.parseJSON : _b, qosName = _a.qosName, qosExtraData = _a.qosExtraData, qosHandler = _a.qosHandler, customQosLogger = _a.customQosLogger, _c = _a.additionalPostData, additionalPostData = _c === void 0 ? '' : _c, additionalHeaders = _a.additionalHeaders, contentType = _a.contentType, _d = _a.method, method = _d === void 0 ? 'POST' : _d, _e = _a.maxRetries, maxRetries = _e === void 0 ? 0 : _e, _f = _a.crossSiteCollectionCall, crossSiteCollectionCall = _f === void 0 ? false : _f, _g = _a.noRedirect, noRedirect = _g === void 0 ? false : _g, _h = _a.needsRequestDigest, needsRequestDigest = _h === void 0 ? true : _h, responseType = _a.responseType, onUploadProgress = _a.onUploadProgress, timeout = _a.timeout, specifiedAuthToken = _a.authToken, _j = _a.noTimeoutInLastRetry, noTimeoutInLastRetry = _j === void 0 ? false : _j;
        maxRetries = Math.max(maxRetries, 0);
        var numRetries = 0;
        var pageContext = this._pageContext;
        var getDataPromise = function (authToken) {
            // Add Authorization header to request if authToken exists on _spPageContext
            // and an Authorization header doesn't already exist on the request.
            if (authToken) {
                var authorizationHeaderValue = "Bearer " + authToken;
                // Add Authorization header if it doesn't exist already.
                if (additionalHeaders) {
                    var authorizationHeaderSpecified = false;
                    for (var headerKey in additionalHeaders) {
                        if (headerKey) {
                            if (headerKey.toLowerCase() === 'authorization') {
                                authorizationHeaderSpecified = true;
                            }
                        }
                    }
                    if (!authorizationHeaderSpecified) {
                        additionalHeaders['Authorization'] = authorizationHeaderValue;
                    }
                }
                else {
                    additionalHeaders = {
                        'Authorization': authorizationHeaderValue
                    };
                }
                // Since Authorization header is present, the request is cross-origin.
                crossSiteCollectionCall = true;
                needsRequestDigest = false;
                noRedirect = true;
            }
            var serverConnection = new ServerConnection_1.default(tslib_1.__assign({}, (pageContext ? {
                webServerRelativeUrl: pageContext.webServerRelativeUrl,
                webAbsoluteUrl: crossSiteCollectionCall ? pageContext.webAbsoluteUrl : undefined,
                formDigest: {
                    // Pull current digest state from the page.
                    // This helps initial requests avoid extra server calls.
                    // Unit tests will need to spoof this in order to avoid the need to mock the digest response.
                    updateFormDigestPageLoaded: pageContext.updateFormDigestPageLoaded,
                    formDigestValue: pageContext.formDigestValue,
                    formDigestTimeoutSeconds: pageContext.formDigestTimeoutSeconds
                }
            } : {}), { needsRequestDigest: needsRequestDigest }));
            var qosNames = [];
            if (_this._qosName) {
                qosNames.push(_this._qosName);
            }
            if (qosName) {
                qosNames.push(qosName);
            }
            qosName = qosNames.join('.');
            var logCustomQos = function (qosData) {
                if (customQosLogger) {
                    customQosLogger(qosData);
                }
            };
            var isCanceled;
            /* tslint:disable: no-any */
            var onExecute = function (complete, error) {
                /* tslint:enable: no-any */
                // forward declarations to shut up linter
                var onDataSuccess;
                var onError;
                var doGetData;
                onDataSuccess = function (serverData) {
                    var data;
                    var qos = new Qos_event_1.default({ name: qosName });
                    var response = serverData.getResponseText();
                    var extraData = tslib_1.__assign({}, (qosExtraData || {}), { CorrelationId: serverData.getCorrelationId(), HttpStatus: serverData.getStatus() });
                    var parsedResponse = false;
                    try {
                        if (_this._isBlobResponse(responseType, response)) {
                            data = response;
                        }
                        else {
                            data = parseResponse(response);
                        }
                        // This line could throw if the response does not have the expected data type.
                        // For example, there is at least one handler (SpoSuiteLinks.ashx) that will return
                        // an HTML error page rather than the expected JSON on error. We should count that case
                        // as a failure even though *something* was successfully returned.
                        parsedResponse = true;
                        var qosData = {
                            resultType: Qos_event_1.ResultTypeEnum.Success,
                            extraData: extraData
                        };
                        qos.end(qosData);
                        logCustomQos(qosData);
                    }
                    catch (ex) {
                        // The response did not parse properly.
                        var qosData = {
                            resultType: Qos_event_1.ResultTypeEnum.Failure,
                            resultCode: 'InvalidJSON',
                            error: (typeof ex === 'object' ? JSON.stringify(ex) : ex),
                            extraData: extraData
                        };
                        qos.end(qosData);
                        logCustomQos(qosData);
                        // let the caller know there was an error in parsing the data
                        error();
                    }
                    // pass the response to the caller
                    if (parsedResponse) {
                        qos = new Qos_event_1.default({ name: qosName + 'Complete' });
                        try {
                            complete(data);
                            var qosData = {
                                resultType: Qos_event_1.ResultTypeEnum.Success,
                                extraData: extraData
                            };
                            qos.end(qosData);
                            logCustomQos(qosData);
                        }
                        catch (ex) {
                            // the caller failed to handle the data
                            var qosData = {
                                resultType: Qos_event_1.ResultTypeEnum.Failure,
                                error: (typeof ex === 'object' ? JSON.stringify(ex) : ex),
                                extraData: extraData
                            };
                            qos.end(qosData);
                            logCustomQos(qosData);
                        }
                    }
                    serverConnection = undefined;
                };
                onError = function (serverData) {
                    var qos = new Qos_event_1.default({
                        name: qosName
                    });
                    var extraData = qosExtraData || {};
                    if (!serverData) {
                        var qosData = void 0;
                        if (isCanceled) {
                            // serverData will be undefined if the request was aborted
                            qosData = {
                                resultType: Qos_event_1.ResultTypeEnum.ExpectedFailure,
                                resultCode: 'RequestAborted',
                                extraData: extraData
                            };
                        }
                        else {
                            // Request completed, but did not return data or a useful status code. This can happen for any number of reasons:
                            // CORS Rejection (we could make a guess about this by comparing url origins)
                            // Request blocked by client (e.g. extension)
                            // Request blocked by firewall
                            qosData = {
                                resultType: Qos_event_1.ResultTypeEnum.ExpectedFailure,
                                resultCode: 'Unknown',
                                extraData: extraData
                            };
                            // Ensure that Promises that wrap the data request always complete.
                            error({ status: 0, code: '' });
                        }
                        qos.end(qosData);
                        logCustomQos(qosData);
                        return;
                    }
                    var correlationId = serverData.getCorrelationId();
                    var groupThrottle = serverData.getGroupThrottle();
                    var status = serverData.getStatus();
                    extraData = tslib_1.__assign({}, extraData, { CorrelationId: correlationId, HttpStatus: status, GroupThrottle: groupThrottle });
                    var resultType = Qos_event_1.ResultTypeEnum.Failure;
                    if (status === 403 || status === 404 || status === 429) {
                        // no need to retry authentication errors...
                        // no need to retry document not found errors...
                        // no need to retry resource throttling errors... (we need to back away from it.)
                        maxRetries = 0;
                        resultType = Qos_event_1.ResultTypeEnum.ExpectedFailure;
                    }
                    var parseQosError = function (response) {
                        var errorData = undefined;
                        if (typeof response === 'object' && typeof response.status === 'number') {
                            // Test to see if the response is already an IErrorData
                            errorData = response;
                        }
                        else if (typeof response === 'string') {
                            var parsedData = undefined;
                            try {
                                parsedData = JSON.parse(response);
                            }
                            catch (ex) {
                                // np-op
                            }
                            if (parsedData) {
                                errorData = (parsedData.error || parsedData['odata.error'] || { responseData: parsedData });
                            }
                        }
                        errorData = (errorData || {});
                        errorData.status = status;
                        if (correlationId) {
                            errorData.correlationId = correlationId;
                        }
                        if (groupThrottle) {
                            errorData.groupThrottle = groupThrottle;
                        }
                        var resultCode = status.toString();
                        if (qosHandler) {
                            resultCode = qosHandler(errorData);
                            if (status === 500 && (resultCode === 'DefaultDoclibNotFound' || resultCode === 'PrefetchWebMismatch')) {
                                maxRetries = 0;
                                resultType = Qos_event_1.ResultTypeEnum.ExpectedFailure;
                            }
                        }
                        var errorMessage = JSON.stringify(errorData);
                        var qosData = {
                            resultType: resultType,
                            error: errorMessage,
                            resultCode: resultCode,
                            extraData: extraData
                        };
                        qos.end(qosData);
                        logCustomQos(qosData);
                        if (numRetries < maxRetries) {
                            ++numRetries;
                            doGetData();
                        }
                        else {
                            error(errorData);
                        }
                    };
                    var responseType = serverData.getResponseType();
                    if (!responseType || responseType === 'text') {
                        var responseText = serverData.getResponseText();
                        parseQosError(responseText);
                    }
                    else {
                        serverData.parseError().then(parseQosError);
                    }
                };
                doGetData = function () {
                    serverConnection.getServerDataFromUrl({
                        url: url,
                        successCallback: onDataSuccess,
                        failureCallback: onError,
                        uploadProgressCallback: onUploadProgress,
                        additionalPostData: additionalPostData,
                        method: method,
                        additionalHeaders: additionalHeaders,
                        contentType: contentType,
                        withCredentials: authToken ? false : undefined,
                        noRedirect: noRedirect,
                        responseType: responseType,
                        needsRequestDigest: needsRequestDigest
                    });
                };
                doGetData();
            };
            var onCancel = function () {
                isCanceled = true;
                if (serverConnection) {
                    serverConnection.abort();
                    if (numRetries >= maxRetries) {
                        serverConnection.dispose();
                    }
                }
            };
            var rumOne = RUMOneLogger_1.default.getRUMOneLogger();
            var apiStartTime = Date.now();
            if (rumOne) {
                if (!Boolean(rumOne.readTempData('appDataFetchStart'))) {
                    // Record the App DataFetch start before the first API call
                    rumOne.saveTempData('appDataFetchStart', apiStartTime);
                }
            }
            var createPromise = function () {
                var promise;
                var createTimeoutPromise = function () {
                    var promise = new Promise_1.default(onExecute, onCancel);
                    // when it is the last retry and noTimeoutInLastRetry is set to true, do not set timeout to allow calls to finish,
                    // we at least can get data no matter how slow
                    if (timeout && (!noTimeoutInLastRetry || numRetries < maxRetries)) {
                        return Promise_1.default.timeout(timeout, promise);
                    }
                    return promise;
                };
                if (numRetries < maxRetries) {
                    promise = Retry_1.default({
                        retries: maxRetries,
                        callback: createTimeoutPromise,
                        canRetry: function (error) { return true; },
                        async: _this._async,
                        delay: 0,
                        adjustRetries: function (error) { return maxRetries - numRetries; },
                        beforeRetry: function () {
                            numRetries++;
                        }
                    });
                }
                else {
                    promise = createTimeoutPromise();
                }
                return promise.then(function (result) {
                    if (serverConnection) {
                        serverConnection.dispose();
                    }
                    return result;
                }, function (error) {
                    if (serverConnection) {
                        serverConnection.dispose();
                    }
                    return Promise_1.default.reject(error);
                });
            };
            return Api_event_1.default.instrumentPromise({
                url: url,
                name: qosName + '.Promise'
            }, createPromise, undefined, function (error) {
                /* tslint:enable:no-string-literal no-any */
                /// TODO: implement proper cancelation check when it's implemented in Promise.ts
                if (error instanceof Error && Promise_1.default.isCanceled(error)) {
                    return {
                        error: error.message,
                        resultCode: 'Canceled',
                        resultType: Qos_event_1.ResultTypeEnum.ExpectedFailure
                    };
                }
                if (error && error.status === 403) {
                    return {
                        error: JSON.stringify(error),
                        resultCode: 'AccessDenied',
                        resultType: Qos_event_1.ResultTypeEnum.ExpectedFailure
                    };
                }
                return tslib_1.__assign({}, getQosEndSchema(error), { resultType: Qos_event_1.ResultTypeEnum.Failure });
            });
        };
        return Promise_1.default.resolve(specifiedAuthToken ||
            (pageContext && (pageContext.getAuthToken && pageContext.getAuthToken() ||
                pageContext.authToken))).then(getDataPromise);
    };
    DataRequestor.prototype._isBlobResponse = function (responseType, response) {
        return responseType === 'blob' && response && typeof response === 'object';
    };
    return DataRequestor;
}());
exports.DataRequestor = DataRequestor;
function getQosEndSchema(error) {
    if (Killswitch_1.Killswitch.isActivated('78C04DFD-1688-4679-A984-ED60A4341F51', '4/10/2018', 'Include error data in QoS failures.')) {
        return {
            resultCode: '',
            error: "" + error
        };
    }
    if (error instanceof Error) {
        return {
            resultCode: '',
            error: error.toString()
        };
    }
    if (isErrorData(error)) {
        return {
            resultCode: typeof error.code === 'string' ? error.code : "" + error.status,
            error: JSON.stringify(error)
        };
    }
    return {
        error: error,
        resultCode: ''
    };
}
function isErrorData(error) {
    return !!error && typeof error === 'object' && ('code' in error);
}
exports.default = DataRequestor;



/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Signal_1 = __webpack_require__(66);
/**
 * Retry allows you to invoke a callback a configurable number of times before giving up.
 */
function Retry(config) {
    var adjustRetries = config.adjustRetries, async = config.async, beforeRetry = config.beforeRetry, callback = config.callback, _a = config.canRetry, canRetry = _a === void 0 ? function () { return true; } : _a, delay = config.delay, resetAttemptsOnRestart = config.resetAttemptsOnRestart, retries = config.retries, shouldRestart = config.shouldRestart;
    var attempts = 0;
    var promise;
    var signal = new Signal_1.default(function () {
        promise.cancel();
    });
    function onSuccess(value) {
        if (shouldRestart && shouldRestart()) {
            if (resetAttemptsOnRestart) {
                attempts = 0;
            }
            callCallback();
        }
        else {
            signal.complete(value);
        }
    }
    function onError(error) {
        if (adjustRetries) {
            retries = adjustRetries(error);
        }
        if (attempts < retries && canRetry(error)) {
            attempts++;
            if (beforeRetry) {
                beforeRetry();
            }
            if (typeof delay === 'number' && async) {
                async.setTimeout(callCallback, delay);
            }
            else {
                callCallback();
            }
        }
        else {
            signal.error(error);
        }
    }
    function callCallback() {
        promise = callback();
        promise.then(onSuccess, onError);
    }
    callCallback();
    return signal.getPromise();
}
exports.default = Retry;


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// OneDrive:IgnoreCodeCoverage
Object.defineProperty(exports, "__esModule", { value: true });
var PairedEventBase_1 = __webpack_require__(127);
var Qos_event_1 = __webpack_require__(31);
var ResultTypeEnum_1 = __webpack_require__(125);
exports.ResultTypeEnum = ResultTypeEnum_1.ResultTypeEnum;
exports.Api = PairedEventBase_1.createPairedEvent({
    eventName: 'Api,Qos,',
    shortEventName: 'Api',
    samplingFeature: { ODB: true, ODC: 'ApiEventLogging', Fallback: true }
}, {
    url: 1 /* String */
}, Qos_event_1.Qos);
exports.default = exports.Api;


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServerData_1 = __webpack_require__(413);
var UriEncoding_1 = __webpack_require__(45);
var Uri_1 = __webpack_require__(68);
var Scope_1 = __webpack_require__(47);
var APICallPerformanceData_1 = __webpack_require__(126);
var RUMOneLogger_1 = __webpack_require__(44);
var EventGroup_1 = __webpack_require__(129);
var Promise_1 = __webpack_require__(27);
var ServerConnection = /** @class */ (function () {
    function ServerConnection(params) {
        if (params === void 0) { params = {}; }
        this._scope = new Scope_1.default();
        this._events = this._scope.attach(new EventGroup_1.default(this));
        // If the absolute URL is provided, it will be used for most requests.
        var webAbsoluteUrl = params.webAbsoluteUrl || params.webUrl;
        // The server-relative URL is used for caching request digests.
        // If it's not provided, try and calculate it from the absolute URL.
        this._webServerRelativeUrl = params.webServerRelativeUrl || (webAbsoluteUrl && new Uri_1.default(webAbsoluteUrl).getPath());
        if (this._webServerRelativeUrl === '/') {
            this._webServerRelativeUrl = '';
        }
        if (webAbsoluteUrl) {
            this._webAbsoluteUrl = webAbsoluteUrl;
            this._alwaysGetDigest = true;
        }
        else {
            this._alwaysGetDigest = false;
        }
        this._needsRequestDigest = params.needsRequestDigest !== false;
        if (this._needsRequestDigest) {
            this._tryLoadDigest(params.formDigest);
        }
        this._requestCanaryForAuth = false;
    }
    ServerConnection._isXhrAborted = function (xhr) {
        try {
            // status isn't necessarily valid unless the readyState is true.
            if (xhr.readyState === 4 && (typeof (xhr.status) === 'undefined' || xhr.status === 0)) {
                return true;
            }
            if (xhr.isCancelled) {
                return true;
            }
        }
        catch (e) {
            return true;
        }
        return false;
    };
    ServerConnection._isValidFormDigest = function (formDigest) {
        return formDigest && formDigest.updateFormDigestPageLoaded &&
            (Date.now() - formDigest.updateFormDigestPageLoaded.getTime()) < formDigest.formDigestTimeoutSeconds * 1000 /*convert to ms*/;
    };
    ServerConnection.prototype.dispose = function () {
        this._scope.dispose();
    };
    ServerConnection.prototype.abort = function () {
        if (this._currentRequest) {
            // Add a custom field to this request object so we can pass the message to the OnReadyStateChange function that THIS specific XHR has been canceled!
            //  It's unclear to me is this is really needed.  Some documentation I have ready states 'Calling abort resets the object; the onreadystatechange
            //  event handler is removed, and readyState is changed to 0 (uninitialized).'  If this is the case, then the onreadystatechange should never be
            //  called and if it is then the state of the request is set to 0, which I handle below.
            // For completeness only I leave this here.  (Belt and suspenders).
            var request = this._currentRequest;
            request.isCancelled = true;
            // Now abort this XHR
            request.abort();
            this._currentRequest = undefined;
        }
    };
    ServerConnection.prototype.isRequestActive = function () {
        return !!this._currentRequest;
    };
    ServerConnection.prototype.getServerDataFromUrl = function (options) {
        var _this = this;
        var strUrl = options.url, successCallback = options.successCallback, failureCallback = options.failureCallback, uploadProgressCallback = options.uploadProgressCallback, additionalPostData = options.additionalPostData, _a = options.isRest, fRest = _a === void 0 ? true : _a, _b = options.method, method = _b === void 0 ? 'POST' : _b, withCredentials = options.withCredentials, additionalHeaders = options.additionalHeaders, contentType = options.contentType, noRedirect = options.noRedirect, responseType = options.responseType, _c = options.needsRequestDigest, needsRequestDigest = _c === void 0 ? this._needsRequestDigest : _c;
        var startTime = new Date().toISOString();
        var req = new XMLHttpRequest();
        req.open(method, strUrl, true);
        if (typeof withCredentials === 'boolean') {
            req.withCredentials = withCredentials;
        }
        if (responseType) {
            req.responseType = responseType;
        }
        // Set the Content Type
        if (contentType) {
            req.setRequestHeader('Content-Type', contentType);
        }
        else {
            if (fRest) {
                req.setRequestHeader('Content-Type', 'application/json;odata=verbose');
            }
            else {
                req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
        }
        var acceptHeaderSpecified = false;
        if (additionalHeaders) {
            for (var headerKey in additionalHeaders) {
                if (headerKey) {
                    req.setRequestHeader(headerKey, additionalHeaders[headerKey]);
                    if (headerKey.toLowerCase() === 'accept') {
                        acceptHeaderSpecified = true;
                    }
                }
            }
        }
        if (!acceptHeaderSpecified) {
            req.setRequestHeader('accept', 'application/json;odata=verbose');
        }
        // Remember this request so we can tell if we have a request in flight and so we can cancel it if needed.
        this._currentRequest = req;
        var onRequestDigestReady = function (requestDigest) {
            if (needsRequestDigest && requestDigest) {
                req.setRequestHeader('x-requestdigest', requestDigest);
            }
            _this._events.on(req, 'readystatechange', function () {
                _this._onReadyStateChange(req, strUrl, successCallback, failureCallback, noRedirect, startTime);
            });
            if (uploadProgressCallback && req.upload) {
                _this._events.on(req.upload, 'progress', function (event) {
                    uploadProgressCallback(event);
                });
            }
            req.send(additionalPostData);
        };
        if (needsRequestDigest) {
            this._ensureRequestDigest(onRequestDigestReady, failureCallback);
        }
        else {
            onRequestDigestReady();
        }
    };
    ServerConnection.prototype.ensureRequestDigest = function (callback, failureCallback) {
        this._ensureRequestDigest(callback, failureCallback);
    };
    ServerConnection.prototype._ensureRequestDigest = function (callback, failureCallback) {
        // if requestDigest is available and not expired then use it, otherwise get a new one
        var currentDigest = ServerConnection._formDigests[this._webServerRelativeUrl];
        if (!this._alwaysGetDigest && ServerConnection._isValidFormDigest(currentDigest)) {
            callback(currentDigest.formDigestValue);
        }
        else {
            this._ensureRequestDigestWorker(callback, failureCallback);
        }
    };
    ServerConnection.prototype._ensureRequestDigestWorker = function (callback, failureCallback) {
        var _this = this;
        var serverConnection = new ServerConnection({
            needsRequestDigest: false,
            webServerRelativeUrl: this._webServerRelativeUrl,
            webUrl: undefined
        });
        if (!callback) {
            // no callback only means we're doing auth only request.
            serverConnection._requestCanaryForAuth = true;
        }
        var webUrl = this._webAbsoluteUrl || this._webServerRelativeUrl;
        if (typeof webUrl === 'string') {
            // If static promise does not exist, create it
            if (!ServerConnection._requestDigestPromise) {
                ServerConnection._requestDigestPromise = new Promise_1.default(function (complete, e) {
                    var onDataSuccess = function (serverData) {
                        var responseText = serverData.getResponseText();
                        var jsonObj = JSON.parse(responseText);
                        var requestDigest = jsonObj.d.GetContextWebInformation;
                        ServerConnection._formDigests[_this._webServerRelativeUrl] = {
                            formDigestValue: requestDigest.FormDigestValue,
                            formDigestTimeoutSeconds: requestDigest.FormDigestTimeoutSeconds - ServerConnection.INTERVAL_ADJUST,
                            updateFormDigestPageLoaded: new Date()
                        };
                        complete(ServerConnection._formDigests[_this._webServerRelativeUrl].formDigestValue);
                        ServerConnection._requestDigestPromise = undefined;
                    };
                    var onDataError = function (serverData) {
                        if (callback) {
                            callback(undefined);
                        }
                        else if (failureCallback) {
                            failureCallback(serverData);
                        }
                        e(undefined);
                        ServerConnection._requestDigestPromise = undefined;
                    };
                    serverConnection.getServerDataFromUrl({
                        url: Uri_1.default.concatenate(webUrl, '/_api/contextinfo'),
                        successCallback: onDataSuccess,
                        failureCallback: onDataError,
                        method: 'POST',
                        noRedirect: !!failureCallback
                    });
                });
            }
            ServerConnection._requestDigestPromise.then(function (requestDigest) {
                if (callback) {
                    callback(requestDigest);
                }
                return requestDigest;
            });
        }
        else if (failureCallback) {
            failureCallback(undefined);
        }
    };
    ServerConnection.prototype._onReadyStateChange = function (req, strUrl, successCallback, failureCallback, noRedirect, startTime) {
        // Don't do anything unless the State is 'Ready' and this request has not yet been aborted.
        if (req.readyState !== 4) {
            return;
        }
        // undefined out the request that this object is holding onto.  This is the flag to let us know that we no longer have an active request.
        this._currentRequest = undefined;
        this._events.off(req);
        if (req.upload) {
            this._events.off(req.upload);
        }
        if (!ServerConnection._isXhrAborted(req)) {
            var serverData_1 = new ServerData_1.default(req, strUrl);
            var status_1 = serverData_1.getStatus();
            var rumOne = RUMOneLogger_1.default.getRUMOneLogger();
            var apiEndTime = Date.now();
            if (rumOne) {
                var apiData = new APICallPerformanceData_1.default(strUrl, Number(req.getResponseHeader('SPClientServiceRequestDuration')), req.getResponseHeader('SPRequestGuid'), status_1, startTime, new Date().toISOString());
                rumOne.writeAPICallPerformanceData(apiData); // log a API call perf data object for each API call before EUPL complete
                rumOne.saveTempData('appDataFetchEnd', apiEndTime); // Record the last API call end time as app data fetch end
            }
            var shouldRedirectToErrorCustomPromptLocation = !noRedirect && this._shouldRedirectToErrorCustomPromptLocation(req);
            if (this._requestCanaryForAuth) {
                this._requestCanaryForAuth = false;
                if (status_1 === 403) {
                    try {
                        if (shouldRedirectToErrorCustomPromptLocation) {
                            this._redirectToErrorCustomPromptLocation(req);
                        }
                        else {
                            failureCallback(serverData_1);
                        }
                    }
                    catch (e) {
                        // ignore
                    }
                    if (!noRedirect) {
                        // if users hit 403 again, they're unauthenticated, try redirect to auth.
                        var redirectLoginPageURL = serverData_1.getAuthenticationRedirect();
                        if (redirectLoginPageURL) {
                            var redirectLoginPageUri = new Uri_1.default(redirectLoginPageURL);
                            redirectLoginPageUri.setQueryParameter('ReturnUrl', UriEncoding_1.default.encodeURIComponent(window.location.href));
                            window.location.href = redirectLoginPageUri.toString();
                        }
                    }
                }
                else {
                    // we got form digest, so user is authenticated, they just don't have access to call the API requested
                    // let data source know about the error so it get properly accounted
                    try {
                        failureCallback(serverData_1);
                    }
                    catch (e) {
                        // ignore
                    }
                    if (!noRedirect) {
                        // handle the redirect to the login page if requested to do so.
                        // this means users have logged in, yet they don't have permision to the OneDrive list.
                        // Go to accessdenied page with request access options.
                        var redirectLoginPageURL = (this._webAbsoluteUrl || this._webServerRelativeUrl) + '/_layouts/15/AccessDenied.aspx';
                        if (redirectLoginPageURL) {
                            var redirectLoginPageUri = new Uri_1.default(redirectLoginPageURL);
                            redirectLoginPageUri.setQueryParameter('Source', UriEncoding_1.default.encodeURIComponent(window.location.href));
                            redirectLoginPageUri.setQueryParameter('Type', 'list');
                            redirectLoginPageUri.setQueryParameter('correlation', UriEncoding_1.default.encodeURIComponent(serverData_1.getCorrelationId()));
                            // todo: set list guid! (we don't have that info from server context yet).
                            // the access denied page will still kind of work, except that we'll request access to the site, not the list.
                            // redirectLoginPageUri.setQueryParameter('name', context.listName);
                            // Ideally this should be using the navigation resource, but it is not guaranteed to be present here some
                            // DataSources do not extend the base DataSource.
                            window.location.href = redirectLoginPageUri.toString();
                        }
                    }
                }
                return;
            }
            if (status_1 === 200 || status_1 === 201 || status_1 === 204) {
                successCallback(serverData_1);
                return;
            }
            else if (status_1 === 403) {
                ServerConnection._requestDigestPromise = undefined;
                if (noRedirect) {
                    this._ensureRequestDigestWorker(undefined, function () { return failureCallback(serverData_1); }); // call Canary to check if the user has already signed in or ot.
                }
                else {
                    if (shouldRedirectToErrorCustomPromptLocation) {
                        this._redirectToErrorCustomPromptLocation(req);
                    }
                    else {
                        this._ensureRequestDigestWorker(undefined);
                    }
                }
                return;
            }
            else if (status_1 === 401) {
                if (shouldRedirectToErrorCustomPromptLocation) {
                    this._redirectToErrorCustomPromptLocation(req);
                }
            }
            failureCallback(serverData_1);
        }
        else {
            failureCallback();
        }
    };
    /** Attempts to load or refresh the cached form digest with the params form digest data. */
    ServerConnection.prototype._tryLoadDigest = function (formDigest) {
        // should start using the params data when:
        // params has valid form digest data and
        // - the cached form digest data is invalid or expired or
        // - the params digest data is fresher that the cached data.
        var cachedFormDigest = ServerConnection._formDigests[this._webServerRelativeUrl];
        if (ServerConnection._isValidFormDigest(formDigest) &&
            (!ServerConnection._isValidFormDigest(cachedFormDigest) ||
                cachedFormDigest.updateFormDigestPageLoaded.getTime() < formDigest.updateFormDigestPageLoaded.getTime())) {
            ServerConnection._formDigests[this._webServerRelativeUrl] = formDigest;
        }
    };
    /**
     * If a 401/403 is returned, check for the SharePoint custom error code that indicates the
     * user needs to reattest and redirect to the custom prompt location.
     */
    ServerConnection.prototype._shouldRedirectToErrorCustomPromptLocation = function (req) {
        var spErrorCode = req.getResponseHeader('X-SPO-ErrorCode');
        var legacySharePointErrorCode = req.getResponseHeader('sharepointerror');
        return spErrorCode === '9.3' || legacySharePointErrorCode === '-2130575129';
    };
    ServerConnection.prototype._redirectToErrorCustomPromptLocation = function (req) {
        var reattestionPageUri = new Uri_1.default(req.getResponseHeader('X-SPO-ErrorCustomPromptLocation'));
        reattestionPageUri.setQueryParameter('ReturnUrl', window.location.href);
        window.location.href = reattestionPageUri.toString();
    };
    // Number of seconds subtracted from the request digest interval
    // to compensate for the client-server delay
    ServerConnection.INTERVAL_ADJUST = 10;
    ServerConnection._formDigests = {};
    ServerConnection._requestDigestPromise = undefined;
    return ServerConnection;
}());
exports.default = ServerConnection;



/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Signal_1 = __webpack_require__(66);
function _parseBlobError(blob) {
    var signal = new Signal_1.default();
    var reader;
    var onLoad = function () {
        if (reader.result) {
            var response = void 0;
            try {
                response = JSON.parse(reader.result);
                signal.complete(response);
            }
            catch (error) {
                signal.complete({ message: 'Unable to parse blob result.' });
            }
        }
    };
    var onError = function () {
        signal.complete({ message: 'Unable to read blob error response.' });
    };
    try {
        reader = new FileReader();
        reader.addEventListener('load', onLoad);
        reader.addEventListener('error', onError);
        reader.readAsText(blob);
    }
    catch (error) {
        onError();
    }
    return signal.getPromise().then(function (errorData) {
        if (reader) {
            reader.removeEventListener('load', onLoad);
            reader.removeEventListener('error', onError);
        }
        return errorData;
    });
}
var ServerData = /** @class */ (function () {
    function ServerData(request, strUrl) {
        this._request = request;
        this._url = strUrl;
    }
    ServerData.prototype.getSourceUrl = function () {
        return this._url;
    };
    ServerData.prototype.getCorrelationId = function () {
        return this._request.getResponseHeader('SPRequestGuid');
    };
    ServerData.prototype.getGroupThrottle = function () {
        return this._request.getResponseHeader('SPGroupThrottle');
    };
    ServerData.prototype.getStatus = function () {
        try {
            // We read the status in a try catch to avoid issues
            // with IE implementation which throws a bogus exception
            return this._request.status;
        }
        catch (e) {
            // do nothing
        }
    };
    ServerData.prototype.getAuthenticationRedirect = function () {
        return this._request.getResponseHeader('X-Forms_Based_Auth_Required');
    };
    ServerData.prototype.getResponseType = function () {
        return this._request.responseType;
    };
    ServerData.prototype.getResponseText = function () {
        if (!this._request.responseType || this._request.responseType === 'text') {
            return this._request.responseText;
        }
        else {
            return this._request.response;
        }
    };
    ServerData.prototype.getErrorResponseText = function () {
        if (this._request.responseType === 'blob') {
            var errorData = {
                status: this._request.status,
                statusText: this._request.statusText,
                infected: undefined
            };
            if (this._request.getResponseHeader('x-virus-infected')) {
                errorData.infected = true;
            }
            return errorData;
        }
        else {
            return this.getResponseText();
        }
    };
    ServerData.prototype.parseError = function () {
        var _this = this;
        var signal = new Signal_1.default();
        if (!this._request.responseType || this._request.responseType === 'text') {
            signal.complete(this._request.responseText);
        }
        else if (this._request.responseType === 'blob') {
            _parseBlobError(this._request.response).then(function (response) {
                var errorData = {
                    data: response,
                    status: _this.getStatus(),
                    statusText: _this._request.statusText,
                    infected: !!_this._request.getResponseHeader('x-virus-infected')
                };
                signal.complete(errorData);
            });
        }
        else {
            signal.complete(this._request.response);
        }
        return signal.getPromise();
    };
    ServerData.prototype.getValue = function (key) {
        var value;
        switch (key) {
            case ServerData.DataValueKeys.SourceURL:
                value = this.getSourceUrl();
                break;
            case ServerData.DataValueKeys.CorrelationId:
                value = this.getCorrelationId();
                break;
            case ServerData.DataValueKeys.Status:
                value = this.getStatus();
                break;
            case ServerData.DataValueKeys.AuthenticationRedirect:
                value = this.getAuthenticationRedirect();
                break;
            case ServerData.DataValueKeys.ResponseText:
                value = this.getResponseText();
                break;
            case ServerData.DataValueKeys.ErrorResponseText:
                value = this.getErrorResponseText();
                break;
        }
        return value;
    };
    /* tslint:disable:variable-name */
    ServerData.DataValueKeys = {
        // (String) Original source url for this request.
        SourceURL: 'SourceUrl',
        // (String) SharePoint CorrelationId that corresponds with this request.
        CorrelationId: 'CorrelationId',
        // (Number) HTTP status code for this request
        Status: 'Status',
        // (String) URL to redirect to in case of an error
        AuthenticationRedirect: 'AuthenticationRedirect',
        // (String) Response text for this server request.
        ResponseText: 'ResponseText',
        // (String) Error Response for this server request.
        ErrorResponseText: 'ErrorResponseText',
        // (String) GroupThrottle Response for this server request.
        GroupThrottle: 'GroupThrottle'
    };
    return ServerData;
}());
exports.default = ServerData;



/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var index_1 = __webpack_require__(415);
var GraphError = /** @class */ (function (_super) {
    tslib_1.__extends(GraphError, _super);
    function GraphError(error, params) {
        var _this = this;
        var props = tslib_1.__assign({ innerError: error }, params);
        _this = _super.call(this, props) || this;
        /* tslint:disable:no-use-before-declare */
        var _a = params.response, _b = (_a === void 0 ? {} : _a).error, _c = (_b === void 0 ? {} : _b).innererror, _d = (_c === void 0 ? {} : _c).stackTrace, stackTrace = _d === void 0 ? '' : _d, response = params.response, request = params.request, status = params.status;
        /* tslint:enable:no-use-before-declare */
        var message = error.message;
        _this.name = 'GraphError';
        _this.message = message;
        _this.response = response;
        _this.status = status;
        _this.serverStack = stackTrace;
        _this.request = request;
        _this.error = error;
        return _this;
    }
    return GraphError;
}(index_1.CustomError));
exports.GraphError = GraphError;
var errorMessage = 'errorMessage';
var vroomStatus = 'vroomStatus';
var vroomErrorCode = 'vroomErrorCode';
var vroomErrorMessage = 'vroomErrorMessage';
var vroomErrorInnerCode = 'vroomErrorInnerCode';
var vroomErrorInnerMessage = 'vroomErrorInnerMessage';
var vroomErrorInnerDebugMessage = 'vroomErrorInnerDebugMessage';
var vroomErrorInnerStack = 'vroomErrorInnerStack';
function getQosExtraDataFromError(error) {
    var extraData = {};
    extraData[errorMessage] = error.message;
    if (isGraphError(error)) {
        extraData[vroomStatus] = error.status;
        var response = error.response;
        if (response && response.error) {
            var responseError = response.error;
            extraData[vroomErrorCode] = responseError.code;
            extraData[vroomErrorMessage] = responseError.message;
            var innerError = responseError.innererror;
            if (innerError) {
                extraData[vroomErrorInnerCode] = innerError.code;
                extraData[vroomErrorInnerMessage] = innerError.message;
                extraData[vroomErrorInnerDebugMessage] = innerError.debugMessage;
                extraData[vroomErrorInnerStack] = innerError.stackTrace;
            }
        }
    }
    return extraData;
}
exports.getQosExtraDataFromError = getQosExtraDataFromError;
function isGraphError(error) {
    return error instanceof GraphError;
}
exports.isGraphError = isGraphError;
function getErrorResolution(error, resolveError) {
    if (isGraphError(error)) {
        var response = error.response, status_1 = error.status;
        if (response) {
            var innerErrors = [];
            var innerError = response.error;
            while (innerError) {
                innerErrors.push(innerError);
                innerError = innerError.innererror;
            }
            while (innerError = innerErrors.pop()) {
                var resolution = resolveError(innerError.code, error);
                if (resolution !== undefined) {
                    return resolution;
                }
            }
        }
        return resolveError(status_1, error);
    }
}
exports.getErrorResolution = getErrorResolution;
function getResultCodeFromError(error) {
    return getErrorResolution(error, function (code) { return "" + code; }) || 'unhandled';
}
exports.getResultCodeFromError = getResultCodeFromError;



/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(416), exports);


/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base class for custom errors.
 * Derive sub-classes from this class to implement errors which support
 * strongly-typed constructors and visible fields.
 *
 * The pattern to extend Error properly is documented here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 */
var CustomError = /** @class */ (function () {
    function CustomError(props) {
        if (props === void 0) { props = {}; }
        // The real error will be returned.
        var error = new Error(props.message);
        var customErrorType = Object.getPrototypeOf(this);
        this.message = props.message || error.message;
        // @ts-ignore
        if (Error.captureStackTrace) {
            // @ts-ignore
            Error.captureStackTrace(error, customErrorType);
        }
        if (Object.setPrototypeOf) {
            // Force the error instance to use the custom prototype.
            // This works on all supported browsers, except PhantomJS.
            Object.setPrototypeOf(error, customErrorType);
            return error;
        }
    }
    return CustomError;
}());
exports.CustomError = CustomError;
// For Error, need to manually extend the built-in type since TypeScript does not emit the necessary output.
if (Object.setPrototypeOf) {
    // This works on all supported browsers, except PhantomJS.
    CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
            value: Error,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    Object.setPrototypeOf(CustomError, Error);
}


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// OneDrive:IgnoreCodeCoverage
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Matches strings that look like email addresses.
 * Note that this regex will also match surrounding brackets and double-quotes; e.g. all of the following will match:
 * a@b.com "a@b.com" <a@b.com> 'a@b.com "a@b.com> a@b.com> <a@b.com etc.
 */
var EmailAddressParser = /** @class */ (function () {
    /**
     * Parses text input into name and address properties.
     * @param {string} text - The string to parse.
     * @returns {EmailAddressParser} EmailAddressParser instances.
     */
    function EmailAddressParser(text) {
        var email;
        this._raw = text;
        if (!text) {
            return;
        }
        // WinLive: 656427: AutoComplete: Replying to message with no friendly name fails to populate the reply-to address in the To box for BiDi languages
        // Remove Unicode left-to-right and right-to-left markers (invisible chars)
        text = text.replace(/\u200e|\u200f/g, "");
        text = text.trim();
        // Match an email address out of the string.
        // In order to do iterative matching, we need a regex with the global flag which is private to this method.
        // There would be errors in subsequent uses of the regex if EmailRegex had the global flag.
        var emailRegex = new RegExp(EmailAddressParser.EmailRegexPattern, "gi");
        var addrMatch;
        var currMatch;
        var addrMatchType = EmailAddressParser.EmailMatchTypes.None;
        var currMatchType = EmailAddressParser.EmailMatchTypes.None;
        while ((currMatch = emailRegex.exec(text)) != null) {
            var currMatchString = currMatch[0];
            var firstChar = currMatchString.charAt(0);
            var lastChar = currMatchString.charAt(currMatchString.length - 1);
            // Figure out what kind of email address we have
            if (firstChar === '<' && lastChar === '>') {
                currMatchType = EmailAddressParser.EmailMatchTypes.Bracketed;
            }
            else if (firstChar === '"' && lastChar === '"') {
                currMatchType = EmailAddressParser.EmailMatchTypes.Quoted;
            }
            else {
                currMatchType = EmailAddressParser.EmailMatchTypes.Bare;
            }
            if (currMatchType > addrMatchType) {
                // If this address is more desirable than what we currently have, replace it.
                addrMatch = currMatch;
                addrMatchType = currMatchType;
                if (currMatchType === EmailAddressParser.EmailMatchTypes.Bracketed) {
                    // Since Bracketed emails are the most desirable, we break on the first one we find
                    // to avoid unneccesary processing.
                    break;
                }
            }
        }
        // Clean up the email address and parse out the name, if possible.
        var rawName = text;
        if (addrMatch) {
            email = addrMatch[0];
            // Split the text into three parts based on the address (before/address/after):
            var startIndex = addrMatch.index;
            var endIndex = startIndex + email.length;
            var before = startIndex > 0 ? text.substr(0, startIndex).trim() : "";
            var after = endIndex < text.length ? text.substr(endIndex) : "";
            // Remove surrounding quote marks and brackets.
            var cleanEmail = EmailAddressParser.StripBracketsAndQuotesRegex.exec(email);
            email = cleanEmail[1];
            // Remove leading quote mark if there's also a trailing quote mark.
            if (email.charAt(0) === "'" && after && after.charAt(0) === "'") {
                email = email.slice(1);
                after = after.slice(1).trim();
            }
            // Choose the first non-empty string to parse the name from:
            rawName = before === "" ? after : before;
            this._email = email.trim();
        }
        // Clean up the name next...
        rawName = rawName.replace(/^\s*"\s*/, "").trim();
        if ((rawName.length > 1) && (rawName.charAt(rawName.length - 2) !== "/")) {
            // Last double-quote is not escaped; remove it:
            rawName = rawName.replace(/\s*"$/, "");
        }
        // Remove all escapes:
        rawName = rawName.replace(/\//g, "");
        if (rawName !== "" && rawName !== email) {
            this._name = rawName;
        }
    }
    /**
     * Checks if the given string is a valid email address format.
     * @param {string} token - A string (potentially) containing an email address.
     * @param {boolean} checkRfcCompliant - If true, also checks to make sure that the
     * string contains an address that is nominally RFC822-compliant. Otherwise, only checks whether the
     * EmailAddressParser recognizes a parsable email address inside the string. Defaults to false
     * @returns {boolean} True if the string represents a parsable email address.
     */
    EmailAddressParser.isValidEmailSyntax = function (token, checkRfcCompliant) {
        if (!token) {
            return false;
        }
        return !!(checkRfcCompliant ? EmailAddressParser.ValidEmailRegex : EmailAddressParser.EmailRegex).exec(token.trim());
    };
    /**
     * Factory method that parses a text string into an array of EmailAddressParser instances.
     * @param {string} text - The string to parse.
     * @returns {EmailAddressParser} An array of EmailAddressParser instances.
     */
    EmailAddressParser.parse = function (text) {
        if (!text) {
            return [];
        }
        var entries = EmailAddressParser._splitAddresses(text);
        var addresses = [];
        for (var i = 0, len = entries.length; i < len; i++) {
            addresses.push(new EmailAddressParser(entries[i]));
        }
        return addresses;
    };
    /**
     * Answers whether the last email address has a delimiter at the end of it.
     * @param {string} text - The string to parse.
     * @returns {boolean} True if the last email address ends with a delimiter, false otherwise
     */
    EmailAddressParser.endsWithDelimiter = function (text) {
        if (text) {
            var parts = text.split(EmailAddressParser.DelimiterRegex);
            return !parts[parts.length - 1].trim();
        }
        else {
            return false;
        }
    };
    /**
     * Parses a string containing semicolon- or comma-delimited email addresses into entries.
     * Separators within double-quotes are not active, allowing names such as "Last, First".
     * @param {string} s - The string to parse.
     * @returns {String} An array of address strings
     */
    EmailAddressParser._splitAddresses = function (s) {
        var parts = s.split(EmailAddressParser.DelimiterRegex);
        // Trim entries of whitespace and remove empty entries:
        for (var i = parts.length - 1; i >= 0; i--) {
            parts[i] = parts[i].trim();
            if (parts[i].length === 0) {
                parts.splice(i, 1);
            }
        }
        return parts;
    };
    /**
     * Gets the parsed email address of the contact
     * @returns {String}
     */
    EmailAddressParser.prototype.getEmail = function () {
        return this._email;
    };
    /**
     * Gets the display name of the contact
     * @returns {String}
     */
    EmailAddressParser.prototype.getName = function () {
        return this._name;
    };
    /**
     * Gets the raw value of the contact
     * @returns {String}
     */
    EmailAddressParser.prototype.getRaw = function () {
        return this._raw;
    };
    // WinLive 839729 - In order to avoid parsing issues with characters above ASCII range, the regex accepts any unicode
    // charactes above ASCII range wherever it would also accept alphanumeric characters. Ideally, it'd exclude
    // non-word characters, but the regex engine in Javascript doesn't provide enough unicode support for that,
    // so we use the blunt instrument of including \u0080-\uFFFF as valid.
    // Email addresses that contain characters in the \u0080-\uFFFF range aren't actually valid, but we still want to
    // recognize them as part of the email address so that it's even possible to detect the email address as invalid.
    // Otherwise, the algorithm would merely truncate to the valid part of the email address.
    // It is up to clients to validate their email addresses if they want stricter checking.
    EmailAddressParser.EmailRegexPattern = "(?:[<\"]\\s*)?[a-z0-9\\u0080-\\uFFFF!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9\\u0080-\\uFFFF!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9\\u0080-\\uFFFF](?:[a-z0-9\\u0080-\\uFFFF-]*[a-z0-9\\u0080-\\uFFFF])?\\.)+[a-z0-9\\u0080-\\uFFFF](?:[a-z0-9\\u0080-\\uFFFF-]*[a-z0-9\\u0080-\\uFFFF])?(?:\\s*[>\"])?";
    EmailAddressParser.EmailRegex = new RegExp(EmailAddressParser.EmailRegexPattern, "i");
    // RegEx pattern used to test if a string has valid email syntax (RFC822).
    EmailAddressParser.ValidEmailRegexPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@((?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)";
    EmailAddressParser.ValidEmailRegex = new RegExp(EmailAddressParser.ValidEmailRegexPattern, "i");
    // Regex used for stripping off the extra quote marks and brackets that the above regex matches
    EmailAddressParser.StripBracketsAndQuotesRegex = /^[<"]?([^<>"]*)[>"]?$/;
    EmailAddressParser.DelimiterRegex = /[,;](?=(?:[^"]*"[^"]*")*(?![^"]*"))/;
    EmailAddressParser.EmailMatchTypes = { None: 0, Quoted: 1, Bare: 2, Bracketed: 3 };
    return EmailAddressParser;
}());
exports.default = EmailAddressParser;


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PrincipalType_1 = __webpack_require__(316);
exports.PrincipalType = PrincipalType_1.default;
var EntityType;
(function (EntityType) {
    EntityType[EntityType["regularUser"] = 0] = "regularUser";
    EntityType[EntityType["externalUser"] = 1] = "externalUser";
    EntityType[EntityType["group"] = 2] = "group";
    EntityType[EntityType["application"] = 3] = "application";
})(EntityType = exports.EntityType || (exports.EntityType = {}));



/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// OneDrive:IgnoreCodeCoverage
Object.defineProperty(exports, "__esModule", { value: true });
var PresenceType;
(function (PresenceType) {
    PresenceType[PresenceType["Unknown"] = 0] = "Unknown";
    PresenceType[PresenceType["Online"] = 1] = "Online";
    PresenceType[PresenceType["Busy"] = 2] = "Busy";
    PresenceType[PresenceType["DoNotDisturb"] = 3] = "DoNotDisturb";
    PresenceType[PresenceType["BeRightBack"] = 4] = "BeRightBack";
    PresenceType[PresenceType["Away"] = 5] = "Away";
    PresenceType[PresenceType["Offline"] = 6] = "Offline";
    PresenceType[PresenceType["Hidden"] = 7] = "Hidden";
})(PresenceType = exports.PresenceType || (exports.PresenceType = {}));



/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// OneDrive:CoverageThreshold(80)
Object.defineProperty(exports, "__esModule", { value: true });
var Promise_1 = __webpack_require__(27);
var PeoplePickerDataSource_1 = __webpack_require__(329);
var PeopleStore_1 = __webpack_require__(421);
var UNVALIDATED_EMAIL_ADDRESS = 'UNVALIDATED_EMAIL_ADDRESS'; // Person PrincipalType value to ignore when adding to cache.
var PeoplePickerProvider = /** @class */ (function () {
    function PeoplePickerProvider(params) {
        this._dataSource = params.peoplePickerDataSource ? params.peoplePickerDataSource :
            new PeoplePickerDataSource_1.PeoplePickerDataSource({
                imageAbsoluteWebUrl: params.imageAbsoluteWebUrl
            }, {
                pageContext: params.pageContext,
                apiUrlHelper: params.apiUrlHelper,
            });
        this._ppCapabilities = this._dataSource.getCapabilities();
        if (this._ppCapabilities.supportsMruCaching) {
            this._mruCache = new PeopleStore_1.PeopleStore();
            this.MaxCacheSuggestions = 5;
        }
        else {
            this.MaxCacheSuggestions = 0;
        }
    }
    PeoplePickerProvider.prototype.search = function (query, context) {
        var _this = this;
        var searchPromise;
        var results = {
            cached: null,
            promise: null
        };
        var cacheResults;
        // Send cached results to caller immediately without waiting for server results
        // Don't use cache if limiting results to members of a particular SP Group
        // (context.groupID of zero indicates there are no group membership restrictions)
        if (this._mruCache && !context.groupID) {
            cacheResults = this.searchMruCache(query, context && context.filterExternalUsers); // get the items from the cache for the current query
            if (cacheResults.length > 0) {
                results.cached = cacheResults;
            }
        }
        results.promise = new Promise_1.default(function (complete, error) {
            // Call the server to search for people that match the query
            searchPromise = _this._dataSource.search(query, context).then(function (data) {
                if (!data) {
                    return;
                }
                if (cacheResults) {
                    // Omit entries that are already in the local cache.
                    if (cacheResults.length > 0) {
                        cacheResults = _this._removeStaleCacheResults(cacheResults, data);
                    }
                    var cachedIds_1 = cacheResults.map(function (cacheResult) { return cacheResult.userId; });
                    complete(data.filter(function (person) { return cachedIds_1.indexOf(person.userId) < 0; }));
                }
                else {
                    complete(data);
                }
            }, /* onError */ function (data) {
                // pass through error to parent promise
                error(data);
            });
        }, /* onCancel */ function () {
            if (searchPromise) {
                searchPromise.cancel();
            }
        });
        return results;
    };
    PeoplePickerProvider.prototype.resolve = function (query, context) {
        var _this = this;
        return this._dataSource.resolve(query, context).then(function (data) {
            if (_this._mruCache && data.isResolved) {
                _this.addToMruCache(data);
            }
            return data;
        });
        // TODO: Only add item to the cache for certain query parameter values:
        //  return (this.UseLocalSuggestionCache) &&
        // (this.UrlZone == null) &&
        // (this.SharePointGroupID <= 0) &&
        // (this.WebApplicationID == '{00000000-0000-0000-0000-000000000000}') &&
        // (this.EnabledClaimProviders == '' || this.EnabledClaimProviders == null) &&
        // (this.PrincipalAccountTypeEnum % 2 == 1 /*SP.Utilities.PrincipalType.user*/) &&
        // (this.ResolvePrincipalSource == 15 /*SP.Utilities.PrincipalSource.all*/);
    };
    PeoplePickerProvider.prototype.getPersonaDetails = function (accountID) {
        return this._dataSource.getPersonaDetails(accountID).then(function (data) {
            return data;
        });
    };
    PeoplePickerProvider.prototype.subscribePresence = function (accountID, fnCallback) {
        return this._dataSource.subscribePresence(accountID, fnCallback);
    };
    PeoplePickerProvider.prototype.addToMruCache = function (item) {
        var mruCache = this._mruCache;
        if (mruCache && item.rawPersonData && item.rawPersonData['EntityData'] && item.rawPersonData['EntityData']['PrincipalType'] !== UNVALIDATED_EMAIL_ADDRESS) {
            mruCache.setItem(item);
        }
    };
    PeoplePickerProvider.prototype.getPickerEntityInformation = function (person) {
        return this._dataSource.getPickerEntityInformation(person);
    };
    PeoplePickerProvider.prototype.sharePointSearch = function (query, context) {
        return this._dataSource.sharePointSearch(query, context).then(function (data) {
            return data;
        });
    };
    PeoplePickerProvider.prototype.searchMruCache = function (query, filterExternalUsers) {
        var data = [];
        var mruCache = this._mruCache;
        if (mruCache) {
            data = mruCache.getItems(query, filterExternalUsers);
            // Only return up to the maximum number of suggestions requested
            var maxCacheSuggestions = this.MaxCacheSuggestions;
            if (data.length > maxCacheSuggestions) {
                data = data.splice(0, maxCacheSuggestions);
            }
        }
        return data;
    };
    /**
  * Removes any stale results from the people picker cache so
  * we don't ignore search results that are fresher than the
  * corresponding cache entry.
  *
  * @param cacheResults The results that are stored in the localStorage cache.
  * @param searchResults Fresh search results.
  */
    PeoplePickerProvider.prototype._removeStaleCacheResults = function (cacheResults, searchResults) {
        var cachedIds = cacheResults.map(function (cacheResult) { return cacheResult.userId; });
        var freshCacheResults = [];
        searchResults.forEach(function (searchResult) {
            var cacheResultId = cachedIds.indexOf(searchResult.userId);
            // If the ID exists in the cache, check that it's fresh.
            if (cacheResultId > -1) {
                var cacheResult = cacheResults[cacheResultId];
                // If the cache entry is fresh, add it to the array of fresh cache entries.
                if (PeopleStore_1.PeopleStore.isCacheEntryFresh(cacheResult, searchResult)) {
                    freshCacheResults.push(cacheResult);
                }
            }
        });
        return freshCacheResults;
    };
    return PeoplePickerProvider;
}());
exports.PeoplePickerProvider = PeoplePickerProvider;



/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// OneDrive:IgnoreCodeCoverage
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var BaseDataStore_1 = __webpack_require__(32);
var DataStoreCachingType_1 = __webpack_require__(28);
var Killswitch_1 = __webpack_require__(117);
var PeopleStore = /** @class */ (function (_super) {
    tslib_1.__extends(PeopleStore, _super);
    function PeopleStore() {
        var _this = _super.call(this, PeopleStore._Key, PeopleStore._DataStoreCachingType) || this;
        // Initiliaze constants
        _this._MaxItems = 200;
        _this._Version = 5;
        var oneWeekInMilliseconds = 604800000;
        // Initiliaze buffer object from DOM local storage if it exists
        _this._buffer = _this.getValue(PeopleStore._StorageKey);
        // If there's no buffer object in DOM local storage or if the buffer is from a previous schema version, initialize an empty buffer object
        if (!_this._buffer || (_this._buffer.version !== _this._Version) || !_this._buffer.lastCachePrune) {
            _this.initializeBuffer();
        }
        // Initialize data object for fast and easy lookups
        _this._data = {};
        // Only keep things in the cache if it has been emptied in the last week
        if (Date.now() < _this._buffer.lastCachePrune + oneWeekInMilliseconds || Killswitch_1.Killswitch.isActivated('e96e6a47-9f55-4ea4-8395-c9f48a655b2a', '8/07/2018', 'PeopleStorePruning')) {
            for (var i = 0; i < _this._buffer.dataArray.length; i++) {
                _this._data[_this._buffer.dataArray[i].email] = _this._buffer.dataArray[i];
            }
        }
        else {
            // Prune the cache
            _this.initializeBuffer();
            _this.setValue(PeopleStore._StorageKey, _this._buffer);
        }
        return _this;
    }
    PeopleStore.clear = function () {
        var datastore = new BaseDataStore_1.default(PeopleStore._Key, PeopleStore._DataStoreCachingType);
        datastore.remove(PeopleStore._StorageKey);
    };
    PeopleStore.isCacheEntryFresh = function (cacheEntry, freshData) {
        return cacheEntry.name === freshData.name &&
            cacheEntry.email === freshData.email &&
            cacheEntry.job === freshData.job &&
            cacheEntry.office === freshData.office &&
            cacheEntry.department === freshData.department &&
            cacheEntry.phone === freshData.phone;
    };
    PeopleStore.prototype.setItem = function (item) {
        /**
         * Check to see if the data object already has a matching entry for this person. If
         * the cached entry has the same name and email, do nothing. If anything has changed,
         * update the entry in the cache with the new information.
         */
        var cachedItem = this._data[item.email];
        if (cachedItem) {
            if (!PeopleStore.isCacheEntryFresh(cachedItem, item)) {
                var cachedIds = this._buffer.dataArray.map(function (cacheResult) { return cacheResult.userId; });
                var cacheId = cachedIds.indexOf(item.userId);
                this._buffer.dataArray[cacheId] = item;
            }
            else {
                return;
            }
        }
        else if (this._buffer.dataArray.length === this._MaxItems) {
            // Increment the buffer index and wrap it to the front of the array if it extended beyond MaxItems
            this._buffer.index++;
            if (this._buffer.index >= this._MaxItems) {
                this._buffer.index = 0;
            }
            // Remove oldest person stored in the data object
            var oldestPerson = this._buffer.dataArray[this._buffer.index];
            delete this._data[oldestPerson.email];
            // Remove the oldest person stored in the buffer array
            this._buffer.dataArray[this._buffer.index] = item;
        }
        else {
            // Push person on the buffer array (will take care of wrapping the index the next time an item is added)
            this._buffer.dataArray.push(item);
            this._buffer.index++;
        }
        // Update the data object in both cases with the person's email
        this._data[item.email] = item;
        // Serialize the buffer array and update local storage
        this.setValue(PeopleStore._StorageKey, this._buffer);
    };
    PeopleStore.prototype.getItems = function (query, filterExternalUsers) {
        var results = [];
        for (var i = 0; i < this._buffer.dataArray.length; i++) {
            // Start with the newest item in the buffer. Then work our way back so that we are returning the newest items in the cache.
            // Since items are stored from left to right in terms of oldest to newest, we will work our way from right to left.
            // For the case when _bufferindex - i is >= 0, we are just counting down towards zero. For the case where _bufferIndex - i < 0,
            // we are starting at the end of the buffer and counting down towards the location of _bufferIndex.
            var newestIndex = (this._buffer.index - i + this._MaxItems) % this._MaxItems;
            // TODO: Better algorithm here. It should match how the suggestions box algorithm in ODC PeoplePicker works today
            if (((this._buffer.dataArray[newestIndex].email && this._buffer.dataArray[newestIndex].email.toLowerCase().indexOf(query.toLowerCase()) >= 0)
                || (this._buffer.dataArray[newestIndex].name && this._buffer.dataArray[newestIndex].name.toLowerCase().indexOf(query.toLowerCase()) >= 0))
                && !(filterExternalUsers && this._buffer.dataArray[newestIndex].entityType === 1 /* externalUser */)) {
                results.push(this._buffer.dataArray[newestIndex]);
            }
        }
        return results;
    };
    PeopleStore.prototype.containsItem = function (item) {
        return Boolean(this._data[item.email]);
    };
    PeopleStore.prototype.initializeBuffer = function () {
        this._buffer = {};
        this._buffer.dataArray = [];
        this._buffer.index = -1;
        this._buffer.version = this._Version;
        this._buffer.lastCachePrune = Date.now();
    };
    PeopleStore._Key = 'ClientPeoplePicker';
    PeopleStore._StorageKey = 'MRU'; // Together with 'dataStoreKey' (in 'super' call) will come to 'ClientPeoplePickerMRU'
    PeopleStore._DataStoreCachingType = DataStoreCachingType_1.default.local;
    return PeopleStore;
}(BaseDataStore_1.default));
exports.PeopleStore = PeopleStore;



/***/ }),
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: C:/agent/1/_work/5/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.8.1/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(2);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "@microsoft/office-ui-fabric-react-bundle"
var office_ui_fabric_react_bundle_ = __webpack_require__(1);
var office_ui_fabric_react_bundle__default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_bundle_);

// EXTERNAL MODULE: external "@microsoft/sp-page-context"
var sp_page_context_ = __webpack_require__(64);
var sp_page_context__default = /*#__PURE__*/__webpack_require__.n(sp_page_context_);

// EXTERNAL MODULE: C:/agent/1/_work/5/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@ms/odsp-utilities-bundle/4.2.4/node_modules/@ms/odsp-utilities-bundle/lib/index.js
var lib = __webpack_require__(15);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: C:/agent/1/_work/5/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/5.120.0/react-dom@15.6.2+react@15.6.2/node_modules/office-ui-fabric-react/lib/Pickers.js
var Pickers = __webpack_require__(333);
var Pickers_default = /*#__PURE__*/__webpack_require__.n(Pickers);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas/lib/sp-rte/rte/AtMention/MentionPeoplePicker.module.scss.js
__webpack_require__(403);
var styles = {
    mentionSuggestions: 'mentionSuggestions_99f132d2',
    spAtMentionField: 'spAtMentionField_99f132d2',
};
/* harmony default export */ var MentionPeoplePicker_module_scss = (styles);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas/lib/sp-rte/rte/AtMention/AtMentionInput.js


var AtMentionInput_AtMentionInput = (function () {
    function AtMentionInput(target) {
        this._inputElement = Object(office_ui_fabric_react_bundle_["createRef"])();
        this._inputElement.current = target;
        this._inputElement.current.classList.add(MentionPeoplePicker_module_scss.spAtMentionField);
    }
    Object.defineProperty(AtMentionInput.prototype, "current", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtMentionInput.prototype, "cursorLocation", {
        get: function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtMentionInput.prototype, "isValueSelected", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtMentionInput.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtMentionInput.prototype, "selectionStart", {
        get: function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtMentionInput.prototype, "selectionEnd", {
        get: function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtMentionInput.prototype, "inputElement", {
        get: function () {
            return this._inputElement.current;
        },
        enumerable: true,
        configurable: true
    });
    AtMentionInput.prototype.focus = function () {
        if (this._inputElement.current) {
            this._inputElement.current.focus();
        }
    };
    AtMentionInput.prototype.clear = function (forceClear) {
        if (this._inputElement.current && forceClear) {
            this._inputElement.current.innerHTML = '';
        }
        this.value = '';
    };
    return AtMentionInput;
}());
/* harmony default export */ var AtMention_AtMentionInput = (AtMentionInput_AtMentionInput);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas/lib/sp-rte/rte/AtMention/MentionPeoplePicker.js





var MIN_QUERY_LENGTH = 3;
var MAX_QUERY_LENGTH = 20;
var MentionPeoplePicker_MentionPeoplePicker = (function (_super) {
    tslib_es6["__extends"](MentionPeoplePicker, _super);
    function MentionPeoplePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.input.current = new AtMention_AtMentionInput(_this.props.calloutTarget);
        return _this;
    }
    MentionPeoplePicker.prototype.render = function () {
        return external__react_["createElement"]("div", { ref: this._resolveRef('root') }, this.renderSuggestions());
    };
    MentionPeoplePicker.prototype.componentWillReceiveProps = function (newProps) {
        this.updateValue(newProps.mentionQuery);
        this.input.current.value = newProps.mentionQuery;
    };
    MentionPeoplePicker.prototype.handleKeyCode = function (keyCode, shiftKey) {
        if (this.state.suggestionsVisible) {
            switch (keyCode) {
                case 9 :
                case 13 :
                    if (this.suggestionElement.current && this.suggestionElement.current.hasSuggestedActionSelected()) {
                        this.suggestionElement.current.executeSelectedAction();
                    }
                    else if (!shiftKey && this.suggestionStore.hasSelectedSuggestion()) {
                        this.addItem(this.suggestionStore.currentSuggestion.item);
                        this.updateValue('');
                    }
                    break;
                case 38 :
                    if (this.suggestionElement.current &&
                        this.suggestionElement.current.hasSuggestedAction() &&
                        this.suggestionStore.currentIndex === 0) {
                        this.suggestionElement.current.focusAboveSuggestions();
                        this.suggestionStore.deselectAllSuggestions();
                        this.forceUpdate();
                    }
                    else {
                        if (this.suggestionStore.previousSuggestion()) {
                            this.onSuggestionSelect();
                        }
                    }
                    break;
                case 40 :
                    if (this.suggestionElement.current &&
                        this.suggestionElement.current.hasSuggestedAction() &&
                        this.suggestionStore.currentIndex + 1 === this.suggestionStore.suggestions.length) {
                        this.suggestionElement.current.focusBelowSuggestions();
                        this.suggestionStore.deselectAllSuggestions();
                        this.forceUpdate();
                    }
                    else {
                        if (this.suggestionStore.nextSuggestion()) {
                            this.onSuggestionSelect();
                        }
                    }
                    break;
            }
        }
    };
    MentionPeoplePicker.prototype.renderSuggestions = function () {
        return (this.state.suggestionsVisible &&
            this.input &&
            this.input.current && (external__react_["createElement"](office_ui_fabric_react_bundle_["Callout"], { isBeakVisible: false, gapSpace: 5, target: this.input.current.inputElement, onDismiss: this.dismissSuggestions, calloutWidth: this.props.calloutTarget.clientWidth, directionalHint: 4 , directionalHintForRTL: 6  },
            external__react_["createElement"](this.SuggestionOfProperType, tslib_es6["__assign"]({ onRenderSuggestion: this.props.onRenderSuggestionsItem, onSuggestionClick: this.onSuggestionClick, onSuggestionRemove: this.onSuggestionRemove, suggestions: this.suggestionStore.getSuggestions(), ref: this.suggestionElement, onGetMoreResults: this.onGetMoreResults, moreSuggestionsAvailable: this.state.moreSuggestionsAvailable, isLoading: this.state.suggestionsLoading, isSearching: this.state.isSearching, isMostRecentlyUsedVisible: this.state.isMostRecentlyUsedVisible, isResultsFooterVisible: this.state.isResultsFooterVisible, refocusSuggestions: this.refocusSuggestions, removeSuggestionAriaLabel: this.props.removeButtonAriaLabel }, this.props.pickerSuggestionsProps)))));
    };
    return MentionPeoplePicker;
}(Pickers["BasePicker"]));
/* harmony default export */ var AtMention_MentionPeoplePicker = (MentionPeoplePicker_MentionPeoplePicker);

// EXTERNAL MODULE: C:/agent/1/_work/5/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@ms/odsp-datasources/31.25.2/node_modules/@ms/odsp-datasources/lib/PeoplePicker.js
var PeoplePicker = __webpack_require__(405);
var PeoplePicker_default = /*#__PURE__*/__webpack_require__.n(PeoplePicker);

// EXTERNAL MODULE: C:/agent/1/_work/5/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@ms/odsp-datasources/31.25.2/node_modules/@ms/odsp-datasources/lib/dataSources/roleAssignments/PrincipalType.js
var PrincipalType = __webpack_require__(316);
var PrincipalType_default = /*#__PURE__*/__webpack_require__.n(PrincipalType);

// EXTERNAL MODULE: external "@microsoft/sp-http"
var sp_http_ = __webpack_require__(310);
var sp_http__default = /*#__PURE__*/__webpack_require__.n(sp_http_);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas/lib/sp-rte/rte/AtMention/PermissionDataProvider.js



var PermissionDataProvider_PermissionDataProvider = (function () {
    function PermissionDataProvider(serviceScope) {
        this._pageContext = serviceScope.consume(sp_page_context_["PageContext"].serviceKey);
        this._httpClient = serviceScope.consume(sp_http_["SPHttpClient"].serviceKey);
        this._webAbsoluteUrl = (this._pageContext && this._pageContext.web && this._pageContext.web.absoluteUrl) || '/';
        if (this._pageContext.list && this._pageContext.listItem) {
            var listId = this._pageContext.list.id.toString();
            var itemId = this._pageContext.listItem.id.toString();
            this._endPoint = "_api/web/Lists('" + listId + "')/GetItemById('" + itemId + "')/";
        }
        this._headers = new Headers();
        this._headers.append('accept', 'application/json; odata=nometadata');
        this._headers.append('OData-version', '3.0');
    }
    PermissionDataProvider.prototype.checkPermission = function (email) {
        if (!this._endPoint) {
            return Promise.reject(new Error('Not a valid list item'));
        }
        var body = "{\"recipients\": [{\"alias\":\"" + email + "\"}]}";
        return this._postRequest('CheckPermissions', body).then(function (response) {
            return response.json();
        });
    };
    PermissionDataProvider.prototype.getSharingInformation = function () {
        if (!this._endPoint) {
            return Promise.reject(new Error('Not a valid list item'));
        }
        return this._postRequest('GetSharingInformation?$Expand=permissionsInformation')
            .then(function (response) {
            return response.json();
        })
            .then(function (response) {
            var sharedUsers = new Set();
            var permissionsInformation = response.permissionsInformation;
            if (permissionsInformation.principals) {
                permissionsInformation.principals.forEach(function (principal) {
                    if (principal.principal.email) {
                        sharedUsers.add(principal.principal.email);
                    }
                });
            }
            if (permissionsInformation.siteAdmins) {
                permissionsInformation.siteAdmins.forEach(function (siteAdmin) {
                    if (siteAdmin.principal.email) {
                        sharedUsers.add(siteAdmin.principal.email);
                    }
                });
            }
            return sharedUsers;
        });
    };
    PermissionDataProvider.prototype._postRequest = function (method, body) {
        var postUrl = lib["Uri"].concatenate(this._webAbsoluteUrl, this._endPoint, method);
        return this._httpClient.post(postUrl, sp_http_["SPHttpClient"].configurations.v1, {
            headers: this._headers,
            body: body
        });
    };
    return PermissionDataProvider;
}());
/* harmony default export */ var AtMention_PermissionDataProvider = (PermissionDataProvider_PermissionDataProvider);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas/lib/sp-rte/rte/AtMention/loc/AtMention.resx.js
var key = '_O6tJrUs6NrlW91qKLBlc7g';
var allStrings = ( false) ?
    require("../../../../resx-strings/en-us.json") :
    __webpack_require__(16);
var strings = allStrings[key];
/* harmony default export */ var AtMention_resx = (strings);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas/lib/sp-rte/rte/AtMention/AtMentionControl.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TYPE", function() { return ACCESS_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_SP_MENTION_USER_ID", function() { return DATA_SP_MENTION_USER_ID; });











var ACCESS_TYPE = 'access-type';
var DATA_SP_MENTION_USER_ID = 'data-sp-mention-user-id';
var ZERO_WIDTH_SPACE = '\u200B';
var TEXT_NODE = '#text';
var AtMentionControl_AtMentionContol = (function (_super) {
    tslib_es6["__extends"](AtMentionContol, _super);
    function AtMentionContol(props) {
        var _this = _super.call(this, props) || this;
        _this._pageContext = _this.props.serviceScope.consume(sp_page_context_["PageContext"].serviceKey);
        _this._dataSource = new PeoplePicker["PeoplePickerDataSource"](_this._pageContext.legacyPageContext);
        _this._dataProvider = new PeoplePicker["PeoplePickerProvider"]({
            pageContext: _this._pageContext.legacyPageContext,
            peoplePickerDataSource: _this._dataSource
        });
        _this._permissionProvider = new AtMention_PermissionDataProvider(_this.props.serviceScope);
        _this._newMentionNode = document.createElement('a');
        _this.state = {
            mentionQuery: ''
        };
        return _this;
    }
    AtMentionContol._shortenDisplayName = function (nameElement) {
        var currentName = nameElement.innerText;
        if (AtMentionContol.BRACKET_REGEX.test(currentName)) {
            currentName = currentName.replace(AtMentionContol.BRACKET_REGEX, '');
        }
        else {
            if (AtMentionContol.LAST_NAME_SECTION_REGEX.test(currentName)) {
                currentName = currentName.replace(AtMentionContol.LAST_NAME_SECTION_REGEX, '');
            }
            else {
                currentName = '';
                nameElement.remove();
            }
        }
        if (currentName) {
            nameElement.innerText = currentName.trim();
        }
    };
    AtMentionContol._isMentionAnchor = function (nameElement) {
        return !!(nameElement && nameElement.nodeName === 'A' && nameElement.getAttribute(DATA_SP_MENTION_USER_ID));
    };
    AtMentionContol.prototype.render = function () {
        var suggestionProps = {
            className: MentionPeoplePicker_module_scss.mentionSuggestions,
            loadingText: AtMention_resx.loadingText,
            mostRecentlyUsedHeaderText: AtMention_resx.mostRecentlyUsedHeaderText,
            noResultsFoundText: AtMention_resx.noResultsFoundText,
            suggestionsAvailableAlertText: AtMention_resx.suggestionsAvailableAlertText,
            suggestionsContainerAriaLabel: AtMention_resx.suggestionsContainerAriaLabel,
            suggestionsHeaderText: this.state.mentionQuery.length < MIN_QUERY_LENGTH ? AtMention_resx.moreCharactersText : AtMention_resx.suggestionsHeaderText
        };
        return (external__react_["createElement"](AtMention_MentionPeoplePicker, { onResolveSuggestions: this._handleResolveSuggestions, onRenderSuggestionsItem: this._onRenderSuggestionItem, 
            getTextFromItem: this._getTextFromItem, pickerSuggestionsProps: suggestionProps, className: "ms-PeoplePicker", componentRef: this._resolveRef('_picker'), resolveDelay: 300, mentionQuery: this.state.mentionQuery, calloutTarget: this.props.editorElement, onItemSelected: this._onPersonaSelected, dataSource: this._dataSource }));
    };
    AtMentionContol.prototype.shouldComponentUpdate = function (newProps, newState) {
        return this._lastResolvedQuery !== newState.mentionQuery;
    };
    AtMentionContol.prototype.componentDidMount = function () {
        var _this = this;
        this.props.editorElement.addEventListener('keydown', this._handleKeydown);
        this.props.editorElement.addEventListener('keyup', this._handleMention);
        this._permissionProvider
            .getSharingInformation()
            .then(function (users) {
            _this._sharedUsers = users;
        })
            .catch(function (error) {
            return lib["Promise"].reject(error);
        });
    };
    AtMentionContol.prototype.componentWillUnmount = function () {
        this.props.editorElement.removeEventListener('keydown', this._handleKeydown);
        this.props.editorElement.removeEventListener('keyup', this._handleMention);
    };
    AtMentionContol.prototype.getMentionData = function () {
        var mentionQuery = '';
        var nodeText = '';
        var currentNode;
        var lastAtIndex = -1;
        var caretRange = this._caretRange;
        if (caretRange) {
            currentNode = caretRange.endContainer;
            nodeText = currentNode.textContent;
            lastAtIndex = nodeText.substring(0, caretRange.endOffset).lastIndexOf('@');
            if (lastAtIndex === 0) {
                mentionQuery = nodeText.slice(1, caretRange.endOffset).trim();
            }
            else if (lastAtIndex > 0) {
                var charBeforeAt = nodeText[lastAtIndex - 1];
                if (this._isTerminatingCharacter(charBeforeAt)) {
                    mentionQuery = nodeText.substring(lastAtIndex + 1, caretRange.endOffset).trim();
                }
            }
        }
        if (mentionQuery.length >= MAX_QUERY_LENGTH) {
            mentionQuery = '';
        }
        return {
            currentNode: currentNode,
            lastAtIndex: lastAtIndex,
            mentionQuery: mentionQuery,
            nodeText: nodeText
        };
    };
    AtMentionContol.prototype._handleMention = function (ev) {
        var _this = this;
        var _a = this.getMentionData(), currentNode = _a.currentNode, mentionQuery = _a.mentionQuery;
        if (mentionQuery !== this.state.mentionQuery) {
            this.setState({
                currentNode: currentNode,
                mentionQuery: mentionQuery
            });
        }
        setTimeout(function () {
            _this._normalizeContent();
        }, 0);
    };
    AtMentionContol.prototype._transformMentionQuery = function (person) {
        var caretRange = this._caretRange;
        if (!caretRange || !person.userId || !person.name) {
            return;
        }
        var _a = this.getMentionData(), currentNode = _a.currentNode, lastAtIndex = _a.lastAtIndex, mentionQuery = _a.mentionQuery, nodeText = _a.nodeText;
        var userId = person.userId.substr(person.userId.lastIndexOf('|') + 1);
        var email = person.email, name = person.name;
        if (mentionQuery.length > 0) {
            var lastChar = person ? ' ' : nodeText[caretRange.endOffset - 1];
            if (!this._isTerminatingCharacter(lastChar)) {
                return;
            }
            var newMentionNode = this._newMentionNode.cloneNode(true);
            newMentionNode.setAttribute(DATA_SP_MENTION_USER_ID, userId);
            newMentionNode.setAttribute('contenteditable', 'false');
            newMentionNode.setAttribute(ACCESS_TYPE, '1');
            newMentionNode.appendChild(document.createTextNode(name));
            var emptySpaceNode = document.createTextNode(lastChar);
            var rangeToFormat = new Range();
            rangeToFormat.setStart(currentNode, lastAtIndex);
            rangeToFormat.setEnd(currentNode, caretRange.endOffset);
            rangeToFormat.deleteContents();
            rangeToFormat.insertNode(emptySpaceNode);
            rangeToFormat.insertNode(newMentionNode);
            this.props.editorElement.focus();
            this._selection.collapse(emptySpaceNode, 1);
            this.setState({ mentionQuery: '' });
            this._normalizeContent();
            this._verifyAccess(email, newMentionNode);
        }
    };
    AtMentionContol.prototype._verifyAccess = function (email, newMentionNode) {
        if (this._sharedUsers && this._sharedUsers.has(email)) {
            return;
        }
        this._permissionProvider
            .checkPermission(email)
            .then(function (response) {
            if (response.value && response.value.length > 0) {
                var accessType = response.value[0].existingAccessType;
                newMentionNode.setAttribute(ACCESS_TYPE, accessType.toString());
            }
        })
            .catch(function (error) {
            return lib["Promise"].reject(error);
        });
    };
    AtMentionContol.prototype._handleFilterChanged = function (persons, query) {
        if (query && query.length >= MIN_QUERY_LENGTH) {
            return persons.filter(function (item) { return !!item; }); 
        }
        else {
            return [];
        }
    };
    AtMentionContol.prototype._onPersonaSelected = function (person) {
        this._transformMentionQuery(person);
        return person;
    };
    AtMentionContol.prototype._getTextFromItem = function (persona) {
        return persona.primaryText;
    };
    AtMentionContol.prototype._handleKeydown = function (ev) {
        var mentionQuery = this.state.mentionQuery;
        switch (ev.which) {
            case 27 :
                if (mentionQuery.length >= MIN_QUERY_LENGTH) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this.setState({ mentionQuery: '' });
                }
                break;
            case 8 :
                if (this._selection && this._processBackSpace()) {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                break;
            case 37 :
                this._skipZeroWidthSpace(1);
                break;
            case 39 :
            case 46 :
                this._skipZeroWidthSpace(0);
                break;
            case 9 :
            case 13 :
            case 38 :
            case 40 :
                if (mentionQuery.length >= MIN_QUERY_LENGTH) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this._picker.handleKeyCode(ev.which, ev.shiftKey);
                }
                break;
            default:
                return;
        }
    };
    AtMentionContol.prototype._processBackSpace = function () {
        var anchorNode = this._selection.anchorNode;
        var anchorOffset = this._selection.anchorOffset;
        if (this._selection.isCollapsed) {
            this._skipZeroWidthSpace(1);
            var nameElement = void 0;
            if (anchorNode.nodeName === TEXT_NODE && anchorOffset === 0) {
                nameElement = anchorNode.previousSibling;
            }
            else if (anchorNode.hasChildNodes && anchorOffset > 0) {
                nameElement = anchorNode.childNodes[anchorOffset - 1];
            }
            else {
                nameElement = anchorNode;
            }
            if (AtMentionContol._isMentionAnchor(nameElement)) {
                AtMentionContol._shortenDisplayName(nameElement);
                return nameElement;
            }
            return undefined;
        }
    };
    AtMentionContol.prototype._skipZeroWidthSpace = function (currentPos) {
        if (!this._selection) {
            return;
        }
        if (this._selection.isCollapsed &&
            this._selection.anchorNode.nodeValue === ZERO_WIDTH_SPACE &&
            this._selection.anchorOffset === currentPos) {
            this._selection.collapse(this._selection.anchorNode, 1 - currentPos);
        }
    };
    AtMentionContol.prototype._normalizeContent = function () {
        this.props.editorElement.normalize();
        var anchorNode = this._selection.anchorNode;
        if (anchorNode.nodeName !== TEXT_NODE &&
            anchorNode.hasChildNodes() &&
            anchorNode.lastChild.isContentEditable === false) {
            anchorNode.appendChild(document.createTextNode(ZERO_WIDTH_SPACE));
        }
    };
    Object.defineProperty(AtMentionContol.prototype, "_selection", {
        get: function () {
            var selection = document.getSelection();
            if (!selection || !this.props.editorElement.contains(selection.focusNode)) {
                return undefined;
            }
            else {
                return selection;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtMentionContol.prototype, "_caretRange", {
        get: function () {
            var sel = this._selection;
            var isCaret = sel && sel.isCollapsed && sel.type === 'Caret' && this.props.editorElement.contains(sel.anchorNode);
            if (isCaret && sel.rangeCount > 0) {
                var caretRange = sel.getRangeAt(0);
                return caretRange;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    AtMentionContol.prototype._isTerminatingCharacter = function (lastChar) {
        return /\s/.test(lastChar);
    };
    AtMentionContol.prototype._handleResolveSuggestions = function (value) {
        var _this = this;
        if (this._peoplePickerSearchPromise) {
            this._peoplePickerSearchPromise.cancel();
            this._peoplePickerSearchPromise = undefined;
        }
        if (value.length < MIN_QUERY_LENGTH) {
            return this._handleFilterChanged ? this._handleFilterChanged([], value) : [];
        }
        var peoplePickerSearchResult = this._dataProvider.search(value.trim(), this._getPeoplePickerQueryParams());
        if (!peoplePickerSearchResult) {
            return this._handleFilterChanged ? this._handleFilterChanged([], value) : [];
        }
        var cachedItems = peoplePickerSearchResult.cached || [];
        this._peoplePickerSearchPromise = peoplePickerSearchResult.promise;
        return this._peoplePickerSearchPromise
            .then(function (personList) {
            _this._peoplePickerSearchPromise = undefined;
            _this._lastResolvedQuery = value;
            return personList ? cachedItems.concat(personList) : [];
        })
            .then(function (personList) {
            return personList;
        });
    };
    AtMentionContol.prototype._getPeoplePickerQueryParams = function () {
        return {
            allowEmailAddresses: false,
            groupID: 0,
            maximumEntitySuggestions: 30,
            principalSource: 15,
            blockExternalUsers: true,
            principalType: PrincipalType_default.a.user
        };
    };
    AtMentionContol.prototype._onRenderSuggestionItem = function (person) {
        return (external__react_["createElement"](office_ui_fabric_react_bundle_["Persona"], { primaryText: person.name || '', secondaryText: person.job || person.department || '', tertiaryText: person.email || '', 
            presence: office_ui_fabric_react_bundle_["PersonaPresence"].none, size: office_ui_fabric_react_bundle_["PersonaSize"].small, className: "ms-PeoplePicker-Persona", imageUrl: person.image }));
    };
    AtMentionContol.BRACKET_REGEX = /\s\(([^)]*)\)[^(]*$/g;
    AtMentionContol.LAST_NAME_SECTION_REGEX = /\s[^\s]*$/g;
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], AtMentionContol.prototype, "_handleMention", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], AtMentionContol.prototype, "_handleFilterChanged", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], AtMentionContol.prototype, "_onPersonaSelected", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], AtMentionContol.prototype, "_getTextFromItem", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], AtMentionContol.prototype, "_handleKeydown", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], AtMentionContol.prototype, "_handleResolveSuggestions", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], AtMentionContol.prototype, "_onRenderSuggestionItem", null);
    return AtMentionContol;
}(office_ui_fabric_react_bundle_["BaseComponent"]));
/* harmony default export */ var AtMentionControl = __webpack_exports__["default"] = (AtMentionControl_AtMentionContol);


/***/ })
]));
//# sourceMappingURL=0.0_d620fbbbc7d0f5276d89.js.map