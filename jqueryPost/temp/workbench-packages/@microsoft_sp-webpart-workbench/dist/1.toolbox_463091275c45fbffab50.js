webpackJsonp8be81a5c_af38_4bb2_af97_afa3b64dfbed_1_6_0([1],{

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/Layer.base.js
module.exports = __webpack_require__(472);

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(457);
var loader = __webpack_require__(3);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".error_8d35b1ef{background-color:\"[theme:errorBackground, default: #fde7e9]\";font-weight:600;font-size:12px;letter-spacing:1px;padding:0 12px}", ""]);

// exports


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(459);
var loader = __webpack_require__(3);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".toolboxGroup_a95df559{clear:both;position:relative}.header_a95df559{background-color:\"[theme:neutralLighter, default: #f4f4f4]\";color:\"[theme:neutralPrimary, default: #333333]\";font-weight:600;height:32px;letter-spacing:1px;line-height:32px;padding:0 12px}[dir=ltr] .header_a95df559{text-align:left}[dir=rtl] .header_a95df559{text-align:right}.seeAllButton_a95df559{height:32px;color:\"[theme:blue, default: #0078d4]\";position:absolute;top:0}[dir=ltr] .seeAllButton_a95df559{right:0}[dir=rtl] .seeAllButton_a95df559{left:0}", ""]);

// exports


/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(461);
var loader = __webpack_require__(3);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".flexGroup_a95199b8{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}.grid_a95199b8{width:128px;height:128px}.eightColumnWide_a95199b8{width:1024px}.sevenColumnWide_a95199b8{width:896px}.sixColumnWide_a95199b8{width:768px}.fiveColumnWide_a95199b8{width:640px}.fourColumnWide_a95199b8{width:512px}", ""]);

// exports


/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Modal/Modal.js
module.exports = __webpack_require__(463);

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FocusTrapZone_index__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FocusTrapZone_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__FocusTrapZone_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Overlay__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Overlay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layer__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Layer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Popup_index__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Popup_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Popup_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utilities_decorators_withResponsiveMode__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utilities_decorators_withResponsiveMode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__utilities_decorators_withResponsiveMode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal_scss__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Modal_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Modal_scss__);









var styles = __WEBPACK_IMPORTED_MODULE_8__Modal_scss__;
var Modal = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this._focusTrapZone = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this.state = {
            id: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getId"])('Modal'),
            isOpen: props.isOpen,
            isVisible: props.isOpen,
        };
        return _this;
    }
    Modal.prototype.componentWillReceiveProps = function (newProps) {
        clearTimeout(this._onModalCloseTimer);
        // Opening the dialog
        if (newProps.isOpen) {
            if (!this.state.isOpen) {
                // First Open
                this.setState({
                    isOpen: true
                });
            }
            else {
                // Reopen during closing
                this.setState({
                    isVisible: true
                });
            }
        }
        // Closing the dialog
        if (!newProps.isOpen && this.state.isOpen) {
            this._onModalCloseTimer = this._async.setTimeout(this._onModalClose, parseFloat(styles.duration) * 1000);
            this.setState({
                isVisible: false
            });
        }
    };
    Modal.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (!prevProps.isOpen && !prevState.isVisible) {
            this.setState({
                isVisible: true
            });
        }
    };
    Modal.prototype.render = function () {
        var _a = this.props, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, firstFocusableSelector = _a.firstFocusableSelector, forceFocusInsideTrap = _a.forceFocusInsideTrap, ignoreExternalFocusing = _a.ignoreExternalFocusing, isBlocking = _a.isBlocking, isClickableOutsideFocusTrap = _a.isClickableOutsideFocusTrap, isDarkOverlay = _a.isDarkOverlay, onDismiss = _a.onDismiss, onLayerDidMount = _a.onLayerDidMount, responsiveMode = _a.responsiveMode, titleAriaId = _a.titleAriaId, subtitleAriaId = _a.subtitleAriaId;
        var _b = this.state, isOpen = _b.isOpen, isVisible = _b.isVisible;
        var modalClassName = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-Modal', styles.root, this.props.className, !!isOpen && 'is-open', !!isVisible && styles.rootIsVisible);
        if (!isOpen) {
            return null;
        }
        // @temp tuatology - Will adjust this to be a panel at certain breakpoints
        if (responsiveMode >= __WEBPACK_IMPORTED_MODULE_7__utilities_decorators_withResponsiveMode__["ResponsiveMode"].small) {
            return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Layer__["Layer"], { onLayerDidMount: onLayerDidMount },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Popup_index__["Popup"], { role: isBlocking ? 'alertdialog' : 'dialog', ariaLabelledBy: titleAriaId, ariaDescribedBy: subtitleAriaId, onDismiss: onDismiss },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: modalClassName },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Overlay__["Overlay"], { isDarkThemed: isDarkOverlay, onClick: isBlocking ? undefined : onDismiss }),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__FocusTrapZone_index__["FocusTrapZone"], { componentRef: this._focusTrapZone, className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-Dialog-main', styles.main, this.props.containerClassName), elementToFocusOnDismiss: elementToFocusOnDismiss, isClickableOutsideFocusTrap: isClickableOutsideFocusTrap ? isClickableOutsideFocusTrap : !isBlocking, ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector }, this.props.children)))));
        }
        return null;
    };
    Modal.prototype.focus = function () {
        if (this._focusTrapZone.current) {
            this._focusTrapZone.current.focus();
        }
    };
    // Watch for completed animations and set the state
    Modal.prototype._onModalClose = function () {
        this.setState({
            isOpen: false
        });
        // Call the onDismiss callback
        if (this.props.onDismissed) {
            this.props.onDismissed();
        }
    };
    Modal.defaultProps = {
        isOpen: false,
        isDarkOverlay: true,
        isBlocking: false,
        className: '',
        containerClassName: '',
    };
    Modal = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __WEBPACK_IMPORTED_MODULE_7__utilities_decorators_withResponsiveMode__["withResponsiveMode"]
    ], Modal);
    return Modal;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/FocusTrapZone/index.js
var package = __webpack_require__(1);
module.exports = {}
for (var key in package) {
  if (package.hasOwnProperty(key)) {
    module.exports[key] = package[key];
  }
}
Object.defineProperty(module.exports, "__esModule", { value: true });

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/Overlay.js
var package = __webpack_require__(1);
module.exports = {}
for (var key in package) {
  if (package.hasOwnProperty(key)) {
    module.exports[key] = package[key];
  }
}
Object.defineProperty(module.exports, "__esModule", { value: true });

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/Layer.js
module.exports = __webpack_require__(467);

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Layer_index__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Layer_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Layer_index__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__components_Layer_index__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__components_Layer_index__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/index.js
module.exports = __webpack_require__(469);

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Layer__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Layer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Layer__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__Layer__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__Layer__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layer_base__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layer_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Layer_base__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__Layer_base__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__Layer_base__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LayerHost__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LayerHost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__LayerHost__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2__LayerHost__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_2__LayerHost__[key]; }) }(__WEBPACK_IMPORT_KEY__));





/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/Layer.js
module.exports = __webpack_require__(471);

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layer_base__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layer_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Layer_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layer_styles__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layer_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Layer_styles__);



var Layer = Object(__WEBPACK_IMPORTED_MODULE_0__Utilities__["styled"])(__WEBPACK_IMPORTED_MODULE_1__Layer_base__["LayerBase"], __WEBPACK_IMPORTED_MODULE_2__Layer_styles__["getStyles"]);


/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return LayerBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Fabric__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Fabric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Fabric__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Utilities__);

/* tslint:disable:no-unused-variable */


/* tslint:enable:no-unused-variable */


var _layersByHostId = {};
var _defaultHostSelector;
var getClassNames = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["classNamesFunction"])();
var LayerBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](LayerBase, _super);
    function LayerBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["createRef"])();
        _this._warnDeprecations({
            onLayerMounted: 'onLayerDidMount'
        });
        if (_this.props.hostId) {
            if (!_layersByHostId[_this.props.hostId]) {
                _layersByHostId[_this.props.hostId] = [];
            }
            _layersByHostId[_this.props.hostId].push(_this);
        }
        return _this;
    }
    /**
     * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
     * care about the specific host.
     */
    LayerBase.notifyHostChanged = function (id) {
        if (_layersByHostId[id]) {
            _layersByHostId[id].forEach(function (layer) { return layer.forceUpdate(); });
        }
    };
    /**
     * Sets the default target selector to use when determining the host in which
     * Layered content will be injected into. If not provided, an element will be
     * created at the end of the document body.
     *
     * Passing in a falsey value will clear the default target and reset back to
     * using a created element at the end of document body.
     */
    LayerBase.setDefaultTarget = function (selector) {
        _defaultHostSelector = selector;
    };
    LayerBase.prototype.componentDidMount = function () {
        this.componentDidUpdate();
    };
    LayerBase.prototype.componentWillUnmount = function () {
        var _this = this;
        this._removeLayerElement();
        if (this.props.hostId) {
            _layersByHostId[this.props.hostId] = _layersByHostId[this.props.hostId].filter(function (layer) { return layer !== _this; });
            if (!_layersByHostId[this.props.hostId].length) {
                delete _layersByHostId[this.props.hostId];
            }
        }
    };
    LayerBase.prototype.componentDidUpdate = function () {
        var _this = this;
        var host = this._getHost();
        var _a = this.props, className = _a.className, getStyles = _a.getStyles, theme = _a.theme;
        var classNames = getClassNames(getStyles, {
            theme: theme,
            className: className,
            isNotHost: !this.props.hostId
        });
        if (host !== this._host) {
            this._removeLayerElement();
        }
        if (host) {
            this._host = host;
            if (!this._layerElement) {
                var rootElement = this._rootElement.current;
                var doc = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["getDocument"])(rootElement);
                if (!doc || !rootElement) {
                    return;
                }
                this._layerElement = doc.createElement('div');
                this._layerElement.className = classNames.root;
                host.appendChild(this._layerElement);
                Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["setVirtualParent"])(this._layerElement, rootElement);
            }
            // Using this 'unstable' method allows us to retain the React context across the layer projection.
            __WEBPACK_IMPORTED_MODULE_2_react_dom__["unstable_renderSubtreeIntoContainer"](this, (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Fabric__["Fabric"], { className: classNames.content }, this.props.children)), this._layerElement, function () {
                if (!_this._hasMounted) {
                    _this._hasMounted = true;
                    // TODO: @deprecated cleanup required.
                    if (_this.props.onLayerMounted) {
                        _this.props.onLayerMounted();
                    }
                    _this.props.onLayerDidMount();
                }
            });
        }
    };
    LayerBase.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: 'ms-Layer', ref: this._rootElement }));
    };
    LayerBase.prototype._removeLayerElement = function () {
        if (this._layerElement) {
            this.props.onLayerWillUnmount();
            __WEBPACK_IMPORTED_MODULE_2_react_dom__["unmountComponentAtNode"](this._layerElement);
            var parentNode = this._layerElement.parentNode;
            if (parentNode) {
                parentNode.removeChild(this._layerElement);
            }
            this._layerElement = undefined;
            this._hasMounted = false;
        }
    };
    LayerBase.prototype._getHost = function () {
        var hostId = this.props.hostId;
        var doc = Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["getDocument"])(this._rootElement.current);
        if (!doc) {
            return undefined;
        }
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            return _defaultHostSelector ? doc.querySelector(_defaultHostSelector) : doc.body;
        }
    };
    LayerBase.defaultProps = {
        onLayerDidMount: function () { return undefined; },
        onLayerWillUnmount: function () { return undefined; }
    };
    LayerBase = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_4__Utilities__["customizable"])('Layer', ['theme', 'hostId'])
    ], LayerBase);
    return LayerBase;
}(__WEBPACK_IMPORTED_MODULE_4__Utilities__["BaseComponent"]));



