webpackJsonp8be81a5c_af38_4bb2_af97_afa3b64dfbed_1_6_0([4],{

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_core_library__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__microsoft_sp_core_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_diagnostics__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_diagnostics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__microsoft_sp_diagnostics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__microsoft_sp_lodash_subset__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__microsoft_sp_lodash_subset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__microsoft_sp_lodash_subset__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ms_sp_telemetry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ms_sp_telemetry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ms_sp_telemetry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ms_odsp_utilities_bundle__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ms_odsp_utilities_bundle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ms_odsp_utilities_bundle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__canvasControl_CanvasControlType__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CanvasStoreCommonActions__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__canvasLayout_CanvasLayout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_KillSwitches__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__loc_CanvasStrings_resx__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CanvasWebPartClassification__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__a11y_CanvasA11yConstants__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_Flights__ = __webpack_require__(6);















var CanvasStoreEditActions = (function () {
    function CanvasStoreEditActions() {
    }
    CanvasStoreEditActions._isWebPartSerializationV1Enabled = function () {
        return __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_core_library__["_SPFlight"].isEnabled(974 );
    };
    CanvasStoreEditActions.openToolbox = function (canvasFields, position, verticalPosition, horizontalPosition, onClose) {
        if (canvasFields.toolboxProps.isOpen) {
            CanvasStoreEditActions.closeToolbox(canvasFields);
        }
        if (position.sectionIndex === undefined) {
            canvasFields.toolboxProps.onlyLayouts = true;
        }
        else {
            canvasFields.toolboxProps.onlyLayouts = false;
            __WEBPACK_IMPORTED_MODULE_8__CanvasStoreCommonActions__["a" /* default */].fillToolboxItems(canvasFields);
        }
        var openToolboxCallback = function () {
            setTimeout(function () { return canvasFields.toolbox.openToolbox(position, verticalPosition, horizontalPosition); });
        };
        if (canvasFields.toolbox && !canvasFields.toolboxProps.onlyLayouts) {
            openToolboxCallback();
        }
        else {
            canvasFields.deferredOpenCallback = openToolboxCallback;
        }
        canvasFields.toolboxProps.isOpen = true;
        canvasFields.toolboxProps.verticalPosition = verticalPosition;
        canvasFields.toolboxProps.horizontalPosition = horizontalPosition;
        canvasFields.toolboxProps.onClose = onClose;
        canvasFields.toolboxProps.controlPosition = position;
        canvasFields.render();
    };
    CanvasStoreEditActions.closeToolbox = function (canvasFields, ev) {
        canvasFields.deferredOpenCallback = undefined;
        if (canvasFields.toolbox && !canvasFields.toolboxProps.onlyLayouts) {
            canvasFields.toolbox.closeToolbox();
        }
        if (typeof canvasFields.toolboxProps.onClose === 'function') {
            canvasFields.toolboxProps.onClose();
        }
        canvasFields.toolboxProps.isOpen = false;
        canvasFields.toolboxProps.controlPosition = __WEBPACK_IMPORTED_MODULE_9__canvasLayout_CanvasLayout__["a" /* default */].undefinedControlPosition;
        canvasFields.render();
    };
    CanvasStoreEditActions.handleConfigureButtonClicked = function (canvasFields, id) {
        var isCurrentlySelected = canvasFields.selectedControlIdInternal === id;
        var controlComponent = __WEBPACK_IMPORTED_MODULE_8__CanvasStoreCommonActions__["a" /* default */].getControlComponentById(canvasFields, id);
        if (controlComponent) {
            controlComponent.handleConfigureButtonClicked(isCurrentlySelected);
            canvasFields.selectedControlIdInternal = id;
            canvasFields.render();
        }
    };
    CanvasStoreEditActions.handleConfigureZoneButtonClicked = function (canvasFields, id, zoneFocusHandler) {
        __WEBPACK_IMPORTED_MODULE_5__ms_sp_telemetry__["_EngagementLogger"].logEvent('Canvas.ConfigureZone.Click');
        var isCurrentlySelected = canvasFields.editedZoneIndex === id;
        if (!__WEBPACK_IMPORTED_MODULE_10__common_KillSwitches__["a" /* default */].isPropertyPaneControllerFromServiceScopeKillSwitchActivated()) {
            canvasFields.propertyPaneController.requestAction(id, isCurrentlySelected ? 3  : 1 );
        }
        else {
            canvasFields.webpartManager.requestPropertyPaneAction(id, isCurrentlySelected ? 3  : 1 );
        }
        canvasFields.editedZoneIndex = id;
        canvasFields.editedZoneFocusHandler = zoneFocusHandler;
    };
    CanvasStoreEditActions.handleDeleteControlButtonClicked = function (canvasFields, layout) {
        canvasFields.positionCandidateForDeletion = layout;
        var selectedControl = canvasFields.getControl(canvasFields.positionCandidateForDeletion);
        canvasFields.selectedControlIdInternal = selectedControl.id;
        if (!__WEBPACK_IMPORTED_MODULE_10__common_KillSwitches__["a" /* default */].isPropertyPaneControllerFromServiceScopeKillSwitchActivated()) {
            canvasFields.propertyPaneController.requestAction(selectedControl.controlType === __WEBPACK_IMPORTED_MODULE_7__canvasControl_CanvasControlType__["a" /* default */].WebPartZone
                ? canvasFields.selectedControlIdInternal
                : undefined);
        }
        else {
            canvasFields.webpartManager.requestPropertyPaneAction(selectedControl.controlType === __WEBPACK_IMPORTED_MODULE_7__canvasControl_CanvasControlType__["a" /* default */].WebPartZone
                ? canvasFields.selectedControlIdInternal
                : undefined);
        }
        CanvasStoreEditActions._openDialogMessage(canvasFields, __WEBPACK_IMPORTED_MODULE_11__loc_CanvasStrings_resx__["a" /* default */].DeleteConfirmationDialogTitle, __WEBPACK_IMPORTED_MODULE_11__loc_CanvasStrings_resx__["a" /* default */].DeleteConfirmationDialogMessage, CanvasStoreEditActions.handleDeleteControlDialogConfirmation.bind(CanvasStoreEditActions, canvasFields), CanvasStoreEditActions.handleDeleteControlDialogDismiss.bind(CanvasStoreEditActions, canvasFields), true);
    };
    CanvasStoreEditActions.handleDeleteControlDialogConfirmation = function (canvasFields) {
        var qos = __WEBPACK_IMPORTED_MODULE_8__CanvasStoreCommonActions__["a" /* default */].createQosScope('DeleteWebPart');
        var selectedControl;
        try {
            selectedControl = canvasFields.getControl(canvasFields.positionCandidateForDeletion);
            if (selectedControl.controlType === __WEBPACK_IMPORTED_MODULE_7__canvasControl_CanvasControlType__["a" /* default */].WebPartZone) {
                var controlComponent = __WEBPACK_IMPORTED_MODULE_8__CanvasStoreCommonActions__["a" /* default */].getControlComponentById(canvasFields, selectedControl.id, selectedControl.position);
                controlComponent.handleDeleteButtonClicked();
            }
            CanvasStoreEditActions.closeDialogMessage(canvasFields, false, __WEBPACK_IMPORTED_MODULE_11__loc_CanvasStrings_resx__["a" /* default */].WebPartAriaLabel);
            CanvasStoreEditActions.deleteControl(canvasFields, canvasFields.positionCandidateForDeletion);
            qos.writeSuccess();
        }
        catch (err) {
            __WEBPACK_IMPORTED_MODULE_8__CanvasStoreCommonActions__["a" /* default */].handleMonitoredException(qos, err, selectedControl);
        }
    };
    CanvasStoreEditActions.deleteControl = function (canvasFields, layout) {
        canvasFields.deletedControlLayout = layout;
        var control = canvasFields.getControl(canvasFields.deletedControlLayout);
        if (control && __WEBPACK_IMPORTED_MODULE_7__canvasControl_CanvasControlType__["a" /* default */].WebPartZone === control.controlType) {
            canvasFields.webPartsCount--;
            var webPartData = control.webPartData;
            if (webPartData && __WEBPACK_IMPORTED_MODULE_12__CanvasWebPartClassification__["a" /* EUPL_APPROVED_WEB_PARTS */].has(webPartData.id)) {
                canvasFields.euplApprovedWebpartCount--;
            }
        }
        canvasFields.canvasLayout.removeControl(canvasFields.deletedControlLayout);
        if (canvasFields.canvasControls.length === 0) {
            if (!__WEBPACK_IMPORTED_MODULE_10__common_KillSwitches__["a" /* default */].isPropertyPaneControllerFromServiceScopeKillSwitchActivated()) {
                canvasFields.propertyPaneController.requestAction(undefined, 2 );
            }
            else {
                canvasFields.webpartManager.requestPropertyPaneAction(undefined, 2 );
            }
        }
        canvasFields.render();
        __WEBPACK_IMPORTED_MODULE_8__CanvasStoreCommonActions__["a" /* default */].notifyChanged(canvasFields);
    };
    CanvasStoreEditActions.handleDeleteControlDialogDismiss = function (canvasFields) {
        canvasFields.positionCandidateForDeletion = __WEBPACK_IMPORTED_MODULE_9__canvasLayout_CanvasLayout__["a" /* default */].undefinedControlPosition;
        CanvasStoreEditActions.closeDialogMessage(canvasFields, true);
    };
    CanvasStoreEditActions.handleDeleteZoneButtonClicked = function (canvasFields, layout) {
        canvasFields.zoneDeleteQos = __WEBPACK_IMPORTED_MODULE_8__CanvasStoreCommonActions__["a" /* default */].createQosScope('DeleteZone');
        canvasFields.selectedControlIdInternal = undefined;
        canvasFields.positionCandidateForDeletion = layout;
        CanvasStoreEditActions._openDialogMessage(canvasFields, __WEBPACK_IMPORTED_MODULE_11__loc_CanvasStrings_resx__["a" /* default */].DeleteConfirmationDialogTitle, __WEBPACK_IMPORTED_MODULE_11__loc_CanvasStrings_resx__["a" /* default */].DeleteZoneConfirmationDialogMessage, CanvasStoreEditActions.handleDeleteZoneDialogConfirmation.bind(CanvasStoreEditActions, canvasFields), CanvasStoreEditActions.handleDeleteZoneDialogDismiss.bind(CanvasStoreEditActions, canvasFields), true);
        __WEBPACK_IMPORTED_MODULE_5__ms_sp_telemetry__["_EngagementLogger"].logEvent('Canvas.DeleteZone.Click');
    };
    CanvasStoreEditActions.handleDeleteZoneDialogConfirmation = function (canvasFields) {
        try {
            if (__WEBPACK_IMPORTED_MODULE_10__common_KillSwitches__["a" /* default */].isPropertyPaneControllerFromServiceScopeKillSwitchActivated()) {
                canvasFields.webpartManager.disposeWebparts(canvasFields.positionCandidateForDeletion.zoneIndex.toString());
            }
            canvasFields.canvasLayout.removeZone(canvasFields.positionCandidateForDeletion.zoneIndex);
            CanvasStoreEditActions.closeDialogMessage(canvasFields, true, __WEBPACK_IMPORTED_MODULE_11__loc_CanvasStrings_resx__["a" /* default */].SectionAriaLabel);
            canvasFields.zoneDeleteQos.writeSuccess();
        }
        catch (err) {
            __WEBPACK_IMPORTED_MODULE_8__CanvasStoreCommonActions__["a" /* default */].handleMonitoredException(canvasFields.zoneDeleteQos, err);
        }
    };
    CanvasStoreEditActions.handleDeleteZoneDialogDismiss = function (canvasFields) {
        try {
            canvasFields.positionCandidateForDeletion = __WEBPACK_IMPORTED_MODULE_9__canvasLayout_CanvasLayout__["a" /* default */].undefinedControlPosition;
            CanvasStoreEditActions.closeDialogMessage(canvasFields, true);
            canvasFields.zoneDeleteQos.writeSuccess();
        }
        catch (err) {
            __WEBPACK_IMPORTED_MODULE_8__CanvasStoreCommonActions__["a" /* default */].handleMonitoredException(canvasFields.zoneDeleteQos, err);
        }
    };
    CanvasStoreEditActions.closeDialogMessage = function (canvasFields, shouldRender, label) {
        canvasFields.dialogProps.isOpen = false;
        if (canvasFields.positionCandidateForDeletion &&
            canvasFields.positionCandidateForDeletion !== __WEBPACK_IMPORTED_MODULE_9__canvasLayout_CanvasLayout__["a" /* default */].undefinedControlPosition) {
            canvasFields.dialogProps.elementToFocusOnDismiss = CanvasStoreEditActions._findHintBeforePosition(canvasFields);
        }
        if (shouldRender) {
            canvasFields.render();
        }
        if (label) {
            var confirmationMessage = __WEBPACK_IMPORTED_MODULE_6__ms_odsp_utilities_bundle__["StringHelper"].format(__WEBPACK_IMPORTED_MODULE_11__loc_CanvasStrings_resx__["a" /* default */].DeleteConfirmationLabel, label);
            canvasFields.a11yManager.alert(confirmationMessage);
        }
    };
    CanvasStoreEditActions.handleToolboxItemClick = function (canvasFields, itemProps) {
        var qos = __WEBPACK_IMPORTED_MODULE_8__CanvasStoreCommonActions__["a" /* default */].createQosScope('ToolboxItemClicked');
        var isZone = !(itemProps.controlType === __WEBPACK_IMPORTED_MODULE_7__canvasControl_CanvasControlType__["a" /* default */].RTE || itemProps.controlType === __WEBPACK_IMPORTED_MODULE_7__canvasControl_CanvasControlType__["a" /* default */].WebPartZone);
        if (canvasFields.displayMode === __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_core_library__["DisplayMode"].Edit) {
            canvasFields.selectedControlIdInternal = itemProps.id = __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_core_library__["Guid"].newGuid().toString();
            __WEBPACK_IMPORTED_MODULE_8__CanvasStoreCommonActions__["a" /* default */].addControlToCanvas(canvasFields, itemProps);
            if (isZone) {
                canvasFields.selectedZoneIndex = itemProps.position.zoneIndex;
            }
            if (!canvasFields.toolboxProps.onlyLayouts) {
            }
            else {
                if (itemProps.controlType === __WEBPACK_IMPORTED_MODULE_7__canvasControl_CanvasControlType__["a" /* default */].WebPartZone) {
                    var webPartZoneProps = itemProps;
                    if (webPartZoneProps.webPartManifest) {
                        var logEntry = new __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_diagnostics__["_LogEntry"]('CanvasStore', 'AddWebPart', __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_diagnostics__["_LogType"].Event, {
                            manifestId: webPartZoneProps.webPartManifest.id
                        });
                        __WEBPACK_IMPORTED_MODULE_5__ms_sp_telemetry__["_EngagementLogger"].logEventWithLogEntry(logEntry);
                    }
                }
                else if (itemProps.controlType === __WEBPACK_IMPORTED_MODULE_7__canvasControl_CanvasControlType__["a" /* default */].RTE) {
                    __WEBPACK_IMPORTED_MODULE_5__ms_sp_telemetry__["_EngagementLogger"].logEvent('AddRTE.Click');
                }
                else {
                    var logEntry = new __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_diagnostics__["_LogEntry"]('CanvasStore', 'AddZone', __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_diagnostics__["_LogType"].Event, {
                        layout: itemProps.controlType && itemProps.controlType.toString()
                    });
                    __WEBPACK_IMPORTED_MODULE_5__ms_sp_telemetry__["_EngagementLogger"].logEventWithLogEntry(logEntry);
                }
            }
            canvasFields.render();
            __WEBPACK_IMPORTED_MODULE_8__CanvasStoreCommonActions__["a" /* default */].notifyChanged(canvasFields);
            qos.writeSuccess();
        }
        else {
            qos.writeUnexpectedFailure('ReadMode');
        }
    };
    CanvasStoreEditActions.getToolBoxItem = function (canvasFields, id) {
        var toolboxItems = canvasFields.toolboxProps.toolboxItems;
        var currentIndex = Object(__WEBPACK_IMPORTED_MODULE_4__microsoft_sp_lodash_subset__["findIndex"])(toolboxItems, function (toolboxItem) {
            return id === toolboxItem.itemProps.webPartId;
        });
        if (currentIndex !== -1) {
            return Object(__WEBPACK_IMPORTED_MODULE_4__microsoft_sp_lodash_subset__["clone"])(toolboxItems[currentIndex].itemProps);
        }
        return undefined;
    };
    CanvasStoreEditActions.pollActiveElement = function (canvasFields) {
        var activeElement = document.activeElement;
        if (activeElement.tagName !== 'IFRAME') {
            window.clearInterval(canvasFields.pollId);
        }
        else if (canvasFields.oldActiveElement !== activeElement && canvasFields.hoveredControlId) {
            canvasFields.oldActiveElement = activeElement;
            canvasFields.selectedControlIdInternal = canvasFields.hoveredControlId;
        }
    };
    CanvasStoreEditActions.scrollIntoView = function (canvasFields, type, element, duration, margin, allowScrollUp) {
        if (margin === void 0) { margin = 0; }
        if (!canvasFields.scrollableParent || !element) {
            return;
        }
        var parentClientRect = canvasFields.scrollableParent.getBoundingClientRect();
        var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var frameBottom = Math.min(viewportHeight, parentClientRect.bottom);
        var elementClientRect = element.getBoundingClientRect();
        if ((type === 'partial' ? elementClientRect.bottom : elementClientRect.top) > frameBottom ||
            (allowScrollUp && frameBottom > elementClientRect.top)) {
            CanvasStoreEditActions._scrollElementIntoView(canvasFields, frameBottom, element, duration, margin, parentClientRect, elementClientRect);
        }
    };
    CanvasStoreEditActions.reclaimFocus = function (canvasFields) {
        var selectedControlId = canvasFields.selectedControlIdInternal;
        if (selectedControlId) {
            var controlComponent = __WEBPACK_IMPORTED_MODULE_8__CanvasStoreCommonActions__["a" /* default */].getControlComponentById(canvasFields, selectedControlId);
            if (controlComponent) {
                controlComponent.focus();
            }
        }
        else if (canvasFields.editedZoneIndex && canvasFields.editedZoneFocusHandler) {
            canvasFields.editedZoneFocusHandler();
        }
    };
    CanvasStoreEditActions.handleWindowBlur = function (canvasFields, e) {
        if (canvasFields.displayMode === __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_core_library__["DisplayMode"].Edit &&
            canvasFields.hoveredControlId &&
            document.activeElement &&
            document.activeElement.tagName === 'IFRAME') {
            canvasFields.selectedControlIdInternal = canvasFields.hoveredControlId;
            canvasFields.oldActiveElement = document.activeElement;
            window.clearInterval(canvasFields.pollId);
            canvasFields.pollId = window.setInterval(CanvasStoreEditActions.pollActiveElement.bind(CanvasStoreEditActions, canvasFields), 250);
        }
    };
    CanvasStoreEditActions._scroll = function (canvasFields, start, end, duration, time) {
        if (time === void 0) { time = 0; }
        var diff = end - start;
        var deltaTime = 20;
        if (time < duration) {
            requestAnimationFrame(function () {
                time += deltaTime;
                canvasFields.scrollableParent.scrollTop = CanvasStoreEditActions._calculateEasing(time, start, diff, duration);
                CanvasStoreEditActions._scroll(canvasFields, start, end, duration, time);
            });
        }
    };
    CanvasStoreEditActions._scrollElementIntoView = function (canvasFields, frameBottom, element, duration, margin, parentClientRect, elementClientRect) {
        var scrollPosition = elementClientRect.bottom - canvasFields.canvasElement.getBoundingClientRect().top;
        var frameTop = Math.max(0, parentClientRect.top);
        var offset = frameTop - frameBottom + canvasFields.scrollThreshold + margin;
        var newScrollTop = scrollPosition + offset + canvasFields.scrollThreshold;
        CanvasStoreEditActions._scroll(canvasFields, canvasFields.scrollableParent.scrollTop, newScrollTop, duration);
    };
    CanvasStoreEditActions._findHintBeforePosition = function (canvasFields) {
        var position = canvasFields.positionCandidateForDeletion;
        var isZone = position.controlIndex === undefined && position.zoneIndex !== undefined;
        var elementToDelete;
        if (isZone) {
            elementToDelete = canvasFields.a11yManager.getElementByA11yId(Object(__WEBPACK_IMPORTED_MODULE_13__a11y_CanvasA11yConstants__["b" /* getCanvasZoneA11yId */])(position.zoneIndex.toString()));
        }
        else {
            var control = __WEBPACK_IMPORTED_MODULE_14__common_Flights__["a" /* default */].isCanvasVerticalSectionFlightEnabled()
                ? canvasFields.getControl(position)
                : canvasFields.canvasLayout.fetchControl(position);
            elementToDelete = control
                ? canvasFields.a11yManager.getElementByA11yId(Object(__WEBPACK_IMPORTED_MODULE_13__a11y_CanvasA11yConstants__["c" /* getControlZoneA11yId */])(control.id))
                : undefined;
        }
        if (elementToDelete) {
            var hints = canvasFields.a11yManager.getElementsByA11yClass(__WEBPACK_IMPORTED_MODULE_13__a11y_CanvasA11yConstants__["a" /* canvasA11yClasses */].toolboxHint);
            for (var i = 0; i < hints.length - 1; i++) {
                var isHintBeforeZone = (elementToDelete.compareDocumentPosition(hints[i]) & Node.DOCUMENT_POSITION_PRECEDING) !== 0;
                var isNextHintAfterZone = (elementToDelete.compareDocumentPosition(hints[i + 1]) &
                    (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY)) !==
                    0;
                if (isHintBeforeZone && isNextHintAfterZone) {
                    return hints[i];
                }
            }
        }
        return undefined;
    };
    CanvasStoreEditActions._openDialogMessage = function (canvasFields, title, message, onConfirmation, onDismiss, shouldRender) {
        canvasFields.dialogProps = {
            message: message,
            onConfirmation: onConfirmation,
            onDismiss: onDismiss,
            title: title,
            isOpen: true
        };
        if (shouldRender) {
            canvasFields.render();
        }
    };
    CanvasStoreEditActions._calculateEasing = function (time, start, diff, duration) {
        time /= duration / 2;
        if (time < 1) {
            return (diff / 2) * time * time + start;
        }
        else {
            --time;
            return (-diff / 2) * (time * (time - 2) - 1) + start;
        }
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "openToolbox", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "closeToolbox", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "handleConfigureButtonClicked", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "handleConfigureZoneButtonClicked", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "handleDeleteControlButtonClicked", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "handleDeleteControlDialogConfirmation", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "deleteControl", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "handleDeleteControlDialogDismiss", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "handleDeleteZoneButtonClicked", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "handleDeleteZoneDialogConfirmation", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "handleDeleteZoneDialogDismiss", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "handleToolboxItemClick", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "pollActiveElement", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "scrollIntoView", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "reclaimFocus", null);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_1__microsoft_office_ui_fabric_react_bundle__["autobind"]
    ], CanvasStoreEditActions, "handleWindowBlur", null);
    return CanvasStoreEditActions;
}());
/* harmony default export */ __webpack_exports__["default"] = (CanvasStoreEditActions);


/***/ })

});
//# sourceMappingURL=4.4_689fc83124c0ef2ca7f1.js.map