/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/Fabric.js
var package = __webpack_require__(1);
module.exports = {}
for (var key in package) {
  if (package.hasOwnProperty(key)) {
    module.exports[key] = package[key];
  }
}
Object.defineProperty(module.exports, "__esModule", { value: true });

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/Layer.styles.js
module.exports = __webpack_require__(475);

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Styling__);

var GlobalClassNames = {
    root: 'ms-Layer',
    rootNoHost: 'ms-Layer--fixed',
    content: 'ms-Layer-content',
};
var getStyles = function (props) {
    var className = props.className, isNotHost = props.isNotHost, theme = props.theme;
    var classNames = Object(__WEBPACK_IMPORTED_MODULE_0__Styling__["getGlobalClassNames"])(GlobalClassNames, theme);
    return ({
        root: [
            classNames.root,
            isNotHost && [
                classNames.rootNoHost,
                {
                    position: 'fixed',
                    zIndex: __WEBPACK_IMPORTED_MODULE_0__Styling__["ZIndexes"].Layer,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    visibility: 'hidden'
                }
            ],
            className
        ],
        content: [
            classNames.content,
            {
                visibility: 'visible'
            }
        ]
    });
};


/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Layer/LayerHost.js
module.exports = __webpack_require__(477);

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return LayerHost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layer_base__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layer_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Layer_base__);




var LayerHost = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](LayerHost, _super);
    function LayerHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerHost.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LayerHost.prototype.componentDidMount = function () {
        __WEBPACK_IMPORTED_MODULE_3__Layer_base__["LayerBase"].notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.componentWillUnmount = function () {
        __WEBPACK_IMPORTED_MODULE_3__Layer_base__["LayerBase"].notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, this.props, { className: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["css"])('ms-LayerHost', this.props.className) })));
    };
    return LayerHost;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Popup/index.js
var package = __webpack_require__(1);
module.exports = package.workaround_PopupIndex;

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/utilities/decorators/withResponsiveMode.js
var package = __webpack_require__(1);
module.exports = package.workaround_withResponsiveMode;

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/Modal/Modal.scss.js
module.exports = __webpack_require__(481);

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duration", function() { return duration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootIsVisible", function() { return rootIsVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__);
/* tslint:disable */

Object(__WEBPACK_IMPORTED_MODULE_0__microsoft_load_themed_styles__["loadStyles"])([{ "rawString": ".root_40cbea6c{background-color:transparent;position:fixed;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:0;pointer-events:none;-webkit-transition:opacity .267s;transition:opacity .267s}.root_40cbea6c .ms-Button.ms-Button--compound{display:block}[dir='ltr'] .root_40cbea6c .ms-Button.ms-Button--compound{margin-left:0}[dir='rtl'] .root_40cbea6c .ms-Button.ms-Button--compound{margin-right:0}@media screen and (-ms-high-contrast: active){.root_40cbea6c .ms-Overlay{opacity:0}}.rootIsVisible_40cbea6c{opacity:1;pointer-events:auto}.main_40cbea6c{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;outline:3px solid transparent;max-height:100%;overflow-y:auto}[dir='ltr'] .main_40cbea6c{-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,0.4);box-shadow:0 0 5px 0 rgba(0,0,0,0.4)}[dir='rtl'] .main_40cbea6c{-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,0.4);box-shadow:0 0 5px 0 rgba(0,0,0,0.4)}[dir='ltr'] .main_40cbea6c{text-align:left}[dir='rtl'] .main_40cbea6c{text-align:right}\n" }]);
var duration = ".267s";
var root = "root_40cbea6c";
var rootIsVisible = "rootIsVisible_40cbea6c";
var main = "main_40cbea6c";


/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/SearchBox/SearchBox.js
module.exports = __webpack_require__(483);

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return SearchBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SearchBox_base__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SearchBox_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__SearchBox_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchBox_styles__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchBox_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__SearchBox_styles__);



var SearchBox = Object(__WEBPACK_IMPORTED_MODULE_0__Utilities__["styled"])(__WEBPACK_IMPORTED_MODULE_1__SearchBox_base__["SearchBoxBase"], __WEBPACK_IMPORTED_MODULE_2__SearchBox_styles__["getStyles"]);


/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/SearchBox/SearchBox.base.js
module.exports = __webpack_require__(485);

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxBase", function() { return SearchBoxBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icon__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Icon__);





var getClassNames = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["classNamesFunction"])();
var SearchBoxBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](SearchBoxBase, _super);
    function SearchBoxBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this._inputElement = Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["createRef"])();
        _this._onClickFocus = function () {
            var inputElement = _this._inputElement.value;
            if (inputElement) {
                _this.focus();
                inputElement.selectionStart = inputElement.selectionEnd = 0;
            }
        };
        _this._onFocusCapture = function (ev) {
            _this.setState({
                hasFocus: true
            });
            _this._events.on(_this._rootElement.current, 'blur', _this._onBlur, true);
            if (_this.props.onFocus) {
                _this.props.onFocus(ev);
            }
        };
        _this._onClearClick = function (ev) {
            var clearButtonProps = _this.props.clearButtonProps;
            if (clearButtonProps && clearButtonProps.onClick) {
                clearButtonProps.onClick(ev);
            }
            if (!ev.defaultPrevented) {
                _this._onClear(ev);
            }
        };
        _this._onKeyDown = function (ev) {
            switch (ev.which) {
                case 27 /* escape */:
                    _this.props.onEscape && _this.props.onEscape(ev);
                    if (!ev.defaultPrevented) {
                        _this._onClear(ev);
                    }
                    break;
                case 13 /* enter */:
                    if (_this.props.onSearch && _this.state.value.length > 0) {
                        _this.props.onSearch(_this.state.value);
                    }
                    break;
                default:
                    _this.props.onKeyDown && _this.props.onKeyDown(ev);
                    if (!ev.defaultPrevented) {
                        return;
                    }
            }
            // We only get here if the keypress has been handled,
            // or preventDefault was called in case of default keyDown handler
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._onBlur = function (ev) {
            _this._events.off(_this._rootElement.current, 'blur');
            _this.setState({
                hasFocus: false
            });
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
        };
        _this._onInputChange = function (ev) {
            var value = ev.target.value;
            if (value === _this._latestValue) {
                return;
            }
            _this._latestValue = value;
            _this.setState({ value: value });
            _this._callOnChange(value);
        };
        _this._warnDeprecations({
            'labelText': 'placeholder',
            'defaultValue': 'value'
        });
        _this._latestValue = props.value || '';
        _this.state = {
            value: _this._latestValue,
            hasFocus: false,
            id: Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["getId"])('SearchBox')
        };
        return _this;
    }
    SearchBoxBase.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.value !== undefined) {
            this._latestValue = newProps.value;
            this.setState({
                value: newProps.value
            });
        }
    };
    SearchBoxBase.prototype.render = function () {
        var _a = this.props, ariaLabel = _a.ariaLabel, placeholder = _a.placeholder, className = _a.className, disabled = _a.disabled, underlined = _a.underlined, getStyles = _a.getStyles, labelText = _a.labelText, theme = _a.theme, clearButtonProps = _a.clearButtonProps, disableAnimation = _a.disableAnimation;
        var _b = this.state, value = _b.value, hasFocus = _b.hasFocus, id = _b.id;
        var placeholderValue = labelText === undefined ? placeholder : labelText;
        var classNames = getClassNames(getStyles, {
            theme: theme,
            className: className,
            underlined: underlined,
            hasFocus: hasFocus,
            disabled: disabled,
            hasInput: value.length > 0,
            disableAnimation: disableAnimation
        });
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: this._rootElement, className: classNames.root, onFocusCapture: this._onFocusCapture },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.iconContainer, onClick: this._onClickFocus },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Icon__["Icon"], { className: classNames.icon, iconName: 'Search' })),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", { id: id, className: classNames.field, placeholder: placeholderValue, onChange: this._onInputChange, onInput: this._onInputChange, onKeyDown: this._onKeyDown, value: value, disabled: this.props.disabled, "aria-label": ariaLabel ? ariaLabel : placeholder, ref: this._inputElement }),
            value.length > 0 &&
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: classNames.clearButton },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Button__["IconButton"], __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({ styles: { root: { height: 'auto' }, icon: { fontSize: '12px' } }, iconProps: { iconName: 'Clear' } }, clearButtonProps, { onClick: this._onClearClick })))));
    };
    /**
     * Sets focus to the search box input field
     */
    SearchBoxBase.prototype.focus = function () {
        if (this._inputElement.current) {
            this._inputElement.current.focus();
        }
    };
    /**
     * Returns whether or not the SearchBox has focus
     */
    SearchBoxBase.prototype.hasFocus = function () {
        return !!this.state.hasFocus;
    };
    SearchBoxBase.prototype._onClear = function (ev) {
        this.props.onClear && this.props.onClear(ev);
        if (!ev.defaultPrevented) {
            this._latestValue = '';
            this.setState({
                value: ''
            });
            this._callOnChange('');
            ev.stopPropagation();
            ev.preventDefault();
            this.focus();
        }
    };
    SearchBoxBase.prototype._callOnChange = function (newValue) {
        var _a = this.props, onChange = _a.onChange, onChanged = _a.onChanged;
        // Call @deprecated method.
        if (onChanged) {
            onChanged(newValue);
        }
        if (onChange) {
            onChange(newValue);
        }
    };
    SearchBoxBase.defaultProps = {
        disableAnimation: false
    };
    SearchBoxBase = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        Object(__WEBPACK_IMPORTED_MODULE_2__Utilities__["customizable"])('SearchBox', ['theme'])
    ], SearchBoxBase);
    return SearchBoxBase;
}(__WEBPACK_IMPORTED_MODULE_2__Utilities__["BaseComponent"]));



/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

// Loading office-ui-fabric-react/components/SearchBox/SearchBox.styles.js
module.exports = __webpack_require__(487);

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getStyles"] = getStyles;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Styling__);

function getStyles(props) {
    var theme = props.theme, underlined = props.underlined, disabled = props.disabled, hasFocus = props.hasFocus, className = props.className, hasInput = props.hasInput, disableAnimation = props.disableAnimation;
    var palette = theme.palette, fonts = theme.fonts, semanticColors = theme.semanticColors;
    return {
        root: [
            'ms-SearchBox',
            fonts.medium,
            __WEBPACK_IMPORTED_MODULE_0__Styling__["normalize"],
            {
                color: palette.neutralPrimary,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'stretch',
                // The 1px top and bottom padding ensure the input field does not overlap the border
                padding: '1px 0 1px 4px',
                border: "1px solid " + palette.neutralTertiary,
                height: 32,
                selectors: (_a = {},
                    _a[__WEBPACK_IMPORTED_MODULE_0__Styling__["HighContrastSelector"]] = {
                        border: '1px solid WindowText'
                    },
                    _a[':hover'] = {
                        borderColor: palette.neutralDark,
                        selectors: (_b = {},
                            _b[__WEBPACK_IMPORTED_MODULE_0__Styling__["HighContrastSelector"]] = {
                                borderColor: 'Highlight'
                            },
                            _b)
                    },
                    _a[':hover $iconContainer'] = {
                        color: palette.themeDark
                    },
                    _a)
            },
            hasFocus && [
                'is-active',
                {
                    borderColor: palette.themePrimary,
                    selectors: (_c = {
                            ':hover': {
                                borderColor: palette.themePrimary,
                            }
                        },
                        _c[__WEBPACK_IMPORTED_MODULE_0__Styling__["HighContrastSelector"]] = {
                            borderColor: 'Highlight'
                        },
                        _c)
                }
            ],
            disabled && [
                'is-disabled',
                {
                    borderColor: palette.neutralLighter,
                    backgroundColor: palette.neutralLighter,
                    pointerEvents: 'none',
                    cursor: 'default'
                }
            ],
            underlined && [
                'is-underlined',
                {
                    borderWidth: '0 0 1px 0',
                    // Underlined SearchBox has a larger padding left to vertically align with the waffle in product
                    padding: '1px 0 1px 8px'
                }
            ],
            underlined && disabled && {
                backgroundColor: 'transparent'
            },
            hasInput && 'can-clear',
            className
        ],
        iconContainer: [
            'ms-SearchBox-iconContainer',
            {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: 16,
                width: 32,
                textAlign: 'center',
                color: palette.themePrimary,
                cursor: 'text'
            },
            hasFocus && {
                width: 4
            },
            disabled && {
                color: palette.neutralTertiary
            },
            !disableAnimation && {
                transition: "width " + __WEBPACK_IMPORTED_MODULE_0__Styling__["AnimationVariables"].durationValue1
            }
        ],
        icon: [
            'ms-SearchBox-icon',
            {
                opacity: 1,
            },
            hasFocus && {
                opacity: 0
            },
            !disableAnimation && {
                transition: "opacity " + __WEBPACK_IMPORTED_MODULE_0__Styling__["AnimationVariables"].durationValue1 + " 0s"
            }
        ],
        clearButton: [
            'ms-SearchBox-clearButton',
            {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                cursor: 'pointer',
                flexBasis: '32px',
                flexShrink: 0,
                padding: 1,
                color: palette.themePrimary
            }
        ],
        field: [
            'ms-SearchBox-field',
            __WEBPACK_IMPORTED_MODULE_0__Styling__["normalize"],
            {
                border: 'none',
                outline: 'none',
                fontWeight: 'inherit',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                color: palette.neutralPrimary,
                backgroundColor: semanticColors.inputBackground,
                flex: '1 1 0px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                // This padding forces the text placement to round up.
                paddingBottom: 0.5,
                // This removes the IE specific clear button in the input since we implimented our own
                selectors: {
                    '::-ms-clear': {
                        display: 'none'
                    },
                    '::placeholder': {
                        color: semanticColors.inputPlaceholderText,
                        opacity: 1
                    },
                    ':-ms-input-placeholder': {
                        color: semanticColors.inputPlaceholderText
                    }
                }
            },
            disabled && {
                color: palette.neutralTertiary
            }
        ]
    };
    var _a, _b, _c;
}


/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(489);
var loader = __webpack_require__(3);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".chrome_3ed0bad0{height:100%;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.chrome_3ed0bad0 .searchBox_3ed0bad0{-ms-flex:0 0 auto;flex:0 0 auto;margin-bottom:0;border-width:0;box-sizing:border-box;height:33px;border-bottom:1px solid;border-color:\"[theme:neutralLight, default: #eaeaea]\";width:100%}[dir=ltr] .chrome_3ed0bad0 .searchBox_3ed0bad0{padding-right:32px}[dir=rtl] .chrome_3ed0bad0 .searchBox_3ed0bad0{padding-left:32px}.chrome_3ed0bad0 .searchBox_3ed0bad0:hover{border-color:\"[theme:neutralLight, default: #eaeaea]\"}.chrome_3ed0bad0 .farButton_3ed0bad0{box-sizing:border-box;width:32px;height:32px;position:absolute;top:0}[dir=ltr] .chrome_3ed0bad0 .farButton_3ed0bad0{right:0}[dir=rtl] .chrome_3ed0bad0 .farButton_3ed0bad0{left:0}.chrome_3ed0bad0 .commandBar_3ed0bad0{-ms-flex:0 0 auto;flex:0 0 auto}.chrome_3ed0bad0 .content_3ed0bad0{-ms-flex:1 1 auto;flex:1 1 auto;overflow-y:scroll;height:100%}", ""]);

// exports


/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(491);
var loader = __webpack_require__(3);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".item_31655b80{width:33.3%;height:88px}.flexBox_31655b80{padding:10px 8px 0}.flexBox_31655b80>*+*{margin-top:10px}.icon_31655b80{width:82px;height:28px;min-height:28px;font-size:28px;line-height:28px}.title_31655b80{font-size:13px}", ""]);

// exports


/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(493);
var loader = __webpack_require__(3);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".item_72196456{height:100%;width:100%;border-width:2px}.flexBox_72196456{padding:23px 8px 0}.flexBox_72196456>*+*{margin-top:8px}.icon_72196456{width:82px;height:32px;min-height:32px;font-size:32px;line-height:32px}.title_72196456{font-size:14px}", ""]);

// exports


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(495);
var loader = __webpack_require__(3);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".noResultFoundContainer_8b804a35{height:100%}.noResultFound_8b804a35{height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.noResultFoundIcon_8b804a35{margin-bottom:18px;font-size:32px}[dir=ltr] .noResultFoundIcon_8b804a35{margin-right:14px}[dir=rtl] .noResultFoundIcon_8b804a35{margin-left:14px}.noResultFoundLabelContainer_8b804a35{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.noResultLabel_8b804a35{font-size:21px;font-weight:100;margin-bottom:4px}.noResultLabel_8b804a35,.tryAgainLabel_8b804a35{color:\"[theme:neutralSecondary, default: #666666]\"}.tryAgainLabel_8b804a35{font-size:17px;font-weight:300}", ""]);

// exports


/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(497);
var loader = __webpack_require__(3);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".toolboxLargeContainer_a8a79725{margin:24px;height:712px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.screenReaderAlert_a8a79725{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.menuCommandBar_a8a79725{height:40px;background-color:\"[theme:neutralLight, default: #eaeaea]\"}.menuCommandBar_a8a79725 .ms-CommandBar-primaryCommands{margin:0 4px}.menuCommandBar_a8a79725 .ms-CommandBarItem-commandText{font-size:21px}.selectedItem_a8a79725{font-weight:600;background-color:\"[theme:neutralLight, default: #eaeaea]\"}", ""]);

// exports


/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(499);
var loader = __webpack_require__(3);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".noResults_1b16f8a4{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;font-size:13px;-ms-flex-pack:center;justify-content:center;padding:13px}", ""]);

// exports


/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var RTE_namespaceObject = {};
__webpack_require__.d(RTE_namespaceObject, "TOOLBOX_ITEM_ID", function() { return TOOLBOX_ITEM_ID; });
__webpack_require__.d(RTE_namespaceObject, "TOOLBOX_ITEM_MAP", function() { return TOOLBOX_ITEM_MAP; });
var Group_namespaceObject = {};
__webpack_require__.d(Group_namespaceObject, "CONNECTOR_GROUP", function() { return CONNECTOR_GROUP; });
__webpack_require__.d(Group_namespaceObject, "OTHER_GROUP", function() { return OTHER_GROUP; });
__webpack_require__.d(Group_namespaceObject, "PREDEFINED_GROUPS", function() { return PREDEFINED_GROUPS; });
__webpack_require__.d(Group_namespaceObject, "FEATURED_GROUP", function() { return FEATURED_GROUP; });
__webpack_require__.d(Group_namespaceObject, "ALPHABETICAL_GROUP", function() { return ALPHABETICAL_GROUP; });
__webpack_require__.d(Group_namespaceObject, "FEATURED_ITEM_IDS", function() { return FEATURED_ITEM_IDS; });
__webpack_require__.d(Group_namespaceObject, "RTE_PLUS_FEATURED_ITEM_IDS", function() { return RTE_PLUS_FEATURED_ITEM_IDS; });

// EXTERNAL MODULE: C:/agent/1/_work/5/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.8.1/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: external "@microsoft/office-ui-fabric-react-bundle"
var office_ui_fabric_react_bundle_ = __webpack_require__(1);
var office_ui_fabric_react_bundle__default = /*#__PURE__*/__webpack_require__.n(office_ui_fabric_react_bundle_);

// EXTERNAL MODULE: external "@microsoft/sp-diagnostics"
var sp_diagnostics_ = __webpack_require__(13);
var sp_diagnostics__default = /*#__PURE__*/__webpack_require__.n(sp_diagnostics_);

// EXTERNAL MODULE: external "@microsoft/sp-lodash-subset"
var sp_lodash_subset_ = __webpack_require__(12);
var sp_lodash_subset__default = /*#__PURE__*/__webpack_require__.n(sp_lodash_subset_);

// EXTERNAL MODULE: external "@ms/sp-telemetry"
var sp_telemetry_ = __webpack_require__(7);
var sp_telemetry__default = /*#__PURE__*/__webpack_require__.n(sp_telemetry_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(2);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(5);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxModel/index.js + 2 modules
var toolboxModel = __webpack_require__(123);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxData/RTEStrings.resx.js
var key = '_RRzf46hnc4+fBX8RHyocNg';
var allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(16);
var strings = allStrings[key];
/* harmony default export */ var RTEStrings_resx = (strings);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxData/RTE.js



var TOOLBOX_ITEM_ID = 'RTE';
var TOOLBOX_ITEM_MAP = {
    id: TOOLBOX_ITEM_ID,
    item: {
        id: TOOLBOX_ITEM_ID,
        description: RTEStrings_resx.TextWebpartDescription,
        displayName: RTEStrings_resx.TextWebPartDisplayName,
        msIconName: 'Font',
        groupId: 'cf066440-0614-43d6-98ae-0b31cf14c7c3' 
    },
    control: {
        controlType: toolboxModel["a" /* CanvasControlType */].RTE,
        displayMode: sp_core_library_["DisplayMode"].Edit,
        id: TOOLBOX_ITEM_ID,
        position: {
            zoneIndex: -1,
            sectionIndex: -1,
            controlIndex: -1
        }
    },
    manifest: {
        id: TOOLBOX_ITEM_ID,
        isInternal: true
    }
};

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxData/GroupStrings.resx.js
var GroupStrings_resx_key = '_NS+5Kf9zpnH1/LStsp+Tfw';
var GroupStrings_resx_allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(16);
var GroupStrings_resx_strings = GroupStrings_resx_allStrings[GroupStrings_resx_key];
/* harmony default export */ var GroupStrings_resx = (GroupStrings_resx_strings);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxData/Group.js


var CONNECTOR_GROUP = [
    '507ffa9b-29db-4d59-93fe-0e240510f718',
    GroupStrings_resx.ToolboxCategoryConnectors
];
var OTHER_GROUP = [
    '5c03119e-3074-46fd-976b-c60198311f70',
    GroupStrings_resx.ToolboxCategoryOther
];
var PREDEFINED_GROUPS = [
    [
        'cf066440-0614-43d6-98ae-0b31cf14c7c3',
        GroupStrings_resx.ToolboxCategoryTextMediaAndContent
    ],
    [
        '1edbd9a8-0bfb-4aa2-9afd-14b8c45dd489',
        GroupStrings_resx.ToolboxCategoryDiscovery
    ],
    [
        '75e22ed5-fa14-4829-850a-c890608aca2d',
        GroupStrings_resx.ToolboxCategoryCommunicationAndCollaboration
    ],
    [
        '1bc7927e-4a5e-4520-b540-71305c79c20a',
        GroupStrings_resx.ToolboxCategoryPlanningAndProcess
    ],
    [
        '4aca9e90-eff5-4fa1-bac7-728f5f157b66',
        GroupStrings_resx.ToolboxCategoryBusinessIntelligence
    ],
    [
        '070951d7-94da-4db8-b06e-9d581f1f55b1',
        GroupStrings_resx.ToolboxCategorySiteTools
    ],
    CONNECTOR_GROUP,
    OTHER_GROUP
];
var FEATURED_GROUP = [
    'bff4383a-b0d8-4403-ae06-a49d288cda10',
    GroupStrings_resx.ToolboxGroupNameFeatured
];
var ALPHABETICAL_GROUP = [
    'cb7d0165-c1a5-4869-b988-840e29071e51',
    GroupStrings_resx.ToolboxGroupNameAlphabetical
];
var FEATURED_ITEM_IDS =  true
    ? [
        'd1d91016-032f-456d-98a4-721247c305e8_0',
        'b7dd04e1-19ce-4b24-9132-b60a1c2b910d_0',
        '6410b3b6-d440-4663-8744-378976dc041e_0',
        '490d7c76-1824-45b2-9de3-676421c997fa_0',
        'daf0b71c-6de8-4ef7-b511-faae7c388708_0' 
    ]
    : [
        'd1d91016-032f-456d-98a4-721247c305e8_0',
        'b7dd04e1-19ce-4b24-9132-b60a1c2b910d_0',
        '490d7c76-1824-45b2-9de3-676421c997fa_0',
        'daf0b71c-6de8-4ef7-b511-faae7c388708_0',
        'f92bf067-bc19-489e-a556-7fe95f508720_0' 
    ];
var RTE_PLUS_FEATURED_ITEM_IDS = [TOOLBOX_ITEM_ID].concat(FEATURED_ITEM_IDS);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxData/index.js




// EXTERNAL MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxAnimation/index.js + 2 modules
var toolboxAnimation = __webpack_require__(43);

// EXTERNAL MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxCallout/index.js + 2 modules
var toolboxCallout = __webpack_require__(121);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxError/ToolboxError.module.scss.js
__webpack_require__(456);
var styles = {
    error: 'error_8d35b1ef',
};
/* harmony default export */ var ToolboxError_module_scss = (styles);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxError/ToolboxError.js



function ToolboxError(props) {
    props.a11yManager.alert(props.message);
    return (external__react_["createElement"](toolboxCallout["a" /* ToolboxCallout */], { className: props.className, onDismiss: props.controller.closeToolbox, horizontalPosition: props.horizontalPosition, verticalPosition: props.verticalPosition, scrollableParent: props.scrollableParent, canvasElement: props.canvasElement },
        external__react_["createElement"]("p", { className: ToolboxError_module_scss.error }, props.message)));
}

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxError/ToolboxErrorAnimationLayer.js


var ToolboxErrorAnimationLayer = Object(toolboxAnimation["a" /* animation */])(ToolboxError, 2 );

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxError/index.js


// EXTERNAL MODULE: C:/agent/1/_work/5/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/@ms/odsp-utilities-bundle/4.2.4/node_modules/@ms/odsp-utilities-bundle/lib/index.js
var lib = __webpack_require__(15);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/ToolboxGroupBase.module.scss.js
__webpack_require__(458);
var ToolboxGroupBase_module_scss_styles = {
    toolboxGroup: 'toolboxGroup_a95df559',
    header: 'header_a95df559',
    seeAllButton: 'seeAllButton_a95df559',
};
/* harmony default export */ var ToolboxGroupBase_module_scss = (ToolboxGroupBase_module_scss_styles);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/ToolboxGroupStrings.resx.js
var ToolboxGroupStrings_resx_key = '_2TT4IG31kAjRqhD0h5kPOg';
var ToolboxGroupStrings_resx_allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(16);
var ToolboxGroupStrings_resx_strings = ToolboxGroupStrings_resx_allStrings[ToolboxGroupStrings_resx_key];
/* harmony default export */ var ToolboxGroupStrings_resx = (ToolboxGroupStrings_resx_strings);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/ToolboxGroupBase.js






var ToolboxGroupBase_ToolboxGroupBase = (function (_super) {
    tslib_es6["__extends"](ToolboxGroupBase, _super);
    function ToolboxGroupBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolboxGroupBase.prototype.render = function () {
        var sectionAriaLabel = lib["StringHelper"].format(ToolboxGroupStrings_resx.ToolboxGroupAriaLabel, this.props.groupName);
        return (external__react_["createElement"]("section", { "aria-label": sectionAriaLabel, role: 'list', className: ToolboxGroupBase_module_scss.toolboxGroup },
            this._banner,
            this._content,
            this._shouldShowSeeAllButton && this._seeAllButton));
    };
    Object.defineProperty(ToolboxGroupBase.prototype, "_banner", {
        get: function () {
            return this.props.hasHeader &&
                external__react_["createElement"]("header", { className: ToolboxGroupBase_module_scss.header }, this.props.groupName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolboxGroupBase.prototype, "_seeAllButton", {
        get: function () {
            return (external__react_["createElement"](office_ui_fabric_react_bundle_["ActionButton"], { className: ToolboxGroupBase_module_scss.seeAllButton, styles: { root: { height: 32, position: 'absolute' } }, onClick: this.props.onClickSeeAll, ariaLabel: lib["StringHelper"].format(ToolboxGroupStrings_resx.ToolboxGroupSeeAllButtonAriaLabel, this.props.groupName) }, ToolboxGroupStrings_resx.ToolboxGroupSeeAllButtonLabel));
        },
        enumerable: true,
        configurable: true
    });
    return ToolboxGroupBase;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/ToolboxGroupLarge.module.scss.js
__webpack_require__(460);
var ToolboxGroupLarge_module_scss_styles = {
    flexGroup: 'flexGroup_a95199b8',
    grid: 'grid_a95199b8',
    eightColumnWide: 'eightColumnWide_a95199b8',
    sevenColumnWide: 'sevenColumnWide_a95199b8',
    sixColumnWide: 'sixColumnWide_a95199b8',
    fiveColumnWide: 'fiveColumnWide_a95199b8',
    fourColumnWide: 'fourColumnWide_a95199b8',
};
/* harmony default export */ var ToolboxGroupLarge_module_scss = (ToolboxGroupLarge_module_scss_styles);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/ToolboxGroupLarge.js





var MIN_LARGE_GROUP_COLUMNS = 4;
var RESPONSIVE_BREAK_POINTS_MIN = [
    [718, MIN_LARGE_GROUP_COLUMNS + 1],
    [846, MIN_LARGE_GROUP_COLUMNS + 2],
    [974, MIN_LARGE_GROUP_COLUMNS + 3],
    [1102, MIN_LARGE_GROUP_COLUMNS + 4],
    [Number.MAX_VALUE, MIN_LARGE_GROUP_COLUMNS + 5] 
];
var ToolboxGroupLarge_ToolboxGroupLarge = (function (_super) {
    tslib_es6["__extends"](ToolboxGroupLarge, _super);
    function ToolboxGroupLarge(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            numberOfColumns: _this._calcColumnNumber(window.innerWidth)
        };
        return _this;
    }
    ToolboxGroupLarge.prototype.componentDidMount = function () {
        window.addEventListener('resize', this._handleWindowResize);
    };
    ToolboxGroupLarge.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this._handleWindowResize);
    };
    Object.defineProperty(ToolboxGroupLarge.prototype, "_content", {
        get: function () {
            return (external__react_["createElement"](office_ui_fabric_react_bundle_["FocusZone"], { className: Object(office_ui_fabric_react_bundle_["css"])(ToolboxGroupLarge_module_scss.flexGroup, this._widthClassName) }, this._responsiveChildren));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolboxGroupLarge.prototype, "_shouldShowSeeAllButton", {
        get: function () {
            return external__react_["Children"].count(this._responsiveChildren) < external__react_["Children"].count(this.props.children);
        },
        enumerable: true,
        configurable: true
    });
    ToolboxGroupLarge.prototype._handleWindowResize = function () {
        if (window.innerWidth) {
            var windowWidth = window.innerWidth;
            if (windowWidth) {
                this.setState({ numberOfColumns: this._calcColumnNumber(windowWidth) });
            }
        }
    };
    ToolboxGroupLarge.prototype._calcColumnNumber = function (windowWidth) {
        var responsiveIndex = 0;
        while (windowWidth >= RESPONSIVE_BREAK_POINTS_MIN[responsiveIndex][0]) {
            responsiveIndex++;
        }
        return responsiveIndex + MIN_LARGE_GROUP_COLUMNS;
    };
    Object.defineProperty(ToolboxGroupLarge.prototype, "_responsiveChildren", {
        get: function () {
            var _this = this;
            var slicedItems = Boolean(this.props.onClickSeeAll)
                ? external__react_["Children"].toArray(this.props.children).slice(0, this.state.numberOfColumns)
                : external__react_["Children"].toArray(this.props.children);
            return slicedItems.map(function (child, index) {
                return external__react_["createElement"]("div", { className: ToolboxGroupLarge_module_scss.grid, key: "grid-" + _this._generateKeyFromReactChild(child) }, child);
            });
        },
        enumerable: true,
        configurable: true
    });
    ToolboxGroupLarge.prototype._generateKeyFromReactChild = function (child) {
        var elementKey = child.key;
        if (elementKey) {
            return elementKey;
        }
        else {
            return child.toString();
        }
    };
    Object.defineProperty(ToolboxGroupLarge.prototype, "_widthClassName", {
        get: function () {
            switch (this.state.numberOfColumns) {
                case 4: {
                    return ToolboxGroupLarge_module_scss.fourColumnWide;
                }
                case 5: {
                    return ToolboxGroupLarge_module_scss.fiveColumnWide;
                }
                case 6: {
                    return ToolboxGroupLarge_module_scss.sixColumnWide;
                }
                case 7: {
                    return ToolboxGroupLarge_module_scss.sevenColumnWide;
                }
                default: {
                    return ToolboxGroupLarge_module_scss.eightColumnWide;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxGroupLarge.prototype, "_handleWindowResize", null);
    return ToolboxGroupLarge;
}(ToolboxGroupBase_ToolboxGroupBase));


// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/ToolboxGroupSmall.js



var ToolboxGroupSmall_ToolboxGroupSmall = (function (_super) {
    tslib_es6["__extends"](ToolboxGroupSmall, _super);
    function ToolboxGroupSmall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ToolboxGroupSmall.prototype, "_content", {
        get: function () {
            return (external__react_["createElement"]("div", null, this.props.children));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolboxGroupSmall.prototype, "_shouldShowSeeAllButton", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return ToolboxGroupSmall;
}(ToolboxGroupBase_ToolboxGroupBase));


// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/ToolboxGroupUtilities.js


var PREDEFINED_GROUP_IDS = new Set(Group_namespaceObject.PREDEFINED_GROUPS.map(function (_a) {
    var id = _a[0];
    return id;
}));
function categorizeGroups(items) {
    var groups = Object(sp_lodash_subset_["groupBy"])(items, function (item) { return PREDEFINED_GROUP_IDS.has(item.groupId) ? item.groupId : Group_namespaceObject.OTHER_GROUP[0]; });
    var result = Group_namespaceObject.PREDEFINED_GROUPS
        .map(function (_a) {
        var groupId = _a[0], title = _a[1];
        return ({
            title: title,
            groupId: groupId,
            items: groups[groupId] || []
        });
    })
        .filter(function (group) { return group.items.length > 0; });
    var featuredGroup = getFeaturedGroup(items);
    return featuredGroup.items.length > 0 ? [featuredGroup].concat(result) : result;
}
function getFeaturedGroup(items) {
    var featuredItems = items
        .filter(function (item) { return Group_namespaceObject.RTE_PLUS_FEATURED_ITEM_IDS.indexOf(item.id) > -1; })
        .sort(function (a, b) { return Group_namespaceObject.RTE_PLUS_FEATURED_ITEM_IDS.indexOf(a.id) - Group_namespaceObject.RTE_PLUS_FEATURED_ITEM_IDS.indexOf(b.id); });
    return {
        title: Group_namespaceObject.FEATURED_GROUP[1],
        groupId: Group_namespaceObject.FEATURED_GROUP[0],
        items: featuredItems
    };
}
function getAlphabeticalGroup(items) {
    var alphabeticalItems = items.filter(function (item) { return Group_namespaceObject.RTE_PLUS_FEATURED_ITEM_IDS.indexOf(item.id) === -1; });
    return {
        title: Group_namespaceObject.ALPHABETICAL_GROUP[1],
        groupId: Group_namespaceObject.ALPHABETICAL_GROUP[0],
        items: alphabeticalItems
    };
}

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxGroup/index.js




// EXTERNAL MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxLoading/index.js + 3 modules
var toolboxLoading = __webpack_require__(138);

// EXTERNAL MODULE: C:/agent/1/_work/5/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/5.120.0/react-dom@15.6.2+react@15.6.2/node_modules/office-ui-fabric-react/lib/components/Modal/Modal.js
var Modal = __webpack_require__(462);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal);

// EXTERNAL MODULE: C:/agent/1/_work/5/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/office-ui-fabric-react/5.120.0/react-dom@15.6.2+react@15.6.2/node_modules/office-ui-fabric-react/lib/components/SearchBox/SearchBox.js
var SearchBox = __webpack_require__(482);
var SearchBox_default = /*#__PURE__*/__webpack_require__.n(SearchBox);

// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(18);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxChrome/ToolboxChrome.module.scss.js
__webpack_require__(488);
var ToolboxChrome_module_scss_styles = {
    chrome: 'chrome_3ed0bad0',
    searchBox: 'searchBox_3ed0bad0',
    farButton: 'farButton_3ed0bad0',
    commandBar: 'commandBar_3ed0bad0',
    content: 'content_3ed0bad0',
};
/* harmony default export */ var ToolboxChrome_module_scss = (ToolboxChrome_module_scss_styles);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxChrome/ToolboxChromeStrings.resx.js
var ToolboxChromeStrings_resx_key = '_4SOrKBlkyRLkXWcT6txoow';
var ToolboxChromeStrings_resx_allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(16);
var ToolboxChromeStrings_resx_strings = ToolboxChromeStrings_resx_allStrings[ToolboxChromeStrings_resx_key];
/* harmony default export */ var ToolboxChromeStrings_resx = (ToolboxChromeStrings_resx_strings);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxChrome/ToolboxChrome.js









var ToolboxChrome_ToolboxChrome = (function (_super) {
    tslib_es6["__extends"](ToolboxChrome, _super);
    function ToolboxChrome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolboxChrome.prototype.componentDidMount = function () {
        if (this._searchBoxContainer) {
            var input = external__react_dom_["findDOMNode"](this._searchBoxContainer).querySelector('input');
            if (input) {
                var valueLength = input.value.length;
                input.setSelectionRange(valueLength, valueLength);
            }
        }
    };
    ToolboxChrome.prototype.render = function () {
        var _this = this;
        var ariaLabel = lib["StringHelper"].format(ToolboxChromeStrings_resx.ToolboxSearchAccessibleLabelTemplate, this.props.searchQuery ? ToolboxChromeStrings_resx.ToolboxSearchEscapeAccessibleLabel : '');
        return (external__react_["createElement"]("div", { className: Object(office_ui_fabric_react_bundle_["css"])(this.props.className, ToolboxChrome_module_scss.chrome), ref: function (instance) { return _this._searchBoxContainer = instance; } },
            external__react_["createElement"](SearchBox["SearchBox"], { ariaLabel: ariaLabel, labelText: ToolboxChromeStrings_resx.ToolboxSearchLabel, onChange: this.props.onChange, onSearch: this.props.onSearch, onEscape: this._handleEscape, value: this.props.searchQuery, className: ToolboxChrome_module_scss.searchBox, "data-automation-id": 'toolbox-searchBox' }),
            this._commandBar,
            external__react_["createElement"]("div", { className: ToolboxChrome_module_scss.content, "data-automation-id": 'spPageCanvasLargeToolboxBody' }, this.props.children),
            external__react_["createElement"](office_ui_fabric_react_bundle_["IconButton"], { className: ToolboxChrome_module_scss.farButton, iconProps: this.props.farButton.iconProps, onClick: this.props.farButton.onClick, title: this.props.farButton.title, ariaLabel: this.props.farButton.ariaLabel, ariaDescription: this.props.farButton.ariaDescription, "data-automation-id": 'toolbox-farButton' })));
    };
    Object.defineProperty(ToolboxChrome.prototype, "_commandBar", {
        get: function () {
            if (!this.props.commandBar) {
                return null; 
            }
            var commandBarProps = sp_lodash_subset_["merge"]({}, this.props.commandBar, { className: Object(office_ui_fabric_react_bundle_["css"])(this.props.commandBar.className, ToolboxChrome_module_scss.commandBar) });
            return (external__react_["createElement"](office_ui_fabric_react_bundle_["CommandBar"], tslib_es6["__assign"]({}, commandBarProps)));
        },
        enumerable: true,
        configurable: true
    });
    ToolboxChrome.prototype._handleEscape = function () {
        if (this.props.searchQuery) {
            this.props.onChange('');
        }
        else if (this.props.onEscape) {
            this.props.onEscape();
        }
    };
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxChrome.prototype, "_handleEscape", null);
    return ToolboxChrome;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxChrome/index.js


// EXTERNAL MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxSearch/index.js + 1 modules
var toolboxSearch = __webpack_require__(122);

// EXTERNAL MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxItem/ToolboxItemBase.js + 1 modules
var ToolboxItemBase = __webpack_require__(124);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxItem/ToolboxItemSmall.module.scss.js
__webpack_require__(490);
var ToolboxItemSmall_module_scss_styles = {
    item: 'item_31655b80',
    flexBox: 'flexBox_31655b80',
    icon: 'icon_31655b80',
    title: 'title_31655b80',
};
/* harmony default export */ var ToolboxItemSmall_module_scss = (ToolboxItemSmall_module_scss_styles);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxItem/ToolboxItemSmall.js




function ToolboxItemSmall(props) {
    return (external__react_["createElement"](ToolboxItemBase["a" /* ToolboxItemBase */], tslib_es6["__assign"]({}, props, { titleLineCount: 2, itemClassName: ToolboxItemSmall_module_scss.item, itemStyles: { height: 88 }, flexBoxClassName: ToolboxItemSmall_module_scss.flexBox, iconClassName: ToolboxItemSmall_module_scss.icon, titleClassName: ToolboxItemSmall_module_scss.title, "data-item-size": 'small' })));
}

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxItem/ToolboxItemLarge.module.scss.js
__webpack_require__(492);
var ToolboxItemLarge_module_scss_styles = {
    item: 'item_72196456',
    flexBox: 'flexBox_72196456',
    icon: 'icon_72196456',
    title: 'title_72196456',
};
/* harmony default export */ var ToolboxItemLarge_module_scss = (ToolboxItemLarge_module_scss_styles);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxItem/ToolboxItemLarge.js




function ToolboxItemLarge(props) {
    return (external__react_["createElement"](ToolboxItemBase["a" /* ToolboxItemBase */], tslib_es6["__assign"]({}, props, { titleLineCount: 3, itemClassName: ToolboxItemLarge_module_scss.item, itemStyles: { height: 128 }, flexBoxClassName: ToolboxItemLarge_module_scss.flexBox, iconClassName: ToolboxItemLarge_module_scss.icon, titleClassName: ToolboxItemLarge_module_scss.title, "data-item-size": 'large' })));
}

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxItem/index.js



// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ViewCategory.js





var ViewCategory_ViewCategory = (function (_super) {
    tslib_es6["__extends"](ViewCategory, _super);
    function ViewCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewCategory.prototype.render = function () {
        var _this = this;
        var groupIndex = Object(sp_lodash_subset_["findIndex"])(this.props.groups, function (group) { return group.groupId === _this.props.view.groupId; });
        var toolboxGroup = this.props.groups[groupIndex];
        var itemViews = toolboxGroup.items
            .map(function (item) {
            return external__react_["createElement"](ToolboxItemLarge, { key: item.id, item: item, onClick: _this.props.controller.clickItemInToolboxLarge });
        });
        return (external__react_["createElement"](ToolboxGroupLarge_ToolboxGroupLarge, { groupName: toolboxGroup.title, hasHeader: false }, itemViews));
    };
    return ViewCategory;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ViewHome.js




var ViewHome_ViewHome = (function (_super) {
    tslib_es6["__extends"](ViewHome, _super);
    function ViewHome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewHome.prototype.render = function () {
        return (external__react_["createElement"]("div", null, this._renderGroups()));
    };
    ViewHome.prototype._renderGroups = function () {
        var _this = this;
        return this.props.groups.map(function (group) {
            return external__react_["createElement"](ToolboxGroupLarge_ToolboxGroupLarge, { groupName: group.title, hasHeader: true, key: group.groupId, onClickSeeAll: function () { return _this._switchToCategoryView(group.groupId); } }, _this._renderItems(group.items));
        });
    };
    ViewHome.prototype._renderItems = function (items) {
        var _this = this;
        return items.map(function (item) {
            return external__react_["createElement"](ToolboxItemLarge, { key: item.id, item: item, onClick: _this.props.controller.clickItemInToolboxLarge });
        });
    };
    ViewHome.prototype._switchToCategoryView = function (groupId) {
        this.props.controller.switchView({
            type: "Category" ,
            groupId: groupId,
            previousView: this.props.view
        });
    };
    return ViewHome;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ToolboxLargeStrings.resx.js
var ToolboxLargeStrings_resx_key = '_WVn4QXYnL8WpGCqr2C9ySA';
var ToolboxLargeStrings_resx_allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(16);
var ToolboxLargeStrings_resx_strings = ToolboxLargeStrings_resx_allStrings[ToolboxLargeStrings_resx_key];
/* harmony default export */ var ToolboxLargeStrings_resx = (ToolboxLargeStrings_resx_strings);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ViewSearch.module.scss.js
__webpack_require__(494);
var ViewSearch_module_scss_styles = {
    noResultFoundContainer: 'noResultFoundContainer_8b804a35',
    noResultFound: 'noResultFound_8b804a35',
    noResultFoundIcon: 'noResultFoundIcon_8b804a35',
    noResultFoundLabelContainer: 'noResultFoundLabelContainer_8b804a35',
    noResultLabel: 'noResultLabel_8b804a35',
    tryAgainLabel: 'tryAgainLabel_8b804a35',
};
/* harmony default export */ var ViewSearch_module_scss = (ViewSearch_module_scss_styles);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ViewSearch.js







var ViewSearch_ViewSearch = (function (_super) {
    tslib_es6["__extends"](ViewSearch, _super);
    function ViewSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewSearch.prototype.render = function () {
        var _this = this;
        if (this.props.items.length === 0) {
            return (external__react_["createElement"]("div", { className: ViewSearch_module_scss.noResultFoundContainer },
                external__react_["createElement"](ToolboxGroupLarge_ToolboxGroupLarge, { groupName: 'empty', hasHeader: false, key: 'toolboxGroup-empty' }),
                external__react_["createElement"](EmptySearchResultComponent, null)));
        }
        var itemViews = this.props.items
            .map(function (item) {
            return external__react_["createElement"](ToolboxItemLarge, { key: item.id, item: item, onClick: _this.props.controller.clickItemInToolboxLarge });
        });
        return (external__react_["createElement"](ToolboxGroupLarge_ToolboxGroupLarge, { groupName: ToolboxLargeStrings_resx.ToolboxCategorySearchResults, hasHeader: false }, itemViews));
    };
    return ViewSearch;
}(external__react_["PureComponent"]));

function EmptySearchResultComponent() {
    return (external__react_["createElement"]("div", { className: ViewSearch_module_scss.noResultFound },
        external__react_["createElement"](office_ui_fabric_react_bundle_["Icon"], { iconName: 'Search', className: ViewSearch_module_scss.noResultFoundIcon }),
        external__react_["createElement"]("div", { className: ViewSearch_module_scss.noResultFoundLabelContainer },
            external__react_["createElement"]("div", { className: ViewSearch_module_scss.noResultLabel }, ToolboxLargeStrings_resx.NoResultLabel),
            external__react_["createElement"]("div", { className: ViewSearch_module_scss.tryAgainLabel }, ToolboxLargeStrings_resx.TryAgainLabel))));
}

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ViewSort.js




var ViewSort_ViewSort = (function (_super) {
    tslib_es6["__extends"](ViewSort, _super);
    function ViewSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewSort.prototype.render = function () {
        var _this = this;
        var itemViews = this.props.items
            .map(function (item) {
            return external__react_["createElement"](ToolboxItemLarge, { key: item.id, item: item, onClick: _this.props.controller.clickItemInToolboxLarge });
        });
        return (external__react_["createElement"](ToolboxGroupLarge_ToolboxGroupLarge, { groupName: '', hasHeader: false }, itemViews));
    };
    return ViewSort;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ToolboxLarge.module.scss.js
__webpack_require__(496);
var ToolboxLarge_module_scss_styles = {
    toolboxLargeContainer: 'toolboxLargeContainer_a8a79725',
    screenReaderAlert: 'screenReaderAlert_a8a79725',
    menuCommandBar: 'menuCommandBar_a8a79725',
    selectedItem: 'selectedItem_a8a79725',
};
/* harmony default export */ var ToolboxLarge_module_scss = (ToolboxLarge_module_scss_styles);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ToolboxLargeViewLayer.js















var ALL_BY_CATEGORY_KEY = 'allByCategory';
var ALL_A_TO_Z_KEY = 'allAToZ';
var FILTER_DELAY_MS = 300;
var ToolboxLargeViewLayer_ToolboxLargeViewLayer = (function (_super) {
    tslib_es6["__extends"](ToolboxLargeViewLayer, _super);
    function ToolboxLargeViewLayer(props) {
        var _this = _super.call(this, props) || this;
        _this._controller = Object(sp_lodash_subset_["assign"])(_this.props.controller, {
            switchView: _this._switchView,
            clickItemInToolboxLarge: _this._clickItemInToolboxLarge,
            filter: _this._filter,
            filterDebounce: _this._filterDebounce
        });
        var query = toolboxSearch["a" /* ToolboxSearch */].getQuery(props.controller);
        _this.state =
            query
                ? {
                    items: toolboxSearch["a" /* ToolboxSearch */].filterItems(props.items, query, 'Large'),
                    view: {
                        type: "Search" ,
                        query: query,
                        previousView: {
                            type: "Home" ,
                            previousView: undefined
                        }
                    }
                }
                : {
                    items: props.items,
                    view: {
                        type: "Home" ,
                        previousView: undefined
                    }
                };
        _this._updateItemsDebounce = Object(sp_lodash_subset_["debounce"])(_this._updateItems, FILTER_DELAY_MS);
        return _this;
    }
    ToolboxLargeViewLayer.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.items !== this.props.items) {
            this.setState(function (state) { return (tslib_es6["__assign"]({}, state, { items: state.view.type === "Search" 
                    ? toolboxSearch["a" /* ToolboxSearch */].filterItems(nextProps.items, state.view.query, 'Large')
                    : nextProps.items })); });
        }
    };
    ToolboxLargeViewLayer.prototype.componentWillUnmount = function () {
        if (this.state.view.type === "Search" ) {
            if (this.state.items.length > 0) {
                toolboxSearch["a" /* ToolboxSearch */].setQuery(this.props.controller, this.state.view.query);
            }
            else {
                toolboxSearch["a" /* ToolboxSearch */].setQuery(this.props.controller, '');
            }
        }
    };
    ToolboxLargeViewLayer.prototype.render = function () {
        var _this = this;
        var titleAriaId = Math.random().toString().substr(2);
        var subTitleAriaId = Math.random().toString().substr(2);
        var title = ToolboxLargeStrings_resx.LargeToolboxAriaTitle;
        var subTitle = lib["StringHelper"].formatWithLocalizedCountValue(ToolboxLargeStrings_resx.LargeToolboxAriaSubTitle, ToolboxLargeStrings_resx.CountStringIntervals, this.state.items.length);
        var collapseButtonProps = {
            iconProps: { iconName: 'BackToWindow' },
            onClick: this.props.controller.collapseToolbox,
            title: ToolboxLargeStrings_resx.ToolboxCollapseButtonDescription,
            ariaLabel: ToolboxLargeStrings_resx.ToolboxCollapseButtonAriaLabel,
            ariaDescription: ToolboxLargeStrings_resx.ToolboxCollapseButtonDescription
        };
        var commandBarProps = {
            isSearchBoxVisible: false,
            items: this._commandBarItems,
            className: ToolboxLarge_module_scss.menuCommandBar
        };
        return (external__react_["createElement"](Modal["Modal"], { onDismiss: function () { return _this.props.controller.closeToolbox(true ); }, containerClassName: Object(office_ui_fabric_react_bundle_["css"])(ToolboxLarge_module_scss.toolboxLargeContainer, this.props.className), isOpen: true, isBlocking: false, titleAriaId: titleAriaId, subtitleAriaId: subTitleAriaId },
            external__react_["createElement"](ToolboxChrome_ToolboxChrome, { searchQuery: this.state.view.type === "Search"  ? this.state.view.query : '', farButton: collapseButtonProps, onChange: this._controller.filterDebounce, onSearch: this._controller.filter, onEscape: function () { return _this.props.controller.closeToolbox(true ); }, commandBar: commandBarProps }, this._toolboxBody),
            external__react_["createElement"]("p", { id: titleAriaId, className: ToolboxLarge_module_scss.screenReaderAlert }, title),
            external__react_["createElement"]("p", { id: subTitleAriaId, className: ToolboxLarge_module_scss.screenReaderAlert }, subTitle)));
    };
    Object.defineProperty(ToolboxLargeViewLayer.prototype, "_commandBarItems", {
        get: function () {
            var _this = this;
            var _a = this._selectedCategory, selectedCategoryKey = _a[0], selectedCategoryName = _a[1];
            var subMenuForGroup = this.props.groups
                .map(function (toolboxLargeGroup) {
                return ({
                    key: toolboxLargeGroup.groupId,
                    name: toolboxLargeGroup.title,
                    className: Object(office_ui_fabric_react_bundle_["css"])((_a = {},
                        _a[ToolboxLarge_module_scss.selectedItem] = toolboxLargeGroup.groupId === selectedCategoryKey,
                        _a)),
                    onClick: _this._handleChangeCategoryMenu
                });
                var _a;
            });
            var subMenuForView = [{
                    key: ALL_BY_CATEGORY_KEY,
                    name: ToolboxLargeStrings_resx.ToolboxCategoryAllCategory,
                    className: Object(office_ui_fabric_react_bundle_["css"])((_b = {},
                        _b[ToolboxLarge_module_scss.selectedItem] = ALL_BY_CATEGORY_KEY === selectedCategoryKey,
                        _b)),
                    onClick: this._handleChangeCategoryMenu
                }, {
                    key: ALL_A_TO_Z_KEY,
                    name: ToolboxLargeStrings_resx.ToolboxCategorySortingCategory,
                    className: Object(office_ui_fabric_react_bundle_["css"])((_c = {},
                        _c[ToolboxLarge_module_scss.selectedItem] = ALL_A_TO_Z_KEY === selectedCategoryKey,
                        _c)),
                    onClick: this._handleChangeCategoryMenu
                }];
            var backButton = {
                key: 'BackButton',
                ariaLabel: ToolboxLargeStrings_resx.BackButtonAriaLabel,
                icon: 'ChromeBack',
                disabled: this.state.view.previousView === undefined,
                onClick: this._handleBackClick,
                'data-automation-id': 'toolbox-back-button'
            };
            var commandBarMenus = [
                backButton,
                {
                    key: 'CategoryContextualMenu',
                    name: selectedCategoryName,
                    subMenuProps: {
                        items: subMenuForView.concat(subMenuForGroup),
                        beakWidth: 10,
                        isBeakVisible: true
                    },
                    role: 'navigation',
                    ariaLabel: lib["StringHelper"].format(ToolboxLargeStrings_resx.DropDownMenuAriaLabel, selectedCategoryName)
                }
            ];
            return commandBarMenus;
            var _b, _c;
        },
        enumerable: true,
        configurable: true
    });
    ToolboxLargeViewLayer.prototype._handleChangeCategoryMenu = function (ev, item) {
        if (!item) {
            return;
        }
        var previousView = this.state.view.type === "Search" 
            ? this.state.view.previousView
            : this.state.view;
        switch (item.key) {
            case ALL_BY_CATEGORY_KEY: {
                this._switchView({
                    type: "Home" ,
                    previousView: previousView
                });
                var message = lib["StringHelper"].format(ToolboxLargeStrings_resx.SwitchCategoryAlert, ToolboxLargeStrings_resx.ToolboxCategoryAllCategory);
                this.props.a11yManager.alert(message);
                break;
            }
            case ALL_A_TO_Z_KEY: {
                this._switchView({
                    type: "Sort" ,
                    sortBy: 'alphabet',
                    previousView: previousView
                });
                var message = lib["StringHelper"].format(ToolboxLargeStrings_resx.SwitchCategoryAlert, ToolboxLargeStrings_resx.ToolboxCategorySortingCategory);
                this.props.a11yManager.alert(message);
                break;
            }
            default: {
                var groupId = item.key;
                this._switchView({
                    type: "Category" ,
                    groupId: groupId,
                    previousView: previousView
                });
                var message = lib["StringHelper"].format(ToolboxLargeStrings_resx.SwitchCategoryAlert, this._getCategoryName(item.key));
                this.props.a11yManager.alert(message);
            }
        }
    };
    Object.defineProperty(ToolboxLargeViewLayer.prototype, "_selectedCategory", {
        get: function () {
            var view = this.state.view;
            var selectedCategoryKey;
            var selectedCategoryName;
            if (view.type === "Home" ) {
                selectedCategoryKey = ALL_BY_CATEGORY_KEY;
                selectedCategoryName = ToolboxLargeStrings_resx.ToolboxCategoryAllCategory;
            }
            else if (view.type === "Sort" ) {
                selectedCategoryKey = ALL_A_TO_Z_KEY;
                selectedCategoryName = ToolboxLargeStrings_resx.ToolboxCategorySortingCategory;
            }
            else if (view.type === "Search" ) {
                selectedCategoryKey = '';
                selectedCategoryName = ToolboxLargeStrings_resx.ToolboxCategorySearchResults;
            }
            else {
                selectedCategoryKey = view.groupId;
                selectedCategoryName = this._getCategoryName(view.groupId);
            }
            return [selectedCategoryKey, selectedCategoryName];
        },
        enumerable: true,
        configurable: true
    });
    ToolboxLargeViewLayer.prototype._getCategoryName = function (groupId) {
        var groupIndex = Object(sp_lodash_subset_["findIndex"])(this.props.groups, function (group) { return group.groupId === groupId; });
        if (groupIndex >= 0) {
            return this.props.groups[groupIndex].title;
        }
        else {
            sp_diagnostics_["_TraceLogger"].logError(ToolboxLargeViewLayer._logSource, new Error("Something went wrong with categorizing groups, group not found by given id: " + groupId));
            return '';
        }
    };
    ToolboxLargeViewLayer.prototype._handleBackClick = function () {
        if (this.state.view.previousView) {
            this._switchView(this.state.view.previousView);
        }
    };
    Object.defineProperty(ToolboxLargeViewLayer.prototype, "_toolboxBody", {
        get: function () {
            switch (this.state.view.type) {
                case "Home" :
                    return (external__react_["createElement"](ViewHome_ViewHome, { controller: this._controller, view: this.state.view, groups: this.props.groups }));
                case "Sort" :
                    return (external__react_["createElement"](ViewSort_ViewSort, { controller: this._controller, view: this.state.view, items: this.props.items }));
                case "Category" :
                    return (external__react_["createElement"](ViewCategory_ViewCategory, { controller: this._controller, view: this.state.view, groups: this.props.groups }));
                case "Search" :
                    return (external__react_["createElement"](ViewSearch_ViewSearch, { controller: this._controller, view: this.state.view, items: this.state.items }));
                default: {
                    return null; 
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ToolboxLargeViewLayer.prototype._switchView = function (view) {
        if (view.previousView !== undefined && this._isSameView(view, view.previousView)) {
            this.setState({ view: view.previousView });
        }
        else {
            this.setState({ view: view });
        }
    };
    ToolboxLargeViewLayer.prototype._isSameView = function (view1, view2) {
        if (view1.type === "Category"  && view2.type === "Category" ) {
            return view1.groupId === view2.groupId;
        }
        else {
            return view1.type === view2.type;
        }
    };
    ToolboxLargeViewLayer.prototype._clickItemInToolboxLarge = function (toolboxItemId) {
        return this.props.controller.clickItem(toolboxItemId, {
            size: "Large" ,
            view: this.state.view
        });
    };
    ToolboxLargeViewLayer.prototype._filter = function (query) {
        this._updateView(query);
        this._updateItems();
    };
    ToolboxLargeViewLayer.prototype._filterDebounce = function (query) {
        this._updateView(query);
        this._updateItemsDebounce();
    };
    ToolboxLargeViewLayer.prototype._updateView = function (query) {
        this.setState(function (state, props) {
            if (query && state.view.type === "Search" ) {
                return tslib_es6["__assign"]({}, state, { view: {
                        type: "Search" ,
                        query: query,
                        previousView: state.view.previousView
                    } });
            }
            else if (query && state.view.type !== "Search" ) {
                return {
                    items: toolboxSearch["a" /* ToolboxSearch */].filterItems(props.items, query, 'Large'),
                    view: {
                        type: "Search" ,
                        query: query,
                        previousView: state.view
                    }
                };
            }
            else if (state.view.type === "Search" ) {
                return tslib_es6["__assign"]({}, state, { view: state.view.previousView });
            }
            else {
                return state;
            }
        });
    };
    ToolboxLargeViewLayer.prototype._updateItems = function () {
        this.setState(function (state, props) {
            if (state.view.type !== "Search" ) {
                return state;
            }
            var items = toolboxSearch["a" /* ToolboxSearch */].filterItems(props.items, state.view.query, 'Large');
            var message = lib["StringHelper"].formatWithLocalizedCountValue(ToolboxLargeStrings_resx.LargeToolboxAriaSubTitle, ToolboxLargeStrings_resx.CountStringIntervals, items.length);
            props.a11yManager.alert(message);
            return tslib_es6["__assign"]({}, state, { items: items });
        });
    };
    ToolboxLargeViewLayer._logSource = sp_diagnostics_["_LogSource"].create('Toolbox');
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxLargeViewLayer.prototype, "_handleChangeCategoryMenu", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxLargeViewLayer.prototype, "_handleBackClick", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxLargeViewLayer.prototype, "_switchView", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxLargeViewLayer.prototype, "_clickItemInToolboxLarge", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxLargeViewLayer.prototype, "_filter", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxLargeViewLayer.prototype, "_filterDebounce", null);
    return ToolboxLargeViewLayer;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/ToolboxLargeAnimationLayer.js


var ToolboxLargeAnimationLayer = Object(toolboxAnimation["a" /* animation */])(ToolboxLargeViewLayer_ToolboxLargeViewLayer, 4 );

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxLarge/index.js


// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxSmall/ToolboxSmall.module.scss.js
__webpack_require__(498);
var ToolboxSmall_module_scss_styles = {
    noResults: 'noResults_1b16f8a4',
};
/* harmony default export */ var ToolboxSmall_module_scss = (ToolboxSmall_module_scss_styles);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxSmall/ToolboxSmallStrings.resx.js
var ToolboxSmallStrings_resx_key = '_CZsUWMvZilAKKAfwQSdzKQ';
var ToolboxSmallStrings_resx_allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(16);
var ToolboxSmallStrings_resx_strings = ToolboxSmallStrings_resx_allStrings[ToolboxSmallStrings_resx_key];
/* harmony default export */ var ToolboxSmallStrings_resx = (ToolboxSmallStrings_resx_strings);

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxSmall/ToolboxSmall.js










var ToolboxSmall_ToolboxSmall = (function (_super) {
    tslib_es6["__extends"](ToolboxSmall, _super);
    function ToolboxSmall(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this._getState(props.items, props.query);
        return _this;
    }
    ToolboxSmall.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.items !== this.props.items) {
            this.setState(this._getState(nextProps.items, nextProps.query));
        }
    };
    ToolboxSmall.prototype.componentDidMount = function () {
        this._alertItemsCount();
    };
    ToolboxSmall.prototype.componentDidUpdate = function () {
        this._alertItemsCount();
    };
    ToolboxSmall.prototype.render = function () {
        var _this = this;
        var itemsNotFound = (this.state.featuredGroup.items.length === 0 &&
            this.state.alphabeticalGroup.items.length === 0);
        var expandButtonProps = {
            iconProps: { iconName: 'fullScreen' },
            onClick: this.props.controller.expandToolbox,
            title: ToolboxSmallStrings_resx.ToolboxExpandButtonTitle
        };
        return (external__react_["createElement"](toolboxCallout["a" /* ToolboxCallout */], { onDismiss: function (isKeyboard) { return _this.props.controller.closeToolbox(isKeyboard ); }, horizontalPosition: this.props.horizontalPosition || 0, verticalPosition: this.props.verticalPosition || 0, className: this.props.className, scrollableParent: this.props.scrollableParent, canvasElement: this.props.canvasElement },
            external__react_["createElement"](ToolboxChrome_ToolboxChrome, { onSearch: this.props.controller.filter, onChange: this.props.controller.filterDebounce, onEscape: function () { return _this.props.controller.closeToolbox(true ); }, searchQuery: this.props.query, farButton: expandButtonProps },
                external__react_["createElement"](office_ui_fabric_react_bundle_["FocusZone"], { direction: office_ui_fabric_react_bundle_["FocusZoneDirection"].horizontal, isCircularNavigation: true },
                    this._renderGroup(this.state.featuredGroup),
                    this._renderGroup(this.state.alphabeticalGroup),
                    itemsNotFound && this._itemsNotFound))));
    };
    ToolboxSmall.prototype._renderGroup = function (group) {
        var _this = this;
        if (group.items.length === 0) {
            return false;
        }
        var items = group.items.map(function (item) {
            return external__react_["createElement"](ToolboxItemSmall, { key: item.id, item: item, onClick: _this._handleClickItem });
        });
        return (external__react_["createElement"](ToolboxGroupSmall_ToolboxGroupSmall, { key: group.groupId, groupName: group.title, hasHeader: true }, items));
    };
    Object.defineProperty(ToolboxSmall.prototype, "_itemsNotFound", {
        get: function () {
            return (external__react_["createElement"]("span", { className: ToolboxSmall_module_scss.noResults }, ToolboxSmallStrings_resx.ToolboxNoItemsFound));
        },
        enumerable: true,
        configurable: true
    });
    ToolboxSmall.prototype._handleClickItem = function (toolboxItemId) {
        this.props.controller.clickItem(toolboxItemId, {
            size: "Small" ,
            query: this.props.query
        });
    };
    ToolboxSmall.prototype._getState = function (items, query) {
        var featuredGroup = getFeaturedGroup(items);
        var alphabeticalGroup = getAlphabeticalGroup(items);
        return {
            alphabeticalGroup: alphabeticalGroup,
            featuredGroup: featuredGroup
        };
    };
    ToolboxSmall.prototype._alertItemsCount = function () {
        var itemsCount = this.state.featuredGroup.items.length + this.state.alphabeticalGroup.items.length;
        var localizedItemCount = lib["StringHelper"].formatWithLocalizedCountValue(ToolboxSmallStrings_resx.CanvasItems, ToolboxSmallStrings_resx.CanvasItemsInterval, itemsCount);
        this.props.a11yManager.alert(localizedItemCount);
    };
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxSmall.prototype, "_handleClickItem", null);
    return ToolboxSmall;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxSmall/ToolboxSmallSearchLayer.js






var ToolboxSmallSearchLayer_FILTER_DELAY_MS = 300;
var ToolboxSmallSearchLayer_ToolboxSmallSearchLayer = (function (_super) {
    tslib_es6["__extends"](ToolboxSmallSearchLayer, _super);
    function ToolboxSmallSearchLayer(props) {
        var _this = _super.call(this, props) || this;
        var query = toolboxSearch["a" /* ToolboxSearch */].getQuery(props.controller);
        _this.state =
            query
                ? {
                    query: query,
                    items: toolboxSearch["a" /* ToolboxSearch */].filterItems(props.items, query, 'Small')
                }
                : {
                    query: '',
                    items: props.items
                };
        _this._controller = Object(sp_lodash_subset_["assign"])(_this.props.controller, {
            filter: _this._filter,
            filterDebounce: _this._filterDebounce
        });
        _this._updateStateFromQueryDebounce = Object(sp_lodash_subset_["debounce"])(_this._updateItems, ToolboxSmallSearchLayer_FILTER_DELAY_MS);
        return _this;
    }
    ToolboxSmallSearchLayer.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.items !== this.props.items) {
            this.setState(function (state) { return ({
                items: toolboxSearch["a" /* ToolboxSearch */].filterItems(nextProps.items, state.query, 'Small')
            }); });
        }
    };
    ToolboxSmallSearchLayer.prototype.componentWillUnmount = function () {
        if (this.state.items.length > 0) {
            toolboxSearch["a" /* ToolboxSearch */].setQuery(this.props.controller, this.state.query);
        }
        else {
            toolboxSearch["a" /* ToolboxSearch */].setQuery(this.props.controller, '');
        }
    };
    ToolboxSmallSearchLayer.prototype.render = function () {
        return (external__react_["createElement"](ToolboxSmall_ToolboxSmall, tslib_es6["__assign"]({}, this.props, { ref: undefined, controller: this._controller, query: this.state.query, items: this.state.items })));
    };
    ToolboxSmallSearchLayer.prototype._filter = function (query) {
        this.setState({ query: query });
        this._updateItems();
    };
    ToolboxSmallSearchLayer.prototype._filterDebounce = function (query) {
        this.setState({ query: query });
        this._updateStateFromQueryDebounce();
    };
    ToolboxSmallSearchLayer.prototype._updateItems = function () {
        this.setState(function (state, props) {
            var items = toolboxSearch["a" /* ToolboxSearch */].filterItems(props.items, state.query, 'Small');
            return { items: items };
        });
    };
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxSmallSearchLayer.prototype, "_filter", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxSmallSearchLayer.prototype, "_filterDebounce", null);
    return ToolboxSmallSearchLayer;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxSmall/ToolboxSmallAnimationLayer.js


var ToolboxSmallAnimationLayer = Object(toolboxAnimation["a" /* animation */])(ToolboxSmallSearchLayer_ToolboxSmallSearchLayer, 3 );

// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolboxSmall/index.js


// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolbox/ToolboxSizeLayer.js








var ToolboxSizeLayer_ToolboxSizeLayer = (function (_super) {
    tslib_es6["__extends"](ToolboxSizeLayer, _super);
    function ToolboxSizeLayer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            size: "Small" 
        };
        _this._controller = Object(sp_lodash_subset_["assign"])(_this.props.controller, {
            expandToolbox: _this._expandToolbox,
            collapseToolbox: _this._collapseToolbox
        });
        return _this;
    }
    ToolboxSizeLayer.prototype.render = function () {
        switch (this.state.size) {
            case "Small" :
                return (external__react_["createElement"](ToolboxSmallAnimationLayer, { className: '', items: this.props.items, controller: this._controller, verticalPosition: this.props.verticalPosition, horizontalPosition: this.props.horizontalPosition, a11yManager: this.props.a11yManager, canvasElement: this.props.canvasElement, scrollableParent: this.props.scrollableParent }));
            case "Large" :
                return (external__react_["createElement"](ToolboxLargeAnimationLayer, { className: '', controller: this._controller, items: this.props.items, groups: this.props.groups, a11yManager: this.props.a11yManager }));
            default:
                throw new Error('Unknown toolbox mode');
        }
    };
    ToolboxSizeLayer.prototype._expandToolbox = function () {
        sp_telemetry_["_EngagementLogger"].logEventWithLogEntry(new sp_diagnostics_["_LogEntry"]('Toolbox', 'ExpandToolbox', sp_diagnostics_["_LogType"].Event, {
            itemCount: this.props.items.length.toString()
        }));
        this.setState({
            size: "Large" 
        });
    };
    ToolboxSizeLayer.prototype._collapseToolbox = function () {
        sp_telemetry_["_EngagementLogger"].logEventWithLogEntry(new sp_diagnostics_["_LogEntry"]('Toolbox', 'CollapseToolbox', sp_diagnostics_["_LogType"].Event, {
            itemCount: this.props.items.length.toString()
        }));
        this.setState({
            size: "Small" 
        });
    };
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxSizeLayer.prototype, "_expandToolbox", null);
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxSizeLayer.prototype, "_collapseToolbox", null);
    return ToolboxSizeLayer;
}(external__react_["PureComponent"]));


// CONCATENATED MODULE: C:/agent/1/_work/5/s/libraries/sp-canvas-toolbox/lib/toolbox/ToolboxItemsLayer.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxItemsLayer", function() { return ToolboxItemsLayer_ToolboxItemsLayer; });












var ToolboxItemsLayer_ToolboxItemsLayer = (function (_super) {
    tslib_es6["__extends"](ToolboxItemsLayer, _super);
    function ToolboxItemsLayer(props) {
        var _this = _super.call(this, props) || this;
        _this._controller = Object(sp_lodash_subset_["assign"])(_this.props.controller, {
            clickItem: _this.clickItem
        });
        _this.state = _this._getState(props.items);
        return _this;
    }
    ToolboxItemsLayer.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.items !== this.props.items) {
            this.setState(this._getState(nextProps.items));
        }
    };
    ToolboxItemsLayer.prototype.render = function () {
        var items = this.state.items;
        if (items === undefined) {
            return (external__react_["createElement"](toolboxLoading["a" /* ToolboxLoading */], { className: '', controller: this._controller, horizontalPosition: this.props.horizontalPosition, verticalPosition: this.props.verticalPosition, scrollableParent: this.props.scrollableParent, canvasElement: this.props.canvasElement }));
        }
        else if (Array.isArray(items)) {
            var groups = categorizeGroups(items);
            this._logWebPartSource(groups);
            return (external__react_["createElement"](ToolboxSizeLayer_ToolboxSizeLayer, { controller: this._controller, items: items, groups: groups, a11yManager: this.props.a11yManager, horizontalPosition: this.props.horizontalPosition, verticalPosition: this.props.verticalPosition, scrollableParent: this.props.scrollableParent, canvasElement: this.props.canvasElement }));
        }
        else {
            return (external__react_["createElement"](ToolboxErrorAnimationLayer, { className: '', controller: this._controller, message: items.message, a11yManager: this.props.a11yManager, horizontalPosition: this.props.horizontalPosition, verticalPosition: this.props.verticalPosition, scrollableParent: this.props.scrollableParent, canvasElement: this.props.canvasElement }));
        }
    };
    ToolboxItemsLayer.prototype._getState = function (itemShims) {
        var _this = this;
        if (Array.isArray(itemShims)) {
            var itemMaps = itemShims
                .map(toolboxModel["b" /* mapToolboxItem */])
                .concat(this.props.disableRTE ? [] : RTE_namespaceObject.TOOLBOX_ITEM_MAP)
                .filter(function (map) { return (_this.props.siteSupportsFullWidth || map.id !== 'FullWidthSectionToolboxItem'); });
            var items = itemMaps
                .map(function (map) { return map.item; })
                .sort(function (a, b) { return a.displayName.localeCompare(b.displayName, _this.props.cultureName); });
            return {
                items: items,
                mapToolboxItemIdToCanvasControl: new Map(itemMaps.map(function (map) { return [map.id, map.control]; })),
                mapToolboxItemIdToWebPartManifest: new Map(itemMaps.map(function (map) { return [map.id, map.manifest]; }))
            };
        }
        else {
            return {
                items: itemShims,
                mapToolboxItemIdToCanvasControl: undefined,
                mapToolboxItemIdToWebPartManifest: undefined
            };
        }
    };
    ToolboxItemsLayer.prototype.clickItem = function (toolboxItemId, info) {
        if (!this.state.mapToolboxItemIdToCanvasControl || !this.state.mapToolboxItemIdToWebPartManifest) {
            return;
        }
        var control = this.state.mapToolboxItemIdToCanvasControl.get(toolboxItemId);
        var manifest = this.state.mapToolboxItemIdToWebPartManifest.get(toolboxItemId);
        if (!control || !manifest) {
            return;
        }
        this.props.onClickItem(tslib_es6["__assign"]({}, control, { position: this.props.position }));
        if (control.controlType === toolboxModel["a" /* CanvasControlType */].WebPartZone) {
            sp_telemetry_["_EngagementLogger"].logEventWithLogEntry(new sp_diagnostics_["_LogEntry"]('Toolbox', 'AddWebPart', sp_diagnostics_["_LogType"].Event, tslib_es6["__assign"]({ manifestId: manifest.id }, this._convertClickItemInfo(info))));
        }
        else if (control.controlType === toolboxModel["a" /* CanvasControlType */].RTE) {
            sp_telemetry_["_EngagementLogger"].logEventWithLogEntry(new sp_diagnostics_["_LogEntry"]('Toolbox', 'AddRTE', sp_diagnostics_["_LogType"].Event, tslib_es6["__assign"]({ source: info.size }, this._convertClickItemInfo(info))));
        }
        else {
            sp_telemetry_["_EngagementLogger"].logEventWithLogEntry(new sp_diagnostics_["_LogEntry"]('Toolbox', 'AddZone', sp_diagnostics_["_LogType"].Event, tslib_es6["__assign"]({ layout: toolboxModel["a" /* CanvasControlType */][control.controlType] }, this._convertClickItemInfo(info))));
        }
        this.props.controller.closeToolbox(false );
    };
    ToolboxItemsLayer.prototype._convertClickItemInfo = function (info) {
        if (info.size === "Small" ) {
            return {
                source: info.size,
                view: '',
                queryLength: info.query.trim().length.toString()
            };
        }
        else {
            var query = info.view.type === "Search"  ? info.view.query : '';
            return {
                source: info.size,
                view: info.view.type,
                queryLength: query.trim().length.toString()
            };
        }
    };
    ToolboxItemsLayer.prototype._logWebPartSource = function (groups) {
        var _this = this;
        var map = this.state.mapToolboxItemIdToWebPartManifest;
        if (ToolboxItemsLayer._isWebPartSourceLogged || !map) {
            return;
        }
        var countMap = groups
            .filter(function (group) { return group.groupId !== Group_namespaceObject.FEATURED_GROUP[0]; })
            .reduce(function (accumulator, group) {
            var firstPartyCount = group.items
                .map(function (item) { return map.get(item.id); })
                .filter(function (manifest) { return manifest && manifest.isInternal; })
                .length;
            var thirdPartyCount = group.items.length - firstPartyCount;
            _this._accumulate(accumulator, _this._shortenGuid(group.groupId) + '_1', firstPartyCount);
            _this._accumulate(accumulator, _this._shortenGuid(group.groupId) + '_3', thirdPartyCount);
            _this._accumulate(accumulator, 'All_1', firstPartyCount);
            _this._accumulate(accumulator, 'All_3', thirdPartyCount);
            _this._accumulate(accumulator, 'All', group.items.length);
            return accumulator;
        }, new Map());
        var countLog = {};
        countMap.forEach(function (value, key) {
            countLog[key] = value.toString();
        });
        sp_telemetry_["_EngagementLogger"].logEventWithLogEntry(new sp_diagnostics_["_LogEntry"]('Toolbox', 'ItemsSource', sp_diagnostics_["_LogType"].Event, countLog));
        ToolboxItemsLayer._isWebPartSourceLogged = true;
    };
    ToolboxItemsLayer.prototype._shortenGuid = function (guid) {
        return guid.replace(/-/g, '');
    };
    ToolboxItemsLayer.prototype._accumulate = function (map, key, value) {
        var base = map.get(key) || 0;
        map.set(key, base + value);
    };
    ToolboxItemsLayer._isWebPartSourceLogged = false;
    tslib_es6["__decorate"]([
        office_ui_fabric_react_bundle_["autobind"]
    ], ToolboxItemsLayer.prototype, "clickItem", null);
    return ToolboxItemsLayer;
}(external__react_["PureComponent"]));



/***/ })

});
//# sourceMappingURL=1.toolbox_463091275c45fbffab50.js.map