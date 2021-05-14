function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass}function _createForOfIteratorHelperLoose(o,allowArrayLike){var it;if(typeof Symbol==="undefined"||o[Symbol.iterator]==null){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;return function(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}it=o[Symbol.iterator]();return it.next.bind(it)}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["default~pages-coupon-coupon-module~pages-restaurant-restaurant-module~pages-shuttle-shuttle-module~p~6c06a9eb"],{/***/"./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js":/*!**********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js ***!
  \**********************************************************************************/ /*! exports provided: AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent */ /***/function node_modulesNgxBootstrapAccordionFesm2015NgxBootstrapAccordionJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AccordionComponent",function(){return AccordionComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AccordionConfig",function(){return AccordionConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AccordionModule",function(){return AccordionModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AccordionPanelComponent",function(){return AccordionPanelComponent});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ngx-bootstrap/utils */"./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ngx-bootstrap/collapse */"./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Configuration service, provides default values for the AccordionComponent.
 */var AccordionConfig=function AccordionConfig(){/**
         * Whether the other panels should be closed when a panel is opened
         */this.closeOthers=false;/**
         * turn on/off animation
         */this.isAnimated=false};AccordionConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Displays collapsible content panels for presenting information in a limited amount of space.
 */var AccordionComponent=/*#__PURE__*/function(){/**
     * @param {?} config
     */function AccordionComponent(config){/**
         * turn on/off animation
         */this.isAnimated=false;this.groups=[];Object.assign(this,config)}/**
     * @param {?} openGroup
     * @return {?}
     */var _proto=AccordionComponent.prototype;_proto.closeOtherPanels=function closeOtherPanels(openGroup){if(!this.closeOthers){return}this.groups.forEach(/**
         * @param {?} group
         * @return {?}
         */function(group){if(group!==openGroup){group.isOpen=false}})}/**
     * @param {?} group
     * @return {?}
     */;_proto.addGroup=function addGroup(group){group.isAnimated=this.isAnimated;this.groups.push(group)}/**
     * @param {?} group
     * @return {?}
     */;_proto.removeGroup=function removeGroup(group){/** @type {?} */var index=this.groups.indexOf(group);if(index!==-1){this.groups.splice(index,1)}};return AccordionComponent}();AccordionComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"accordion",template:"<ng-content></ng-content>",host:{"[attr.aria-multiselectable]":"closeOthers",role:"tablist",class:"panel-group",style:"display: block"}}]}];/** @nocollapse */AccordionComponent.ctorParameters=function(){return[{type:AccordionConfig}]};AccordionComponent.propDecorators={isAnimated:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],closeOthers:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */var AccordionPanelComponent=/*#__PURE__*/function(){/**
     * @param {?} accordion
     */function AccordionPanelComponent(accordion){/**
         * turn on/off animation
         */this.isAnimated=false;/**
         * Emits when the opened state changes
         */this.isOpenChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this._isOpen=false;this.accordion=accordion}// Questionable, maybe .panel-open should be on child div.panel element?
/**
     * Is accordion group open or closed. This property supports two-way binding
     * @return {?}
     */var _proto2=AccordionPanelComponent.prototype;/**
     * @return {?}
     */_proto2.ngOnInit=function ngOnInit(){this.panelClass=this.panelClass||"panel-default";this.accordion.addGroup(this)}/**
     * @return {?}
     */;_proto2.ngOnDestroy=function ngOnDestroy(){this.accordion.removeGroup(this)}/**
     * @return {?}
     */;_proto2.toggleOpen=function toggleOpen(){if(!this.isDisabled){this.isOpen=!this.isOpen}};_createClass(AccordionPanelComponent,[{key:"isOpen",get:function get(){return this._isOpen}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){var _this=this;if(value!==this.isOpen){if(value){this.accordion.closeOtherPanels(this)}this._isOpen=value;Promise.resolve(null).then(/**
             * @return {?}
             */function(){_this.isOpenChange.emit(value)}).catch(/**
             * @param {?} error
             * @return {?}
             */function(error){/* tslint:disable: no-console */console.log(error)})}}/**
     * @return {?}
     */},{key:"isBs3",get:function get(){return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()}}]);return AccordionPanelComponent}();AccordionPanelComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"accordion-group, accordion-panel",template:"<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div\n    class=\"panel-heading card-header\"\n    role=\"tab\"\n    (click)=\"toggleOpen()\"\n    [ngClass]=\"isDisabled ? 'panel-disabled' : 'panel-enabled'\"\n  >\n    <div class=\"panel-title\">\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{ 'text-muted': isDisabled }\" type=\"button\">\n          {{ heading }}\n        </button>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\" [isAnimated]=\"isAnimated\">\n    <div class=\"panel-body card-block card-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",host:{class:"panel",style:"display: block"},styles:[":host .card-header.panel-enabled{cursor:pointer}:host .card-header.panel-disabled .btn.btn-link{cursor:default;text-decoration:none}"]}]}];/** @nocollapse */AccordionPanelComponent.ctorParameters=function(){return[{type:AccordionComponent,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[AccordionComponent]}]}]};AccordionPanelComponent.propDecorators={heading:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],panelClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isOpenChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],isOpen:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["class.panel-open"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var AccordionModule=/*#__PURE__*/function(){function AccordionModule(){}/**
     * @return {?}
     */AccordionModule.forRoot=function forRoot(){return{ngModule:AccordionModule,providers:[AccordionConfig]}};return AccordionModule}();AccordionModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"]],declarations:[AccordionComponent,AccordionPanelComponent],exports:[AccordionComponent,AccordionPanelComponent]}]}];//# sourceMappingURL=ngx-bootstrap-accordion.js.map
/***/},/***/"./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js":/*!**************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js ***!
  \**************************************************************************/ /*! exports provided: AlertComponent, AlertConfig, AlertModule */ /***/function node_modulesNgxBootstrapAlertFesm2015NgxBootstrapAlertJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AlertComponent",function(){return AlertComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AlertConfig",function(){return AlertConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AlertModule",function(){return AlertModule});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ngx-bootstrap/utils */"./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var AlertConfig=function AlertConfig(){/**
         * default alert type
         */this.type="warning";/**
         * is alerts are dismissible by default
         */this.dismissible=false;/**
         * default time before alert will dismiss
         */this.dismissOnTimeout=undefined};AlertConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var AlertComponent=/*#__PURE__*/function(){/**
     * @param {?} _config
     * @param {?} changeDetection
     */function AlertComponent(_config,changeDetection){var _this2=this;this.changeDetection=changeDetection;/**
         * Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */this.type="warning";/**
         * If set, displays an inline "Close" button
         */this.dismissible=false;/**
         * Is alert visible
         */this.isOpen=true;/**
         * This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */this.onClose=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];/**
         * This event fires when alert closed, $event is an instance of Alert component
         */this.onClosed=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];this.classes="";this.dismissibleChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];Object.assign(this,_config);this.dismissibleChange.subscribe(/**
         * @param {?} dismissible
         * @return {?}
         */function(dismissible){_this2.classes=_this2.dismissible?"alert-dismissible":"";_this2.changeDetection.markForCheck()})}/**
     * @return {?}
     */var _proto3=AlertComponent.prototype;_proto3.ngOnInit=function ngOnInit(){var _this3=this;if(this.dismissOnTimeout){// if dismissOnTimeout used as attr without binding, it will be a string
setTimeout(/**
             * @return {?}
             */function(){return _this3.close()},parseInt(/** @type {?} */this.dismissOnTimeout,10))}}// todo: animation ` If the .fade and .in classes are present on the element,
// the alert will fade out before it is removed`
/**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */;_proto3.close=function close(){if(!this.isOpen){return}this.onClose.emit(this);this.isOpen=false;this.changeDetection.markForCheck();this.onClosed.emit(this)};return AlertComponent}();AlertComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],args:[{selector:"alert,bs-alert",template:"<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush}]}];/** @nocollapse */AlertComponent.ctorParameters=function(){return[{type:AlertConfig},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]}]};AlertComponent.propDecorators={type:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],dismissible:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],dismissOnTimeout:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],isOpen:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],onClose:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]}],onClosed:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]}]};Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["OnChange"])(),Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type",Object)],AlertComponent.prototype,"dismissible",void 0);/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var AlertModule=/*#__PURE__*/function(){function AlertModule(){}/**
     * @return {?}
     */AlertModule.forRoot=function forRoot(){return{ngModule:AlertModule,providers:[AlertConfig]}};return AlertModule}();AlertModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],declarations:[AlertComponent],exports:[AlertComponent],entryComponents:[AlertComponent]}]}];//# sourceMappingURL=ngx-bootstrap-alert.js.map
/***/},/***/"./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js":/*!******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js ***!
  \******************************************************************************/ /*! exports provided: ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, ɵa, ɵb, ɵc */ /***/function node_modulesNgxBootstrapButtonsFesm2015NgxBootstrapButtonsJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ButtonCheckboxDirective",function(){return ButtonCheckboxDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ButtonRadioDirective",function(){return ButtonRadioDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ButtonRadioGroupDirective",function(){return ButtonRadioGroupDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ButtonsModule",function(){return ButtonsModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275a",function(){return CHECKBOX_CONTROL_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275b",function(){return RADIO_CONTROL_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275c",function(){return RADIO_CONTROL_VALUE_ACCESSOR$1});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_forms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // TODO: config: activeClass - Class to apply to the checked buttons
/** @type {?} */var CHECKBOX_CONTROL_VALUE_ACCESSOR={provide:_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],/* tslint:disable-next-line: no-use-before-declare */useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return ButtonCheckboxDirective}),multi:true};/**
 * Add checkbox functionality to any element
 */var ButtonCheckboxDirective=/*#__PURE__*/function(){function ButtonCheckboxDirective(){/**
         * Truthy value, will be set to ngModel
         */this.btnCheckboxTrue=true;/**
         * Falsy value, will be set to ngModel
         */this.btnCheckboxFalse=false;this.state=false;this.onChange=Function.prototype;this.onTouched=Function.prototype}// view -> model
/**
     * @return {?}
     */var _proto4=ButtonCheckboxDirective.prototype;_proto4.onClick=function onClick(){if(this.isDisabled){return}this.toggle(!this.state);this.onChange(this.value)}/**
     * @return {?}
     */;_proto4.ngOnInit=function ngOnInit(){this.toggle(this.trueValue===this.value)}/**
     * @protected
     * @return {?}
     */;/**
     * @param {?} state
     * @return {?}
     */_proto4.toggle=function toggle(state){this.state=state;this.value=this.state?this.trueValue:this.falseValue}// ControlValueAccessor
// model -> view
/**
     * @param {?} value
     * @return {?}
     */;_proto4.writeValue=function writeValue(value){this.state=this.trueValue===value;this.value=value?this.trueValue:this.falseValue}/**
     * @param {?} isDisabled
     * @return {?}
     */;_proto4.setDisabledState=function setDisabledState(isDisabled){this.isDisabled=isDisabled}/**
     * @param {?} fn
     * @return {?}
     */;_proto4.registerOnChange=function registerOnChange(fn){this.onChange=fn}/**
     * @param {?} fn
     * @return {?}
     */;_proto4.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn};_createClass(ButtonCheckboxDirective,[{key:"trueValue",get:function get(){return typeof this.btnCheckboxTrue!=="undefined"?this.btnCheckboxTrue:true}/**
     * @protected
     * @return {?}
     */},{key:"falseValue",get:function get(){return typeof this.btnCheckboxFalse!=="undefined"?this.btnCheckboxFalse:false}}]);return ButtonCheckboxDirective}();ButtonCheckboxDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[btnCheckbox]",providers:[CHECKBOX_CONTROL_VALUE_ACCESSOR]}]}];ButtonCheckboxDirective.propDecorators={btnCheckboxTrue:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],btnCheckboxFalse:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],state:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["class.active"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["attr.aria-pressed"]}],onClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["click"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var RADIO_CONTROL_VALUE_ACCESSOR={provide:_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],/* tslint:disable-next-line: no-use-before-declare */useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return ButtonRadioGroupDirective}),multi:true};/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */var ButtonRadioGroupDirective=/*#__PURE__*/function(){/**
     * @param {?} cdr
     */function ButtonRadioGroupDirective(cdr){this.cdr=cdr;this.onChange=Function.prototype;this.onTouched=Function.prototype}/**
     * @return {?}
     */var _proto5=ButtonRadioGroupDirective.prototype;/**
     * @param {?} value
     * @return {?}
     */_proto5.writeValue=function writeValue(value){this._value=value;this.cdr.markForCheck()}/**
     * @param {?} fn
     * @return {?}
     */;_proto5.registerOnChange=function registerOnChange(fn){this.onChange=fn}/**
     * @param {?} fn
     * @return {?}
     */;_proto5.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn};_createClass(ButtonRadioGroupDirective,[{key:"value",get:function get(){return this._value}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._value=value}}]);return ButtonRadioGroupDirective}();ButtonRadioGroupDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[btnRadioGroup]",providers:[RADIO_CONTROL_VALUE_ACCESSOR]}]}];/** @nocollapse */ButtonRadioGroupDirective.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var RADIO_CONTROL_VALUE_ACCESSOR$1={provide:_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],/* tslint:disable-next-line: no-use-before-declare */useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return ButtonRadioDirective}),multi:true};/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */var ButtonRadioDirective=/*#__PURE__*/function(){/**
     * @param {?} el
     * @param {?} cdr
     * @param {?} group
     * @param {?} renderer
     */function ButtonRadioDirective(el,cdr,group,renderer){this.el=el;this.cdr=cdr;this.group=group;this.renderer=renderer;this.onChange=Function.prototype;this.onTouched=Function.prototype}/**
     * Current value of radio component or group
     * @return {?}
     */var _proto6=ButtonRadioDirective.prototype;/**
     * @return {?}
     */_proto6.onClick=function onClick(){if(this.el.nativeElement.attributes.disabled||!this.uncheckable&&this.btnRadio===this.value){return}this.value=this.uncheckable&&this.btnRadio===this.value?undefined:this.btnRadio;this._onChange(this.value)}/**
     * @return {?}
     */;_proto6.ngOnInit=function ngOnInit(){this.uncheckable=typeof this.uncheckable!=="undefined"}/**
     * @return {?}
     */;_proto6.onBlur=function onBlur(){this.onTouched()}/**
     * @param {?} value
     * @return {?}
     */;_proto6._onChange=function _onChange(value){if(this.group){this.group.onTouched();this.group.onChange(value);return}this.onTouched();this.onChange(value)}// ControlValueAccessor
// model -> view
/**
     * @param {?} value
     * @return {?}
     */;_proto6.writeValue=function writeValue(value){this.value=value;this.cdr.markForCheck()}/**
     * @param {?} fn
     * @return {?}
     */;_proto6.registerOnChange=function registerOnChange(fn){this.onChange=fn}/**
     * @param {?} fn
     * @return {?}
     */;_proto6.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * @param {?} disabled
     * @return {?}
     */;_proto6.setDisabledState=function setDisabledState(disabled){if(disabled){this.renderer.setAttribute(this.el.nativeElement,"disabled","disabled");return}this.renderer.removeAttribute(this.el.nativeElement,"disabled")};_createClass(ButtonRadioDirective,[{key:"value",get:function get(){return this.group?this.group.value:this._value}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){if(this.group){this.group.value=value;return}this._value=value}/**
     * If `true` — radio button is disabled
     * @return {?}
     */},{key:"disabled",get:function get(){return this._disabled}/**
     * @param {?} disabled
     * @return {?}
     */,set:function set(disabled){this._disabled=disabled;this.setDisabledState(disabled)}/**
     * @return {?}
     */},{key:"isActive",get:function get(){return this.btnRadio===this.value}}]);return ButtonRadioDirective}();ButtonRadioDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[btnRadio]",providers:[RADIO_CONTROL_VALUE_ACCESSOR$1]}]}];/** @nocollapse */ButtonRadioDirective.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]},{type:ButtonRadioGroupDirective,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]}]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]}]};ButtonRadioDirective.propDecorators={btnRadio:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],uncheckable:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],value:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isActive:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["class.active"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["attr.aria-pressed"]}],onClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["click"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var ButtonsModule=/*#__PURE__*/function(){function ButtonsModule(){}/**
     * @return {?}
     */ButtonsModule.forRoot=function forRoot(){return{ngModule:ButtonsModule,providers:[]}};return ButtonsModule}();ButtonsModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{declarations:[ButtonCheckboxDirective,ButtonRadioDirective,ButtonRadioGroupDirective],exports:[ButtonCheckboxDirective,ButtonRadioDirective,ButtonRadioGroupDirective]}]}];//# sourceMappingURL=ngx-bootstrap-buttons.js.map
/***/},/***/"./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js":/*!********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js ***!
  \********************************************************************************/ /*! exports provided: CarouselComponent, CarouselConfig, CarouselModule, SlideComponent */ /***/function node_modulesNgxBootstrapCarouselFesm2015NgxBootstrapCarouselJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CarouselComponent",function(){return CarouselComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CarouselConfig",function(){return CarouselConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CarouselModule",function(){return CarouselModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SlideComponent",function(){return SlideComponent});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ngx-bootstrap/utils */"./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var CarouselConfig=function CarouselConfig(){/* Default interval of auto changing of slides */this.interval=5000;/* Is loop of auto changing of slides can be paused */this.noPause=false;/* Is slides can wrap from the last to the first slide */this.noWrap=false;/* Show carousel-indicators */this.showIndicators=true;/* Slides can be paused on focus */this.pauseOnFocus=false;/* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */this.indicatorsByChunk=false;/* If value more then 1 — carousel works in multilist mode */this.itemsPerSlide=1;/* If `true` — carousel shifts by one element. By default carousel shifts by number
            of visible elements (itemsPerSlide field) */this.singleSlideOffset=false};CarouselConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @template T
 * @param {?} array The source array to search in
 * @param {?} predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * @return {?}
 */function findLastIndex(array,predicate){/** @type {?} */var l=array.length;while(l--){if(predicate(array[l],l,array)){return l}}return-1}/**
 * @template T
 * @param {?} array
 * @param {?} size
 * @return {?}
 */function chunkByNumber(array,size){/** @type {?} */var out=[];/** @type {?} */var n=Math.ceil(array.length/size);/** @type {?} */var i=0;while(i<n){/** @type {?} */var chunk=array.splice(0,i===n-1&&size<array.length?array.length:size);out.push(chunk);i++}return out}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @enum {number} */var Direction={UNKNOWN:0,NEXT:1,PREV:2};Direction[Direction.UNKNOWN]="UNKNOWN";Direction[Direction.NEXT]="NEXT";Direction[Direction.PREV]="PREV";/**
 * Base element to create carousel
 */var CarouselComponent=/*#__PURE__*/function(){/**
     * @param {?} config
     * @param {?} ngZone
     */function CarouselComponent(config,ngZone){this.ngZone=ngZone;/* If `true` - carousel indicators indicate slides chunks
             works ONLY if singleSlideOffset = FALSE */this.indicatorsByChunk=false;/* If value more then 1 — carousel works in multilist mode */this.itemsPerSlide=1;/* If `true` — carousel shifts by one element. By default carousel shifts by number
             of visible elements (itemsPerSlide field) */this.singleSlideOffset=false;/**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */this.activeSlideChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);/**
         * Will be emitted when active slides has been changed in multilist mode
         */this.slideRangeChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/* Index to start display slides from it */this.startFromIndex=0;this._slides=new ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["LinkedList"];this._currentVisibleSlidesIndex=0;this.destroyed=false;this.getActive=/**
         * @param {?} slide
         * @return {?}
         */function(slide){return slide.active};this.makeSlidesConsistent=/**
         * @param {?} slides
         * @return {?}
         */function(slides){slides.forEach(/**
             * @param {?} slide
             * @param {?} index
             * @return {?}
             */function(slide,index){return slide.item.order=index})};Object.assign(this,config)}/**
     * Index of currently displayed slide(started for 0)
     * @param {?} index
     * @return {?}
     */var _proto7=CarouselComponent.prototype;/**
     * @return {?}
     */_proto7.ngAfterViewInit=function ngAfterViewInit(){var _this4=this;setTimeout(/**
         * @return {?}
         */function(){if(_this4.singleSlideOffset){_this4.indicatorsByChunk=false}if(_this4.multilist){_this4._chunkedSlides=chunkByNumber(_this4.mapSlidesAndIndexes(),_this4.itemsPerSlide);_this4.selectInitialSlides()}},0)}/**
     * @return {?}
     */;_proto7.ngOnDestroy=function ngOnDestroy(){this.destroyed=true}/**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */;_proto7.addSlide=function addSlide(slide){this._slides.add(slide);if(this.multilist&&this._slides.length<=this.itemsPerSlide){slide.active=true}if(!this.multilist&&this._slides.length===1){this._currentActiveSlide=undefined;this.activeSlide=0;this.play()}if(this.multilist&&this._slides.length>this.itemsPerSlide){this.play()}}/**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */;_proto7.removeSlide=function removeSlide(slide){var _this5=this;/** @type {?} */var remIndex=this._slides.indexOf(slide);if(this._currentActiveSlide===remIndex){// removing of active slide
/** @type {?} */var nextSlideIndex=void 0;if(this._slides.length>1){// if this slide last - will roll to first slide, if noWrap flag is
// FALSE or to previous, if noWrap is TRUE in case, if this slide in
// middle of collection, index of next slide is same to removed
nextSlideIndex=!this.isLast(remIndex)?remIndex:this.noWrap?remIndex-1:0}this._slides.remove(remIndex);// prevents exception with changing some value after checking
setTimeout(/**
             * @return {?}
             */function(){_this5._select(nextSlideIndex)},0)}else{this._slides.remove(remIndex);/** @type {?} */var currentSlideIndex=this.getCurrentSlideIndex();setTimeout(/**
             * @return {?}
             */function(){// after removing, need to actualize index of current active slide
_this5._currentActiveSlide=currentSlideIndex;_this5.activeSlideChange.emit(_this5._currentActiveSlide)},0)}}/**
     * @param {?=} force
     * @return {?}
     */;_proto7.nextSlideFromInterval=function nextSlideFromInterval(force){if(force===void 0){force=false}this.move(Direction.NEXT,force)}/**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */;_proto7.nextSlide=function nextSlide(force){if(force===void 0){force=false}if(this.isPlaying){this.restartTimer()}this.move(Direction.NEXT,force)}/**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */;_proto7.previousSlide=function previousSlide(force){if(force===void 0){force=false}if(this.isPlaying){this.restartTimer()}this.move(Direction.PREV,force)}/**
     * @return {?}
     */;_proto7.getFirstVisibleIndex=function getFirstVisibleIndex(){return this.slides.findIndex(this.getActive)}/**
     * @return {?}
     */;_proto7.getLastVisibleIndex=function getLastVisibleIndex(){return findLastIndex(this.slides,this.getActive)}/**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */;_proto7.move=function move(direction,force){if(force===void 0){force=false}/** @type {?} */var firstVisibleIndex=this.getFirstVisibleIndex();/** @type {?} */var lastVisibleIndex=this.getLastVisibleIndex();if(this.noWrap){if(direction===Direction.NEXT&&this.isLast(lastVisibleIndex)||direction===Direction.PREV&&firstVisibleIndex===0){return}}if(!this.multilist){this.activeSlide=this.findNextSlideIndex(direction,force)}else{this.moveMultilist(direction)}}/**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */;_proto7.keydownPress=function keydownPress(event){// tslint:disable-next-line:deprecation
if(event.keyCode===13||event.key==="Enter"||event.keyCode===32||event.key==="Space"){this.nextSlide();event.preventDefault();return}// tslint:disable-next-line:deprecation
if(event.keyCode===37||event.key==="LeftArrow"){this.previousSlide();return}// tslint:disable-next-line:deprecation
if(event.keyCode===39||event.key==="RightArrow"){this.nextSlide();return}}/**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */;_proto7.onMouseLeave=function onMouseLeave(){if(!this.pauseOnFocus){this.play()}}/**
     * Play on mouse up
     * \@internal
     * @return {?}
     */;_proto7.onMouseUp=function onMouseUp(){if(!this.pauseOnFocus){this.play()}}/**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */;_proto7.pauseFocusIn=function pauseFocusIn(){if(this.pauseOnFocus){this.isPlaying=false;this.resetTimer()}}/**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */;_proto7.pauseFocusOut=function pauseFocusOut(){this.play()}/**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */;_proto7.selectSlide=function selectSlide(index){if(this.isPlaying){this.restartTimer()}if(!this.multilist){this.activeSlide=this.indicatorsByChunk?index*this.itemsPerSlide:index}else{this.selectSlideRange(this.indicatorsByChunk?index*this.itemsPerSlide:index)}}/**
     * Starts a auto changing of slides
     * @return {?}
     */;_proto7.play=function play(){if(!this.isPlaying){this.isPlaying=true;this.restartTimer()}}/**
     * Stops a auto changing of slides
     * @return {?}
     */;_proto7.pause=function pause(){if(!this.noPause){this.isPlaying=false;this.resetTimer()}}/**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */;_proto7.getCurrentSlideIndex=function getCurrentSlideIndex(){return this._slides.findIndex(this.getActive)}/**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */;_proto7.isLast=function isLast(index){return index+1>=this._slides.length}/**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */;_proto7.isFirst=function isFirst(index){return index===0}/**
     * @return {?}
     */;_proto7.indicatorsSlides=function indicatorsSlides(){var _this6=this;return this.slides.filter(/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */function(slide,index){return!_this6.indicatorsByChunk||index%_this6.itemsPerSlide===0})}/**
     * @private
     * @return {?}
     */;_proto7.selectInitialSlides=function selectInitialSlides(){/** @type {?} */var startIndex=this.startFromIndex<=this._slides.length?this.startFromIndex:0;this.hideSlides();if(this.singleSlideOffset){this._slidesWithIndexes=this.mapSlidesAndIndexes();if(this._slides.length-startIndex<this.itemsPerSlide){/** @type {?} */var slidesToAppend=this._slidesWithIndexes.slice(0,startIndex);this._slidesWithIndexes=[].concat(this._slidesWithIndexes,slidesToAppend).slice(slidesToAppend.length).slice(0,this.itemsPerSlide)}else{this._slidesWithIndexes=this._slidesWithIndexes.slice(startIndex,startIndex+this.itemsPerSlide)}this._slidesWithIndexes.forEach(/**
             * @param {?} slide
             * @return {?}
             */function(slide){return slide.item.active=true});this.makeSlidesConsistent(this._slidesWithIndexes)}else{this.selectRangeByNestedIndex(startIndex)}this.slideRangeChange.emit(this.getVisibleIndexes())}/**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */;_proto7.findNextSlideIndex=function findNextSlideIndex(direction,force){/** @type {?} */var nextSlideIndex=0;if(!force&&this.isLast(this.activeSlide)&&direction!==Direction.PREV&&this.noWrap){return undefined}switch(direction){case Direction.NEXT:// if this is last slide, not force, looping is disabled
// and need to going forward - select current slide, as a next
nextSlideIndex=!this.isLast(this._currentActiveSlide)?this._currentActiveSlide+1:!force&&this.noWrap?this._currentActiveSlide:0;break;case Direction.PREV:// if this is first slide, not force, looping is disabled
// and need to going backward - select current slide, as a next
nextSlideIndex=this._currentActiveSlide>0?this._currentActiveSlide-1:!force&&this.noWrap?this._currentActiveSlide:this._slides.length-1;break;default:throw new Error("Unknown direction");}return nextSlideIndex}/**
     * @private
     * @return {?}
     */;_proto7.mapSlidesAndIndexes=function mapSlidesAndIndexes(){return this.slides.slice().map(/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */function(slide,index){return{index:index,item:slide}})}/**
     * @private
     * @param {?} index
     * @return {?}
     */;_proto7.selectSlideRange=function selectSlideRange(index){if(this.isIndexInRange(index)){return}this.hideSlides();if(!this.singleSlideOffset){this.selectRangeByNestedIndex(index)}else{/** @type {?} */var startIndex=this.isIndexOnTheEdges(index)?index:index-this.itemsPerSlide+1;/** @type {?} */var endIndex=this.isIndexOnTheEdges(index)?index+this.itemsPerSlide:index+1;this._slidesWithIndexes=this.mapSlidesAndIndexes().slice(startIndex,endIndex);this.makeSlidesConsistent(this._slidesWithIndexes);this._slidesWithIndexes.forEach(/**
             * @param {?} slide
             * @return {?}
             */function(slide){return slide.item.active=true})}this.slideRangeChange.emit(this.getVisibleIndexes())}/**
     * @private
     * @param {?} index
     * @return {?}
     */;_proto7.selectRangeByNestedIndex=function selectRangeByNestedIndex(index){/** @type {?} */var selectedRange=this._chunkedSlides.map(/**
         * @param {?} slidesList
         * @param {?} i
         * @return {?}
         */function(slidesList,i){return{index:i,list:slidesList}}).find(/**
         * @param {?} slidesList
         * @return {?}
         */function(slidesList){return slidesList.list.find(/**
             * @param {?} slide
             * @return {?}
             */function(slide){return slide.index===index})!==undefined});this._currentVisibleSlidesIndex=selectedRange.index;this._chunkedSlides[selectedRange.index].forEach(/**
         * @param {?} slide
         * @return {?}
         */function(slide){slide.item.active=true})}/**
     * @private
     * @param {?} index
     * @return {?}
     */;_proto7.isIndexOnTheEdges=function isIndexOnTheEdges(index){return index+1-this.itemsPerSlide<=0||index+this.itemsPerSlide<=this._slides.length}/**
     * @private
     * @param {?} index
     * @return {?}
     */;_proto7.isIndexInRange=function isIndexInRange(index){if(this.singleSlideOffset){/** @type {?} */var visibleIndexes=this._slidesWithIndexes.map(/**
             * @param {?} slide
             * @return {?}
             */function(slide){return slide.index});return visibleIndexes.indexOf(index)>=0}return index<=this.getLastVisibleIndex()&&index>=this.getFirstVisibleIndex()}/**
     * @private
     * @return {?}
     */;_proto7.hideSlides=function hideSlides(){this.slides.forEach(/**
         * @param {?} slide
         * @return {?}
         */function(slide){return slide.active=false})}/**
     * @private
     * @return {?}
     */;_proto7.isVisibleSlideListLast=function isVisibleSlideListLast(){return this._currentVisibleSlidesIndex===this._chunkedSlides.length-1}/**
     * @private
     * @return {?}
     */;_proto7.isVisibleSlideListFirst=function isVisibleSlideListFirst(){return this._currentVisibleSlidesIndex===0}/**
     * @private
     * @param {?} direction
     * @return {?}
     */;_proto7.moveSliderByOneItem=function moveSliderByOneItem(direction){/** @type {?} */var firstVisibleIndex;/** @type {?} */var lastVisibleIndex;/** @type {?} */var indexToHide;/** @type {?} */var indexToShow;if(this.noWrap){firstVisibleIndex=this.getFirstVisibleIndex();lastVisibleIndex=this.getLastVisibleIndex();indexToHide=direction===Direction.NEXT?firstVisibleIndex:lastVisibleIndex;indexToShow=direction!==Direction.NEXT?firstVisibleIndex-1:!this.isLast(lastVisibleIndex)?lastVisibleIndex+1:0;this._slides.get(indexToHide).active=false;this._slides.get(indexToShow).active=true;/** @type {?} */var slidesToReorder=this.mapSlidesAndIndexes().filter(/**
             * @param {?} slide
             * @return {?}
             */function(slide){return slide.item.active});this.makeSlidesConsistent(slidesToReorder);this.slideRangeChange.emit(this.getVisibleIndexes())}else{/** @type {?} */var displayedIndex;firstVisibleIndex=this._slidesWithIndexes[0].index;lastVisibleIndex=this._slidesWithIndexes[this._slidesWithIndexes.length-1].index;if(direction===Direction.NEXT){this._slidesWithIndexes.shift();displayedIndex=this.isLast(lastVisibleIndex)?0:lastVisibleIndex+1;this._slidesWithIndexes.push({index:displayedIndex,item:this._slides.get(displayedIndex)})}else{this._slidesWithIndexes.pop();displayedIndex=this.isFirst(firstVisibleIndex)?this._slides.length-1:firstVisibleIndex-1;this._slidesWithIndexes=[{index:displayedIndex,item:this._slides.get(displayedIndex)}].concat(this._slidesWithIndexes)}this.hideSlides();this._slidesWithIndexes.forEach(/**
             * @param {?} slide
             * @return {?}
             */function(slide){return slide.item.active=true});this.makeSlidesConsistent(this._slidesWithIndexes);this.slideRangeChange.emit(this._slidesWithIndexes.map(/**
             * @param {?} slide
             * @return {?}
             */function(slide){return slide.index}))}}/**
     * @private
     * @param {?} direction
     * @return {?}
     */;_proto7.moveMultilist=function moveMultilist(direction){if(this.singleSlideOffset){this.moveSliderByOneItem(direction)}else{this.hideSlides();if(this.noWrap){this._currentVisibleSlidesIndex=direction===Direction.NEXT?this._currentVisibleSlidesIndex+1:this._currentVisibleSlidesIndex-1}else{if(direction===Direction.NEXT){this._currentVisibleSlidesIndex=this.isVisibleSlideListLast()?0:this._currentVisibleSlidesIndex+1}else{this._currentVisibleSlidesIndex=this.isVisibleSlideListFirst()?this._chunkedSlides.length-1:this._currentVisibleSlidesIndex-1}}this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(/**
             * @param {?} slide
             * @return {?}
             */function(slide){return slide.item.active=true});this.slideRangeChange.emit(this.getVisibleIndexes())}}/**
     * @private
     * @return {?}
     */;_proto7.getVisibleIndexes=function getVisibleIndexes(){if(!this.singleSlideOffset){return this._chunkedSlides[this._currentVisibleSlidesIndex].map(/**
             * @param {?} slide
             * @return {?}
             */function(slide){return slide.index})}else{return this._slidesWithIndexes.map(/**
             * @param {?} slide
             * @return {?}
             */function(slide){return slide.index})}}/**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */;_proto7._select=function _select(index){if(isNaN(index)){this.pause();return}if(!this.multilist){/** @type {?} */var currentSlide=this._slides.get(this._currentActiveSlide);if(currentSlide){currentSlide.active=false}}/** @type {?} */var nextSlide=this._slides.get(index);if(nextSlide){this._currentActiveSlide=index;nextSlide.active=true;this.activeSlide=index;this.activeSlideChange.emit(index)}}/**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */;_proto7.restartTimer=function restartTimer(){var _this7=this;this.resetTimer();/** @type {?} */var interval=+this.interval;if(!isNaN(interval)&&interval>0){this.currentInterval=this.ngZone.runOutsideAngular(/**
             * @return {?}
             */function(){return setInterval(/**
                 * @return {?}
                 */function(){/** @type {?} */var nInterval=+_this7.interval;_this7.ngZone.run(/**
                     * @return {?}
                     */function(){if(_this7.isPlaying&&!isNaN(_this7.interval)&&nInterval>0&&_this7.slides.length){_this7.nextSlideFromInterval()}else{_this7.pause()}})},interval)})}}/**
     * @return {?}
     */;/**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */_proto7.resetTimer=function resetTimer(){if(this.currentInterval){clearInterval(this.currentInterval);this.currentInterval=void 0}};_createClass(CarouselComponent,[{key:"activeSlide",set:function set(index){if(this.multilist){return}if(this._slides.length&&index!==this._currentActiveSlide){this._select(index)}}/**
     * @return {?}
     */,get:function get(){return this._currentActiveSlide}/**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle
     * automatically.
     * @return {?}
     */},{key:"interval",get:function get(){return this._interval}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._interval=value;this.restartTimer()}/**
     * @return {?}
     */},{key:"slides",get:function get(){return this._slides.toArray()}/**
     * @return {?}
     */},{key:"isBs4",get:function get(){return!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()}},{key:"multilist",get:function get(){return this.itemsPerSlide>1}}]);return CarouselComponent}();CarouselComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"carousel",template:"<div (mouseenter)=\"pause()\" (mouseleave)=\"onMouseLeave()\" (mouseup)=\"onMouseUp()\" class=\"carousel slide\" (keydown)=\"keydownPress($event)\" (focusin)=\"pauseFocusIn()\" (focusout)=\"pauseFocusOut()\" tabindex=\"0\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slidez of indicatorsSlides(); let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\"><ng-content></ng-content></div>\n  <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"}]}];/** @nocollapse */CarouselComponent.ctorParameters=function(){return[{type:CarouselConfig},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]}]};CarouselComponent.propDecorators={noWrap:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],noPause:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],showIndicators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],pauseOnFocus:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],indicatorsByChunk:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],itemsPerSlide:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],singleSlideOffset:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],activeSlideChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],slideRangeChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],activeSlide:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],startFromIndex:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],interval:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var SlideComponent=/*#__PURE__*/function(){/**
     * @param {?} carousel
     */function SlideComponent(carousel){this.itemWidth="100%";this.order=0;/**
         * Wraps element by appropriate CSS classes
         */this.addClass=true;this.carousel=carousel}/**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */var _proto8=SlideComponent.prototype;_proto8.ngOnInit=function ngOnInit(){this.carousel.addSlide(this);this.itemWidth=100/this.carousel.itemsPerSlide+"%"}/**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */;_proto8.ngOnDestroy=function ngOnDestroy(){this.carousel.removeSlide(this)};return SlideComponent}();SlideComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"slide",template:"\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",host:{"[attr.aria-hidden]":"!active"}}]}];/** @nocollapse */SlideComponent.ctorParameters=function(){return[{type:CarouselComponent}]};SlideComponent.propDecorators={active:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["class.active"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],itemWidth:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["style.width"]}],order:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["style.order"]}],addClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["class.item"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["class.carousel-item"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var CarouselModule=/*#__PURE__*/function(){function CarouselModule(){}/**
     * @return {?}
     */CarouselModule.forRoot=function forRoot(){return{ngModule:CarouselModule,providers:[]}};return CarouselModule}();CarouselModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],declarations:[SlideComponent,CarouselComponent],exports:[SlideComponent,CarouselComponent],providers:[CarouselConfig]}]}];//# sourceMappingURL=ngx-bootstrap-carousel.js.map
/***/},/***/"./node_modules/ngx-bootstrap/chronos/fesm2015/ngx-bootstrap-chronos.js":/*!******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/chronos/fesm2015/ngx-bootstrap-chronos.js ***!
  \******************************************************************************/ /*! exports provided: add, arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, defineLocale, enGbLocale, endOf, esDoLocale, esLocale, esUsLocale, etLocale, fiLocale, formatDate, frLocale, getDay, getFirstDayOfMonth, getFullYear, getLocale, getMonth, getSetGlobalLocale, glLocale, heLocale, hiLocale, hrLocale, huLocale, idLocale, isAfter, isArray, isBefore, isDate, isDateValid, isDisabledDay, isFirstDayOfWeek, isSame, isSameDay, isSameMonth, isSameYear, itLocale, jaLocale, kaLocale, koLocale, listLocales, ltLocale, lvLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, parseDate, plLocale, ptBrLocale, roLocale, ruLocale, setFullDate, shiftDate, skLocale, slLocale, startOf, subtract, svLocale, thBeLocale, thLocale, trLocale, ukLocale, updateLocale, utcAsLocal, viLocale, zhCnLocale, ɵa */ /***/function node_modulesNgxBootstrapChronosFesm2015NgxBootstrapChronosJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"add",function(){return add});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"arLocale",function(){return arLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"bgLocale",function(){return bgLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"caLocale",function(){return caLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"csLocale",function(){return csLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"daLocale",function(){return daLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"deLocale",function(){return deLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"defineLocale",function(){return defineLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"enGbLocale",function(){return enGbLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"endOf",function(){return endOf});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"esDoLocale",function(){return esDoLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"esLocale",function(){return esLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"esUsLocale",function(){return esUsLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"etLocale",function(){return etLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"fiLocale",function(){return fiLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"formatDate",function(){return formatDate});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"frLocale",function(){return frLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getDay",function(){return getDay});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getFirstDayOfMonth",function(){return getFirstDayOfMonth});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getFullYear",function(){return getFullYear});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getLocale",function(){return getLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getMonth",function(){return getMonth});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getSetGlobalLocale",function(){return getSetGlobalLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"glLocale",function(){return glLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"heLocale",function(){return heLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"hiLocale",function(){return hiLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"hrLocale",function(){return hrLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"huLocale",function(){return huLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"idLocale",function(){return idLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isAfter",function(){return isAfter});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isArray",function(){return isArray});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isBefore",function(){return isBefore});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isDate",function(){return isDate});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isDateValid",function(){return isDateValid});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isDisabledDay",function(){return isDisabledDay});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isFirstDayOfWeek",function(){return isFirstDayOfWeek});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isSame",function(){return isSame});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isSameDay",function(){return isSameDay});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isSameMonth",function(){return isSameMonth});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isSameYear",function(){return isSameYear});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"itLocale",function(){return itLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"jaLocale",function(){return jaLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"kaLocale",function(){return kaLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"koLocale",function(){return koLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"listLocales",function(){return listLocales});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ltLocale",function(){return ltLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"lvLocale",function(){return lvLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"mnLocale",function(){return mnLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"nbLocale",function(){return nbLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"nlBeLocale",function(){return nlBeLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"nlLocale",function(){return nlLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parseDate",function(){return parseDate});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"plLocale",function(){return plLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ptBrLocale",function(){return ptBrLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"roLocale",function(){return roLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ruLocale",function(){return ruLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"setFullDate",function(){return setFullDate});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"shiftDate",function(){return shiftDate});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"skLocale",function(){return skLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"slLocale",function(){return slLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"startOf",function(){return startOf});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"subtract",function(){return subtract});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"svLocale",function(){return svLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"thBeLocale",function(){return thBeLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"thLocale",function(){return thLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"trLocale",function(){return trLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ukLocale",function(){return ukLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"updateLocale",function(){return updateLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"utcAsLocal",function(){return utcAsLocal});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"viLocale",function(){return viLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"zhCnLocale",function(){return zhCnLocale});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275a",function(){return createDate});/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} n
 * @param {?} x
 * @return {?}
 */function mod(n,x){return(n%x+x)%x}/**
 * @param {?} num
 * @return {?}
 */function absFloor(num){return num<0?Math.ceil(num)||0:Math.floor(num)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} str
 * @return {?}
 */function isString(str){return typeof str==="string"}/**
 * @param {?} value
 * @return {?}
 */function isDate(value){return value instanceof Date||Object.prototype.toString.call(value)==="[object Date]"}/**
 * @param {?} date
 * @return {?}
 */function isDateValid(date){return date&&date.getTime&&!isNaN(date.getTime())}/**
 * @param {?} fn
 * @return {?}
 */function isFunction(fn){return fn instanceof Function||Object.prototype.toString.call(fn)==="[object Function]"}/**
 * @param {?=} value
 * @return {?}
 */function isNumber(value){return typeof value==="number"||Object.prototype.toString.call(value)==="[object Number]"}/**
 * @template T
 * @param {?=} input
 * @return {?}
 */function isArray(input){return input instanceof Array||Object.prototype.toString.call(input)==="[object Array]"}/**
 * @template T
 * @param {?} a
 * @param {?} b
 * @return {?}
 */function hasOwnProp(a/*object*/,b){return Object.prototype.hasOwnProperty.call(a,b)}/**
 * @template T
 * @param {?} input
 * @return {?}
 */function isObject(input/*object*/){// IE8 will treat undefined and null as object if it wasn't for
// input != null
return input!=null&&Object.prototype.toString.call(input)==="[object Object]"}/**
 * @param {?} obj
 * @return {?}
 */function isObjectEmpty(obj){if(Object.getOwnPropertyNames){return Object.getOwnPropertyNames(obj).length===0}/** @type {?} */var k;for(k in obj){if(obj.hasOwnProperty(k)){return false}}return true}/**
 * @param {?} input
 * @return {?}
 */function isUndefined(input){return input===void 0}/**
 * @template T
 * @param {?} argumentForCoercion
 * @return {?}
 */function toInt(argumentForCoercion){/** @type {?} */var coercedNumber=+argumentForCoercion;/** @type {?} */var value=0;if(coercedNumber!==0&&isFinite(coercedNumber)){value=absFloor(coercedNumber)}return value}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var aliases={};/** @type {?} */var _mapUnits={date:"day",hour:"hours",minute:"minutes",second:"seconds",millisecond:"milliseconds"};/**
 * @param {?} unit
 * @param {?} shorthand
 * @return {?}
 */function addUnitAlias(unit,shorthand){/** @type {?} */var lowerCase=unit.toLowerCase();/** @type {?} */var _unit=unit;if(lowerCase in _mapUnits){_unit=_mapUnits[lowerCase]}aliases[lowerCase]=aliases[lowerCase+"s"]=aliases[shorthand]=_unit}/**
 * @param {?} units
 * @return {?}
 */function normalizeUnits(units){return isString(units)?aliases[units]||aliases[units.toLowerCase()]:undefined}/**
 * @param {?} inputObject
 * @return {?}
 */function normalizeObjectUnits(inputObject){/** @type {?} */var normalizedInput={};/** @type {?} */var normalizedProp;/** @type {?} */var prop;for(prop in inputObject){if(hasOwnProp(inputObject,prop)){normalizedProp=normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp]=inputObject[prop]}}}return(/** @type {?} */normalizedInput)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // place in new Date([array])
/** @type {?} */var YEAR=0;/** @type {?} */var MONTH=1;/** @type {?} */var DATE=2;/** @type {?} */var HOUR=3;/** @type {?} */var MINUTE=4;/** @type {?} */var SECOND=5;/** @type {?} */var MILLISECOND=6;/** @type {?} */var WEEK=7;/** @type {?} */var WEEKDAY=8;/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} num
 * @param {?} targetLength
 * @param {?=} forceSign
 * @return {?}
 */function zeroFill(num,targetLength,forceSign){/** @type {?} */var absNumber=""+Math.abs(num);/** @type {?} */var zerosToFill=targetLength-absNumber.length;/** @type {?} */var sign=num>=0;/** @type {?} */var _sign=sign?forceSign?"+":"":"-";// todo: this is crazy slow
/** @type {?} */var _zeros=Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1);return _sign+_zeros+absNumber}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var formatFunctions={};/** @type {?} */var formatTokenFunctions={};// tslint:disable-next-line
/** @type {?} */var formattingTokens=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
/**
 * @param {?} token
 * @param {?} padded
 * @param {?} ordinal
 * @param {?} callback
 * @return {?}
 */function addFormatToken(token,padded,ordinal,callback){if(token){formatTokenFunctions[token]=callback}if(padded){formatTokenFunctions[padded[0]]=/**
         * @return {?}
         */function(){return zeroFill(callback.apply(null,arguments),padded[1],padded[2])}}if(ordinal){formatTokenFunctions[ordinal]=/**
         * @param {?} date
         * @param {?} opts
         * @return {?}
         */function(date,opts){return opts.locale.ordinal(callback.apply(null,arguments),token)}}}/**
 * @param {?} format
 * @return {?}
 */function makeFormatFunction(format){/** @type {?} */var array=format.match(formattingTokens);/** @type {?} */var length=array.length;/** @type {?} */var formatArr=new Array(length);for(var i=0;i<length;i++){formatArr[i]=formatTokenFunctions[array[i]]?formatTokenFunctions[array[i]]:removeFormattingTokens(array[i])}return(/**
     * @param {?} date
     * @param {?} locale
     * @param {?} isUTC
     * @param {?=} offset
     * @return {?}
     */function(date,locale,isUTC,offset){if(offset===void 0){offset=0}/** @type {?} */var postValue=locale.postvalue(date);/** @type {?} */var output="";for(var j=0;j<length;j++){output+=isFunction(formatArr[j])?/** @type {?} */formatArr[j].call(null,postValue,{format:format,locale:locale,isUTC:isUTC,offset:offset}):formatArr[j]}return output})}/**
 * @param {?} input
 * @return {?}
 */function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,"")}return input.replace(/\\/g,"")}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?=} y
 * @param {?=} m
 * @param {?=} d
 * @return {?}
 */function createUTCDate(y,m,d){/** @type {?} */var date=new Date(Date.UTC.apply(null,arguments));// the Date.UTC function remaps years 0-99 to 1900-1999
if(y<100&&y>=0&&isFinite(date.getUTCFullYear())){date.setUTCFullYear(y)}return date}/**
 * @param {?=} y
 * @param {?=} m
 * @param {?=} d
 * @param {?=} h
 * @param {?=} M
 * @param {?=} s
 * @param {?=} ms
 * @return {?}
 */function createDate(y,m,d,h,M,s,ms){if(m===void 0){m=0}if(d===void 0){d=1}if(h===void 0){h=0}if(M===void 0){M=0}if(s===void 0){s=0}if(ms===void 0){ms=0}/** @type {?} */var date=new Date(y,m,d,h,M,s,ms);// the date constructor remaps years 0-99 to 1900-1999
if(y<100&&y>=0&&isFinite(date.getFullYear())){date.setFullYear(y)}return date}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */function getHours(date,isUTC){if(isUTC===void 0){isUTC=false}return isUTC?date.getUTCHours():date.getHours()}/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */function getMinutes(date,isUTC){if(isUTC===void 0){isUTC=false}return isUTC?date.getUTCMinutes():date.getMinutes()}/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */function getSeconds(date,isUTC){if(isUTC===void 0){isUTC=false}return isUTC?date.getUTCSeconds():date.getSeconds()}/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */function getMilliseconds(date,isUTC){if(isUTC===void 0){isUTC=false}return isUTC?date.getUTCMilliseconds():date.getMilliseconds()}/**
 * @param {?} date
 * @return {?}
 */function getTime(date){return date.getTime()}/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */function getDay(date,isUTC){if(isUTC===void 0){isUTC=false}return isUTC?date.getUTCDay():date.getDay()}/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */function getDate(date,isUTC){if(isUTC===void 0){isUTC=false}return isUTC?date.getUTCDate():date.getDate()}/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */function getMonth(date,isUTC){if(isUTC===void 0){isUTC=false}return isUTC?date.getUTCMonth():date.getMonth()}/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */function getFullYear(date,isUTC){if(isUTC===void 0){isUTC=false}return isUTC?date.getUTCFullYear():date.getFullYear()}/**
 * @param {?} date
 * @return {?}
 */function unix(date){return Math.floor(date.valueOf()/1000)}/**
 * @param {?} date
 * @return {?}
 */function getFirstDayOfMonth(date){return createDate(date.getFullYear(),date.getMonth(),1,date.getHours(),date.getMinutes(),date.getSeconds())}/**
 * @param {?} date
 * @param {?} firstDayOfWeek
 * @return {?}
 */function isFirstDayOfWeek(date,firstDayOfWeek){return date.getDay()===firstDayOfWeek}/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */function isSameMonth(date1,date2){if(!date1||!date2){return false}return isSameYear(date1,date2)&&getMonth(date1)===getMonth(date2)}/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */function isSameYear(date1,date2){if(!date1||!date2){return false}return getFullYear(date1)===getFullYear(date2)}/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */function isSameDay(date1,date2){if(!date1||!date2){return false}return isSameYear(date1,date2)&&isSameMonth(date1,date2)&&getDate(date1)===getDate(date2)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var match1=/\d/;//       0 - 9
/** @type {?} */var match2=/\d\d/;//      00 - 99
/** @type {?} */var match3=/\d{3}/;//     000 - 999
/** @type {?} */var match4=/\d{4}/;//    0000 - 9999
/** @type {?} */var match6=/[+-]?\d{6}/;// -999999 - 999999
/** @type {?} */var match1to2=/\d\d?/;//       0 - 99
/** @type {?} */var match3to4=/\d\d\d\d?/;//     999 - 9999
/** @type {?} */var match5to6=/\d\d\d\d\d\d?/;//   99999 - 999999
/** @type {?} */var match1to3=/\d{1,3}/;//       0 - 999
/** @type {?} */var match1to4=/\d{1,4}/;//       0 - 9999
/** @type {?} */var match1to6=/[+-]?\d{1,6}/;// -999999 - 999999
/** @type {?} */var matchUnsigned=/\d+/;//       0 - inf
/** @type {?} */var matchSigned=/[+-]?\d+/;// +00:00 -00:00 +0000 -0000 or Z
/** @type {?} */var matchShortOffset=/Z|[+-]\d\d(?::?\d\d)?/gi;// +00 -00 +00:00 -00:00 +0000 -0000 or Z
/** @type {?} */var matchTimestamp=/[+-]?\d+(\.\d{1,3})?/;// 123456789 123456789.123
// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
// tslint:disable-next-line
/** @type {?} */var matchWord=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;/** @type {?} */var regexes={};/**
 * @param {?} token
 * @param {?} regex
 * @param {?=} strictRegex
 * @return {?}
 */function addRegexToken(token,regex,strictRegex){if(isFunction(regex)){regexes[token]=regex;return}regexes[token]=/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */function(isStrict,locale){return isStrict&&strictRegex?strictRegex:regex}}/**
 * @param {?} token
 * @param {?} locale
 * @return {?}
 */function getParseRegexForToken(token,locale){/** @type {?} */var _strict=false;if(!hasOwnProp(regexes,token)){return new RegExp(unescapeFormat(token))}return regexes[token](_strict,locale)}// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
/**
 * @param {?} str
 * @return {?}
 */function unescapeFormat(str){// tslint:disable-next-line
return regexEscape(str.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,/**
     * @param {?} matched
     * @param {?} p1
     * @param {?} p2
     * @param {?} p3
     * @param {?} p4
     * @return {?}
     */function(matched,p1,p2,p3,p4){return p1||p2||p3||p4}))}/**
 * @param {?} str
 * @return {?}
 */function regexEscape(str){return str.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var tokens={};/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */function addParseToken(token,callback){/** @type {?} */var _token=isString(token)?[token]:token;/** @type {?} */var func=callback;if(isNumber(callback)){func=/**
         * @param {?} input
         * @param {?} array
         * @param {?} config
         * @return {?}
         */function func(input,array,config){array[callback]=toInt(input);return config}}if(isArray(_token)&&isFunction(func)){/** @type {?} */var i;for(i=0;i<_token.length;i++){tokens[_token[i]]=func}}}/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */function addWeekParseToken(token,callback){addParseToken(token,/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @param {?} _token
     * @return {?}
     */function(input,array,config,_token){config._w=config._w||{};return callback(input,config._w,config,_token)})}/**
 * @param {?} token
 * @param {?} input
 * @param {?} config
 * @return {?}
 */function addTimeToArrayFromToken(token,input,config){if(input!=null&&hasOwnProp(tokens,token)){tokens[token](input,config._a,config,token)}return config}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @return {?}
 */function initDayOfMonth(){// FORMATTING
addFormatToken("D",["DD",2,false],"Do",/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return getDate(date,opts.isUTC).toString(10)});// ALIASES
addUnitAlias("date","D");// PARSING
addRegexToken("D",match1to2);addRegexToken("DD",match1to2,match2);addRegexToken("Do",/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */function(isStrict,locale){return locale._dayOfMonthOrdinalParse||locale._ordinalParse});addParseToken(["D","DD"],DATE);addParseToken("Do",/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){array[DATE]=toInt(input.match(match1to2)[0]);return config})}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @return {?}
 */function defaultParsingFlags(){// We need to deep clone this object.
return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false,parsedDateParts:[],meridiem:null,rfc2822:false,weekdayMismatch:false}}/**
 * @param {?} config
 * @return {?}
 */function getParsingFlags(config){if(config._pf==null){config._pf=defaultParsingFlags()}return config._pf}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // FORMATTING
/**
 * @param {?} date
 * @param {?} opts
 * @return {?}
 */function getYear(date,opts){return getFullYear(date,opts.isUTC).toString()}/**
 * @return {?}
 */function initYear(){addFormatToken("Y",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){/** @type {?} */var y=getFullYear(date,opts.isUTC);return y<=9999?y.toString(10):"+"+y});addFormatToken(null,["YY",2,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return(getFullYear(date,opts.isUTC)%100).toString(10)});addFormatToken(null,["YYYY",4,false],null,getYear);addFormatToken(null,["YYYYY",5,false],null,getYear);addFormatToken(null,["YYYYYY",6,true],null,getYear);// ALIASES
addUnitAlias("year","y");// PARSING
addRegexToken("Y",matchSigned);addRegexToken("YY",match1to2,match2);addRegexToken("YYYY",match1to4,match4);addRegexToken("YYYYY",match1to6,match6);addRegexToken("YYYYYY",match1to6,match6);addParseToken(["YYYYY","YYYYYY"],YEAR);addParseToken("YYYY",/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){array[YEAR]=input.length===2?parseTwoDigitYear(input):toInt(input);return config});addParseToken("YY",/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){array[YEAR]=parseTwoDigitYear(input);return config});addParseToken("Y",/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){array[YEAR]=parseInt(input,10);return config})}/**
 * @param {?} input
 * @return {?}
 */function parseTwoDigitYear(input){return toInt(input)+(toInt(input)>68?1900:2000)}/**
 * @param {?} year
 * @return {?}
 */function daysInYear(year){return isLeapYear(year)?366:365}/**
 * @param {?} year
 * @return {?}
 */function isLeapYear(year){return year%4===0&&year%100!==0||year%400===0}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // todo: this is duplicate, source in date-getters.ts
/**
 * @param {?} year
 * @param {?} month
 * @return {?}
 */function daysInMonth(year,month){if(isNaN(year)||isNaN(month)){return NaN}/** @type {?} */var modMonth=mod(month,12);/** @type {?} */var _year=year+(month-modMonth)/12;return modMonth===1?isLeapYear(_year)?29:28:31-modMonth%7%2}/**
 * @return {?}
 */function initMonth(){// FORMATTING
addFormatToken("M",["MM",2,false],"Mo",/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return(getMonth(date,opts.isUTC)+1).toString(10)});addFormatToken("MMM",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return opts.locale.monthsShort(date,opts.format,opts.isUTC)});addFormatToken("MMMM",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return opts.locale.months(date,opts.format,opts.isUTC)});// ALIASES
addUnitAlias("month","M");// PARSING
addRegexToken("M",match1to2);addRegexToken("MM",match1to2,match2);addRegexToken("MMM",/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */function(isStrict,locale){return locale.monthsShortRegex(isStrict)});addRegexToken("MMMM",/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */function(isStrict,locale){return locale.monthsRegex(isStrict)});addParseToken(["M","MM"],/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){array[MONTH]=toInt(input)-1;return config});addParseToken(["MMM","MMMM"],/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @param {?} token
     * @return {?}
     */function(input,array,config,token){/** @type {?} */var month=config._locale.monthsParse(input,token,config._strict);// if we didn't find a month name, mark the date as invalid.
if(month!=null){array[MONTH]=month}else{getParsingFlags(config).invalidMonth=!!input}return config})}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var defaultTimeUnit={year:0,month:0,day:0,hour:0,minute:0,seconds:0};/**
 * @param {?} date
 * @param {?} unit
 * @return {?}
 */function shiftDate(date,unit){/** @type {?} */var _unit=Object.assign({},defaultTimeUnit,unit);/** @type {?} */var year=date.getFullYear()+(_unit.year||0);/** @type {?} */var month=date.getMonth()+(_unit.month||0);/** @type {?} */var day=date.getDate()+(_unit.day||0);if(_unit.month&&!_unit.day){day=Math.min(day,daysInMonth(year,month))}return createDate(year,month,day,date.getHours()+(_unit.hour||0),date.getMinutes()+(_unit.minute||0),date.getSeconds()+(_unit.seconds||0))}/**
 * @param {?} date
 * @param {?} unit
 * @return {?}
 */function setFullDate(date,unit){return createDate(getNum(date.getFullYear(),unit.year),getNum(date.getMonth(),unit.month),1,// day, to avoid issue with wrong months selection at the end of current month (#5371)
getNum(date.getHours(),unit.hour),getNum(date.getMinutes(),unit.minute),getNum(date.getSeconds(),unit.seconds),getNum(date.getMilliseconds(),unit.milliseconds))}/**
 * @param {?} def
 * @param {?=} num
 * @return {?}
 */function getNum(def,num){return isNumber(num)?num:def}/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */function setMonth(date,value,isUTC){/** @type {?} */var dayOfMonth=Math.min(getDate(date),daysInMonth(getFullYear(date),value));isUTC?date.setUTCMonth(value,dayOfMonth):date.setMonth(value,dayOfMonth);return date}/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */function setHours(date,value,isUTC){isUTC?date.setUTCHours(value):date.setHours(value);return date}/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */function setMinutes(date,value,isUTC){isUTC?date.setUTCMinutes(value):date.setMinutes(value);return date}/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */function setSeconds(date,value,isUTC){isUTC?date.setUTCSeconds(value):date.setSeconds(value);return date}/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */function setMilliseconds(date,value,isUTC){isUTC?date.setUTCMilliseconds(value):date.setMilliseconds(value);return date}/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */function setDate(date,value,isUTC){isUTC?date.setUTCDate(value):date.setDate(value);return date}/**
 * @param {?} date
 * @param {?} value
 * @return {?}
 */function setTime(date,value){date.setTime(value);return date}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // fastest way to clone date
// https://jsperf.com/clone-date-object2
/**
 * @param {?} date
 * @return {?}
 */function cloneDate(date){return new Date(date.getTime())}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} date
 * @param {?} unit
 * @param {?=} isUTC
 * @return {?}
 */function startOf(date,unit,isUTC){/** @type {?} */var _date=cloneDate(date);// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(unit){case"year":setMonth(_date,0,isUTC);/* falls through */case"quarter":case"month":setDate(_date,1,isUTC);/* falls through */case"week":case"isoWeek":case"day":case"date":setHours(_date,0,isUTC);/* falls through */case"hours":setMinutes(_date,0,isUTC);/* falls through */case"minutes":setSeconds(_date,0,isUTC);/* falls through */case"seconds":setMilliseconds(_date,0,isUTC);}// weeks are a special case
if(unit==="week"){setLocaleDayOfWeek(_date,0,{isUTC:isUTC})}if(unit==="isoWeek"){setISODayOfWeek(_date,1)}// quarters are also special
if(unit==="quarter"){setMonth(_date,Math.floor(getMonth(_date,isUTC)/3)*3,isUTC)}return _date}/**
 * @param {?} date
 * @param {?} unit
 * @param {?=} isUTC
 * @return {?}
 */function endOf(date,unit,isUTC){/** @type {?} */var _unit=unit;// 'date' is an alias for 'day', so it should be considered as such.
if(_unit==="date"){_unit="day"}/** @type {?} */var start=startOf(date,_unit,isUTC);/** @type {?} */var _step=add(start,1,_unit==="isoWeek"?"week":_unit,isUTC);/** @type {?} */var res=subtract(_step,1,"milliseconds",isUTC);return res}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @return {?}
 */function initDayOfYear(){// FORMATTING
addFormatToken("DDD",["DDDD",3,false],"DDDo",/**
     * @param {?} date
     * @return {?}
     */function(date){return getDayOfYear(date).toString(10)});// ALIASES
addUnitAlias("dayOfYear","DDD");addRegexToken("DDD",match1to3);addRegexToken("DDDD",match3);addParseToken(["DDD","DDDD"],/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){config._dayOfYear=toInt(input);return config})}/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */function getDayOfYear(date,isUTC){/** @type {?} */var date1=+startOf(date,"day",isUTC);/** @type {?} */var date2=+startOf(date,"year",isUTC);/** @type {?} */var someDate=date1-date2;/** @type {?} */var oneDay=1000*60*60*24;return Math.round(someDate/oneDay)+1}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} year
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */function firstWeekOffset(year,dow,doy){// first-week day -- which january is always in the first week (4 for iso, 1 for other)
/** @type {?} */var fwd=dow-doy+7;// first-week day local weekday -- which local weekday is fwd
/** @type {?} */var fwdlw=(createUTCDate(year,0,fwd).getUTCDay()-dow+7)%7;return-fwdlw+fwd-1}// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
/**
 * @param {?} year
 * @param {?} week
 * @param {?} weekday
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */function dayOfYearFromWeeks(year,week,weekday,dow,doy){/** @type {?} */var localWeekday=(7+weekday-dow)%7;/** @type {?} */var weekOffset=firstWeekOffset(year,dow,doy);/** @type {?} */var dayOfYear=1+7*(week-1)+localWeekday+weekOffset;/** @type {?} */var resYear;/** @type {?} */var resDayOfYear;if(dayOfYear<=0){resYear=year-1;resDayOfYear=daysInYear(resYear)+dayOfYear}else if(dayOfYear>daysInYear(year)){resYear=year+1;resDayOfYear=dayOfYear-daysInYear(year)}else{resYear=year;resDayOfYear=dayOfYear}return{year:resYear,dayOfYear:resDayOfYear}}/**
 * @param {?} date
 * @param {?} dow
 * @param {?} doy
 * @param {?=} isUTC
 * @return {?}
 */function weekOfYear(date,dow,doy,isUTC){/** @type {?} */var weekOffset=firstWeekOffset(getFullYear(date,isUTC),dow,doy);/** @type {?} */var week=Math.floor((getDayOfYear(date,isUTC)-weekOffset-1)/7)+1;/** @type {?} */var resWeek;/** @type {?} */var resYear;if(week<1){resYear=getFullYear(date,isUTC)-1;resWeek=week+weeksInYear(resYear,dow,doy)}else if(week>weeksInYear(getFullYear(date,isUTC),dow,doy)){resWeek=week-weeksInYear(getFullYear(date,isUTC),dow,doy);resYear=getFullYear(date,isUTC)+1}else{resYear=getFullYear(date,isUTC);resWeek=week}return{week:resWeek,year:resYear}}/**
 * @param {?} year
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */function weeksInYear(year,dow,doy){/** @type {?} */var weekOffset=firstWeekOffset(year,dow,doy);/** @type {?} */var weekOffsetNext=firstWeekOffset(year+1,dow,doy);return(daysInYear(year)-weekOffset+weekOffsetNext)/7}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var MONTHS_IN_FORMAT=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;/** @type {?} */var defaultLocaleMonths="January_February_March_April_May_June_July_August_September_October_November_December".split("_");/** @type {?} */var defaultLocaleMonthsShort="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");/** @type {?} */var defaultLocaleWeekdays="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");/** @type {?} */var defaultLocaleWeekdaysShort="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");/** @type {?} */var defaultLocaleWeekdaysMin="Su_Mo_Tu_We_Th_Fr_Sa".split("_");/** @type {?} */var defaultLongDateFormat={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};/** @type {?} */var defaultOrdinal="%d";/** @type {?} */var defaultDayOfMonthOrdinalParse=/\d{1,2}/;/** @type {?} */var defaultMonthsShortRegex=matchWord;/** @type {?} */var defaultMonthsRegex=matchWord;var Locale=/*#__PURE__*/function(){/**
     * @param {?} config
     */function Locale(config){if(!!config){this.set(config)}}/**
     * @param {?} config
     * @return {?}
     */var _proto9=Locale.prototype;_proto9.set=function set(config){/** @type {?} */var confKey;for(confKey in config){if(!config.hasOwnProperty(confKey)){continue}/** @type {?} */var prop=config[/** @type {?} */confKey];/** @type {?} */var key=/** @type {?} */isFunction(prop)?confKey:"_"+confKey;this[key]=/** @type {?} */prop}this._config=config}/**
     * @param {?} key
     * @param {?} date
     * @param {?} now
     * @return {?}
     */;_proto9.calendar=function calendar(key,date,now){/** @type {?} */var output=this._calendar[key]||this._calendar.sameElse;return isFunction(output)?output.call(null,date,now):output}/**
     * @param {?} key
     * @return {?}
     */;_proto9.longDateFormat=function longDateFormat(key){/** @type {?} */var format=this._longDateFormat[key];/** @type {?} */var formatUpper=this._longDateFormat[key.toUpperCase()];if(format||!formatUpper){return format}this._longDateFormat[key]=formatUpper.replace(/MMMM|MM|DD|dddd/g,/**
         * @param {?} val
         * @return {?}
         */function(val){return val.slice(1)});return this._longDateFormat[key]}/**
     * @return {?}
     */;/**
     * @param {?} num
     * @param {?=} token
     * @return {?}
     */_proto9.ordinal=function ordinal(num,token){return this._ordinal.replace("%d",num.toString(10))}/**
     * @param {?} str
     * @return {?}
     */;_proto9.preparse=function preparse(str){return str}/**
     * @param {?} input
     * @return {?}
     */;_proto9.preinput=function preinput(input){return input}/**
     * @param {?} value
     * @return {?}
     */;_proto9.postvalue=function postvalue(value){return value}/**
     * @param {?} str
     * @return {?}
     */;_proto9.postformat=function postformat(str){return str}/**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} str
     * @param {?} isFuture
     * @return {?}
     */;_proto9.relativeTime=function relativeTime(num,withoutSuffix,str,isFuture){/** @type {?} */var output=this._relativeTime[str];return isFunction(output)?output(num,withoutSuffix,str,isFuture):output.replace(/%d/i,num.toString(10))}/**
     * @param {?} diff
     * @param {?} output
     * @return {?}
     */;_proto9.pastFuture=function pastFuture(diff,output){/** @type {?} */var format=this._relativeTime[diff>0?"future":"past"];return isFunction(format)?format(output):format.replace(/%s/i,output)}/**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */;_proto9.months=function months(date,format,isUTC){if(isUTC===void 0){isUTC=false}if(!date){return isArray(this._months)?this._months:this._months.standalone}if(isArray(this._months)){return this._months[getMonth(date,isUTC)]}/** @type {?} */var key=(this._months.isFormat||MONTHS_IN_FORMAT).test(format)?"format":"standalone";return this._months[key][getMonth(date,isUTC)]}/**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */;_proto9.monthsShort=function monthsShort(date,format,isUTC){if(isUTC===void 0){isUTC=false}if(!date){return isArray(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}if(isArray(this._monthsShort)){return this._monthsShort[getMonth(date,isUTC)]}/** @type {?} */var key=MONTHS_IN_FORMAT.test(format)?"format":"standalone";return this._monthsShort[key][getMonth(date,isUTC)]}/**
     * @param {?} monthName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */;_proto9.monthsParse=function monthsParse(monthName,format,strict){/** @type {?} */var date;/** @type {?} */var regex;if(this._monthsParseExact){return this.handleMonthStrictParse(monthName,format,strict)}if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[]}// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
/** @type {?} */var i;for(i=0;i<12;i++){// make the regex if we don't have it already
date=new Date(Date.UTC(2000,i));if(strict&&!this._longMonthsParse[i]){/** @type {?} */var _months=this.months(date,"",true).replace(".","");/** @type {?} */var _shortMonths=this.monthsShort(date,"",true).replace(".","");this._longMonthsParse[i]=new RegExp("^"+_months+"$","i");this._shortMonthsParse[i]=new RegExp("^"+_shortMonths+"$","i")}if(!strict&&!this._monthsParse[i]){regex="^"+this.months(date,"",true)+"|^"+this.monthsShort(date,"",true);this._monthsParse[i]=new RegExp(regex.replace(".",""),"i")}// test the regex
if(strict&&format==="MMMM"&&/** @type {?} */this._longMonthsParse[i].test(monthName)){return i}if(strict&&format==="MMM"&&/** @type {?} */this._shortMonthsParse[i].test(monthName)){return i}if(!strict&&this._monthsParse[i].test(monthName)){return i}}}/**
     * @param {?} isStrict
     * @return {?}
     */;_proto9.monthsRegex=function monthsRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,"_monthsRegex")){this.computeMonthsParse()}if(isStrict){return this._monthsStrictRegex}return this._monthsRegex}if(!hasOwnProp(this,"_monthsRegex")){this._monthsRegex=defaultMonthsRegex}return this._monthsStrictRegex&&isStrict?this._monthsStrictRegex:this._monthsRegex}/**
     * @param {?} isStrict
     * @return {?}
     */;_proto9.monthsShortRegex=function monthsShortRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,"_monthsRegex")){this.computeMonthsParse()}if(isStrict){return this._monthsShortStrictRegex}return this._monthsShortRegex}if(!hasOwnProp(this,"_monthsShortRegex")){this._monthsShortRegex=defaultMonthsShortRegex}return this._monthsShortStrictRegex&&isStrict?this._monthsShortStrictRegex:this._monthsShortRegex}/**
     * Week
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */;_proto9.week=function week(date,isUTC){return weekOfYear(date,this._week.dow,this._week.doy,isUTC).week}/**
     * @return {?}
     */;_proto9.firstDayOfWeek=function firstDayOfWeek(){return this._week.dow}/**
     * @return {?}
     */;_proto9.firstDayOfYear=function firstDayOfYear(){return this._week.doy}/**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */;_proto9.weekdays=function weekdays(date,format,isUTC){if(!date){return isArray(this._weekdays)?this._weekdays:this._weekdays.standalone}if(isArray(this._weekdays)){return this._weekdays[getDay(date,isUTC)]}/** @type {?} */var _key=this._weekdays.isFormat.test(format)?"format":"standalone";return this._weekdays[_key][getDay(date,isUTC)]}/**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */;_proto9.weekdaysMin=function weekdaysMin(date,format,isUTC){return date?this._weekdaysMin[getDay(date,isUTC)]:this._weekdaysMin}/**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */;_proto9.weekdaysShort=function weekdaysShort(date,format,isUTC){return date?this._weekdaysShort[getDay(date,isUTC)]:this._weekdaysShort}// proto.weekdaysParse  =        localeWeekdaysParse;
/**
     * @param {?=} weekdayName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */;_proto9.weekdaysParse=function weekdaysParse(weekdayName,format,strict){/** @type {?} */var i;/** @type {?} */var regex;if(this._weekdaysParseExact){return this.handleWeekStrictParse(weekdayName,format,strict)}if(!this._weekdaysParse){this._weekdaysParse=[];this._minWeekdaysParse=[];this._shortWeekdaysParse=[];this._fullWeekdaysParse=[]}for(i=0;i<7;i++){// make the regex if we don't have it already
// fix: here is the issue
/** @type {?} */var date=setDayOfWeek(new Date(Date.UTC(2000,1)),i,null,true);if(strict&&!this._fullWeekdaysParse[i]){this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(date,"",true).replace(".",".?")+"$","i");this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(date,"",true).replace(".",".?")+"$","i");this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(date,"",true).replace(".",".?")+"$","i")}if(!this._weekdaysParse[i]){regex="^"+this.weekdays(date,"",true)+"|^"+this.weekdaysShort(date,"",true)+"|^"+this.weekdaysMin(date,"",true);this._weekdaysParse[i]=new RegExp(regex.replace(".",""),"i")}if(!isArray(this._fullWeekdaysParse)||!isArray(this._shortWeekdaysParse)||!isArray(this._minWeekdaysParse)||!isArray(this._weekdaysParse)){return}// test the regex
if(strict&&format==="dddd"&&this._fullWeekdaysParse[i].test(weekdayName)){return i}else if(strict&&format==="ddd"&&this._shortWeekdaysParse[i].test(weekdayName)){return i}else if(strict&&format==="dd"&&this._minWeekdaysParse[i].test(weekdayName)){return i}else if(!strict&&this._weekdaysParse[i].test(weekdayName)){return i}}}// proto.weekdaysRegex       =        weekdaysRegex;
/**
     * @param {?} isStrict
     * @return {?}
     */;_proto9.weekdaysRegex=function weekdaysRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,"_weekdaysRegex")){this.computeWeekdaysParse()}if(isStrict){return this._weekdaysStrictRegex}else{return this._weekdaysRegex}}else{if(!hasOwnProp(this,"_weekdaysRegex")){this._weekdaysRegex=matchWord}return this._weekdaysStrictRegex&&isStrict?this._weekdaysStrictRegex:this._weekdaysRegex}}// proto.weekdaysShortRegex  =        weekdaysShortRegex;
// proto.weekdaysMinRegex    =        weekdaysMinRegex;
/**
     * @param {?=} isStrict
     * @return {?}
     */;_proto9.weekdaysShortRegex=function weekdaysShortRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,"_weekdaysRegex")){this.computeWeekdaysParse()}if(isStrict){return this._weekdaysShortStrictRegex}else{return this._weekdaysShortRegex}}else{if(!hasOwnProp(this,"_weekdaysShortRegex")){this._weekdaysShortRegex=matchWord}return this._weekdaysShortStrictRegex&&isStrict?this._weekdaysShortStrictRegex:this._weekdaysShortRegex}}/**
     * @param {?=} isStrict
     * @return {?}
     */;_proto9.weekdaysMinRegex=function weekdaysMinRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,"_weekdaysRegex")){this.computeWeekdaysParse()}if(isStrict){return this._weekdaysMinStrictRegex}else{return this._weekdaysMinRegex}}else{if(!hasOwnProp(this,"_weekdaysMinRegex")){this._weekdaysMinRegex=matchWord}return this._weekdaysMinStrictRegex&&isStrict?this._weekdaysMinStrictRegex:this._weekdaysMinRegex}}/**
     * @param {?} input
     * @return {?}
     */;_proto9.isPM=function isPM(input){// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return input.toLowerCase().charAt(0)==="p"}/**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */;_proto9.meridiem=function meridiem(hours,minutes,isLower){if(hours>11){return isLower?"pm":"PM"}return isLower?"am":"AM"}/**
     * @param {?} key
     * @return {?}
     */;_proto9.formatLongDate=function formatLongDate(key){this._longDateFormat=this._longDateFormat?this._longDateFormat:defaultLongDateFormat;/** @type {?} */var format=this._longDateFormat[key];/** @type {?} */var formatUpper=this._longDateFormat[key.toUpperCase()];if(format||!formatUpper){return format}this._longDateFormat[key]=formatUpper.replace(/MMMM|MM|DD|dddd/g,/**
         * @param {?} val
         * @return {?}
         */function(val){return val.slice(1)});return this._longDateFormat[key]}/**
     * @private
     * @param {?} monthName
     * @param {?} format
     * @param {?=} strict
     * @return {?}
     */;_proto9.handleMonthStrictParse=function handleMonthStrictParse(monthName,format,strict){/** @type {?} */var llc=monthName.toLocaleLowerCase();/** @type {?} */var i;/** @type {?} */var ii;/** @type {?} */var mom;if(!this._monthsParse){// this is not used
this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];for(i=0;i<12;++i){mom=new Date(2000,i);this._shortMonthsParse[i]=this.monthsShort(mom,"").toLocaleLowerCase();this._longMonthsParse[i]=this.months(mom,"").toLocaleLowerCase()}}if(strict){if(format==="MMM"){ii=/** @type {?} */this._shortMonthsParse.indexOf(llc);return ii!==-1?ii:null}ii=/** @type {?} */this._longMonthsParse.indexOf(llc);return ii!==-1?ii:null}if(format==="MMM"){ii=/** @type {?} */this._shortMonthsParse.indexOf(llc);if(ii!==-1){return ii}ii=/** @type {?} */this._longMonthsParse.indexOf(llc);return ii!==-1?ii:null}ii=/** @type {?} */this._longMonthsParse.indexOf(llc);if(ii!==-1){return ii}ii=/** @type {?} */this._shortMonthsParse.indexOf(llc);return ii!==-1?ii:null}/**
     * @private
     * @param {?} weekdayName
     * @param {?} format
     * @param {?} strict
     * @return {?}
     */;_proto9.handleWeekStrictParse=function handleWeekStrictParse(weekdayName,format,strict){/** @type {?} */var ii;/** @type {?} */var llc=weekdayName.toLocaleLowerCase();if(!this._weekdaysParse){this._weekdaysParse=[];this._shortWeekdaysParse=[];this._minWeekdaysParse=[];/** @type {?} */var i;for(i=0;i<7;++i){/** @type {?} */var date=setDayOfWeek(new Date(Date.UTC(2000,1)),i,null,true);this._minWeekdaysParse[i]=this.weekdaysMin(date).toLocaleLowerCase();this._shortWeekdaysParse[i]=this.weekdaysShort(date).toLocaleLowerCase();this._weekdaysParse[i]=this.weekdays(date,"").toLocaleLowerCase()}}if(!isArray(this._weekdaysParse)||!isArray(this._shortWeekdaysParse)||!isArray(this._minWeekdaysParse)){return}if(strict){if(format==="dddd"){ii=this._weekdaysParse.indexOf(llc);return ii!==-1?ii:null}else if(format==="ddd"){ii=this._shortWeekdaysParse.indexOf(llc);return ii!==-1?ii:null}else{ii=this._minWeekdaysParse.indexOf(llc);return ii!==-1?ii:null}}else{if(format==="dddd"){ii=this._weekdaysParse.indexOf(llc);if(ii!==-1){return ii}ii=this._shortWeekdaysParse.indexOf(llc);if(ii!==-1){return ii}ii=this._minWeekdaysParse.indexOf(llc);return ii!==-1?ii:null}else if(format==="ddd"){ii=this._shortWeekdaysParse.indexOf(llc);if(ii!==-1){return ii}ii=this._weekdaysParse.indexOf(llc);if(ii!==-1){return ii}ii=this._minWeekdaysParse.indexOf(llc);return ii!==-1?ii:null}else{ii=this._minWeekdaysParse.indexOf(llc);if(ii!==-1){return ii}ii=this._weekdaysParse.indexOf(llc);if(ii!==-1){return ii}ii=this._shortWeekdaysParse.indexOf(llc);return ii!==-1?ii:null}}}/**
     * @private
     * @return {?}
     */;_proto9.computeMonthsParse=function computeMonthsParse(){/** @type {?} */var shortPieces=[];/** @type {?} */var longPieces=[];/** @type {?} */var mixedPieces=[];/** @type {?} */var date;/** @type {?} */var i;for(i=0;i<12;i++){// make the regex if we don't have it already
date=new Date(2000,i);shortPieces.push(this.monthsShort(date,""));longPieces.push(this.months(date,""));mixedPieces.push(this.months(date,""));mixedPieces.push(this.monthsShort(date,""))}// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for(i=0;i<12;i++){shortPieces[i]=regexEscape(shortPieces[i]);longPieces[i]=regexEscape(longPieces[i])}for(i=0;i<24;i++){mixedPieces[i]=regexEscape(mixedPieces[i])}this._monthsRegex=new RegExp("^("+mixedPieces.join("|")+")","i");this._monthsShortRegex=this._monthsRegex;this._monthsStrictRegex=new RegExp("^("+longPieces.join("|")+")","i");this._monthsShortStrictRegex=new RegExp("^("+shortPieces.join("|")+")","i")}/**
     * @private
     * @return {?}
     */;_proto9.computeWeekdaysParse=function computeWeekdaysParse(){/** @type {?} */var minPieces=[];/** @type {?} */var shortPieces=[];/** @type {?} */var longPieces=[];/** @type {?} */var mixedPieces=[];/** @type {?} */var i;for(i=0;i<7;i++){// make the regex if we don't have it already
// let mom = createUTC([2000, 1]).day(i);
/** @type {?} */var date=setDayOfWeek(new Date(Date.UTC(2000,1)),i,null,true);/** @type {?} */var minp=this.weekdaysMin(date);/** @type {?} */var shortp=this.weekdaysShort(date);/** @type {?} */var longp=this.weekdays(date);minPieces.push(minp);shortPieces.push(shortp);longPieces.push(longp);mixedPieces.push(minp);mixedPieces.push(shortp);mixedPieces.push(longp)}// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
minPieces.sort(cmpLenRev);shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for(i=0;i<7;i++){shortPieces[i]=regexEscape(shortPieces[i]);longPieces[i]=regexEscape(longPieces[i]);mixedPieces[i]=regexEscape(mixedPieces[i])}this._weekdaysRegex=new RegExp("^("+mixedPieces.join("|")+")","i");this._weekdaysShortRegex=this._weekdaysRegex;this._weekdaysMinRegex=this._weekdaysRegex;this._weekdaysStrictRegex=new RegExp("^("+longPieces.join("|")+")","i");this._weekdaysShortStrictRegex=new RegExp("^("+shortPieces.join("|")+")","i");this._weekdaysMinStrictRegex=new RegExp("^("+minPieces.join("|")+")","i")};_createClass(Locale,[{key:"invalidDate",get:function get(){return this._invalidDate}/**
     * @param {?} val
     * @return {?}
     */,set:function set(val){this._invalidDate=val}}]);return Locale}();/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */function cmpLenRev(a,b){return b.length-a.length}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var defaultCalendar={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var defaultInvalidDate="Invalid date";/** @type {?} */var defaultLocaleWeek={dow:0,// Sunday is the first day of the week.
doy:6// The week that contains Jan 1st is the first week of the year.
};/** @type {?} */var defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i;/** @type {?} */var defaultRelativeTime={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};/** @type {?} */var baseConfig={calendar:defaultCalendar,longDateFormat:defaultLongDateFormat,invalidDate:defaultInvalidDate,ordinal:defaultOrdinal,dayOfMonthOrdinalParse:defaultDayOfMonthOrdinalParse,relativeTime:defaultRelativeTime,months:defaultLocaleMonths,monthsShort:defaultLocaleMonthsShort,week:defaultLocaleWeek,weekdays:defaultLocaleWeekdays,weekdaysMin:defaultLocaleWeekdaysMin,weekdaysShort:defaultLocaleWeekdaysShort,meridiemParse:defaultLocaleMeridiemParse};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @template T
 * @param {?} array1
 * @param {?} array2
 * @param {?} dontConvert
 * @return {?}
 */function compareArrays(array1,array2,dontConvert){/** @type {?} */var len=Math.min(array1.length,array2.length);/** @type {?} */var lengthDiff=Math.abs(array1.length-array2.length);/** @type {?} */var diffs=0;/** @type {?} */var i;for(i=0;i<len;i++){if(dontConvert&&array1[i]!==array2[i]||!dontConvert&&toInt(array1[i])!==toInt(array2[i])){diffs++}}return diffs+lengthDiff}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // FORMATTING
/**
 * @return {?}
 */function initWeek(){addFormatToken("w",["ww",2,false],"wo",/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return getWeek(date,opts.locale).toString(10)});addFormatToken("W",["WW",2,false],"Wo",/**
     * @param {?} date
     * @return {?}
     */function(date){return getISOWeek(date).toString(10)});// ALIASES
addUnitAlias("week","w");addUnitAlias("isoWeek","W");// PARSING
addRegexToken("w",match1to2);addRegexToken("ww",match1to2,match2);addRegexToken("W",match1to2);addRegexToken("WW",match1to2,match2);addWeekParseToken(["w","ww","W","WW"],/**
     * @param {?} input
     * @param {?} week
     * @param {?} config
     * @param {?} token
     * @return {?}
     */function(input,week,config,token){week[token.substr(0,1)]=toInt(input);return config});// export function getSetWeek (input) {
//   var week = this.localeData().week(this);
//   return input == null ? week : this.add((input - week) * 7, 'd');
// }
}/**
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */function getWeek(date,locale,isUTC){if(locale===void 0){locale=getLocale()}return locale.week(date,isUTC)}/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */function getISOWeek(date,isUTC){return weekOfYear(date,1,4,isUTC).week}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // FORMATTING
/**
 * @return {?}
 */function initWeekYear(){addFormatToken(null,["gg",2,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){// return this.weekYear() % 100;
return(getWeekYear(date,opts.locale)%100).toString()});addFormatToken(null,["GG",2,false],null,/**
     * @param {?} date
     * @return {?}
     */function(date){// return this.isoWeekYear() % 100;
return(getISOWeekYear(date)%100).toString()});addWeekYearFormatToken("gggg",_getWeekYearFormatCb);addWeekYearFormatToken("ggggg",_getWeekYearFormatCb);addWeekYearFormatToken("GGGG",_getISOWeekYearFormatCb);addWeekYearFormatToken("GGGGG",_getISOWeekYearFormatCb);// ALIASES
addUnitAlias("weekYear","gg");addUnitAlias("isoWeekYear","GG");// PARSING
addRegexToken("G",matchSigned);addRegexToken("g",matchSigned);addRegexToken("GG",match1to2,match2);addRegexToken("gg",match1to2,match2);addRegexToken("GGGG",match1to4,match4);addRegexToken("gggg",match1to4,match4);addRegexToken("GGGGG",match1to6,match6);addRegexToken("ggggg",match1to6,match6);addWeekParseToken(["gggg","ggggg","GGGG","GGGGG"],/**
     * @param {?} input
     * @param {?} week
     * @param {?} config
     * @param {?} token
     * @return {?}
     */function(input,week,config,token){week[token.substr(0,2)]=toInt(input);return config});addWeekParseToken(["gg","GG"],/**
     * @param {?} input
     * @param {?} week
     * @param {?} config
     * @param {?} token
     * @return {?}
     */function(input,week,config,token){week[token]=parseTwoDigitYear(input);return config})}/**
 * @param {?} token
 * @param {?} getter
 * @return {?}
 */function addWeekYearFormatToken(token,getter){addFormatToken(null,[token,token.length,false],null,getter)}/**
 * @param {?} date
 * @param {?} opts
 * @return {?}
 */function _getWeekYearFormatCb(date,opts){return getWeekYear(date,opts.locale).toString()}/**
 * @param {?} date
 * @return {?}
 */function _getISOWeekYearFormatCb(date){return getISOWeekYear(date).toString()}/**
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */function getWeekYear(date,locale,isUTC){if(locale===void 0){locale=getLocale()}return weekOfYear(date,locale.firstDayOfWeek(),locale.firstDayOfYear(),isUTC).year}/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */function getISOWeekYear(date,isUTC){return weekOfYear(date,1,4,isUTC).year}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // todo: add support for timezones
/**
 * @return {?}
 */function initTimezone(){// FORMATTING
addFormatToken("z",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return opts.isUTC?"UTC":""});addFormatToken("zz",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return opts.isUTC?"Coordinated Universal Time":""})}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @return {?}
 */function initTimestamp(){// FORMATTING
addFormatToken("X",null,null,/**
     * @param {?} date
     * @return {?}
     */function(date){return unix(date).toString(10)});addFormatToken("x",null,null,/**
     * @param {?} date
     * @return {?}
     */function(date){return date.valueOf().toString(10)});// PARSING
addRegexToken("x",matchSigned);addRegexToken("X",matchTimestamp);addParseToken("X",/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){config._d=new Date(parseFloat(input)*1000);return config});addParseToken("x",/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){config._d=new Date(toInt(input));return config})}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @return {?}
 */function initSecond(){// FORMATTING
addFormatToken("s",["ss",2,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return getSeconds(date,opts.isUTC).toString(10)});// ALIASES
addUnitAlias("second","s");// PARSING
addRegexToken("s",match1to2);addRegexToken("ss",match1to2,match2);addParseToken(["s","ss"],SECOND)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @return {?}
 */function initQuarter(){// FORMATTING
addFormatToken("Q",null,"Qo",/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return getQuarter(date,opts.isUTC).toString(10)});// ALIASES
addUnitAlias("quarter","Q");// PARSING
addRegexToken("Q",match1);addParseToken("Q",/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){array[MONTH]=(toInt(input)-1)*3;return config})}// MOMENTS
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */function getQuarter(date,isUTC){if(isUTC===void 0){isUTC=false}return Math.ceil((getMonth(date,isUTC)+1)/3)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} token
 * @param {?} separator
 * @return {?}
 */function addOffsetFormatToken(token,separator){addFormatToken(token,null,null,/**
     * @param {?} date
     * @param {?} config
     * @return {?}
     */function(date,config){/** @type {?} */var offset=getUTCOffset(date,{_isUTC:config.isUTC,_offset:config.offset});/** @type {?} */var sign="+";if(offset<0){offset=-offset;sign="-"}return sign+zeroFill(~~(offset/60),2)+separator+zeroFill(~~offset%60,2)})}/**
 * @return {?}
 */function initOffset(){addOffsetFormatToken("Z",":");addOffsetFormatToken("ZZ","");// PARSING
addRegexToken("Z",matchShortOffset);addRegexToken("ZZ",matchShortOffset);addParseToken(["Z","ZZ"],/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){config._useUTC=true;config._tzm=offsetFromString(matchShortOffset,input);return config})}// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
/** @type {?} */var chunkOffset=/([\+\-]|\d\d)/gi;/**
 * @param {?} matcher
 * @param {?} str
 * @return {?}
 */function offsetFromString(matcher,str){/** @type {?} */var matches=(str||"").match(matcher);if(matches===null){return null}/** @type {?} */var chunk=matches[matches.length-1];/** @type {?} */var parts=chunk.match(chunkOffset)||["-","0","0"];/** @type {?} */var minutes=parseInt(parts[1],10)*60+toInt(parts[2]);/** @type {?} */var _min=parts[0]==="+"?minutes:-minutes;return minutes===0?0:_min}// Return a moment from input, that is local/utc/zone equivalent to model.
/**
 * @param {?} input
 * @param {?} date
 * @param {?=} config
 * @return {?}
 */function cloneWithOffset(input,date,config){if(config===void 0){config={}}if(!config._isUTC){return input}/** @type {?} */var res=cloneDate(date);// todo: input._d - res._d + ((res._offset || 0) - (input._offset || 0))*60000
/** @type {?} */var offsetDiff=(config._offset||0)*60000;/** @type {?} */var diff=input.valueOf()-res.valueOf()+offsetDiff;// Use low-level api, because this fn is low-level api.
res.setTime(res.valueOf()+diff);// todo: add timezone handling
// hooks.updateOffset(res, false);
return res}/**
 * @param {?} date
 * @return {?}
 */function getDateOffset(date){// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return-Math.round(date.getTimezoneOffset()/15)*15}// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
// todo: it's from moment timezones
// hooks.updateOffset = function () {
// };
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
/**
 * @param {?} date
 * @param {?=} config
 * @return {?}
 */function getUTCOffset(date,config){if(config===void 0){config={}}/** @type {?} */var _offset=config._offset||0;return config._isUTC?_offset:getDateOffset(date)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @return {?}
 */function initMinute(){// FORMATTING
addFormatToken("m",["mm",2,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return getMinutes(date,opts.isUTC).toString(10)});// ALIASES
addUnitAlias("minute","m");// PARSING
addRegexToken("m",match1to2);addRegexToken("mm",match1to2,match2);addParseToken(["m","mm"],MINUTE)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @return {?}
 */function initMillisecond(){addFormatToken("S",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return(~~(getMilliseconds(date,opts.isUTC)/100)).toString(10)});addFormatToken(null,["SS",2,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return(~~(getMilliseconds(date,opts.isUTC)/10)).toString(10)});addFormatToken(null,["SSS",3,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return getMilliseconds(date,opts.isUTC).toString(10)});addFormatToken(null,["SSSS",4,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return(getMilliseconds(date,opts.isUTC)*10).toString(10)});addFormatToken(null,["SSSSS",5,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return(getMilliseconds(date,opts.isUTC)*100).toString(10)});addFormatToken(null,["SSSSSS",6,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return(getMilliseconds(date,opts.isUTC)*1000).toString(10)});addFormatToken(null,["SSSSSSS",7,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return(getMilliseconds(date,opts.isUTC)*10000).toString(10)});addFormatToken(null,["SSSSSSSS",8,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return(getMilliseconds(date,opts.isUTC)*100000).toString(10)});addFormatToken(null,["SSSSSSSSS",9,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return(getMilliseconds(date,opts.isUTC)*1000000).toString(10)});// ALIASES
addUnitAlias("millisecond","ms");// PARSING
addRegexToken("S",match1to3,match1);addRegexToken("SS",match1to3,match2);addRegexToken("SSS",match1to3,match3);/** @type {?} */var token;for(token="SSSS";token.length<=9;token+="S"){addRegexToken(token,matchUnsigned)}/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function parseMs(input,array,config){array[MILLISECOND]=toInt(parseFloat("0."+input)*1000);return config}for(token="S";token.length<=9;token+="S"){addParseToken(token,parseMs)}// MOMENTS
}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @return {?}
 */function initHour(){// FORMATTING
// FORMATTING
/**
     * @param {?} date
     * @param {?} isUTC
     * @return {?}
     */function hFormat(date,isUTC){return getHours(date,isUTC)%12||12}/**
     * @param {?} date
     * @param {?} isUTC
     * @return {?}
     */function kFormat(date,isUTC){return getHours(date,isUTC)||24}addFormatToken("H",["HH",2,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return getHours(date,opts.isUTC).toString(10)});addFormatToken("h",["hh",2,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return hFormat(date,opts.isUTC).toString(10)});addFormatToken("k",["kk",2,false],null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return kFormat(date,opts.isUTC).toString(10)});addFormatToken("hmm",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){/** @type {?} */var _h=hFormat(date,opts.isUTC);/** @type {?} */var _mm=zeroFill(getMinutes(date,opts.isUTC),2);return""+_h+_mm});addFormatToken("hmmss",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){/** @type {?} */var _h=hFormat(date,opts.isUTC);/** @type {?} */var _mm=zeroFill(getMinutes(date,opts.isUTC),2);/** @type {?} */var _ss=zeroFill(getSeconds(date,opts.isUTC),2);return""+_h+_mm+_ss});addFormatToken("Hmm",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){/** @type {?} */var _H=getHours(date,opts.isUTC);/** @type {?} */var _mm=zeroFill(getMinutes(date,opts.isUTC),2);return""+_H+_mm});addFormatToken("Hmmss",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){/** @type {?} */var _H=getHours(date,opts.isUTC);/** @type {?} */var _mm=zeroFill(getMinutes(date,opts.isUTC),2);/** @type {?} */var _ss=zeroFill(getSeconds(date,opts.isUTC),2);return""+_H+_mm+_ss});/**
     * @param {?} token
     * @param {?} lowercase
     * @return {?}
     */function meridiem(token,lowercase){addFormatToken(token,null,null,/**
         * @param {?} date
         * @param {?} opts
         * @return {?}
         */function(date,opts){return opts.locale.meridiem(getHours(date,opts.isUTC),getMinutes(date,opts.isUTC),lowercase)})}meridiem("a",true);meridiem("A",false);// ALIASES
addUnitAlias("hour","h");// PARSING
/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */function matchMeridiem(isStrict,locale){return locale._meridiemParse}addRegexToken("a",matchMeridiem);addRegexToken("A",matchMeridiem);addRegexToken("H",match1to2);addRegexToken("h",match1to2);addRegexToken("k",match1to2);addRegexToken("HH",match1to2,match2);addRegexToken("hh",match1to2,match2);addRegexToken("kk",match1to2,match2);addRegexToken("hmm",match3to4);addRegexToken("hmmss",match5to6);addRegexToken("Hmm",match3to4);addRegexToken("Hmmss",match5to6);addParseToken(["H","HH"],HOUR);addParseToken(["k","kk"],/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){/** @type {?} */var kInput=toInt(input);array[HOUR]=kInput===24?0:kInput;return config});addParseToken(["a","A"],/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){config._isPm=config._locale.isPM(input);config._meridiem=input;return config});addParseToken(["h","hh"],/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){array[HOUR]=toInt(input);getParsingFlags(config).bigHour=true;return config});addParseToken("hmm",/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){/** @type {?} */var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos));getParsingFlags(config).bigHour=true;return config});addParseToken("hmmss",/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){/** @type {?} */var pos1=input.length-4;/** @type {?} */var pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2));getParsingFlags(config).bigHour=true;return config});addParseToken("Hmm",/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){/** @type {?} */var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos));return config});addParseToken("Hmmss",/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */function(input,array,config){/** @type {?} */var pos1=input.length-4;/** @type {?} */var pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2));return config})}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var locales={};/** @type {?} */var localeFamilies={};/** @type {?} */var globalLocale;/**
 * @param {?} key
 * @return {?}
 */function normalizeLocale(key){return key?key.toLowerCase().replace("_","-"):key}// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least,
// but move to the next array item if it's a more specific variant than the current root
/**
 * @param {?} names
 * @return {?}
 */function chooseLocale(names){/** @type {?} */var next;/** @type {?} */var locale;/** @type {?} */var i=0;while(i<names.length){/** @type {?} */var split=normalizeLocale(names[i]).split("-");/** @type {?} */var j=split.length;next=normalizeLocale(names[i+1]);next=next?next.split("-"):null;while(j>0){locale=loadLocale(split.slice(0,j).join("-"));if(locale){return locale}if(next&&next.length>=j&&compareArrays(split,next,true)>=j-1){// the next array item is better than a shallower substring of this one
break}j--}i++}return null}/**
 * @param {?} parentConfig
 * @param {?} childConfig
 * @return {?}
 */function mergeConfigs(parentConfig,childConfig){/** @type {?} */var res=Object.assign({},parentConfig);for(var childProp in childConfig){if(!hasOwnProp(childConfig,childProp)){continue}if(isObject(parentConfig[childProp])&&isObject(childConfig[childProp])){res[/** @type {?} */childProp]={};Object.assign(res[childProp],parentConfig[childProp]);Object.assign(res[childProp],childConfig[childProp])}else if(childConfig[childProp]!=null){res[/** @type {?} */childProp]=childConfig[childProp]}else{delete res[/** @type {?} */childProp]}}for(var parentProp in parentConfig){if(hasOwnProp(parentConfig,parentProp)&&!hasOwnProp(childConfig,parentProp)&&isObject(parentConfig[/** @type {?} */parentProp])){// make sure changes to properties don't modify parent config
res[/** @type {?} */parentProp]=Object.assign({},res[/** @type {?} */parentProp])}}return res}/**
 * @param {?} name
 * @return {?}
 */function loadLocale(name){// no way!
/* var oldLocale = null;
     // TODO: Find a better way to register and load all the locales in Node
     if (!locales[name] && (typeof module !== 'undefined') &&
       module && module.exports) {
       try {
         oldLocale = globalLocale._abbr;
         var aliasedRequire = require;
         aliasedRequire('./locale/' + name);
         getSetGlobalLocale(oldLocale);
       } catch (e) {}
     }*/if(!locales[name]){// tslint:disable-next-line
console.error("Khronos locale error: please load locale \""+name+"\" before using it");// throw new Error(`Khronos locale error: please load locale "${name}" before using it`);
}return locales[name]}// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
/**
 * @param {?=} key
 * @param {?=} values
 * @return {?}
 */function getSetGlobalLocale(key,values){/** @type {?} */var data;if(key){if(isUndefined(values)){data=getLocale(key)}else if(isString(key)){data=defineLocale(key,values)}if(data){globalLocale=data}}return globalLocale&&globalLocale._abbr}/**
 * @param {?} name
 * @param {?=} config
 * @return {?}
 */function defineLocale(name,config){if(config===null){// useful for testing
delete locales[name];globalLocale=getLocale("en");return null}if(!config){return}/** @type {?} */var parentConfig=baseConfig;config.abbr=name;if(config.parentLocale!=null){if(locales[config.parentLocale]!=null){parentConfig=locales[config.parentLocale]._config}else{if(!localeFamilies[config.parentLocale]){localeFamilies[config.parentLocale]=[]}localeFamilies[config.parentLocale].push({name:name,config:config});return null}}locales[name]=new Locale(mergeConfigs(parentConfig,config));if(localeFamilies[name]){localeFamilies[name].forEach(/**
         * @param {?} x
         * @return {?}
         */function(x){defineLocale(x.name,x.config)})}// backwards compat for now: also set the locale
// make sure we set the locale AFTER all child locales have been
// created, so we won't end up with the child locale set.
getSetGlobalLocale(name);return locales[name]}/**
 * @param {?} name
 * @param {?=} config
 * @return {?}
 */function updateLocale(name,config){/** @type {?} */var _config=config;if(_config!=null){/** @type {?} */var parentConfig=baseConfig;// MERGE
/** @type {?} */var tmpLocale=loadLocale(name);if(tmpLocale!=null){parentConfig=tmpLocale._config}_config=mergeConfigs(parentConfig,_config);/** @type {?} */var locale=new Locale(_config);locale.parentLocale=locales[name];locales[name]=locale;// backwards compat for now: also set the locale
getSetGlobalLocale(name)}else{// pass null for config to unupdate, useful for tests
if(locales[name]!=null){if(locales[name].parentLocale!=null){locales[name]=locales[name].parentLocale}else if(locales[name]!=null){delete locales[name]}}}return locales[name]}// returns locale data
/**
 * @param {?=} key
 * @return {?}
 */function getLocale(key){setDefaultLocale();if(!key){return globalLocale}// let locale;
/** @type {?} */var _key=isArray(key)?key:[key];return chooseLocale(_key)}/**
 * @return {?}
 */function listLocales(){return Object.keys(locales)}/**
 * @return {?}
 */function setDefaultLocale(){if(locales["en"]){return undefined}getSetGlobalLocale("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,/**
         * @param {?} num
         * @return {?}
         */ordinal:function ordinal(num){/** @type {?} */var b=num%10;/** @type {?} */var output=toInt(num%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th";return num+output}});initWeek();initWeekYear();initYear();initTimezone();initTimestamp();initSecond();initQuarter();initOffset();initMonth();initMinute();initMillisecond();initHour();initDayOfYear();initDayOfWeek();initDayOfMonth()}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var ordering=["year","quarter","month","week","day","hours","minutes","seconds","milliseconds"];var ɵ0=/**
 * @param {?} mem
 * @param {?} order
 * @return {?}
 */function ɵ0(mem,order){mem[order]=true;return mem};/** @type {?} */var orderingHash=ordering.reduce(ɵ0,{});/**
 * @param {?} duration
 * @return {?}
 */function isDurationValid(duration){/** @type {?} */var durationKeys=Object.keys(duration);if(durationKeys.some(/**
     * @param {?} key
     * @return {?}
     */function(key){return key in orderingHash&&duration[key]===null||isNaN(duration[key])})){return false}// for (let key in duration) {
//   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
//     return false;
//   }
// }
/** @type {?} */var unitHasDecimal=false;for(var i=0;i<ordering.length;++i){if(duration[ordering[i]]){// only allow non-integers for smallest unit
if(unitHasDecimal){return false}if(duration[ordering[i]]!==toInt(duration[ordering[i]])){unitHasDecimal=true}}}return true}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} number
 * @return {?}
 */function absCeil(number){return number<0?Math.floor(number):Math.ceil(number)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} dur
 * @return {?}
 */function bubble(dur){/** @type {?} */var milliseconds=dur._milliseconds;/** @type {?} */var days=dur._days;/** @type {?} */var months=dur._months;/** @type {?} */var data=dur._data;// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
if(!(milliseconds>=0&&days>=0&&months>=0||milliseconds<=0&&days<=0&&months<=0)){milliseconds+=absCeil(monthsToDays(months)+days)*864e5;days=0;months=0}// The following code bubbles up values, see the tests for
// examples of what that means.
data.milliseconds=milliseconds%1000;/** @type {?} */var seconds=absFloor(milliseconds/1000);data.seconds=seconds%60;/** @type {?} */var minutes=absFloor(seconds/60);data.minutes=minutes%60;/** @type {?} */var hours=absFloor(minutes/60);data.hours=hours%24;days+=absFloor(hours/24);// convert days to months
/** @type {?} */var monthsFromDays=absFloor(daysToMonths(days));months+=monthsFromDays;days-=absCeil(monthsToDays(monthsFromDays));// 12 months -> 1 year
/** @type {?} */var years=absFloor(months/12);months%=12;data.day=days;data.month=months;data.year=years;return dur}/**
 * @param {?} day
 * @return {?}
 */function daysToMonths(day){// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return day*4800/146097}/**
 * @param {?} month
 * @return {?}
 */function monthsToDays(month){// the reverse of daysToMonths
return month*146097/4800}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var round=Math.round;/** @type {?} */var thresholds={ss:44,// a few seconds to seconds
s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11// months to year
};// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
/**
 * @param {?} str
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} isFuture
 * @param {?} locale
 * @return {?}
 */function substituteTimeAgo(str,num,withoutSuffix,isFuture,locale){return locale.relativeTime(num||1,!!withoutSuffix,str,isFuture)}/**
 * @param {?} posNegDuration
 * @param {?} withoutSuffix
 * @param {?} locale
 * @return {?}
 */function relativeTime(posNegDuration,withoutSuffix,locale){/** @type {?} */var duration=createDuration(posNegDuration).abs();/** @type {?} */var seconds=round(duration.as("s"));/** @type {?} */var minutes=round(duration.as("m"));/** @type {?} */var hours=round(duration.as("h"));/** @type {?} */var days=round(duration.as("d"));/** @type {?} */var months=round(duration.as("M"));/** @type {?} */var years=round(duration.as("y"));/** @type {?} */var a=seconds<=thresholds.ss&&["s",seconds]||seconds<thresholds.s&&["ss",seconds]||minutes<=1&&["m"]||minutes<thresholds.m&&["mm",minutes]||hours<=1&&["h"]||hours<thresholds.h&&["hh",hours]||days<=1&&["d"]||days<thresholds.d&&["dd",days]||months<=1&&["M"]||months<thresholds.M&&["MM",months]||years<=1&&["y"]||["yy",years];/** @type {?} */var b=[a[0],a[1],withoutSuffix,+posNegDuration>0,locale];// a[2] = withoutSuffix;
// a[3] = +posNegDuration > 0;
// a[4] = locale;
return substituteTimeAgo.apply(null,b)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var Duration=/*#__PURE__*/function(){/**
     * @param {?} duration
     * @param {?=} config
     */function Duration(duration,config){if(config===void 0){config={}}this._data={};this._locale=getLocale();this._locale=config&&config._locale||getLocale();// const normalizedInput = normalizeObjectUnits(duration);
/** @type {?} */var normalizedInput=duration;/** @type {?} */var years=normalizedInput.year||0;/** @type {?} */var quarters=normalizedInput.quarter||0;/** @type {?} */var months=normalizedInput.month||0;/** @type {?} */var weeks=normalizedInput.week||0;/** @type {?} */var days=normalizedInput.day||0;/** @type {?} */var hours=normalizedInput.hours||0;/** @type {?} */var minutes=normalizedInput.minutes||0;/** @type {?} */var seconds=normalizedInput.seconds||0;/** @type {?} */var milliseconds=normalizedInput.milliseconds||0;this._isValid=isDurationValid(normalizedInput);// representation for dateAddRemove
this._milliseconds=+milliseconds+seconds*1000+minutes*60*1000+// 1000 * 60
hours*1000*60*60;// using 1000 * 60 * 60
// instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+days+weeks*7;// It is impossible to translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+months+quarters*3+years*12;// this._data = {};
// this._locale = getLocale();
// this._bubble();
return bubble(this)}/**
     * @return {?}
     */var _proto10=Duration.prototype;_proto10.isValid=function isValid(){return this._isValid}/**
     * @param {?=} withSuffix
     * @return {?}
     */;_proto10.humanize=function humanize(withSuffix){// throw new Error(`TODO: implement`);
if(!this.isValid()){return this.localeData().invalidDate}/** @type {?} */var locale=this.localeData();/** @type {?} */var output=relativeTime(this,!withSuffix,locale);if(withSuffix){output=locale.pastFuture(+this,output)}return locale.postformat(output)}/**
     * @return {?}
     */;_proto10.localeData=function localeData(){return this._locale}/**
     * @param {?=} localeKey
     * @return {?}
     */;_proto10.locale=function locale(localeKey){if(!localeKey){return this._locale._abbr}this._locale=getLocale(localeKey)||this._locale;return this}/**
     * @return {?}
     */;_proto10.abs=function abs(){/** @type {?} */var mathAbs=Math.abs;/** @type {?} */var data=this._data;this._milliseconds=mathAbs(this._milliseconds);this._days=mathAbs(this._days);this._months=mathAbs(this._months);data.milliseconds=mathAbs(data.milliseconds);data.seconds=mathAbs(data.seconds);data.minutes=mathAbs(data.minutes);data.hours=mathAbs(data.hours);data.month=mathAbs(data.month);data.year=mathAbs(data.year);return this}/**
     * @param {?} _units
     * @return {?}
     */;_proto10.as=function as(_units){if(!this.isValid()){return NaN}/** @type {?} */var days;/** @type {?} */var months;/** @type {?} */var milliseconds=this._milliseconds;/** @type {?} */var units=normalizeUnits(_units);if(units==="month"||units==="year"){days=this._days+milliseconds/864e5;months=this._months+daysToMonths(days);return units==="month"?months:months/12}// handle milliseconds separately because of floating point math errors (issue #1867)
days=this._days+Math.round(monthsToDays(this._months));switch(units){case"week":return days/7+milliseconds/6048e5;case"day":return days+milliseconds/864e5;case"hours":return days*24+milliseconds/36e5;case"minutes":return days*1440+milliseconds/6e4;case"seconds":return days*86400+milliseconds/1000;// Math.floor prevents floating point math errors here
case"milliseconds":return Math.floor(days*864e5)+milliseconds;default:throw new Error("Unknown unit "+units);}}/**
     * @return {?}
     */;_proto10.valueOf=function valueOf(){if(!this.isValid()){return NaN}return this._milliseconds+this._days*864e5+this._months%12*2592e6+toInt(this._months/12)*31536e6};return Duration}();/**
 * @param {?} obj
 * @return {?}
 */function isDuration(obj){return obj instanceof Duration}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} config
 * @return {?}
 */function isValid(config){if(config._isValid==null){/** @type {?} */var flags=getParsingFlags(config);/** @type {?} */var parsedParts=Array.prototype.some.call(flags.parsedDateParts,/**
         * @param {?} i
         * @return {?}
         */function(i){return i!=null});/** @type {?} */var isNowValid=!isNaN(config._d&&config._d.getTime())&&flags.overflow<0&&!flags.empty&&!flags.invalidMonth&&!flags.invalidWeekday&&!flags.weekdayMismatch&&!flags.nullInput&&!flags.invalidFormat&&!flags.userInvalidated&&(!flags.meridiem||flags.meridiem&&parsedParts);if(config._strict){isNowValid=isNowValid&&flags.charsLeftOver===0&&flags.unusedTokens.length===0&&flags.bigHour===undefined}if(Object.isFrozen==null||!Object.isFrozen(config)){config._isValid=isNowValid}else{return isNowValid}}return config._isValid}/**
 * @param {?} config
 * @param {?=} flags
 * @return {?}
 */function createInvalid(config,flags){config._d=new Date(NaN);Object.assign(getParsingFlags(config),flags||{userInvalidated:true});return config}/**
 * @param {?} config
 * @return {?}
 */function markInvalid(config){config._isValid=false;return config}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
// tslint:disable-next-line
/** @type {?} */var extendedIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;// tslint:disable-next-line
/** @type {?} */var basicIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;/** @type {?} */var tzRegex=/Z|[+-]\d\d(?::?\d\d)?/;/** @type {?} */var isoDates=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/,true],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/,true],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/,true],["GGGG-[W]WW",/\d{4}-W\d\d/,false],["YYYY-DDD",/\d{4}-\d{3}/,true],["YYYY-MM",/\d{4}-\d\d/,false],["YYYYYYMMDD",/[+-]\d{10}/,true],["YYYYMMDD",/\d{8}/,true],// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/,true],["GGGG[W]WW",/\d{4}W\d{2}/,false],["YYYYDDD",/\d{7}/,true]];// iso time formats and regexes
/** @type {?} */var isoTimes=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]];/** @type {?} */var aspNetJsonRegex=/^\/?Date\((\-?\d+)/i;/** @type {?} */var obsOffsets={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
// tslint:disable-next-line
/** @type {?} */var rfc2822=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;// date from iso format
/**
 * @param {?} config
 * @return {?}
 */function configFromISO(config){if(!isString(config._i)){return config}/** @type {?} */var input=config._i;/** @type {?} */var match=extendedIsoRegex.exec(input)||basicIsoRegex.exec(input);/** @type {?} */var allowTime;/** @type {?} */var dateFormat;/** @type {?} */var timeFormat;/** @type {?} */var tzFormat;if(!match){config._isValid=false;return config}// getParsingFlags(config).iso = true;
/** @type {?} */var i;/** @type {?} */var l;for(i=0,l=isoDates.length;i<l;i++){if(isoDates[i][1].exec(match[1])){dateFormat=isoDates[i][0];allowTime=isoDates[i][2]!==false;break}}if(dateFormat==null){config._isValid=false;return config}if(match[3]){for(i=0,l=isoTimes.length;i<l;i++){if(isoTimes[i][1].exec(match[3])){// match[2] should be 'T' or space
timeFormat=(match[2]||" ")+isoTimes[i][0];break}}if(timeFormat==null){config._isValid=false;return config}}if(!allowTime&&timeFormat!=null){config._isValid=false;return config}if(match[4]){if(tzRegex.exec(match[4])){tzFormat="Z"}else{config._isValid=false;return config}}config._f=dateFormat+(timeFormat||"")+(tzFormat||"");return configFromStringAndFormat(config)}// tslint:disable-next-line
/**
 * @param {?} yearStr
 * @param {?} monthStr
 * @param {?} dayStr
 * @param {?} hourStr
 * @param {?} minuteStr
 * @param {?} secondStr
 * @return {?}
 */function extractFromRFC2822Strings(yearStr,monthStr,dayStr,hourStr,minuteStr,secondStr){/** @type {?} */var result=[untruncateYear(yearStr),defaultLocaleMonthsShort.indexOf(monthStr),parseInt(dayStr,10),parseInt(hourStr,10),parseInt(minuteStr,10)];if(secondStr){result.push(parseInt(secondStr,10))}return result}/**
 * @param {?} yearStr
 * @return {?}
 */function untruncateYear(yearStr){/** @type {?} */var year=parseInt(yearStr,10);return year<=49?year+2000:year}/**
 * @param {?} str
 * @return {?}
 */function preprocessRFC2822(str){// Remove comments and folding whitespace and replace multiple-spaces with a single space
return str.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}/**
 * @param {?} weekdayStr
 * @param {?} parsedInput
 * @param {?} config
 * @return {?}
 */function checkWeekday(weekdayStr,parsedInput,config){if(weekdayStr){// TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
/** @type {?} */var weekdayProvided=defaultLocaleWeekdaysShort.indexOf(weekdayStr);/** @type {?} */var weekdayActual=new Date(parsedInput[0],parsedInput[1],parsedInput[2]).getDay();if(weekdayProvided!==weekdayActual){getParsingFlags(config).weekdayMismatch=true;config._isValid=false;return false}}return true}/**
 * @param {?} obsOffset
 * @param {?} militaryOffset
 * @param {?} numOffset
 * @return {?}
 */function calculateOffset(obsOffset,militaryOffset,numOffset){if(obsOffset){return obsOffsets[obsOffset]}else if(militaryOffset){// the only allowed military tz is Z
return 0}else{/** @type {?} */var hm=parseInt(numOffset,10);/** @type {?} */var m=hm%100;/** @type {?} */var h=(hm-m)/100;return h*60+m}}// date and time from ref 2822 format
/**
 * @param {?} config
 * @return {?}
 */function configFromRFC2822(config){if(!isString(config._i)){return config}/** @type {?} */var match=rfc2822.exec(preprocessRFC2822(config._i));if(!match){return markInvalid(config)}/** @type {?} */var parsedArray=extractFromRFC2822Strings(match[4],match[3],match[2],match[5],match[6],match[7]);if(!checkWeekday(match[1],parsedArray,config)){return config}config._a=parsedArray;config._tzm=calculateOffset(match[8],match[9],match[10]);config._d=createUTCDate.apply(null,config._a);config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm);getParsingFlags(config).rfc2822=true;return config}// date from iso format or fallback
/**
 * @param {?} config
 * @return {?}
 */function configFromString(config){if(!isString(config._i)){return config}/** @type {?} */var matched=aspNetJsonRegex.exec(config._i);if(matched!==null){config._d=new Date(+matched[1]);return config}// todo: update logic processing
// isISO -> configFromISO
// isRFC -> configFromRFC
configFromISO(config);if(config._isValid===false){delete config._isValid}else{return config}configFromRFC2822(config);if(config._isValid===false){delete config._isValid}else{return config}// Final attempt, use Input Fallback
// hooks.createFromInputFallback(config);
return createInvalid(config)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} date
 * @param {?} format
 * @param {?=} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */function formatDate(date,format,locale,isUTC,offset){if(offset===void 0){offset=0}/** @type {?} */var _locale=getLocale(locale||"en");if(!_locale){throw new Error("Locale \""+locale+"\" is not defined, please add it with \"defineLocale(...)\"")}/** @type {?} */var _format=format||(isUTC?"YYYY-MM-DDTHH:mm:ss[Z]":"YYYY-MM-DDTHH:mm:ssZ");/** @type {?} */var output=formatMoment(date,_format,_locale,isUTC,offset);if(!output){return output}return _locale.postformat(output)}// format date using native date object
/**
 * @param {?} date
 * @param {?} _format
 * @param {?} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */function formatMoment(date,_format,locale,isUTC,offset){if(offset===void 0){offset=0}if(!isDateValid(date)){return locale.invalidDate}/** @type {?} */var format=expandFormat(_format,locale);formatFunctions[format]=formatFunctions[format]||makeFormatFunction(format);return formatFunctions[format](date,locale,isUTC,offset)}/**
 * @param {?} _format
 * @param {?} locale
 * @return {?}
 */function expandFormat(_format,locale){/** @type {?} */var format=_format;/** @type {?} */var i=5;/** @type {?} */var localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;/** @type {?} */var replaceLongDateFormatTokens=/**
     * @param {?} input
     * @return {?}
     */function replaceLongDateFormatTokens(input){return locale.formatLongDate(input)||input};localFormattingTokens.lastIndex=0;while(i>=0&&localFormattingTokens.test(format)){format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex=0;i-=1}return format}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // Pick the first defined of two or three arguments.
/**
 * @template T
 * @param {?=} a
 * @param {?=} b
 * @param {?=} c
 * @return {?}
 */function defaults(a,b,c){if(a!=null){return a}if(b!=null){return b}return c}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} config
 * @return {?}
 */function currentDateArray(config){/** @type {?} */var nowValue=new Date;if(config._useUTC){return[nowValue.getUTCFullYear(),nowValue.getUTCMonth(),nowValue.getUTCDate()]}return[nowValue.getFullYear(),nowValue.getMonth(),nowValue.getDate()]}// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
/**
 * @param {?} config
 * @return {?}
 */function configFromArray(config){/** @type {?} */var input=[];/** @type {?} */var i;/** @type {?} */var date;/** @type {?} */var currentDate;/** @type {?} */var expectedWeekday;/** @type {?} */var yearToUse;if(config._d){return config}currentDate=currentDateArray(config);// compute day of the year from weeks and weekdays
if(config._w&&config._a[DATE]==null&&config._a[MONTH]==null){dayOfYearFromWeekInfo(config)}// if the day of the year is set, figure out what it is
if(config._dayOfYear!=null){yearToUse=defaults(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear>daysInYear(yearToUse)||config._dayOfYear===0){getParsingFlags(config)._overflowDayOfYear=true}date=new Date(Date.UTC(yearToUse,0,config._dayOfYear));config._a[MONTH]=date.getUTCMonth();config._a[DATE]=date.getUTCDate()}// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(i=0;i<3&&config._a[i]==null;++i){config._a[i]=input[i]=currentDate[i]}// Zero out whatever was not defaulted, including time
for(;i<7;i++){config._a[i]=input[i]=config._a[i]==null?i===2?1:0:config._a[i]}// Check for 24:00:00.000
if(config._a[HOUR]===24&&config._a[MINUTE]===0&&config._a[SECOND]===0&&config._a[MILLISECOND]===0){config._nextDay=true;config._a[HOUR]=0}config._d=(config._useUTC?createUTCDate:createDate).apply(null,input);expectedWeekday=config._useUTC?config._d.getUTCDay():config._d.getDay();// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
if(config._tzm!=null){config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm)}if(config._nextDay){config._a[HOUR]=24}// check for mismatching day of week
if(config._w&&typeof config._w.d!=="undefined"&&config._w.d!==expectedWeekday){getParsingFlags(config).weekdayMismatch=true}return config}/**
 * @param {?} config
 * @return {?}
 */function dayOfYearFromWeekInfo(config){/** @type {?} */var w;/** @type {?} */var weekYear;/** @type {?} */var week;/** @type {?} */var weekday;/** @type {?} */var dow;/** @type {?} */var doy;/** @type {?} */var temp;/** @type {?} */var weekdayOverflow;w=config._w;if(w.GG!=null||w.W!=null||w.E!=null){dow=1;doy=4;// TODO: We need to take the current isoWeekYear, but that depends on
// how we interpret now (local, utc, fixed offset). So create
// a now version of current config (take local/utc/offset flags, and
// create now).
weekYear=defaults(w.GG,config._a[YEAR],weekOfYear(new Date,1,4).year);week=defaults(w.W,1);weekday=defaults(w.E,1);if(weekday<1||weekday>7){weekdayOverflow=true}}else{dow=config._locale._week.dow;doy=config._locale._week.doy;/** @type {?} */var curWeek=weekOfYear(new Date,dow,doy);weekYear=defaults(w.gg,config._a[YEAR],curWeek.year);// Default to current week.
week=defaults(w.w,curWeek.week);if(w.d!=null){// weekday -- low day numbers are considered next week
weekday=w.d;if(weekday<0||weekday>6){weekdayOverflow=true}}else if(w.e!=null){// local weekday -- counting starts from begining of week
weekday=w.e+dow;if(w.e<0||w.e>6){weekdayOverflow=true}}else{// default to begining of week
weekday=dow}}if(week<1||week>weeksInYear(weekYear,dow,doy)){getParsingFlags(config)._overflowWeeks=true}else if(weekdayOverflow!=null){getParsingFlags(config)._overflowWeekday=true}else{temp=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy);config._a[YEAR]=temp.year;config._dayOfYear=temp.dayOfYear}return config}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} config
 * @return {?}
 */function checkOverflow(config){/** @type {?} */var overflow;/** @type {?} */var a=config._a;if(a&&getParsingFlags(config).overflow===-2){// todo: fix this sh*t
overflow=a[MONTH]<0||a[MONTH]>11?MONTH:a[DATE]<1||a[DATE]>daysInMonth(a[YEAR],a[MONTH])?DATE:a[HOUR]<0||a[HOUR]>24||a[HOUR]===24&&(a[MINUTE]!==0||a[SECOND]!==0||a[MILLISECOND]!==0)?HOUR:a[MINUTE]<0||a[MINUTE]>59?MINUTE:a[SECOND]<0||a[SECOND]>59?SECOND:a[MILLISECOND]<0||a[MILLISECOND]>999?MILLISECOND:-1;if(getParsingFlags(config)._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)){overflow=DATE}if(getParsingFlags(config)._overflowWeeks&&overflow===-1){overflow=WEEK}if(getParsingFlags(config)._overflowWeekday&&overflow===-1){overflow=WEEKDAY}getParsingFlags(config).overflow=overflow}return config}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // constant that refers to the ISO standard
// hooks.ISO_8601 = function () {};
/** @type {?} */var ISO_8601="ISO_8601";// constant that refers to the RFC 2822 form
// hooks.RFC_2822 = function () {};
/** @type {?} */var RFC_2822="RFC_2822";// date from string and format string
/**
 * @param {?} config
 * @return {?}
 */function configFromStringAndFormat(config){// TODO: Move this to another part of the creation flow to prevent circular deps
if(config._f===ISO_8601){return configFromISO(config)}if(config._f===RFC_2822){return configFromRFC2822(config)}config._a=[];getParsingFlags(config).empty=true;if(isArray(config._f)||!config._i&&config._i!==0){return config}// This array is used to make a Date, either with `new Date` or `Date.UTC`
/** @type {?} */var input=config._i.toString();/** @type {?} */var totalParsedInputLength=0;/** @type {?} */var inputLength=input.length;/** @type {?} */var tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[];/** @type {?} */var i;/** @type {?} */var token;/** @type {?} */var parsedInput;/** @type {?} */var skipped;for(i=0;i<tokens.length;i++){token=tokens[i];parsedInput=(input.match(getParseRegexForToken(token,config._locale))||[])[0];if(parsedInput){skipped=input.substr(0,input.indexOf(parsedInput));if(skipped.length>0){getParsingFlags(config).unusedInput.push(skipped)}input=input.slice(input.indexOf(parsedInput)+parsedInput.length);totalParsedInputLength+=parsedInput.length}// don't parse if it's not a known token
if(formatTokenFunctions[token]){if(parsedInput){getParsingFlags(config).empty=false}else{getParsingFlags(config).unusedTokens.push(token)}addTimeToArrayFromToken(token,parsedInput,config)}else if(config._strict&&!parsedInput){getParsingFlags(config).unusedTokens.push(token)}}// add remaining unparsed input length to the string
getParsingFlags(config).charsLeftOver=inputLength-totalParsedInputLength;if(input.length>0){getParsingFlags(config).unusedInput.push(input)}// clear _12h flag if hour is <= 12
if(config._a[HOUR]<=12&&getParsingFlags(config).bigHour===true&&config._a[HOUR]>0){getParsingFlags(config).bigHour=void 0}getParsingFlags(config).parsedDateParts=config._a.slice(0);getParsingFlags(config).meridiem=config._meridiem;// handle meridiem
config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);configFromArray(config);return checkOverflow(config)}/**
 * @param {?} locale
 * @param {?} _hour
 * @param {?} meridiem
 * @return {?}
 */function meridiemFixWrap(locale,_hour,meridiem){/** @type {?} */var hour=_hour;if(meridiem==null){// nothing to do
return hour}if(locale.meridiemHour!=null){return locale.meridiemHour(hour,meridiem)}if(locale.isPM==null){// this is not supposed to happen
return hour}// Fallback
/** @type {?} */var isPm=locale.isPM(meridiem);if(isPm&&hour<12){hour+=12}if(!isPm&&hour===12){hour=0}return hour}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // date from string and array of format strings
/**
 * @param {?} config
 * @return {?}
 */function configFromStringAndArray(config){/** @type {?} */var tempConfig;/** @type {?} */var bestMoment;/** @type {?} */var scoreToBeat;/** @type {?} */var currentScore;if(!config._f||config._f.length===0){getParsingFlags(config).invalidFormat=true;return createInvalid(config)}/** @type {?} */var i;for(i=0;i<config._f.length;i++){currentScore=0;tempConfig=Object.assign({},config);if(config._useUTC!=null){tempConfig._useUTC=config._useUTC}tempConfig._f=config._f[i];configFromStringAndFormat(tempConfig);if(!isValid(tempConfig)){continue}// if there is any input that was not parsed add a penalty for that format
currentScore+=getParsingFlags(tempConfig).charsLeftOver;// or tokens
currentScore+=getParsingFlags(tempConfig).unusedTokens.length*10;getParsingFlags(tempConfig).score=currentScore;if(scoreToBeat==null||currentScore<scoreToBeat){scoreToBeat=currentScore;bestMoment=tempConfig}}return Object.assign(config,bestMoment||tempConfig)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} config
 * @return {?}
 */function configFromObject(config){if(config._d){return config}/** @type {?} */var input=config._i;if(isObject(input)){/** @type {?} */var i=normalizeObjectUnits(/** @type {?} */input);config._a=[i.year,i.month,i.day,i.hours,i.minutes,i.seconds,i.milliseconds]// todo: obsolete -> remove it
.map(/**
         * @param {?} obj
         * @return {?}
         */function(obj){return isString(obj)?parseInt(obj,10):obj})}return configFromArray(config)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} config
 * @return {?}
 */function createFromConfig(config){/** @type {?} */var res=checkOverflow(prepareConfig(config));// todo: remove, in moment.js it's never called cuz of moment constructor
res._d=new Date(res._d!=null?res._d.getTime():NaN);if(!isValid(Object.assign({},res,{_isValid:null}))){res._d=new Date(NaN)}// todo: update offset
/*if (res._nextDay) {
      // Adding is smart enough around DST
      res._d = add(res._d, 1, 'day');
      res._nextDay = undefined;
    }*/return res}/**
 * @param {?} config
 * @return {?}
 */function prepareConfig(config){/** @type {?} */var input=config._i;/** @type {?} */var format=config._f;config._locale=config._locale||getLocale(config._l);if(input===null||format===undefined&&input===""){return createInvalid(config,{nullInput:true})}if(isString(input)){config._i=input=config._locale.preparse(input)}if(isDate(input)){config._d=cloneDate(input);return config}// todo: add check for recursion
if(isArray(format)){configFromStringAndArray(config)}else if(format){configFromStringAndFormat(config)}else{configFromInput(config)}if(!isValid(config)){config._d=null}return config}/**
 * @param {?} config
 * @return {?}
 */function configFromInput(config){/** @type {?} */var input=config._i;if(isUndefined(input)){config._d=new Date}else if(isDate(input)){config._d=cloneDate(input)}else if(isString(input)){configFromString(config)}else if(isArray(input)&&input.length){/** @type {?} */var _arr=input.slice(0);config._a=_arr.map(/**
         * @param {?} obj
         * @return {?}
         */function(obj){return isString(obj)?parseInt(obj,10):obj});configFromArray(config)}else if(isObject(input)){configFromObject(config)}else if(isNumber(input)){// from milliseconds
config._d=new Date(input)}else{//   hooks.createFromInputFallback(config);
return createInvalid(config)}return config}/**
 * @param {?} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */function createLocalOrUTC(input,format,localeKey,strict,isUTC){/** @type {?} */var config={};/** @type {?} */var _input=input;// params switch -> skip; test it well
// if (localeKey === true || localeKey === false) {
//     strict = localeKey;
//     localeKey = undefined;
// }
// todo: fail fast and return not valid date
if(isObject(_input)&&isObjectEmpty(_input)||isArray(_input)&&_input.length===0){_input=undefined}// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
// config._isAMomentObject = true;
config._useUTC=config._isUTC=isUTC;config._l=localeKey;config._i=_input;config._f=format;config._strict=strict;return createFromConfig(config)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */function parseDate(input,format,localeKey,strict,isUTC){if(isDate(input)){return input}/** @type {?} */var config=createLocalOrUTC(input,format,localeKey,strict,isUTC);return config._d}/**
 * @param {?} date
 * @return {?}
 */function utcAsLocal(date){if(!(date instanceof Date)){return null}return new Date(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds(),date.getUTCMilliseconds())}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} num
 * @return {?}
 */function absRound(num){return num<0?Math.round(num*-1)*-1:Math.round(num)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */function isAfter(date1,date2,units){if(units===void 0){units="milliseconds"}if(!date1||!date2){return false}if(units==="milliseconds"){return date1.valueOf()>date2.valueOf()}return date2.valueOf()<startOf(date1,units).valueOf()}/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */function isBefore(date1,date2,units){if(units===void 0){units="milliseconds"}if(!date1||!date2){return false}if(units==="milliseconds"){return date1.valueOf()<date2.valueOf()}return endOf(date1,units).valueOf()<date2.valueOf()}/**
 * @param {?} date
 * @param {?} daysDisabled
 * @return {?}
 */function isDisabledDay(date,daysDisabled){if(daysDisabled===undefined||!daysDisabled||!daysDisabled.length){return false}return daysDisabled.some(/**
     * @param {?} day
     * @return {?}
     */function(day){return day===date.getDay()})}/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */function isSame(date1,date2,units){if(units===void 0){units="milliseconds"}if(!date1||!date2){return false}if(units==="milliseconds"){return date1.valueOf()===date2.valueOf()}/** @type {?} */var inputMs=date2.valueOf();return startOf(date1,units).valueOf()<=inputMs&&inputMs<=endOf(date1,units).valueOf()}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var aspNetRegex=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
// tslint:disable-next-line
/** @type {?} */var isoRegex=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;/**
 * @param {?=} input
 * @param {?=} key
 * @param {?=} config
 * @return {?}
 */function createDuration(input,key,config){if(config===void 0){config={}}/** @type {?} */var duration=convertDuration(input,key);// matching against regexp is expensive, do it on demand
return new Duration(duration,config)}/**
 * @param {?} input
 * @param {?} key
 * @return {?}
 */function convertDuration(input,key){// checks for null or undefined
if(input==null){return{}}if(isDuration(input)){return{milliseconds:input._milliseconds,day:input._days,month:input._months}}if(isNumber(input)){var _ref;// duration = {};
return key?(_ref={},_ref[key]=input,_ref):{milliseconds:input}}if(isString(input)){/** @type {?} */var match=aspNetRegex.exec(input);if(match){/** @type {?} */var sign=match[1]==="-"?-1:1;return{year:0,day:toInt(match[DATE])*sign,hours:toInt(match[HOUR])*sign,minutes:toInt(match[MINUTE])*sign,seconds:toInt(match[SECOND])*sign,// the millisecond decimal point is included in the match
milliseconds:toInt(absRound(toInt(match[MILLISECOND])*1000))*sign}}match=isoRegex.exec(input);if(match){/** @type {?} */var _sign2=match[1]==="-"?-1:match[1]==="+"?1:1;return{year:parseIso(match[2],_sign2),month:parseIso(match[3],_sign2),week:parseIso(match[4],_sign2),day:parseIso(match[5],_sign2),hours:parseIso(match[6],_sign2),minutes:parseIso(match[7],_sign2),seconds:parseIso(match[8],_sign2)}}}if(isObject(input)&&("from"in input||"to"in input)){/** @type {?} */var diffRes=momentsDifference(parseDate(input.from),parseDate(input.to));return{milliseconds:diffRes.milliseconds,month:diffRes.months}}return input}// createDuration.fn = Duration.prototype;
// createDuration.invalid = invalid;
/**
 * @param {?} inp
 * @param {?} sign
 * @return {?}
 */function parseIso(inp,sign){// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
/** @type {?} */var res=inp&&parseFloat(inp.replace(",","."));// apply sign while we're at it
return(isNaN(res)?0:res)*sign}/**
 * @param {?} base
 * @param {?} other
 * @return {?}
 */function positiveMomentsDifference(base,other){/** @type {?} */var res={milliseconds:0,months:0};res.months=getMonth(other)-getMonth(base)+(getFullYear(other)-getFullYear(base))*12;/** @type {?} */var _basePlus=add(cloneDate(base),res.months,"month");if(isAfter(_basePlus,other)){--res.months}res.milliseconds=+other-+add(cloneDate(base),res.months,"month");return res}/**
 * @param {?} base
 * @param {?} other
 * @return {?}
 */function momentsDifference(base,other){if(!(isDateValid(base)&&isDateValid(other))){return{milliseconds:0,months:0}}/** @type {?} */var res;/** @type {?} */var _other=cloneWithOffset(other,base,{_offset:base.getTimezoneOffset()});if(isBefore(base,_other)){res=positiveMomentsDifference(base,_other)}else{res=positiveMomentsDifference(_other,base);res.milliseconds=-res.milliseconds;res.months=-res.months}return res}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} date
 * @param {?} val
 * @param {?} period
 * @param {?=} isUTC
 * @return {?}
 */function add(date,val,period,isUTC){/** @type {?} */var dur=createDuration(val,period);return addSubtract(date,dur,1,isUTC)}/**
 * @param {?} date
 * @param {?} val
 * @param {?} period
 * @param {?=} isUTC
 * @return {?}
 */function subtract(date,val,period,isUTC){/** @type {?} */var dur=createDuration(val,period);return addSubtract(date,dur,-1,isUTC)}/**
 * @param {?} date
 * @param {?} duration
 * @param {?} isAdding
 * @param {?=} isUTC
 * @return {?}
 */function addSubtract(date,duration,isAdding,isUTC){/** @type {?} */var milliseconds=duration._milliseconds;/** @type {?} */var days=absRound(duration._days);/** @type {?} */var months=absRound(duration._months);// todo: add timezones support
// const _updateOffset = updateOffset == null ? true : updateOffset;
if(months){setMonth(date,getMonth(date,isUTC)+months*isAdding,isUTC)}if(days){setDate(date,getDate(date,isUTC)+days*isAdding,isUTC)}if(milliseconds){setTime(date,getTime(date)+milliseconds*isAdding)}return cloneDate(date);// todo: add timezones support
// if (_updateOffset) {
//   hooks.updateOffset(date, days || months);
// }
}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @return {?}
 */function initDayOfWeek(){// FORMATTING
addFormatToken("d",null,"do",/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return getDay(date,opts.isUTC).toString(10)});addFormatToken("dd",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return opts.locale.weekdaysMin(date,opts.format,opts.isUTC)});addFormatToken("ddd",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return opts.locale.weekdaysShort(date,opts.format,opts.isUTC)});addFormatToken("dddd",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return opts.locale.weekdays(date,opts.format,opts.isUTC)});addFormatToken("e",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return getLocaleDayOfWeek(date,opts.locale,opts.isUTC).toString(10);// return getDay(date, opts.isUTC).toString(10);
});addFormatToken("E",null,null,/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */function(date,opts){return getISODayOfWeek(date,opts.isUTC).toString(10)});// ALIASES
addUnitAlias("day","d");addUnitAlias("weekday","e");addUnitAlias("isoWeekday","E");// PARSING
addRegexToken("d",match1to2);addRegexToken("e",match1to2);addRegexToken("E",match1to2);addRegexToken("dd",/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */function(isStrict,locale){return locale.weekdaysMinRegex(isStrict)});addRegexToken("ddd",/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */function(isStrict,locale){return locale.weekdaysShortRegex(isStrict)});addRegexToken("dddd",/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */function(isStrict,locale){return locale.weekdaysRegex(isStrict)});addWeekParseToken(["dd","ddd","dddd"],/**
     * @param {?} input
     * @param {?} week
     * @param {?} config
     * @param {?} token
     * @return {?}
     */function(input,week,config,token){/** @type {?} */var weekday=config._locale.weekdaysParse(input,token,config._strict);// if we didn't get a weekday name, mark the date as invalid
if(weekday!=null){week.d=weekday}else{getParsingFlags(config).invalidWeekday=!!input}return config});addWeekParseToken(["d","e","E"],/**
     * @param {?} input
     * @param {?} week
     * @param {?} config
     * @param {?} token
     * @return {?}
     */function(input,week,config,token){week[token]=toInt(input);return config})}// HELPERS
/**
 * @param {?} input
 * @param {?} locale
 * @return {?}
 */function parseWeekday(input,locale){if(!isString(input)){return input}/** @type {?} */var _num=parseInt(input,10);if(!isNaN(_num)){return _num}/** @type {?} */var _weekDay=locale.weekdaysParse(input);if(isNumber(_weekDay)){return _weekDay}return null}/**
 * @param {?} input
 * @param {?=} locale
 * @return {?}
 */function parseIsoWeekday(input,locale){if(locale===void 0){locale=getLocale()}if(isString(input)){return locale.weekdaysParse(input)%7||7}return isNumber(input)&&isNaN(input)?null:input}/**
 * @param {?} date
 * @param {?} input
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */function setDayOfWeek(date,input,locale,isUTC){if(locale===void 0){locale=getLocale()}/** @type {?} */var day=getDay(date,isUTC);/** @type {?} */var _input=parseWeekday(input,locale);return add(date,_input-day,"day")}/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */function getDayOfWeek(date,isUTC){return getDay(date,isUTC)}/**
 * ****************************************
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */ // todo: utc
// getSetLocaleDayOfWeek
function getLocaleDayOfWeek(date,locale,isUTC){if(locale===void 0){locale=getLocale()}return(getDay(date,isUTC)+7-locale.firstDayOfWeek())%7}/**
 * @param {?} date
 * @param {?} input
 * @param {?=} opts
 * @return {?}
 */function setLocaleDayOfWeek(date,input,opts){if(opts===void 0){opts={}}/** @type {?} */var weekday=getLocaleDayOfWeek(date,opts.locale,opts.isUTC);return add(date,input-weekday,"day")}// getSetISODayOfWeek
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */function getISODayOfWeek(date,isUTC){return getDay(date,isUTC)||7}/**
 * @param {?} date
 * @param {?} input
 * @param {?=} opts
 * @return {?}
 */function setISODayOfWeek(date,input,opts){if(opts===void 0){opts={}}// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
/** @type {?} */var weekday=parseIsoWeekday(input,opts.locale);return setDayOfWeek(date,getDayOfWeek(date)%7?weekday:weekday-7)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
//! moment.js locale configuration
//! locale : Arabic [ar]
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi
/** @type {?} */var symbolMap={1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669",0:"\u0660"};/** @type {?} */var numberMap={"\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u0660":"0"};/** @type {?} */var pluralForm=/**
 * @param {?} num
 * @return {?}
 */function pluralForm(num){return num===0?0:num===1?1:num===2?2:num%100>=3&&num%100<=10?3:num%100>=11?4:5};/** @type {?} */var plurals={s:["\u0623\u0642\u0644 \u0645\u0646 \u062B\u0627\u0646\u064A\u0629","\u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629",["\u062B\u0627\u0646\u064A\u062A\u0627\u0646","\u062B\u0627\u0646\u064A\u062A\u064A\u0646"],"%d \u062B\u0648\u0627\u0646","%d \u062B\u0627\u0646\u064A\u0629","%d \u062B\u0627\u0646\u064A\u0629"],m:["\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u0629","\u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629",["\u062F\u0642\u064A\u0642\u062A\u0627\u0646","\u062F\u0642\u064A\u0642\u062A\u064A\u0646"],"%d \u062F\u0642\u0627\u0626\u0642","%d \u062F\u0642\u064A\u0642\u0629","%d \u062F\u0642\u064A\u0642\u0629"],h:["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629",["\u0633\u0627\u0639\u062A\u0627\u0646","\u0633\u0627\u0639\u062A\u064A\u0646"],"%d \u0633\u0627\u0639\u0627\u062A","%d \u0633\u0627\u0639\u0629","%d \u0633\u0627\u0639\u0629"],d:["\u0623\u0642\u0644 \u0645\u0646 \u064A\u0648\u0645","\u064A\u0648\u0645 \u0648\u0627\u062D\u062F",["\u064A\u0648\u0645\u0627\u0646","\u064A\u0648\u0645\u064A\u0646"],"%d \u0623\u064A\u0627\u0645","%d \u064A\u0648\u0645\u064B\u0627","%d \u064A\u0648\u0645"],M:["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631","\u0634\u0647\u0631 \u0648\u0627\u062D\u062F",["\u0634\u0647\u0631\u0627\u0646","\u0634\u0647\u0631\u064A\u0646"],"%d \u0623\u0634\u0647\u0631","%d \u0634\u0647\u0631\u0627","%d \u0634\u0647\u0631"],y:["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645","\u0639\u0627\u0645 \u0648\u0627\u062D\u062F",["\u0639\u0627\u0645\u0627\u0646","\u0639\u0627\u0645\u064A\u0646"],"%d \u0623\u0639\u0648\u0627\u0645","%d \u0639\u0627\u0645\u064B\u0627","%d \u0639\u0627\u0645"]};/** @type {?} */var pluralize=/**
 * @param {?} u
 * @return {?}
 */function pluralize(u){return(/**
     * @param {?} num
     * @param {?} withoutSuffix
     * @return {?}
     */function(num,withoutSuffix){/** @type {?} */var f=pluralForm(num);/** @type {?} */var str=plurals[u][pluralForm(num)];if(f===2){str=str[withoutSuffix?0:1]}return(/** @type {?} */str.replace(/%d/i,num.toString()))})};/** @type {?} */var months=["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"];/** @type {?} */var arLocale={abbr:"ar",months:months,monthsShort:months,weekdays:"\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"),weekdaysShort:"\u0623\u062D\u062F_\u0625\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"),weekdaysMin:"\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/\u200FM/\u200FYYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,/**
     * @param {?} input
     * @return {?}
     */isPM:function isPM(input){return"\u0645"===input},/**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */meridiem:function meridiem(hour,minute,isLower){if(hour<12){return"\u0635"}else{return"\u0645"}},calendar:{sameDay:"[\u0627\u0644\u064A\u0648\u0645 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063A\u062F\u064B\u0627 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0628\u0639\u062F %s",past:"\u0645\u0646\u0630 %s",s:pluralize("s"),ss:pluralize("s"),m:pluralize("m"),mm:pluralize("m"),h:pluralize("h"),hh:pluralize("h"),d:pluralize("d"),dd:pluralize("d"),M:pluralize("M"),MM:pluralize("M"),y:pluralize("y"),yy:pluralize("y")},/**
     * @param {?} str
     * @return {?}
     */preparse:function preparse(str){return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g,/**
         * @param {?} match
         * @return {?}
         */function(match){return numberMap[match]}).replace(/،/g,",")},/**
     * @param {?} str
     * @return {?}
     */postformat:function postformat(str){return str.replace(/\d/g,/**
         * @param {?} match
         * @return {?}
         */function(match){return symbolMap[match]}).replace(/,/g,"\u060C")},week:{dow:6,// Saturday is the first day of the week.
doy:12// The week that contains Jan 1st is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Iskren Ivov Chernev : https://github.com/ichernev
//! author : Kunal Marwaha : https://github.com/marwahaha
//! author : Matt Grande : https://github.com/mattgrande
//! author : Isaac Cambron : https://github.com/icambron
//! author : Venelin Manchev : https://github.com/vmanchev
var ɵ0$1=/**
 * @param {?} d
 * @return {?}
 */function ɵ0$1(d){switch(d){case 0:case 3:case 6:return"[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430] dddd [\u0432] LT";case 1:case 2:case 4:case 5:return"[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0438\u044F] dddd [\u0432] LT";}};/** @type {?} */var bgLocale={abbr:"bg",months:"\u044F\u043D\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438_\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438_\u043D\u043E\u0435\u043C\u0432\u0440\u0438_\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438".split("_"),monthsShort:"\u044F\u043D\u0440_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433_\u0441\u0435\u043F_\u043E\u043A\u0442_\u043D\u043E\u0435_\u0434\u0435\u043A".split("_"),weekdays:"\u043D\u0435\u0434\u0435\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u044F\u0434\u0430_\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A_\u043F\u0435\u0442\u044A\u043A_\u0441\u044A\u0431\u043E\u0442\u0430".split("_"),weekdaysShort:"\u043D\u0435\u0434_\u043F\u043E\u043D_\u0432\u0442\u043E_\u0441\u0440\u044F_\u0447\u0435\u0442_\u043F\u0435\u0442_\u0441\u044A\u0431".split("_"),weekdaysMin:"\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[\u0414\u043D\u0435\u0441 \u0432] LT",nextDay:"[\u0423\u0442\u0440\u0435 \u0432] LT",nextWeek:"dddd [\u0432] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",lastWeek:ɵ0$1,sameElse:"L"},relativeTime:{future:"\u0441\u043B\u0435\u0434 %s",past:"\u043F\u0440\u0435\u0434\u0438 %s",s:"\u043D\u044F\u043A\u043E\u043B\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438",ss:"%d \u0441\u0435\u043A\u0443\u043D\u0434\u0438",m:"\u043C\u0438\u043D\u0443\u0442\u0430",mm:"%d \u043C\u0438\u043D\u0443\u0442\u0438",h:"\u0447\u0430\u0441",hh:"%d \u0447\u0430\u0441\u0430",d:"\u0434\u0435\u043D",dd:"%d \u0434\u043D\u0438",M:"\u043C\u0435\u0441\u0435\u0446",MM:"%d \u043C\u0435\u0441\u0435\u0446\u0430",y:"\u0433\u043E\u0434\u0438\u043D\u0430",yy:"%d \u0433\u043E\u0434\u0438\u043D\u0438"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:/**
     * @param {?} _num
     * @return {?}
     */function ordinal(_num){/** @type {?} */var number=Number(_num);/** @type {?} */var lastDigit=number%10;/** @type {?} */var last2Digits=number%100;if(number===0){return number+"-\u0435\u0432"}else if(last2Digits===0){return number+"-\u0435\u043D"}else if(last2Digits>10&&last2Digits<20){return number+"-\u0442\u0438"}else if(lastDigit===1){return number+"-\u0432\u0438"}else if(lastDigit===2){return number+"-\u0440\u0438"}else if(lastDigit===7||lastDigit===8){return number+"-\u043C\u0438"}else{return number+"-\u0442\u0438"}},week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Catalan [ca]
//! author : Xavier Arbat : https://github.com/XavisaurusRex
/** @type {?} */var monthsShortDot="gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.".split("_");/** @type {?} */var _monthsShort="ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des".split("_");/** @type {?} */var monthsParse=[/^gen/i,/^feb/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^oct/i,/^nov/i,/^des/i];/** @type {?} */var monthsRegex=/^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre|gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i;/** @type {?} */var caLocale={abbr:"ca",months:"gener_febrer_mar\xE7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),/**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */monthsShort:function monthsShort(date,format,isUTC){if(!date){return monthsShortDot}if(/-MMM-/.test(format)){return _monthsShort[getMonth(date,isUTC)]}return monthsShortDot[getMonth(date,isUTC)]},monthsRegex:monthsRegex,monthsShortRegex:monthsRegex,monthsStrictRegex:/^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i,monthsShortStrictRegex:/^(gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,monthsParse:monthsParse,longMonthsParse:monthsParse,shortMonthsParse:monthsParse,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"diu._dil._dim._dix._dij._div._dis.".split("_"),weekdaysMin:"dg_dl_dt_dc_dj_dv_ds".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{/**
         * @param {?} date
         * @return {?}
         */sameDay:function sameDay(date){return"[avui a "+(true?"les":undefined)+"] LT"},/**
         * @param {?} date
         * @return {?}
         */nextDay:function nextDay(date){return"[dema a "+(true?"les":undefined)+"] LT"},/**
         * @param {?} date
         * @return {?}
         */nextWeek:function nextWeek(date){return"dddd [a "+(true?"les":undefined)+"] LT"},/**
         * @param {?} date
         * @return {?}
         */lastDay:function lastDay(date){return"[ahir a "+(true?"les":undefined)+"] LT"},/**
         * @param {?} date
         * @return {?}
         */lastWeek:function lastWeek(date){return"[el] dddd ["+(true?"passades les":undefined)+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",ss:"%d segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(er|on|er|rt|é)/,/**
     * @param {?} _num
     * @return {?}
     */ordinal:function ordinal(_num){/** @type {?} */var num=Number(_num);/** @type {?} */var output=num>4?"\xE9":num===1||num===3?"r":num===2?"n":num===4?"t":"\xE9";return num+output},week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela
/** @type {?} */var months$1="leden_\xFAnor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\xE1\u0159\xED_\u0159\xEDjen_listopad_prosinec".split("_");/** @type {?} */var monthsShort$1="led_\xFAno_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\xE1\u0159_\u0159\xEDj_lis_pro".split("_");/**
 * @param {?} num
 * @return {?}
 */function plural(num){return num>1&&num<5&&~~(num/10)!==1}/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */function translate(num,withoutSuffix,key,isFuture){/** @type {?} */var result=num+" ";switch(key){case"s":// a few seconds / in a few seconds / a few seconds ago
return withoutSuffix||isFuture?"p\xE1r sekund":"p\xE1r sekundami";case"ss":// 9 seconds / in 9 seconds / 9 seconds ago
if(withoutSuffix||isFuture){return result+(plural(num)?"sekundy":"sekund")}else{return result+"sekundami"}// break;
case"m":// a minute / in a minute / a minute ago
return withoutSuffix?"minuta":isFuture?"minutu":"minutou";case"mm":// 9 minutes / in 9 minutes / 9 minutes ago
if(withoutSuffix||isFuture){return result+(plural(num)?"minuty":"minut")}else{return result+"minutami"}// break;
case"h":// an hour / in an hour / an hour ago
return withoutSuffix?"hodina":isFuture?"hodinu":"hodinou";case"hh":// 9 hours / in 9 hours / 9 hours ago
if(withoutSuffix||isFuture){return result+(plural(num)?"hodiny":"hodin")}else{return result+"hodinami"}// break;
case"d":// a day / in a day / a day ago
return withoutSuffix||isFuture?"den":"dnem";case"dd":// 9 days / in 9 days / 9 days ago
if(withoutSuffix||isFuture){return result+(plural(num)?"dny":"dn\xED")}else{return result+"dny"}// break;
case"M":// a month / in a month / a month ago
return withoutSuffix||isFuture?"m\u011Bs\xEDc":"m\u011Bs\xEDcem";case"MM":// 9 months / in 9 months / 9 months ago
if(withoutSuffix||isFuture){return result+(plural(num)?"m\u011Bs\xEDce":"m\u011Bs\xEDc\u016F")}else{return result+"m\u011Bs\xEDci"}// break;
case"y":// a year / in a year / a year ago
return withoutSuffix||isFuture?"rok":"rokem";case"yy":// 9 years / in 9 years / 9 years ago
if(withoutSuffix||isFuture){return result+(plural(num)?"roky":"let")}else{return result+"lety"}// break;
}}var ɵ0$2=/**
 * @param {?} months
 * @param {?} monthsShort
 * @return {?}
 */function ɵ0$2(months,monthsShort){/** @type {?} */var i;/** @type {?} */var _monthsParse=[];for(i=0;i<12;i++){// use custom parser to solve problem with July (červenec)
_monthsParse[i]=new RegExp("^"+months[i]+"$|^"+monthsShort[i]+"$","i")}return _monthsParse},ɵ1=/**
 * @param {?} monthsShort
 * @return {?}
 */function ɵ1(monthsShort){/** @type {?} */var i;/** @type {?} */var _shortMonthsParse=[];for(i=0;i<12;i++){_shortMonthsParse[i]=new RegExp("^"+monthsShort[i]+"$","i")}return _shortMonthsParse},ɵ2=/**
 * @param {?} months
 * @return {?}
 */function ɵ2(months){/** @type {?} */var i;/** @type {?} */var _longMonthsParse=[];for(i=0;i<12;i++){_longMonthsParse[i]=new RegExp("^"+months[i]+"$","i")}return _longMonthsParse};/** @type {?} */var csLocale={abbr:"cs",months:months$1,monthsShort:monthsShort$1,monthsParse:ɵ0$2(months$1,monthsShort$1),shortMonthsParse:ɵ1(monthsShort$1),longMonthsParse:ɵ2(months$1),weekdays:"ned\u011Ble_pond\u011Bl\xED_\xFAter\xFD_st\u0159eda_\u010Dtvrtek_p\xE1tek_sobota".split("_"),weekdaysShort:"ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"),weekdaysMin:"ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[z\xEDtra v] LT",/**
         * @param {?} date
         * @return {?}
         */nextWeek:function nextWeek(date){switch(getDayOfWeek(date)){case 0:return"[v ned\u011Bli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve st\u0159edu v] LT";case 4:return"[ve \u010Dtvrtek v] LT";case 5:return"[v p\xE1tek v] LT";case 6:return"[v sobotu v] LT";}},lastDay:"[v\u010Dera v] LT",/**
         * @param {?} date
         * @return {?}
         */lastWeek:function lastWeek(date){switch(getDayOfWeek(date)){case 0:return"[minulou ned\u011Bli v] LT";case 1:case 2:return"[minul\xE9] dddd [v] LT";case 3:return"[minulou st\u0159edu v] LT";case 4:case 5:return"[minul\xFD] dddd [v] LT";case 6:return"[minulou sobotu v] LT";}},sameElse:"L"},relativeTime:{future:"za %s",past:"p\u0159ed %s",s:translate,ss:translate,m:translate,mm:translate,h:translate,hh:translate,d:translate,dd:translate,M:translate,MM:translate,y:translate,yy:translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format
//! moment.js locale configuration
//! locale : Danish (Denmark) [da]
//! author : Per Hansen : https://github.com/perhp
/** @type {?} */var daLocale={abbr:"da",months:"Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec".split("_"),weekdays:"S\xF8ndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_L\xF8rdag".split("_"),weekdaysShort:"S\xF8n_Man_Tir_Ons_Tor_Fre_L\xF8r".split("_"),weekdaysMin:"S\xF8_Ma_Ti_On_To_Fr_L\xF8".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"p\xE5 dddd [kl.] LT",lastDay:"[i g\xE5r kl.] LT",lastWeek:"[i] dddd[s kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"f\xE5 sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en m\xE5ned",MM:"%d m\xE5neder",y:"et \xE5r",yy:"%d \xE5r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-key-quotes
//! moment.js locale configuration
//! locale : German [de]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Mikolaj Dadela : https://github.com/mik01aj
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */function processRelativeTime(num,withoutSuffix,key,isFuture){/** @type {?} */var format={"m":["eine Minute","einer Minute"],"h":["eine Stunde","einer Stunde"],"d":["ein Tag","einem Tag"],"dd":[num+" Tage",num+" Tagen"],"M":["ein Monat","einem Monat"],"MM":[num+" Monate",num+" Monaten"],"y":["ein Jahr","einem Jahr"],"yy":[num+" Jahre",num+" Jahren"]};return withoutSuffix?format[key][0]:format[key][1]}/** @type {?} */var deLocale={abbr:"de",months:"Januar_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._M\xE4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:true,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:processRelativeTime,mm:"%d Minuten",h:processRelativeTime,hh:"%d Stunden",d:processRelativeTime,dd:processRelativeTime,M:processRelativeTime,MM:processRelativeTime,y:processRelativeTime,yy:processRelativeTime},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim
/** @type {?} */var enGbLocale={abbr:"en-gb",months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,/**
     * @param {?} _num
     * @return {?}
     */ordinal:function ordinal(_num){/** @type {?} */var num=Number(_num);/** @type {?} */var b=num%10;/** @type {?} */var output=~~(num%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th";return num+output},week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Spanish (Dominican Republic) [es-do]
/** @type {?} */var monthsShortDot$1="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");/** @type {?} */var monthsShort$2="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");/** @type {?} */var monthsParse$1=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i];/** @type {?} */var monthsRegex$1=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;/** @type {?} */var esDoLocale={abbr:"es-do",months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),/**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */monthsShort:function monthsShort(date,format,isUTC){if(!date){return monthsShortDot$1}else if(/-MMM-/.test(format)){return monthsShort$2[getMonth(date,isUTC)]}else{return monthsShortDot$1[getMonth(date,isUTC)]}},monthsRegex:monthsRegex$1,monthsShortRegex:monthsRegex$1,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:monthsParse$1,longMonthsParse:monthsParse$1,shortMonthsParse:monthsParse$1,weekdays:"domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xE1".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{/**
         * @param {?} date
         * @return {?}
         */sameDay:function sameDay(date){return"[hoy a la"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */nextDay:function nextDay(date){return"[ma\xF1ana a la"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */nextWeek:function nextWeek(date){return"dddd [a la"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */lastDay:function lastDay(date){return"[ayer a la"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */lastWeek:function lastWeek(date){return"[el] dddd [pasado a la"+(getHours(date)!==1?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xEDa",dd:"%d d\xEDas",M:"un mes",MM:"%d meses",y:"un a\xF1o",yy:"%d a\xF1os"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%d\xBA",week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc
/** @type {?} */var monthsShortDot$2="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");/** @type {?} */var monthsShort$3="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");/** @type {?} */var monthsParse$2=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i];/** @type {?} */var monthsRegex$2=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;/** @type {?} */var esLocale={abbr:"es",months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),/**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */monthsShort:function monthsShort(date,format,isUTC){if(!date){return monthsShortDot$2}if(/-MMM-/.test(format)){return monthsShort$3[getMonth(date,isUTC)]}return monthsShortDot$2[getMonth(date,isUTC)]},monthsRegex:monthsRegex$2,monthsShortRegex:monthsRegex$2,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:monthsParse$2,longMonthsParse:monthsParse$2,shortMonthsParse:monthsParse$2,weekdays:"domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xE1".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{/**
         * @param {?} date
         * @return {?}
         */sameDay:function sameDay(date){return"[hoy a la"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */nextDay:function nextDay(date){return"[ma\xF1ana a la"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */nextWeek:function nextWeek(date){return"dddd [a la"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */lastDay:function lastDay(date){return"[ayer a la"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */lastWeek:function lastWeek(date){return"[el] dddd [pasado a la"+(getHours(date)!==1?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xEDa",dd:"%d d\xEDas",M:"un mes",MM:"%d meses",y:"un a\xF1o",yy:"%d a\xF1os"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%d\xBA",week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Spanish (United States) [es-us]
//! author : bustta : https://github.com/bustta
/** @type {?} */var monthsShortDot$3="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");/** @type {?} */var monthsShort$4="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");/** @type {?} */var esUsLocale={abbr:"es-us",months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),/**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */monthsShort:function monthsShort(date,format,isUTC){if(!date){return monthsShortDot$3}else if(/-MMM-/.test(format)){return monthsShort$4[getMonth(date,isUTC)]}else{return monthsShortDot$3[getMonth(date,isUTC)]}},monthsParseExact:true,weekdays:"domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xE1".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"MMMM [de] D [de] YYYY",LLL:"MMMM [de] D [de] YYYY h:mm A",LLLL:"dddd, MMMM [de] D [de] YYYY h:mm A"},calendar:{/**
         * @param {?} date
         * @return {?}
         */sameDay:function sameDay(date){return"[hoy a la"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */nextDay:function nextDay(date){return"[ma\xF1ana a la"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */nextWeek:function nextWeek(date){return"dddd [a la"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */lastDay:function lastDay(date){return"[ayer a la"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */lastWeek:function lastWeek(date){return"[el] dddd [pasado a la"+(getHours(date)!==1?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xEDa",dd:"%d d\xEDas",M:"un mes",MM:"%d meses",y:"un a\xF1o",yy:"%d a\xF1os"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%d\xBA",week:{dow:0,// Sunday is the first day of the week.
doy:6// The week that contains Jan 1st is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Estonian [et]
//! author : Chris Gedrim : https://github.com/a90machado
/** @type {?} */var processRelativeTime$1=/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */function processRelativeTime$1(num,withoutSuffix,key,isFuture){/** @type {?} */var format={s:["m\xF5ne sekundi","m\xF5ni sekund","paar sekundit"],ss:[num+"sekundi",num+"sekundit"],m:["\xFChe minuti","\xFCks minut"],mm:[num+" minuti",num+" minutit"],h:["\xFChe tunni","tund aega","\xFCks tund"],hh:[num+" tunni",num+" tundi"],d:["\xFChe p\xE4eva","\xFCks p\xE4ev"],M:["kuu aja","kuu aega","\xFCks kuu"],MM:[num+" kuu",num+" kuud"],y:["\xFChe aasta","aasta","\xFCks aasta"],yy:[num+" aasta",num+" aastat"]};if(withoutSuffix){return format[key][2]?format[key][2]:format[key][1]}return isFuture?format[key][0]:format[key][1]};/** @type {?} */var etLocale={abbr:"et",months:"jaanuar_veebruar_m\xE4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_m\xE4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"p\xFChap\xE4ev_esmasp\xE4ev_teisip\xE4ev_kolmap\xE4ev_neljap\xE4ev_reede_laup\xE4ev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[T\xE4na,] LT",nextDay:"[Homme,] LT",nextWeek:"[J\xE4rgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s p\xE4rast",past:"%s tagasi",s:processRelativeTime$1,ss:processRelativeTime$1,m:processRelativeTime$1,mm:processRelativeTime$1,h:processRelativeTime$1,hh:processRelativeTime$1,d:processRelativeTime$1,dd:"%d p\xE4eva",M:processRelativeTime$1,MM:processRelativeTime$1,y:processRelativeTime$1,yy:processRelativeTime$1},dayOfMonthOrdinalParse:/\d{1,2}./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
// https://github.com/moment/moment/blob/develop/locale/fi.js
/** @type {?} */var numbersPast="nolla yksi kaksi kolme nelj\xE4 viisi kuusi seitsem\xE4n kahdeksan yhdeks\xE4n".split(" ");/** @type {?} */var numbersFuture=["nolla","yhden","kahden","kolmen","nelj\xE4n","viiden","kuuden",numbersPast[7],numbersPast[8],numbersPast[9]];/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */function translate$1(num,withoutSuffix,key,isFuture){/** @type {?} */var result="";switch(key){case"s":return isFuture?"muutaman sekunnin":"muutama sekunti";case"ss":return isFuture?"sekunnin":"sekuntia";case"m":return isFuture?"minuutin":"minuutti";case"mm":result=isFuture?"minuutin":"minuuttia";break;case"h":return isFuture?"tunnin":"tunti";case"hh":result=isFuture?"tunnin":"tuntia";break;case"d":return isFuture?"p\xE4iv\xE4n":"p\xE4iv\xE4";case"dd":result=isFuture?"p\xE4iv\xE4n":"p\xE4iv\xE4\xE4";break;case"M":return isFuture?"kuukauden":"kuukausi";case"MM":result=isFuture?"kuukauden":"kuukautta";break;case"y":return isFuture?"vuoden":"vuosi";case"yy":result=isFuture?"vuoden":"vuotta";break;}result=verbalNumber(num,isFuture)+" "+result;return result}/**
 * @param {?} num
 * @param {?} isFuture
 * @return {?}
 */function verbalNumber(num,isFuture){return num<10?isFuture?numbersFuture[num]:numbersPast[num]:num}/** @type {?} */var fiLocale={abbr:"fi",months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xE4kuu_hein\xE4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kes\xE4_hein\xE4_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[t\xE4n\xE4\xE4n] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s p\xE4\xE4st\xE4",past:"%s sitten",s:translate$1,ss:translate$1,m:translate$1,mm:translate$1,h:translate$1,hh:translate$1,d:translate$1,dd:translate$1,M:translate$1,MM:translate$1,y:translate$1,yy:translate$1},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice
/** @type {?} */var frLocale={abbr:"fr",months:"janvier_f\xE9vrier_mars_avril_mai_juin_juillet_ao\xFBt_septembre_octobre_novembre_d\xE9cembre".split("_"),monthsShort:"janv._f\xE9vr._mars_avr._mai_juin_juil._ao\xFBt_sept._oct._nov._d\xE9c.".split("_"),monthsParseExact:true,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xE0] LT",nextDay:"[Demain \xE0] LT",nextWeek:"dddd [\xE0] LT",lastDay:"[Hier \xE0] LT",lastWeek:"dddd [dernier \xE0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,/**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */ordinal:function ordinal(_num,period){/** @type {?} */var num=Number(_num);switch(period){// TODO: Return 'e' when day of month > 1. Move this case inside
// block for masculine words below.
// See https://github.com/moment/moment/issues/3375
case"D":return num+(num===1?"er":"");// Words with masculine grammatical gender: mois, trimestre, jour
default:case"M":case"Q":case"DDD":case"d":return num+(num===1?"er":"e");// Words with feminine grammatical gender: semaine
case"w":case"W":return num+(num===1?"re":"e");}},week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Galician [gl]
//! author : Darío Beiró : https://github.com/quinobravo
/** @type {?} */var monthsShortDot$4="xan._feb._mar._abr._mai._xu\xF1._xul._ago._set._out._nov._dec.".split("_");/** @type {?} */var monthsShort$5="xan_feb_mar_abr_mai_xu\xF1_xul_ago_set_out_nov_dec".split("_");/** @type {?} */var monthsParse$3=[/^xan/i,/^feb/i,/^mar/i,/^abr/i,/^mai/i,/^xuñ/i,/^xul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dec/i];/** @type {?} */var monthsRegex$3=/^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i;/** @type {?} */var glLocale={abbr:"gl",months:"xaneiro_febreiro_marzo_abril_maio_xu\xF1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),/**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */monthsShort:function monthsShort(date,format,isUTC){if(!date){return monthsShortDot$4}if(/-MMM-/.test(format)){return monthsShort$5[getMonth(date,isUTC)]}return monthsShortDot$4[getMonth(date,isUTC)]},monthsRegex:monthsRegex$3,monthsShortRegex:monthsRegex$3,monthsStrictRegex:/^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,monthsShortStrictRegex:/^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,monthsParse:monthsParse$3,longMonthsParse:monthsParse$3,shortMonthsParse:monthsParse$3,weekdays:"domingo_luns_martes_m\xE9rcores_xoves_venres_s\xE1bado".split("_"),weekdaysShort:"dom._lun._mar._m\xE9r._xov._ven._s\xE1b.".split("_"),weekdaysMin:"do_lu_ma_m\xE9_xo_ve_s\xE1".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{/**
         * @param {?} date
         * @return {?}
         */sameDay:function sameDay(date){return"[hoxe \xE1"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */nextDay:function nextDay(date){return"[ma\xF1an \xE1"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */nextWeek:function nextWeek(date){return"dddd [\xE1"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */lastDay:function lastDay(date){return"[onte \xE1"+(getHours(date)!==1?"s":"")+"] LT"},/**
         * @param {?} date
         * @return {?}
         */lastWeek:function lastWeek(date){return"[o] dddd [pasado \xE1"+(getHours(date)!==1?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"fai %s",s:"uns segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un d\xEDa",dd:"%d d\xEDas",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%d\xBA",week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter
/** @type {?} */var heLocale={abbr:"he",months:"\u05D9\u05E0\u05D5\u05D0\u05E8_\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05D9\u05DC_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8_\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8_\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8_\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8_\u05D3\u05E6\u05DE\u05D1\u05E8".split("_"),monthsShort:"\u05D9\u05E0\u05D5\u05F3_\u05E4\u05D1\u05E8\u05F3_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05F3_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05F3_\u05E1\u05E4\u05D8\u05F3_\u05D0\u05D5\u05E7\u05F3_\u05E0\u05D5\u05D1\u05F3_\u05D3\u05E6\u05DE\u05F3".split("_"),weekdays:"\u05E8\u05D0\u05E9\u05D5\u05DF_\u05E9\u05E0\u05D9_\u05E9\u05DC\u05D9\u05E9\u05D9_\u05E8\u05D1\u05D9\u05E2\u05D9_\u05D7\u05DE\u05D9\u05E9\u05D9_\u05E9\u05D9\u05E9\u05D9_\u05E9\u05D1\u05EA".split("_"),weekdaysShort:"\u05D0\u05F3_\u05D1\u05F3_\u05D2\u05F3_\u05D3\u05F3_\u05D4\u05F3_\u05D5\u05F3_\u05E9\u05F3".split("_"),weekdaysMin:"\u05D0_\u05D1_\u05D2_\u05D3_\u05D4_\u05D5_\u05E9".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [\u05D1]MMMM YYYY",LLL:"D [\u05D1]MMMM YYYY HH:mm",LLLL:"dddd, D [\u05D1]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[\u05D4\u05D9\u05D5\u05DD \u05D1\u05BE]LT",nextDay:"[\u05DE\u05D7\u05E8 \u05D1\u05BE]LT",nextWeek:"dddd [\u05D1\u05E9\u05E2\u05D4] LT",lastDay:"[\u05D0\u05EA\u05DE\u05D5\u05DC \u05D1\u05BE]LT",lastWeek:"[\u05D1\u05D9\u05D5\u05DD] dddd [\u05D4\u05D0\u05D7\u05E8\u05D5\u05DF \u05D1\u05E9\u05E2\u05D4] LT",sameElse:"L"},relativeTime:{future:"\u05D1\u05E2\u05D5\u05D3 %s",past:"\u05DC\u05E4\u05E0\u05D9 %s",s:"\u05DE\u05E1\u05E4\u05E8 \u05E9\u05E0\u05D9\u05D5\u05EA",ss:"%d \u05E9\u05E0\u05D9\u05D5\u05EA",m:"\u05D3\u05E7\u05D4",mm:"%d \u05D3\u05E7\u05D5\u05EA",h:"\u05E9\u05E2\u05D4",/**
         * @param {?} num
         * @return {?}
         */hh:function hh(num){if(num===2){return"\u05E9\u05E2\u05EA\u05D9\u05D9\u05DD"}return num+" \u05E9\u05E2\u05D5\u05EA"},d:"\u05D9\u05D5\u05DD",/**
         * @param {?} num
         * @return {?}
         */dd:function dd(num){if(num===2){return"\u05D9\u05D5\u05DE\u05D9\u05D9\u05DD"}return num+" \u05D9\u05DE\u05D9\u05DD"},M:"\u05D7\u05D5\u05D3\u05E9",/**
         * @param {?} num
         * @return {?}
         */MM:function MM(num){if(num===2){return"\u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD"}return num+" \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD"},y:"\u05E9\u05E0\u05D4",/**
         * @param {?} num
         * @return {?}
         */yy:function yy(num){if(num===2){return"\u05E9\u05E0\u05EA\u05D9\u05D9\u05DD"}else if(num%10===0&&num!==10){return num+" \u05E9\u05E0\u05D4"}return num+" \u05E9\u05E0\u05D9\u05DD"}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,/**
     * @param {?} input
     * @return {?}
     */isPM:function isPM(input){return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input)},/**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */meridiem:function meridiem(hour,minute,isLower){if(hour<5){return"\u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05D5\u05E7\u05E8"}else if(hour<10){return"\u05D1\u05D1\u05D5\u05E7\u05E8"}else if(hour<12){return isLower?"\u05DC\u05E4\u05E0\u05D4\"\u05E6":"\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD"}else if(hour<18){return isLower?"\u05D0\u05D7\u05D4\"\u05E6":"\u05D0\u05D7\u05E8\u05D9 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD"}else{return"\u05D1\u05E2\u05E8\u05D1"}}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Hindi [hi]
//! author : Mayank Singhal : https://github.com/mayanksinghal
/** @type {?} */var symbolMap$1={1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096A",5:"\u096B",6:"\u096C",7:"\u096D",8:"\u096E",9:"\u096F",0:"\u0966"};/** @type {?} */var numberMap$1={"\u0967":"1","\u0968":"2","\u0969":"3","\u096A":"4","\u096B":"5","\u096C":"6","\u096D":"7","\u096E":"8","\u096F":"9","\u0966":"0"};/** @type {?} */var hiLocale={abbr:"hi",months:"\u091C\u0928\u0935\u0930\u0940_\u092B\u093C\u0930\u0935\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948\u0932_\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932\u093E\u0908_\u0905\u0917\u0938\u094D\u0924_\u0938\u093F\u0924\u092E\u094D\u092C\u0930_\u0905\u0915\u094D\u091F\u0942\u092C\u0930_\u0928\u0935\u092E\u094D\u092C\u0930_\u0926\u093F\u0938\u092E\u094D\u092C\u0930".split("_"),monthsShort:"\u091C\u0928._\u092B\u093C\u0930._\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948._\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932._\u0905\u0917._\u0938\u093F\u0924._\u0905\u0915\u094D\u091F\u0942._\u0928\u0935._\u0926\u093F\u0938.".split("_"),monthsParseExact:true,weekdays:"\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0932\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930".split("_"),weekdaysShort:"\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0932_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F".split("_"),weekdaysMin:"\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),longDateFormat:{LT:"A h:mm \u092C\u091C\u0947",LTS:"A h:mm:ss \u092C\u091C\u0947",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u092C\u091C\u0947",LLLL:"dddd, D MMMM YYYY, A h:mm \u092C\u091C\u0947"},calendar:{sameDay:"[\u0906\u091C] LT",nextDay:"[\u0915\u0932] LT",nextWeek:"dddd, LT",lastDay:"[\u0915\u0932] LT",lastWeek:"[\u092A\u093F\u091B\u0932\u0947] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u092E\u0947\u0902",past:"%s \u092A\u0939\u0932\u0947",s:"\u0915\u0941\u091B \u0939\u0940 \u0915\u094D\u0937\u0923",ss:"%d \u0938\u0947\u0915\u0902\u0921",m:"\u090F\u0915 \u092E\u093F\u0928\u091F",mm:"%d \u092E\u093F\u0928\u091F",h:"\u090F\u0915 \u0918\u0902\u091F\u093E",hh:"%d \u0918\u0902\u091F\u0947",d:"\u090F\u0915 \u0926\u093F\u0928",dd:"%d \u0926\u093F\u0928",M:"\u090F\u0915 \u092E\u0939\u0940\u0928\u0947",MM:"%d \u092E\u0939\u0940\u0928\u0947",y:"\u090F\u0915 \u0935\u0930\u094D\u0937",yy:"%d \u0935\u0930\u094D\u0937"},/**
     * @param {?} str
     * @return {?}
     */preparse:function preparse(str){return str.replace(/[१२३४५६७८९०]/g,/**
         * @param {?} match
         * @return {?}
         */function(match){return numberMap$1[match]})},/**
     * @param {?} str
     * @return {?}
     */postformat:function postformat(str){return str.replace(/\d/g,/**
         * @param {?} match
         * @return {?}
         */function(match){return symbolMap$1[match]})},// Hindi notation for meridiems are quite fuzzy in practice. While there exists
// a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
meridiemParse:/रात|सुबह|दोपहर|शाम/,/**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */meridiemHour:function meridiemHour(hour,meridiem){if(hour===12){hour=0}if(meridiem==="\u0930\u093E\u0924"){return hour<4?hour:hour+12}else if(meridiem==="\u0938\u0941\u092C\u0939"){return hour}else if(meridiem==="\u0926\u094B\u092A\u0939\u0930"){return hour>=10?hour:hour+12}else if(meridiem==="\u0936\u093E\u092E"){return hour+12}},/**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */meridiem:function meridiem(hour,minute,isLower){if(hour<4){return"\u0930\u093E\u0924"}else if(hour<10){return"\u0938\u0941\u092C\u0939"}else if(hour<17){return"\u0926\u094B\u092A\u0939\u0930"}else if(hour<20){return"\u0936\u093E\u092E"}else{return"\u0930\u093E\u0924"}},week:{dow:0,// Sunday is the first day of the week.
doy:6// The week that contains Jan 1st is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner
/** @type {?} */var weekEndings="vas\xE1rnap h\xE9tf\u0151n kedden szerd\xE1n cs\xFCt\xF6rt\xF6k\xF6n p\xE9nteken szombaton".split(" ");/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */function translate$2(num,withoutSuffix,key,isFuture){switch(key){case"s":return isFuture||withoutSuffix?"n\xE9h\xE1ny m\xE1sodperc":"n\xE9h\xE1ny m\xE1sodperce";case"ss":return num+(isFuture||withoutSuffix?" m\xE1sodperc":" m\xE1sodperce");case"m":return"egy"+(isFuture||withoutSuffix?" perc":" perce");case"mm":return num+(isFuture||withoutSuffix?" perc":" perce");case"h":return"egy"+(isFuture||withoutSuffix?" \xF3ra":" \xF3r\xE1ja");case"hh":return num+(isFuture||withoutSuffix?" \xF3ra":" \xF3r\xE1ja");case"d":return"egy"+(isFuture||withoutSuffix?" nap":" napja");case"dd":return num+(isFuture||withoutSuffix?" nap":" napja");case"M":return"egy"+(isFuture||withoutSuffix?" h\xF3nap":" h\xF3napja");case"MM":return num+(isFuture||withoutSuffix?" h\xF3nap":" h\xF3napja");case"y":return"egy"+(isFuture||withoutSuffix?" \xE9v":" \xE9ve");case"yy":return num+(isFuture||withoutSuffix?" \xE9v":" \xE9ve");}return""}/**
 * @param {?} date
 * @param {?} isFuture
 * @return {?}
 */function week(date,isFuture){return(isFuture?"":"[m\xFAlt] ")+"["+weekEndings[getDayOfWeek(date)]+"] LT[-kor]"}/** @type {?} */var huLocale={abbr:"hu",months:"janu\xE1r_febru\xE1r_m\xE1rcius_\xE1prilis_m\xE1jus_j\xFAnius_j\xFAlius_augusztus_szeptember_okt\xF3ber_november_december".split("_"),monthsShort:"jan_feb_m\xE1rc_\xE1pr_m\xE1j_j\xFAn_j\xFAl_aug_szept_okt_nov_dec".split("_"),weekdays:"vas\xE1rnap_h\xE9tf\u0151_kedd_szerda_cs\xFCt\xF6rt\xF6k_p\xE9ntek_szombat".split("_"),weekdaysShort:"vas_h\xE9t_kedd_sze_cs\xFCt_p\xE9n_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,/**
     * @param {?} input
     * @return {?}
     */isPM:function isPM(input){return input.charAt(1).toLowerCase()==="u"},/**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */meridiem:function meridiem(hours,minutes,isLower){if(hours<12){return isLower===true?"de":"DE"}else{return isLower===true?"du":"DU"}},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",/**
         * @param {?} date
         * @return {?}
         */nextWeek:function nextWeek(date){return week(date,true)},lastDay:"[tegnap] LT[-kor]",/**
         * @param {?} date
         * @return {?}
         */lastWeek:function lastWeek(date){return week(date,false)},sameElse:"L"},relativeTime:{future:"%s m\xFAlva",past:"%s",s:translate$2,ss:translate$2,m:translate$2,mm:translate$2,h:translate$2,hh:translate$2,d:translate$2,dd:translate$2,M:translate$2,MM:translate$2,y:translate$2,yy:translate$2},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Croatian [hr]
//! author : Danijel Grmec : https://github.com/cobaltsis
/** @type {?} */var hrLocale={abbr:"hr",months:"Sije\u010Danj_Velja\u010Da_O\u017Eujak_Travanj_Svibanj_Lipanj_Srpanj_Kolovoz_Rujan_Listopad_Studeni_Prosinac".split("_"),monthsShort:"Sij_Velj_O\u017Eu_Tra_Svi_Lip_Srp_Kol_Ruj_Lis_Stu_Pro".split("_"),weekdays:"Nedjelja_Ponedjeljak_Utorak_Srijeda_\u010Cetvrtak_Petak_Subota".split("_"),weekdaysShort:"Ned_Pon_Uto_Sri_\u010Cet_Pet_Sub".split("_"),weekdaysMin:"Ne_Po_Ut_Sr_\u010Ce_Pe_Su".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Danas u] LT",nextDay:"[Sutra u] LT",nextWeek:"dddd [u] LT",lastDay:"[Ju\u010Der u] LT",lastWeek:"[Zadnji] dddd [u] LT",sameElse:"L"},invalidDate:"Neispravan datum",relativeTime:{future:"za %s",past:"%s prije",s:"nekoliko sekundi",ss:"%d sekundi",m:"minuta",mm:"%d minuta",h:"sat",hh:"%d sati",d:"dan",dd:"%d dana",M:"mjesec",MM:"%d mjeseci",y:"godina",yy:"%d godina"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,/**
     * @param {?} _num
     * @return {?}
     */ordinal:function ordinal(_num){/** @type {?} */var num=Number(_num);/** @type {?} */var b=num%10;/** @type {?} */var output=~~(num%100/10)===1?".":b===1?".":b===2?".":b===3?".":".";return num+output},week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Indonesia [id]
//! author : Romy Kusuma : https://github.com/rkusuma
//! reference: https://github.com/moment/moment/blob/develop/locale/id.js
/** @type {?} */var idLocale={abbr:"id",months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,/**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */meridiemHour:function meridiemHour(hour,meridiem){if(hour===12){hour=0}if(meridiem==="pagi"){return hour}else if(meridiem==="siang"){return hour>=11?hour:hour+12}else if(meridiem==="sore"||meridiem==="malam"){return hour+12}},/**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */meridiem:function meridiem(hours,minutes,isLower){if(hours<11){return"pagi"}else if(hours<15){return"siang"}else if(hours<19){return"sore"}else{return"malam"}},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz
/** @type {?} */var itLocale={abbr:"it",months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_luned\xEC_marted\xEC_mercoled\xEC_gioved\xEC_venerd\xEC_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",/**
         * @param {?} date
         * @return {?}
         */lastWeek:function lastWeek(date){switch(getDayOfWeek(date)){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT";}},sameElse:"L"},relativeTime:{/**
         * @param {?} num
         * @return {?}
         */future:function future(num){return(/^[0-9].+$/.test(num.toString(10))?"tra":"in")+" "+num},past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%d\xBA",week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon
/** @type {?} */var jaLocale={abbr:"ja",months:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split("_"),weekdaysShort:"\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),weekdaysMin:"\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5E74M\u6708D\u65E5",LLL:"YYYY\u5E74M\u6708D\u65E5 HH:mm",LLLL:"YYYY\u5E74M\u6708D\u65E5 HH:mm dddd",l:"YYYY/MM/DD",ll:"YYYY\u5E74M\u6708D\u65E5",lll:"YYYY\u5E74M\u6708D\u65E5 HH:mm",llll:"YYYY\u5E74M\u6708D\u65E5 HH:mm dddd"},meridiemParse:/午前|午後/i,/**
     * @param {?} input
     * @return {?}
     */isPM:function isPM(input){return input==="\u5348\u5F8C"},/**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */meridiem:function meridiem(hour,minute,isLower){if(hour<12){return"\u5348\u524D"}else{return"\u5348\u5F8C"}},calendar:{sameDay:"[\u4ECA\u65E5] LT",nextDay:"[\u660E\u65E5] LT",nextWeek:"[\u6765\u9031]dddd LT",lastDay:"[\u6628\u65E5] LT",lastWeek:"[\u524D\u9031]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}日/,/**
     * @param {?} num
     * @param {?} period
     * @return {?}
     */ordinal:function ordinal(num,period){switch(period){case"d":case"D":case"DDD":return num+"\u65E5";default:return num.toString(10);}},relativeTime:{future:"%s\u5F8C",past:"%s\u524D",s:"\u6570\u79D2",ss:"%d\u79D2",m:"1\u5206",mm:"%d\u5206",h:"1\u6642\u9593",hh:"%d\u6642\u9593",d:"1\u65E5",dd:"%d\u65E5",M:"1\u30F6\u6708",MM:"%d\u30F6\u6708",y:"1\u5E74",yy:"%d\u5E74"}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Georgian [ka]
//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili
//! author : Levan Tskipuri : https://github.com/tskipa
/** @type {?} */var kaLocale={abbr:"ka",months:{format:"\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10E1_\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10E1_\u10DB\u10D0\u10E0\u10E2\u10E1_\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8\u10E1_\u10DB\u10D0\u10D8\u10E1\u10E1_\u10D8\u10D5\u10DC\u10D8\u10E1\u10E1_\u10D8\u10D5\u10DA\u10D8\u10E1\u10E1_\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10E1_\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1_\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10E1_\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1_\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1".split("_"),standalone:"\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8_\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8_\u10DB\u10D0\u10E0\u10E2\u10D8_\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8_\u10DB\u10D0\u10D8\u10E1\u10D8_\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8_\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8_\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD_\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8_\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8_\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8_\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8".split("_")},monthsShort:"\u10D8\u10D0\u10DC_\u10D7\u10D4\u10D1_\u10DB\u10D0\u10E0_\u10D0\u10DE\u10E0_\u10DB\u10D0\u10D8_\u10D8\u10D5\u10DC_\u10D8\u10D5\u10DA_\u10D0\u10D2\u10D5_\u10E1\u10D4\u10E5_\u10DD\u10E5\u10E2_\u10DC\u10DD\u10D4_\u10D3\u10D4\u10D9".split("_"),weekdays:{standalone:"\u10D9\u10D5\u10D8\u10E0\u10D0_\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8_\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8".split("_"),format:"\u10D9\u10D5\u10D8\u10E0\u10D0\u10E1_\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10E1_\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"\u10D9\u10D5\u10D8_\u10DD\u10E0\u10E8_\u10E1\u10D0\u10DB_\u10DD\u10D7\u10EE_\u10EE\u10E3\u10D7_\u10DE\u10D0\u10E0_\u10E8\u10D0\u10D1".split("_"),weekdaysMin:"\u10D9\u10D5_\u10DD\u10E0_\u10E1\u10D0_\u10DD\u10D7_\u10EE\u10E3_\u10DE\u10D0_\u10E8\u10D0".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[\u10D3\u10E6\u10D4\u10E1] LT[-\u10D6\u10D4]",nextDay:"[\u10EE\u10D5\u10D0\u10DA] LT[-\u10D6\u10D4]",lastDay:"[\u10D2\u10E3\u10E8\u10D8\u10DC] LT[-\u10D6\u10D4]",nextWeek:"[\u10E8\u10D4\u10DB\u10D3\u10D4\u10D2] dddd LT[-\u10D6\u10D4]",lastWeek:"[\u10EC\u10D8\u10DC\u10D0] dddd LT-\u10D6\u10D4",sameElse:"L"},relativeTime:{/**
         * @param {?} s
         * @return {?}
         */future:function future(s){/** @type {?} */var st=s.toString();return /(წამი|წუთი|საათი|წელი)/.test(st)?st.replace(/ი$/,"\u10E8\u10D8"):st+"\u10E8\u10D8"},/**
         * @param {?} s
         * @return {?}
         */past:function past(s){/** @type {?} */var st=s.toString();if(/(წამი|წუთი|საათი|დღე|თვე)/.test(st)){return st.replace(/(ი|ე)$/,"\u10D8\u10E1 \u10EC\u10D8\u10DC")}if(/წელი/.test(st)){return st.replace(/წელი$/,"\u10EC\u10DA\u10D8\u10E1 \u10EC\u10D8\u10DC")}},s:"\u10E0\u10D0\u10DB\u10D3\u10D4\u10DC\u10D8\u10DB\u10D4 \u10EC\u10D0\u10DB\u10D8",ss:"%d \u10EC\u10D0\u10DB\u10D8",m:"\u10EC\u10E3\u10D7\u10D8",mm:"%d \u10EC\u10E3\u10D7\u10D8",h:"\u10E1\u10D0\u10D0\u10D7\u10D8",hh:"%d \u10E1\u10D0\u10D0\u10D7\u10D8",d:"\u10D3\u10E6\u10D4",dd:"%d \u10D3\u10E6\u10D4",M:"\u10D7\u10D5\u10D4",MM:"%d \u10D7\u10D5\u10D4",y:"\u10EC\u10D4\u10DA\u10D8",yy:"%d \u10EC\u10D4\u10DA\u10D8"},dayOfMonthOrdinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,/**
     * @param {?} _num
     * @param {?} _period
     * @return {?}
     */ordinal:function ordinal(_num,_period){/** @type {?} */var num=Number(_num);if(num===0){return num.toString()}if(num===1){return num+"-\u10DA\u10D8"}if(num<20||num<=100&&num%20===0||num%100===0){return"\u10DB\u10D4-"+num}return num+"-\u10D4"},week:{dow:1,doy:4}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-shorthand
//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>
/** @type {?} */var koLocale={abbr:"ko",months:"1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),monthsShort:"1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),weekdays:"\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"),weekdaysShort:"\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),weekdaysMin:"\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD",LL:"YYYY\uB144 MMMM D\uC77C",LLL:"YYYY\uB144 MMMM D\uC77C A h:mm",LLLL:"YYYY\uB144 MMMM D\uC77C dddd A h:mm",l:"YYYY.MM.DD",ll:"YYYY\uB144 MMMM D\uC77C",lll:"YYYY\uB144 MMMM D\uC77C A h:mm",llll:"YYYY\uB144 MMMM D\uC77C dddd A h:mm"},calendar:{sameDay:"\uC624\uB298 LT",nextDay:"\uB0B4\uC77C LT",nextWeek:"dddd LT",lastDay:"\uC5B4\uC81C LT",lastWeek:"\uC9C0\uB09C\uC8FC dddd LT",sameElse:"L"},relativeTime:{future:"%s \uD6C4",past:"%s \uC804",s:"\uBA87 \uCD08",ss:"%d\uCD08",m:"1\uBD84",mm:"%d\uBD84",h:"\uD55C \uC2DC\uAC04",hh:"%d\uC2DC\uAC04",d:"\uD558\uB8E8",dd:"%d\uC77C",M:"\uD55C \uB2EC",MM:"%d\uB2EC",y:"\uC77C \uB144",yy:"%d\uB144"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:/**
     * @param {?} num
     * @param {?} period
     * @return {?}
     */function ordinal(num,period){switch(period){case"d":case"D":case"DDD":return num+"\uC77C";case"M":return num+"\uC6D4";case"w":case"W":return num+"\uC8FC";default:return num.toString(10);}},meridiemParse:/오전|오후/,isPM:/**
     * @param {?} token
     * @return {?}
     */function isPM(token){return token==="\uC624\uD6C4"},meridiem:/**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isUpper
     * @return {?}
     */function meridiem(hour,minute,isUpper){return hour<12?"\uC624\uC804":"\uC624\uD6C4"}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Stanislavas Guk : https://github.com/ixoster
/** @type {?} */var units={ss:"sekund\u0117_sekund\u017Ei\u0173_sekundes",m:"minut\u0117_minut\u0117s_minut\u0119",mm:"minut\u0117s_minu\u010Di\u0173_minutes",h:"valanda_valandos_valand\u0105",hh:"valandos_valand\u0173_valandas",d:"diena_dienos_dien\u0105",dd:"dienos_dien\u0173_dienas",M:"m\u0117nuo_m\u0117nesio_m\u0117nes\u012F",MM:"m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",y:"metai_met\u0173_metus",yy:"metai_met\u0173_metus"};/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */function translateSeconds(num,withoutSuffix,key,isFuture){if(withoutSuffix){return"kelios sekund\u0117s"}else{return isFuture?"keli\u0173 sekund\u017Ei\u0173":"kelias sekundes"}}/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */function translateSingular(num,withoutSuffix,key,isFuture){return withoutSuffix?forms(key)[0]:isFuture?forms(key)[1]:forms(key)[2]}/**
 * @param {?} num
 * @return {?}
 */function special(num){return num%10===0||num>10&&num<20}/**
 * @param {?} key
 * @return {?}
 */function forms(key){return(/** @type {?} */units[key].split("_"))}/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */function translate$3(num,withoutSuffix,key,isFuture){/** @type {?} */var result=num+" ";if(num===1){return result+translateSingular(num,withoutSuffix,key[0],isFuture)}else if(withoutSuffix){return result+(special(num)?forms(key)[1]:forms(key)[0])}else{if(isFuture){return result+forms(key)[1]}else{return result+(special(num)?forms(key)[1]:forms(key)[2])}}}/** @type {?} */var ltLocale={abbr:"lt",months:{format:"sausio_vasario_kovo_baland\u017Eio_gegu\u017E\u0117s_bir\u017Eelio_liepos_rugpj\u016B\u010Dio_rugs\u0117jo_spalio_lapkri\u010Dio_gruod\u017Eio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegu\u017E\u0117_bir\u017Eelis_liepa_rugpj\u016Btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadien\u012F_pirmadien\u012F_antradien\u012F_tre\u010Diadien\u012F_ketvirtadien\u012F_penktadien\u012F_\u0161e\u0161tadien\u012F".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_tre\u010Diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),weekdaysMin:"S_P_A_T_K_Pn_\u0160".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[\u0160iandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Pra\u0117jus\u012F] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prie\u0161 %s",s:translateSeconds,ss:translate$3,m:translateSingular,mm:translate$3,h:translateSingular,hh:translate$3,d:translateSingular,dd:translate$3,M:translateSingular,MM:translate$3,y:translateSingular,yy:translate$3},dayOfMonthOrdinalParse:/\d{1,2}-oji/,/**
     * @param {?} num
     * @return {?}
     */ordinal:function ordinal(num){return num+"-oji"},week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Latvian [lv]
//! author : Matiss Janis Aboltins : https://github.com/matissjanis
/** @type {?} */var lvLocale={abbr:"lv",months:"Janv\u0101ris_Febru\u0101ris_Marts_Apr\u012Blis_Maijs_J\u016Bnijs_J\u016Blijs_Augusts_Septembris_Oktobris_Novembris_Decembris".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mai_J\u016Bn_J\u016Bl_Aug_Sep_Okt_Nov_Dec".split("_"),weekdays:"Sv\u0113tdiena_Pirmdiena_Otrdiena_Tre\u0161diena_Ceturtdiena_Piektdiena_Sestdiena".split("_"),weekdaysShort:"Sv\u0113td_Pirmd_Otrd_Tre\u0161d_Ceturtd_Piektd_Sestd".split("_"),weekdaysMin:"Sv_Pi_Ot_Tr_Ce_Pk_Se".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"p\u0113c %s",past:"pirms %s",s:"da\u017E\u0101m sekund\u0113m",ss:"%d sekund\u0113m",m:"min\u016Btes",mm:"%d min\u016Bt\u0113m",h:"stundas",hh:"%d stund\u0101m",d:"dienas",dd:"%d dien\u0101m",M:"m\u0113ne\u0161a",MM:"%d m\u0113ne\u0161iem",y:"gada",yy:"%d gadiem"},dayOfMonthOrdinalParse:/\d{1,2}\./,/**
     * @param {?} num
     * @return {?}
     */ordinal:function ordinal(num){return num+"."},week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-shorthand
//! moment.js locale configuration
//! locale : Mongolian [mn]
//! author : Javkhlantugs Nyamdorj : https://github.com/javkhaanj7
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */function translate$4(num,withoutSuffix,key,isFuture){switch(key){case"s":return withoutSuffix?"\u0445\u044D\u0434\u0445\u044D\u043D \u0441\u0435\u043A\u0443\u043D\u0434":"\u0445\u044D\u0434\u0445\u044D\u043D \u0441\u0435\u043A\u0443\u043D\u0434\u044B\u043D";case"ss":return num+(withoutSuffix?" \u0441\u0435\u043A\u0443\u043D\u0434":" \u0441\u0435\u043A\u0443\u043D\u0434\u044B\u043D");case"m":case"mm":return num+(withoutSuffix?" \u043C\u0438\u043D\u0443\u0442":" \u043C\u0438\u043D\u0443\u0442\u044B\u043D");case"h":case"hh":return num+(withoutSuffix?" \u0446\u0430\u0433":" \u0446\u0430\u0433\u0438\u0439\u043D");case"d":case"dd":return num+(withoutSuffix?" \u04E9\u0434\u04E9\u0440":" \u04E9\u0434\u0440\u0438\u0439\u043D");case"M":case"MM":return num+(withoutSuffix?" \u0441\u0430\u0440":" \u0441\u0430\u0440\u044B\u043D");case"y":case"yy":return num+(withoutSuffix?" \u0436\u0438\u043B":" \u0436\u0438\u043B\u0438\u0439\u043D");default:return num.toString(10);}}/** @type {?} */var mnLocale={abbr:"mn",months:"\u041D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0425\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04E9\u0440\u04E9\u0432\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043E\u043B\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041D\u0430\u0439\u043C\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043D \u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043D \u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split("_"),monthsShort:"1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split("_"),monthsParseExact:true,weekdays:"\u041D\u044F\u043C_\u0414\u0430\u0432\u0430\u0430_\u041C\u044F\u0433\u043C\u0430\u0440_\u041B\u0445\u0430\u0433\u0432\u0430_\u041F\u04AF\u0440\u044D\u0432_\u0411\u0430\u0430\u0441\u0430\u043D_\u0411\u044F\u043C\u0431\u0430".split("_"),weekdaysShort:"\u041D\u044F\u043C_\u0414\u0430\u0432_\u041C\u044F\u0433_\u041B\u0445\u0430_\u041F\u04AF\u0440_\u0411\u0430\u0430_\u0411\u044F\u043C".split("_"),weekdaysMin:"\u041D\u044F_\u0414\u0430_\u041C\u044F_\u041B\u0445_\u041F\u04AF_\u0411\u0430_\u0411\u044F".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY \u043E\u043D\u044B MMMM\u044B\u043D D",LLL:"YYYY \u043E\u043D\u044B MMMM\u044B\u043D D HH:mm",LLLL:"dddd, YYYY \u043E\u043D\u044B MMMM\u044B\u043D D HH:mm"},meridiemParse:/ҮӨ|ҮХ/i,isPM:/**
     * @param {?} input
     * @return {?}
     */function isPM(input){return input==="\u04AE\u0425"},meridiem:/**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */function meridiem(hour,minute,isLower){if(hour<12){return"\u04AE\u04E8"}else{return"\u04AE\u0425"}},calendar:{sameDay:"[\u04E8\u043D\u04E9\u04E9\u0434\u04E9\u0440] LT",nextDay:"[\u041C\u0430\u0440\u0433\u0430\u0430\u0448] LT",nextWeek:"[\u0418\u0440\u044D\u0445] dddd LT",lastDay:"[\u04E8\u0447\u0438\u0433\u0434\u04E9\u0440] LT",lastWeek:"[\u04E8\u043D\u0433\u04E9\u0440\u0441\u04E9\u043D] dddd LT",sameElse:"L"},relativeTime:{future:"%s \u0434\u0430\u0440\u0430\u0430",past:"%s \u04E9\u043C\u043D\u04E9",s:translate$4,ss:translate$4,m:translate$4,mm:translate$4,h:translate$4,hh:translate$4,d:translate$4,dd:translate$4,M:translate$4,MM:translate$4,y:translate$4,yy:translate$4},dayOfMonthOrdinalParse:/\d{1,2} өдөр/,ordinal:/**
     * @param {?} num
     * @param {?} period
     * @return {?}
     */function ordinal(num,period){switch(period){case"d":case"D":case"DDD":return num+" \u04E9\u0434\u04E9\u0440";default:return num.toString(10);}}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Norwegian Bokmål [nb]
//! authors : Espen Hovlandsdal : https://github.com/rexxars
//!           Sigurd Gartmann : https://github.com/sigurdga
/** @type {?} */var nbLocale={abbr:"nb",months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:true,weekdays:"s\xF8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xF8rdag".split("_"),weekdaysShort:"s\xF8._ma._ti._on._to._fr._l\xF8.".split("_"),weekdaysMin:"s\xF8_ma_ti_on_to_fr_l\xF8".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i g\xE5r kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",ss:"%d sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en m\xE5ned",MM:"%d m\xE5neder",y:"ett \xE5r",yy:"%d \xE5r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Dutch (Belgium) [nl-be]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
/** @type {?} */var monthsShortWithDots="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");/** @type {?} */var monthsShortWithoutDots="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");/** @type {?} */var monthsParse$4=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i];/** @type {?} */var monthsRegex$4=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;/** @type {?} */var nlBeLocale={abbr:"nl-be",months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),/**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */monthsShort:function monthsShort(date,format,isUTC){if(!date){return monthsShortWithDots}else if(/-MMM-/.test(format)){return monthsShortWithoutDots[getMonth(date,isUTC)]}else{return monthsShortWithDots[getMonth(date,isUTC)]}},monthsRegex:monthsRegex$4,monthsShortRegex:monthsRegex$4,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:monthsParse$4,longMonthsParse:monthsParse$4,shortMonthsParse:monthsParse$4,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"\xE9\xE9n minuut",mm:"%d minuten",h:"\xE9\xE9n uur",hh:"%d uur",d:"\xE9\xE9n dag",dd:"%d dagen",M:"\xE9\xE9n maand",MM:"%d maanden",y:"\xE9\xE9n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,/**
     * @param {?} _num
     * @return {?}
     */ordinal:function ordinal(_num){/** @type {?} */var num=Number(_num);return num+(num===1||num===8||num>=20?"ste":"de")},week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Dutch [nl]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
/** @type {?} */var monthsShortWithDots$1="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");/** @type {?} */var monthsShortWithoutDots$1="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");/** @type {?} */var monthsParse$5=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i];/** @type {?} */var monthsRegex$5=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;/** @type {?} */var nlLocale={abbr:"nl",months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),/**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */monthsShort:function monthsShort(date,format,isUTC){if(!date){return monthsShortWithDots$1}else if(/-MMM-/.test(format)){return monthsShortWithoutDots$1[getMonth(date,isUTC)]}else{return monthsShortWithDots$1[getMonth(date,isUTC)]}},monthsRegex:monthsRegex$5,monthsShortRegex:monthsRegex$5,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:monthsParse$5,longMonthsParse:monthsParse$5,shortMonthsParse:monthsParse$5,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"\xE9\xE9n minuut",mm:"%d minuten",h:"\xE9\xE9n uur",hh:"%d uur",d:"\xE9\xE9n dag",dd:"%d dagen",M:"\xE9\xE9n maand",MM:"%d maanden",y:"\xE9\xE9n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,/**
     * @param {?} _num
     * @return {?}
     */ordinal:function ordinal(_num){/** @type {?} */var num=Number(_num);return num+(num===1||num===8||num>=20?"ste":"de")},week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Polish [pl]
//! author : Rafal Hirsz : https://github.com/evoL
/** @type {?} */var monthsNominative="stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split("_");/** @type {?} */var monthsSubjective="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split("_");/**
 * @param {?} num
 * @return {?}
 */function plural$1(num){return num%10<5&&num%10>1&&~~(num/10)%10!==1}/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */function translate$5(num,withoutSuffix,key){/** @type {?} */var result=num+" ";switch(key){case"ss":return result+(plural$1(num)?"sekundy":"sekund");case"m":return withoutSuffix?"minuta":"minut\u0119";case"mm":return result+(plural$1(num)?"minuty":"minut");case"h":return withoutSuffix?"godzina":"godzin\u0119";case"hh":return result+(plural$1(num)?"godziny":"godzin");case"MM":return result+(plural$1(num)?"miesi\u0105ce":"miesi\u0119cy");case"yy":return result+(plural$1(num)?"lata":"lat");}}/** @type {?} */var plLocale={abbr:"pl",/**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */months:function months(date,format,isUTC){if(!date){return monthsNominative}else if(format===""){// Hack: if format empty we know this is used to generate
// RegExp by moment. Give then back both valid forms of months
// in RegExp ready format.
return"("+monthsSubjective[getMonth(date,isUTC)]+"|"+monthsNominative[getMonth(date,isUTC)]+")"}else if(/D MMMM/.test(format)){return monthsSubjective[getMonth(date,isUTC)]}else{return monthsNominative[getMonth(date,isUTC)]}},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_"),weekdays:"niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_\u015Br_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dzi\u015B o] LT",nextDay:"[Jutro o] LT",/**
         * @param {?} date
         * @return {?}
         */nextWeek:function nextWeek(date){switch(getDayOfWeek(date)){case 0:return"[W niedziel\u0119 o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W \u015Brod\u0119 o] LT";case 5:return"[W pi\u0105tek o] LT";case 6:return"[W sobot\u0119 o] LT";default:return"[W] dddd [o] LT";}},lastDay:"[Wczoraj o] LT",/**
         * @param {?} date
         * @return {?}
         */lastWeek:function lastWeek(date){switch(getDayOfWeek(date)){case 0:return"[W zesz\u0142\u0105 niedziel\u0119 o] LT";case 3:return"[W zesz\u0142\u0105 \u015Brod\u0119 o] LT";case 4:return"[W zesz\u0142\u0105 czwartek o] LT";case 5:return"[W zesz\u0142\u0105 pi\u0105tek o] LT";case 6:return"[W zesz\u0142\u0105 sobot\u0119 o] LT";default:return"[W zesz\u0142y] dddd [o] LT";}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:translate$5,m:translate$5,mm:translate$5,h:translate$5,hh:translate$5,d:"1 dzie\u0144",dd:"%d dni",M:"miesi\u0105c",MM:translate$5,y:"rok",yy:translate$5},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
/** @type {?} */var ptBrLocale={abbr:"pt-br",months:"Janeiro_Fevereiro_Mar\xE7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-feira_Ter\xE7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xE1bado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_S\xE1b".split("_"),weekdaysMin:"Do_2\xAA_3\xAA_4\xAA_5\xAA_6\xAA_S\xE1".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\xE0s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [\xE0s] HH:mm"},calendar:{sameDay:"[Hoje \xE0s] LT",nextDay:"[Amanh\xE3 \xE0s] LT",nextWeek:"dddd [\xE0s] LT",lastDay:"[Ontem \xE0s] LT",/**
         * @param {?} date
         * @return {?}
         */lastWeek:function lastWeek(date){return getDayOfWeek(date)===0||getDayOfWeek(date)===6?"[\xDAltimo] dddd [\xE0s] LT":// Saturday + Sunday
"[\xDAltima] dddd [\xE0s] LT";// Monday - Friday
},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atr\xE1s",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xEAs",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%d\xBA"};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // ! moment.js locale configuration
// ! locale : Romanian [ro]
//! author : Vlad Gurdiga : https://github.com/gurdiga
//! author : Valentin Agachi : https://github.com/avaly
// ! author : Earle white: https://github.com/5earle
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */function relativeTimeWithPlural(num,withoutSuffix,key){/** @type {?} */var format={ss:"secunde",mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"};/** @type {?} */var separator=" ";if(num%100>=20||num>=100&&num%100===0){separator=" de "}return num+separator+format[key]}/** @type {?} */var roLocale={abbr:"ro",months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:true,weekdays:"duminic\u0103_luni_mar\u021Bi_miercuri_joi_vineri_s\xE2mb\u0103t\u0103".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_S\xE2m".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_S\xE2".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[m\xE2ine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s \xEEn urm\u0103",s:"c\xE2teva secunde",ss:relativeTimeWithPlural,m:"un minut",mm:relativeTimeWithPlural,h:"o or\u0103",hh:relativeTimeWithPlural,d:"o zi",dd:relativeTimeWithPlural,M:"o lun\u0103",MM:relativeTimeWithPlural,y:"un an",yy:relativeTimeWithPlural},week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! Author : Menelion Elensúle : https://github.com/Oire
//! author : Коренберг Марк : https://github.com/socketpair
/**
 * @param {?} word
 * @param {?} num
 * @return {?}
 */function plural$2(word,num){/** @type {?} */var forms=word.split("_");return num%10===1&&num%100!==11?forms[0]:num%10>=2&&num%10<=4&&(num%100<10||num%100>=20)?forms[1]:forms[2]}/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */function relativeTimeWithPlural$1(num,withoutSuffix,key){/** @type {?} */var format={ss:withoutSuffix?"\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434":"\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434",mm:withoutSuffix?"\u043C\u0438\u043D\u0443\u0442\u0430_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442":"\u043C\u0438\u043D\u0443\u0442\u0443_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442",hh:"\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043E\u0432",dd:"\u0434\u0435\u043D\u044C_\u0434\u043D\u044F_\u0434\u043D\u0435\u0439",MM:"\u043C\u0435\u0441\u044F\u0446_\u043C\u0435\u0441\u044F\u0446\u0430_\u043C\u0435\u0441\u044F\u0446\u0435\u0432",yy:"\u0433\u043E\u0434_\u0433\u043E\u0434\u0430_\u043B\u0435\u0442"};if(key==="m"){return withoutSuffix?"\u043C\u0438\u043D\u0443\u0442\u0430":"\u043C\u0438\u043D\u0443\u0442\u0443"}return num+" "+plural$2(format[key],+num)}/** @type {?} */var monthsParse$6=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];// http://new.gramota.ru/spravka/rules/139-prop : § 103
// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
/** @type {?} */var ruLocale={abbr:"ru",months:{format:"\u044F\u043D\u0432\u0430\u0440\u044F_\u0444\u0435\u0432\u0440\u0430\u043B\u044F_\u043C\u0430\u0440\u0442\u0430_\u0430\u043F\u0440\u0435\u043B\u044F_\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F_\u043E\u043A\u0442\u044F\u0431\u0440\u044F_\u043D\u043E\u044F\u0431\u0440\u044F_\u0434\u0435\u043A\u0430\u0431\u0440\u044F".split("_"),standalone:"\u044F\u043D\u0432\u0430\u0440\u044C_\u0444\u0435\u0432\u0440\u0430\u043B\u044C_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B\u044C_\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C_\u043E\u043A\u0442\u044F\u0431\u0440\u044C_\u043D\u043E\u044F\u0431\u0440\u044C_\u0434\u0435\u043A\u0430\u0431\u0440\u044C".split("_")},monthsShort:{// по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
format:"\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440._\u0430\u043F\u0440._\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_"),standalone:"\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440\u0442_\u0430\u043F\u0440._\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_")},weekdays:{standalone:"\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043E\u0442\u0430".split("_"),format:"\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043E\u0442\u0443".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),monthsParse:monthsParse$6,longMonthsParse:monthsParse$6,shortMonthsParse:monthsParse$6,// полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,// копия предыдущего
monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,// полные названия с падежами
monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,// Выражение, которое соотвествует только сокращённым формам
monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0433.",LLL:"D MMMM YYYY \u0433., H:mm",LLLL:"dddd, D MMMM YYYY \u0433., H:mm"},calendar:{sameDay:"[\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432] LT",nextDay:"[\u0417\u0430\u0432\u0442\u0440\u0430 \u0432] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",/**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */nextWeek:function nextWeek(date,now){if(getWeek(now)!==getWeek(date)){switch(getDayOfWeek(date)){case 0:return"[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435] dddd [\u0432] LT";case 1:case 2:case 4:return"[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439] dddd [\u0432] LT";case 3:case 5:case 6:return"[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E] dddd [\u0432] LT";}}else{if(getDayOfWeek(date)===2){return"[\u0412\u043E] dddd [\u0432] LT"}else{return"[\u0412] dddd [\u0432] LT"}}},/**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */lastWeek:function lastWeek(date,now){if(getWeek(now)!==getWeek(date)){switch(getDayOfWeek(date)){case 0:return"[\u0412 \u043F\u0440\u043E\u0448\u043B\u043E\u0435] dddd [\u0432] LT";case 1:case 2:case 4:return"[\u0412 \u043F\u0440\u043E\u0448\u043B\u044B\u0439] dddd [\u0432] LT";case 3:case 5:case 6:return"[\u0412 \u043F\u0440\u043E\u0448\u043B\u0443\u044E] dddd [\u0432] LT";}}else{if(getDayOfWeek(date)===2){return"[\u0412\u043E] dddd [\u0432] LT"}else{return"[\u0412] dddd [\u0432] LT"}}},sameElse:"L"},relativeTime:{future:"\u0447\u0435\u0440\u0435\u0437 %s",past:"%s \u043D\u0430\u0437\u0430\u0434",s:"\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434",ss:relativeTimeWithPlural$1,m:relativeTimeWithPlural$1,mm:relativeTimeWithPlural$1,h:"\u0447\u0430\u0441",hh:relativeTimeWithPlural$1,d:"\u0434\u0435\u043D\u044C",dd:relativeTimeWithPlural$1,M:"\u043C\u0435\u0441\u044F\u0446",MM:relativeTimeWithPlural$1,y:"\u0433\u043E\u0434",yy:relativeTimeWithPlural$1},meridiemParse:/ночи|утра|дня|вечера/i,/**
     * @param {?} input
     * @return {?}
     */isPM:function isPM(input){return /^(дня|вечера)$/.test(input)},/**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */meridiem:function meridiem(hour,minute,isLower){if(hour<4){return"\u043D\u043E\u0447\u0438"}else if(hour<12){return"\u0443\u0442\u0440\u0430"}else if(hour<17){return"\u0434\u043D\u044F"}else{return"\u0432\u0435\u0447\u0435\u0440\u0430"}},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,/**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */ordinal:function ordinal(_num,period){/** @type {?} */var num=Number(_num);switch(period){case"M":case"d":case"DDD":return num+"-\u0439";case"D":return num+"-\u0433\u043E";case"w":case"W":return num+"-\u044F";default:return num.toString(10);}},week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Slovak [sk]
//! author : Jozef Pažin : https://github.com/atiris
/** @type {?} */var months$2="janu\xE1r_febru\xE1r_marec_apr\xEDl_m\xE1j_j\xFAn_j\xFAl_august_september_okt\xF3ber_november_december".split("_");/** @type {?} */var monthsShort$6="jan_feb_mar_apr_m\xE1j_j\xFAn_j\xFAl_aug_sep_okt_nov_dec".split("_");/**
 * @param {?} num
 * @return {?}
 */function plural$3(num){return num>1&&num<5&&~~(num/10)!==1}/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */function translate$6(num,withoutSuffix,key,isFuture){/** @type {?} */var result=num+" ";switch(key){case"s":// a few seconds / in a few seconds / a few seconds ago
return withoutSuffix||isFuture?"p\xE1r sek\xFAnd":"p\xE1r sekundami";case"ss":// 9 seconds / in 9 seconds / 9 seconds ago
if(withoutSuffix||isFuture){return result+(plural$3(num)?"sekundy":"sek\xFAnd")}else{return result+"sekundami"}// break;
case"m":// a minute / in a minute / a minute ago
return withoutSuffix?"min\xFAta":isFuture?"min\xFAtu":"min\xFAtou";case"mm":// 9 minutes / in 9 minutes / 9 minutes ago
if(withoutSuffix||isFuture){return result+(plural$3(num)?"min\xFAty":"min\xFAt")}else{return result+"min\xFAtami"}// break;
case"h":// an hour / in an hour / an hour ago
return withoutSuffix?"hodina":isFuture?"hodinu":"hodinou";case"hh":// 9 hours / in 9 hours / 9 hours ago
if(withoutSuffix||isFuture){return result+(plural$3(num)?"hodiny":"hod\xEDn")}else{return result+"hodinami"}// break;
case"d":// a day / in a day / a day ago
return withoutSuffix||isFuture?"de\u0148":"d\u0148om";case"dd":// 9 days / in 9 days / 9 days ago
if(withoutSuffix||isFuture){return result+(plural$3(num)?"dni":"dn\xED")}else{return result+"d\u0148ami"}// break;
case"M":// a month / in a month / a month ago
return withoutSuffix||isFuture?"mesiac":"mesiacom";case"MM":// 9 months / in 9 months / 9 months ago
if(withoutSuffix||isFuture){return result+(plural$3(num)?"mesiace":"mesiacov")}else{return result+"mesiacmi"}// break;
case"y":// a year / in a year / a year ago
return withoutSuffix||isFuture?"rok":"rokom";case"yy":// 9 years / in 9 years / 9 years ago
if(withoutSuffix||isFuture){return result+(plural$3(num)?"roky":"rokov")}else{return result+"rokmi"}// break;
}}/** @type {?} */var skLocale={abbr:"sk",months:months$2,monthsShort:monthsShort$6,weekdays:"nede\u013Ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_\u0161t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_\u0161t_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",/**
         * @param {?} date
         * @return {?}
         */nextWeek:function nextWeek(date){switch(getDayOfWeek(date)){case 0:return"[v nede\u013Eu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo \u0161tvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT";}},lastDay:"[v\u010Dera o] LT",/**
         * @param {?} date
         * @return {?}
         */lastWeek:function lastWeek(date){switch(getDayOfWeek(date)){case 0:return"[minul\xFA nede\u013Eu o] LT";case 1:case 2:return"[minul\xFD] dddd [o] LT";case 3:return"[minul\xFA stredu o] LT";case 4:case 5:return"[minul\xFD] dddd [o] LT";case 6:return"[minul\xFA sobotu o] LT";}},sameElse:"L"},relativeTime:{future:"o %s",past:"pred %s",s:translate$6,ss:translate$6,m:translate$6,mm:translate$6,h:translate$6,hh:translate$6,d:translate$6,dd:translate$6,M:translate$6,MM:translate$6,y:translate$6,yy:translate$6},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Slovenian [sl]
//! author : mihan : https://github.com/mihan
/**
 * @param {?} number
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */function processRelativeTime$2(number,withoutSuffix,key,isFuture){/** @type {?} */var result=number+" ";switch(key){case"s":return withoutSuffix||isFuture?"nekaj sekund":"nekaj sekundami";case"ss":if(number===1){result+=withoutSuffix?"sekundo":"sekundi"}else if(number===2){result+=withoutSuffix||isFuture?"sekundi":"sekundah"}else if(number<5){result+=withoutSuffix||isFuture?"sekunde":"sekundah"}else{result+=withoutSuffix||isFuture?"sekund":"sekund"}return result;case"m":return withoutSuffix?"ena minuta":"eno minuto";case"mm":if(number===1){result+=withoutSuffix?"minuta":"minuto"}else if(number===2){result+=withoutSuffix||isFuture?"minuti":"minutama"}else if(number<5){result+=withoutSuffix||isFuture?"minute":"minutami"}else{result+=withoutSuffix||isFuture?"minut":"minutami"}return result;case"h":return withoutSuffix?"ena ura":"eno uro";case"hh":if(number===1){result+=withoutSuffix?"ura":"uro"}else if(number===2){result+=withoutSuffix||isFuture?"uri":"urama"}else if(number<5){result+=withoutSuffix||isFuture?"ure":"urami"}else{result+=withoutSuffix||isFuture?"ur":"urami"}return result;case"d":return withoutSuffix||isFuture?"en dan":"enim dnem";case"dd":if(number===1){result+=withoutSuffix||isFuture?"dan":"dnem"}else if(number===2){result+=withoutSuffix||isFuture?"dni":"dnevoma"}else{result+=withoutSuffix||isFuture?"dni":"dnevi"}return result;case"M":return withoutSuffix||isFuture?"en mesec":"enim mesecem";case"MM":if(number===1){result+=withoutSuffix||isFuture?"mesec":"mesecem"}else if(number===2){result+=withoutSuffix||isFuture?"meseca":"mesecema"}else if(number<5){result+=withoutSuffix||isFuture?"mesece":"meseci"}else{result+=withoutSuffix||isFuture?"mesecev":"meseci"}return result;case"y":return withoutSuffix||isFuture?"eno leto":"enim letom";case"yy":if(number===1){result+=withoutSuffix||isFuture?"leto":"letom"}else if(number===2){result+=withoutSuffix||isFuture?"leti":"letoma"}else if(number<5){result+=withoutSuffix||isFuture?"leta":"leti"}else{result+=withoutSuffix||isFuture?"let":"leti"}return result;}}/** @type {?} */var slLocale={abbr:"sl",months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:true,weekdays:"nedelja_ponedeljek_torek_sreda_\u010Detrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._\u010Det._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_\u010De_pe_so".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",/**
         * @param {?} date
         * @return {?}
         */nextWeek:function nextWeek(date){switch(getDayOfWeek(date)){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT";}},lastDay:"[v\u010Deraj ob] LT",/**
         * @param {?} date
         * @return {?}
         */lastWeek:function lastWeek(date){switch(getDayOfWeek(date)){case 0:return"[prej\u0161njo] [nedeljo] [ob] LT";case 3:return"[prej\u0161njo] [sredo] [ob] LT";case 6:return"[prej\u0161njo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prej\u0161nji] dddd [ob] LT";}},sameElse:"L"},relativeTime:{future:"\u010Dez %s",past:"pred %s",s:processRelativeTime$2,ss:processRelativeTime$2,m:processRelativeTime$2,mm:processRelativeTime$2,h:processRelativeTime$2,hh:processRelativeTime$2,d:processRelativeTime$2,dd:processRelativeTime$2,M:processRelativeTime$2,MM:processRelativeTime$2,y:processRelativeTime$2,yy:processRelativeTime$2},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus
/** @type {?} */var svLocale={abbr:"sv",months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"s\xF6ndag_m\xE5ndag_tisdag_onsdag_torsdag_fredag_l\xF6rdag".split("_"),weekdaysShort:"s\xF6n_m\xE5n_tis_ons_tor_fre_l\xF6r".split("_"),weekdaysMin:"s\xF6_m\xE5_ti_on_to_fr_l\xF6".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Ig\xE5r] LT",nextWeek:"[P\xE5] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"f\xF6r %s sedan",s:"n\xE5gra sekunder",ss:"%d sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en m\xE5nad",MM:"%d m\xE5nader",y:"ett \xE5r",yy:"%d \xE5r"},dayOfMonthOrdinalParse:/\d{1,2}(e|a)/,/**
     * @param {?} _num
     * @return {?}
     */ordinal:function ordinal(_num){/** @type {?} */var num=Number(_num);/** @type {?} */var b=num%10;/** @type {?} */var output=~~(num%100/10)===1?"e":b===1?"a":b===2?"a":b===3?"e":"e";return num+output},week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// moment.js locale configuration
// locale : Thai [th]
// author : Watcharapol Sanitwong : https://github.com/tumit
/** @type {?} */var thLocale={abbr:"th",months:"\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21_\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C_\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21_\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19_\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21_\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19_\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21_\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21_\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19_\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21_\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19_\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21".split("_"),monthsShort:"\u0E21.\u0E04._\u0E01.\u0E1E._\u0E21\u0E35.\u0E04._\u0E40\u0E21.\u0E22._\u0E1E.\u0E04._\u0E21\u0E34.\u0E22._\u0E01.\u0E04._\u0E2A.\u0E04._\u0E01.\u0E22._\u0E15.\u0E04._\u0E1E.\u0E22._\u0E18.\u0E04.".split("_"),monthsParseExact:true,weekdays:"\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C_\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C_\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23_\u0E1E\u0E38\u0E18_\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35_\u0E28\u0E38\u0E01\u0E23\u0E4C_\u0E40\u0E2A\u0E32\u0E23\u0E4C".split("_"),weekdaysShort:"\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split("_"),// yes, three characters difference
weekdaysMin:"\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm",LLLL:"\u0E27\u0E31\u0E19dddd\u0E17\u0E35\u0E48 D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,/**
     * @param {?} input
     * @return {?}
     */isPM:function isPM(input){return input==="\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07"},/**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */meridiem:function meridiem(hour,minute,isLower){if(hour<12){return"\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07"}else{return"\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07"}},calendar:{sameDay:"[\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",nextDay:"[\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",nextWeek:"dddd[\u0E2B\u0E19\u0E49\u0E32 \u0E40\u0E27\u0E25\u0E32] LT",lastDay:"[\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",lastWeek:"[\u0E27\u0E31\u0E19]dddd[\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E27\u0E25\u0E32] LT",sameElse:"L"},relativeTime:{future:"\u0E2D\u0E35\u0E01 %s",past:"%s\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",s:"\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",ss:"%d \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",m:"1 \u0E19\u0E32\u0E17\u0E35",mm:"%d \u0E19\u0E32\u0E17\u0E35",h:"1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",hh:"%d \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",d:"1 \u0E27\u0E31\u0E19",dd:"%d \u0E27\u0E31\u0E19",M:"1 \u0E40\u0E14\u0E37\u0E2D\u0E19",MM:"%d \u0E40\u0E14\u0E37\u0E2D\u0E19",y:"1 \u0E1B\u0E35",yy:"%d \u0E1B\u0E35"}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// moment.js locale configuration
// locale : Thai-Buddhist Era [th-be]
// author : Watcharapol Sanitwong : https://github.com/tumit
/** @type {?} */var thBeLocale={abbr:"th-be",months:"\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21_\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C_\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21_\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19_\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21_\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19_\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21_\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21_\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19_\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21_\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19_\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21".split("_"),monthsShort:"\u0E21.\u0E04._\u0E01.\u0E1E._\u0E21\u0E35.\u0E04._\u0E40\u0E21.\u0E22._\u0E1E.\u0E04._\u0E21\u0E34.\u0E22._\u0E01.\u0E04._\u0E2A.\u0E04._\u0E01.\u0E22._\u0E15.\u0E04._\u0E1E.\u0E22._\u0E18.\u0E04.".split("_"),monthsParseExact:true,weekdays:"\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C_\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C_\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23_\u0E1E\u0E38\u0E18_\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35_\u0E28\u0E38\u0E01\u0E23\u0E4C_\u0E40\u0E2A\u0E32\u0E23\u0E4C".split("_"),weekdaysShort:"\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split("_"),weekdaysMin:"\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split("_"),weekdaysParseExact:true,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm",LLLL:"\u0E27\u0E31\u0E19dddd\u0E17\u0E35\u0E48 D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,/**
     * @param {?} input
     * @return {?}
     */isPM:function isPM(input){return input==="\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07"},/**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */meridiem:function meridiem(hour,minute,isLower){if(hour<12){return"\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07"}else{return"\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07"}},calendar:{sameDay:"[\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",nextDay:"[\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",nextWeek:"dddd[\u0E2B\u0E19\u0E49\u0E32 \u0E40\u0E27\u0E25\u0E32] LT",lastDay:"[\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT",lastWeek:"[\u0E27\u0E31\u0E19]dddd[\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E27\u0E25\u0E32] LT",sameElse:"L"},relativeTime:{future:"\u0E2D\u0E35\u0E01 %s",past:"%s\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",s:"\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",ss:"%d \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",m:"1 \u0E19\u0E32\u0E17\u0E35",mm:"%d \u0E19\u0E32\u0E17\u0E35",h:"1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",hh:"%d \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",d:"1 \u0E27\u0E31\u0E19",dd:"%d \u0E27\u0E31\u0E19",M:"1 \u0E40\u0E14\u0E37\u0E2D\u0E19",MM:"%d \u0E40\u0E14\u0E37\u0E2D\u0E19",y:"1 \u0E1B\u0E35",yy:"%d \u0E1B\u0E35"},/**
     * @param {?} input
     * @return {?}
     */preinput:function preinput(input){// just year-543 of input before next step
/** @type {?} */var preinputDate=new Date(input);preinputDate.setFullYear(input.getFullYear()-543);return preinputDate},/**
     * @param {?} value
     * @return {?}
     */postvalue:function postvalue(value){// just year+543 of value before display on ui
/** @type {?} */var preinputDate=new Date(value);preinputDate.setFullYear(value.getFullYear()+543);return preinputDate}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK
/** @type {?} */var suffixes={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'\xFCnc\xFC",4:"'\xFCnc\xFC",100:"'\xFCnc\xFC",6:"'nc\u0131",9:"'uncu",10:"'uncu",30:"'uncu",60:"'\u0131nc\u0131",90:"'\u0131nc\u0131"};/** @type {?} */var trLocale={abbr:"tr",months:"Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\xFCl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),monthsShort:"Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Sal\u0131_\xC7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_\xC7ar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_\xC7a_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug\xFCn saat] LT",nextDay:"[yar\u0131n saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[d\xFCn] LT",lastWeek:"[ge\xE7en] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s \xF6nce",s:"birka\xE7 saniye",ss:"%d saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir g\xFCn",dd:"%d g\xFCn",M:"bir ay",MM:"%d ay",y:"bir y\u0131l",yy:"%d y\u0131l"},dayOfMonthOrdinalParse:/\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,/**
     * @param {?} _num
     * @return {?}
     */ordinal:function ordinal(_num){/** @type {?} */var num=Number(_num);if(num===0){// special case for zero
return num+"'\u0131nc\u0131"}/** @type {?} */var a=num%10;/** @type {?} */var b=num%100-a;/** @type {?} */var c=num>=100?100:null;return num+(suffixes[a]||suffixes[b]||suffixes[c])},week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //! moment.js locale configuration
//! locale : Ukrainian [uk]
//! author : zemlanin : https://github.com/zemlanin
//! Author : Menelion Elensúle : https://github.com/Oire
/**
 * @param {?} word
 * @param {?} num
 * @return {?}
 */function plural$4(word,num){/** @type {?} */var forms=word.split("_");return num%10===1&&num%100!==11?forms[0]:num%10>=2&&num%10<=4&&(num%100<10||num%100>=20)?forms[1]:forms[2]}/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */function relativeTimeWithPlural$2(num,withoutSuffix,key){/** @type {?} */var format={ss:withoutSuffix?"\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434":"\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434",mm:withoutSuffix?"\u0445\u0432\u0438\u043B\u0438\u043D\u0430_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D":"\u0445\u0432\u0438\u043B\u0438\u043D\u0443_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D",hh:withoutSuffix?"\u0433\u043E\u0434\u0438\u043D\u0430_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D":"\u0433\u043E\u0434\u0438\u043D\u0443_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D",dd:"\u0434\u0435\u043D\u044C_\u0434\u043D\u0456_\u0434\u043D\u0456\u0432",MM:"\u043C\u0456\u0441\u044F\u0446\u044C_\u043C\u0456\u0441\u044F\u0446\u0456_\u043C\u0456\u0441\u044F\u0446\u0456\u0432",yy:"\u0440\u0456\u043A_\u0440\u043E\u043A\u0438_\u0440\u043E\u043A\u0456\u0432"};if(key==="m"){return withoutSuffix?"\u0445\u0432\u0438\u043B\u0438\u043D\u0430":"\u0445\u0432\u0438\u043B\u0438\u043D\u0443"}if(key==="h"){return withoutSuffix?"\u0433\u043E\u0434\u0438\u043D\u0430":"\u0433\u043E\u0434\u0438\u043D\u0443"}return num+" "+plural$4(format[key],+num)}/**
 * @param {?} date
 * @param {?} format
 * @param {?=} isUTC
 * @return {?}
 */function weekdaysCaseReplace(date,format,isUTC){/** @type {?} */var weekdays={nominative:"\u043D\u0435\u0434\u0456\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F_\u0441\u0443\u0431\u043E\u0442\u0430".split("_"),accusative:"\u043D\u0435\u0434\u0456\u043B\u044E_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044E_\u0441\u0443\u0431\u043E\u0442\u0443".split("_"),genitive:"\u043D\u0435\u0434\u0456\u043B\u0456_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043A\u0430_\u0432\u0456\u0432\u0442\u043E\u0440\u043A\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u0456_\u0441\u0443\u0431\u043E\u0442\u0438".split("_")};if(!date){return weekdays.nominative}/** @type {?} */var nounCase=/(\[[ВвУу]\]) ?dddd/.test(format)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(format)?"genitive":"nominative";return weekdays[nounCase][getDayOfWeek(date,isUTC)]}/**
 * @param {?} str
 * @return {?}
 */function processHoursFunction(str){return(/**
     * @param {?} date
     * @return {?}
     */function(date){return str+"\u043E"+(getHours(date)===11?"\u0431":"")+"] LT"})}/** @type {?} */var ukLocale={abbr:"uk",months:{format:"\u0441\u0456\u0447\u043D\u044F_\u043B\u044E\u0442\u043E\u0433\u043E_\u0431\u0435\u0440\u0435\u0437\u043D\u044F_\u043A\u0432\u0456\u0442\u043D\u044F_\u0442\u0440\u0430\u0432\u043D\u044F_\u0447\u0435\u0440\u0432\u043D\u044F_\u043B\u0438\u043F\u043D\u044F_\u0441\u0435\u0440\u043F\u043D\u044F_\u0432\u0435\u0440\u0435\u0441\u043D\u044F_\u0436\u043E\u0432\u0442\u043D\u044F_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043D\u044F".split("_"),standalone:"\u0441\u0456\u0447\u0435\u043D\u044C_\u043B\u044E\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C_\u043A\u0432\u0456\u0442\u0435\u043D\u044C_\u0442\u0440\u0430\u0432\u0435\u043D\u044C_\u0447\u0435\u0440\u0432\u0435\u043D\u044C_\u043B\u0438\u043F\u0435\u043D\u044C_\u0441\u0435\u0440\u043F\u0435\u043D\u044C_\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C_\u0436\u043E\u0432\u0442\u0435\u043D\u044C_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043D\u044C".split("_")},monthsShort:"\u0441\u0456\u0447_\u043B\u044E\u0442_\u0431\u0435\u0440_\u043A\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043B\u0438\u043F_\u0441\u0435\u0440\u043F_\u0432\u0435\u0440_\u0436\u043E\u0432\u0442_\u043B\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),weekdays:weekdaysCaseReplace,weekdaysShort:"\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0440.",LLL:"D MMMM YYYY \u0440., HH:mm",LLLL:"dddd, D MMMM YYYY \u0440., HH:mm"},calendar:{sameDay:processHoursFunction("[\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 "),nextDay:processHoursFunction("[\u0417\u0430\u0432\u0442\u0440\u0430 "),lastDay:processHoursFunction("[\u0412\u0447\u043E\u0440\u0430 "),nextWeek:processHoursFunction("[\u0423] dddd ["),/**
         * @param {?} date
         * @return {?}
         */lastWeek:function lastWeek(date){switch(getDayOfWeek(date)){case 0:case 3:case 5:case 6:return processHoursFunction("[\u041C\u0438\u043D\u0443\u043B\u043E\u0457] dddd [")(date);case 1:case 2:case 4:return processHoursFunction("[\u041C\u0438\u043D\u0443\u043B\u043E\u0433\u043E] dddd [")(date);}},sameElse:"L"},relativeTime:{future:"\u0437\u0430 %s",past:"%s \u0442\u043E\u043C\u0443",s:"\u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434",ss:relativeTimeWithPlural$2,m:relativeTimeWithPlural$2,mm:relativeTimeWithPlural$2,h:"\u0433\u043E\u0434\u0438\u043D\u0443",hh:relativeTimeWithPlural$2,d:"\u0434\u0435\u043D\u044C",dd:relativeTimeWithPlural$2,M:"\u043C\u0456\u0441\u044F\u0446\u044C",MM:relativeTimeWithPlural$2,y:"\u0440\u0456\u043A",yy:relativeTimeWithPlural$2},// M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
meridiemParse:/ночі|ранку|дня|вечора/,/**
     * @param {?} input
     * @return {?}
     */isPM:function isPM(input){return /^(дня|вечора)$/.test(input)},/**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */meridiem:function meridiem(hour,minute,isLower){if(hour<4){return"\u043D\u043E\u0447\u0456"}else if(hour<12){return"\u0440\u0430\u043D\u043A\u0443"}else if(hour<17){return"\u0434\u043D\u044F"}else{return"\u0432\u0435\u0447\u043E\u0440\u0430"}},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,/**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */ordinal:function ordinal(_num,period){/** @type {?} */var num=Number(_num);switch(period){case"M":case"d":case"DDD":case"w":case"W":return num+"-\u0439";case"D":return num+"-\u0433\u043E";default:return num.toString();}},week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Việt Nam [vi]
//! author : Chris Gedrim : https://github.com/chrisgedrim
/** @type {?} */var viLocale={abbr:"vi",months:"th\xE1ng 1_th\xE1ng 2_th\xE1ng 3_th\xE1ng 4_th\xE1ng 5_th\xE1ng 6_th\xE1ng 7_th\xE1ng 8_th\xE1ng 9_th\xE1ng 10_th\xE1ng 11_th\xE1ng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:true,weekdays:"ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\xE1u_th\u1EE9 b\u1EA3y".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:true,meridiemParse:/sa|ch/i,/**
     * @param {?} input
     * @return {?}
     */isPM:function isPM(input){return /^ch$/i.test(input)},/**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */meridiem:function meridiem(hours,minutes,isLower){if(hours<12){return isLower?"sa":"SA"}else{return isLower?"ch":"CH"}},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [n\u0103m] YYYY",LLL:"D MMMM [n\u0103m] YYYY HH:mm",LLLL:"dddd, D MMMM [n\u0103m] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[H\xF4m nay l\xFAc] LT",nextDay:"[Ng\xE0y mai l\xFAc] LT",nextWeek:"dddd [tu\u1EA7n t\u1EDBi l\xFAc] LT",lastDay:"[H\xF4m qua l\xFAc] LT",lastWeek:"dddd [tu\u1EA7n tr\u01B0\u1EDBc l\xFAc] LT",sameElse:"L"},relativeTime:{future:"%s t\u1EDBi",past:"%s tr\u01B0\u1EDBc",s:"v\xE0i gi\xE2y",ss:"%d gi\xE2y",m:"m\u1ED9t ph\xFAt",mm:"%d ph\xFAt",h:"m\u1ED9t gi\u1EDD",hh:"%d gi\u1EDD",d:"m\u1ED9t ng\xE0y",dd:"%d ng\xE0y",M:"m\u1ED9t th\xE1ng",MM:"%d th\xE1ng",y:"m\u1ED9t n\u0103m",yy:"%d n\u0103m"},dayOfMonthOrdinalParse:/\d{1,2}/,/**
     * @param {?} _num
     * @return {?}
     */ordinal:function ordinal(_num){return""+_num},week:{dow:1,// Thứ Hai là ngày đầu tuần.
doy:4// Tuần chứa ngày 4 tháng 1 là tuần đầu tiên trong năm.
}};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
/** @type {?} */var zhCnLocale={abbr:"zh-cn",months:"\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),weekdaysShort:"\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"),weekdaysMin:"\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5E74M\u6708D\u65E5",LLL:"YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206",LLLL:"YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206",l:"YYYY/M/D",ll:"YYYY\u5E74M\u6708D\u65E5",lll:"YYYY\u5E74M\u6708D\u65E5 HH:mm",llll:"YYYY\u5E74M\u6708D\u65E5dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,/**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */meridiemHour:function meridiemHour(hour,meridiem){if(hour===12){hour=0}if(meridiem==="\u51CC\u6668"||meridiem==="\u65E9\u4E0A"||meridiem==="\u4E0A\u5348"){return hour}else if(meridiem==="\u4E0B\u5348"||meridiem==="\u665A\u4E0A"){return hour+12}else{// '中午'
return hour>=11?hour:hour+12}},/**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */meridiem:function meridiem(hour,minute,isLower){/** @type {?} */var hm=hour*100+minute;if(hm<600){return"\u51CC\u6668"}else if(hm<900){return"\u65E9\u4E0A"}else if(hm<1130){return"\u4E0A\u5348"}else if(hm<1230){return"\u4E2D\u5348"}else if(hm<1800){return"\u4E0B\u5348"}else{return"\u665A\u4E0A"}},calendar:{sameDay:"[\u4ECA\u5929]LT",nextDay:"[\u660E\u5929]LT",nextWeek:"[\u4E0B]ddddLT",lastDay:"[\u6628\u5929]LT",lastWeek:"[\u4E0A]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,/**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */ordinal:function ordinal(_num,period){/** @type {?} */var num=Number(_num);switch(period){case"d":case"D":case"DDD":return num+"\u65E5";case"M":return num+"\u6708";case"w":case"W":return num+"\u5468";default:return num.toString();}},relativeTime:{future:"%s\u5185",past:"%s\u524D",s:"\u51E0\u79D2",ss:"%d \u79D2",m:"1 \u5206\u949F",mm:"%d \u5206\u949F",h:"1 \u5C0F\u65F6",hh:"%d \u5C0F\u65F6",d:"1 \u5929",dd:"%d \u5929",M:"1 \u4E2A\u6708",MM:"%d \u4E2A\u6708",y:"1 \u5E74",yy:"%d \u5E74"},week:{// GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};//# sourceMappingURL=ngx-bootstrap-chronos.js.map
/***/},/***/"./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js":/*!********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js ***!
  \********************************************************************************/ /*! exports provided: CollapseDirective, CollapseModule */ /***/function node_modulesNgxBootstrapCollapseFesm2015NgxBootstrapCollapseJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CollapseDirective",function(){return CollapseDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CollapseModule",function(){return CollapseModule});/* harmony import */var _angular_animations__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var COLLAPSE_ANIMATION_TIMING="400ms cubic-bezier(0.4,0.0,0.2,1)";/** @type {?} */var expandAnimation=[Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({height:0,visibility:"hidden"}),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(COLLAPSE_ANIMATION_TIMING,Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({height:"*",visibility:"visible"}))];/** @type {?} */var collapseAnimation=[Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({height:"*",visibility:"visible"}),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(COLLAPSE_ANIMATION_TIMING,Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({height:0,visibility:"hidden"}))];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var CollapseDirective=/*#__PURE__*/function(){/**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _builder
     */function CollapseDirective(_el,_renderer,_builder){this._el=_el;this._renderer=_renderer;/**
         * This event fires as soon as content collapses
         */this.collapsed=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];/**
         * This event fires when collapsing is started
         */this.collapses=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];/**
         * This event fires as soon as content becomes visible
         */this.expanded=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];/**
         * This event fires when expansion is started
         */this.expands=new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];// shown
this.isExpanded=true;// hidden
this.isCollapsed=false;// stale state
this.isCollapse=true;// animation state
this.isCollapsing=false;/**
         * turn on/off animation
         */this.isAnimated=false;this._display="block";this._stylesLoaded=false;this._COLLAPSE_ACTION_NAME="collapse";this._EXPAND_ACTION_NAME="expand";this._factoryCollapseAnimation=_builder.build(collapseAnimation);this._factoryExpandAnimation=_builder.build(expandAnimation)}/**
     * @param {?} value
     * @return {?}
     */var _proto11=CollapseDirective.prototype;/**
     * @return {?}
     */_proto11.ngAfterViewChecked=function ngAfterViewChecked(){this._stylesLoaded=true;if(!this._player||!this._isAnimationDone){return}this._player.reset();this._renderer.setStyle(this._el.nativeElement,"height","*")}/**
     * allows to manually toggle content visibility
     * @return {?}
     */;_proto11.toggle=function toggle(){if(this.isExpanded){this.hide()}else{this.show()}}/**
     * allows to manually hide content
     * @return {?}
     */;_proto11.hide=function hide(){var _this8=this;this.isCollapsing=true;this.isExpanded=false;this.isCollapsed=true;this.isCollapsing=false;this.collapses.emit(this);this._isAnimationDone=false;this.animationRun(this.isAnimated,this._COLLAPSE_ACTION_NAME)(/**
         * @return {?}
         */function(){_this8._isAnimationDone=true;_this8.collapsed.emit(_this8);_this8._renderer.setStyle(_this8._el.nativeElement,"display","none")})}/**
     * allows to manually show collapsed content
     * @return {?}
     */;_proto11.show=function show(){var _this9=this;this._renderer.setStyle(this._el.nativeElement,"display",this._display);this.isCollapsing=true;this.isExpanded=true;this.isCollapsed=false;this.isCollapsing=false;this.expands.emit(this);this._isAnimationDone=false;this.animationRun(this.isAnimated,this._EXPAND_ACTION_NAME)(/**
         * @return {?}
         */function(){_this9._isAnimationDone=true;_this9.expanded.emit(_this9)})}/**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */;_proto11.animationRun=function animationRun(isAnimated,action){var _this10=this;if(!isAnimated||!this._stylesLoaded){return(/**
             * @param {?} callback
             * @return {?}
             */function(callback){return callback()})}this._renderer.setStyle(this._el.nativeElement,"overflow","hidden");this._renderer.addClass(this._el.nativeElement,"collapse");/** @type {?} */var factoryAnimation=action===this._EXPAND_ACTION_NAME?this._factoryExpandAnimation:this._factoryCollapseAnimation;if(this._player){this._player.destroy()}this._player=factoryAnimation.create(this._el.nativeElement);this._player.play();return(/**
         * @param {?} callback
         * @return {?}
         */function(callback){return _this10._player.onDone(callback)})};_createClass(CollapseDirective,[{key:"display",set:function set(value){if(!this.isAnimated){this._renderer.setStyle(this._el.nativeElement,"display",value);return}this._display=value;if(value==="none"){this.hide();return}this.show()}/**
     * A flag indicating visibility of content (shown or hidden)
     * @param {?} value
     * @return {?}
     */},{key:"collapse",set:function set(value){if(!this._player||this._isAnimationDone){this.isExpanded=value;this.toggle()}}/**
     * @return {?}
     */,get:function get(){return this.isExpanded}}]);return CollapseDirective}();CollapseDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],args:[{selector:"[collapse]",exportAs:"bs-collapse",host:{"[class.collapse]":"true"}}]}];/** @nocollapse */CollapseDirective.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]},{type:_angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"]}]};CollapseDirective.propDecorators={collapsed:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]}],collapses:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]}],expanded:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]}],expands:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]}],isExpanded:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],args:["class.in"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],args:["class.show"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],args:["attr.aria-expanded"]}],isCollapsed:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],args:["attr.aria-hidden"]}],isCollapse:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],args:["class.collapse"]}],isCollapsing:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],args:["class.collapsing"]}],display:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],isAnimated:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}],collapse:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var CollapseModule=/*#__PURE__*/function(){function CollapseModule(){}/**
     * @return {?}
     */CollapseModule.forRoot=function forRoot(){return{ngModule:CollapseModule,providers:[]}};return CollapseModule}();CollapseModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],args:[{declarations:[CollapseDirective],exports:[CollapseDirective]}]}];//# sourceMappingURL=ngx-bootstrap-collapse.js.map
/***/},/***/"./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js":/*!************************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js ***!
  \************************************************************************************************/ /*! exports provided: BsComponentRef, ComponentLoader, ComponentLoaderFactory, ContentRef */ /***/function node_modulesNgxBootstrapComponentLoaderFesm2015NgxBootstrapComponentLoaderJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsComponentRef",function(){return BsComponentRef});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ComponentLoader",function(){return ComponentLoader});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ComponentLoaderFactory",function(){return ComponentLoaderFactory});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ContentRef",function(){return ContentRef});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ngx-bootstrap/utils */"./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");/* harmony import */var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ngx-bootstrap/positioning */"./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @template T
 */var BsComponentRef=function BsComponentRef(){};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */var ContentRef=/**
     * @param {?} nodes
     * @param {?=} viewRef
     * @param {?=} componentRef
     */function ContentRef(/* tslint:disable-next-line: no-any */nodes,viewRef,/* tslint:disable-next-line: no-any */componentRef){this.nodes=nodes;this.viewRef=viewRef;this.componentRef=componentRef};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @template T
 */var ComponentLoader=/*#__PURE__*/function(){/**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * \@internal
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _injector
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _applicationRef
     * @param {?} _posService
     */ // tslint:disable-next-line
function ComponentLoader(_viewContainerRef,_renderer,_elementRef,_injector,_componentFactoryResolver,_ngZone,_applicationRef,_posService){this._viewContainerRef=_viewContainerRef;this._renderer=_renderer;this._elementRef=_elementRef;this._injector=_injector;this._componentFactoryResolver=_componentFactoryResolver;this._ngZone=_ngZone;this._applicationRef=_applicationRef;this._posService=_posService;this.onBeforeShow=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/* tslint:disable-next-line: no-any*/this.onShown=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/* tslint:disable-next-line: no-any*/this.onBeforeHide=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.onHidden=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this._providers=[];this._isHiding=false;/**
         * A selector used if container element was not found
         */this.containerDefaultSelector="body";this._listenOpts={};this._globalListener=Function.prototype}/**
     * @return {?}
     */var _proto12=ComponentLoader.prototype;/**
     * @param {?} compType
     * @return {?}
     */_proto12.attach=function attach(compType){this._componentFactory=this._componentFactoryResolver.resolveComponentFactory(compType);return this}// todo: add behaviour: to target element, `body`, custom element
/**
     * @param {?=} container
     * @return {?}
     */;_proto12.to=function to(container){this.container=container||this.container;return this}/**
     * @param {?=} opts
     * @return {?}
     */;_proto12.position=function position(opts){this.attachment=opts.attachment||this.attachment;/* tslint:disable-next-line: no-unnecessary-type-assertion */this._elementRef=/** @type {?} */opts.target||this._elementRef;return this}/**
     * @param {?} provider
     * @return {?}
     */;_proto12.provide=function provide(provider){this._providers.push(provider);return this}// todo: appendChild to element or document.querySelector(this.container)
/**
     * @param {?=} opts
     * @return {?}
     */;_proto12.show=function show(opts){if(opts===void 0){opts={}}this._subscribePositioning();this._innerComponent=null;if(!this._componentRef){this.onBeforeShow.emit();this._contentRef=this._getContentRef(opts.content,opts.context,opts.initialState);/** @type {?} */var injector=_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({providers:this._providers,parent:this._injector});this._componentRef=this._componentFactory.create(injector,this._contentRef.nodes);this._applicationRef.attachView(this._componentRef.hostView);// this._componentRef = this._viewContainerRef
//   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
this.instance=this._componentRef.instance;Object.assign(this._componentRef.instance,opts);if(this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]){this.container.nativeElement.appendChild(this._componentRef.location.nativeElement)}if(typeof this.container==="string"&&typeof document!=="undefined"){/** @type {?} */var selectedElement=document.querySelector(this.container)||document.querySelector(this.containerDefaultSelector);selectedElement.appendChild(this._componentRef.location.nativeElement)}if(!this.container&&this._elementRef&&this._elementRef.nativeElement.parentElement){this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement)}// we need to manually invoke change detection since events registered
// via
// Renderer::listen() are not picked up by change detection with the
// OnPush strategy
if(this._contentRef.componentRef){this._innerComponent=this._contentRef.componentRef.instance;this._contentRef.componentRef.changeDetectorRef.markForCheck();this._contentRef.componentRef.changeDetectorRef.detectChanges()}this._componentRef.changeDetectorRef.markForCheck();this._componentRef.changeDetectorRef.detectChanges();this.onShown.emit(this._componentRef.instance)}this._registerOutsideClick();return this._componentRef}/**
     * @return {?}
     */;_proto12.hide=function hide(){if(!this._componentRef){return this}this._posService.deletePositionElement(this._componentRef.location);this.onBeforeHide.emit(this._componentRef.instance);/** @type {?} */var componentEl=this._componentRef.location.nativeElement;componentEl.parentNode.removeChild(componentEl);if(this._contentRef.componentRef){this._contentRef.componentRef.destroy()}this._componentRef.destroy();if(this._viewContainerRef&&this._contentRef.viewRef){this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef))}if(this._contentRef.viewRef){this._contentRef.viewRef.destroy()}this._contentRef=null;this._componentRef=null;this._removeGlobalListener();this.onHidden.emit();return this}/**
     * @return {?}
     */;_proto12.toggle=function toggle(){if(this.isShown){this.hide();return}this.show()}/**
     * @return {?}
     */;_proto12.dispose=function dispose(){if(this.isShown){this.hide()}this._unsubscribePositioning();if(this._unregisterListenersFn){this._unregisterListenersFn()}}/**
     * @param {?} listenOpts
     * @return {?}
     */;_proto12.listen=function listen(listenOpts){var _this11=this;this.triggers=listenOpts.triggers||this.triggers;this._listenOpts.outsideClick=listenOpts.outsideClick;this._listenOpts.outsideEsc=listenOpts.outsideEsc;listenOpts.target=listenOpts.target||this._elementRef.nativeElement;/** @type {?} */var hide=this._listenOpts.hide=/**
         * @return {?}
         */function(){return listenOpts.hide?listenOpts.hide():void _this11.hide()};/** @type {?} */var show=this._listenOpts.show=/**
         * @param {?} registerHide
         * @return {?}
         */function(registerHide){listenOpts.show?listenOpts.show(registerHide):_this11.show(registerHide);registerHide()};/** @type {?} */var toggle=/**
         * @param {?} registerHide
         * @return {?}
         */function toggle(registerHide){_this11.isShown?hide():show(registerHide)};this._unregisterListenersFn=Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["listenToTriggersV2"])(this._renderer,{target:listenOpts.target,triggers:listenOpts.triggers,show:show,hide:hide,toggle:toggle});return this}/**
     * @return {?}
     */;_proto12._removeGlobalListener=function _removeGlobalListener(){if(this._globalListener){this._globalListener();this._globalListener=null}}/**
     * @param {?} vRef
     * @param {?} template
     * @return {?}
     */;_proto12.attachInline=function attachInline(vRef,/* tslint:disable-next-line: no-any*/template){this._inlineViewRef=vRef.createEmbeddedView(template);return this}/**
     * @return {?}
     */;_proto12._registerOutsideClick=function _registerOutsideClick(){var _this12=this;if(!this._componentRef||!this._componentRef.location){return}// why: should run after first event bubble
if(this._listenOpts.outsideClick){/** @type {?} */var target=this._componentRef.location.nativeElement;setTimeout(/**
             * @return {?}
             */function(){_this12._globalListener=Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerOutsideClick"])(_this12._renderer,{targets:[target,_this12._elementRef.nativeElement],outsideClick:_this12._listenOpts.outsideClick,hide:/**
                     * @return {?}
                     */function hide(){return _this12._listenOpts.hide()}})})}if(this._listenOpts.outsideEsc){/** @type {?} */var _target=this._componentRef.location.nativeElement;this._globalListener=Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerEscClick"])(this._renderer,{targets:[_target,this._elementRef.nativeElement],outsideEsc:this._listenOpts.outsideEsc,hide:/**
                 * @return {?}
                 */function hide(){return _this12._listenOpts.hide()}})}}/**
     * @return {?}
     */;_proto12.getInnerComponent=function getInnerComponent(){return this._innerComponent}/**
     * @private
     * @return {?}
     */;_proto12._subscribePositioning=function _subscribePositioning(){var _this13=this;if(this._zoneSubscription||!this.attachment){return}this.onShown.subscribe(/**
         * @return {?}
         */function(){_this13._posService.position({element:_this13._componentRef.location,target:_this13._elementRef,attachment:_this13.attachment,appendToBody:_this13.container==="body"})});this._zoneSubscription=this._ngZone.onStable.subscribe(/**
         * @return {?}
         */function(){if(!_this13._componentRef){return}_this13._posService.calcPosition()})}/**
     * @private
     * @return {?}
     */;_proto12._unsubscribePositioning=function _unsubscribePositioning(){if(!this._zoneSubscription){return}this._zoneSubscription.unsubscribe();this._zoneSubscription=null}/**
     * @private
     * @param {?} content
     * @param {?=} context
     * @param {?=} initialState
     * @return {?}
     */;_proto12._getContentRef=function _getContentRef(/* tslint:disable-next-line: no-any*/content,/* tslint:disable-next-line: no-any*/context,/* tslint:disable-next-line: no-any*/initialState){if(!content){return new ContentRef([])}if(content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]){if(this._viewContainerRef){/** @type {?} */var _viewRef=this._viewContainerRef.createEmbeddedView(content,context);_viewRef.markForCheck();return new ContentRef([_viewRef.rootNodes],_viewRef)}/** @type {?} */var viewRef=content.createEmbeddedView({});this._applicationRef.attachView(viewRef);return new ContentRef([viewRef.rootNodes],viewRef)}if(typeof content==="function"){/** @type {?} */var contentCmptFactory=this._componentFactoryResolver.resolveComponentFactory(content);/** @type {?} */var modalContentInjector=_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({providers:this._providers,parent:this._injector});/** @type {?} */var componentRef=contentCmptFactory.create(modalContentInjector);Object.assign(componentRef.instance,initialState);this._applicationRef.attachView(componentRef.hostView);return new ContentRef([[componentRef.location.nativeElement]],componentRef.hostView,componentRef)}return new ContentRef([[this._renderer.createText(""+content)]])};_createClass(ComponentLoader,[{key:"isShown",get:function get(){if(this._isHiding){return false}return!!this._componentRef}}]);return ComponentLoader}();/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var ComponentLoaderFactory=/*#__PURE__*/function(){/**
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _injector
     * @param {?} _posService
     * @param {?} _applicationRef
     */function ComponentLoaderFactory(_componentFactoryResolver,_ngZone,_injector,_posService,_applicationRef){this._componentFactoryResolver=_componentFactoryResolver;this._ngZone=_ngZone;this._injector=_injector;this._posService=_posService;this._applicationRef=_applicationRef}/**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */var _proto13=ComponentLoaderFactory.prototype;_proto13.createLoader=function createLoader(_elementRef,_viewContainerRef,_renderer){return new ComponentLoader(_viewContainerRef,_renderer,_elementRef,this._injector,this._componentFactoryResolver,this._ngZone,this._applicationRef,this._posService)};return ComponentLoaderFactory}();ComponentLoaderFactory.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */ComponentLoaderFactory.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]},{type:ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]}]};//# sourceMappingURL=ngx-bootstrap-component-loader.js.map
/***/},/***/"./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js":/*!************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js ***!
  \************************************************************************************/ /*! exports provided: BsDatepickerConfig, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineConfig, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineConfig, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective, BsLocaleService, DateFormatter, DatePickerComponent, DatePickerInnerComponent, DatepickerConfig, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo */ /***/function node_modulesNgxBootstrapDatepickerFesm2015NgxBootstrapDatepickerJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDatepickerConfig",function(){return BsDatepickerConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDatepickerContainerComponent",function(){return BsDatepickerContainerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDatepickerDirective",function(){return BsDatepickerDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDatepickerInlineConfig",function(){return BsDatepickerInlineConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDatepickerInlineContainerComponent",function(){return BsDatepickerInlineContainerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDatepickerInlineDirective",function(){return BsDatepickerInlineDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDatepickerInputDirective",function(){return BsDatepickerInputDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDatepickerModule",function(){return BsDatepickerModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerConfig",function(){return BsDaterangepickerConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerContainerComponent",function(){return BsDaterangepickerContainerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerDirective",function(){return BsDaterangepickerDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerInlineConfig",function(){return BsDaterangepickerInlineConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerInlineContainerComponent",function(){return BsDaterangepickerInlineContainerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerInlineDirective",function(){return BsDaterangepickerInlineDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerInputDirective",function(){return BsDaterangepickerInputDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsLocaleService",function(){return BsLocaleService});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DateFormatter",function(){return DateFormatter});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DatePickerComponent",function(){return DatePickerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DatePickerInnerComponent",function(){return DatePickerInnerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DatepickerConfig",function(){return DatepickerConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DatepickerModule",function(){return DatepickerModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DayPickerComponent",function(){return DayPickerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MonthPickerComponent",function(){return MonthPickerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"YearPickerComponent",function(){return YearPickerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275a",function(){return DATEPICKER_CONTROL_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275b",function(){return BsDatepickerAbstractComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275c",function(){return BsDatepickerStore});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275d",function(){return BsDatepickerEffects});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275e",function(){return BsDatepickerActions});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275f",function(){return datepickerAnimation});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275g",function(){return BsCalendarLayoutComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275h",function(){return BsCurrentDateViewComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275i",function(){return BsCustomDatesViewComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275j",function(){return BsDatepickerDayDecoratorComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275k",function(){return BsDatepickerNavigationViewComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275l",function(){return BsDaysCalendarViewComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275m",function(){return BsMonthCalendarViewComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275n",function(){return BsTimepickerViewComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275o",function(){return BsYearsCalendarViewComponent});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");/* harmony import */var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ngx-bootstrap/chronos */"./node_modules/ngx-bootstrap/chronos/fesm2015/ngx-bootstrap-chronos.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ngx-bootstrap/mini-ngrx */"./node_modules/ngx-bootstrap/mini-ngrx/fesm2015/ngx-bootstrap-mini-ngrx.js");/* harmony import */var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ngx-bootstrap/positioning */"./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");/* harmony import */var _angular_animations__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");/* harmony import */var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ngx-bootstrap/component-loader */"./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");/* harmony import */var _angular_forms__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(/*! ngx-bootstrap/utils */"./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */var BsDatepickerConfig=function BsDatepickerConfig(){/**
         * sets use adaptive position
         */this.adaptivePosition=false;/**
         * sets use UTC date time format
         */this.useUtc=false;/**
         * turn on/off animation
         */this.isAnimated=false;/**
         * CSS class which will be applied to datepicker container,
         * usually used to set color theme
         */this.containerClass="theme-green";// DatepickerRenderOptions
this.displayMonths=1;/**
         * Allows to hide week numbers in datepicker
         */this.showWeekNumbers=true;this.dateInputFormat="L";// range picker
this.rangeSeparator=" - ";/**
         * Date format for date range input field
         */this.rangeInputFormat="L";// DatepickerFormatOptions
this.monthTitle="MMMM";this.yearTitle="YYYY";this.dayLabel="D";this.monthLabel="MMMM";this.yearLabel="YYYY";this.weekNumbers="w"};BsDatepickerConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @abstract
 */var BsDatepickerAbstractComponent=/*#__PURE__*/function(){function BsDatepickerAbstractComponent(){this._customRangesFish=[]}/**
     * @param {?} value
     * @return {?}
     */var _proto14=BsDatepickerAbstractComponent.prototype;/**
     * @param {?} event
     * @return {?}
     */_proto14.setViewMode=function setViewMode(event){}/**
     * @param {?} event
     * @return {?}
     */;_proto14.navigateTo=function navigateTo(event){}/**
     * @param {?} event
     * @return {?}
     */;_proto14.dayHoverHandler=function dayHoverHandler(event){}/**
     * @param {?} event
     * @return {?}
     */;_proto14.weekHoverHandler=function weekHoverHandler(event){}/**
     * @param {?} event
     * @return {?}
     */;_proto14.monthHoverHandler=function monthHoverHandler(event){}/**
     * @param {?} event
     * @return {?}
     */;_proto14.yearHoverHandler=function yearHoverHandler(event){}/**
     * @param {?} day
     * @return {?}
     */;_proto14.daySelectHandler=function daySelectHandler(day){}/**
     * @param {?} event
     * @return {?}
     */;_proto14.monthSelectHandler=function monthSelectHandler(event){}/**
     * @param {?} event
     * @return {?}
     */;_proto14.yearSelectHandler=function yearSelectHandler(event){}/* tslint:disable-next-line: no-any */ /**
     * @param {?} event
     * @return {?}
     */;_proto14._stopPropagation=function _stopPropagation(event){event.stopPropagation()};_createClass(BsDatepickerAbstractComponent,[{key:"minDate",set:function set(value){this._effects.setMinDate(value)}/**
     * @param {?} value
     * @return {?}
     */},{key:"maxDate",set:function set(value){this._effects.setMaxDate(value)}/**
     * @param {?} value
     * @return {?}
     */},{key:"daysDisabled",set:function set(value){this._effects.setDaysDisabled(value)}/**
     * @param {?} value
     * @return {?}
     */},{key:"datesDisabled",set:function set(value){this._effects.setDatesDisabled(value)}/**
     * @param {?} value
     * @return {?}
     */},{key:"isDisabled",set:function set(value){this._effects.setDisabled(value)}/**
     * @param {?} value
     * @return {?}
     */},{key:"dateCustomClasses",set:function set(value){this._effects.setDateCustomClasses(value)}}]);return BsDatepickerAbstractComponent}();/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDatepickerActions=/*#__PURE__*/function(){function BsDatepickerActions(){}var _proto15=BsDatepickerActions.prototype;/**
     * @return {?}
     */_proto15.calculate=function calculate(){return{type:BsDatepickerActions.CALCULATE}}/**
     * @return {?}
     */;_proto15.format=function format(){return{type:BsDatepickerActions.FORMAT}}/**
     * @return {?}
     */;_proto15.flag=function flag(){return{type:BsDatepickerActions.FLAG}}/**
     * @param {?} date
     * @return {?}
     */;_proto15.select=function select(date){return{type:BsDatepickerActions.SELECT,payload:date}}/**
     * @param {?} event
     * @return {?}
     */;_proto15.changeViewMode=function changeViewMode(event){return{type:BsDatepickerActions.CHANGE_VIEWMODE,payload:event}}/**
     * @param {?} event
     * @return {?}
     */;_proto15.navigateTo=function navigateTo(event){return{type:BsDatepickerActions.NAVIGATE_TO,payload:event}}/**
     * @param {?} step
     * @return {?}
     */;_proto15.navigateStep=function navigateStep(step){return{type:BsDatepickerActions.NAVIGATE_OFFSET,payload:step}}/**
     * @param {?} options
     * @return {?}
     */;_proto15.setOptions=function setOptions(options){return{type:BsDatepickerActions.SET_OPTIONS,payload:options}}// date range picker
/**
     * @param {?} value
     * @return {?}
     */;_proto15.selectRange=function selectRange(value){return{type:BsDatepickerActions.SELECT_RANGE,payload:value}}/**
     * @param {?} event
     * @return {?}
     */;_proto15.hoverDay=function hoverDay(event){return{type:BsDatepickerActions.HOVER,payload:event.isHovered?event.cell.date:null}}/**
     * @param {?} date
     * @return {?}
     */;_proto15.minDate=function minDate(date){return{type:BsDatepickerActions.SET_MIN_DATE,payload:date}}/**
     * @param {?} date
     * @return {?}
     */;_proto15.maxDate=function maxDate(date){return{type:BsDatepickerActions.SET_MAX_DATE,payload:date}}/**
     * @param {?} days
     * @return {?}
     */;_proto15.daysDisabled=function daysDisabled(days){return{type:BsDatepickerActions.SET_DAYSDISABLED,payload:days}}/**
     * @param {?} dates
     * @return {?}
     */;_proto15.datesDisabled=function datesDisabled(dates){return{type:BsDatepickerActions.SET_DATESDISABLED,payload:dates}}/**
     * @param {?} value
     * @return {?}
     */;_proto15.isDisabled=function isDisabled(value){return{type:BsDatepickerActions.SET_IS_DISABLED,payload:value}}/**
     * @param {?} value
     * @return {?}
     */;_proto15.setDateCustomClasses=function setDateCustomClasses(value){return{type:BsDatepickerActions.SET_DATE_CUSTOM_CLASSES,payload:value}}/**
     * @param {?} locale
     * @return {?}
     */;_proto15.setLocale=function setLocale(locale){return{type:BsDatepickerActions.SET_LOCALE,payload:locale}};return BsDatepickerActions}();BsDatepickerActions.CALCULATE="[datepicker] calculate dates matrix";BsDatepickerActions.FORMAT="[datepicker] format datepicker values";BsDatepickerActions.FLAG="[datepicker] set flags";BsDatepickerActions.SELECT="[datepicker] select date";BsDatepickerActions.NAVIGATE_OFFSET="[datepicker] shift view date";BsDatepickerActions.NAVIGATE_TO="[datepicker] change view date";BsDatepickerActions.SET_OPTIONS="[datepicker] update render options";BsDatepickerActions.HOVER="[datepicker] hover date";BsDatepickerActions.CHANGE_VIEWMODE="[datepicker] switch view mode";BsDatepickerActions.SET_MIN_DATE="[datepicker] set min date";BsDatepickerActions.SET_MAX_DATE="[datepicker] set max date";BsDatepickerActions.SET_DAYSDISABLED="[datepicker] set days disabled";BsDatepickerActions.SET_DATESDISABLED="[datepicker] set dates disabled";BsDatepickerActions.SET_IS_DISABLED="[datepicker] set is disabled";BsDatepickerActions.SET_DATE_CUSTOM_CLASSES="[datepicker] set date custom classes";BsDatepickerActions.SET_LOCALE="[datepicker] set datepicker locale";BsDatepickerActions.SELECT_RANGE="[daterangepicker] select dates range";BsDatepickerActions.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsLocaleService=/*#__PURE__*/function(){function BsLocaleService(){this._defaultLocale="en";this._locale=new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this._defaultLocale);this._localeChange=this._locale.asObservable()}/**
     * @return {?}
     */var _proto16=BsLocaleService.prototype;/**
     * @param {?} locale
     * @return {?}
     */_proto16.use=function use(locale){if(locale===this.currentLocale){return}this._locale.next(locale)};_createClass(BsLocaleService,[{key:"locale",get:function get(){return this._locale}/**
     * @return {?}
     */},{key:"localeChange",get:function get(){return this._localeChange}/**
     * @return {?}
     */},{key:"currentLocale",get:function get(){return this._locale.getValue()}}]);return BsLocaleService}();BsLocaleService.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDatepickerEffects=/*#__PURE__*/function(){/**
     * @param {?} _actions
     * @param {?} _localeService
     */function BsDatepickerEffects(_actions,_localeService){this._actions=_actions;this._localeService=_localeService;this._subs=[]}/**
     * @param {?} _bsDatepickerStore
     * @return {?}
     */var _proto17=BsDatepickerEffects.prototype;_proto17.init=function init(_bsDatepickerStore){this._store=_bsDatepickerStore;return this}/**
     * setters
     * @param {?} value
     * @return {?}
     */;_proto17.setValue=function setValue(value){this._store.dispatch(this._actions.select(value))}/**
     * @param {?} value
     * @return {?}
     */;_proto17.setRangeValue=function setRangeValue(value){this._store.dispatch(this._actions.selectRange(value))}/**
     * @param {?} value
     * @return {?}
     */;_proto17.setMinDate=function setMinDate(value){this._store.dispatch(this._actions.minDate(value));return this}/**
     * @param {?} value
     * @return {?}
     */;_proto17.setMaxDate=function setMaxDate(value){this._store.dispatch(this._actions.maxDate(value));return this}/**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */;_proto17.setDaysDisabled=function setDaysDisabled(value){/** @type {?} */this._store.dispatch(/** @type {?} */this._actions.daysDisabled(value));return(/** @type {?} */this)}/**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */;_proto17.setDatesDisabled=function setDatesDisabled(value){/** @type {?} */this._store.dispatch(/** @type {?} */this._actions.datesDisabled(value));return(/** @type {?} */this)}/**
     * @param {?} value
     * @return {?}
     */;_proto17.setDisabled=function setDisabled(value){this._store.dispatch(this._actions.isDisabled(value));return this}/**
     * @param {?} value
     * @return {?}
     */;_proto17.setDateCustomClasses=function setDateCustomClasses(value){this._store.dispatch(this._actions.setDateCustomClasses(value));return this}/* Set rendering options */ /**
     * @param {?} _config
     * @return {?}
     */;_proto17.setOptions=function setOptions(_config){/** @type {?} */var _options=Object.assign({locale:this._localeService.currentLocale},_config);this._store.dispatch(this._actions.setOptions(_options));return this}/**
     * view to mode bindings
     * @param {?} container
     * @return {?}
     */;_proto17.setBindings=function setBindings(container){container.daysCalendar=this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.flaggedMonths}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(/**
         * @param {?} months
         * @return {?}
         */function(months){return!!months}));// month calendar
container.monthsCalendar=this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.flaggedMonthsCalendar}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(/**
         * @param {?} months
         * @return {?}
         */function(months){return!!months}));// year calendar
container.yearsCalendar=this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.yearsCalendarFlagged}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(/**
         * @param {?} years
         * @return {?}
         */function(years){return!!years}));container.viewMode=this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.view.mode});container.options=this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.showWeekNumbers}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(/**
         * @param {?} showWeekNumbers
         * @return {?}
         */function(showWeekNumbers){return{showWeekNumbers:showWeekNumbers}}));return this}/**
     * event handlers
     * @param {?} container
     * @return {?}
     */;_proto17.setEventHandlers=function setEventHandlers(container){var _this14=this;container.setViewMode=/**
         * @param {?} event
         * @return {?}
         */function(event){_this14._store.dispatch(_this14._actions.changeViewMode(event))};container.navigateTo=/**
         * @param {?} event
         * @return {?}
         */function(event){_this14._store.dispatch(_this14._actions.navigateStep(event.step))};container.dayHoverHandler=/**
         * @param {?} event
         * @return {?}
         */function(event){/** @type {?} */var _cell=/** @type {?} */event.cell;if(_cell.isOtherMonth||_cell.isDisabled){return}_this14._store.dispatch(_this14._actions.hoverDay(event));_cell.isHovered=event.isHovered};container.monthHoverHandler=/**
         * @param {?} event
         * @return {?}
         */function(event){event.cell.isHovered=event.isHovered};container.yearHoverHandler=/**
         * @param {?} event
         * @return {?}
         */function(event){event.cell.isHovered=event.isHovered};container.monthSelectHandler=/**
         * @param {?} event
         * @return {?}
         */function(event){if(event.isDisabled){return}_this14._store.dispatch(_this14._actions.navigateTo({unit:{month:Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(event.date),year:Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getFullYear"])(event.date)},viewMode:"day"}))};container.yearSelectHandler=/**
         * @param {?} event
         * @return {?}
         */function(event){if(event.isDisabled){return}_this14._store.dispatch(_this14._actions.navigateTo({unit:{year:Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getFullYear"])(event.date)},viewMode:"month"}))};return this}/**
     * @return {?}
     */;_proto17.registerDatepickerSideEffects=function registerDatepickerSideEffects(){var _this15=this;this._subs.push(this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.view}).subscribe(/**
         * @param {?} view
         * @return {?}
         */function(view){_this15._store.dispatch(_this15._actions.calculate())}));// format calendar values on month model change
this._subs.push(this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.monthsModel}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(/**
         * @param {?} monthModel
         * @return {?}
         */function(monthModel){return!!monthModel})).subscribe(/**
         * @param {?} month
         * @return {?}
         */function(month){return _this15._store.dispatch(_this15._actions.format())}));// flag day values
this._subs.push(this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.formattedMonths}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(/**
         * @param {?} month
         * @return {?}
         */function(month){return!!month})).subscribe(/**
         * @param {?} month
         * @return {?}
         */function(month){return _this15._store.dispatch(_this15._actions.flag())}));// flag day values
this._subs.push(this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.selectedDate}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(/**
         * @param {?} selectedDate
         * @return {?}
         */function(selectedDate){return!!selectedDate})).subscribe(/**
         * @param {?} selectedDate
         * @return {?}
         */function(selectedDate){return _this15._store.dispatch(_this15._actions.flag())}));// flag for date range picker
this._subs.push(this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.selectedRange}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(/**
         * @param {?} selectedRange
         * @return {?}
         */function(selectedRange){return!!selectedRange})).subscribe(/**
         * @param {?} selectedRange
         * @return {?}
         */function(selectedRange){return _this15._store.dispatch(_this15._actions.flag())}));// monthsCalendar
this._subs.push(this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.monthsCalendar}).subscribe(/**
         * @return {?}
         */function(){return _this15._store.dispatch(_this15._actions.flag())}));// years calendar
this._subs.push(this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.yearsCalendarModel}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(/**
         * @param {?} state
         * @return {?}
         */function(state){return!!state})).subscribe(/**
         * @return {?}
         */function(){return _this15._store.dispatch(_this15._actions.flag())}));// on hover
this._subs.push(this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.hoveredDate}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(/**
         * @param {?} hoveredDate
         * @return {?}
         */function(hoveredDate){return!!hoveredDate})).subscribe(/**
         * @param {?} hoveredDate
         * @return {?}
         */function(hoveredDate){return _this15._store.dispatch(_this15._actions.flag())}));// date custom classes
this._subs.push(this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.dateCustomClasses}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(/**
         * @param {?} dateCustomClasses
         * @return {?}
         */function(dateCustomClasses){return!!dateCustomClasses})).subscribe(/**
         * @param {?} dateCustomClasses
         * @return {?}
         */function(dateCustomClasses){return _this15._store.dispatch(_this15._actions.flag())}));// on locale change
this._subs.push(this._localeService.localeChange.subscribe(/**
         * @param {?} locale
         * @return {?}
         */function(locale){return _this15._store.dispatch(_this15._actions.setLocale(locale))}));return this}/**
     * @return {?}
     */;_proto17.destroy=function destroy(){for(var _iterator=_createForOfIteratorHelperLoose(this._subs),_step2;!(_step2=_iterator()).done;){var sub=_step2.value;sub.unsubscribe()}};return BsDatepickerEffects}();BsDatepickerEffects.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */BsDatepickerEffects.ctorParameters=function(){return[{type:BsDatepickerActions},{type:BsLocaleService}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var defaultMonthOptions={width:7,height:6};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var _initialView={date:new Date,mode:"day"};/** @type {?} */var initialDatepickerState=Object.assign(new BsDatepickerConfig,{locale:"en",view:_initialView,selectedRange:[],monthViewOptions:defaultMonthOptions});/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} date
 * @param {?} options
 * @return {?}
 */function getStartingDayOfCalendar(date,options){if(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isFirstDayOfWeek"])(date,options.firstDayOfWeek)){return date}/** @type {?} */var weekDay=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getDay"])(date);/** @type {?} */var offset=calculateDateOffset(weekDay,options.firstDayOfWeek);return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(date,{day:-offset})}/**
 * @param {?} weekday
 * @param {?} startingDayOffset
 * @return {?}
 */function calculateDateOffset(weekday,startingDayOffset){if(startingDayOffset===0){return weekday}/** @type {?} */var offset=weekday-startingDayOffset%7;return offset<0?offset+7:offset}/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */function isMonthDisabled(date,min,max){/** @type {?} */var minBound=min&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["endOf"])(date,"month"),min,"day");/** @type {?} */var maxBound=max&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isAfter"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["startOf"])(date,"month"),max,"day");return minBound||maxBound}/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */function isYearDisabled(date,min,max){/** @type {?} */var minBound=min&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["endOf"])(date,"year"),min,"day");/** @type {?} */var maxBound=max&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isAfter"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["startOf"])(date,"year"),max,"day");return minBound||maxBound}/**
 * @param {?} date
 * @param {?} datesDisabled
 * @return {?}
 */function isDisabledDate(date,datesDisabled){if(datesDisabled===undefined||!datesDisabled||!datesDisabled.length){return false}return datesDisabled.some(/**
     * @param {?} dateDisabled
     * @return {?}
     */function(dateDisabled){return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSame"])(date,dateDisabled,"date")})}/**
 * @param {?} state
 * @param {?=} calendarIndex
 * @return {?}
 */function getYearsCalendarInitialDate(state,calendarIndex){if(calendarIndex===void 0){calendarIndex=0}/** @type {?} */var model=state&&state.yearsCalendarModel&&state.yearsCalendarModel[calendarIndex];return model&&model.years&&model.years[0]&&model.years[0][0]&&model.years[0][0].date}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @template T
 * @param {?} options
 * @param {?} fn
 * @return {?}
 */function createMatrix(options,fn){/** @type {?} */var prevValue=options.initialDate;/** @type {?} */var matrix=new Array(options.height);for(var i=0;i<options.height;i++){matrix[i]=new Array(options.width);for(var j=0;j<options.width;j++){matrix[i][j]=fn(prevValue);prevValue=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(prevValue,options.shift)}}return matrix}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} startingDate
 * @param {?} options
 * @return {?}
 */function calcDaysCalendar(startingDate,options){/** @type {?} */var firstDay=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getFirstDayOfMonth"])(startingDate);/** @type {?} */var initialDate=getStartingDayOfCalendar(firstDay,options);/** @type {?} */var matrixOptions={width:options.width,height:options.height,initialDate:initialDate,shift:{day:1}};/** @type {?} */var daysMatrix=createMatrix(matrixOptions,/**
     * @param {?} date
     * @return {?}
     */function(date){return date});return{daysMatrix:daysMatrix,month:firstDay}}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} daysCalendar
 * @param {?} formatOptions
 * @param {?} monthIndex
 * @return {?}
 */function formatDaysCalendar(daysCalendar,formatOptions,monthIndex){return{month:daysCalendar.month,monthTitle:Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(daysCalendar.month,formatOptions.monthTitle,formatOptions.locale),yearTitle:Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(daysCalendar.month,formatOptions.yearTitle,formatOptions.locale),weekNumbers:getWeekNumbers(daysCalendar.daysMatrix,formatOptions.weekNumbers,formatOptions.locale),weekdays:getShiftedWeekdays(formatOptions.locale),weeks:daysCalendar.daysMatrix.map(/**
         * @param {?} week
         * @param {?} weekIndex
         * @return {?}
         */function(week,weekIndex){return{days:week.map(/**
             * @param {?} date
             * @param {?} dayIndex
             * @return {?}
             */function(date,dayIndex){return{date:date,label:Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date,formatOptions.dayLabel,formatOptions.locale),monthIndex:monthIndex,weekIndex:weekIndex,dayIndex:dayIndex}})}})}}/**
 * @param {?} daysMatrix
 * @param {?} format
 * @param {?} locale
 * @return {?}
 */function getWeekNumbers(daysMatrix,format,locale){return daysMatrix.map(/**
     * @param {?} days
     * @return {?}
     */function(days){return days[0]?Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(days[0],format,locale):""})}/**
 * @param {?} locale
 * @return {?}
 */function getShiftedWeekdays(locale){/** @type {?} */var _locale=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getLocale"])(locale);/** @type {?} */var weekdays=/** @type {?} */_locale.weekdaysShort();/** @type {?} */var firstDayOfWeek=_locale.firstDayOfWeek();return[].concat(weekdays.slice(firstDayOfWeek),weekdays.slice(0,firstDayOfWeek))}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} formattedMonth
 * @param {?} options
 * @return {?}
 */function flagDaysCalendar(formattedMonth,options){formattedMonth.weeks.forEach(/**
     * @param {?} week
     * @return {?}
     */function(week){/* tslint:disable-next-line: cyclomatic-complexity */week.days.forEach(/**
         * @param {?} day
         * @param {?} dayIndex
         * @return {?}
         */function(day,dayIndex){// datepicker
/** @type {?} */var isOtherMonth=!Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(day.date,formattedMonth.month);/** @type {?} */var isHovered=!isOtherMonth&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(day.date,options.hoveredDate);// date range picker
/** @type {?} */var isSelectionStart=!isOtherMonth&&options.selectedRange&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(day.date,options.selectedRange[0]);/** @type {?} */var isSelectionEnd=!isOtherMonth&&options.selectedRange&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(day.date,options.selectedRange[1]);/** @type {?} */var isSelected=!isOtherMonth&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(day.date,options.selectedDate)||isSelectionStart||isSelectionEnd;/** @type {?} */var isInRange=!isOtherMonth&&options.selectedRange&&isDateInRange(day.date,options.selectedRange,options.hoveredDate);/** @type {?} */var isDisabled=options.isDisabled||Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(day.date,options.minDate,"day")||Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isAfter"])(day.date,options.maxDate,"day")||Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isDisabledDay"])(day.date,options.daysDisabled)||isDisabledDate(day.date,options.datesDisabled);/** @type {?} */var currentDate=new Date;/** @type {?} */var isToday=!isOtherMonth&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(day.date,currentDate);/** @type {?} */var customClasses=options.dateCustomClasses&&options.dateCustomClasses.map(/**
             * @param {?} dcc
             * @return {?}
             */function(dcc){return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(day.date,dcc.date)?dcc.classes:[]}).reduce(/**
             * @param {?} previousValue
             * @param {?} currentValue
             * @return {?}
             */function(previousValue,currentValue){return previousValue.concat(currentValue)},[]).join(" ")||"";// decide update or not
/** @type {?} */var newDay=Object.assign({},day,{isOtherMonth:isOtherMonth,isHovered:isHovered,isSelected:isSelected,isSelectionStart:isSelectionStart,isSelectionEnd:isSelectionEnd,isInRange:isInRange,isDisabled:isDisabled,isToday:isToday,customClasses:customClasses});if(day.isOtherMonth!==newDay.isOtherMonth||day.isHovered!==newDay.isHovered||day.isSelected!==newDay.isSelected||day.isSelectionStart!==newDay.isSelectionStart||day.isSelectionEnd!==newDay.isSelectionEnd||day.isDisabled!==newDay.isDisabled||day.isInRange!==newDay.isInRange||day.customClasses!==newDay.customClasses){week.days[dayIndex]=newDay}})});// todo: add check for linked calendars
formattedMonth.hideLeftArrow=options.isDisabled||options.monthIndex>0&&options.monthIndex!==options.displayMonths;formattedMonth.hideRightArrow=options.isDisabled||options.monthIndex<options.displayMonths&&options.monthIndex+1!==options.displayMonths;formattedMonth.disableLeftArrow=isMonthDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(formattedMonth.month,{month:-1}),options.minDate,options.maxDate);formattedMonth.disableRightArrow=isMonthDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(formattedMonth.month,{month:1}),options.minDate,options.maxDate);return formattedMonth}/**
 * @param {?} date
 * @param {?} selectedRange
 * @param {?} hoveredDate
 * @return {?}
 */function isDateInRange(date,selectedRange,hoveredDate){if(!date||!selectedRange[0]){return false}if(selectedRange[1]){return date>selectedRange[0]&&date<=selectedRange[1]}if(hoveredDate){return date>selectedRange[0]&&date<=hoveredDate}return false}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} mode
 * @param {?=} minMode
 * @return {?}
 */function canSwitchMode(mode,minMode){return minMode?mode>=minMode:true}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var height=4;/** @type {?} */var width=3;/** @type {?} */var shift={month:1};/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */function formatMonthsCalendar(viewDate,formatOptions){/** @type {?} */var initialDate=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["startOf"])(viewDate,"year");/** @type {?} */var matrixOptions={width:width,height:height,initialDate:initialDate,shift:shift};/** @type {?} */var monthMatrix=createMatrix(matrixOptions,/**
     * @param {?} date
     * @return {?}
     */function(date){return{date:date,label:Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date,formatOptions.monthLabel,formatOptions.locale)}});return{months:monthMatrix,monthTitle:"",yearTitle:Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(viewDate,formatOptions.yearTitle,formatOptions.locale)}}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} monthCalendar
 * @param {?} options
 * @return {?}
 */function flagMonthsCalendar(monthCalendar,options){monthCalendar.months.forEach(/**
     * @param {?} months
     * @param {?} rowIndex
     * @return {?}
     */function(months,rowIndex){months.forEach(/**
         * @param {?} month
         * @param {?} monthIndex
         * @return {?}
         */function(month,monthIndex){/** @type {?} */var isHovered=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(month.date,options.hoveredMonth);/** @type {?} */var isDisabled=options.isDisabled||isMonthDisabled(month.date,options.minDate,options.maxDate);/** @type {?} */var isSelected=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(month.date,options.selectedDate);/** @type {?} */var newMonth=Object.assign(/*{},*/month,{isHovered:isHovered,isDisabled:isDisabled,isSelected:isSelected});if(month.isHovered!==newMonth.isHovered||month.isDisabled!==newMonth.isDisabled||month.isSelected!==newMonth.isSelected){monthCalendar.months[rowIndex][monthIndex]=newMonth}})});// todo: add check for linked calendars
monthCalendar.hideLeftArrow=options.monthIndex>0&&options.monthIndex!==options.displayMonths;monthCalendar.hideRightArrow=options.monthIndex<options.displayMonths&&options.monthIndex+1!==options.displayMonths;monthCalendar.disableLeftArrow=isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(monthCalendar.months[0][0].date,{year:-1}),options.minDate,options.maxDate);monthCalendar.disableRightArrow=isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(monthCalendar.months[0][0].date,{year:1}),options.minDate,options.maxDate);return monthCalendar}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var height$1=4;/** @type {?} */var width$1=4;/** @type {?} */var yearsPerCalendar=height$1*width$1;/** @type {?} */var initialYearShift=(Math.floor(yearsPerCalendar/2)-1)*-1;/** @type {?} */var shift$1={year:1};/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @param {?=} previousInitialDate
 * @return {?}
 */function formatYearsCalendar(viewDate,formatOptions,previousInitialDate){/** @type {?} */var initialDate=calculateInitialDate(viewDate,previousInitialDate);/** @type {?} */var matrixOptions={width:width$1,height:height$1,initialDate:initialDate,shift:shift$1};/** @type {?} */var yearsMatrix=createMatrix(matrixOptions,/**
     * @param {?} date
     * @return {?}
     */function(date){return{date:date,label:Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date,formatOptions.yearLabel,formatOptions.locale)}});/** @type {?} */var yearTitle=formatYearRangeTitle(yearsMatrix,formatOptions);return{years:yearsMatrix,monthTitle:"",yearTitle:yearTitle}}/**
 * @param {?} viewDate
 * @param {?=} previousInitialDate
 * @return {?}
 */function calculateInitialDate(viewDate,previousInitialDate){if(previousInitialDate&&viewDate.getFullYear()>=previousInitialDate.getFullYear()&&viewDate.getFullYear()<previousInitialDate.getFullYear()+yearsPerCalendar){return previousInitialDate}return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(viewDate,{year:initialYearShift})}/**
 * @param {?} yearsMatrix
 * @param {?} formatOptions
 * @return {?}
 */function formatYearRangeTitle(yearsMatrix,formatOptions){/** @type {?} */var from=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(yearsMatrix[0][0].date,formatOptions.yearTitle,formatOptions.locale);/** @type {?} */var to=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(yearsMatrix[height$1-1][width$1-1].date,formatOptions.yearTitle,formatOptions.locale);return from+" - "+to}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} yearsCalendar
 * @param {?} options
 * @return {?}
 */function flagYearsCalendar(yearsCalendar,options){yearsCalendar.years.forEach(/**
     * @param {?} years
     * @param {?} rowIndex
     * @return {?}
     */function(years,rowIndex){years.forEach(/**
         * @param {?} year
         * @param {?} yearIndex
         * @return {?}
         */function(year,yearIndex){/** @type {?} */var isHovered=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameYear"])(year.date,options.hoveredYear);/** @type {?} */var isDisabled=options.isDisabled||isYearDisabled(year.date,options.minDate,options.maxDate);/** @type {?} */var isSelected=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameYear"])(year.date,options.selectedDate);/** @type {?} */var newMonth=Object.assign(/*{},*/year,{isHovered:isHovered,isDisabled:isDisabled,isSelected:isSelected});if(year.isHovered!==newMonth.isHovered||year.isDisabled!==newMonth.isDisabled||year.isSelected!==newMonth.isSelected){yearsCalendar.years[rowIndex][yearIndex]=newMonth}})});// todo: add check for linked calendars
yearsCalendar.hideLeftArrow=options.yearIndex>0&&options.yearIndex!==options.displayMonths;yearsCalendar.hideRightArrow=options.yearIndex<options.displayMonths&&options.yearIndex+1!==options.displayMonths;yearsCalendar.disableLeftArrow=isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(yearsCalendar.years[0][0].date,{year:-1}),options.minDate,options.maxDate);/** @type {?} */var i=yearsCalendar.years.length-1;/** @type {?} */var j=yearsCalendar.years[i].length-1;yearsCalendar.disableRightArrow=isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(yearsCalendar.years[i][j].date,{year:1}),options.minDate,options.maxDate);return yearsCalendar}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /* tslint:disable-next-line: cyclomatic-complexity */ /**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */function bsDatepickerReducer(state,action){if(state===void 0){state=initialDatepickerState}switch(action.type){case BsDatepickerActions.CALCULATE:{return calculateReducer(state)}case BsDatepickerActions.FORMAT:{return formatReducer(state)}case BsDatepickerActions.FLAG:{return flagReducer(state)}case BsDatepickerActions.NAVIGATE_OFFSET:{return navigateOffsetReducer(state,action)}case BsDatepickerActions.NAVIGATE_TO:{/** @type {?} */var payload=action.payload;/** @type {?} */var date=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["setFullDate"])(state.view.date,payload.unit);/** @type {?} */var newState;/** @type {?} */var mode;if(canSwitchMode(payload.viewMode,state.minMode)){mode=payload.viewMode;newState={view:{date:date,mode:mode}}}else{mode=state.view.mode;newState={selectedDate:date,view:{date:date,mode:mode}}}return Object.assign({},state,newState)}case BsDatepickerActions.CHANGE_VIEWMODE:{if(!canSwitchMode(action.payload,state.minMode)){return state}/** @type {?} */var _date2=state.view.date;/** @type {?} */var _mode=action.payload;/** @type {?} */var _newState2={view:{date:_date2,mode:_mode}};return Object.assign({},state,_newState2)}case BsDatepickerActions.HOVER:{return Object.assign({},state,{hoveredDate:action.payload})}case BsDatepickerActions.SELECT:{/** @type {?} */var _newState3={selectedDate:action.payload,view:state.view};/** @type {?} */var _mode2=state.view.mode;/** @type {?} */var _date=action.payload||state.view.date;/** @type {?} */var _date3=getViewDate(_date,state.minDate,state.maxDate);_newState3.view={mode:_mode2,date:_date3};return Object.assign({},state,_newState3)}case BsDatepickerActions.SET_OPTIONS:{/** @type {?} */var _newState4=action.payload;// preserve view mode
/** @type {?} */var _mode3=_newState4.minMode?_newState4.minMode:state.view.mode;/** @type {?} */var _viewDate=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isDateValid"])(_newState4.value)&&_newState4.value||Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isArray"])(_newState4.value)&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isDateValid"])(_newState4.value[0])&&_newState4.value[0]||state.view.date;/** @type {?} */var _date4=getViewDate(_viewDate,_newState4.minDate,_newState4.maxDate);_newState4.view={mode:_mode3,date:_date4};// update selected value
if(_newState4.value){// if new value is array we work with date range
if(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isArray"])(_newState4.value)){_newState4.selectedRange=_newState4.value}// if new value is a date -> datepicker
if(_newState4.value instanceof Date){_newState4.selectedDate=_newState4.value}// provided value is not supported :)
// need to report it somehow
}return Object.assign({},state,_newState4)}// date range picker
case BsDatepickerActions.SELECT_RANGE:{/** @type {?} */var _newState5={selectedRange:action.payload,view:state.view};/** @type {?} */var _mode4=state.view.mode;/** @type {?} */var _date5=action.payload&&action.payload[0]||state.view.date;/** @type {?} */var _date6=getViewDate(_date5,state.minDate,state.maxDate);_newState5.view={mode:_mode4,date:_date6};return Object.assign({},state,_newState5)}case BsDatepickerActions.SET_MIN_DATE:{return Object.assign({},state,{minDate:action.payload})}case BsDatepickerActions.SET_MAX_DATE:{return Object.assign({},state,{maxDate:action.payload})}case BsDatepickerActions.SET_IS_DISABLED:{return Object.assign({},state,{isDisabled:action.payload})}case BsDatepickerActions.SET_DATE_CUSTOM_CLASSES:{return Object.assign({},state,{dateCustomClasses:action.payload})}default:return state;}}/**
 * @param {?} state
 * @return {?}
 */function calculateReducer(state){// how many calendars
/** @type {?} */var displayMonths=state.displayMonths;// use selected date on initial rendering if set
/** @type {?} */var viewDate=state.view.date;if(state.view.mode==="day"){if(state.showPreviousMonth&&state.selectedRange.length===0){viewDate=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(viewDate,{month:-1})}state.monthViewOptions.firstDayOfWeek=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getLocale"])(state.locale).firstDayOfWeek();/** @type {?} */var monthsModel=new Array(displayMonths);for(var monthIndex=0;monthIndex<displayMonths;monthIndex++){// todo: for unlinked calendars it will be harder
monthsModel[monthIndex]=calcDaysCalendar(viewDate,state.monthViewOptions);viewDate=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(viewDate,{month:1})}return Object.assign({},state,{monthsModel:monthsModel})}if(state.view.mode==="month"){/** @type {?} */var monthsCalendar=new Array(displayMonths);for(var calendarIndex=0;calendarIndex<displayMonths;calendarIndex++){// todo: for unlinked calendars it will be harder
monthsCalendar[calendarIndex]=formatMonthsCalendar(viewDate,getFormatOptions(state));viewDate=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(viewDate,{year:1})}return Object.assign({},state,{monthsCalendar:monthsCalendar})}if(state.view.mode==="year"){/** @type {?} */var yearsCalendarModel=new Array(displayMonths);for(var _calendarIndex=0;_calendarIndex<displayMonths;_calendarIndex++){// todo: for unlinked calendars it will be harder
yearsCalendarModel[_calendarIndex]=formatYearsCalendar(viewDate,getFormatOptions(state),state.minMode==="year"?getYearsCalendarInitialDate(state,_calendarIndex):undefined);viewDate=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(viewDate,{year:yearsPerCalendar})}return Object.assign({},state,{yearsCalendarModel:yearsCalendarModel})}return state}/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */function formatReducer(state,action){if(state.view.mode==="day"){/** @type {?} */var formattedMonths=state.monthsModel.map(/**
         * @param {?} month
         * @param {?} monthIndex
         * @return {?}
         */function(month,monthIndex){return formatDaysCalendar(month,getFormatOptions(state),monthIndex)});return Object.assign({},state,{formattedMonths:formattedMonths})}// how many calendars
/** @type {?} */var displayMonths=state.displayMonths;// check initial rendering
// use selected date on initial rendering if set
/** @type {?} */var viewDate=state.view.date;if(state.view.mode==="month"){/** @type {?} */var monthsCalendar=new Array(displayMonths);for(var calendarIndex=0;calendarIndex<displayMonths;calendarIndex++){// todo: for unlinked calendars it will be harder
monthsCalendar[calendarIndex]=formatMonthsCalendar(viewDate,getFormatOptions(state));viewDate=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(viewDate,{year:1})}return Object.assign({},state,{monthsCalendar:monthsCalendar})}if(state.view.mode==="year"){/** @type {?} */var yearsCalendarModel=new Array(displayMonths);for(var _calendarIndex2=0;_calendarIndex2<displayMonths;_calendarIndex2++){// todo: for unlinked calendars it will be harder
yearsCalendarModel[_calendarIndex2]=formatYearsCalendar(viewDate,getFormatOptions(state));viewDate=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(viewDate,{year:16})}return Object.assign({},state,{yearsCalendarModel:yearsCalendarModel})}return state}/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */function flagReducer(state,action){if(state.view.mode==="day"){/** @type {?} */var flaggedMonths=state.formattedMonths.map(/**
         * @param {?} formattedMonth
         * @param {?} monthIndex
         * @return {?}
         */function(formattedMonth,monthIndex){return flagDaysCalendar(formattedMonth,{isDisabled:state.isDisabled,minDate:state.minDate,maxDate:state.maxDate,daysDisabled:state.daysDisabled,datesDisabled:state.datesDisabled,hoveredDate:state.hoveredDate,selectedDate:state.selectedDate,selectedRange:state.selectedRange,displayMonths:state.displayMonths,dateCustomClasses:state.dateCustomClasses,monthIndex:monthIndex})});return Object.assign({},state,{flaggedMonths:flaggedMonths})}if(state.view.mode==="month"){/** @type {?} */var flaggedMonthsCalendar=state.monthsCalendar.map(/**
         * @param {?} formattedMonth
         * @param {?} monthIndex
         * @return {?}
         */function(formattedMonth,monthIndex){return flagMonthsCalendar(formattedMonth,{isDisabled:state.isDisabled,minDate:state.minDate,maxDate:state.maxDate,hoveredMonth:state.hoveredMonth,selectedDate:state.selectedDate,displayMonths:state.displayMonths,monthIndex:monthIndex})});return Object.assign({},state,{flaggedMonthsCalendar:flaggedMonthsCalendar})}if(state.view.mode==="year"){/** @type {?} */var yearsCalendarFlagged=state.yearsCalendarModel.map(/**
         * @param {?} formattedMonth
         * @param {?} yearIndex
         * @return {?}
         */function(formattedMonth,yearIndex){return flagYearsCalendar(formattedMonth,{isDisabled:state.isDisabled,minDate:state.minDate,maxDate:state.maxDate,hoveredYear:state.hoveredYear,selectedDate:state.selectedDate,displayMonths:state.displayMonths,yearIndex:yearIndex})});return Object.assign({},state,{yearsCalendarFlagged:yearsCalendarFlagged})}return state}/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */function navigateOffsetReducer(state,action){/** @type {?} */var newState={view:{mode:state.view.mode,date:shiftViewDate(state,action)}};return Object.assign({},state,newState)}/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */function shiftViewDate(state,action){if(state.view.mode==="year"&&state.minMode==="year"){/** @type {?} */var initialDate=getYearsCalendarInitialDate(state,0);/** @type {?} */var middleDate=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(initialDate,{year:-initialYearShift});return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(middleDate,action.payload)}return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["startOf"])(state.view.date,"month"),action.payload)}/**
 * @param {?} state
 * @return {?}
 */function getFormatOptions(state){return{locale:state.locale,monthTitle:state.monthTitle,yearTitle:state.yearTitle,dayLabel:state.dayLabel,monthLabel:state.monthLabel,yearLabel:state.yearLabel,weekNumbers:state.weekNumbers}}/**
 * if view date is provided (bsValue|ngModel) it should be shown
 * if view date is not provider:
 * if minDate>currentDate (default view value), show minDate
 * if maxDate<currentDate(default view value) show maxDate
 * @param {?} viewDate
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */function getViewDate(viewDate,minDate,maxDate){/** @type {?} */var _date=Array.isArray(viewDate)?viewDate[0]:viewDate;if(minDate&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isAfter"])(minDate,_date,"day")){return minDate}if(maxDate&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(maxDate,_date,"day")){return maxDate}return _date}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDatepickerStore=/*#__PURE__*/function(_ngx_bootstrap_mini_n){_inheritsLoose(BsDatepickerStore,_ngx_bootstrap_mini_n);function BsDatepickerStore(){/** @type {?} */var _dispatcher=new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({type:"[datepicker] dispatcher init"});/** @type {?} */var state=new ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_4__["MiniState"](initialDatepickerState,_dispatcher,bsDatepickerReducer);return _ngx_bootstrap_mini_n.call(this,_dispatcher,bsDatepickerReducer,state)||this}return BsDatepickerStore}(ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_4__["MiniStore"]);BsDatepickerStore.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */BsDatepickerStore.ctorParameters=function(){return[]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var DATEPICKER_ANIMATION_TIMING="220ms cubic-bezier(0, 0, 0.2, 1)";/** @type {?} */var datepickerAnimation=Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])("datepickerAnimation",[Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])("animated-down",Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({height:"*",overflow:"hidden"})),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])("* => animated-down",[Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({height:0,overflow:"hidden"}),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(DATEPICKER_ANIMATION_TIMING)]),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])("animated-up",Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({height:"*",overflow:"hidden"})),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])("* => animated-up",[Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({height:"*",overflow:"hidden"}),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(DATEPICKER_ANIMATION_TIMING)]),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])("* => unanimated",Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])("0s"))]);/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDatepickerContainerComponent=/*#__PURE__*/function(_BsDatepickerAbstract){_inheritsLoose(BsDatepickerContainerComponent,_BsDatepickerAbstract);/**
     * @param {?} _renderer
     * @param {?} _config
     * @param {?} _store
     * @param {?} _element
     * @param {?} _actions
     * @param {?} _effects
     * @param {?} _positionService
     */function BsDatepickerContainerComponent(_renderer,_config,_store,_element,_actions,_effects,_positionService){var _this16;_this16=_BsDatepickerAbstract.call(this)||this;_this16._config=_config;_this16._store=_store;_this16._element=_element;_this16._actions=_actions;_this16._positionService=_positionService;_this16.valueChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];_this16.animationState="void";_this16._subs=[];_this16._effects=_effects;_renderer.setStyle(_element.nativeElement,"display","block");_renderer.setStyle(_element.nativeElement,"position","absolute");return _this16}/**
     * @param {?} value
     * @return {?}
     */var _proto18=BsDatepickerContainerComponent.prototype;/**
     * @return {?}
     */_proto18.ngOnInit=function ngOnInit(){var _this17=this;this._positionService.setOptions({modifiers:{flip:{enabled:this._config.adaptivePosition}},allowedPositions:["top","bottom"]});this._positionService.event$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(/**
         * @return {?}
         */function(){_this17._positionService.disable();if(_this17._config.isAnimated){_this17.animationState=_this17.isTopPosition?"animated-up":"animated-down";return}_this17.animationState="unanimated"});this.isOtherMonthsActive=this._config.selectFromOtherMonth;this.containerClass=this._config.containerClass;this._effects.init(this._store)// intial state options
.setOptions(this._config)// data binding view --> model
.setBindings(this)// set event handlers
.setEventHandlers(this).registerDatepickerSideEffects();// todo: move it somewhere else
// on selected date change
this._subs.push(this._store/* tslint:disable-next-line: no-any */.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.selectedDate})/* tslint:disable-next-line: no-any */.subscribe(/**
         * @param {?} date
         * @return {?}
         */function(date){return _this17.valueChange.emit(date)}))}/**
     * @return {?}
     */;/**
     * @return {?}
     */_proto18.positionServiceEnable=function positionServiceEnable(){this._positionService.enable()}/**
     * @param {?} day
     * @return {?}
     */;_proto18.daySelectHandler=function daySelectHandler(day){/** @type {?} */var isDisabled=this.isOtherMonthsActive?day.isDisabled:day.isOtherMonth||day.isDisabled;if(isDisabled){return}this._store.dispatch(this._actions.select(day.date))}/**
     * @return {?}
     */;_proto18.ngOnDestroy=function ngOnDestroy(){for(var _iterator2=_createForOfIteratorHelperLoose(this._subs),_step3;!(_step3=_iterator2()).done;){var sub=_step3.value;sub.unsubscribe()}this._effects.destroy()};_createClass(BsDatepickerContainerComponent,[{key:"value",set:function set(value){this._effects.setValue(value)}},{key:"isTopPosition",get:function get(){return this._element.nativeElement.classList.contains("top")}}]);return BsDatepickerContainerComponent}(BsDatepickerAbstractComponent);BsDatepickerContainerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-datepicker-container",providers:[BsDatepickerStore,BsDatepickerEffects],template:"<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",host:{class:"bottom","(click)":"_stopPropagation($event)",role:"dialog","aria-label":"calendar"},animations:[datepickerAnimation]}]}];/** @nocollapse */BsDatepickerContainerComponent.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:BsDatepickerConfig},{type:BsDatepickerStore},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:BsDatepickerActions},{type:BsDatepickerEffects},{type:ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDatepickerDirective=/*#__PURE__*/function(){/**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     */function BsDatepickerDirective(_config,_elementRef,_renderer,_viewContainerRef,cis){this._config=_config;/**
         * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
         */this.placement="bottom";/**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */this.triggers="click";/**
         * Close datepicker on outside click
         */this.outsideClick=true;/**
         * A selector specifying the element the datepicker should be appended to.
         */this.container="body";this.outsideEsc=true;/**
         * Emits when datepicker value has been changed
         */this.bsValueChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this._subs=[];// todo: assign only subset of fields
Object.assign(this,this._config);this._datepicker=cis.createLoader(_elementRef,_viewContainerRef,_renderer);this.onShown=this._datepicker.onShown;this.onHidden=this._datepicker.onHidden}/**
     * Returns whether or not the datepicker is currently being shown
     * @return {?}
     */var _proto19=BsDatepickerDirective.prototype;/**
     * @return {?}
     */_proto19.ngOnInit=function ngOnInit(){var _this18=this;this._datepicker.listen({outsideClick:this.outsideClick,outsideEsc:this.outsideEsc,triggers:this.triggers,show:/**
             * @return {?}
             */function show(){return _this18.show()}});this.setConfig()}/**
     * @param {?} changes
     * @return {?}
     */;_proto19.ngOnChanges=function ngOnChanges(changes){if(!this._datepickerRef||!this._datepickerRef.instance){return}if(changes.minDate){this._datepickerRef.instance.minDate=this.minDate}if(changes.maxDate){this._datepickerRef.instance.maxDate=this.maxDate}if(changes.daysDisabled){this._datepickerRef.instance.daysDisabled=this.daysDisabled}if(changes.datesDisabled){this._datepickerRef.instance.datesDisabled=this.datesDisabled}if(changes.isDisabled){this._datepickerRef.instance.isDisabled=this.isDisabled}if(changes.dateCustomClasses){this._datepickerRef.instance.dateCustomClasses=this.dateCustomClasses}}/**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */;_proto19.show=function show(){var _this19=this;if(this._datepicker.isShown){return}this.setConfig();this._datepickerRef=this._datepicker.provide({provide:BsDatepickerConfig,useValue:this._config}).attach(BsDatepickerContainerComponent).to(this.container).position({attachment:this.placement}).show({placement:this.placement});// if date changes from external source (model -> view)
this._subs.push(this.bsValueChange.subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){_this19._datepickerRef.instance.value=value}));// if date changes from picker (view -> model)
this._subs.push(this._datepickerRef.instance.valueChange.subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){_this19.bsValue=value;_this19.hide()}))}/**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */;_proto19.hide=function hide(){if(this.isOpen){this._datepicker.hide()}for(var _iterator3=_createForOfIteratorHelperLoose(this._subs),_step4;!(_step4=_iterator3()).done;){var sub=_step4.value;sub.unsubscribe()}}/**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */;_proto19.toggle=function toggle(){if(this.isOpen){return this.hide()}this.show()}/**
     * Set config for datepicker
     * @return {?}
     */;_proto19.setConfig=function setConfig(){this._config=Object.assign({},this._config,this.bsConfig,{value:this._bsValue,isDisabled:this.isDisabled,minDate:this.minDate||this.bsConfig&&this.bsConfig.minDate,maxDate:this.maxDate||this.bsConfig&&this.bsConfig.maxDate,daysDisabled:this.daysDisabled||this.bsConfig&&this.bsConfig.daysDisabled,dateCustomClasses:this.dateCustomClasses||this.bsConfig&&this.bsConfig.dateCustomClasses,datesDisabled:this.datesDisabled||this.bsConfig&&this.bsConfig.datesDisabled,minMode:this.minMode||this.bsConfig&&this.bsConfig.minMode})}/**
     * @return {?}
     */;_proto19.ngOnDestroy=function ngOnDestroy(){this._datepicker.dispose()};_createClass(BsDatepickerDirective,[{key:"isOpen",get:function get(){return this._datepicker.isShown}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){if(value){this.show()}else{this.hide()}}/**
     * Initial value of datepicker
     * @param {?} value
     * @return {?}
     */},{key:"bsValue",set:function set(value){if(this._bsValue&&value&&this._bsValue.getTime()===value.getTime()){return}this._bsValue=value;this.bsValueChange.emit(value)}}]);return BsDatepickerDirective}();BsDatepickerDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[bsDatepicker]",exportAs:"bsDatepicker"}]}];/** @nocollapse */BsDatepickerDirective.ctorParameters=function(){return[{type:BsDatepickerConfig},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]},{type:ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__["ComponentLoaderFactory"]}]};BsDatepickerDirective.propDecorators={placement:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],triggers:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],outsideClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],container:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],outsideEsc:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isOpen:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onShown:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],bsValue:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],bsConfig:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],minDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],maxDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],minMode:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],daysDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],datesDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],dateCustomClasses:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],bsValueChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDatepickerInlineConfig=/*#__PURE__*/function(_BsDatepickerConfig){_inheritsLoose(BsDatepickerInlineConfig,_BsDatepickerConfig);function BsDatepickerInlineConfig(){return _BsDatepickerConfig.apply(this,arguments)||this}return BsDatepickerInlineConfig}(BsDatepickerConfig);BsDatepickerInlineConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDatepickerInlineContainerComponent=/*#__PURE__*/function(_BsDatepickerContaine){_inheritsLoose(BsDatepickerInlineContainerComponent,_BsDatepickerContaine);/**
     * @param {?} _renderer
     * @param {?} _config
     * @param {?} _store
     * @param {?} _element
     * @param {?} _actions
     * @param {?} _effects
     * @param {?} _positioningService
     */function BsDatepickerInlineContainerComponent(_renderer,_config,_store,_element,_actions,_effects,_positioningService){var _this20;_this20=_BsDatepickerContaine.call(this,_renderer,_config,_store,_element,_actions,_effects,_positioningService)||this;_renderer.setStyle(_element.nativeElement,"display","inline-block");_renderer.setStyle(_element.nativeElement,"position","static");return _this20}return BsDatepickerInlineContainerComponent}(BsDatepickerContainerComponent);BsDatepickerInlineContainerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-datepicker-inline-container",providers:[BsDatepickerStore,BsDatepickerEffects],template:"<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",host:{"(click)":"_stopPropagation($event)"},animations:[datepickerAnimation]}]}];/** @nocollapse */BsDatepickerInlineContainerComponent.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:BsDatepickerConfig},{type:BsDatepickerStore},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:BsDatepickerActions},{type:BsDatepickerEffects},{type:ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDatepickerInlineDirective=/*#__PURE__*/function(){/**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     */function BsDatepickerInlineDirective(_config,_elementRef,_renderer,_viewContainerRef,cis){this._config=_config;this._elementRef=_elementRef;/**
         * Emits when datepicker value has been changed
         */this.bsValueChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this._subs=[];// todo: assign only subset of fields
Object.assign(this,this._config);this._datepicker=cis.createLoader(_elementRef,_viewContainerRef,_renderer)}/**
     * Initial value of datepicker
     * @param {?} value
     * @return {?}
     */var _proto20=BsDatepickerInlineDirective.prototype;/**
     * @return {?}
     */_proto20.ngOnInit=function ngOnInit(){var _this21=this;this.setConfig();this._datepickerRef=this._datepicker.provide({provide:BsDatepickerConfig,useValue:this._config}).attach(BsDatepickerInlineContainerComponent).to(this._elementRef).show();// if date changes from external source (model -> view)
this._subs.push(this.bsValueChange.subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){_this21._datepickerRef.instance.value=value}));// if date changes from picker (view -> model)
this._subs.push(this._datepickerRef.instance.valueChange.subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){_this21.bsValue=value}))}/**
     * @param {?} changes
     * @return {?}
     */;_proto20.ngOnChanges=function ngOnChanges(changes){if(!this._datepickerRef||!this._datepickerRef.instance){return}if(changes.minDate){this._datepickerRef.instance.minDate=this.minDate;this._datepickerRef.instance.value=this._bsValue}if(changes.maxDate){this._datepickerRef.instance.maxDate=this.maxDate;this._datepickerRef.instance.value=this._bsValue}if(changes.datesDisabled){this._datepickerRef.instance.datesDisabled=this.datesDisabled;this._datepickerRef.instance.value=this._bsValue}if(changes.isDisabled){this._datepickerRef.instance.isDisabled=this.isDisabled}if(changes.dateCustomClasses){this._datepickerRef.instance.dateCustomClasses=this.dateCustomClasses}}/**
     * Set config for datepicker
     * @return {?}
     */;_proto20.setConfig=function setConfig(){this._config=Object.assign({},this._config,this.bsConfig,{value:this._bsValue,isDisabled:this.isDisabled,minDate:this.minDate||this.bsConfig&&this.bsConfig.minDate,maxDate:this.maxDate||this.bsConfig&&this.bsConfig.maxDate,dateCustomClasses:this.dateCustomClasses||this.bsConfig&&this.bsConfig.dateCustomClasses,datesDisabled:this.datesDisabled||this.bsConfig&&this.bsConfig.datesDisabled});if(this._datepickerRef!==undefined){this._datepicker.hide();this._datepicker.show()}}/**
     * @return {?}
     */;_proto20.ngOnDestroy=function ngOnDestroy(){this._datepicker.dispose()};_createClass(BsDatepickerInlineDirective,[{key:"bsValue",set:function set(value){if(this._bsValue===value){return}this._bsValue=value;this.bsValueChange.emit(value)}}]);return BsDatepickerInlineDirective}();BsDatepickerInlineDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"bs-datepicker-inline",exportAs:"bsDatepickerInline"}]}];/** @nocollapse */BsDatepickerInlineDirective.ctorParameters=function(){return[{type:BsDatepickerInlineConfig},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]},{type:ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__["ComponentLoaderFactory"]}]};BsDatepickerInlineDirective.propDecorators={bsValue:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],bsConfig:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],minDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],maxDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],dateCustomClasses:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],datesDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],bsValueChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDaterangepickerInlineConfig=/*#__PURE__*/function(_BsDatepickerConfig2){_inheritsLoose(BsDaterangepickerInlineConfig,_BsDatepickerConfig2);function BsDaterangepickerInlineConfig(){var _this22;_this22=_BsDatepickerConfig2.apply(this,arguments)||this;// DatepickerRenderOptions
_this22.displayMonths=2;/**
         * turn on/off animation
         */_this22.isAnimated=false;return _this22}return BsDaterangepickerInlineConfig}(BsDatepickerConfig);BsDaterangepickerInlineConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDaterangepickerContainerComponent=/*#__PURE__*/function(_BsDatepickerAbstract2){_inheritsLoose(BsDaterangepickerContainerComponent,_BsDatepickerAbstract2);/**
     * @param {?} _renderer
     * @param {?} _config
     * @param {?} _store
     * @param {?} _element
     * @param {?} _actions
     * @param {?} _effects
     * @param {?} _positionService
     */function BsDaterangepickerContainerComponent(_renderer,_config,_store,_element,_actions,_effects,_positionService){var _this23;_this23=_BsDatepickerAbstract2.call(this)||this;_this23._config=_config;_this23._store=_store;_this23._element=_element;_this23._actions=_actions;_this23._positionService=_positionService;_this23.valueChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];_this23.animationState="void";_this23._rangeStack=[];_this23._subs=[];_this23._effects=_effects;_renderer.setStyle(_element.nativeElement,"display","block");_renderer.setStyle(_element.nativeElement,"position","absolute");return _this23}/**
     * @param {?} value
     * @return {?}
     */var _proto21=BsDaterangepickerContainerComponent.prototype;/**
     * @return {?}
     */_proto21.ngOnInit=function ngOnInit(){var _this24=this;this._positionService.setOptions({modifiers:{flip:{enabled:this._config.adaptivePosition}},allowedPositions:["top","bottom"]});this._positionService.event$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(/**
         * @return {?}
         */function(){_this24._positionService.disable();if(_this24._config.isAnimated){_this24.animationState=_this24.isTopPosition?"animated-up":"animated-down";return}_this24.animationState="unanimated"});this.containerClass=this._config.containerClass;this.isOtherMonthsActive=this._config.selectFromOtherMonth;this._effects.init(this._store)// intial state options
// todo: fix this, split configs
.setOptions(this._config)// data binding view --> model
.setBindings(this)// set event handlers
.setEventHandlers(this).registerDatepickerSideEffects();// todo: move it somewhere else
// on selected date change
this._subs.push(this._store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.selectedRange}).subscribe(/**
         * @param {?} date
         * @return {?}
         */function(date){return _this24.valueChange.emit(date)}))}/**
     * @return {?}
     */;/**
     * @return {?}
     */_proto21.positionServiceEnable=function positionServiceEnable(){this._positionService.enable()}/**
     * @param {?} day
     * @return {?}
     */;_proto21.daySelectHandler=function daySelectHandler(day){/** @type {?} */var isDisabled=this.isOtherMonthsActive?day.isDisabled:day.isOtherMonth||day.isDisabled;if(isDisabled){return}// if only one date is already selected
// and user clicks on previous date
// start selection from new date
// but if new date is after initial one
// than finish selection
if(this._rangeStack.length===1){this._rangeStack=day.date>=this._rangeStack[0]?[this._rangeStack[0],day.date]:[day.date]}if(this._rangeStack.length===0){this._rangeStack=[day.date]}this._store.dispatch(this._actions.selectRange(this._rangeStack));if(this._rangeStack.length===2){this._rangeStack=[]}}/**
     * @return {?}
     */;_proto21.ngOnDestroy=function ngOnDestroy(){for(var _iterator4=_createForOfIteratorHelperLoose(this._subs),_step5;!(_step5=_iterator4()).done;){var sub=_step5.value;sub.unsubscribe()}this._effects.destroy()};_createClass(BsDaterangepickerContainerComponent,[{key:"value",set:function set(value){this._effects.setRangeValue(value)}},{key:"isTopPosition",get:function get(){return this._element.nativeElement.classList.contains("top")}}]);return BsDaterangepickerContainerComponent}(BsDatepickerAbstractComponent);BsDaterangepickerContainerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-daterangepicker-container",providers:[BsDatepickerStore,BsDatepickerEffects],template:"<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",host:{class:"bottom","(click)":"_stopPropagation($event)",role:"dialog","aria-label":"calendar"},animations:[datepickerAnimation]}]}];/** @nocollapse */BsDaterangepickerContainerComponent.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:BsDatepickerConfig},{type:BsDatepickerStore},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:BsDatepickerActions},{type:BsDatepickerEffects},{type:ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDaterangepickerInlineContainerComponent=/*#__PURE__*/function(_BsDaterangepickerCon){_inheritsLoose(BsDaterangepickerInlineContainerComponent,_BsDaterangepickerCon);/**
     * @param {?} _renderer
     * @param {?} _config
     * @param {?} _store
     * @param {?} _element
     * @param {?} _actions
     * @param {?} _effects
     * @param {?} _positioningService
     */function BsDaterangepickerInlineContainerComponent(_renderer,_config,_store,_element,_actions,_effects,_positioningService){var _this25;_this25=_BsDaterangepickerCon.call(this,_renderer,_config,_store,_element,_actions,_effects,_positioningService)||this;_renderer.setStyle(_element.nativeElement,"display","inline-block");_renderer.setStyle(_element.nativeElement,"position","static");return _this25}return BsDaterangepickerInlineContainerComponent}(BsDaterangepickerContainerComponent);BsDaterangepickerInlineContainerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-daterangepicker-inline-container",providers:[BsDatepickerStore,BsDatepickerEffects],template:"<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",host:{"(click)":"_stopPropagation($event)"},animations:[datepickerAnimation]}]}];/** @nocollapse */BsDaterangepickerInlineContainerComponent.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:BsDatepickerConfig},{type:BsDatepickerStore},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:BsDatepickerActions},{type:BsDatepickerEffects},{type:ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDaterangepickerInlineDirective=/*#__PURE__*/function(){/**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     */function BsDaterangepickerInlineDirective(_config,_elementRef,_renderer,_viewContainerRef,cis){this._config=_config;this._elementRef=_elementRef;/**
         * Emits when daterangepicker value has been changed
         */this.bsValueChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this._subs=[];// todo: assign only subset of fields
Object.assign(this,this._config);this._datepicker=cis.createLoader(_elementRef,_viewContainerRef,_renderer)}/**
     * Initial value of datepicker
     * @param {?} value
     * @return {?}
     */var _proto22=BsDaterangepickerInlineDirective.prototype;/**
     * @return {?}
     */_proto22.ngOnInit=function ngOnInit(){var _this26=this;this.setConfig();this._datepickerRef=this._datepicker.provide({provide:BsDatepickerConfig,useValue:this._config}).attach(BsDaterangepickerInlineContainerComponent).to(this._elementRef).show();// if date changes from external source (model -> view)
this._subs.push(this.bsValueChange.subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){_this26._datepickerRef.instance.value=value}));// if date changes from picker (view -> model)
this._subs.push(this._datepickerRef.instance.valueChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(/**
         * @param {?} range
         * @return {?}
         */function(range){return range&&range[0]&&!!range[1]})).subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){_this26.bsValue=value}))}/**
     * @param {?} changes
     * @return {?}
     */;_proto22.ngOnChanges=function ngOnChanges(changes){if(!this._datepickerRef||!this._datepickerRef.instance){return}if(changes.minDate){this._datepickerRef.instance.minDate=this.minDate}if(changes.maxDate){this._datepickerRef.instance.maxDate=this.maxDate}if(changes.datesDisabled){this._datepickerRef.instance.datesDisabled=this.datesDisabled}if(changes.isDisabled){this._datepickerRef.instance.isDisabled=this.isDisabled}if(changes.dateCustomClasses){this._datepickerRef.instance.dateCustomClasses=this.dateCustomClasses}}/**
     * Set config for datepicker
     * @return {?}
     */;_proto22.setConfig=function setConfig(){this._config=Object.assign({},this._config,this.bsConfig,{value:this._bsValue,isDisabled:this.isDisabled,minDate:this.minDate||this.bsConfig&&this.bsConfig.minDate,maxDate:this.maxDate||this.bsConfig&&this.bsConfig.maxDate,dateCustomClasses:this.dateCustomClasses||this.bsConfig&&this.bsConfig.dateCustomClasses,datesDisabled:this.datesDisabled||this.bsConfig&&this.bsConfig.datesDisabled})}/**
     * @return {?}
     */;_proto22.ngOnDestroy=function ngOnDestroy(){this._datepicker.dispose()};_createClass(BsDaterangepickerInlineDirective,[{key:"bsValue",set:function set(value){if(this._bsValue===value){return}this._bsValue=value;this.bsValueChange.emit(value)}}]);return BsDaterangepickerInlineDirective}();BsDaterangepickerInlineDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"bs-daterangepicker-inline",exportAs:"bsDaterangepickerInline"}]}];/** @nocollapse */BsDaterangepickerInlineDirective.ctorParameters=function(){return[{type:BsDaterangepickerInlineConfig},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]},{type:ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__["ComponentLoaderFactory"]}]};BsDaterangepickerInlineDirective.propDecorators={bsValue:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],bsConfig:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],minDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],maxDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],dateCustomClasses:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],datesDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],bsValueChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var BS_DATEPICKER_VALUE_ACCESSOR={provide:_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],/* tslint:disable-next-line: no-use-before-declare */useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return BsDatepickerInputDirective}),multi:true};/** @type {?} */var BS_DATEPICKER_VALIDATOR={provide:_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALIDATORS"],/* tslint:disable-next-line: no-use-before-declare */useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return BsDatepickerInputDirective}),multi:true};var BsDatepickerInputDirective=/*#__PURE__*/function(){/**
     * @param {?} _picker
     * @param {?} _localeService
     * @param {?} _renderer
     * @param {?} _elRef
     * @param {?} changeDetection
     */function BsDatepickerInputDirective(_picker,_localeService,_renderer,_elRef,changeDetection){var _this27=this;this._picker=_picker;this._localeService=_localeService;this._renderer=_renderer;this._elRef=_elRef;this.changeDetection=changeDetection;this._onChange=Function.prototype;this._onTouched=Function.prototype;/* tslint:disable-next-line: no-unused-variable */this._validatorChange=Function.prototype;// update input value on datepicker value update
this._picker.bsValueChange.subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){/** @type {?} */var preValue=value;if(value){/** @type {?} */var _localeKey=_this27._localeService.currentLocale;/** @type {?} */var _locale=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getLocale"])(_localeKey);if(!_locale){throw new Error("Locale \""+_localeKey+"\" is not defined, please add it with \"defineLocale(...)\"")}preValue=_locale.preinput(value)}_this27._setInputValue(preValue);if(_this27._value!==preValue){_this27._value=preValue;_this27._onChange(preValue);_this27._onTouched()}_this27.changeDetection.markForCheck()});// update input value on locale change
this._localeService.localeChange.subscribe(/**
         * @return {?}
         */function(){_this27._setInputValue(_this27._value)})}/**
     * @param {?} value
     * @return {?}
     */var _proto23=BsDatepickerInputDirective.prototype;_proto23._setInputValue=function _setInputValue(value){/** @type {?} */var initialDate=!value?"":Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(value,this._picker._config.dateInputFormat,this._localeService.currentLocale);this._renderer.setProperty(this._elRef.nativeElement,"value",initialDate)}/**
     * @param {?} event
     * @return {?}
     */;_proto23.onChange=function onChange(event){/* tslint:disable-next-line: no-any*/this.writeValue(/** @type {?} */event.target.value);this._onChange(this._value);this._onTouched()}/**
     * @param {?} c
     * @return {?}
     */;_proto23.validate=function validate(c){/** @type {?} */var _value=c.value;/* tslint:disable-next-line: prefer-switch */if(_value===null||_value===undefined||_value===""){return null}if(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isDate"])(_value)){/** @type {?} */var _isDateValid=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isDateValid"])(_value);if(!_isDateValid){return{bsDate:{invalid:_value}}}if(this._picker&&this._picker.minDate&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(_value,this._picker.minDate,"date")){this.writeValue(this._picker.minDate);return{bsDate:{minDate:this._picker.minDate}}}if(this._picker&&this._picker.maxDate&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isAfter"])(_value,this._picker.maxDate,"date")){this.writeValue(this._picker.maxDate);return{bsDate:{maxDate:this._picker.maxDate}}}}}/**
     * @param {?} fn
     * @return {?}
     */;_proto23.registerOnValidatorChange=function registerOnValidatorChange(fn){this._validatorChange=fn}/**
     * @param {?} value
     * @return {?}
     */;_proto23.writeValue=function writeValue(value){if(!value){this._value=null}else{/** @type {?} */var _localeKey=this._localeService.currentLocale;/** @type {?} */var _locale=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getLocale"])(_localeKey);if(!_locale){throw new Error("Locale \""+_localeKey+"\" is not defined, please add it with \"defineLocale(...)\"")}this._value=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["parseDate"])(value,this._picker._config.dateInputFormat,this._localeService.currentLocale);if(this._picker._config.useUtc){this._value=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["utcAsLocal"])(this._value)}}this._picker.bsValue=this._value}/**
     * @param {?} isDisabled
     * @return {?}
     */;_proto23.setDisabledState=function setDisabledState(isDisabled){this._picker.isDisabled=isDisabled;if(isDisabled){this._renderer.setAttribute(this._elRef.nativeElement,"disabled","disabled");return}this._renderer.removeAttribute(this._elRef.nativeElement,"disabled")}/**
     * @param {?} fn
     * @return {?}
     */;_proto23.registerOnChange=function registerOnChange(fn){this._onChange=fn}/**
     * @param {?} fn
     * @return {?}
     */;_proto23.registerOnTouched=function registerOnTouched(fn){this._onTouched=fn}/**
     * @return {?}
     */;_proto23.onBlur=function onBlur(){this._onTouched()}/**
     * @return {?}
     */;_proto23.hide=function hide(){this._picker.hide();this._renderer.selectRootElement(this._elRef.nativeElement).blur()};return BsDatepickerInputDirective}();BsDatepickerInputDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"input[bsDatepicker]",host:{"(change)":"onChange($event)","(keyup.esc)":"hide()","(blur)":"onBlur()"},providers:[BS_DATEPICKER_VALUE_ACCESSOR,BS_DATEPICKER_VALIDATOR]}]}];/** @nocollapse */BsDatepickerInputDirective.ctorParameters=function(){return[{type:BsDatepickerDirective,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]}]},{type:BsLocaleService},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDaterangepickerConfig=/*#__PURE__*/function(_BsDatepickerConfig3){_inheritsLoose(BsDaterangepickerConfig,_BsDatepickerConfig3);function BsDaterangepickerConfig(){var _this28;_this28=_BsDatepickerConfig3.apply(this,arguments)||this;// DatepickerRenderOptions
_this28.displayMonths=2;return _this28}return BsDaterangepickerConfig}(BsDatepickerConfig);BsDaterangepickerConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDaterangepickerDirective=/*#__PURE__*/function(){/**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     */function BsDaterangepickerDirective(_config,_elementRef,_renderer,_viewContainerRef,cis){this._config=_config;/**
         * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
         */this.placement="bottom";/**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */this.triggers="click";/**
         * Close daterangepicker on outside click
         */this.outsideClick=true;/**
         * A selector specifying the element the daterangepicker should be appended to.
         */this.container="body";this.outsideEsc=true;/**
         * Emits when daterangepicker value has been changed
         */this.bsValueChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this._subs=[];this._datepicker=cis.createLoader(_elementRef,_viewContainerRef,_renderer);Object.assign(this,_config);this.onShown=this._datepicker.onShown;this.onHidden=this._datepicker.onHidden}/**
     * Returns whether or not the daterangepicker is currently being shown
     * @return {?}
     */var _proto24=BsDaterangepickerDirective.prototype;/**
     * @return {?}
     */_proto24.ngOnInit=function ngOnInit(){var _this29=this;this._datepicker.listen({outsideClick:this.outsideClick,outsideEsc:this.outsideEsc,triggers:this.triggers,show:/**
             * @return {?}
             */function show(){return _this29.show()}});this.setConfig()}/**
     * @param {?} changes
     * @return {?}
     */;_proto24.ngOnChanges=function ngOnChanges(changes){if(!this._datepickerRef||!this._datepickerRef.instance){return}if(changes.minDate){this._datepickerRef.instance.minDate=this.minDate}if(changes.maxDate){this._datepickerRef.instance.maxDate=this.maxDate}if(changes.datesDisabled){this._datepickerRef.instance.datesDisabled=this.datesDisabled}if(changes.isDisabled){this._datepickerRef.instance.isDisabled=this.isDisabled}if(changes.dateCustomClasses){this._datepickerRef.instance.dateCustomClasses=this.dateCustomClasses}}/**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */;_proto24.show=function show(){var _this30=this;if(this._datepicker.isShown){return}this.setConfig();this._datepickerRef=this._datepicker.provide({provide:BsDatepickerConfig,useValue:this._config}).attach(BsDaterangepickerContainerComponent).to(this.container).position({attachment:this.placement}).show({placement:this.placement});// if date changes from external source (model -> view)
this._subs.push(this.bsValueChange.subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){_this30._datepickerRef.instance.value=value}));// if date changes from picker (view -> model)
this._subs.push(this._datepickerRef.instance.valueChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(/**
         * @param {?} range
         * @return {?}
         */function(range){return range&&range[0]&&!!range[1]})).subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){_this30.bsValue=value;_this30.hide()}))}/**
     * Set config for daterangepicker
     * @return {?}
     */;_proto24.setConfig=function setConfig(){this._config=Object.assign({},this._config,this.bsConfig,{value:this._bsValue,isDisabled:this.isDisabled,minDate:this.minDate||this.bsConfig&&this.bsConfig.minDate,maxDate:this.maxDate||this.bsConfig&&this.bsConfig.maxDate,dateCustomClasses:this.dateCustomClasses||this.bsConfig&&this.bsConfig.dateCustomClasses,datesDisabled:this.datesDisabled||this.bsConfig&&this.bsConfig.datesDisabled})}/**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */;_proto24.hide=function hide(){if(this.isOpen){this._datepicker.hide()}for(var _iterator5=_createForOfIteratorHelperLoose(this._subs),_step6;!(_step6=_iterator5()).done;){var sub=_step6.value;sub.unsubscribe()}}/**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */;_proto24.toggle=function toggle(){if(this.isOpen){return this.hide()}this.show()}/**
     * @return {?}
     */;_proto24.ngOnDestroy=function ngOnDestroy(){this._datepicker.dispose()};_createClass(BsDaterangepickerDirective,[{key:"isOpen",get:function get(){return this._datepicker.isShown}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){if(value){this.show()}else{this.hide()}}/**
     * Initial value of daterangepicker
     * @param {?} value
     * @return {?}
     */},{key:"bsValue",set:function set(value){if(this._bsValue===value){return}this._bsValue=value;this.bsValueChange.emit(value)}}]);return BsDaterangepickerDirective}();BsDaterangepickerDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[bsDaterangepicker]",exportAs:"bsDaterangepicker"}]}];/** @nocollapse */BsDaterangepickerDirective.ctorParameters=function(){return[{type:BsDaterangepickerConfig},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]},{type:ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__["ComponentLoaderFactory"]}]};BsDaterangepickerDirective.propDecorators={placement:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],triggers:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],outsideClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],container:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],outsideEsc:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isOpen:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onShown:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],bsValue:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],bsConfig:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],minDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],maxDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],dateCustomClasses:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],datesDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],bsValueChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var BS_DATERANGEPICKER_VALUE_ACCESSOR={provide:_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],/* tslint:disable-next-line: no-use-before-declare */useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return BsDaterangepickerInputDirective}),multi:true};/** @type {?} */var BS_DATERANGEPICKER_VALIDATOR={provide:_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALIDATORS"],/* tslint:disable-next-line: no-use-before-declare */useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return BsDaterangepickerInputDirective}),multi:true};var BsDaterangepickerInputDirective=/*#__PURE__*/function(){/**
     * @param {?} _picker
     * @param {?} _localeService
     * @param {?} _renderer
     * @param {?} _elRef
     * @param {?} changeDetection
     */function BsDaterangepickerInputDirective(_picker,_localeService,_renderer,_elRef,changeDetection){var _this31=this;this._picker=_picker;this._localeService=_localeService;this._renderer=_renderer;this._elRef=_elRef;this.changeDetection=changeDetection;this._onChange=Function.prototype;this._onTouched=Function.prototype;/* tslint:disable-next-line: no-unused-variable */this._validatorChange=Function.prototype;// update input value on datepicker value update
this._picker.bsValueChange.subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){/** @type {?} */var preValue=value;if(value){/** @type {?} */var _localeKey=_this31._localeService.currentLocale;/** @type {?} */var _locale=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getLocale"])(_localeKey);if(!_locale){throw new Error("Locale \""+_localeKey+"\" is not defined, please add it with \"defineLocale(...)\"")}preValue=value.map(/**
                 * @param {?} v
                 * @return {?}
                 */function(v){return _locale.preinput(v)})}_this31._setInputValue(preValue);if(_this31._value!==preValue){_this31._value=preValue;_this31._onChange(preValue);_this31._onTouched()}_this31.changeDetection.markForCheck()});// update input value on locale change
this._localeService.localeChange.subscribe(/**
         * @return {?}
         */function(){_this31._setInputValue(_this31._value)})}/**
     * @param {?} date
     * @return {?}
     */var _proto25=BsDaterangepickerInputDirective.prototype;_proto25._setInputValue=function _setInputValue(date){/** @type {?} */var range="";if(date){/** @type {?} */var start=!date[0]?"":Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date[0],this._picker._config.rangeInputFormat,this._localeService.currentLocale);/** @type {?} */var end=!date[1]?"":Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date[1],this._picker._config.rangeInputFormat,this._localeService.currentLocale);range=start&&end?start+this._picker._config.rangeSeparator+end:""}this._renderer.setProperty(this._elRef.nativeElement,"value",range)}/**
     * @param {?} event
     * @return {?}
     */;_proto25.onChange=function onChange(event){/* tslint:disable-next-line: no-any*/this.writeValue(/** @type {?} */event.target.value);this._onChange(this._value);this._onTouched()}/**
     * @param {?} c
     * @return {?}
     */;_proto25.validate=function validate(c){/** @type {?} */var _value=c.value;/** @type {?} */var errors=[];if(_value===null||_value===undefined||!Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isArray"])(_value)){return null}// @ts-ignore
_value.sort(/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */function(a,b){return a-b});/** @type {?} */var _isFirstDateValid=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isDateValid"])(_value[0]);/** @type {?} */var _isSecondDateValid=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isDateValid"])(_value[1]);if(!_isFirstDateValid){return{bsDate:{invalid:_value[0]}}}if(!_isSecondDateValid){return{bsDate:{invalid:_value[1]}}}if(this._picker&&this._picker.minDate&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(_value[0],this._picker.minDate,"date")){_value[0]=this._picker.minDate;errors.push({bsDate:{minDate:this._picker.minDate}})}if(this._picker&&this._picker.maxDate&&Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isAfter"])(_value[1],this._picker.maxDate,"date")){_value[1]=this._picker.maxDate;errors.push({bsDate:{maxDate:this._picker.maxDate}})}if(errors.length>0){this.writeValue(_value);return errors}}/**
     * @param {?} fn
     * @return {?}
     */;_proto25.registerOnValidatorChange=function registerOnValidatorChange(fn){this._validatorChange=fn}/**
     * @param {?} value
     * @return {?}
     */;_proto25.writeValue=function writeValue(value){var _this32=this;if(!value){this._value=null}else{/** @type {?} */var _localeKey=this._localeService.currentLocale;/** @type {?} */var _locale=Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getLocale"])(_localeKey);if(!_locale){throw new Error("Locale \""+_localeKey+"\" is not defined, please add it with \"defineLocale(...)\"")}/** @type {?} */var _input=[];if(typeof value==="string"){_input=value.split(this._picker._config.rangeSeparator)}if(Array.isArray(value)){_input=value}this._value=/** @type {?} */_input.map(/**
             * @param {?} _val
             * @return {?}
             */function(_val){if(_this32._picker._config.useUtc){return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["utcAsLocal"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["parseDate"])(_val,_this32._picker._config.dateInputFormat,_this32._localeService.currentLocale))}return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["parseDate"])(_val,_this32._picker._config.dateInputFormat,_this32._localeService.currentLocale)}).map(/**
             * @param {?} date
             * @return {?}
             */function(date){return isNaN(date.valueOf())?null:date})}this._picker.bsValue=this._value}/**
     * @param {?} isDisabled
     * @return {?}
     */;_proto25.setDisabledState=function setDisabledState(isDisabled){this._picker.isDisabled=isDisabled;if(isDisabled){this._renderer.setAttribute(this._elRef.nativeElement,"disabled","disabled");return}this._renderer.removeAttribute(this._elRef.nativeElement,"disabled")}/* tslint:disable-next-line: no-any*/ /**
     * @param {?} fn
     * @return {?}
     */;_proto25.registerOnChange=function registerOnChange(fn){this._onChange=fn}/* tslint:disable-next-line: no-any*/ /**
     * @param {?} fn
     * @return {?}
     */;_proto25.registerOnTouched=function registerOnTouched(fn){this._onTouched=fn}/**
     * @return {?}
     */;_proto25.onBlur=function onBlur(){this._onTouched()}/**
     * @return {?}
     */;_proto25.hide=function hide(){this._picker.hide();this._renderer.selectRootElement(this._elRef.nativeElement).blur()};return BsDaterangepickerInputDirective}();BsDaterangepickerInputDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"input[bsDaterangepicker]",host:{"(change)":"onChange($event)","(keyup.esc)":"hide()","(blur)":"onBlur()"},providers:[BS_DATERANGEPICKER_VALUE_ACCESSOR,BS_DATERANGEPICKER_VALIDATOR]}]}];/** @nocollapse */BsDaterangepickerInputDirective.ctorParameters=function(){return[{type:BsDaterangepickerDirective,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]}]},{type:BsLocaleService},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsCalendarLayoutComponent=function BsCalendarLayoutComponent(){};BsCalendarLayoutComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-calendar-layout",template:"\n    <!-- current date, will be added in nearest releases -->\n    <bs-current-date title=\"hey there\" *ngIf=\"false\"></bs-current-date>\n\n    <!--navigation-->\n    <div class=\"bs-datepicker-head\">\n      <ng-content select=\"bs-datepicker-navigation-view\"></ng-content>\n    </div>\n\n    <div class=\"bs-datepicker-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <!--timepicker-->\n    <bs-timepicker *ngIf=\"false\"></bs-timepicker>\n  "}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsCurrentDateViewComponent=function BsCurrentDateViewComponent(){};BsCurrentDateViewComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-current-date",template:"<div class=\"current-timedate\"><span>{{ title }}</span></div>"}]}];BsCurrentDateViewComponent.propDecorators={title:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsCustomDatesViewComponent=function BsCustomDatesViewComponent(){};BsCustomDatesViewComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-custom-date-view",template:"\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\" type=\"button\">{{ range.label }}</button>\n      <button *ngIf=\"isCustomRangeShown\" type=\"button\">Custom Range</button>\n    </div>\n  ",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush}]}];BsCustomDatesViewComponent.propDecorators={isCustomRangeShown:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],ranges:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDatepickerDayDecoratorComponent=/*#__PURE__*/function(){/**
     * @param {?} _config
     * @param {?} _elRef
     * @param {?} _renderer
     */function BsDatepickerDayDecoratorComponent(_config,_elRef,_renderer){this._config=_config;this._elRef=_elRef;this._renderer=_renderer}/**
     * @return {?}
     */var _proto26=BsDatepickerDayDecoratorComponent.prototype;_proto26.ngOnInit=function ngOnInit(){var _this33=this;if(this.day.isToday&&this._config&&this._config.customTodayClass){this._renderer.addClass(this._elRef.nativeElement,this._config.customTodayClass)}if(typeof this.day.customClasses==="string"){this.day.customClasses.split(" ").filter(/**
             * @param {?} className
             * @return {?}
             */function(className){return className}).forEach(/**
             * @param {?} className
             * @return {?}
             */function(className){_this33._renderer.addClass(_this33._elRef.nativeElement,className)})}};return BsDatepickerDayDecoratorComponent}();BsDatepickerDayDecoratorComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"[bsDatepickerDayDecorator]",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,host:{"[class.disabled]":"day.isDisabled","[class.is-highlighted]":"day.isHovered","[class.is-other-month]":"day.isOtherMonth","[class.is-active-other-month]":"day.isOtherMonthHovered","[class.in-range]":"day.isInRange","[class.select-start]":"day.isSelectionStart","[class.select-end]":"day.isSelectionEnd","[class.selected]":"day.isSelected"},template:"{{ day.label }}"}]}];/** @nocollapse */BsDatepickerDayDecoratorComponent.ctorParameters=function(){return[{type:BsDatepickerConfig},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]}]};BsDatepickerDayDecoratorComponent.propDecorators={day:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @enum {number} */var BsNavigationDirection={UP:0,DOWN:1};BsNavigationDirection[BsNavigationDirection.UP]="UP";BsNavigationDirection[BsNavigationDirection.DOWN]="DOWN";/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDatepickerNavigationViewComponent=/*#__PURE__*/function(){function BsDatepickerNavigationViewComponent(){this.onNavigate=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.onViewMode=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]}/**
     * @param {?} down
     * @return {?}
     */var _proto27=BsDatepickerNavigationViewComponent.prototype;_proto27.navTo=function navTo(down){this.onNavigate.emit(down?BsNavigationDirection.DOWN:BsNavigationDirection.UP)}/**
     * @param {?} viewMode
     * @return {?}
     */;_proto27.view=function view(viewMode){this.onViewMode.emit(viewMode)};return BsDatepickerNavigationViewComponent}();BsDatepickerNavigationViewComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-datepicker-navigation-view",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,template:"\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            type=\"button\"\n            (click)=\"navTo(true)\">\n      <span>&lsaquo;</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\"\n            *ngIf=\"calendar.monthTitle\"\n            type=\"button\"\n            (click)=\"view('month')\">\n      <span>{{ calendar.monthTitle }}</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\" (click)=\"view('year')\" type=\"button\">\n      <span>{{ calendar.yearTitle }}</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            type=\"button\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "}]}];BsDatepickerNavigationViewComponent.propDecorators={calendar:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onNavigate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onViewMode:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDaysCalendarViewComponent=/*#__PURE__*/function(){/**
     * @param {?} _config
     */function BsDaysCalendarViewComponent(_config){this._config=_config;this.onNavigate=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.onViewMode=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.onSelect=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.onHover=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.onHoverWeek=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]}/**
     * @param {?} event
     * @return {?}
     */var _proto28=BsDaysCalendarViewComponent.prototype;_proto28.navigateTo=function navigateTo(event){/** @type {?} */var step=BsNavigationDirection.DOWN===event?-1:1;this.onNavigate.emit({step:{month:step}})}/**
     * @param {?} event
     * @return {?}
     */;_proto28.changeViewMode=function changeViewMode(event){this.onViewMode.emit(event)}/**
     * @param {?} event
     * @return {?}
     */;_proto28.selectDay=function selectDay(event){this.onSelect.emit(event)}/**
     * @param {?} week
     * @return {?}
     */;_proto28.selectWeek=function selectWeek(week){var _this34=this;if(!this._config.selectWeek){return}if(week.days&&week.days[0]&&!week.days[0].isDisabled&&this._config.selectFromOtherMonth){this.onSelect.emit(week.days[0]);return}if(week.days.length===0){return}/** @type {?} */var selectedDay=week.days.find(/**
         * @param {?} day
         * @return {?}
         */function(day){return _this34._config.selectFromOtherMonth?!day.isDisabled:!day.isOtherMonth&&!day.isDisabled});this.onSelect.emit(selectedDay)}/**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */;_proto28.weekHoverHandler=function weekHoverHandler(cell,isHovered){var _this35=this;if(!this._config.selectWeek){return}/** @type {?} */var hasActiveDays=cell.days.find(/**
         * @param {?} day
         * @return {?}
         */function(day){return _this35._config.selectFromOtherMonth?!day.isDisabled:!day.isOtherMonth&&!day.isDisabled});if(hasActiveDays){cell.isHovered=isHovered;this.isWeekHovered=isHovered;this.onHoverWeek.emit(cell)}}/**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */;_proto28.hoverDay=function hoverDay(cell,isHovered){if(this._config.selectFromOtherMonth&&cell.isOtherMonth){cell.isOtherMonthHovered=isHovered}this.onHover.emit({cell:cell,isHovered:isHovered})};return BsDaysCalendarViewComponent}();BsDaysCalendarViewComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-days-calendar-view",// changeDetection: ChangeDetectionStrategy.OnPush,
template:"\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" [class.active-week]=\"isWeekHovered\"  *ngIf=\"options.showWeekNumbers\">\n            <span\n                (click)=\"selectWeek(week)\"\n                (mouseenter)=\"weekHoverHandler(week, true)\"\n                (mouseleave)=\"weekHoverHandler(week, false)\">{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n          <span bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "}]}];/** @nocollapse */BsDaysCalendarViewComponent.ctorParameters=function(){return[{type:BsDatepickerConfig}]};BsDaysCalendarViewComponent.propDecorators={calendar:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],options:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onNavigate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onViewMode:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onSelect:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onHover:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onHoverWeek:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsMonthCalendarViewComponent=/*#__PURE__*/function(){function BsMonthCalendarViewComponent(){this.onNavigate=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.onViewMode=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.onSelect=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.onHover=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]}/**
     * @param {?} event
     * @return {?}
     */var _proto29=BsMonthCalendarViewComponent.prototype;_proto29.navigateTo=function navigateTo(event){/** @type {?} */var step=BsNavigationDirection.DOWN===event?-1:1;this.onNavigate.emit({step:{year:step}})}/**
     * @param {?} month
     * @return {?}
     */;_proto29.viewMonth=function viewMonth(month){this.onSelect.emit(month)}/**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */;_proto29.hoverMonth=function hoverMonth(cell,isHovered){this.onHover.emit({cell:cell,isHovered:isHovered})}/**
     * @param {?} event
     * @return {?}
     */;_proto29.changeViewMode=function changeViewMode(event){this.onViewMode.emit(event)};return BsMonthCalendarViewComponent}();BsMonthCalendarViewComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-month-calendar-view",template:"\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"months\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.months\">\n          <td *ngFor=\"let month of row\" role=\"gridcell\"\n              (click)=\"viewMonth(month)\"\n              (mouseenter)=\"hoverMonth(month, true)\"\n              (mouseleave)=\"hoverMonth(month, false)\"\n              [class.disabled]=\"month.isDisabled\"\n              [class.is-highlighted]=\"month.isHovered\">\n            <span [class.selected]=\"month.isSelected\">{{ month.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "}]}];BsMonthCalendarViewComponent.propDecorators={calendar:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onNavigate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onViewMode:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onSelect:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onHover:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsTimepickerViewComponent=function BsTimepickerViewComponent(){this.ampm="ok";this.hours=0;this.minutes=0};BsTimepickerViewComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-timepicker",template:"\n    <div class=\"bs-timepicker-container\">\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\" type=\"button\">-</button>\n        <input type=\"text\" [value]=\"hours\" placeholder=\"00\">\n        <button class=\"bs-increase\" type=\"button\">+</button>\n      </div>\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\" type=\"button\">-</button>\n        <input type=\"text\" [value]=\"minutes\" placeholder=\"00\">\n        <button class=\"bs-increase\" type=\"button\">+</button>\n      </div>\n      <button class=\"switch-time-format\" type=\"button\">{{ ampm }}\n        <img\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==\"\n          alt=\"\">\n      </button>\n    </div>\n  "}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsYearsCalendarViewComponent=/*#__PURE__*/function(){function BsYearsCalendarViewComponent(){this.onNavigate=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.onViewMode=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.onSelect=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.onHover=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]}/**
     * @param {?} event
     * @return {?}
     */var _proto30=BsYearsCalendarViewComponent.prototype;_proto30.navigateTo=function navigateTo(event){/** @type {?} */var step=BsNavigationDirection.DOWN===event?-1:1;this.onNavigate.emit({step:{year:step*yearsPerCalendar}})}/**
     * @param {?} year
     * @return {?}
     */;_proto30.viewYear=function viewYear(year){this.onSelect.emit(year)}/**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */;_proto30.hoverYear=function hoverYear(cell,isHovered){this.onHover.emit({cell:cell,isHovered:isHovered})}/**
     * @param {?} event
     * @return {?}
     */;_proto30.changeViewMode=function changeViewMode(event){this.onViewMode.emit(event)};return BsYearsCalendarViewComponent}();BsYearsCalendarViewComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-years-calendar-view",template:"\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span [class.selected]=\"year.isSelected\">{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "}]}];BsYearsCalendarViewComponent.propDecorators={calendar:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onNavigate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onViewMode:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onSelect:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onHover:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var _exports=[BsDatepickerContainerComponent,BsDatepickerDirective,BsDatepickerInlineContainerComponent,BsDatepickerInlineDirective,BsDatepickerInputDirective,BsDaterangepickerContainerComponent,BsDaterangepickerDirective,BsDaterangepickerInlineContainerComponent,BsDaterangepickerInlineDirective,BsDaterangepickerInputDirective];var BsDatepickerModule=/*#__PURE__*/function(){function BsDatepickerModule(){}/**
     * @return {?}
     */BsDatepickerModule.forRoot=function forRoot(){return{ngModule:BsDatepickerModule,providers:[ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__["ComponentLoaderFactory"],ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"],BsDatepickerStore,BsDatepickerActions,BsDatepickerConfig,BsDaterangepickerConfig,BsDatepickerInlineConfig,BsDaterangepickerInlineConfig,BsDatepickerEffects,BsLocaleService]}};return BsDatepickerModule}();BsDatepickerModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]],declarations:[BsCalendarLayoutComponent,BsCurrentDateViewComponent,BsCustomDatesViewComponent,BsDatepickerDayDecoratorComponent,BsDatepickerNavigationViewComponent,BsDaysCalendarViewComponent,BsMonthCalendarViewComponent,BsTimepickerViewComponent,BsYearsCalendarViewComponent].concat(_exports),entryComponents:[BsDatepickerContainerComponent,BsDaterangepickerContainerComponent,BsDatepickerInlineContainerComponent,BsDaterangepickerInlineContainerComponent],exports:_exports}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var DateFormatter=/*#__PURE__*/function(){function DateFormatter(){}var _proto31=DateFormatter.prototype;/**
     * @param {?} date
     * @param {?} format
     * @param {?} locale
     * @return {?}
     */_proto31.format=function format(date,_format2,locale){return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date,_format2,locale)};return DateFormatter}();/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var DatePickerInnerComponent=/*#__PURE__*/function(){function DatePickerInnerComponent(){this.selectionDone=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);this.update=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);this.activeDateChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);/* tslint:disable-next-line: no-any*/this.stepDay={};/* tslint:disable-next-line: no-any*/this.stepMonth={};/* tslint:disable-next-line: no-any*/this.stepYear={};this.modes=["day","month","year"];this.dateFormatter=new DateFormatter}/**
     * @return {?}
     */var _proto32=DatePickerInnerComponent.prototype;// todo: add formatter value to Date object
/**
     * @return {?}
     */_proto32.ngOnInit=function ngOnInit(){// todo: use date for unique value
this.uniqueId="datepicker--"+Math.floor(Math.random()*10000);if(this.initDate){this.activeDate=this.initDate;this.selectedDate=new Date(this.activeDate.valueOf());this.update.emit(this.activeDate)}else if(this.activeDate===undefined){this.activeDate=new Date}}// this.refreshView should be called here to reflect the changes on the fly
// tslint:disable-next-line:no-unused-variable
/**
     * @param {?} changes
     * @return {?}
     */;_proto32.ngOnChanges=function ngOnChanges(changes){this.refreshView();this.checkIfActiveDateGotUpdated(changes.activeDate)}// Check if activeDate has been update and then emit the activeDateChange with the new date
/* tslint:disable-next-line: no-any */ /**
     * @param {?} activeDate
     * @return {?}
     */;_proto32.checkIfActiveDateGotUpdated=function checkIfActiveDateGotUpdated(activeDate){if(activeDate&&!activeDate.firstChange){/** @type {?} */var previousValue=activeDate.previousValue;if(previousValue&&previousValue instanceof Date&&previousValue.getTime()!==activeDate.currentValue.getTime()){this.activeDateChange.emit(this.activeDate)}}}/**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */;_proto32.setCompareHandler=function setCompareHandler(handler,type){if(type==="day"){this.compareHandlerDay=handler}if(type==="month"){this.compareHandlerMonth=handler}if(type==="year"){this.compareHandlerYear=handler}}/**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */;_proto32.compare=function compare(date1,date2){if(date1===undefined||date2===undefined){return undefined}if(this.datepickerMode==="day"&&this.compareHandlerDay){return this.compareHandlerDay(date1,date2)}if(this.datepickerMode==="month"&&this.compareHandlerMonth){return this.compareHandlerMonth(date1,date2)}if(this.datepickerMode==="year"&&this.compareHandlerYear){return this.compareHandlerYear(date1,date2)}return void 0}/**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */;_proto32.setRefreshViewHandler=function setRefreshViewHandler(handler,type){if(type==="day"){this.refreshViewHandlerDay=handler}if(type==="month"){this.refreshViewHandlerMonth=handler}if(type==="year"){this.refreshViewHandlerYear=handler}}/**
     * @return {?}
     */;_proto32.refreshView=function refreshView(){if(this.datepickerMode==="day"&&this.refreshViewHandlerDay){this.refreshViewHandlerDay()}if(this.datepickerMode==="month"&&this.refreshViewHandlerMonth){this.refreshViewHandlerMonth()}if(this.datepickerMode==="year"&&this.refreshViewHandlerYear){this.refreshViewHandlerYear()}}/**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */;_proto32.dateFilter=function dateFilter(date,format){return this.dateFormatter.format(date,format,this.locale)}/* tslint:disable-next-line: no-any*/ /**
     * @param {?} dateObject
     * @return {?}
     */;_proto32.isActive=function isActive(dateObject){if(this.compare(dateObject.date,this.activeDate)===0){this.activeDateId=dateObject.uid;return true}return false}/* tslint:disable-next-line: no-any*/ /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */;_proto32.createDateObject=function createDateObject(date,format){/* tslint:disable-next-line: no-any*/ /** @type {?} */var dateObject={};dateObject.date=new Date(date.getFullYear(),date.getMonth(),date.getDate());dateObject.date=this.fixTimeZone(dateObject.date);dateObject.label=this.dateFilter(date,format);dateObject.selected=this.compare(date,this.selectedDate)===0;dateObject.disabled=this.isDisabled(date);dateObject.current=this.compare(date,new Date)===0;dateObject.customClass=this.getCustomClassForDate(dateObject.date);return dateObject}/* tslint:disable-next-line: no-any*/ /**
     * @param {?} arr
     * @param {?} size
     * @return {?}
     */;_proto32.split=function split(arr,size){/* tslint:disable-next-line: no-any*/ /** @type {?} */var arrays=[];while(arr.length>0){arrays.push(arr.splice(0,size))}return arrays}// Fix a hard-reproducible bug with timezones
// The bug depends on OS, browser, current timezone and current date
// i.e.
// var date = new Date(2014, 0, 1);
// console.log(date.getFullYear(), date.getMonth(), date.getDate(),
// date.getHours()); can result in "2013 11 31 23" because of the bug.
/**
     * @param {?} date
     * @return {?}
     */;_proto32.fixTimeZone=function fixTimeZone(date){/** @type {?} */var hours=date.getHours();return new Date(date.getFullYear(),date.getMonth(),date.getDate(),hours===23?hours+2:0)}/**
     * @param {?} date
     * @param {?=} isManual
     * @return {?}
     */;_proto32.select=function select(date,isManual){if(isManual===void 0){isManual=true}if(this.datepickerMode===this.minMode){if(!this.activeDate){this.activeDate=new Date(0,0,0,0,0,0,0)}this.activeDate=new Date(date.getFullYear(),date.getMonth(),date.getDate());this.activeDate=this.fixTimeZone(this.activeDate);if(isManual){this.selectionDone.emit(this.activeDate)}}else{this.activeDate=new Date(date.getFullYear(),date.getMonth(),date.getDate());this.activeDate=this.fixTimeZone(this.activeDate);if(isManual){this.datepickerMode=this.modes[this.modes.indexOf(this.datepickerMode)-1]}}this.selectedDate=new Date(this.activeDate.valueOf());this.update.emit(this.activeDate);this.refreshView()}/**
     * @param {?} direction
     * @return {?}
     */;_proto32.move=function move(direction){/* tslint:disable-next-line: no-any*/ /** @type {?} */var expectedStep;if(this.datepickerMode==="day"){expectedStep=this.stepDay}if(this.datepickerMode==="month"){expectedStep=this.stepMonth}if(this.datepickerMode==="year"){expectedStep=this.stepYear}if(expectedStep){/** @type {?} */var year=this.activeDate.getFullYear()+direction*(expectedStep.years||0);/** @type {?} */var month=this.activeDate.getMonth()+direction*(expectedStep.months||0);this.activeDate=new Date(year,month,1);this.refreshView();this.activeDateChange.emit(this.activeDate)}}/**
     * @param {?} _direction
     * @return {?}
     */;_proto32.toggleMode=function toggleMode(_direction){/** @type {?} */var direction=_direction||1;if(this.datepickerMode===this.maxMode&&direction===1||this.datepickerMode===this.minMode&&direction===-1){return}this.datepickerMode=this.modes[this.modes.indexOf(this.datepickerMode)+direction];this.refreshView()}/**
     * @protected
     * @param {?} date
     * @return {?}
     */;_proto32.getCustomClassForDate=function getCustomClassForDate(date){var _this36=this;if(!this.customClass){return""}// todo: build a hash of custom classes, it will work faster
/** @type {?} */var customClassObject=this.customClass.find(/**
         * @param {?} customClass
         * @return {?}
         */function(customClass){return customClass.date.valueOf()===date.valueOf()&&customClass.mode===_this36.datepickerMode},this);return customClassObject===undefined?"":customClassObject.clazz}/**
     * @protected
     * @param {?} date1Disabled
     * @param {?} date2
     * @return {?}
     */;_proto32.compareDateDisabled=function compareDateDisabled(date1Disabled,date2){if(date1Disabled===undefined||date2===undefined){return undefined}if(date1Disabled.mode==="day"&&this.compareHandlerDay){return this.compareHandlerDay(date1Disabled.date,date2)}if(date1Disabled.mode==="month"&&this.compareHandlerMonth){return this.compareHandlerMonth(date1Disabled.date,date2)}if(date1Disabled.mode==="year"&&this.compareHandlerYear){return this.compareHandlerYear(date1Disabled.date,date2)}return undefined}/**
     * @protected
     * @param {?} date
     * @return {?}
     */;_proto32.isDisabled=function isDisabled(date){var _this37=this;/** @type {?} */var isDateDisabled=false;if(this.dateDisabled){this.dateDisabled.forEach(/**
             * @param {?} disabledDate
             * @return {?}
             */function(disabledDate){if(_this37.compareDateDisabled(disabledDate,date)===0){isDateDisabled=true}})}if(this.dayDisabled){isDateDisabled=isDateDisabled||this.dayDisabled.indexOf(date.getDay())>-1}return isDateDisabled||this.minDate&&this.compare(date,this.minDate)<0||this.maxDate&&this.compare(date,this.maxDate)>0};_createClass(DatePickerInnerComponent,[{key:"activeDate",get:function get(){return this._activeDate}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._activeDate=value}}]);return DatePickerInnerComponent}();DatePickerInnerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"datepicker-inner",template:"\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" >\n      <ng-content></ng-content>\n    </div>\n  "}]}];DatePickerInnerComponent.propDecorators={locale:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],datepickerMode:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],startingDay:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],yearRange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],minDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],maxDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],minMode:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],maxMode:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],showWeeks:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],formatDay:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],formatMonth:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],formatYear:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],formatDayHeader:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],formatDayTitle:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],formatMonthTitle:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onlyCurrentMonth:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],shortcutPropagation:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],customClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],monthColLimit:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],yearColLimit:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],dateDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],dayDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],initDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],selectionDone:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],update:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],activeDateChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],activeDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var DatepickerConfig=function DatepickerConfig(){this.locale="en";this.datepickerMode="day";this.startingDay=0;this.yearRange=20;this.minMode="day";this.maxMode="year";this.showWeeks=true;this.formatDay="DD";this.formatMonth="MMMM";this.formatYear="YYYY";this.formatDayHeader="dd";this.formatDayTitle="MMMM YYYY";this.formatMonthTitle="YYYY";this.onlyCurrentMonth=false;this.monthColLimit=3;this.yearColLimit=5;this.shortcutPropagation=false};DatepickerConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var DATEPICKER_CONTROL_VALUE_ACCESSOR={provide:_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],/* tslint:disable-next-line: no-use-before-declare */useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return DatePickerComponent}),multi:true};/* tslint:disable:component-selector-name component-selector-type */ /* tslint:enable:component-selector-name component-selector-type */var DatePickerComponent=/*#__PURE__*/function(){/**
     * @param {?} config
     */function DatePickerComponent(config){/**
         * sets datepicker mode, supports: `day`, `month`, `year`
         */this.datepickerMode="day";/**
         * if false week numbers will be hidden
         */this.showWeeks=true;this.selectionDone=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);/**
         * callback to invoke when the activeDate is changed.
         */this.activeDateChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);/* tslint:disable-next-line: no-any*/this.onChange=Function.prototype;/* tslint:disable-next-line: no-any*/this.onTouched=Function.prototype;this._now=new Date;this.config=config;this.configureOptions()}/**
     * currently active date
     * @return {?}
     */var _proto33=DatePickerComponent.prototype;/**
     * @return {?}
     */_proto33.configureOptions=function configureOptions(){Object.assign(this,this.config)}/**
     * @param {?} event
     * @return {?}
     */;_proto33.onUpdate=function onUpdate(event){this.activeDate=event;this.onChange(event)}/**
     * @param {?} event
     * @return {?}
     */;_proto33.onSelectionDone=function onSelectionDone(event){this.selectionDone.emit(event)}/**
     * @param {?} event
     * @return {?}
     */;_proto33.onActiveDateChange=function onActiveDateChange(event){this.activeDateChange.emit(event)}// todo: support null value
/* tslint:disable-next-line: no-any*/ /**
     * @param {?} value
     * @return {?}
     */;_proto33.writeValue=function writeValue(value){if(this._datePicker.compare(value,this._activeDate)===0){return}if(value&&value instanceof Date){this.activeDate=value;this._datePicker.select(value,false);return}this.activeDate=value?new Date(value):void 0}/**
     * @param {?} fn
     * @return {?}
     */;_proto33.registerOnChange=function registerOnChange(fn){this.onChange=fn}/**
     * @param {?} fn
     * @return {?}
     */;_proto33.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn};_createClass(DatePickerComponent,[{key:"activeDate",get:function get(){return this._activeDate||this._now}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._activeDate=value}}]);return DatePickerComponent}();DatePickerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"datepicker",template:"\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",providers:[DATEPICKER_CONTROL_VALUE_ACCESSOR]}]}];/** @nocollapse */DatePickerComponent.ctorParameters=function(){return[{type:DatepickerConfig}]};DatePickerComponent.propDecorators={datepickerMode:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],initDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],minDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],maxDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],minMode:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],maxMode:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],showWeeks:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],formatDay:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],formatMonth:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],formatYear:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],formatDayHeader:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],formatDayTitle:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],formatMonthTitle:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],startingDay:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],yearRange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onlyCurrentMonth:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],shortcutPropagation:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],monthColLimit:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],yearColLimit:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],customClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],dateDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],dayDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],activeDate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],selectionDone:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],activeDateChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],_datePicker:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],args:[DatePickerInnerComponent,{static:true}]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var DayPickerComponent=/*#__PURE__*/function(){/**
     * @param {?} datePicker
     */function DayPickerComponent(datePicker){this.labels=[];this.rows=[];this.weekNumbers=[];this.datePicker=datePicker}/**
     * @return {?}
     */var _proto34=DayPickerComponent.prototype;/*protected getDaysInMonth(year:number, month:number) {
       return ((month === 1) && (year % 4 === 0) &&
       ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
       }*/ /**
     * @return {?}
     */_proto34.ngOnInit=function ngOnInit(){/** @type {?} */var self=this;this.datePicker.stepDay={months:1};this.datePicker.setRefreshViewHandler(/**
         * @return {?}
         */function(){/** @type {?} */var year=this.activeDate.getFullYear();/** @type {?} */var month=this.activeDate.getMonth();/** @type {?} */var firstDayOfMonth=new Date(year,month,1);/** @type {?} */var difference=this.startingDay-firstDayOfMonth.getDay();/** @type {?} */var numDisplayedFromPreviousMonth=difference>0?7-difference:-difference;/** @type {?} */var firstDate=new Date(firstDayOfMonth.getTime());if(numDisplayedFromPreviousMonth>0){firstDate.setDate(-numDisplayedFromPreviousMonth+1)}// 42 is the number of days on a six-week calendar
/** @type {?} */var _days=self.getDates(firstDate,42);/** @type {?} */var days=[];for(var i=0;i<42;i++){/** @type {?} */var _dateObject=this.createDateObject(_days[i],this.formatDay);_dateObject.secondary=_days[i].getMonth()!==month;_dateObject.uid=this.uniqueId+"-"+i;days[i]=_dateObject}self.labels=[];for(var j=0;j<7;j++){self.labels[j]={};self.labels[j].abbr=this.dateFilter(days[j].date,this.formatDayHeader);self.labels[j].full=this.dateFilter(days[j].date,"EEEE")}self.title=this.dateFilter(this.activeDate,this.formatDayTitle);self.rows=this.split(days,7);if(this.showWeeks){self.weekNumbers=[];/** @type {?} */var thursdayIndex=(4+7-this.startingDay)%7;/** @type {?} */var numWeeks=self.rows.length;for(var curWeek=0;curWeek<numWeeks;curWeek++){self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date))}}},"day");this.datePicker.setCompareHandler(/**
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */function(date1,date2){/** @type {?} */var d1=new Date(date1.getFullYear(),date1.getMonth(),date1.getDate());/** @type {?} */var d2=new Date(date2.getFullYear(),date2.getMonth(),date2.getDate());return d1.getTime()-d2.getTime()},"day");this.datePicker.refreshView()}/**
     * @protected
     * @param {?} startDate
     * @param {?} n
     * @return {?}
     */;_proto34.getDates=function getDates(startDate,n){/** @type {?} */var dates=new Array(n);/** @type {?} */var current=new Date(startDate.getTime());/** @type {?} */var i=0;/** @type {?} */var date;while(i<n){date=new Date(current.getTime());date=this.datePicker.fixTimeZone(date);dates[i++]=date;current=new Date(date.getFullYear(),date.getMonth(),date.getDate()+1)}return dates}/**
     * @protected
     * @param {?} date
     * @return {?}
     */;_proto34.getISO8601WeekNumber=function getISO8601WeekNumber(date){/** @type {?} */var checkDate=new Date(date.getTime());// Thursday
checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));/** @type {?} */var time=checkDate.getTime();// Compare with Jan 1
checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate.getTime())/86400000)/7)+1};_createClass(DayPickerComponent,[{key:"isBs4",get:function get(){return!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__["isBs3"])()}}]);return DayPickerComponent}();DayPickerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"daypicker",template:"\n<table *ngIf=\"datePicker.datepickerMode === 'day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId + '-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",styles:["\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "]}]}];/** @nocollapse */DayPickerComponent.ctorParameters=function(){return[{type:DatePickerInnerComponent}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var MonthPickerComponent=/*#__PURE__*/function(){/**
     * @param {?} datePicker
     */function MonthPickerComponent(datePicker){this.rows=[];this.datePicker=datePicker}/**
     * @return {?}
     */var _proto35=MonthPickerComponent.prototype;/**
     * @return {?}
     */_proto35.ngOnInit=function ngOnInit(){/** @type {?} */var self=this;this.datePicker.stepMonth={years:1};this.datePicker.setRefreshViewHandler(/**
         * @return {?}
         */function(){/** @type {?} */var months=new Array(12);/** @type {?} */var year=this.activeDate.getFullYear();/** @type {?} */var date;for(var i=0;i<12;i++){date=new Date(year,i,1);date=this.fixTimeZone(date);months[i]=this.createDateObject(date,this.formatMonth);months[i].uid=this.uniqueId+"-"+i}self.title=this.dateFilter(this.activeDate,this.formatMonthTitle);self.rows=this.split(months,self.datePicker.monthColLimit)},"month");this.datePicker.setCompareHandler(/**
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */function(date1,date2){/** @type {?} */var d1=new Date(date1.getFullYear(),date1.getMonth());/** @type {?} */var d2=new Date(date2.getFullYear(),date2.getMonth());return d1.getTime()-d2.getTime()},"month");this.datePicker.refreshView()};_createClass(MonthPickerComponent,[{key:"isBs4",get:function get(){return!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__["isBs3"])()}}]);return MonthPickerComponent}();MonthPickerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"monthpicker",template:"\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong> \n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",styles:["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]}]}];/** @nocollapse */MonthPickerComponent.ctorParameters=function(){return[{type:DatePickerInnerComponent}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var YearPickerComponent=/*#__PURE__*/function(){/**
     * @param {?} datePicker
     */function YearPickerComponent(datePicker){this.rows=[];this.datePicker=datePicker}/**
     * @return {?}
     */var _proto36=YearPickerComponent.prototype;/**
     * @return {?}
     */_proto36.ngOnInit=function ngOnInit(){/** @type {?} */var self=this;this.datePicker.stepYear={years:this.datePicker.yearRange};this.datePicker.setRefreshViewHandler(/**
         * @return {?}
         */function(){/** @type {?} */var years=new Array(this.yearRange);/** @type {?} */var date;/** @type {?} */var start=self.getStartingYear(this.activeDate.getFullYear());for(var i=0;i<this.yearRange;i++){date=new Date(start+i,0,1);date=this.fixTimeZone(date);years[i]=this.createDateObject(date,this.formatYear);years[i].uid=this.uniqueId+"-"+i}self.title=[years[0].label,years[this.yearRange-1].label].join(" - ");self.rows=this.split(years,self.datePicker.yearColLimit)},"year");this.datePicker.setCompareHandler(/**
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */function(date1,date2){return date1.getFullYear()-date2.getFullYear()},"year");this.datePicker.refreshView()}/**
     * @protected
     * @param {?} year
     * @return {?}
     */;_proto36.getStartingYear=function getStartingYear(year){// todo: parseInt
return(year-1)/this.datePicker.yearRange*this.datePicker.yearRange+1};_createClass(YearPickerComponent,[{key:"isBs4",get:function get(){return!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__["isBs3"])()}}]);return YearPickerComponent}();YearPickerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"yearpicker",template:"\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button>\n      </th>\n      <th [attr.colspan]=\"((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",styles:["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]}]}];/** @nocollapse */YearPickerComponent.ctorParameters=function(){return[{type:DatePickerInnerComponent}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var DatepickerModule=/*#__PURE__*/function(){function DatepickerModule(){}/**
     * @return {?}
     */DatepickerModule.forRoot=function forRoot(){return{ngModule:DatepickerModule,providers:[DatepickerConfig]}};return DatepickerModule}();DatepickerModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],declarations:[DatePickerComponent,DatePickerInnerComponent,DayPickerComponent,MonthPickerComponent,YearPickerComponent],exports:[DatePickerComponent,DatePickerInnerComponent,DayPickerComponent,MonthPickerComponent,YearPickerComponent],entryComponents:[DatePickerComponent]}]}];//# sourceMappingURL=ngx-bootstrap-datepicker.js.map
/***/},/***/"./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js":/*!********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js ***!
  \********************************************************************************/ /*! exports provided: BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownModule, BsDropdownState, BsDropdownToggleDirective */ /***/function node_modulesNgxBootstrapDropdownFesm2015NgxBootstrapDropdownJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDropdownConfig",function(){return BsDropdownConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDropdownContainerComponent",function(){return BsDropdownContainerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDropdownDirective",function(){return BsDropdownDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDropdownMenuDirective",function(){return BsDropdownMenuDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDropdownModule",function(){return BsDropdownModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDropdownState",function(){return BsDropdownState});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsDropdownToggleDirective",function(){return BsDropdownToggleDirective});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");/* harmony import */var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ngx-bootstrap/component-loader */"./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");/* harmony import */var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ngx-bootstrap/utils */"./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");/* harmony import */var _angular_animations__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");/* harmony import */var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ngx-bootstrap/positioning */"./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Default dropdown configuration
 */var BsDropdownConfig=function BsDropdownConfig(){/**
         * default dropdown auto closing behavior
         */this.autoClose=true;/**
         * default dropdown auto closing behavior
         */this.insideClick=false;/**
         * turn on/off animation
         */this.isAnimated=false};BsDropdownConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDropdownState=function BsDropdownState(){var _this38=this;this.direction="down";this.isOpenChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.isDisabledChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.toggleClick=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.dropdownMenu=new Promise(/**
         * @param {?} resolve
         * @return {?}
         */function(resolve){_this38.resolveDropdownMenu=resolve})};BsDropdownState.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */BsDropdownState.ctorParameters=function(){return[]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var DROPDOWN_ANIMATION_TIMING="220ms cubic-bezier(0, 0, 0.2, 1)";/** @type {?} */var dropdownAnimation=[Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({height:0,overflow:"hidden"}),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(DROPDOWN_ANIMATION_TIMING,Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({height:"*",overflow:"hidden"}))];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDropdownContainerComponent=/*#__PURE__*/function(){/**
     * @param {?} _state
     * @param {?} cd
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _builder
     */function BsDropdownContainerComponent(_state,cd,_renderer,_element,_builder){var _this39=this;this._state=_state;this.cd=cd;this._renderer=_renderer;this._element=_element;this.isOpen=false;this._factoryDropDownAnimation=_builder.build(dropdownAnimation);this._subscription=_state.isOpenChange.subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){_this39.isOpen=value;/** @type {?} */var dropdown=_this39._element.nativeElement.querySelector(".dropdown-menu");_this39._renderer.addClass(_this39._element.nativeElement.querySelector("div"),"open");if(dropdown&&!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])()){_this39._renderer.addClass(dropdown,"show");if(dropdown.classList.contains("dropdown-menu-right")){_this39._renderer.setStyle(dropdown,"left","auto");_this39._renderer.setStyle(dropdown,"right","0")}if(_this39.direction==="up"){_this39._renderer.setStyle(dropdown,"top","auto");_this39._renderer.setStyle(dropdown,"transform","translateY(-101%)")}}if(dropdown&&_this39._state.isAnimated){_this39._factoryDropDownAnimation.create(dropdown).play()}_this39.cd.markForCheck();_this39.cd.detectChanges()})}/**
     * @return {?}
     */var _proto37=BsDropdownContainerComponent.prototype;/**
     * \@internal
     * @param {?} el
     * @return {?}
     */_proto37._contains=function _contains(el){return this._element.nativeElement.contains(el)}/**
     * @return {?}
     */;_proto37.ngOnDestroy=function ngOnDestroy(){this._subscription.unsubscribe()};_createClass(BsDropdownContainerComponent,[{key:"direction",get:function get(){return this._state.direction}}]);return BsDropdownContainerComponent}();BsDropdownContainerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-dropdown-container",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,host:{style:"display:block;position: absolute;"},template:"\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content>\n    </div>\n  "}]}];/** @nocollapse */BsDropdownContainerComponent.ctorParameters=function(){return[{type:BsDropdownState},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDropdownDirective=/*#__PURE__*/function(){/**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _cis
     * @param {?} _state
     * @param {?} _config
     * @param {?} _builder
     */function BsDropdownDirective(_elementRef,_renderer,_viewContainerRef,_cis,_state,_config,_builder){this._elementRef=_elementRef;this._renderer=_renderer;this._viewContainerRef=_viewContainerRef;this._cis=_cis;this._state=_state;this._config=_config;// todo: move to component loader
this._isInlineOpen=false;this._subscriptions=[];this._isInited=false;// set initial dropdown state from config
this._state.autoClose=this._config.autoClose;this._state.insideClick=this._config.insideClick;this._state.isAnimated=this._config.isAnimated;this._factoryDropDownAnimation=_builder.build(dropdownAnimation);// create dropdown component loader
this._dropdown=this._cis.createLoader(this._elementRef,this._viewContainerRef,this._renderer).provide({provide:BsDropdownState,useValue:this._state});this.onShown=this._dropdown.onShown;this.onHidden=this._dropdown.onHidden;this.isOpenChange=this._state.isOpenChange}/**
     * Indicates that dropdown will be closed on item or document click,
     * and after pressing ESC
     * @param {?} value
     * @return {?}
     */var _proto38=BsDropdownDirective.prototype;/**
     * @return {?}
     */_proto38.ngOnInit=function ngOnInit(){var _this40=this;// fix: seems there are an issue with `routerLinkActive`
// which result in duplicated call ngOnInit without call to ngOnDestroy
// read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
if(this._isInited){return}this._isInited=true;// attach DOM listeners
this._dropdown.listen({// because of dropdown inline mode
outsideClick:false,triggers:this.triggers,show:/**
             * @return {?}
             */function show(){return _this40.show()}});// toggle visibility on toggle element click
this._subscriptions.push(this._state.toggleClick.subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){return _this40.toggle(value)}));// hide dropdown if set disabled while opened
this._subscriptions.push(this._state.isDisabledChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(/**
         * @param {?} value
         * @return {?}
         */function(value){return value})).subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){return _this40.hide()}))}/**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */;_proto38.show=function show(){var _this41=this;if(this.isOpen||this.isDisabled){return}if(this._showInline){if(!this._inlinedMenu){this._state.dropdownMenu.then(/**
                 * @param {?} dropdownMenu
                 * @return {?}
                 */function(dropdownMenu){_this41._dropdown.attachInline(dropdownMenu.viewContainer,dropdownMenu.templateRef);_this41._inlinedMenu=_this41._dropdown._inlineViewRef;_this41.addBs4Polyfills();_this41._renderer.addClass(_this41._inlinedMenu.rootNodes[0].parentNode,"open");_this41.playAnimation()})// swallow errors
.catch()}this.addBs4Polyfills();this._isInlineOpen=true;this.onShown.emit(true);this._state.isOpenChange.emit(true);this.playAnimation();return}this._state.dropdownMenu.then(/**
         * @param {?} dropdownMenu
         * @return {?}
         */function(dropdownMenu){// check direction in which dropdown should be opened
/** @type {?} */var _dropup=_this41.dropup||typeof _this41.dropup!=="undefined"&&_this41.dropup;_this41._state.direction=_dropup?"up":"down";/** @type {?} */var _placement=_this41.placement||(_dropup?"top start":"bottom start");// show dropdown
_this41._dropdown.attach(BsDropdownContainerComponent).to(_this41.container).position({attachment:_placement}).show({content:dropdownMenu.templateRef,placement:_placement});_this41._state.isOpenChange.emit(true)})// swallow error
.catch()}/**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */;_proto38.hide=function hide(){if(!this.isOpen){return}if(this._showInline){this.removeShowClass();this.removeDropupStyles();this._isInlineOpen=false;this.onHidden.emit(true)}else{this._dropdown.hide()}this._state.isOpenChange.emit(false)}/**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     * @param {?=} value
     * @return {?}
     */;_proto38.toggle=function toggle(value){if(this.isOpen||!value){return this.hide()}return this.show()}/**
     * \@internal
     * @param {?} event
     * @return {?}
     */;_proto38._contains=function _contains(event){return this._elementRef.nativeElement.contains(event.target)||this._dropdown.instance&&this._dropdown.instance._contains(event.target)}/**
     * @return {?}
     */;_proto38.ngOnDestroy=function ngOnDestroy(){// clean up subscriptions and destroy dropdown
for(var _iterator6=_createForOfIteratorHelperLoose(this._subscriptions),_step7;!(_step7=_iterator6()).done;){var sub=_step7.value;sub.unsubscribe()}this._dropdown.dispose()}/**
     * @private
     * @return {?}
     */;_proto38.addBs4Polyfills=function addBs4Polyfills(){if(!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])()){this.addShowClass();this.checkRightAlignment();this.addDropupStyles()}}/**
     * @private
     * @return {?}
     */;_proto38.playAnimation=function playAnimation(){if(this._state.isAnimated&&this._inlinedMenu){this._factoryDropDownAnimation.create(this._inlinedMenu.rootNodes[0]).play()}}/**
     * @private
     * @return {?}
     */;_proto38.addShowClass=function addShowClass(){if(this._inlinedMenu&&this._inlinedMenu.rootNodes[0]){this._renderer.addClass(this._inlinedMenu.rootNodes[0],"show")}}/**
     * @private
     * @return {?}
     */;_proto38.removeShowClass=function removeShowClass(){if(this._inlinedMenu&&this._inlinedMenu.rootNodes[0]){this._renderer.removeClass(this._inlinedMenu.rootNodes[0],"show")}}/**
     * @private
     * @return {?}
     */;_proto38.checkRightAlignment=function checkRightAlignment(){if(this._inlinedMenu&&this._inlinedMenu.rootNodes[0]){/** @type {?} */var isRightAligned=this._inlinedMenu.rootNodes[0].classList.contains("dropdown-menu-right");this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"left",isRightAligned?"auto":"0");this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"right",isRightAligned?"0":"auto")}}/**
     * @private
     * @return {?}
     */;_proto38.addDropupStyles=function addDropupStyles(){if(this._inlinedMenu&&this._inlinedMenu.rootNodes[0]){// a little hack to not break support of bootstrap 4 beta
this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"top",this.dropup?"auto":"100%");this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"transform",this.dropup?"translateY(-101%)":"translateY(0)");this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"bottom","auto")}}/**
     * @private
     * @return {?}
     */;_proto38.removeDropupStyles=function removeDropupStyles(){if(this._inlinedMenu&&this._inlinedMenu.rootNodes[0]){this._renderer.removeStyle(this._inlinedMenu.rootNodes[0],"top");this._renderer.removeStyle(this._inlinedMenu.rootNodes[0],"transform");this._renderer.removeStyle(this._inlinedMenu.rootNodes[0],"bottom")}};_createClass(BsDropdownDirective,[{key:"autoClose",set:function set(value){this._state.autoClose=value}/**
     * @return {?}
     */,get:function get(){return this._state.autoClose}/**
     * Indicates that dropdown will be animated
     * @param {?} value
     * @return {?}
     */},{key:"isAnimated",set:function set(value){this._state.isAnimated=value}/**
     * @return {?}
     */,get:function get(){return this._state.isAnimated}/**
     * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
     * @param {?} value
     * @return {?}
     */},{key:"insideClick",set:function set(value){this._state.insideClick=value}/**
     * @return {?}
     */,get:function get(){return this._state.insideClick}/**
     * Disables dropdown toggle and hides dropdown menu if opened
     * @param {?} value
     * @return {?}
     */},{key:"isDisabled",set:function set(value){this._isDisabled=value;this._state.isDisabledChange.emit(value);if(value){this.hide()}}/**
     * @return {?}
     */,get:function get(){return this._isDisabled}/**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */},{key:"isOpen",get:function get(){if(this._showInline){return this._isInlineOpen}return this._dropdown.isShown}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){if(value){this.show()}else{this.hide()}}/**
     * @return {?}
     */},{key:"isBs4",get:function get(){return!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])()}/**
     * @private
     * @return {?}
     */},{key:"_showInline",get:function get(){return!this.container}}]);return BsDropdownDirective}();BsDropdownDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[bsDropdown],[dropdown]",exportAs:"bs-dropdown",providers:[BsDropdownState],host:{"[class.dropup]":"dropup","[class.open]":"isOpen","[class.show]":"isOpen && isBs4"}}]}];/** @nocollapse */BsDropdownDirective.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]},{type:ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]},{type:BsDropdownState},{type:BsDropdownConfig},{type:_angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"]}]};BsDropdownDirective.propDecorators={placement:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],triggers:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],container:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],dropup:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],autoClose:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isAnimated:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],insideClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isOpen:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isOpenChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onShown:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDropdownMenuDirective=// tslint:disable:no-any
/**
     * @param {?} _state
     * @param {?} _viewContainer
     * @param {?} _templateRef
     */function BsDropdownMenuDirective(_state,_viewContainer,_templateRef){_state.resolveDropdownMenu({templateRef:_templateRef,viewContainer:_viewContainer})};BsDropdownMenuDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[bsDropdownMenu],[dropdownMenu]",exportAs:"bs-dropdown-menu"}]}];/** @nocollapse */BsDropdownMenuDirective.ctorParameters=function(){return[{type:BsDropdownState},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDropdownToggleDirective=/*#__PURE__*/function(){/**
     * @param {?} _changeDetectorRef
     * @param {?} _dropdown
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _state
     */function BsDropdownToggleDirective(_changeDetectorRef,_dropdown,_element,_renderer,_state){var _this42=this;this._changeDetectorRef=_changeDetectorRef;this._dropdown=_dropdown;this._element=_element;this._renderer=_renderer;this._state=_state;this.isDisabled=null;this._subscriptions=[];// sync is open value with state
this._subscriptions.push(this._state.isOpenChange.subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){_this42.isOpen=value;if(value){_this42._documentClickListener=_this42._renderer.listen("document","click",/**
                 * @param {?} event
                 * @return {?}
                 */function(event){if(_this42._state.autoClose&&event.button!==2&&!_this42._element.nativeElement.contains(event.target)&&!(_this42._state.insideClick&&_this42._dropdown._contains(event))){_this42._state.toggleClick.emit(false);_this42._changeDetectorRef.detectChanges()}});_this42._escKeyUpListener=_this42._renderer.listen(_this42._element.nativeElement,"keyup.esc",/**
                 * @return {?}
                 */function(){if(_this42._state.autoClose){_this42._state.toggleClick.emit(false);_this42._changeDetectorRef.detectChanges()}})}else{_this42._documentClickListener();_this42._escKeyUpListener()}}));// populate disabled state
this._subscriptions.push(this._state.isDisabledChange.subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){return _this42.isDisabled=value||null}))}/**
     * @return {?}
     */var _proto39=BsDropdownToggleDirective.prototype;_proto39.onClick=function onClick(){if(this.isDisabled){return}this._state.toggleClick.emit(true)}/**
     * @return {?}
     */;_proto39.ngOnDestroy=function ngOnDestroy(){if(this._documentClickListener){this._documentClickListener()}if(this._escKeyUpListener){this._escKeyUpListener()}for(var _iterator7=_createForOfIteratorHelperLoose(this._subscriptions),_step8;!(_step8=_iterator7()).done;){var sub=_step8.value;sub.unsubscribe()}};return BsDropdownToggleDirective}();BsDropdownToggleDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[bsDropdownToggle],[dropdownToggle]",exportAs:"bs-dropdown-toggle",host:{"[attr.aria-haspopup]":"true"}}]}];/** @nocollapse */BsDropdownToggleDirective.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]},{type:BsDropdownDirective},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:BsDropdownState}]};BsDropdownToggleDirective.propDecorators={isDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["attr.disabled"]}],isOpen:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["attr.aria-expanded"]}],onClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["click",[]]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsDropdownModule=/*#__PURE__*/function(){function BsDropdownModule(){}// tslint:disable-next-line:no-any
/**
     * @param {?=} config
     * @return {?}
     */BsDropdownModule.forRoot=function forRoot(config){return{ngModule:BsDropdownModule,providers:[ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"],ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"],BsDropdownState,{provide:BsDropdownConfig,useValue:config?config:{autoClose:true,insideClick:false}}]}};return BsDropdownModule}();BsDropdownModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{declarations:[BsDropdownMenuDirective,BsDropdownToggleDirective,BsDropdownContainerComponent,BsDropdownDirective],exports:[BsDropdownMenuDirective,BsDropdownToggleDirective,BsDropdownDirective],entryComponents:[BsDropdownContainerComponent]}]}];//# sourceMappingURL=ngx-bootstrap-dropdown.js.map
/***/},/***/"./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js":/*!**********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js ***!
  \**********************************************************/ /*! exports provided: listLocales, setTheme, AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent, AlertComponent, AlertConfig, AlertModule, ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, CarouselComponent, CarouselConfig, CarouselModule, SlideComponent, CollapseDirective, CollapseModule, BsDatepickerConfig, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInputDirective, BsLocaleService, DateFormatter, DatePickerComponent, DatepickerConfig, DatePickerInnerComponent, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, ModalDirective, ModalOptions, ModalBackdropOptions, ModalBackdropComponent, ModalModule, BsModalRef, BsModalService, BsDropdownModule, BsDropdownConfig, BsDropdownState, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule, RatingComponent, RatingModule, RatingConfig, DraggableItemService, SortableComponent, SortableModule, NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule, TimepickerComponent, TimepickerConfig, TimepickerModule, TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, TypeaheadOptions, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadMatch, TypeaheadModule, PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule, OnChange, document, window, parseTriggers, LinkedList, isBs3, Trigger, warnOnce, Utils, listenToTriggersV2, registerOutsideClick, ComponentLoader, ComponentLoaderFactory, ContentRef, BsComponentRef, Positioning, PositioningService, positionElements, MiniState, MiniStore, defineLocale, getSetGlobalLocale, parseDate, formatDate, getDay, isFirstDayOfWeek, isSameYear, isSameDay, isSameMonth, getFullYear, getFirstDayOfMonth, getMonth, getLocale, updateLocale, isAfter, isBefore, isArray, isDateValid, isDate, shiftDate, setFullDate, endOf, startOf, arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, etLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, huLocale, hrLocale, idLocale, itLocale, jaLocale, kaLocale, koLocale, ltLocale, lvLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, thBeLocale, trLocale, ukLocale, viLocale, zhCnLocale */ /***/function node_modulesNgxBootstrapEsm5NgxBootstrapJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _public_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ./public_api */"./node_modules/ngx-bootstrap/esm5/public_api.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"listLocales",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["listLocales"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"setTheme",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["setTheme"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AccordionComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AccordionConfig",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AccordionModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AccordionPanelComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionPanelComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AlertComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AlertConfig",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AlertModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ButtonCheckboxDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonCheckboxDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ButtonRadioDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonRadioDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ButtonRadioGroupDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonRadioGroupDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ButtonsModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonsModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"CarouselComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["CarouselComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"CarouselConfig",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["CarouselConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"CarouselModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["CarouselModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"SlideComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["SlideComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"CollapseDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["CollapseDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"CollapseModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["CollapseModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDatepickerConfig",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDatepickerContainerComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerContainerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDatepickerDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDatepickerInlineContainerComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerInlineContainerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDatepickerInlineDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerInlineDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDatepickerInputDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerInputDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDatepickerModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerConfig",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDaterangepickerConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerContainerComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDaterangepickerContainerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDaterangepickerDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerInputDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDaterangepickerInputDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsLocaleService",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsLocaleService"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DateFormatter",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["DateFormatter"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DatePickerComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatePickerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DatepickerConfig",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatepickerConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DatePickerInnerComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatePickerInnerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DatepickerModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatepickerModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DayPickerComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["DayPickerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"MonthPickerComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["MonthPickerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"YearPickerComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["YearPickerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ModalDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ModalOptions",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalOptions"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ModalBackdropOptions",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalBackdropOptions"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ModalBackdropComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalBackdropComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ModalModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsModalRef",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsModalRef"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsModalService",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsModalService"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDropdownModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDropdownConfig",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDropdownState",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownState"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDropdownContainerComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownContainerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDropdownDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDropdownMenuDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownMenuDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDropdownToggleDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownToggleDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PagerComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["PagerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PaginationComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["PaginationComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PaginationConfig",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["PaginationConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PaginationModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["PaginationModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BarComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BarComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ProgressbarComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ProgressbarComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ProgressbarConfig",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ProgressbarConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ProgressbarModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ProgressbarModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"RatingComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["RatingComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"RatingModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["RatingModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"RatingConfig",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["RatingConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DraggableItemService",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["DraggableItemService"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"SortableComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["SortableComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"SortableModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["SortableModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"NgTranscludeDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgTranscludeDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TabDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TabHeadingDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabHeadingDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TabsetComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabsetComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TabsetConfig",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabsetConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TabsModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabsModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TimepickerComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TimepickerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TimepickerConfig",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TimepickerConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TimepickerModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TimepickerModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TooltipConfig",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TooltipContainerComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipContainerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TooltipDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TooltipModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TypeaheadOptions",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadOptions"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TypeaheadContainerComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadContainerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TypeaheadDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TypeaheadMatch",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadMatch"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TypeaheadModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PopoverConfig",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PopoverContainerComponent",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverContainerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PopoverDirective",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PopoverModule",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"OnChange",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["OnChange"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"document",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["document"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"window",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["window"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"parseTriggers",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["parseTriggers"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"LinkedList",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["LinkedList"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isBs3",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["isBs3"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Trigger",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["Trigger"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"warnOnce",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["warnOnce"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Utils",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["Utils"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"listenToTriggersV2",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["listenToTriggersV2"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"registerOutsideClick",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["registerOutsideClick"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ComponentLoader",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ComponentLoader"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ComponentLoaderFactory",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ComponentLoaderFactory"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ContentRef",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ContentRef"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsComponentRef",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsComponentRef"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Positioning",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["Positioning"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PositioningService",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["PositioningService"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"positionElements",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["positionElements"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"MiniState",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["MiniState"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"MiniStore",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["MiniStore"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"defineLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["defineLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"getSetGlobalLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["getSetGlobalLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"parseDate",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["parseDate"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"formatDate",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["formatDate"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"getDay",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["getDay"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isFirstDayOfWeek",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["isFirstDayOfWeek"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isSameYear",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["isSameYear"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isSameDay",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["isSameDay"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isSameMonth",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"getFullYear",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["getFullYear"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"getFirstDayOfMonth",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["getFirstDayOfMonth"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"getMonth",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["getMonth"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"getLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["getLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"updateLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["updateLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isAfter",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["isAfter"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isBefore",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["isBefore"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isArray",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["isArray"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isDateValid",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["isDateValid"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isDate",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["isDate"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"shiftDate",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["shiftDate"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"setFullDate",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["setFullDate"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"endOf",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["endOf"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"startOf",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["startOf"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"arLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["arLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"bgLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["bgLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"caLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["caLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"csLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["csLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"daLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["daLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"deLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["deLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"enGbLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["enGbLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"esDoLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["esDoLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"esLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["esLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"esUsLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["esUsLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"etLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["etLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"fiLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["fiLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"frLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["frLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"glLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["glLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"heLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["heLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"hiLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["hiLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"huLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["huLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"hrLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["hrLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"idLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["idLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"itLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["itLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"jaLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["jaLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"kaLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["kaLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"koLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["koLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ltLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ltLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"lvLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["lvLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"mnLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["mnLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"nbLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["nbLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"nlBeLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["nlBeLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"nlLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["nlLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"plLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["plLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ptBrLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ptBrLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"roLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["roLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ruLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ruLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"skLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["skLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"slLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["slLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"svLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["svLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"thLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["thLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"thBeLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["thBeLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"trLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["trLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ukLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["ukLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"viLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["viLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"zhCnLocale",function(){return _public_api__WEBPACK_IMPORTED_MODULE_0__["zhCnLocale"]});/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Generated bundle index. Do not edit.
 */ //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvIiwic291cmNlcyI6WyJuZ3gtYm9vdHN0cmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxpc0ZBQWMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL3B1YmxpY19hcGknO1xuIl19
/***/},/***/"./node_modules/ngx-bootstrap/esm5/public_api.js":/*!*******************************************************!*\
  !*** ./node_modules/ngx-bootstrap/esm5/public_api.js ***!
  \*******************************************************/ /*! exports provided: listLocales, setTheme, AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent, AlertComponent, AlertConfig, AlertModule, ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, CarouselComponent, CarouselConfig, CarouselModule, SlideComponent, CollapseDirective, CollapseModule, BsDatepickerConfig, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInputDirective, BsLocaleService, DateFormatter, DatePickerComponent, DatepickerConfig, DatePickerInnerComponent, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, ModalDirective, ModalOptions, ModalBackdropOptions, ModalBackdropComponent, ModalModule, BsModalRef, BsModalService, BsDropdownModule, BsDropdownConfig, BsDropdownState, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule, RatingComponent, RatingModule, RatingConfig, DraggableItemService, SortableComponent, SortableModule, NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule, TimepickerComponent, TimepickerConfig, TimepickerModule, TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, TypeaheadOptions, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadMatch, TypeaheadModule, PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule, OnChange, document, window, parseTriggers, LinkedList, isBs3, Trigger, warnOnce, Utils, listenToTriggersV2, registerOutsideClick, ComponentLoader, ComponentLoaderFactory, ContentRef, BsComponentRef, Positioning, PositioningService, positionElements, MiniState, MiniStore, defineLocale, getSetGlobalLocale, parseDate, formatDate, getDay, isFirstDayOfWeek, isSameYear, isSameDay, isSameMonth, getFullYear, getFirstDayOfMonth, getMonth, getLocale, updateLocale, isAfter, isBefore, isArray, isDateValid, isDate, shiftDate, setFullDate, endOf, startOf, arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, etLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, huLocale, hrLocale, idLocale, itLocale, jaLocale, kaLocale, koLocale, ltLocale, lvLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, thBeLocale, trLocale, ukLocale, viLocale, zhCnLocale */ /***/function node_modulesNgxBootstrapEsm5Public_apiJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ngx-bootstrap/chronos */"./node_modules/ngx-bootstrap/chronos/fesm2015/ngx-bootstrap-chronos.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"listLocales",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["listLocales"]});/* harmony import */var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ngx-bootstrap/utils */"./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"setTheme",function(){return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["setTheme"]});/* harmony import */var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ngx-bootstrap/accordion */"./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AccordionComponent",function(){return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AccordionConfig",function(){return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AccordionModule",function(){return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AccordionPanelComponent",function(){return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionPanelComponent"]});/* harmony import */var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ngx-bootstrap/alert */"./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AlertComponent",function(){return ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AlertConfig",function(){return ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AlertModule",function(){return ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"]});/* harmony import */var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ngx-bootstrap/buttons */"./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ButtonCheckboxDirective",function(){return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonCheckboxDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ButtonRadioDirective",function(){return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonRadioDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ButtonRadioGroupDirective",function(){return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonRadioGroupDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ButtonsModule",function(){return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"]});/* harmony import */var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ngx-bootstrap/carousel */"./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"CarouselComponent",function(){return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"CarouselConfig",function(){return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"CarouselModule",function(){return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"SlideComponent",function(){return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["SlideComponent"]});/* harmony import */var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ngx-bootstrap/collapse */"./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"CollapseDirective",function(){return ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"CollapseModule",function(){return ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"]});/* harmony import */var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ngx-bootstrap/datepicker */"./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDatepickerConfig",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDatepickerContainerComponent",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerContainerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDatepickerDirective",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDatepickerInlineContainerComponent",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerInlineContainerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDatepickerInlineDirective",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerInlineDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDatepickerInputDirective",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerInputDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDatepickerModule",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerConfig",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerContainerComponent",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerContainerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerDirective",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDaterangepickerInputDirective",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerInputDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsLocaleService",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DateFormatter",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DateFormatter"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DatePickerComponent",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatePickerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DatepickerConfig",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatepickerConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DatePickerInnerComponent",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatePickerInnerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DatepickerModule",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatepickerModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DayPickerComponent",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DayPickerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"MonthPickerComponent",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["MonthPickerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"YearPickerComponent",function(){return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["YearPickerComponent"]});/* harmony import */var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! ngx-bootstrap/modal */"./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ModalDirective",function(){return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ModalOptions",function(){return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalOptions"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ModalBackdropOptions",function(){return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalBackdropOptions"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ModalBackdropComponent",function(){return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalBackdropComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ModalModule",function(){return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsModalRef",function(){return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalRef"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsModalService",function(){return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]});/* harmony import */var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(/*! ngx-bootstrap/dropdown */"./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDropdownModule",function(){return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDropdownConfig",function(){return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDropdownState",function(){return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownState"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDropdownContainerComponent",function(){return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownContainerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDropdownDirective",function(){return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDropdownMenuDirective",function(){return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownMenuDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsDropdownToggleDirective",function(){return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownToggleDirective"]});/* harmony import */var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(/*! ngx-bootstrap/pagination */"./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PagerComponent",function(){return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PagerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PaginationComponent",function(){return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PaginationConfig",function(){return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PaginationModule",function(){return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"]});/* harmony import */var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(/*! ngx-bootstrap/progressbar */"./node_modules/ngx-bootstrap/progressbar/fesm2015/ngx-bootstrap-progressbar.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BarComponent",function(){return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["BarComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ProgressbarComponent",function(){return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ProgressbarConfig",function(){return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ProgressbarModule",function(){return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"]});/* harmony import */var ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(/*! ngx-bootstrap/rating */"./node_modules/ngx-bootstrap/rating/fesm2015/ngx-bootstrap-rating.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"RatingComponent",function(){return ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_12__["RatingComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"RatingModule",function(){return ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_12__["RatingModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"RatingConfig",function(){return ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_12__["RatingConfig"]});/* harmony import */var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(/*! ngx-bootstrap/sortable */"./node_modules/ngx-bootstrap/sortable/fesm2015/ngx-bootstrap-sortable.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DraggableItemService",function(){return ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__["DraggableItemService"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"SortableComponent",function(){return ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__["SortableComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"SortableModule",function(){return ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__["SortableModule"]});/* harmony import */var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(/*! ngx-bootstrap/tabs */"./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"NgTranscludeDirective",function(){return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["NgTranscludeDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TabDirective",function(){return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TabHeadingDirective",function(){return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabHeadingDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TabsetComponent",function(){return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsetComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TabsetConfig",function(){return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsetConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TabsModule",function(){return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsModule"]});/* harmony import */var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(/*! ngx-bootstrap/timepicker */"./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TimepickerComponent",function(){return ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__["TimepickerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TimepickerConfig",function(){return ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__["TimepickerConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TimepickerModule",function(){return ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__["TimepickerModule"]});/* harmony import */var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(/*! ngx-bootstrap/tooltip */"./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TooltipConfig",function(){return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TooltipContainerComponent",function(){return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipContainerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TooltipDirective",function(){return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TooltipModule",function(){return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"]});/* harmony import */var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(/*! ngx-bootstrap/typeahead */"./node_modules/ngx-bootstrap/typeahead/fesm2015/ngx-bootstrap-typeahead.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TypeaheadOptions",function(){return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadOptions"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TypeaheadContainerComponent",function(){return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadContainerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TypeaheadDirective",function(){return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TypeaheadMatch",function(){return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadMatch"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"TypeaheadModule",function(){return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadModule"]});/* harmony import */var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(/*! ngx-bootstrap/popover */"./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PopoverConfig",function(){return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverConfig"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PopoverContainerComponent",function(){return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverContainerComponent"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PopoverDirective",function(){return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverDirective"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PopoverModule",function(){return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverModule"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"OnChange",function(){return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["OnChange"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"document",function(){return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"window",function(){return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"parseTriggers",function(){return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["parseTriggers"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"LinkedList",function(){return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isBs3",function(){return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Trigger",function(){return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Trigger"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"warnOnce",function(){return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Utils",function(){return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"listenToTriggersV2",function(){return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["listenToTriggersV2"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"registerOutsideClick",function(){return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerOutsideClick"]});/* harmony import */var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(/*! ngx-bootstrap/component-loader */"./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ComponentLoader",function(){return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["ComponentLoader"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ComponentLoaderFactory",function(){return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["ComponentLoaderFactory"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ContentRef",function(){return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["ContentRef"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BsComponentRef",function(){return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["BsComponentRef"]});/* harmony import */var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(/*! ngx-bootstrap/positioning */"./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Positioning",function(){return ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__["Positioning"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"PositioningService",function(){return ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__["PositioningService"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"positionElements",function(){return ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__["positionElements"]});/* harmony import */var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(/*! ngx-bootstrap/mini-ngrx */"./node_modules/ngx-bootstrap/mini-ngrx/fesm2015/ngx-bootstrap-mini-ngrx.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"MiniState",function(){return ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_21__["MiniState"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"MiniStore",function(){return ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_21__["MiniStore"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"defineLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["defineLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"getSetGlobalLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getSetGlobalLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"parseDate",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["parseDate"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"formatDate",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["formatDate"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"getDay",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getDay"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isFirstDayOfWeek",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isFirstDayOfWeek"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isSameYear",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isSameYear"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isSameDay",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isSameDay"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isSameMonth",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"getFullYear",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getFullYear"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"getFirstDayOfMonth",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getFirstDayOfMonth"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"getMonth",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getMonth"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"getLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"updateLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["updateLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isAfter",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isAfter"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isBefore",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isBefore"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isArray",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isArray"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isDateValid",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isDateValid"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isDate",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isDate"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"shiftDate",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["shiftDate"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"setFullDate",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["setFullDate"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"endOf",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["endOf"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"startOf",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["startOf"]});/* harmony import */var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(/*! ngx-bootstrap/locale */"./node_modules/ngx-bootstrap/locale/fesm2015/ngx-bootstrap-locale.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"arLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["arLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"bgLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["bgLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"caLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["caLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"csLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["csLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"daLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["daLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"deLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["deLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"enGbLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["enGbLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"esDoLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["esDoLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"esLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["esLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"esUsLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["esUsLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"etLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["etLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"fiLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["fiLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"frLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["frLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"glLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["glLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"heLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["heLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"hiLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["hiLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"huLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["huLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"hrLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["hrLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"idLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["idLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"itLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["itLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"jaLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["jaLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"kaLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["kaLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"koLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["koLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ltLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ltLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"lvLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["lvLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"mnLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["mnLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"nbLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["nbLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"nlBeLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["nlBeLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"nlLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["nlLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"plLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["plLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ptBrLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ptBrLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"roLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["roLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ruLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ruLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"skLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["skLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"slLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["slLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"svLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["svLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"thLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["thLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"thBeLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["thBeLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"trLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["trLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ukLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ukLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"viLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["viLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"zhCnLocale",function(){return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["zhCnLocale"]});/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvIiwic291cmNlcyI6WyJwdWJsaWNfYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFvQkEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixlQUFlLEVBQ2YsdUJBQXVCLEVBQ3hCLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0UsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIseUJBQXlCLEVBQ3pCLGFBQWEsRUFDZCxNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGNBQWMsRUFDZCxjQUFjLEVBQ2YsTUFBTSx3QkFBd0IsQ0FBQztBQUVoQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFM0UsT0FBTyxFQUNMLGtCQUFrQixFQUNsQiw4QkFBOEIsRUFDOUIscUJBQXFCLEVBQ3JCLG9DQUFvQyxFQUNwQywyQkFBMkIsRUFDM0IsMEJBQTBCLEVBQzFCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsbUNBQW1DLEVBQ25DLDBCQUEwQixFQUMxQiwrQkFBK0IsRUFDL0IsZUFBZSxFQUNmLGFBQWEsRUFDYixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDcEIsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsc0JBQXNCLEVBQ3RCLFdBQVcsRUFDWCxVQUFVLEVBQ1YsY0FBYyxFQUNmLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLDRCQUE0QixFQUM1QixtQkFBbUIsRUFDbkIsdUJBQXVCLEVBQ3ZCLHlCQUF5QixFQUMxQixNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE9BQU8sRUFDTCxjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFFakIsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2xCLE1BQU0sMkJBQTJCLENBQUM7QUFFbkMsT0FBTyxFQUNMLGVBQWUsRUFDZixZQUFZLEVBQ1osWUFBWSxFQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUVMLG9CQUFvQixFQUVwQixpQkFBaUIsRUFDakIsY0FBYyxFQUNmLE1BQU0sd0JBQXdCLENBQUM7QUFFaEMsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLGVBQWUsRUFDZixZQUFZLEVBQ1osVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2pCLE1BQU0sMEJBQTBCLENBQUM7QUFFbEMsT0FBTyxFQUNMLGFBQWEsRUFDYix5QkFBeUIsRUFDekIsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDZCxNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsMkJBQTJCLEVBQzNCLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsZUFBZSxFQUNoQixNQUFNLHlCQUF5QixDQUFDO0FBRWpDLE9BQU8sRUFDTCxhQUFhLEVBQ2IseUJBQXlCLEVBQ3pCLGdCQUFnQixFQUNoQixhQUFhLEVBQ2QsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQ0wsUUFBUSxFQUNSLFFBQVEsRUFDUixNQUFNLEVBQ04sYUFBYSxFQUNiLFVBQVUsRUFDVixLQUFLLEVBQ0wsT0FBTyxFQUNQLFFBQVEsRUFDUixLQUFLLEVBQ0wsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNyQixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFDTCxlQUFlLEVBQ2Ysc0JBQXNCLEVBQ3RCLFVBQVUsRUFDVixjQUFjLEVBQ2YsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4QyxPQUFPLEVBQ0wsV0FBVyxFQUVYLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDakIsTUFBTSwyQkFBMkIsQ0FBQztBQUVuQyxPQUFPLEVBRUwsU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLHlCQUF5QixDQUFDO0FBRWpDLE9BQU8sRUFDTCxZQUFZLEVBQ1osa0JBQWtCLEVBRWxCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsU0FBUyxFQUNULFdBQVcsRUFDWCxXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixTQUFTLEVBQ1QsWUFBWSxFQUNaLE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFdBQVcsRUFDWCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsT0FBTyxFQUVSLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsaWNBQWMsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHsgQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9hY2NvcmRpb24nO1xuaW1wb3J0IHsgQWxlcnRNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2FsZXJ0JztcbmltcG9ydCB7IEJ1dHRvbnNNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2J1dHRvbnMnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nhcm91c2VsJztcbmltcG9ydCB7IENvbGxhcHNlTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb2xsYXBzZSc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyB9IGZyb20gJ25neC1ib290c3RyYXAvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyJztcbmltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duJztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uJztcbmltcG9ydCB7IFBvcG92ZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3BvcG92ZXInO1xuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Byb2dyZXNzYmFyJztcbmltcG9ydCB7IFJhdGluZ01vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvcmF0aW5nJztcbmltcG9ydCB7IFNvcnRhYmxlTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9zb3J0YWJsZSc7XG5pbXBvcnQgeyBUYWJzTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC90YWJzJztcbmltcG9ydCB7IFRpbWVwaWNrZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXInO1xuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdG9vbHRpcCc7XG5pbXBvcnQgeyBUeXBlYWhlYWRNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZCc7XG5cbmV4cG9ydCB7IGxpc3RMb2NhbGVzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmV4cG9ydCB7IHNldFRoZW1lIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5cbmV4cG9ydCB7XG4gIEFjY29yZGlvbkNvbXBvbmVudCxcbiAgQWNjb3JkaW9uQ29uZmlnLFxuICBBY2NvcmRpb25Nb2R1bGUsXG4gIEFjY29yZGlvblBhbmVsQ29tcG9uZW50XG59IGZyb20gJ25neC1ib290c3RyYXAvYWNjb3JkaW9uJztcblxuZXhwb3J0IHsgQWxlcnRDb21wb25lbnQsIEFsZXJ0Q29uZmlnLCBBbGVydE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvYWxlcnQnO1xuXG5leHBvcnQge1xuICBCdXR0b25DaGVja2JveERpcmVjdGl2ZSxcbiAgQnV0dG9uUmFkaW9EaXJlY3RpdmUsXG4gIEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUsXG4gIEJ1dHRvbnNNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9idXR0b25zJztcblxuZXhwb3J0IHtcbiAgQ2Fyb3VzZWxDb21wb25lbnQsXG4gIENhcm91c2VsQ29uZmlnLFxuICBDYXJvdXNlbE1vZHVsZSxcbiAgU2xpZGVDb21wb25lbnRcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jYXJvdXNlbCc7XG5cbmV4cG9ydCB7IENvbGxhcHNlRGlyZWN0aXZlLCBDb2xsYXBzZU1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY29sbGFwc2UnO1xuXG5leHBvcnQge1xuICBCc0RhdGVwaWNrZXJDb25maWcsXG4gIEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgQnNEYXRlcGlja2VyRGlyZWN0aXZlLFxuICBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQsXG4gIEJzRGF0ZXBpY2tlcklubGluZURpcmVjdGl2ZSxcbiAgQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmUsXG4gIEJzRGF0ZXBpY2tlck1vZHVsZSxcbiAgQnNEYXRlcmFuZ2VwaWNrZXJDb25maWcsXG4gIEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxuICBCc0RhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZSxcbiAgQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSxcbiAgQnNMb2NhbGVTZXJ2aWNlLFxuICBEYXRlRm9ybWF0dGVyLFxuICBEYXRlUGlja2VyQ29tcG9uZW50LFxuICBEYXRlcGlja2VyQ29uZmlnLFxuICBEYXRlUGlja2VySW5uZXJDb21wb25lbnQsXG4gIERhdGVwaWNrZXJNb2R1bGUsXG4gIERheVBpY2tlckNvbXBvbmVudCxcbiAgTW9udGhQaWNrZXJDb21wb25lbnQsXG4gIFllYXJQaWNrZXJDb21wb25lbnRcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyJztcblxuZXhwb3J0IHtcbiAgTW9kYWxEaXJlY3RpdmUsXG4gIE1vZGFsT3B0aW9ucyxcbiAgTW9kYWxCYWNrZHJvcE9wdGlvbnMsXG4gIE1vZGFsQmFja2Ryb3BDb21wb25lbnQsXG4gIE1vZGFsTW9kdWxlLFxuICBCc01vZGFsUmVmLFxuICBCc01vZGFsU2VydmljZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcblxuZXhwb3J0IHtcbiAgQnNEcm9wZG93bk1vZHVsZSxcbiAgQnNEcm9wZG93bkNvbmZpZyxcbiAgQnNEcm9wZG93blN0YXRlLFxuICBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50LFxuICBCc0Ryb3Bkb3duRGlyZWN0aXZlLFxuICBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSxcbiAgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duJztcblxuZXhwb3J0IHtcbiAgUGFnZXJDb21wb25lbnQsXG4gIFBhZ2luYXRpb25Db21wb25lbnQsXG4gIFBhZ2luYXRpb25Db25maWcsXG4gIFBhZ2luYXRpb25Nb2R1bGUsXG4gIFBhZ2VDaGFuZ2VkRXZlbnRcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uJztcblxuZXhwb3J0IHtcbiAgQmFyQ29tcG9uZW50LFxuICBQcm9ncmVzc2JhckNvbXBvbmVudCxcbiAgUHJvZ3Jlc3NiYXJDb25maWcsXG4gIFByb2dyZXNzYmFyTW9kdWxlXG59IGZyb20gJ25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXInO1xuXG5leHBvcnQge1xuICBSYXRpbmdDb21wb25lbnQsXG4gIFJhdGluZ01vZHVsZSxcbiAgUmF0aW5nQ29uZmlnXG59IGZyb20gJ25neC1ib290c3RyYXAvcmF0aW5nJztcblxuZXhwb3J0IHtcbiAgRHJhZ2dhYmxlSXRlbSxcbiAgRHJhZ2dhYmxlSXRlbVNlcnZpY2UsXG4gIFNvcnRhYmxlSXRlbSxcbiAgU29ydGFibGVDb21wb25lbnQsXG4gIFNvcnRhYmxlTW9kdWxlXG59IGZyb20gJ25neC1ib290c3RyYXAvc29ydGFibGUnO1xuXG5leHBvcnQge1xuICBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUsXG4gIFRhYkRpcmVjdGl2ZSxcbiAgVGFiSGVhZGluZ0RpcmVjdGl2ZSxcbiAgVGFic2V0Q29tcG9uZW50LFxuICBUYWJzZXRDb25maWcsXG4gIFRhYnNNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC90YWJzJztcblxuZXhwb3J0IHtcbiAgVGltZXBpY2tlckNvbXBvbmVudCxcbiAgVGltZXBpY2tlckNvbmZpZyxcbiAgVGltZXBpY2tlck1vZHVsZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXInO1xuXG5leHBvcnQge1xuICBUb29sdGlwQ29uZmlnLFxuICBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50LFxuICBUb29sdGlwRGlyZWN0aXZlLFxuICBUb29sdGlwTW9kdWxlXG59IGZyb20gJ25neC1ib290c3RyYXAvdG9vbHRpcCc7XG5cbmV4cG9ydCB7XG4gIFR5cGVhaGVhZE9wdGlvbnMsXG4gIFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCxcbiAgVHlwZWFoZWFkRGlyZWN0aXZlLFxuICBUeXBlYWhlYWRNYXRjaCxcbiAgVHlwZWFoZWFkTW9kdWxlXG59IGZyb20gJ25neC1ib290c3RyYXAvdHlwZWFoZWFkJztcblxuZXhwb3J0IHtcbiAgUG9wb3ZlckNvbmZpZyxcbiAgUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgUG9wb3ZlckRpcmVjdGl2ZSxcbiAgUG9wb3Zlck1vZHVsZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL3BvcG92ZXInO1xuXG5leHBvcnQge1xuICBPbkNoYW5nZSxcbiAgZG9jdW1lbnQsXG4gIHdpbmRvdyxcbiAgcGFyc2VUcmlnZ2VycyxcbiAgTGlua2VkTGlzdCxcbiAgaXNCczMsXG4gIFRyaWdnZXIsXG4gIHdhcm5PbmNlLFxuICBVdGlscyxcbiAgbGlzdGVuVG9UcmlnZ2Vyc1YyLFxuICByZWdpc3Rlck91dHNpZGVDbGlja1xufSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuZXhwb3J0IHtcbiAgQ29tcG9uZW50TG9hZGVyLFxuICBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICBDb250ZW50UmVmLFxuICBCc0NvbXBvbmVudFJlZlxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5leHBvcnQge1xuICBQb3NpdGlvbmluZyxcbiAgUG9zaXRpb25pbmdPcHRpb25zLFxuICBQb3NpdGlvbmluZ1NlcnZpY2UsXG4gIHBvc2l0aW9uRWxlbWVudHNcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbmV4cG9ydCB7XG4gIEFjdGlvbixcbiAgTWluaVN0YXRlLFxuICBNaW5pU3RvcmVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuXG5leHBvcnQge1xuICBkZWZpbmVMb2NhbGUsXG4gIGdldFNldEdsb2JhbExvY2FsZSxcbiAgTG9jYWxlRGF0YSxcbiAgcGFyc2VEYXRlLFxuICBmb3JtYXREYXRlLFxuICBnZXREYXksXG4gIGlzRmlyc3REYXlPZldlZWssXG4gIGlzU2FtZVllYXIsXG4gIGlzU2FtZURheSxcbiAgaXNTYW1lTW9udGgsXG4gIGdldEZ1bGxZZWFyLFxuICBnZXRGaXJzdERheU9mTW9udGgsXG4gIGdldE1vbnRoLFxuICBnZXRMb2NhbGUsXG4gIHVwZGF0ZUxvY2FsZSxcbiAgaXNBZnRlcixcbiAgaXNCZWZvcmUsXG4gIGlzQXJyYXksXG4gIGlzRGF0ZVZhbGlkLFxuICBpc0RhdGUsXG4gIHNoaWZ0RGF0ZSxcbiAgc2V0RnVsbERhdGUsXG4gIGVuZE9mLFxuICBzdGFydE9mLFxuICBUaW1lVW5pdFxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuXG5leHBvcnQgKiBmcm9tICduZ3gtYm9vdHN0cmFwL2xvY2FsZSc7XG4iXX0=
/***/},/***/"./node_modules/ngx-bootstrap/locale/fesm2015/ngx-bootstrap-locale.js":/*!****************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/locale/fesm2015/ngx-bootstrap-locale.js ***!
  \****************************************************************************/ /*! exports provided: arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, etLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, hrLocale, huLocale, idLocale, itLocale, jaLocale, kaLocale, koLocale, ltLocale, lvLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thBeLocale, thLocale, trLocale, ukLocale, viLocale, zhCnLocale */ /***/function node_modulesNgxBootstrapLocaleFesm2015NgxBootstrapLocaleJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ngx-bootstrap/chronos */"./node_modules/ngx-bootstrap/chronos/fesm2015/ngx-bootstrap-chronos.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"arLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["arLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"bgLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["bgLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"caLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["caLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"csLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["csLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"daLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["daLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"deLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["deLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"enGbLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["enGbLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"esDoLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esDoLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"esLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"esUsLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esUsLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"etLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["etLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"fiLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["fiLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"frLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["frLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"glLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["glLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"heLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["heLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"hiLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["hiLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"hrLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["hrLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"huLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["huLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"idLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["idLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"itLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["itLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"jaLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["jaLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"kaLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["kaLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"koLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["koLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ltLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ltLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"lvLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["lvLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"mnLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["mnLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"nbLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nbLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"nlBeLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nlBeLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"nlLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nlLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"plLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["plLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ptBrLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ptBrLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"roLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["roLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ruLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ruLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"skLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["skLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"slLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["slLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"svLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["svLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"thBeLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["thBeLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"thLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["thLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"trLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["trLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ukLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ukLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"viLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["viLocale"]});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"zhCnLocale",function(){return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["zhCnLocale"]});//# sourceMappingURL=ngx-bootstrap-locale.js.map
/***/},/***/"./node_modules/ngx-bootstrap/mini-ngrx/fesm2015/ngx-bootstrap-mini-ngrx.js":/*!**********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/mini-ngrx/fesm2015/ngx-bootstrap-mini-ngrx.js ***!
  \**********************************************************************************/ /*! exports provided: MiniState, MiniStore */ /***/function node_modulesNgxBootstrapMiniNgrxFesm2015NgxBootstrapMiniNgrxJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MiniState",function(){return MiniState});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MiniStore",function(){return MiniStore});/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @template T
 */var MiniState=/*#__PURE__*/function(_rxjs__WEBPACK_IMPORT){_inheritsLoose(MiniState,_rxjs__WEBPACK_IMPORT);/**
     * @param {?} _initialState
     * @param {?} actionsDispatcher$
     * @param {?} reducer
     */function MiniState(_initialState,actionsDispatcher$,reducer){var _this43;_this43=_rxjs__WEBPACK_IMPORT.call(this,_initialState)||this;/** @type {?} */var actionInQueue$=actionsDispatcher$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["queueScheduler"]));/** @type {?} */var state$=actionInQueue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["scan"])(/**
         * @param {?} state
         * @param {?} action
         * @return {?}
         */function(state,action){if(!action){return state}return reducer(state,action)},_initialState));state$.subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){return _this43.next(value)});return _this43}return MiniState}(rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]);/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @template T
 */var MiniStore=/*#__PURE__*/function(_rxjs__WEBPACK_IMPORT2){_inheritsLoose(MiniStore,_rxjs__WEBPACK_IMPORT2);/**
     * @param {?} _dispatcher
     * @param {?} _reducer
     * @param {?} state$
     */function MiniStore(_dispatcher,_reducer,/* tslint:disable-next-line: no-any */state$){var _this44;_this44=_rxjs__WEBPACK_IMPORT2.call(this)||this;_this44._dispatcher=_dispatcher;_this44._reducer=_reducer;/* tslint:disable-next-line: deprecation */_this44.source=state$;return _this44}/**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */var _proto40=MiniStore.prototype;_proto40.select=function select(pathOrMapFn){/* tslint:disable-next-line: deprecation */ /** @type {?} */var mapped$=this.source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(pathOrMapFn));return mapped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())}/**
     * @template R
     * @param {?} operator
     * @return {?}
     */;_proto40.lift=function lift(operator){/** @type {?} */var store=new MiniStore(this._dispatcher,this._reducer,this);/* tslint:disable-next-line: deprecation */store.operator=operator;return store}/**
     * @param {?} action
     * @return {?}
     */;_proto40.dispatch=function dispatch(action){this._dispatcher.next(action)}/**
     * @param {?} action
     * @return {?}
     */;_proto40.next=function next(action){this._dispatcher.next(action)}/* tslint:disable-next-line: no-any */ /**
     * @param {?} err
     * @return {?}
     */;_proto40.error=function error(err){this._dispatcher.error(err)}/**
     * @return {?}
     */;_proto40.complete=function complete(){/*noop*/};return MiniStore}(rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]);//# sourceMappingURL=ngx-bootstrap-mini-ngrx.js.map
/***/},/***/"./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js":/*!**************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js ***!
  \**************************************************************************/ /*! exports provided: BsModalRef, BsModalService, ModalBackdropComponent, ModalBackdropOptions, ModalContainerComponent, ModalDirective, ModalModule, ModalOptions, ɵa */ /***/function node_modulesNgxBootstrapModalFesm2015NgxBootstrapModalJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsModalRef",function(){return BsModalRef});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BsModalService",function(){return BsModalService});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ModalBackdropComponent",function(){return ModalBackdropComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ModalBackdropOptions",function(){return ModalBackdropOptions});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ModalContainerComponent",function(){return ModalContainerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ModalDirective",function(){return ModalDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ModalModule",function(){return ModalModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ModalOptions",function(){return ModalOptions});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275a",function(){return CLASS_NAME});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ngx-bootstrap/utils */"./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");/* harmony import */var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ngx-bootstrap/component-loader */"./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");/* harmony import */var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ngx-bootstrap/positioning */"./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsModalRef=function BsModalRef(){/**
         * Hides the modal
         */this.hide=Function;/**
         * Sets new class to modal window
         */this.setClass=Function};BsModalRef.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var ModalBackdropOptions=/**
     * @param {?} options
     */function ModalBackdropOptions(options){this.animate=true;Object.assign(this,options)};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var ModalOptions=function ModalOptions(){};ModalOptions.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @type {?} */var modalConfigDefaults={backdrop:true,keyboard:true,focus:true,show:false,ignoreBackdropClick:false,class:"",animated:true,initialState:{}};/** @type {?} */var CLASS_NAME={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",IN:"in",// bs3
SHOW:"show"// bs4
};/** @type {?} */var TRANSITION_DURATIONS={MODAL:300,BACKDROP:150};/** @type {?} */var DISMISS_REASONS={BACKRDOP:"backdrop-click",ESC:"esc"};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var ModalContainerComponent=/*#__PURE__*/function(){/**
     * @param {?} options
     * @param {?} _element
     * @param {?} _renderer
     */function ModalContainerComponent(options,_element,_renderer){this._element=_element;this._renderer=_renderer;this.isShown=false;this.isModalHiding=false;this.clickStartedInContent=false;this.config=Object.assign({},options)}/**
     * @return {?}
     */var _proto41=ModalContainerComponent.prototype;_proto41.ngOnInit=function ngOnInit(){var _this45=this;if(this.isAnimated){this._renderer.addClass(this._element.nativeElement,CLASS_NAME.FADE)}this._renderer.setStyle(this._element.nativeElement,"display","block");setTimeout(/**
         * @return {?}
         */function(){_this45.isShown=true;_this45._renderer.addClass(_this45._element.nativeElement,Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()?CLASS_NAME.IN:CLASS_NAME.SHOW)},this.isAnimated?TRANSITION_DURATIONS.BACKDROP:0);if(document&&document.body){if(this.bsModalService.getModalsCount()===1){this.bsModalService.checkScrollbar();this.bsModalService.setScrollbar()}this._renderer.addClass(document.body,CLASS_NAME.OPEN)}if(this._element.nativeElement){this._element.nativeElement.focus()}}/**
     * @param {?} event
     * @return {?}
     */;_proto41.onClickStarted=function onClickStarted(event){this.clickStartedInContent=event.target!==this._element.nativeElement}/**
     * @param {?} event
     * @return {?}
     */;_proto41.onClickStop=function onClickStop(event){/** @type {?} */var clickedInBackdrop=event.target===this._element.nativeElement&&!this.clickStartedInContent;if(this.config.ignoreBackdropClick||this.config.backdrop==="static"||!clickedInBackdrop){this.clickStartedInContent=false;return}this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);this.hide()}/**
     * @param {?} event
     * @return {?}
     */;_proto41.onEsc=function onEsc(event){if(!this.isShown){return}// tslint:disable-next-line:deprecation
if(event.keyCode===27||event.key==="Escape"){event.preventDefault()}if(this.config.keyboard&&this.level===this.bsModalService.getModalsCount()){this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);this.hide()}}/**
     * @return {?}
     */;_proto41.ngOnDestroy=function ngOnDestroy(){if(this.isShown){this.hide()}}/**
     * @return {?}
     */;_proto41.hide=function hide(){var _this46=this;if(this.isModalHiding||!this.isShown){return}this.isModalHiding=true;this._renderer.removeClass(this._element.nativeElement,Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()?CLASS_NAME.IN:CLASS_NAME.SHOW);setTimeout(/**
         * @return {?}
         */function(){_this46.isShown=false;if(document&&document.body&&_this46.bsModalService.getModalsCount()===1){_this46._renderer.removeClass(document.body,CLASS_NAME.OPEN)}_this46.bsModalService.hide(_this46.level);_this46.isModalHiding=false},this.isAnimated?TRANSITION_DURATIONS.MODAL:0)};return ModalContainerComponent}();ModalContainerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"modal-container",template:"\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",host:{class:"modal",role:"dialog",tabindex:"-1","[attr.aria-modal]":"true"}}]}];/** @nocollapse */ModalContainerComponent.ctorParameters=function(){return[{type:ModalOptions},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]}]};ModalContainerComponent.propDecorators={onClickStarted:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["mousedown",["$event"]]}],onClickStop:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["mouseup",["$event"]]}],onEsc:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["window:keydown.esc",["$event"]]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * This component will be added as background layout for modals if enabled
 */var ModalBackdropComponent=/*#__PURE__*/function(){/**
     * @param {?} element
     * @param {?} renderer
     */function ModalBackdropComponent(element,renderer){this._isShown=false;this.element=element;this.renderer=renderer}/**
     * @return {?}
     */var _proto42=ModalBackdropComponent.prototype;/**
     * @return {?}
     */_proto42.ngOnInit=function ngOnInit(){if(this.isAnimated){this.renderer.addClass(this.element.nativeElement,""+CLASS_NAME.FADE);ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this.element.nativeElement)}this.isShown=true};_createClass(ModalBackdropComponent,[{key:"isAnimated",get:function get(){return this._isAnimated}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._isAnimated=value;// this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
}/**
     * @return {?}
     */},{key:"isShown",get:function get(){return this._isShown}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._isShown=value;if(value){this.renderer.addClass(this.element.nativeElement,""+CLASS_NAME.IN)}else{this.renderer.removeClass(this.element.nativeElement,""+CLASS_NAME.IN)}if(!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()){if(value){this.renderer.addClass(this.element.nativeElement,""+CLASS_NAME.SHOW)}else{this.renderer.removeClass(this.element.nativeElement,""+CLASS_NAME.SHOW)}}}}]);return ModalBackdropComponent}();ModalBackdropComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-modal-backdrop",template:" ",host:{class:CLASS_NAME.BACKDROP}}]}];/** @nocollapse */ModalBackdropComponent.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var TRANSITION_DURATION=300;/** @type {?} */var BACKDROP_TRANSITION_DURATION=150;/**
 * Mark any code with directive to show it's content in modal
 */var ModalDirective=/*#__PURE__*/function(){/**
     * @param {?} _element
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} clf
     */function ModalDirective(_element,_viewContainerRef,_renderer,clf){this._element=_element;this._renderer=_renderer;/**
         * This event fires immediately when the `show` instance method is called.
         */this.onShow=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */this.onShown=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * This event is fired immediately when
         * the hide instance method has been called.
         */this.onHide=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */this.onHidden=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this._isShown=false;this.isBodyOverflowing=false;this.originalBodyPadding=0;this.scrollbarWidth=0;this.timerHideModal=0;this.timerRmBackDrop=0;this.isNested=false;this.clickStartedInContent=false;this._backdrop=clf.createLoader(_element,_viewContainerRef,_renderer)}/**
     * allows to set modal configuration via element property
     * @param {?} conf
     * @return {?}
     */var _proto43=ModalDirective.prototype;/**
     * @param {?} event
     * @return {?}
     */_proto43.onClickStarted=function onClickStarted(event){this.clickStartedInContent=event.target!==this._element.nativeElement}/**
     * @param {?} event
     * @return {?}
     */;_proto43.onClickStop=function onClickStop(event){/** @type {?} */var clickedInBackdrop=event.target===this._element.nativeElement&&!this.clickStartedInContent;if(this.config.ignoreBackdropClick||this.config.backdrop==="static"||!clickedInBackdrop){this.clickStartedInContent=false;return}this.dismissReason=DISMISS_REASONS.BACKRDOP;this.hide(event)}// todo: consider preventing default and stopping propagation
/**
     * @param {?} event
     * @return {?}
     */;_proto43.onEsc=function onEsc(event){if(!this._isShown){return}// tslint:disable-next-line:deprecation
if(event.keyCode===27||event.key==="Escape"){event.preventDefault()}if(this.config.keyboard){this.dismissReason=DISMISS_REASONS.ESC;this.hide()}}/**
     * @return {?}
     */;_proto43.ngOnDestroy=function ngOnDestroy(){this.config=void 0;if(this._isShown){this._isShown=false;this.hideModal();this._backdrop.dispose()}}/**
     * @return {?}
     */;_proto43.ngOnInit=function ngOnInit(){var _this47=this;this._config=this._config||this.getConfig();setTimeout(/**
         * @return {?}
         */function(){if(_this47._config.show){_this47.show()}},0)}/* Public methods */ /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */;_proto43.toggle=function toggle(){return this._isShown?this.hide():this.show()}/**
     * Allows to manually open modal
     * @return {?}
     */;_proto43.show=function show(){var _this48=this;this.dismissReason=null;this.onShow.emit(this);if(this._isShown){return}clearTimeout(this.timerHideModal);clearTimeout(this.timerRmBackDrop);this._isShown=true;this.checkScrollbar();this.setScrollbar();if(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]&&ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body){if(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.classList.contains(CLASS_NAME.OPEN)){this.isNested=true}else{this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body,CLASS_NAME.OPEN)}}this.showBackdrop(/**
         * @return {?}
         */function(){_this48.showElement()})}/**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */;_proto43.hide=function hide(event){var _this49=this;if(event){event.preventDefault()}this.onHide.emit(this);// todo: add an option to prevent hiding
if(!this._isShown){return}ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerHideModal);ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerRmBackDrop);this._isShown=false;this._renderer.removeClass(this._element.nativeElement,CLASS_NAME.IN);if(!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()){this._renderer.removeClass(this._element.nativeElement,CLASS_NAME.SHOW)}// this._addClassIn = false;
if(this._config.animated){this.timerHideModal=ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(/**
             * @return {?}
             */function(){return _this49.hideModal()},TRANSITION_DURATION)}else{this.hideModal()}}/**
     * Private methods \@internal
     * @protected
     * @param {?=} config
     * @return {?}
     */;_proto43.getConfig=function getConfig(config){return Object.assign({},modalConfigDefaults,config)}/**
     *  Show dialog
     * \@internal
     * @protected
     * @return {?}
     */;_proto43.showElement=function showElement(){var _this50=this;// todo: replace this with component loader usage
if(!this._element.nativeElement.parentNode||this._element.nativeElement.parentNode.nodeType!==Node.ELEMENT_NODE){// don't move modals dom position
if(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]&&ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body){ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.appendChild(this._element.nativeElement)}}this._renderer.setAttribute(this._element.nativeElement,"aria-hidden","false");this._renderer.setAttribute(this._element.nativeElement,"aria-modal","true");this._renderer.setStyle(this._element.nativeElement,"display","block");this._renderer.setProperty(this._element.nativeElement,"scrollTop",0);if(this._config.animated){ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this._element.nativeElement)}// this._addClassIn = true;
this._renderer.addClass(this._element.nativeElement,CLASS_NAME.IN);if(!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()){this._renderer.addClass(this._element.nativeElement,CLASS_NAME.SHOW)}/** @type {?} */var transitionComplete=/**
         * @return {?}
         */function transitionComplete(){if(_this50._config.focus){_this50._element.nativeElement.focus()}_this50.onShown.emit(_this50)};if(this._config.animated){setTimeout(transitionComplete,TRANSITION_DURATION)}else{transitionComplete()}}/**
     * \@internal
     * @protected
     * @return {?}
     */;_proto43.hideModal=function hideModal(){var _this51=this;this._renderer.setAttribute(this._element.nativeElement,"aria-hidden","true");this._renderer.setStyle(this._element.nativeElement,"display","none");this.showBackdrop(/**
         * @return {?}
         */function(){if(!_this51.isNested){if(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]&&ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body){_this51._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body,CLASS_NAME.OPEN)}_this51.resetScrollbar()}_this51.resetAdjustments();_this51.focusOtherModal();_this51.onHidden.emit(_this51)})}// todo: original show was calling a callback when done, but we can use
// promise
/**
     * \@internal
     * @protected
     * @param {?=} callback
     * @return {?}
     */;_proto43.showBackdrop=function showBackdrop(callback){var _this52=this;if(this._isShown&&this.config.backdrop&&(!this.backdrop||!this.backdrop.instance.isShown)){this.removeBackdrop();this._backdrop.attach(ModalBackdropComponent).to("body").show({isAnimated:this._config.animated});this.backdrop=this._backdrop._componentRef;if(!callback){return}if(!this._config.animated){callback();return}setTimeout(callback,BACKDROP_TRANSITION_DURATION)}else if(!this._isShown&&this.backdrop){this.backdrop.instance.isShown=false;/** @type {?} */var callbackRemove=/**
             * @return {?}
             */function callbackRemove(){_this52.removeBackdrop();if(callback){callback()}};if(this.backdrop.instance.isAnimated){this.timerRmBackDrop=ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(callbackRemove,BACKDROP_TRANSITION_DURATION)}else{callbackRemove()}}else if(callback){callback()}}/**
     * \@internal
     * @protected
     * @return {?}
     */;_proto43.removeBackdrop=function removeBackdrop(){this._backdrop.hide()}/**
     * Events tricks
     * @protected
     * @return {?}
     */ // no need for it
// protected setEscapeEvent():void {
//   if (this._isShown && this._config.keyboard) {
//     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
//       if (event.which === 27) {
//         this.hide()
//       }
//     })
//
//   } else if (!this._isShown) {
//     $(this._element).off(Event.KEYDOWN_DISMISS)
//   }
// }
// protected setResizeEvent():void {
// console.log(this.renderer.listenGlobal('', Event.RESIZE));
// if (this._isShown) {
//   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
// } else {
//   $(window).off(Event.RESIZE)
// }
// }
;_proto43.focusOtherModal=function focusOtherModal(){if(this._element.nativeElement.parentElement==null){return}/** @type {?} */var otherOpenedModals=this._element.nativeElement.parentElement.querySelectorAll(".in[bsModal]");if(!otherOpenedModals.length){return}otherOpenedModals[otherOpenedModals.length-1].focus()}/**
     * \@internal
     * @protected
     * @return {?}
     */;_proto43.resetAdjustments=function resetAdjustments(){this._renderer.setStyle(this._element.nativeElement,"paddingLeft","");this._renderer.setStyle(this._element.nativeElement,"paddingRight","")}/** Scroll bar tricks */ /**
     * \@internal
     * @protected
     * @return {?}
     */;_proto43.checkScrollbar=function checkScrollbar(){this.isBodyOverflowing=ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.clientWidth<ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;this.scrollbarWidth=this.getScrollbarWidth()}/**
     * @protected
     * @return {?}
     */;_proto43.setScrollbar=function setScrollbar(){if(!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]){return}this.originalBodyPadding=parseInt(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body).getPropertyValue("padding-right")||0,10);if(this.isBodyOverflowing){ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight=this.originalBodyPadding+this.scrollbarWidth+"px"}}/**
     * @protected
     * @return {?}
     */;_proto43.resetScrollbar=function resetScrollbar(){ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight=this.originalBodyPadding+"px"}// thx d.walsh
/**
     * @protected
     * @return {?}
     */;_proto43.getScrollbarWidth=function getScrollbarWidth(){/** @type {?} */var scrollDiv=this._renderer.createElement("div");this._renderer.addClass(scrollDiv,CLASS_NAME.SCROLLBAR_MEASURER);this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body,scrollDiv);/** @type {?} */var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body,scrollDiv);return scrollbarWidth};_createClass(ModalDirective,[{key:"config",set:function set(conf){this._config=this.getConfig(conf)}/**
     * @return {?}
     */,get:function get(){return this._config}/**
     * @return {?}
     */},{key:"isShown",get:function get(){return this._isShown}}]);return ModalDirective}();ModalDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[bsModal]",exportAs:"bs-modal"}]}];/** @nocollapse */ModalDirective.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]}]};ModalDirective.propDecorators={config:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onShow:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onShown:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onHide:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onClickStarted:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["mousedown",["$event"]]}],onClickStop:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["mouseup",["$event"]]}],onEsc:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["keydown.esc",["$event"]]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var BsModalService=/*#__PURE__*/function(){/**
     * @param {?} rendererFactory
     * @param {?} clf
     */function BsModalService(rendererFactory,clf){this.clf=clf;// constructor props
this.config=modalConfigDefaults;// tslint:disable-next-line:no-any
this.onShow=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];// tslint:disable-next-line:no-any
this.onShown=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];// tslint:disable-next-line:no-any
this.onHide=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];// tslint:disable-next-line:no-any
this.onHidden=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.isBodyOverflowing=false;this.originalBodyPadding=0;this.scrollbarWidth=0;this.modalsCount=0;this.lastDismissReason="";this.loaders=[];this._backdropLoader=this.clf.createLoader(null,null,null);this._renderer=rendererFactory.createRenderer(null,null)}/**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */ // tslint:disable-next-line:no-any
var _proto44=BsModalService.prototype;_proto44.show=function show(content,config){this.modalsCount++;this._createLoaders();this.config=Object.assign({},modalConfigDefaults,config);this._showBackdrop();this.lastDismissReason=null;return this._showModal(content)}/**
     * @param {?} level
     * @return {?}
     */;_proto44.hide=function hide(level){var _this53=this;if(this.modalsCount===1){this._hideBackdrop();this.resetScrollbar()}this.modalsCount=this.modalsCount>=1?this.modalsCount-1:0;setTimeout(/**
         * @return {?}
         */function(){_this53._hideModal(level);_this53.removeLoaders(level)},this.config.animated?TRANSITION_DURATIONS.BACKDROP:0)}/**
     * @return {?}
     */;_proto44._showBackdrop=function _showBackdrop(){/** @type {?} */var isBackdropEnabled=this.config.backdrop||this.config.backdrop==="static";/** @type {?} */var isBackdropInDOM=!this.backdropRef||!this.backdropRef.instance.isShown;if(this.modalsCount===1){this.removeBackdrop();if(isBackdropEnabled&&isBackdropInDOM){this._backdropLoader.attach(ModalBackdropComponent).to("body").show({isAnimated:this.config.animated});this.backdropRef=this._backdropLoader._componentRef}}}/**
     * @return {?}
     */;_proto44._hideBackdrop=function _hideBackdrop(){var _this54=this;if(!this.backdropRef){return}this.backdropRef.instance.isShown=false;/** @type {?} */var duration=this.config.animated?TRANSITION_DURATIONS.BACKDROP:0;setTimeout(/**
         * @return {?}
         */function(){return _this54.removeBackdrop()},duration)}// tslint:disable-next-line:no-any
/**
     * @param {?} content
     * @return {?}
     */;_proto44._showModal=function _showModal(content){var _this55=this;/** @type {?} */var modalLoader=this.loaders[this.loaders.length-1];/** @type {?} */var bsModalRef=new BsModalRef;/** @type {?} */var modalContainerRef=modalLoader.provide({provide:ModalOptions,useValue:this.config}).provide({provide:BsModalRef,useValue:bsModalRef}).attach(ModalContainerComponent).to("body").show({content:content,isAnimated:this.config.animated,initialState:this.config.initialState,bsModalService:this});modalContainerRef.instance.level=this.getModalsCount();bsModalRef.hide=/**
         * @return {?}
         */function(){/** @type {?} */var duration=_this55.config.animated?TRANSITION_DURATIONS.MODAL:0;setTimeout(/**
             * @return {?}
             */function(){return modalContainerRef.instance.hide()},duration)};bsModalRef.content=modalLoader.getInnerComponent()||null;bsModalRef.setClass=/**
         * @param {?} newClass
         * @return {?}
         */function(newClass){modalContainerRef.instance.config.class=newClass};return bsModalRef}/**
     * @param {?} level
     * @return {?}
     */;_proto44._hideModal=function _hideModal(level){/** @type {?} */var modalLoader=this.loaders[level-1];if(modalLoader){modalLoader.hide()}}/**
     * @return {?}
     */;_proto44.getModalsCount=function getModalsCount(){return this.modalsCount}/**
     * @param {?} reason
     * @return {?}
     */;_proto44.setDismissReason=function setDismissReason(reason){this.lastDismissReason=reason}/**
     * @return {?}
     */;_proto44.removeBackdrop=function removeBackdrop(){this._backdropLoader.hide();this.backdropRef=null}/** Checks if the body is overflowing and sets scrollbar width */ /**
     * \@internal
     * @return {?}
     */;_proto44.checkScrollbar=function checkScrollbar(){this.isBodyOverflowing=document.body.clientWidth<window.innerWidth;this.scrollbarWidth=this.getScrollbarWidth()}/**
     * @return {?}
     */;_proto44.setScrollbar=function setScrollbar(){if(!document){return}this.originalBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")||"0",10);if(this.isBodyOverflowing){document.body.style.paddingRight=this.originalBodyPadding+this.scrollbarWidth+"px"}}/**
     * @private
     * @return {?}
     */;_proto44.resetScrollbar=function resetScrollbar(){document.body.style.paddingRight=this.originalBodyPadding+"px"}// thx d.walsh
/**
     * @private
     * @return {?}
     */;_proto44.getScrollbarWidth=function getScrollbarWidth(){/** @type {?} */var scrollDiv=this._renderer.createElement("div");this._renderer.addClass(scrollDiv,CLASS_NAME.SCROLLBAR_MEASURER);this._renderer.appendChild(document.body,scrollDiv);/** @type {?} */var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;this._renderer.removeChild(document.body,scrollDiv);return scrollbarWidth}/**
     * @private
     * @return {?}
     */;_proto44._createLoaders=function _createLoaders(){/** @type {?} */var loader=this.clf.createLoader(null,null,null);this.copyEvent(loader.onBeforeShow,this.onShow);this.copyEvent(loader.onShown,this.onShown);this.copyEvent(loader.onBeforeHide,this.onHide);this.copyEvent(loader.onHidden,this.onHidden);this.loaders.push(loader)}/**
     * @private
     * @param {?} level
     * @return {?}
     */;_proto44.removeLoaders=function removeLoaders(level){this.loaders.splice(level-1,1);this.loaders.forEach(/**
         * @param {?} loader
         * @param {?} i
         * @return {?}
         */function(loader,i){loader.instance.level=i+1})}// tslint:disable-next-line:no-any
/**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */;_proto44.copyEvent=function copyEvent(from,to){var _this56=this;from.subscribe(/**
         * @return {?}
         */function(){to.emit(_this56.lastDismissReason)})};return BsModalService}();BsModalService.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */BsModalService.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]},{type:ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var ModalModule=/*#__PURE__*/function(){function ModalModule(){}/**
     * @return {?}
     */ModalModule.forRoot=function forRoot(){return{ngModule:ModalModule,providers:[BsModalService,ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"],ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]}}/**
     * @return {?}
     */;ModalModule.forChild=function forChild(){return{ngModule:ModalModule,providers:[BsModalService,ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"],ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]}};return ModalModule}();ModalModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{declarations:[ModalBackdropComponent,ModalDirective,ModalContainerComponent],exports:[ModalBackdropComponent,ModalDirective],entryComponents:[ModalBackdropComponent,ModalContainerComponent]}]}];//# sourceMappingURL=ngx-bootstrap-modal.js.map
/***/},/***/"./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js":/*!************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js ***!
  \************************************************************************************/ /*! exports provided: PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, ɵa, ɵb */ /***/function node_modulesNgxBootstrapPaginationFesm2015NgxBootstrapPaginationJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PagerComponent",function(){return PagerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PaginationComponent",function(){return PaginationComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PaginationConfig",function(){return PaginationConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PaginationModule",function(){return PaginationModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275a",function(){return PAGER_CONTROL_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275b",function(){return PAGINATION_CONTROL_VALUE_ACCESSOR});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_forms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Provides default values for Pagination and pager components
 */var PaginationConfig=function PaginationConfig(){this.main={maxSize:void 0,itemsPerPage:10,boundaryLinks:false,directionLinks:true,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",pageBtnClass:"",rotate:true};this.pager={itemsPerPage:15,previousText:"\xAB Previous",nextText:"Next \xBB",pageBtnClass:"",align:true}};PaginationConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var PAGER_CONTROL_VALUE_ACCESSOR={provide:_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],/* tslint:disable-next-line: no-use-before-declare */useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return PagerComponent}),multi:true};var PagerComponent=/*#__PURE__*/function(){/**
     * @param {?} elementRef
     * @param {?} paginationConfig
     * @param {?} changeDetection
     */function PagerComponent(elementRef,paginationConfig,changeDetection){this.elementRef=elementRef;this.changeDetection=changeDetection;/**
         * fired when total pages count changes, $event:number equals to total pages count
         */this.numPages=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */this.pageChanged=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.onChange=Function.prototype;this.onTouched=Function.prototype;this.inited=false;this._page=1;this.elementRef=elementRef;if(!this.config){this.configureOptions(Object.assign({},paginationConfig.main,paginationConfig.pager))}}/**
     * maximum number of items per page. If value less than 1 will display all items on one page
     * @return {?}
     */var _proto45=PagerComponent.prototype;/**
     * @param {?} config
     * @return {?}
     */_proto45.configureOptions=function configureOptions(config){this.config=Object.assign({},config)}/**
     * @return {?}
     */;_proto45.ngOnInit=function ngOnInit(){if(typeof window!=="undefined"){this.classMap=this.elementRef.nativeElement.getAttribute("class")||""}// watch for maxSize
this.maxSize=typeof this.maxSize!=="undefined"?this.maxSize:this.config.maxSize;this.rotate=typeof this.rotate!=="undefined"?this.rotate:this.config.rotate;this.boundaryLinks=typeof this.boundaryLinks!=="undefined"?this.boundaryLinks:this.config.boundaryLinks;this.directionLinks=typeof this.directionLinks!=="undefined"?this.directionLinks:this.config.directionLinks;this.pageBtnClass=typeof this.pageBtnClass!=="undefined"?this.pageBtnClass:this.config.pageBtnClass;// base class
this.itemsPerPage=typeof this.itemsPerPage!=="undefined"?this.itemsPerPage:this.config.itemsPerPage;this.totalPages=this.calculateTotalPages();// this class
this.pages=this.getPages(this.page,this.totalPages);this.inited=true}/**
     * @param {?} value
     * @return {?}
     */;_proto45.writeValue=function writeValue(value){this.page=value;this.pages=this.getPages(this.page,this.totalPages)}/**
     * @param {?} key
     * @return {?}
     */;_proto45.getText=function getText(key){// tslint:disable-next-line:no-any
return(/** @type {?} */this[key+"Text"]||/** @type {?} */this.config[key+"Text"])}/**
     * @return {?}
     */;_proto45.noPrevious=function noPrevious(){return this.page===1}/**
     * @return {?}
     */;_proto45.noNext=function noNext(){return this.page===this.totalPages}/**
     * @param {?} fn
     * @return {?}
     */;_proto45.registerOnChange=function registerOnChange(fn){this.onChange=fn}/**
     * @param {?} fn
     * @return {?}
     */;_proto45.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */;_proto45.selectPage=function selectPage(page,event){if(event){event.preventDefault()}if(!this.disabled){if(event&&event.target){// tslint:disable-next-line:no-any
/** @type {?} */var target=event.target;target.blur()}this.writeValue(page);this.onChange(this.page)}}// Create page object used in template
/**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */;_proto45.makePage=function makePage(num,text,active){return{text:text,number:num,active:active}}/**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */;_proto45.getPages=function getPages(currentPage,totalPages){/** @type {?} */var pages=[];// Default page limits
/** @type {?} */var startPage=1;/** @type {?} */var endPage=totalPages;/** @type {?} */var isMaxSized=typeof this.maxSize!=="undefined"&&this.maxSize<totalPages;// recompute if maxSize
if(isMaxSized){if(this.rotate){// Current page is displayed in the middle of the visible ones
startPage=Math.max(currentPage-Math.floor(this.maxSize/2),1);endPage=startPage+this.maxSize-1;// Adjust if limit is exceeded
if(endPage>totalPages){endPage=totalPages;startPage=endPage-this.maxSize+1}}else{// Visible pages are paginated with maxSize
startPage=(Math.ceil(currentPage/this.maxSize)-1)*this.maxSize+1;// Adjust last page if limit is exceeded
endPage=Math.min(startPage+this.maxSize-1,totalPages)}}// Add page number links
for(var num=startPage;num<=endPage;num++){/** @type {?} */var page=this.makePage(num,num.toString(),num===currentPage);pages.push(page)}// Add links to move between page sets
if(isMaxSized&&!this.rotate){if(startPage>1){/** @type {?} */var previousPageSet=this.makePage(startPage-1,"...",false);pages.unshift(previousPageSet)}if(endPage<totalPages){/** @type {?} */var nextPageSet=this.makePage(endPage+1,"...",false);pages.push(nextPageSet)}}return pages}// base class
/**
     * @protected
     * @return {?}
     */;_proto45.calculateTotalPages=function calculateTotalPages(){/** @type {?} */var totalPages=this.itemsPerPage<1?1:Math.ceil(this.totalItems/this.itemsPerPage);return Math.max(totalPages||0,1)};_createClass(PagerComponent,[{key:"itemsPerPage",get:function get(){return this._itemsPerPage}/**
     * @param {?} v
     * @return {?}
     */,set:function set(v){this._itemsPerPage=v;this.totalPages=this.calculateTotalPages()}/**
     * total number of items in all pages
     * @return {?}
     */},{key:"totalItems",get:function get(){return this._totalItems}/**
     * @param {?} v
     * @return {?}
     */,set:function set(v){this._totalItems=v;this.totalPages=this.calculateTotalPages()}/**
     * @return {?}
     */},{key:"totalPages",get:function get(){return this._totalPages}/**
     * @param {?} v
     * @return {?}
     */,set:function set(v){this._totalPages=v;this.numPages.emit(v);if(this.inited){this.selectPage(this.page)}}/**
     * @param {?} value
     * @return {?}
     */},{key:"page",set:function set(value){/** @type {?} */var _previous=this._page;this._page=value>this.totalPages?this.totalPages:value||1;this.changeDetection.markForCheck();if(_previous===this._page||typeof _previous==="undefined"){return}this.pageChanged.emit({page:this._page,itemsPerPage:this.itemsPerPage})}/**
     * @return {?}
     */,get:function get(){return this._page}}]);return PagerComponent}();PagerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"pager",template:"<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-left': align, 'float-left': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",providers:[PAGER_CONTROL_VALUE_ACCESSOR]}]}];/** @nocollapse */PagerComponent.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:PaginationConfig},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]}]};PagerComponent.propDecorators={align:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],maxSize:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],boundaryLinks:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],directionLinks:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],firstText:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],previousText:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],nextText:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],lastText:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],rotate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],pageBtnClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],numPages:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],pageChanged:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],itemsPerPage:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],totalItems:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var PAGINATION_CONTROL_VALUE_ACCESSOR={provide:_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],/* tslint:disable-next-line: no-use-before-declare */useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return PaginationComponent}),multi:true};var PaginationComponent=/*#__PURE__*/function(){/**
     * @param {?} elementRef
     * @param {?} paginationConfig
     * @param {?} changeDetection
     */function PaginationComponent(elementRef,paginationConfig,changeDetection){this.elementRef=elementRef;this.changeDetection=changeDetection;/**
         * fired when total pages count changes, $event:number equals to total pages count
         */this.numPages=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */this.pageChanged=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.onChange=Function.prototype;this.onTouched=Function.prototype;this.inited=false;this._page=1;this.elementRef=elementRef;if(!this.config){this.configureOptions(paginationConfig.main)}}/**
     * maximum number of items per page. If value less than 1 will display all items on one page
     * @return {?}
     */var _proto46=PaginationComponent.prototype;/**
     * @param {?} config
     * @return {?}
     */_proto46.configureOptions=function configureOptions(config){this.config=Object.assign({},config)}/**
     * @return {?}
     */;_proto46.ngOnInit=function ngOnInit(){if(typeof window!=="undefined"){this.classMap=this.elementRef.nativeElement.getAttribute("class")||""}// watch for maxSize
this.maxSize=typeof this.maxSize!=="undefined"?this.maxSize:this.config.maxSize;this.rotate=typeof this.rotate!=="undefined"?this.rotate:this.config.rotate;this.boundaryLinks=typeof this.boundaryLinks!=="undefined"?this.boundaryLinks:this.config.boundaryLinks;this.directionLinks=typeof this.directionLinks!=="undefined"?this.directionLinks:this.config.directionLinks;this.pageBtnClass=typeof this.pageBtnClass!=="undefined"?this.pageBtnClass:this.config.pageBtnClass;// base class
this.itemsPerPage=typeof this.itemsPerPage!=="undefined"?this.itemsPerPage:this.config.itemsPerPage;this.totalPages=this.calculateTotalPages();// this class
this.pages=this.getPages(this.page,this.totalPages);this.inited=true}/**
     * @param {?} value
     * @return {?}
     */;_proto46.writeValue=function writeValue(value){this.page=value;this.pages=this.getPages(this.page,this.totalPages)}/**
     * @param {?} key
     * @return {?}
     */;_proto46.getText=function getText(key){// tslint:disable-next-line:no-any
return(/** @type {?} */this[key+"Text"]||/** @type {?} */this.config[key+"Text"])}/**
     * @return {?}
     */;_proto46.noPrevious=function noPrevious(){return this.page===1}/**
     * @return {?}
     */;_proto46.noNext=function noNext(){return this.page===this.totalPages}/**
     * @param {?} fn
     * @return {?}
     */;_proto46.registerOnChange=function registerOnChange(fn){this.onChange=fn}/**
     * @param {?} fn
     * @return {?}
     */;_proto46.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */;_proto46.selectPage=function selectPage(page,event){if(event){event.preventDefault()}if(!this.disabled){if(event&&event.target){// tslint:disable-next-line:no-any
/** @type {?} */var target=event.target;target.blur()}this.writeValue(page);this.onChange(this.page)}}// Create page object used in template
/**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */;_proto46.makePage=function makePage(num,text,active){return{text:text,number:num,active:active}}/**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */;_proto46.getPages=function getPages(currentPage,totalPages){/** @type {?} */var pages=[];// Default page limits
/** @type {?} */var startPage=1;/** @type {?} */var endPage=totalPages;/** @type {?} */var isMaxSized=typeof this.maxSize!=="undefined"&&this.maxSize<totalPages;// recompute if maxSize
if(isMaxSized){if(this.rotate){// Current page is displayed in the middle of the visible ones
startPage=Math.max(currentPage-Math.floor(this.maxSize/2),1);endPage=startPage+this.maxSize-1;// Adjust if limit is exceeded
if(endPage>totalPages){endPage=totalPages;startPage=endPage-this.maxSize+1}}else{// Visible pages are paginated with maxSize
startPage=(Math.ceil(currentPage/this.maxSize)-1)*this.maxSize+1;// Adjust last page if limit is exceeded
endPage=Math.min(startPage+this.maxSize-1,totalPages)}}// Add page number links
for(var num=startPage;num<=endPage;num++){/** @type {?} */var page=this.makePage(num,num.toString(),num===currentPage);pages.push(page)}// Add links to move between page sets
if(isMaxSized&&!this.rotate){if(startPage>1){/** @type {?} */var previousPageSet=this.makePage(startPage-1,"...",false);pages.unshift(previousPageSet)}if(endPage<totalPages){/** @type {?} */var nextPageSet=this.makePage(endPage+1,"...",false);pages.push(nextPageSet)}}return pages}// base class
/**
     * @protected
     * @return {?}
     */;_proto46.calculateTotalPages=function calculateTotalPages(){/** @type {?} */var totalPages=this.itemsPerPage<1?1:Math.ceil(this.totalItems/this.itemsPerPage);return Math.max(totalPages||0,1)};_createClass(PaginationComponent,[{key:"itemsPerPage",get:function get(){return this._itemsPerPage}/**
     * @param {?} v
     * @return {?}
     */,set:function set(v){this._itemsPerPage=v;this.totalPages=this.calculateTotalPages()}/**
     * total number of items in all pages
     * @return {?}
     */},{key:"totalItems",get:function get(){return this._totalItems}/**
     * @param {?} v
     * @return {?}
     */,set:function set(v){this._totalItems=v;this.totalPages=this.calculateTotalPages()}/**
     * @return {?}
     */},{key:"totalPages",get:function get(){return this._totalPages}/**
     * @param {?} v
     * @return {?}
     */,set:function set(v){this._totalPages=v;this.numPages.emit(v);if(this.inited){this.selectPage(this.page)}}/**
     * @param {?} value
     * @return {?}
     */},{key:"page",set:function set(value){/** @type {?} */var _previous=this._page;this._page=value>this.totalPages?this.totalPages:value||1;this.changeDetection.markForCheck();if(_previous===this._page||typeof _previous==="undefined"){return}this.pageChanged.emit({page:this._page,itemsPerPage:this.itemsPerPage})}/**
     * @return {?}
     */,get:function get(){return this._page}}]);return PaginationComponent}();PaginationComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"pagination",template:"<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\"\n       [innerHTML]=\"getText('first')\"></a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\"\n       [innerHTML]=\"getText('previous')\"></a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled&&!pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\"\n       [innerHTML]=\"pg.text\"></a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\"\n       [innerHTML]=\"getText('next')\"></a></li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\"\n       [innerHTML]=\"getText('last')\"></a></li>\n</ul>\n",providers:[PAGINATION_CONTROL_VALUE_ACCESSOR]}]}];/** @nocollapse */PaginationComponent.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:PaginationConfig},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]}]};PaginationComponent.propDecorators={align:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],maxSize:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],boundaryLinks:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],directionLinks:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],firstText:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],previousText:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],nextText:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],lastText:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],rotate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],pageBtnClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],numPages:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],pageChanged:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],itemsPerPage:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],totalItems:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var PaginationModule=/*#__PURE__*/function(){function PaginationModule(){}/**
     * @return {?}
     */PaginationModule.forRoot=function forRoot(){return{ngModule:PaginationModule,providers:[PaginationConfig]}};return PaginationModule}();PaginationModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],declarations:[PagerComponent,PaginationComponent],exports:[PagerComponent,PaginationComponent]}]}];//# sourceMappingURL=ngx-bootstrap-pagination.js.map
/***/},/***/"./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js":/*!******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js ***!
  \******************************************************************************/ /*! exports provided: PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule */ /***/function node_modulesNgxBootstrapPopoverFesm2015NgxBootstrapPopoverJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PopoverConfig",function(){return PopoverConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PopoverContainerComponent",function(){return PopoverContainerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PopoverDirective",function(){return PopoverDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PopoverModule",function(){return PopoverModule});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ngx-bootstrap/component-loader */"./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");/* harmony import */var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ngx-bootstrap/utils */"./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");/* harmony import */var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ngx-bootstrap/positioning */"./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */var PopoverConfig=function PopoverConfig(){/**
         * sets disable adaptive position
         */this.adaptivePosition=true;/**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */this.placement="top";/**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */this.triggers="click";this.outsideClick=false;/**
         * delay before showing the tooltip
         */this.delay=0};PopoverConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var PopoverContainerComponent=/*#__PURE__*/function(){/**
     * @param {?} config
     */function PopoverContainerComponent(config){Object.assign(this,config)}/**
     * @return {?}
     */_createClass(PopoverContainerComponent,[{key:"isBs3",get:function get(){return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["isBs3"])()}}]);return PopoverContainerComponent}();PopoverContainerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"popover-container",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,// tslint:disable-next-line
host:{"[class]":"\"popover in popover-\" + placement + \" \" + \"bs-popover-\" + placement + \" \" + placement + \" \" + containerClass","[class.show]":"!isBs3","[class.bs3]":"isBs3",role:"tooltip",style:"display:block;"},template:"<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",styles:["\n    :host.bs3.popover-top {\n      margin-bottom: 10px;\n    }\n    :host.bs3.popover.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.popover.top {\n      margin-bottom: 10px;\n    }\n    :host.popover.bottom>.arrow {\n      margin-left: -4px;\n    }\n    :host.bs3.bs-popover-left {\n      margin-right: .5rem;\n    }\n    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{\n      margin: .3rem 0;\n    }\n    "]}]}];/** @nocollapse */PopoverContainerComponent.ctorParameters=function(){return[{type:PopoverConfig}]};PopoverContainerComponent.propDecorators={placement:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],title:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * A lightweight, extensible directive for fancy popover creation.
 */var PopoverDirective=/*#__PURE__*/function(){/**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     * @param {?} _positionService
     */function PopoverDirective(_config,_elementRef,_renderer,_viewContainerRef,cis,_positionService){this._elementRef=_elementRef;this._renderer=_renderer;this._positionService=_positionService;/**
         * Close popover on outside click
         */this.outsideClick=false;/**
         * Css class for popover container
         */this.containerClass="";this._isInited=false;this._popover=cis.createLoader(_elementRef,_viewContainerRef,_renderer).provide({provide:PopoverConfig,useValue:_config});Object.assign(this,_config);this.onShown=this._popover.onShown;this.onHidden=this._popover.onHidden;// fix: no focus on button on Mac OS #1795
if(typeof window!=="undefined"){_elementRef.nativeElement.addEventListener("click",/**
             * @return {?}
             */function(){try{_elementRef.nativeElement.focus()}catch(err){return}})}}/**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */var _proto47=PopoverDirective.prototype;/**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */_proto47.show=function show(){var _this57=this;if(this._popover.isShown||!this.popover||this._delayTimeoutId){return}this._positionService.setOptions({modifiers:{flip:{enabled:this.adaptivePosition},preventOverflow:{enabled:this.adaptivePosition}}});/** @type {?} */var showPopover=/**
         * @return {?}
         */function showPopover(){if(_this57._delayTimeoutId){_this57._delayTimeoutId=undefined}_this57._popover.attach(PopoverContainerComponent).to(_this57.container).position({attachment:_this57.placement}).show({content:_this57.popover,context:_this57.popoverContext,placement:_this57.placement,title:_this57.popoverTitle,containerClass:_this57.containerClass});if(!_this57.adaptivePosition){_this57._positionService.calcPosition();_this57._positionService.deletePositionElement(_this57._popover._componentRef.location)}_this57.isOpen=true};/** @type {?} */var cancelDelayedTooltipShowing=/**
         * @return {?}
         */function cancelDelayedTooltipShowing(){if(_this57._popoverCancelShowFn){_this57._popoverCancelShowFn()}};if(this.delay){/** @type {?} */var _timer=Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.delay).subscribe(/**
             * @return {?}
             */function(){showPopover();cancelDelayedTooltipShowing()});if(this.triggers){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["parseTriggers"])(this.triggers).forEach(/**
                 * @param {?} trigger
                 * @return {?}
                 */function(trigger){_this57._popoverCancelShowFn=_this57._renderer.listen(_this57._elementRef.nativeElement,trigger.close,/**
                     * @return {?}
                     */function(){_timer.unsubscribe();cancelDelayedTooltipShowing()})})}}else{showPopover()}}/**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */;_proto47.hide=function hide(){if(this._delayTimeoutId){clearTimeout(this._delayTimeoutId);this._delayTimeoutId=undefined}if(this.isOpen){this._popover.hide();this.isOpen=false}}/**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */;_proto47.toggle=function toggle(){if(this.isOpen){return this.hide()}this.show()}/**
     * @return {?}
     */;_proto47.ngOnInit=function ngOnInit(){var _this58=this;// fix: seems there are an issue with `routerLinkActive`
// which result in duplicated call ngOnInit without call to ngOnDestroy
// read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
if(this._isInited){return}this._isInited=true;this._popover.listen({triggers:this.triggers,outsideClick:this.outsideClick,show:/**
             * @return {?}
             */function show(){return _this58.show()}})}/**
     * @return {?}
     */;_proto47.ngOnDestroy=function ngOnDestroy(){this._popover.dispose()};_createClass(PopoverDirective,[{key:"isOpen",get:function get(){return this._popover.isShown}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){if(value){this.show()}else{this.hide()}}}]);return PopoverDirective}();PopoverDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[popover]",exportAs:"bs-popover"}]}];/** @nocollapse */PopoverDirective.ctorParameters=function(){return[{type:PopoverConfig},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]},{type:ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"]},{type:ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]}]};PopoverDirective.propDecorators={adaptivePosition:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],popover:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],popoverContext:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],popoverTitle:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],placement:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],outsideClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],triggers:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],container:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],containerClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isOpen:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],delay:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onShown:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var PopoverModule=/*#__PURE__*/function(){function PopoverModule(){}/**
     * @return {?}
     */PopoverModule.forRoot=function forRoot(){return{ngModule:PopoverModule,providers:[PopoverConfig,ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"],ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]}};return PopoverModule}();PopoverModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],declarations:[PopoverDirective,PopoverContainerComponent],exports:[PopoverDirective],entryComponents:[PopoverContainerComponent]}]}];//# sourceMappingURL=ngx-bootstrap-popover.js.map
/***/},/***/"./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js":/*!**************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js ***!
  \**************************************************************************************/ /*! exports provided: Positioning, PositioningService, positionElements */ /***/function node_modulesNgxBootstrapPositioningFesm2015NgxBootstrapPositioningJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Positioning",function(){return Positioning});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PositioningService",function(){return PositioningService});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"positionElements",function(){return positionElements});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Get CSS computed property of the given element
 * @param {?} element
 * @param {?=} property
 * @return {?}
 */function getStyleComputedProperty(element,property){if(element.nodeType!==1){return[]}// NOTE: 1 DOM access here
/** @type {?} */var window=element.ownerDocument.defaultView;/** @type {?} */var css=window.getComputedStyle(element,null);return property?css[/** @type {?} */property]:css}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Returns the parentNode or the host of the element
 * @param {?} element
 * @return {?}
 */function getParentNode(element){if(element.nodeName==="HTML"){return element}return element.parentNode||element.host}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} element
 * @return {?}
 */function getScrollParent(element){// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!element){return document.body}switch(element.nodeName){case"HTML":case"BODY":return element.ownerDocument.body;case"#document":return element.body;default:}// Firefox want us to check `-x` and `-y` variations as well
var _getStyleComputedProp=getStyleComputedProperty(element),overflow=_getStyleComputedProp.overflow,overflowX=_getStyleComputedProp.overflowX,overflowY=_getStyleComputedProp.overflowY;if(/(auto|scroll|overlay)/.test(String(overflow)+String(overflowY)+String(overflowX))){return element}return getScrollParent(getParentNode(element))}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var isBrowser=typeof window!=="undefined"&&typeof document!=="undefined";/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var isIE11=isBrowser&&!!(/** @type {?} */window.MSInputMethodContext&&/** @type {?} */document.documentMode);/** @type {?} */var isIE10=isBrowser&&!!(/** @type {?} */window.MSInputMethodContext&&/MSIE 10/.test(/** @type {?} */navigator.userAgent));/**
 * @param {?=} version
 * @return {?}
 */function isIE(version){if(version===11){return isIE11}if(version===10){return isIE10}return isIE11||isIE10}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} element
 * @return {?}
 */function getOffsetParent(element){if(!element){return document.documentElement}/** @type {?} */var noOffsetParent=isIE(10)?document.body:null;// NOTE: 1 DOM access here
/** @type {?} */var offsetParent=element.offsetParent||null;// Skip hidden elements which don't have an offsetParent
/** @type {?} */var sibling;while(offsetParent===noOffsetParent&&element.nextElementSibling&&sibling!==element.nextElementSibling){sibling=element.nextElementSibling;offsetParent=sibling.offsetParent}/** @type {?} */var nodeName=offsetParent&&offsetParent.nodeName;if(!nodeName||nodeName==="BODY"||nodeName==="HTML"){return sibling?sibling.ownerDocument.documentElement:document.documentElement}// .offsetParent will return the closest TH, TD or TABLE in case
if(["TH","TD","TABLE"].indexOf(offsetParent.nodeName)!==-1&&getStyleComputedProperty(offsetParent,"position")==="static"){return getOffsetParent(offsetParent)}return offsetParent}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} element
 * @return {?}
 */function isOffsetContainer(element){var nodeName=element.nodeName;if(nodeName==="BODY"){return false}return nodeName==="HTML"||getOffsetParent(element.firstElementChild)===element}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Finds the root node (document, shadowDOM root) of the given element
 * @param {?} node
 * @return {?}
 */function getRoot(node){if(node.parentNode!==null){return getRoot(node.parentNode)}return node}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} element1
 * @param {?} element2
 * @return {?}
 */function findCommonOffsetParent(element1,element2){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!element1||!element1.nodeType||!element2||!element2.nodeType){return document.documentElement}// Here we make sure to give as "start" the element that comes first in the DOM
/* tslint:disable-next-line: no-bitwise */ /** @type {?} */var order=element1.compareDocumentPosition(element2)&Node.DOCUMENT_POSITION_FOLLOWING;/** @type {?} */var start=order?element1:element2;/** @type {?} */var end=order?element2:element1;// Get common ancestor container
/** @type {?} */var range=document.createRange();range.setStart(start,0);range.setEnd(end,0);var commonAncestorContainer=range.commonAncestorContainer;// Both nodes are inside #document
if(element1!==commonAncestorContainer&&element2!==commonAncestorContainer||start.contains(end)){if(isOffsetContainer(commonAncestorContainer)){return commonAncestorContainer}return getOffsetParent(commonAncestorContainer)}// one of the nodes is inside shadowDOM, find which one
/** @type {?} */var element1root=getRoot(element1);if(element1root.host){return findCommonOffsetParent(element1root.host,element2)}else{return findCommonOffsetParent(element1,getRoot(element2).host)}}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Helper to detect borders of a given element
 */ /**
 * @param {?} styles
 * @param {?} axis
 * @return {?}
 */function getBordersSize(styles,axis){/** @type {?} */var sideA=axis==="x"?"Left":"Top";/** @type {?} */var sideB=sideA==="Left"?"Right":"Bottom";return parseFloat(styles[/** @type {?} */"border"+sideA+"Width"])+parseFloat(styles[/** @type {?} */"border"+sideB+"Width"])}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} axis
 * @param {?} body
 * @param {?} html
 * @param {?} computedStyle
 * @return {?}
 */function getSize(axis,body,html,computedStyle){return Math.max(/** @type {?} */body["offset"+axis],/** @type {?} */body["scroll"+axis],/** @type {?} */html["client"+axis],/** @type {?} */html["offset"+axis],/** @type {?} */html["scroll"+axis],isIE(10)?parseInt(/** @type {?} */html["offset"+axis],10)+parseInt(computedStyle[/** @type {?} */"margin"+(axis==="Height"?"Top":"Left")],10)+parseInt(computedStyle[/** @type {?} */"margin"+(axis==="Height"?"Bottom":"Right")],10):0)}/**
 * @param {?} document
 * @return {?}
 */function getWindowSizes(document){/** @type {?} */var body=document.body;/** @type {?} */var html=document.documentElement;/** @type {?} */var computedStyle=isIE(10)&&getComputedStyle(html);return{height:getSize("Height",body,html,computedStyle),width:getSize("Width",body,html,computedStyle)}}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Gets the scroll value of the given element in the given side (top and left)
 * @param {?} element
 * @param {?=} side
 * @return {?}
 */function getScroll(element,side){if(side===void 0){side="top"}/** @type {?} */var upperSide=side==="top"?"scrollTop":"scrollLeft";/** @type {?} */var nodeName=element.nodeName;if(nodeName==="BODY"||nodeName==="HTML"){/** @type {?} */var html=element.ownerDocument.documentElement;/** @type {?} */var scrollingElement=element.ownerDocument.scrollingElement||html;return scrollingElement[upperSide]}return element[upperSide]}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} offsets
 * @return {?}
 */function getClientRect(offsets){return Object.assign({},offsets,{right:offsets.left+offsets.width,bottom:offsets.top+offsets.height})}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} element
 * @return {?}
 */function getBoundingClientRect(element){/** @type {?} */var rect={};// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(isIE(10)){rect=element.getBoundingClientRect();/** @type {?} */var scrollTop=getScroll(element,"top");/** @type {?} */var scrollLeft=getScroll(element,"left");rect.top+=scrollTop;rect.left+=scrollLeft;rect.bottom+=scrollTop;rect.right+=scrollLeft}else{rect=element.getBoundingClientRect()}}catch(e){return undefined}/** @type {?} */var result={left:rect.left,top:rect.top,width:rect.right-rect.left,height:rect.bottom-rect.top};// subtract scrollbar size from sizes
/** @type {?} */var sizes=element.nodeName==="HTML"?getWindowSizes(element.ownerDocument):{};/** @type {?} */var width=sizes.width||element.clientWidth||result.right-result.left;/** @type {?} */var height=sizes.height||element.clientHeight||result.bottom-result.top;/** @type {?} */var horizScrollbar=element.offsetWidth-width;/** @type {?} */var vertScrollbar=element.offsetHeight-height;// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(horizScrollbar||vertScrollbar){/** @type {?} */var styles=getStyleComputedProperty(element);horizScrollbar-=getBordersSize(styles,"x");vertScrollbar-=getBordersSize(styles,"y");result.width-=horizScrollbar;result.height-=vertScrollbar}return getClientRect(result)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} rect
 * @param {?} element
 * @param {?=} subtract
 * @return {?}
 */function includeScroll(rect,element,subtract){if(subtract===void 0){subtract=false}/** @type {?} */var scrollTop=getScroll(element,"top");/** @type {?} */var scrollLeft=getScroll(element,"left");/** @type {?} */var modifier=subtract?-1:1;rect.top+=scrollTop*modifier;rect.bottom+=scrollTop*modifier;rect.left+=scrollLeft*modifier;rect.right+=scrollLeft*modifier;return rect}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} children
 * @param {?} parent
 * @param {?=} fixedPosition
 * @return {?}
 */function getOffsetRectRelativeToArbitraryNode(children,parent,fixedPosition){if(fixedPosition===void 0){fixedPosition=false}/** @type {?} */var isIE10=isIE(10);/** @type {?} */var isHTML=parent.nodeName==="HTML";/** @type {?} */var childrenRect=getBoundingClientRect(children);/** @type {?} */var parentRect=getBoundingClientRect(parent);/** @type {?} */var scrollParent=getScrollParent(children);/** @type {?} */var styles=getStyleComputedProperty(parent);/** @type {?} */var borderTopWidth=parseFloat(styles.borderTopWidth);/** @type {?} */var borderLeftWidth=parseFloat(styles.borderLeftWidth);// In cases where the parent is fixed, we must ignore negative scroll in offset calc
if(fixedPosition&&isHTML){parentRect.top=Math.max(parentRect.top,0);parentRect.left=Math.max(parentRect.left,0)}/** @type {?} */var offsets=getClientRect({top:childrenRect.top-parentRect.top-borderTopWidth,left:childrenRect.left-parentRect.left-borderLeftWidth,width:childrenRect.width,height:childrenRect.height});offsets.marginTop=0;offsets.marginLeft=0;// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(!isIE10&&isHTML){/** @type {?} */var marginTop=parseFloat(styles.marginTop);/** @type {?} */var marginLeft=parseFloat(styles.marginLeft);offsets.top-=borderTopWidth-marginTop;offsets.bottom-=borderTopWidth-marginTop;offsets.left-=borderLeftWidth-marginLeft;offsets.right-=borderLeftWidth-marginLeft;// Attach marginTop and marginLeft because in some circumstances we may need them
offsets.marginTop=marginTop;offsets.marginLeft=marginLeft}if(isIE10&&!fixedPosition?parent.contains(scrollParent):parent===scrollParent&&scrollParent.nodeName!=="BODY"){offsets=includeScroll(offsets,parent)}return offsets}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} element
 * @param {?=} excludeScroll
 * @return {?}
 */function getViewportOffsetRectRelativeToArtbitraryNode(element,excludeScroll){if(excludeScroll===void 0){excludeScroll=false}/** @type {?} */var html=element.ownerDocument.documentElement;/** @type {?} */var relativeOffset=getOffsetRectRelativeToArbitraryNode(element,html);/** @type {?} */var width=Math.max(html.clientWidth,window.innerWidth||0);/** @type {?} */var height=Math.max(html.clientHeight,window.innerHeight||0);/** @type {?} */var scrollTop=!excludeScroll?getScroll(html):0;/** @type {?} */var scrollLeft=!excludeScroll?getScroll(html,"left"):0;/** @type {?} */var offset={top:scrollTop-Number(relativeOffset.top)+Number(relativeOffset.marginTop),left:scrollLeft-Number(relativeOffset.left)+Number(relativeOffset.marginLeft),width:width,height:height};return getClientRect(offset)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} element
 * @return {?}
 */function isFixed(element){/** @type {?} */var nodeName=element.nodeName;if(nodeName==="BODY"||nodeName==="HTML"){return false}if(getStyleComputedProperty(element,"position")==="fixed"){return true}return isFixed(getParentNode(element))}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} element
 * @return {?}
 */function getFixedPositionOffsetParent(element){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!element||!element.parentElement||isIE()){return document.documentElement}/** @type {?} */var el=element.parentElement;while(el&&getStyleComputedProperty(el,"transform")==="none"){el=el.parentElement}return el||document.documentElement}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} target
 * @param {?} host
 * @param {?=} padding
 * @param {?=} boundariesElement
 * @param {?=} fixedPosition
 * @return {?}
 */function getBoundaries(target,host,padding,boundariesElement,fixedPosition){if(padding===void 0){padding=0}if(fixedPosition===void 0){fixedPosition=false}// NOTE: 1 DOM access here
// NOTE: 1 DOM access here
/** @type {?} */var boundaries={top:0,left:0};/** @type {?} */var offsetParent=fixedPosition?getFixedPositionOffsetParent(target):findCommonOffsetParent(target,host);// Handle viewport case
if(boundariesElement==="viewport"){boundaries=getViewportOffsetRectRelativeToArtbitraryNode(offsetParent,fixedPosition)}else{// Handle other cases based on DOM element used as boundaries
/** @type {?} */var boundariesNode;if(boundariesElement==="scrollParent"){boundariesNode=getScrollParent(getParentNode(host));if(boundariesNode.nodeName==="BODY"){boundariesNode=target.ownerDocument.documentElement}}else if(boundariesElement==="window"){boundariesNode=target.ownerDocument.documentElement}else{boundariesNode=boundariesElement}/** @type {?} */var offsets=getOffsetRectRelativeToArbitraryNode(boundariesNode,offsetParent,fixedPosition);// In case of HTML, we need a different computation
if(boundariesNode.nodeName==="HTML"&&!isFixed(offsetParent)){var _getWindowSizes=getWindowSizes(target.ownerDocument),height=_getWindowSizes.height,width=_getWindowSizes.width;boundaries.top+=offsets.top-offsets.marginTop;boundaries.bottom=Number(height)+Number(offsets.top);boundaries.left+=offsets.left-offsets.marginLeft;boundaries.right=Number(width)+Number(offsets.left)}else{// for all the other DOM elements, this one is good
boundaries=offsets}}// Add paddings
boundaries.left+=padding;boundaries.top+=padding;boundaries.right-=padding;boundaries.bottom-=padding;return boundaries}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} __0
 * @return {?}
 */function getArea(_ref2){var width=_ref2.width,height=_ref2.height;return width*height}/**
 * @param {?} placement
 * @param {?} refRect
 * @param {?} target
 * @param {?} host
 * @param {?=} allowedPositions
 * @param {?=} boundariesElement
 * @param {?=} padding
 * @return {?}
 */function computeAutoPlacement(placement,refRect,target,host,allowedPositions,boundariesElement,padding){if(allowedPositions===void 0){allowedPositions=["top","bottom","right","left"]}if(boundariesElement===void 0){boundariesElement="viewport"}if(padding===void 0){padding=0}if(placement.indexOf("auto")===-1){return placement}/** @type {?} */var boundaries=getBoundaries(target,host,padding,boundariesElement);/** @type {?} */var rects={top:{width:boundaries.width,height:refRect.top-boundaries.top},right:{width:boundaries.right-refRect.right,height:boundaries.height},bottom:{width:boundaries.width,height:boundaries.bottom-refRect.bottom},left:{width:refRect.left-boundaries.left,height:boundaries.height}};/** @type {?} */var sortedAreas=Object.keys(rects).map(/**
     * @param {?} key
     * @return {?}
     */function(key){return Object.assign({key:key},rects[key],{area:getArea(rects[key])})}).sort(/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */function(a,b){return b.area-a.area});/** @type {?} */var filteredAreas=sortedAreas.filter(/**
     * @param {?} __0
     * @return {?}
     */function(_ref3){var width=_ref3.width,height=_ref3.height;return width>=target.clientWidth&&height>=target.clientHeight});filteredAreas=filteredAreas.filter(/**
     * @param {?} position
     * @return {?}
     */function(position){return allowedPositions.some(/**
         * @param {?} allowedPosition
         * @return {?}
         */function(allowedPosition){return allowedPosition===position.key})});/** @type {?} */var computedPlacement=filteredAreas.length>0?filteredAreas[0].key:sortedAreas[0].key;/** @type {?} */var variation=placement.split(" ")[1];// for tooltip on auto position
target.className=target.className.replace(/bs-tooltip-auto/g,"bs-tooltip-"+computedPlacement);return computedPlacement+(variation?"-"+variation:"")}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} data
 * @return {?}
 */function getOffsets(data){return{width:data.offsets.target.width,height:data.offsets.target.height,left:Math.floor(data.offsets.target.left),top:Math.round(data.offsets.target.top),bottom:Math.round(data.offsets.target.bottom),right:Math.floor(data.offsets.target.right)}}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Get the opposite placement of the given one
 * @param {?} placement
 * @return {?}
 */function getOppositePlacement(placement){/** @type {?} */var hash={left:"right",right:"left",bottom:"top",top:"bottom"};return placement.replace(/left|right|bottom|top/g,/**
     * @param {?} matched
     * @return {?}
     */function(matched){return(/** @type {?} */hash[matched])})}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Get the opposite placement variation of the given one
 * @param {?} variation
 * @return {?}
 */function getOppositeVariation(variation){if(variation==="right"){return"left"}else if(variation==="left"){return"right"}return variation}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Get the outer sizes of the given element (offset size + margins)
 * @param {?} element
 * @return {?}
 */function getOuterSizes(element){/** @type {?} */var window=element.ownerDocument.defaultView;/** @type {?} */var styles=window.getComputedStyle(element);/** @type {?} */var x=parseFloat(styles.marginTop||0)+parseFloat(styles.marginBottom||0);/** @type {?} */var y=parseFloat(styles.marginLeft||0)+parseFloat(styles.marginRight||0);return{width:Number(element.offsetWidth)+y,height:Number(element.offsetHeight)+x}}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} target
 * @param {?} host
 * @param {?=} fixedPosition
 * @return {?}
 */function getReferenceOffsets(target,host,fixedPosition){if(fixedPosition===void 0){fixedPosition=null}/** @type {?} */var commonOffsetParent=fixedPosition?getFixedPositionOffsetParent(target):findCommonOffsetParent(target,host);return getOffsetRectRelativeToArbitraryNode(host,commonOffsetParent,fixedPosition)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} target
 * @param {?} hostOffsets
 * @param {?} position
 * @return {?}
 */function getTargetOffsets(target,hostOffsets,position){/** @type {?} */var placement=position.split(" ")[0];// Get target node sizes
/** @type {?} */var targetRect=getOuterSizes(target);// Add position, width and height to our offsets object
/** @type {?} */var targetOffsets={width:targetRect.width,height:targetRect.height};// depending by the target placement we have to compute its offsets slightly differently
/** @type {?} */var isHoriz=["right","left"].indexOf(placement)!==-1;/** @type {?} */var mainSide=isHoriz?"top":"left";/** @type {?} */var secondarySide=isHoriz?"left":"top";/** @type {?} */var measurement=isHoriz?"height":"width";/** @type {?} */var secondaryMeasurement=!isHoriz?"height":"width";/** @type {?} */targetOffsets[mainSide]=hostOffsets[mainSide]+hostOffsets[measurement]/2-targetRect[measurement]/2;/** @type {?} */targetOffsets[secondarySide]=placement===secondarySide?hostOffsets[secondarySide]-targetRect[secondaryMeasurement]:/** @type {?} */hostOffsets[getOppositePlacement(secondarySide)];return targetOffsets}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Helper used to know if the given modifier is enabled.
 * @param {?} options
 * @param {?} modifierName
 * @return {?}
 */function isModifierEnabled(options,modifierName){return options&&options.modifiers&&options.modifiers[modifierName]&&options.modifiers[modifierName].enabled}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Tells if a given input is a number
 * @param {?} n
 * @return {?}
 */function isNumeric(n){return n!==""&&!isNaN(parseFloat(n))&&isFinite(n)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} data
 * @param {?=} renderer
 * @return {?}
 */function updateContainerClass(data,renderer){/** @type {?} */var target=data.instance.target;/** @type {?} */var containerClass=target.className;if(data.placementAuto){containerClass=containerClass.replace(/bs-popover-auto/g,"bs-popover-"+data.placement);containerClass=containerClass.replace(/bs-tooltip-auto/g,"bs-tooltip-"+data.placement);containerClass=containerClass.replace(/\sauto/g," "+data.placement);if(containerClass.indexOf("popover")!==-1&&containerClass.indexOf("popover-auto")===-1){containerClass+=" popover-auto"}if(containerClass.indexOf("tooltip")!==-1&&containerClass.indexOf("tooltip-auto")===-1){containerClass+=" tooltip-auto"}}containerClass=containerClass.replace(/left|right|top|bottom/g,""+data.placement.split(" ")[0]);if(renderer){renderer.setAttribute(target,"class",containerClass);return}target.className=containerClass}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} element
 * @param {?} styles
 * @param {?=} renderer
 * @return {?}
 */function setStyles(element,styles,renderer){Object.keys(styles).forEach(/**
     * @param {?} prop
     * @return {?}
     */function(prop){/** @type {?} */var unit="";// add unit if the value is numeric and is one of the following
if(["width","height","top","right","bottom","left"].indexOf(prop)!==-1&&isNumeric(styles[prop])){unit="px"}if(renderer){renderer.setStyle(element,prop,""+String(styles[prop])+unit);return}element.style[prop]=String(styles[prop])+unit})}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} data
 * @return {?}
 */function arrow(data){var _data$offsets$arrow;/** @type {?} */var targetOffsets=data.offsets.target;// if arrowElement is a string, suppose it's a CSS selector
/** @type {?} */var arrowElement=data.instance.target.querySelector(".arrow");// if arrowElement is not found, don't run the modifier
if(!arrowElement){return data}/** @type {?} */var isVertical=["left","right"].indexOf(data.placement)!==-1;/** @type {?} */var len=isVertical?"height":"width";/** @type {?} */var sideCapitalized=isVertical?"Top":"Left";/** @type {?} */var side=sideCapitalized.toLowerCase();/** @type {?} */var altSide=isVertical?"left":"top";/** @type {?} */var opSide=isVertical?"bottom":"right";/** @type {?} */var arrowElementSize=getOuterSizes(arrowElement)[len];// top/left side
if(data.offsets.host[opSide]-arrowElementSize</** @type {?} */targetOffsets[side]){/** @type {?} */targetOffsets[side]-=/** @type {?} */targetOffsets[side]-(data.offsets.host[opSide]-arrowElementSize)}// bottom/right side
if(Number(/** @type {?} */data.offsets.host[side])+Number(arrowElementSize)>/** @type {?} */targetOffsets[opSide]){/** @type {?} */targetOffsets[side]+=Number(/** @type {?} */data.offsets.host[side])+Number(arrowElementSize)-Number(/** @type {?} */targetOffsets[opSide])}targetOffsets=getClientRect(targetOffsets);// compute center of the target
/** @type {?} */var center=Number(/** @type {?} */data.offsets.host[side])+Number(data.offsets.host[len]/2-arrowElementSize/2);// Compute the sideValue using the updated target offsets
// take target margin in account because we don't have this info available
/** @type {?} */var css=getStyleComputedProperty(data.instance.target);/** @type {?} */var targetMarginSide=parseFloat(css["margin"+sideCapitalized]);/** @type {?} */var targetBorderSide=parseFloat(css["border"+sideCapitalized+"Width"]);/** @type {?} */var sideValue=center-/** @type {?} */targetOffsets[side]-targetMarginSide-targetBorderSide;// prevent arrowElement from being placed not contiguously to its target
sideValue=Math.max(Math.min(targetOffsets[len]-arrowElementSize,sideValue),0);data.offsets.arrow=(_data$offsets$arrow={},_data$offsets$arrow[side]=Math.round(sideValue),_data$offsets$arrow[altSide]="",_data$offsets$arrow);data.instance.arrow=arrowElement;return data}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} data
 * @return {?}
 */function flip(data){data.offsets.target=getClientRect(data.offsets.target);if(!isModifierEnabled(data.options,"flip")){data.offsets.target=Object.assign({},data.offsets.target,getTargetOffsets(data.instance.target,data.offsets.host,data.placement));return data}/** @type {?} */var boundaries=getBoundaries(data.instance.target,data.instance.host,0,// padding
"viewport",false// positionFixed
);/** @type {?} */var placement=data.placement.split(" ")[0];/** @type {?} */var variation=data.placement.split(" ")[1]||"";/** @type {?} */var offsetsHost=data.offsets.host;/** @type {?} */var target=data.instance.target;/** @type {?} */var host=data.instance.host;/** @type {?} */var adaptivePosition=computeAutoPlacement("auto",offsetsHost,target,host,data.options.allowedPositions);/** @type {?} */var flipOrder=[placement,adaptivePosition];/* tslint:disable-next-line: cyclomatic-complexity */flipOrder.forEach(/**
     * @param {?} step
     * @param {?} index
     * @return {?}
     */function(step,index){if(placement!==step||flipOrder.length===index+1){return data}placement=data.placement.split(" ")[0];// using floor because the host offsets may contain decimals we are not going to consider here
/** @type {?} */var overlapsRef=placement==="left"&&Math.floor(data.offsets.target.right)>Math.floor(data.offsets.host.left)||placement==="right"&&Math.floor(data.offsets.target.left)<Math.floor(data.offsets.host.right)||placement==="top"&&Math.floor(data.offsets.target.bottom)>Math.floor(data.offsets.host.top)||placement==="bottom"&&Math.floor(data.offsets.target.top)<Math.floor(data.offsets.host.bottom);/** @type {?} */var overflowsLeft=Math.floor(data.offsets.target.left)<Math.floor(boundaries.left);/** @type {?} */var overflowsRight=Math.floor(data.offsets.target.right)>Math.floor(boundaries.right);/** @type {?} */var overflowsTop=Math.floor(data.offsets.target.top)<Math.floor(boundaries.top);/** @type {?} */var overflowsBottom=Math.floor(data.offsets.target.bottom)>Math.floor(boundaries.bottom);/** @type {?} */var overflowsBoundaries=placement==="left"&&overflowsLeft||placement==="right"&&overflowsRight||placement==="top"&&overflowsTop||placement==="bottom"&&overflowsBottom;// flip the variation if required
/** @type {?} */var isVertical=["top","bottom"].indexOf(placement)!==-1;/** @type {?} */var flippedVariation=isVertical&&variation==="left"&&overflowsLeft||isVertical&&variation==="right"&&overflowsRight||!isVertical&&variation==="left"&&overflowsTop||!isVertical&&variation==="right"&&overflowsBottom;if(overlapsRef||overflowsBoundaries||flippedVariation){if(overlapsRef||overflowsBoundaries){placement=flipOrder[index+1]}if(flippedVariation){variation=getOppositeVariation(variation)}data.placement=placement+(variation?" "+variation:"");data.offsets.target=Object.assign({},data.offsets.target,getTargetOffsets(data.instance.target,data.offsets.host,data.placement))}});return data}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} targetElement
 * @param {?} hostElement
 * @param {?} position
 * @param {?} options
 * @return {?}
 */function initData(targetElement,hostElement,position,options){/** @type {?} */var hostElPosition=getReferenceOffsets(targetElement,hostElement);if(!position.match(/^(auto)*\s*(left|right|top|bottom)*$/)&&!position.match(/^(left|right|top|bottom)*\s*(start|end)*$/)){/* tslint:disable-next-line: no-parameter-reassignment */position="auto"}/** @type {?} */var placementAuto=!!position.match(/auto/g);// support old placements 'auto left|right|top|bottom'
/** @type {?} */var placement=position.match(/auto\s(left|right|top|bottom)/)?position.split(" ")[1]||"auto":position;/** @type {?} */var targetOffset=getTargetOffsets(targetElement,hostElPosition,placement);placement=computeAutoPlacement(placement,hostElPosition,targetElement,hostElement,options?options.allowedPositions:undefined);return{options:options,instance:{target:targetElement,host:hostElement,arrow:null},offsets:{target:targetOffset,host:hostElPosition,arrow:null},positionFixed:false,placement:placement,placementAuto:placementAuto}}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} data
 * @return {?}
 */function preventOverflow(data){if(!isModifierEnabled(data.options,"preventOverflow")){return data}// NOTE: DOM access here
// resets the targetOffsets's position so that the document size can be calculated excluding
// the size of the targetOffsets element itself
/** @type {?} */var transformProp="transform";/** @type {?} */var targetStyles=data.instance.target.style;// assignment to help minification
var top=targetStyles.top,left=targetStyles.left,transform=targetStyles[transformProp];targetStyles.top="";targetStyles.left="";targetStyles[transformProp]="";/** @type {?} */var boundaries=getBoundaries(data.instance.target,data.instance.host,0,// padding
"scrollParent",false// positionFixed
);// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
targetStyles.top=top;targetStyles.left=left;targetStyles[transformProp]=transform;/** @type {?} */var order=["left","right","top","bottom"];/** @type {?} */var check={/**
         * @param {?} placement
         * @return {?}
         */primary:function primary(placement){var _ref4;/** @type {?} */var value=/** @type {?} */data.offsets.target[placement];if(/** @type {?} */data.offsets.target[placement]<boundaries[placement]&&!false// options.escapeWithReference
){value=Math.max(/** @type {?} */data.offsets.target[placement],boundaries[placement])}return _ref4={},_ref4[placement]=value,_ref4},/**
         * @param {?} placement
         * @return {?}
         */secondary:function secondary(placement){var _ref5;/** @type {?} */var mainSide=placement==="right"?"left":"top";/** @type {?} */var value=data.offsets.target[mainSide];if(/** @type {?} */data.offsets.target[placement]>boundaries[placement]&&!false// escapeWithReference
){value=Math.min(data.offsets.target[mainSide],boundaries[placement]-(placement==="right"?data.offsets.target.width:data.offsets.target.height))}return _ref5={},_ref5[mainSide]=value,_ref5}};/** @type {?} */var side;order.forEach(/**
     * @param {?} placement
     * @return {?}
     */function(placement){side=["left","top"].indexOf(placement)!==-1?"primary":"secondary";data.offsets.target=Object.assign({},data.offsets.target,/** @type {?} */check[side](placement))});return data}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} data
 * @return {?}
 */function shift(data){/** @type {?} */var placement=data.placement;/** @type {?} */var basePlacement=placement.split(" ")[0];/** @type {?} */var shiftvariation=placement.split(" ")[1];if(shiftvariation){var _start,_end;var _data$offsets=data.offsets,host=_data$offsets.host,target=_data$offsets.target;/** @type {?} */var isVertical=["bottom","top"].indexOf(basePlacement)!==-1;/** @type {?} */var side=isVertical?"left":"top";/** @type {?} */var measurement=isVertical?"width":"height";/** @type {?} */var shiftOffsets={start:(_start={},_start[side]=host[side],_start),end:(_end={},_end[side]=host[side]+host[measurement]-target[measurement],_end)};data.offsets.target=Object.assign({},target,/** @type {?} */shiftOffsets[shiftvariation])}return data}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var Positioning=/*#__PURE__*/function(){function Positioning(){}var _proto48=Positioning.prototype;/**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */_proto48.position=function position(hostElement,targetElement,round){if(round===void 0){round=true}return this.offset(hostElement,targetElement,false)}/**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */;_proto48.offset=function offset(hostElement,targetElement,round){if(round===void 0){round=true}return getReferenceOffsets(targetElement,hostElement)}/**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */;_proto48.positionElements=function positionElements(hostElement,targetElement,position,appendToBody,options){/** @type {?} */var chainOfModifiers=[flip,shift,preventOverflow,arrow];return chainOfModifiers.reduce(/**
         * @param {?} modifiedData
         * @param {?} modifier
         * @return {?}
         */function(modifiedData,modifier){return modifier(modifiedData)},initData(targetElement,hostElement,position,options))};return Positioning}();/** @type {?} */var positionService=new Positioning;/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @param {?=} options
 * @param {?=} renderer
 * @return {?}
 */function positionElements(hostElement,targetElement,placement,appendToBody,options,renderer){/** @type {?} */var data=positionService.positionElements(hostElement,targetElement,placement,appendToBody,options);/** @type {?} */var offsets=getOffsets(data);setStyles(targetElement,{"will-change":"transform",top:"0px",left:"0px",transform:"translate3d("+offsets.left+"px, "+offsets.top+"px, 0px)"},renderer);if(data.instance.arrow){setStyles(data.instance.arrow,data.offsets.arrow,renderer)}updateContainerClass(data,renderer)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var PositioningService=/*#__PURE__*/function(){/**
     * @param {?} ngZone
     * @param {?} rendererFactory
     * @param {?} platformId
     */function PositioningService(ngZone,rendererFactory,platformId){var _this59=this;this.update$$=new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"];this.positionElements=new Map;this.isDisabled=false;if(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)){ngZone.runOutsideAngular(/**
             * @return {?}
             */function(){_this59.triggerEvent$=Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window,"scroll",{passive:true}),Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window,"resize",{passive:true}),/* tslint:disable-next-line: deprecation */Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(0,rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]),_this59.update$$);_this59.triggerEvent$.subscribe(/**
                 * @return {?}
                 */function(){if(_this59.isDisabled){return}_this59.positionElements/* tslint:disable-next-line: no-any */.forEach(/**
                     * @param {?} positionElement
                     * @return {?}
                     */function(positionElement){positionElements(_getHtmlElement(positionElement.target),_getHtmlElement(positionElement.element),positionElement.attachment,positionElement.appendToBody,_this59.options,rendererFactory.createRenderer(null,null))})})})}}/**
     * @param {?} options
     * @return {?}
     */var _proto49=PositioningService.prototype;_proto49.position=function position(options){this.addPositionElement(options)}/**
     * @return {?}
     */;/**
     * @return {?}
     */_proto49.disable=function disable(){this.isDisabled=true}/**
     * @return {?}
     */;_proto49.enable=function enable(){this.isDisabled=false}/**
     * @param {?} options
     * @return {?}
     */;_proto49.addPositionElement=function addPositionElement(options){this.positionElements.set(_getHtmlElement(options.element),options)}/**
     * @return {?}
     */;_proto49.calcPosition=function calcPosition(){this.update$$.next()}/**
     * @param {?} elRef
     * @return {?}
     */;_proto49.deletePositionElement=function deletePositionElement(elRef){this.positionElements.delete(_getHtmlElement(elRef))}/**
     * @param {?} options
     * @return {?}
     */;_proto49.setOptions=function setOptions(options){this.options=options};_createClass(PositioningService,[{key:"event$",get:function get(){return this.triggerEvent$}}]);return PositioningService}();PositioningService.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */PositioningService.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]},{type:Number,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]}]}]};/**
 * @param {?} element
 * @return {?}
 */function _getHtmlElement(element){// it means that we got a selector
if(typeof element==="string"){return document.querySelector(element)}if(element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]){return element.nativeElement}return element}//# sourceMappingURL=ngx-bootstrap-positioning.js.map
/***/},/***/"./node_modules/ngx-bootstrap/progressbar/fesm2015/ngx-bootstrap-progressbar.js":/*!**************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/progressbar/fesm2015/ngx-bootstrap-progressbar.js ***!
  \**************************************************************************************/ /*! exports provided: BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule */ /***/function node_modulesNgxBootstrapProgressbarFesm2015NgxBootstrapProgressbarJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BarComponent",function(){return BarComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ProgressbarComponent",function(){return ProgressbarComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ProgressbarConfig",function(){return ProgressbarConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ProgressbarModule",function(){return ProgressbarModule});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ngx-bootstrap/utils */"./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var ProgressbarConfig=function ProgressbarConfig(){/**
         * if `true` changing value of progress bar will be animated
         */this.animate=false;/**
         * maximum total value of progress element
         */this.max=100};ProgressbarConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var ProgressbarComponent=/*#__PURE__*/function(){/**
     * @param {?} config
     */function ProgressbarComponent(config){this.isStacked=false;this.addClass=true;/* tslint:disable-next-line:no-any */this.bars=[];this._max=100;Object.assign(this,config)}/**
     * if `true` changing value of progress bar will be animated
     * @param {?} value
     * @return {?}
     */var _proto50=ProgressbarComponent.prototype;/**
     * @param {?} bar
     * @return {?}
     */_proto50.addBar=function addBar(bar){bar.animate=this._animate;bar.striped=this._striped;this.bars.push(bar)}/**
     * @param {?} bar
     * @return {?}
     */;_proto50.removeBar=function removeBar(bar){this.bars.splice(this.bars.indexOf(bar),1)};_createClass(ProgressbarComponent,[{key:"animate",set:function set(value){this._animate=value;this.bars.forEach(/**
         * @param {?} b
         * @return {?}
         */function(b){b.animate=value})}/**
     * If `true`, striped classes are applied
     * @param {?} value
     * @return {?}
     */},{key:"striped",set:function set(value){this._striped=value;this.bars.forEach(/**
         * @param {?} b
         * @return {?}
         */function(b){b.striped=value})}/**
     * current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     * @param {?} value
     * @return {?}
     */},{key:"value",set:function set(value){this.isStacked=Array.isArray(value);this._value=value}/**
     * @return {?}
     */},{key:"isBs3",get:function get(){return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()}/**
     * maximum total value of progress element
     * @return {?}
     */},{key:"max",get:function get(){return this._max}/**
     * @param {?} v
     * @return {?}
     */,set:function set(v){this._max=v;this.bars.forEach(/**
         * @param {?} bar
         * @return {?}
         */function(bar){bar.recalculatePercentage()})}}]);return ProgressbarComponent}();ProgressbarComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"progressbar",template:"<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\n</ng-template>\n",styles:["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]}]}];/** @nocollapse */ProgressbarComponent.ctorParameters=function(){return[{type:ProgressbarConfig}]};ProgressbarComponent.propDecorators={animate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],striped:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],type:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],value:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],max:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["attr.max"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],addClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["class.progress"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // todo: number pipe
// todo: use query from progress?
var BarComponent=/*#__PURE__*/function(){/**
     * @param {?} el
     * @param {?} progress
     * @param {?} renderer
     */function BarComponent(el,progress,renderer){this.el=el;this.renderer=renderer;this.addClass=true;this.percent=0;this.progress=progress}/**
     * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
     * @return {?}
     */var _proto51=BarComponent.prototype;/**
     * @return {?}
     */_proto51.ngOnInit=function ngOnInit(){this.progress.addBar(this)}/**
     * @return {?}
     */;_proto51.ngOnDestroy=function ngOnDestroy(){this.progress.removeBar(this)}/**
     * @return {?}
     */;_proto51.recalculatePercentage=function recalculatePercentage(){this.percent=+(this.value/this.progress.max*100).toFixed(2);/** @type {?} */var totalPercentage=this.progress.bars.reduce(/**
         * @param {?} total
         * @param {?} bar
         * @return {?}
         */function(total,bar){return total+bar.percent},0);if(totalPercentage>100){this.percent-=totalPercentage-100}}/**
     * @private
     * @return {?}
     */;_proto51.applyTypeClasses=function applyTypeClasses(){if(this._prevType){/** @type {?} */var barTypeClass="progress-bar-"+this._prevType;/** @type {?} */var bgClass="bg-"+this._prevType;this.renderer.removeClass(this.el.nativeElement,barTypeClass);this.renderer.removeClass(this.el.nativeElement,bgClass);this._prevType=null}if(this._type){/** @type {?} */var _barTypeClass="progress-bar-"+this._type;/** @type {?} */var _bgClass="bg-"+this._type;this.renderer.addClass(this.el.nativeElement,_barTypeClass);this.renderer.addClass(this.el.nativeElement,_bgClass);this._prevType=this._type}};_createClass(BarComponent,[{key:"type",get:function get(){return this._type}/**
     * @param {?} v
     * @return {?}
     */,set:function set(v){this._type=v;this.applyTypeClasses()}/**
     * current value of progress bar
     * @return {?}
     */},{key:"value",get:function get(){return this._value}/**
     * @param {?} v
     * @return {?}
     */,set:function set(v){if(!v&&v!==0){return}this._value=v;this.recalculatePercentage()}/**
     * @return {?}
     */},{key:"setBarWidth",get:function get(){this.recalculatePercentage();return this.percent}/**
     * @return {?}
     */},{key:"isBs3",get:function get(){return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()}}]);return BarComponent}();BarComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bar",template:"<ng-content></ng-content>\n",host:{role:"progressbar","aria-valuemin":"0","[class.progress-bar-animated]":"!isBs3 && animate","[class.progress-bar-striped]":"striped","[class.active]":"isBs3 && animate","[attr.aria-valuenow]":"value","[attr.aria-valuetext]":"percent ? percent.toFixed(0) + \"%\" : \"\"","[attr.aria-valuemax]":"max","[style.height.%]":"\"100\""}}]}];/** @nocollapse */BarComponent.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:ProgressbarComponent,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]}]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]}]};BarComponent.propDecorators={type:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],value:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],setBarWidth:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["style.width.%"]}],addClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["class.progress-bar"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var ProgressbarModule=/*#__PURE__*/function(){function ProgressbarModule(){}/**
     * @return {?}
     */ProgressbarModule.forRoot=function forRoot(){return{ngModule:ProgressbarModule,providers:[ProgressbarConfig]}};return ProgressbarModule}();ProgressbarModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],declarations:[BarComponent,ProgressbarComponent],exports:[BarComponent,ProgressbarComponent]}]}];//# sourceMappingURL=ngx-bootstrap-progressbar.js.map
/***/},/***/"./node_modules/ngx-bootstrap/rating/fesm2015/ngx-bootstrap-rating.js":/*!****************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/rating/fesm2015/ngx-bootstrap-rating.js ***!
  \****************************************************************************/ /*! exports provided: RatingComponent, RatingConfig, RatingModule, ɵa */ /***/function node_modulesNgxBootstrapRatingFesm2015NgxBootstrapRatingJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"RatingComponent",function(){return RatingComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"RatingConfig",function(){return RatingConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"RatingModule",function(){return RatingModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275a",function(){return RATING_CONTROL_VALUE_ACCESSOR});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_forms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Default values provider for rating
 */var RatingConfig=function RatingConfig(){/**
         * aria label for rating
         */this.ariaLabel="rating"};RatingConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var RATING_CONTROL_VALUE_ACCESSOR={provide:_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],/* tslint:disable-next-line: no-use-before-declare */useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return RatingComponent}),multi:true};var RatingComponent=/*#__PURE__*/function(){/**
     * @param {?} changeDetection
     * @param {?} config
     */function RatingComponent(changeDetection,config){this.changeDetection=changeDetection;/**
         * number of icons
         */this.max=5;/**
         * fired when icon selected, $event:number equals to selected rating
         */this.onHover=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * fired when icon selected, $event:number equals to previous rating value
         */this.onLeave=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];// tslint:disable-next-line:no-any
this.onChange=Function.prototype;// tslint:disable-next-line:no-any
this.onTouched=Function.prototype;Object.assign(this,config)}/**
     * @param {?} event
     * @return {?}
     */var _proto52=RatingComponent.prototype;_proto52.onKeydown=function onKeydown(event){/* tslint:disable-next-line: deprecation */if([37,38,39,40].indexOf(event.which)===-1){return}event.preventDefault();event.stopPropagation();/* tslint:disable-next-line: deprecation */ /** @type {?} */var sign=event.which===38||event.which===39?1:-1;this.rate(this.value+sign)}/**
     * @return {?}
     */;_proto52.ngOnInit=function ngOnInit(){this.max=typeof this.max!=="undefined"?this.max:5;this.titles=typeof this.titles!=="undefined"&&this.titles.length>0?this.titles:[];this.range=this.buildTemplateObjects(this.max)}// model -> view
/**
     * @param {?} value
     * @return {?}
     */;_proto52.writeValue=function writeValue(value){if(value%1!==value){this.value=Math.round(value);this.preValue=value;this.changeDetection.markForCheck();return}this.preValue=value;this.value=value;this.changeDetection.markForCheck()}/**
     * @param {?} value
     * @return {?}
     */;_proto52.enter=function enter(value){if(!this.readonly){this.value=value;this.changeDetection.markForCheck();this.onHover.emit(value)}}/**
     * @return {?}
     */;_proto52.reset=function reset(){this.value=Math.round(this.preValue);this.changeDetection.markForCheck();this.onLeave.emit(this.value)}/**
     * @param {?} fn
     * @return {?}
     */;_proto52.registerOnChange=function registerOnChange(fn){this.onChange=fn}/**
     * @param {?} fn
     * @return {?}
     */;_proto52.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * @param {?} value
     * @return {?}
     */;_proto52.rate=function rate(value){if(!this.readonly&&value>=0&&value<=this.range.length){this.writeValue(value);this.onChange(value)}}/**
     * @protected
     * @param {?} max
     * @return {?}
     */;_proto52.buildTemplateObjects=function buildTemplateObjects(max){/** @type {?} */var result=[];for(var i=0;i<max;i++){result.push({index:i,title:this.titles[i]||i+1})}return result};return RatingComponent}();RatingComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"rating",template:"<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\"\n      role=\"slider\" aria-valuemin=\"0\"\n      [attr.aria-label]=\"ariaLabel\"\n      [attr.aria-valuemax]=\"range.length\"\n      [attr.aria-valuenow]=\"value\">\n  <ng-template #star let-value=\"value\" let-index=\"index\">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>\n  <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n    <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n    <span class=\"bs-rating-star\"\n          (mouseenter)=\"enter(index + 1)\"\n          (click)=\"rate(index + 1)\"\n          [title]=\"r.title\"\n          [style.cursor]=\"readonly ? 'default' : 'pointer'\"\n          [class.active]=\"index < value\">\n      <ng-template [ngTemplateOutlet]=\"customTemplate || star\"\n                   [ngTemplateOutletContext]=\"{index: index, value: value}\">\n      </ng-template>\n    </span>\n  </ng-template>\n</span>\n",providers:[RATING_CONTROL_VALUE_ACCESSOR],changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush}]}];/** @nocollapse */RatingComponent.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]},{type:RatingConfig}]};RatingComponent.propDecorators={max:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],readonly:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],titles:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],customTemplate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onHover:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onLeave:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onKeydown:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["keydown",["$event"]]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var RatingModule=/*#__PURE__*/function(){function RatingModule(){}/**
     * @return {?}
     */RatingModule.forRoot=function forRoot(){return{ngModule:RatingModule,providers:[RatingConfig]}};return RatingModule}();RatingModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],declarations:[RatingComponent],exports:[RatingComponent]}]}];//# sourceMappingURL=ngx-bootstrap-rating.js.map
/***/},/***/"./node_modules/ngx-bootstrap/sortable/fesm2015/ngx-bootstrap-sortable.js":/*!********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/sortable/fesm2015/ngx-bootstrap-sortable.js ***!
  \********************************************************************************/ /*! exports provided: DraggableItemService, SortableComponent, SortableModule */ /***/function node_modulesNgxBootstrapSortableFesm2015NgxBootstrapSortableJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DraggableItemService",function(){return DraggableItemService});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SortableComponent",function(){return SortableComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SortableModule",function(){return SortableModule});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var _angular_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var DraggableItemService=/*#__PURE__*/function(){function DraggableItemService(){this.onCapture=new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]}/**
     * @param {?} item
     * @return {?}
     */var _proto53=DraggableItemService.prototype;_proto53.dragStart=function dragStart(item){this.draggableItem=item}/**
     * @return {?}
     */;_proto53.getItem=function getItem(){return this.draggableItem}/**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */;_proto53.captureItem=function captureItem(overZoneIndex,newIndex){if(this.draggableItem.overZoneIndex!==overZoneIndex){this.draggableItem.lastZoneIndex=this.draggableItem.overZoneIndex;this.draggableItem.overZoneIndex=overZoneIndex;this.onCapture.next(this.draggableItem);this.draggableItem=Object.assign({},this.draggableItem,{overZoneIndex:overZoneIndex,i:newIndex})}return this.draggableItem}/**
     * @return {?}
     */;_proto53.onCaptureItem=function onCaptureItem(){return this.onCapture};return DraggableItemService}();DraggableItemService.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /* tslint:disable */ /* tslint:enable */var SortableComponent=/*#__PURE__*/function(){/**
     * @param {?} transfer
     */function SortableComponent(transfer){var _this60=this;/**
         * class name for items wrapper
         */this.wrapperClass="";/**
         * style object for items wrapper
         */this.wrapperStyle={};/**
         * class name for item
         */this.itemClass="";/**
         * style object for item
         */this.itemStyle={};/**
         * class name for active item
         */this.itemActiveClass="";/**
         * style object for active item
         */this.itemActiveStyle={};/**
         * class name for placeholder
         */this.placeholderClass="";/**
         * style object for placeholder
         */this.placeholderStyle={};/**
         * placeholder item which will be shown if collection is empty
         */this.placeholderItem="";/**
         * fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */ /* tslint:disable-next-line: no-any */this.onChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.showPlaceholder=false;this.activeItem=-1;/* tslint:disable-next-line: no-any */this.onTouched=Function.prototype;/* tslint:disable-next-line: no-any */this.onChanged=Function.prototype;this.transfer=transfer;this.currentZoneIndex=SortableComponent.globalZoneIndex++;this.transfer.onCaptureItem().subscribe(/**
         * @param {?} item
         * @return {?}
         */function(item){return _this60.onDrop(item)})}/**
     * @return {?}
     */var _proto54=SortableComponent.prototype;/**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */_proto54.onItemDragstart=function onItemDragstart(event,item,i){this.initDragstartEvent(event);this.onTouched();this.transfer.dragStart({event:event,item:item,i:i,initialIndex:i,lastZoneIndex:this.currentZoneIndex,overZoneIndex:this.currentZoneIndex})}/**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */;_proto54.onItemDragover=function onItemDragover(event,i){if(!this.transfer.getItem()){return}event.preventDefault();/** @type {?} */var dragItem=this.transfer.captureItem(this.currentZoneIndex,this.items.length);/* tslint:disable-next-line: no-any */ /** @type {?} */var newArray=[];if(!this.items.length){newArray=[dragItem.item]}else if(dragItem.i>i){newArray=[].concat(this.items.slice(0,i),[dragItem.item],this.items.slice(i,dragItem.i),this.items.slice(dragItem.i+1))}else{// this.draggedItem.i < i
newArray=[].concat(this.items.slice(0,dragItem.i),this.items.slice(dragItem.i+1,i+1),[dragItem.item],this.items.slice(i+1))}this.items=newArray;dragItem.i=i;this.activeItem=i;this.updatePlaceholderState()}/**
     * @param {?} event
     * @return {?}
     */;_proto54.cancelEvent=function cancelEvent(event){if(!this.transfer.getItem()||!event){return}event.preventDefault()}/**
     * @param {?} item
     * @return {?}
     */;_proto54.onDrop=function onDrop(item){if(item&&item.overZoneIndex!==this.currentZoneIndex&&item.lastZoneIndex===this.currentZoneIndex){this.items=this.items.filter(/**
             * @param {?} x
             * @param {?} i
             * @return {?}
             */function(x,i){return i!==item.i});this.updatePlaceholderState()}this.resetActiveItem(undefined)}/**
     * @param {?} event
     * @return {?}
     */;_proto54.resetActiveItem=function resetActiveItem(event){this.cancelEvent(event);this.activeItem=-1}/**
     * @param {?} callback
     * @return {?}
     */;_proto54.registerOnChange=function registerOnChange(callback){this.onChanged=callback}/**
     * @param {?} callback
     * @return {?}
     */;_proto54.registerOnTouched=function registerOnTouched(callback){this.onTouched=callback}/* tslint:disable-next-line: no-any */ /**
     * @param {?} value
     * @return {?}
     */;_proto54.writeValue=function writeValue(value){var _this61=this;if(value){/* tslint:disable-next-line: no-any */this.items=value.map(/**
             * @param {?} x
             * @param {?} i
             * @return {?}
             */function(x,i){return{id:i,initData:x,value:_this61.fieldName?x[_this61.fieldName]:x}})}else{this.items=[]}this.updatePlaceholderState()}/**
     * @return {?}
     */;_proto54.updatePlaceholderState=function updatePlaceholderState(){this.showPlaceholder=!this._items.length}/**
     * @param {?} isActive
     * @return {?}
     */;_proto54.getItemStyle=function getItemStyle(isActive){return isActive?Object.assign({},this.itemStyle,this.itemActiveStyle):this.itemStyle}// tslint:disable-next-line
/**
     * @private
     * @param {?} event
     * @return {?}
     */;_proto54.initDragstartEvent=function initDragstartEvent(event){// it is necessary for mozilla
// data type should be 'Text' instead of 'text/plain' to keep compatibility
// with IE
event.dataTransfer.setData("Text","placeholder")};_createClass(SortableComponent,[{key:"items",get:function get(){return this._items}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._items=value;/** @type {?} */var out=this.items.map(/**
         * @param {?} x
         * @return {?}
         */function(x){return x.initData});this.onChanged(out);this.onChange.emit(out)}}]);return SortableComponent}();SortableComponent.globalZoneIndex=0;SortableComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-sortable",exportAs:"bs-sortable",template:"\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n        aria-dropeffect=\"move\"\n        [attr.aria-grabbed]=\"i === activeItem\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>  \n",providers:[{provide:_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
                         * @return {?}
                         */function(){return SortableComponent}),multi:true}]}]}];/** @nocollapse */SortableComponent.ctorParameters=function(){return[{type:DraggableItemService}]};SortableComponent.propDecorators={fieldName:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],wrapperClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],wrapperStyle:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],itemClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],itemStyle:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],itemActiveClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],itemActiveStyle:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],placeholderClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],placeholderStyle:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],placeholderItem:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],itemTemplate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var SortableModule=/*#__PURE__*/function(){function SortableModule(){}/**
     * @return {?}
     */SortableModule.forRoot=function forRoot(){return{ngModule:SortableModule,providers:[DraggableItemService]}};return SortableModule}();SortableModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{declarations:[SortableComponent],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],exports:[SortableComponent]}]}];//# sourceMappingURL=ngx-bootstrap-sortable.js.map
/***/},/***/"./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js":/*!************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js ***!
  \************************************************************************/ /*! exports provided: NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsModule, TabsetComponent, TabsetConfig */ /***/function node_modulesNgxBootstrapTabsFesm2015NgxBootstrapTabsJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgTranscludeDirective",function(){return NgTranscludeDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TabDirective",function(){return TabDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TabHeadingDirective",function(){return TabHeadingDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TabsModule",function(){return TabsModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TabsetComponent",function(){return TabsetComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TabsetConfig",function(){return TabsetConfig});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var NgTranscludeDirective=/*#__PURE__*/function(){/**
     * @param {?} viewRef
     */function NgTranscludeDirective(viewRef){this.viewRef=viewRef}/**
     * @param {?} templateRef
     * @return {?}
     */_createClass(NgTranscludeDirective,[{key:"ngTransclude",set:function set(templateRef){this._ngTransclude=templateRef;if(templateRef){this.viewRef.createEmbeddedView(templateRef)}}/* tslint:disable-next-line:no-any */ /**
     * @return {?}
     */,get:function get(){return this._ngTransclude}}]);return NgTranscludeDirective}();NgTranscludeDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[ngTransclude]"}]}];/** @nocollapse */NgTranscludeDirective.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]}]};NgTranscludeDirective.propDecorators={ngTransclude:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TabsetConfig=function TabsetConfig(){/**
         * provides default navigation context class: 'tabs' or 'pills'
         */this.type="tabs";/**
         * aria label for tab list
         */this.ariaLabel="Tabs"};TabsetConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ // todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
var TabsetComponent=/*#__PURE__*/function(){/**
     * @param {?} config
     * @param {?} renderer
     * @param {?} elementRef
     */function TabsetComponent(config,renderer,elementRef){this.renderer=renderer;this.elementRef=elementRef;this.clazz=true;this.tabs=[];this.classMap={};Object.assign(this,config)}/**
     * if true tabs will be placed vertically
     * @return {?}
     */var _proto55=TabsetComponent.prototype;/**
     * @return {?}
     */_proto55.ngOnDestroy=function ngOnDestroy(){this.isDestroyed=true}/**
     * @param {?} tab
     * @return {?}
     */;_proto55.addTab=function addTab(tab){this.tabs.push(tab);tab.active=this.tabs.length===1&&typeof tab.active==="undefined"}/**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */;_proto55.removeTab=function removeTab(tab,options){if(options===void 0){options={reselect:true,emit:true}}/** @type {?} */var index=this.tabs.indexOf(tab);if(index===-1||this.isDestroyed){return}// Select a new tab if the tab to be removed is selected and not destroyed
if(options.reselect&&tab.active&&this.hasAvailableTabs(index)){/** @type {?} */var newActiveIndex=this.getClosestTabIndex(index);this.tabs[newActiveIndex].active=true}if(options.emit){tab.removed.emit(tab)}this.tabs.splice(index,1);if(tab.elementRef.nativeElement.parentNode){this.renderer.removeChild(tab.elementRef.nativeElement.parentNode,tab.elementRef.nativeElement)}}/* tslint:disable-next-line: cyclomatic-complexity */ /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */;_proto55.keyNavActions=function keyNavActions(event,index){/** @type {?} */var list=Array.from(this.elementRef.nativeElement.querySelectorAll(".nav-link"));// const activeElList = list.filter((el: HTMLElement) => !el.classList.contains('disabled'));
// tslint:disable-next-line:deprecation
if(event.keyCode===13||event.key==="Enter"||event.keyCode===32||event.key==="Space"){event.preventDefault();/** @type {?} */var currentTab=list[index%list.length];currentTab.click();return}// tslint:disable-next-line:deprecation
if(event.keyCode===39||event.key==="RightArrow"){/** @type {?} */var nextTab;/** @type {?} */var shift=1;do{nextTab=list[(index+shift)%list.length];shift++}while(nextTab.classList.contains("disabled"));nextTab.focus();return}// tslint:disable-next-line:deprecation
if(event.keyCode===37||event.key==="LeftArrow"){/** @type {?} */var previousTab;/** @type {?} */var _shift=1;/** @type {?} */var i=index;do{if(i-_shift<0){i=list.length-1;previousTab=list[i];_shift=0}else{previousTab=list[i-_shift]}_shift++}while(previousTab.classList.contains("disabled"));previousTab.focus();return}// tslint:disable-next-line:deprecation
if(event.keyCode===36||event.key==="Home"){event.preventDefault();/** @type {?} */var firstTab;/** @type {?} */var _shift2=0;do{firstTab=list[_shift2%list.length];_shift2++}while(firstTab.classList.contains("disabled"));firstTab.focus();return}// tslint:disable-next-line:deprecation
if(event.keyCode===35||event.key==="End"){event.preventDefault();/** @type {?} */var lastTab;/** @type {?} */var _shift3=1;/** @type {?} */var _i=index;do{if(_i-_shift3<0){_i=list.length-1;lastTab=list[_i];_shift3=0}else{lastTab=list[_i-_shift3]}_shift3++}while(lastTab.classList.contains("disabled"));lastTab.focus();return}// tslint:disable-next-line:deprecation
if(event.keyCode===46||event.key==="Delete"){if(this.tabs[index].removable){this.removeTab(this.tabs[index]);if(list[index+1]){list[(index+1)%list.length].focus();return}if(list[list.length-1]){list[0].focus()}}}}/**
     * @protected
     * @param {?} index
     * @return {?}
     */;_proto55.getClosestTabIndex=function getClosestTabIndex(index){/** @type {?} */var tabsLength=this.tabs.length;if(!tabsLength){return-1}for(var step=1;step<=tabsLength;step+=1){/** @type {?} */var prevIndex=index-step;/** @type {?} */var nextIndex=index+step;if(this.tabs[prevIndex]&&!this.tabs[prevIndex].disabled){return prevIndex}if(this.tabs[nextIndex]&&!this.tabs[nextIndex].disabled){return nextIndex}}return-1}/**
     * @protected
     * @param {?} index
     * @return {?}
     */;_proto55.hasAvailableTabs=function hasAvailableTabs(index){/** @type {?} */var tabsLength=this.tabs.length;if(!tabsLength){return false}for(var i=0;i<tabsLength;i+=1){if(!this.tabs[i].disabled&&i!==index){return true}}return false}/**
     * @protected
     * @return {?}
     */;_proto55.setClassMap=function setClassMap(){var _this$classMap;this.classMap=(_this$classMap={"nav-stacked":this.vertical,"flex-column":this.vertical,"nav-justified":this.justified},_this$classMap["nav-"+this.type]=true,_this$classMap)};_createClass(TabsetComponent,[{key:"vertical",get:function get(){return this._vertical}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._vertical=value;this.setClassMap()}/**
     * if true tabs fill the container and have a consistent width
     * @return {?}
     */},{key:"justified",get:function get(){return this._justified}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._justified=value;this.setClassMap()}/**
     * navigation context class: 'tabs' or 'pills'
     * @return {?}
     */},{key:"type",get:function get(){return this._type}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._type=value;this.setClassMap()}}]);return TabsetComponent}();TabsetComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"tabset",template:"<ul class=\"nav\" [ngClass]=\"classMap\"\n    (click)=\"$event.preventDefault()\"\n    [attr.aria-label]=\"ariaLabel\"\n    role=\"tablist\">\n  <li *ngFor=\"let tabz of tabs; let i = index\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (keydown)=\"keyNavActions($event, i)\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\" role=\"tab\"\n       [attr.aria-controls]=\"tabz.id ? tabz.id : ''\"\n       [attr.aria-selected]=\"!!tabz.active\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n",styles:[":host .nav-tabs .nav-item.disabled a.disabled{cursor:default}"]}]}];/** @nocollapse */TabsetComponent.ctorParameters=function(){return[{type:TabsetConfig},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]}]};TabsetComponent.propDecorators={vertical:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],justified:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],type:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],clazz:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["class.tab-container"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TabDirective=/*#__PURE__*/function(){/**
     * @param {?} tabset
     * @param {?} elementRef
     * @param {?} renderer
     */function TabDirective(tabset,elementRef,renderer){this.elementRef=elementRef;this.renderer=renderer;/**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */this.selectTab=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */this.deselect=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * fired before tab will be removed, $event:Tab equals to instance of removed tab
         */this.removed=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.addClass=true;this.role="tabpanel";this.tabset=tabset;this.tabset.addTab(this)}/**
     * if set, will be added to the tab's class attribute. Multiple classes are supported.
     * @return {?}
     */var _proto56=TabDirective.prototype;/**
     * @return {?}
     */_proto56.ngOnInit=function ngOnInit(){this.removable=this.removable}/**
     * @return {?}
     */;_proto56.ngOnDestroy=function ngOnDestroy(){this.tabset.removeTab(this,{reselect:false,emit:false})};_createClass(TabDirective,[{key:"customClass",get:function get(){return this._customClass}/**
     * @param {?} customClass
     * @return {?}
     */,set:function set(customClass){var _this62=this;if(this.customClass){this.customClass.split(" ").forEach(/**
             * @param {?} cssClass
             * @return {?}
             */function(cssClass){_this62.renderer.removeClass(_this62.elementRef.nativeElement,cssClass)})}this._customClass=customClass?customClass.trim():null;if(this.customClass){this.customClass.split(" ").forEach(/**
             * @param {?} cssClass
             * @return {?}
             */function(cssClass){_this62.renderer.addClass(_this62.elementRef.nativeElement,cssClass)})}}/**
     * tab active state toggle
     * @return {?}
     */},{key:"active",get:function get(){return this._active}/**
     * @param {?} active
     * @return {?}
     */,set:function set(active){var _this63=this;if(this._active===active){return}if(this.disabled&&active||!active){if(this._active&&!active){this.deselect.emit(this);this._active=active}return}this._active=active;this.selectTab.emit(this);this.tabset.tabs.forEach(/**
         * @param {?} tab
         * @return {?}
         */function(tab){if(tab!==_this63){tab.active=false}})}/**
     * @return {?}
     */},{key:"ariaLabelledby",get:function get(){return this.id?this.id+"-link":""}}]);return TabDirective}();TabDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"tab, [tab]"}]}];/** @nocollapse */TabDirective.ctorParameters=function(){return[{type:TabsetComponent},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]}]};TabDirective.propDecorators={heading:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],id:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["attr.id"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],removable:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],customClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],active:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["class.active"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],selectTab:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],deselect:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],removed:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],addClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["class.tab-pane"]}],role:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["attr.role"]}],ariaLabelledby:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],args:["attr.aria-labelledby"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Should be used to mark <ng-template> element as a template for tab heading
 */var TabHeadingDirective=/* tslint:disable-next-line:no-any */ /**
     * @param {?} templateRef
     * @param {?} tab
     */function TabHeadingDirective(templateRef,tab){tab.headingRef=templateRef};TabHeadingDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[tabHeading]"}]}];/** @nocollapse */TabHeadingDirective.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]},{type:TabDirective}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TabsModule=/*#__PURE__*/function(){function TabsModule(){}/**
     * @return {?}
     */TabsModule.forRoot=function forRoot(){return{ngModule:TabsModule,providers:[TabsetConfig]}};return TabsModule}();TabsModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],declarations:[NgTranscludeDirective,TabDirective,TabsetComponent,TabHeadingDirective],exports:[TabDirective,TabsetComponent,TabHeadingDirective,NgTranscludeDirective]}]}];//# sourceMappingURL=ngx-bootstrap-tabs.js.map
/***/},/***/"./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js":/*!************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js ***!
  \************************************************************************************/ /*! exports provided: TimepickerActions, TimepickerComponent, TimepickerConfig, TimepickerModule, TimepickerStore, ɵa */ /***/function node_modulesNgxBootstrapTimepickerFesm2015NgxBootstrapTimepickerJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TimepickerActions",function(){return TimepickerActions});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TimepickerComponent",function(){return TimepickerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TimepickerConfig",function(){return TimepickerConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TimepickerModule",function(){return TimepickerModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TimepickerStore",function(){return TimepickerStore});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275a",function(){return TIMEPICKER_CONTROL_VALUE_ACCESSOR});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_forms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ngx-bootstrap/mini-ngrx */"./node_modules/ngx-bootstrap/mini-ngrx/fesm2015/ngx-bootstrap-mini-ngrx.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TimepickerActions=/*#__PURE__*/function(){function TimepickerActions(){}var _proto57=TimepickerActions.prototype;/**
     * @param {?} value
     * @return {?}
     */_proto57.writeValue=function writeValue(value){return{type:TimepickerActions.WRITE_VALUE,payload:value}}/**
     * @param {?} event
     * @return {?}
     */;_proto57.changeHours=function changeHours(event){return{type:TimepickerActions.CHANGE_HOURS,payload:event}}/**
     * @param {?} event
     * @return {?}
     */;_proto57.changeMinutes=function changeMinutes(event){return{type:TimepickerActions.CHANGE_MINUTES,payload:event}}/**
     * @param {?} event
     * @return {?}
     */;_proto57.changeSeconds=function changeSeconds(event){return{type:TimepickerActions.CHANGE_SECONDS,payload:event}}/**
     * @param {?} value
     * @return {?}
     */;_proto57.setTime=function setTime(value){return{type:TimepickerActions.SET_TIME_UNIT,payload:value}}/**
     * @param {?} value
     * @return {?}
     */;_proto57.updateControls=function updateControls(value){return{type:TimepickerActions.UPDATE_CONTROLS,payload:value}};return TimepickerActions}();TimepickerActions.WRITE_VALUE="[timepicker] write value from ng model";TimepickerActions.CHANGE_HOURS="[timepicker] change hours";TimepickerActions.CHANGE_MINUTES="[timepicker] change minutes";TimepickerActions.CHANGE_SECONDS="[timepicker] change seconds";TimepickerActions.SET_TIME_UNIT="[timepicker] set time unit";TimepickerActions.UPDATE_CONTROLS="[timepicker] update controls";TimepickerActions.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var dex=10;/** @type {?} */var hoursPerDay=24;/** @type {?} */var hoursPerDayHalf=12;/** @type {?} */var minutesPerHour=60;/** @type {?} */var secondsPerMinute=60;/**
 * @param {?=} value
 * @return {?}
 */function isValidDate(value){if(!value){return false}if(value instanceof Date&&isNaN(value.getHours())){return false}if(typeof value==="string"){return isValidDate(new Date(value))}return true}/**
 * @param {?} controls
 * @param {?} newDate
 * @return {?}
 */function isValidLimit(controls,newDate){if(controls.min&&newDate<controls.min){return false}if(controls.max&&newDate>controls.max){return false}return true}/**
 * @param {?} value
 * @return {?}
 */function toNumber(value){if(typeof value==="number"){return value}return parseInt(value,dex)}/**
 * @param {?} value
 * @param {?=} isPM
 * @return {?}
 */function parseHours(value,isPM){if(isPM===void 0){isPM=false}/** @type {?} */var hour=toNumber(value);if(isNaN(hour)||hour<0||hour>(isPM?hoursPerDayHalf:hoursPerDay)){return NaN}return hour}/**
 * @param {?} value
 * @return {?}
 */function parseMinutes(value){/** @type {?} */var minute=toNumber(value);if(isNaN(minute)||minute<0||minute>minutesPerHour){return NaN}return minute}/**
 * @param {?} value
 * @return {?}
 */function parseSeconds(value){/** @type {?} */var seconds=toNumber(value);if(isNaN(seconds)||seconds<0||seconds>secondsPerMinute){return NaN}return seconds}/**
 * @param {?} value
 * @return {?}
 */function parseTime(value){if(typeof value==="string"){return new Date(value)}return value}/**
 * @param {?} value
 * @param {?} diff
 * @return {?}
 */function changeTime(value,diff){if(!value){return changeTime(createDate(new Date,0,0,0),diff)}/** @type {?} */var hour=value.getHours();/** @type {?} */var minutes=value.getMinutes();/** @type {?} */var seconds=value.getSeconds();if(diff.hour){hour=hour+toNumber(diff.hour)}if(diff.minute){minutes=minutes+toNumber(diff.minute)}if(diff.seconds){seconds=seconds+toNumber(diff.seconds)}return createDate(value,hour,minutes,seconds)}/**
 * @param {?} value
 * @param {?} opts
 * @return {?}
 */function setTime(value,opts){/** @type {?} */var hour=parseHours(opts.hour);/** @type {?} */var minute=parseMinutes(opts.minute);/** @type {?} */var seconds=parseSeconds(opts.seconds)||0;if(opts.isPM&&hour!==12){hour+=hoursPerDayHalf}if(!value){if(!isNaN(hour)&&!isNaN(minute)){return createDate(new Date,hour,minute,seconds)}return value}if(isNaN(hour)||isNaN(minute)){return value}return createDate(value,hour,minute,seconds)}/**
 * @param {?} value
 * @param {?} hours
 * @param {?} minutes
 * @param {?} seconds
 * @return {?}
 */function createDate(value,hours,minutes,seconds){/** @type {?} */var newValue=new Date(value.getFullYear(),value.getMonth(),value.getDate(),hours,minutes,seconds,value.getMilliseconds());// #3139 ensure date part remains unchanged
newValue.setFullYear(value.getFullYear());newValue.setMonth(value.getMonth());newValue.setDate(value.getDate());return newValue}/**
 * @param {?} value
 * @return {?}
 */function padNumber(value){/** @type {?} */var _value=value.toString();if(_value.length>1){return _value}return"0"+_value}/**
 * @param {?} hours
 * @param {?} isPM
 * @return {?}
 */function isHourInputValid(hours,isPM){return!isNaN(parseHours(hours,isPM))}/**
 * @param {?} minutes
 * @return {?}
 */function isMinuteInputValid(minutes){return!isNaN(parseMinutes(minutes))}/**
 * @param {?} seconds
 * @return {?}
 */function isSecondInputValid(seconds){return!isNaN(parseSeconds(seconds))}/**
 * @param {?} diff
 * @param {?} max
 * @param {?} min
 * @return {?}
 */function isInputLimitValid(diff,max,min){/** @type {?} */var newDate=setTime(new Date,diff);if(max&&newDate>max){return false}if(min&&newDate<min){return false}return true}/**
 * @param {?} hours
 * @param {?=} minutes
 * @param {?=} seconds
 * @param {?=} isPM
 * @return {?}
 */function isInputValid(hours,minutes,seconds,isPM){if(minutes===void 0){minutes="0"}if(seconds===void 0){seconds="0"}return isHourInputValid(hours,isPM)&&isMinuteInputValid(minutes)&&isSecondInputValid(seconds)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} state
 * @param {?=} event
 * @return {?}
 */function canChangeValue(state,event){if(state.readonlyInput||state.disabled){return false}if(event){if(event.source==="wheel"&&!state.mousewheel){return false}if(event.source==="key"&&!state.arrowkeys){return false}}return true}/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */function canChangeHours(event,controls){if(!event.step){return false}if(event.step>0&&!controls.canIncrementHours){return false}if(event.step<0&&!controls.canDecrementHours){return false}return true}/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */function canChangeMinutes(event,controls){if(!event.step){return false}if(event.step>0&&!controls.canIncrementMinutes){return false}if(event.step<0&&!controls.canDecrementMinutes){return false}return true}/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */function canChangeSeconds(event,controls){if(!event.step){return false}if(event.step>0&&!controls.canIncrementSeconds){return false}if(event.step<0&&!controls.canDecrementSeconds){return false}return true}/**
 * @param {?} state
 * @return {?}
 */function getControlsValue(state){var hourStep=state.hourStep,minuteStep=state.minuteStep,secondsStep=state.secondsStep,readonlyInput=state.readonlyInput,disabled=state.disabled,mousewheel=state.mousewheel,arrowkeys=state.arrowkeys,showSpinners=state.showSpinners,showMeridian=state.showMeridian,showSeconds=state.showSeconds,meridians=state.meridians,min=state.min,max=state.max;return{hourStep:hourStep,minuteStep:minuteStep,secondsStep:secondsStep,readonlyInput:readonlyInput,disabled:disabled,mousewheel:mousewheel,arrowkeys:arrowkeys,showSpinners:showSpinners,showMeridian:showMeridian,showSeconds:showSeconds,meridians:meridians,min:min,max:max}}/**
 * @param {?} value
 * @param {?} state
 * @return {?}
 */function timepickerControls(value,state){/** @type {?} */var hoursPerDayHalf=12;var min=state.min,max=state.max,hourStep=state.hourStep,minuteStep=state.minuteStep,secondsStep=state.secondsStep,showSeconds=state.showSeconds;/** @type {?} */var res={canIncrementHours:true,canIncrementMinutes:true,canIncrementSeconds:true,canDecrementHours:true,canDecrementMinutes:true,canDecrementSeconds:true,canToggleMeridian:true};if(!value){return res}// compare dates
if(max){/** @type {?} */var _newHour=changeTime(value,{hour:hourStep});res.canIncrementHours=max>_newHour;if(!res.canIncrementHours){/** @type {?} */var _newMinutes=changeTime(value,{minute:minuteStep});res.canIncrementMinutes=showSeconds?max>_newMinutes:max>=_newMinutes}if(!res.canIncrementMinutes){/** @type {?} */var _newSeconds=changeTime(value,{seconds:secondsStep});res.canIncrementSeconds=max>=_newSeconds}if(value.getHours()<hoursPerDayHalf){res.canToggleMeridian=changeTime(value,{hour:hoursPerDayHalf})<max}}if(min){/** @type {?} */var _newHour2=changeTime(value,{hour:-hourStep});res.canDecrementHours=min<_newHour2;if(!res.canDecrementHours){/** @type {?} */var _newMinutes2=changeTime(value,{minute:-minuteStep});res.canDecrementMinutes=showSeconds?min<_newMinutes2:min<=_newMinutes2}if(!res.canDecrementMinutes){/** @type {?} */var _newSeconds2=changeTime(value,{seconds:-secondsStep});res.canDecrementSeconds=min<=_newSeconds2}if(value.getHours()>=hoursPerDayHalf){res.canToggleMeridian=changeTime(value,{hour:-hoursPerDayHalf})>min}}return res}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Provides default configuration values for timepicker
 */var TimepickerConfig=function TimepickerConfig(){/**
         * hours change step
         */this.hourStep=1;/**
         * hours change step
         */this.minuteStep=5;/**
         * seconds changes step
         */this.secondsStep=10;/**
         * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
         */this.showMeridian=true;/**
         * meridian labels based on locale
         */this.meridians=["AM","PM"];/**
         * if true hours and minutes fields will be readonly
         */this.readonlyInput=false;/**
         * if true hours and minutes fields will be disabled
         */this.disabled=false;/**
         * if true scroll inside hours and minutes inputs will change time
         */this.mousewheel=true;/**
         * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
         */this.arrowkeys=true;/**
         * if true spinner arrows above and below the inputs will be shown
         */this.showSpinners=true;/**
         * show seconds in timepicker
         */this.showSeconds=false;/**
         * show minutes in timepicker
         */this.showMinutes=true;/**
         * placeholder for hours field in timepicker
         */this.hoursPlaceholder="HH";/**
         * placeholder for minutes field in timepicker
         */this.minutesPlaceholder="MM";/**
         * placeholder for seconds field in timepicker
         */this.secondsPlaceholder="SS";/**
         * hours aria label
         */this.ariaLabelHours="hours";/**
         * minutes aria label
         */this.ariaLabelMinutes="minutes";/**
         * seconds aria label
         */this.ariaLabelSeconds="seconds"};TimepickerConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var initialState={value:null,config:new TimepickerConfig,controls:{canIncrementHours:true,canIncrementMinutes:true,canIncrementSeconds:true,canDecrementHours:true,canDecrementMinutes:true,canDecrementSeconds:true,canToggleMeridian:true}};// tslint:disable-next-line:cyclomatic-complexity
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */function timepickerReducer(state,action){if(state===void 0){state=initialState}switch(action.type){case TimepickerActions.WRITE_VALUE:{return Object.assign({},state,{value:action.payload})}case TimepickerActions.CHANGE_HOURS:{if(!canChangeValue(state.config,action.payload)||!canChangeHours(action.payload,state.controls)){return state}/** @type {?} */var _newTime=changeTime(state.value,{hour:action.payload.step});if((state.config.max||state.config.min)&&!isValidLimit(state.config,_newTime)){return state}return Object.assign({},state,{value:_newTime})}case TimepickerActions.CHANGE_MINUTES:{if(!canChangeValue(state.config,action.payload)||!canChangeMinutes(action.payload,state.controls)){return state}/** @type {?} */var _newTime2=changeTime(state.value,{minute:action.payload.step});if((state.config.max||state.config.min)&&!isValidLimit(state.config,_newTime2)){return state}return Object.assign({},state,{value:_newTime2})}case TimepickerActions.CHANGE_SECONDS:{if(!canChangeValue(state.config,action.payload)||!canChangeSeconds(action.payload,state.controls)){return state}/** @type {?} */var _newTime3=changeTime(state.value,{seconds:action.payload.step});if((state.config.max||state.config.min)&&!isValidLimit(state.config,_newTime3)){return state}return Object.assign({},state,{value:_newTime3})}case TimepickerActions.SET_TIME_UNIT:{if(!canChangeValue(state.config)){return state}/** @type {?} */var _newTime4=setTime(state.value,action.payload);return Object.assign({},state,{value:_newTime4})}case TimepickerActions.UPDATE_CONTROLS:{/** @type {?} */var _newControlsState=timepickerControls(state.value,action.payload);/** @type {?} */var _newState={value:state.value,config:action.payload,controls:_newControlsState};if(state.config.showMeridian!==_newState.config.showMeridian){if(state.value){_newState.value=new Date(state.value)}}return Object.assign({},state,_newState)}default:return state;}}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TimepickerStore=/*#__PURE__*/function(_ngx_bootstrap_mini_n2){_inheritsLoose(TimepickerStore,_ngx_bootstrap_mini_n2);function TimepickerStore(){/** @type {?} */var _dispatcher=new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({type:"[mini-ngrx] dispatcher init"});/** @type {?} */var state=new ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__["MiniState"](initialState,_dispatcher,timepickerReducer);return _ngx_bootstrap_mini_n2.call(this,_dispatcher,timepickerReducer,state)||this}return TimepickerStore}(ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__["MiniStore"]);TimepickerStore.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/** @nocollapse */TimepickerStore.ctorParameters=function(){return[]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var TIMEPICKER_CONTROL_VALUE_ACCESSOR={provide:_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],/* tslint:disable-next-line: no-use-before-declare */useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return TimepickerComponent}),multi:true};var TimepickerComponent=/*#__PURE__*/function(){/**
     * @param {?} _config
     * @param {?} _cd
     * @param {?} _store
     * @param {?} _timepickerActions
     */function TimepickerComponent(_config,_cd,_store,_timepickerActions){var _this64=this;this._cd=_cd;this._store=_store;this._timepickerActions=_timepickerActions;/**
         * emits true if value is a valid date
         */this.isValid=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];// min\max validation for input fields
this.invalidHours=false;this.invalidMinutes=false;this.invalidSeconds=false;// control value accessor methods
// tslint:disable-next-line:no-any
this.onChange=Function.prototype;// tslint:disable-next-line:no-any
this.onTouched=Function.prototype;Object.assign(this,_config);this.timepickerSub=_store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.value}).subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){// update UI values if date changed
_this64._renderTime(value);_this64.onChange(value);_this64._store.dispatch(_this64._timepickerActions.updateControls(getControlsValue(_this64)))});_store.select(/**
         * @param {?} state
         * @return {?}
         */function(state){return state.controls}).subscribe(/**
         * @param {?} controlsState
         * @return {?}
         */function(controlsState){_this64.isValid.emit(isInputValid(_this64.hours,_this64.minutes,_this64.seconds,_this64.isPM()));Object.assign(_this64,controlsState);_cd.markForCheck()})}/**
     * @deprecated - please use `isEditable` instead
     * @return {?}
     */var _proto58=TimepickerComponent.prototype;/**
     * @return {?}
     */_proto58.resetValidation=function resetValidation(){this.invalidHours=false;this.invalidMinutes=false;this.invalidSeconds=false}/**
     * @return {?}
     */;_proto58.isPM=function isPM(){return this.showMeridian&&this.meridian===this.meridians[1]}/**
     * @param {?} $event
     * @return {?}
     */;_proto58.prevDef=function prevDef($event){$event.preventDefault()}/**
     * @param {?} $event
     * @return {?}
     */;_proto58.wheelSign=function wheelSign($event){return Math.sign($event.deltaY)*-1}/**
     * @param {?} changes
     * @return {?}
     */;_proto58.ngOnChanges=function ngOnChanges(changes){this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)))}/**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */;_proto58.changeHours=function changeHours(step,source){if(source===void 0){source=""}this.resetValidation();this._store.dispatch(this._timepickerActions.changeHours({step:step,source:source}))}/**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */;_proto58.changeMinutes=function changeMinutes(step,source){if(source===void 0){source=""}this.resetValidation();this._store.dispatch(this._timepickerActions.changeMinutes({step:step,source:source}))}/**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */;_proto58.changeSeconds=function changeSeconds(step,source){if(source===void 0){source=""}this.resetValidation();this._store.dispatch(this._timepickerActions.changeSeconds({step:step,source:source}))}/**
     * @param {?} hours
     * @return {?}
     */;_proto58.updateHours=function updateHours(hours){this.resetValidation();this.hours=hours;/** @type {?} */var isValid=isHourInputValid(this.hours,this.isPM())&&this.isValidLimit();if(!isValid){this.invalidHours=true;this.isValid.emit(false);this.onChange(null);return}this._updateTime()}/**
     * @param {?} minutes
     * @return {?}
     */;_proto58.updateMinutes=function updateMinutes(minutes){this.resetValidation();this.minutes=minutes;/** @type {?} */var isValid=isMinuteInputValid(this.minutes)&&this.isValidLimit();if(!isValid){this.invalidMinutes=true;this.isValid.emit(false);this.onChange(null);return}this._updateTime()}/**
     * @param {?} seconds
     * @return {?}
     */;_proto58.updateSeconds=function updateSeconds(seconds){this.resetValidation();this.seconds=seconds;/** @type {?} */var isValid=isSecondInputValid(this.seconds)&&this.isValidLimit();if(!isValid){this.invalidSeconds=true;this.isValid.emit(false);this.onChange(null);return}this._updateTime()}/**
     * @return {?}
     */;_proto58.isValidLimit=function isValidLimit(){return isInputLimitValid({hour:this.hours,minute:this.minutes,seconds:this.seconds,isPM:this.isPM()},this.max,this.min)}/**
     * @return {?}
     */;_proto58._updateTime=function _updateTime(){/** @type {?} */var _seconds=this.showSeconds?this.seconds:void 0;/** @type {?} */var _minutes=this.showMinutes?this.minutes:void 0;if(!isInputValid(this.hours,_minutes,_seconds,this.isPM())){this.isValid.emit(false);this.onChange(null);return}this._store.dispatch(this._timepickerActions.setTime({hour:this.hours,minute:this.minutes,seconds:this.seconds,isPM:this.isPM()}))}/**
     * @return {?}
     */;_proto58.toggleMeridian=function toggleMeridian(){if(!this.showMeridian||!this.isEditable){return}/** @type {?} */var _hoursPerDayHalf=12;this._store.dispatch(this._timepickerActions.changeHours({step:_hoursPerDayHalf,source:""}))}/**
     * Write a new value to the element.
     * @param {?} obj
     * @return {?}
     */;_proto58.writeValue=function writeValue(obj){if(isValidDate(obj)){this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)))}else if(obj==null){this._store.dispatch(this._timepickerActions.writeValue(null))}}/**
     * Set the function to be called when the control receives a change event.
     * @param {?} fn
     * @return {?}
     */ // tslint:disable-next-line:no-any
;_proto58.registerOnChange=function registerOnChange(fn){this.onChange=fn}/**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */;_proto58.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param {?} isDisabled
     * @return {?}
     */;_proto58.setDisabledState=function setDisabledState(isDisabled){this.disabled=isDisabled;this._cd.markForCheck()}/**
     * @return {?}
     */;_proto58.ngOnDestroy=function ngOnDestroy(){this.timepickerSub.unsubscribe()}/**
     * @private
     * @param {?} value
     * @return {?}
     */;_proto58._renderTime=function _renderTime(value){if(!isValidDate(value)){this.hours="";this.minutes="";this.seconds="";this.meridian=this.meridians[0];return}/** @type {?} */var _value=parseTime(value);/** @type {?} */var _hoursPerDayHalf=12;/** @type {?} */var _hours=_value.getHours();if(this.showMeridian){this.meridian=this.meridians[_hours>=_hoursPerDayHalf?1:0];_hours=_hours%_hoursPerDayHalf;// should be 12 PM, not 00 PM
if(_hours===0){_hours=_hoursPerDayHalf}}this.hours=padNumber(_hours);this.minutes=padNumber(_value.getMinutes());this.seconds=padNumber(_value.getUTCSeconds())};_createClass(TimepickerComponent,[{key:"isSpinnersVisible",get:function get(){return this.showSpinners&&!this.readonlyInput}/**
     * @return {?}
     */},{key:"isEditable",get:function get(){return!(this.readonlyInput||this.disabled)}}]);return TimepickerComponent}();TimepickerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"timepicker",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,providers:[TIMEPICKER_CONTROL_VALUE_ACCESSOR,TimepickerStore],template:"<table>\n  <tbody>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- increment hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\n         (click)=\"changeHours(hourStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- increment minutes button -->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(minuteStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- increment seconds button -->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-up\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  <tr>\n    <!-- hours -->\n    <td class=\"form-group\" [class.has-error]=\"invalidHours\">\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"hoursPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"hours\"\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\n             (change)=\"updateHours($event.target.value)\" [attr.aria-label]=\"labelHours\"></td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\n    <!-- minutes -->\n    <td class=\"form-group\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"minutesPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"minutes\"\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\n             (change)=\"updateMinutes($event.target.value)\" [attr.aria-label]=\"labelMinutes\">\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\n    <!-- seconds -->\n    <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"secondsPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"seconds\"\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\n             (change)=\"updateSeconds($event.target.value)\" [attr.aria-label]=\"labelSeconds\">\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian -->\n    <td *ngIf=\"showMeridian\">\n      <button type=\"button\" class=\"btn btn-default text-center\"\n              [disabled]=\"!isEditable || !canToggleMeridian\"\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\n              (click)=\"toggleMeridian()\"\n      >{{ meridian }}\n      </button>\n    </td>\n  </tr>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- decrement hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\n         (click)=\"changeHours(-hourStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- decrement minutes button-->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(-minuteStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- decrement seconds button-->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(-secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  </tbody>\n</table>\n",encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,styles:["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n      padding: .375rem .55rem;\n    }\n  "]}]}];/** @nocollapse */TimepickerComponent.ctorParameters=function(){return[{type:TimepickerConfig},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]},{type:TimepickerStore},{type:TimepickerActions}]};TimepickerComponent.propDecorators={hourStep:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],minuteStep:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],secondsStep:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],readonlyInput:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],mousewheel:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],arrowkeys:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],showSpinners:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],showMeridian:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],showMinutes:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],showSeconds:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],meridians:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],min:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],max:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],hoursPlaceholder:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],minutesPlaceholder:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],secondsPlaceholder:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isValid:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TimepickerModule=/*#__PURE__*/function(){function TimepickerModule(){}/**
     * @return {?}
     */TimepickerModule.forRoot=function forRoot(){return{ngModule:TimepickerModule,providers:[TimepickerConfig,TimepickerActions,TimepickerStore]}};return TimepickerModule}();TimepickerModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],declarations:[TimepickerComponent],exports:[TimepickerComponent]}]}];//# sourceMappingURL=ngx-bootstrap-timepicker.js.map
/***/},/***/"./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js":/*!******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js ***!
  \******************************************************************************/ /*! exports provided: TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule */ /***/function node_modulesNgxBootstrapTooltipFesm2015NgxBootstrapTooltipJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TooltipConfig",function(){return TooltipConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TooltipContainerComponent",function(){return TooltipContainerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TooltipDirective",function(){return TooltipDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TooltipModule",function(){return TooltipModule});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ngx-bootstrap/utils */"./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ngx-bootstrap/component-loader */"./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");/* harmony import */var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ngx-bootstrap/positioning */"./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Default values provider for tooltip
 */var TooltipConfig=function TooltipConfig(){/**
         * sets disable adaptive position
         */this.adaptivePosition=true;/**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */this.placement="top";/**
         * array of event names which triggers tooltip opening
         */this.triggers="hover focus";/**
         * delay before showing the tooltip
         */this.delay=0};TooltipConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TooltipContainerComponent=/*#__PURE__*/function(){/**
     * @param {?} config
     */function TooltipContainerComponent(config){Object.assign(this,config)}/**
     * @return {?}
     */var _proto59=TooltipContainerComponent.prototype;/**
     * @return {?}
     */_proto59.ngAfterViewInit=function ngAfterViewInit(){this.classMap={in:false,fade:false};this.classMap[this.placement]=true;this.classMap["tooltip-"+this.placement]=true;this.classMap.in=true;if(this.animation){this.classMap.fade=true}if(this.containerClass){this.classMap[this.containerClass]=true}};_createClass(TooltipContainerComponent,[{key:"isBs3",get:function get(){return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()}}]);return TooltipContainerComponent}();TooltipContainerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"bs-tooltip-container",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,// tslint:disable-next-line
host:{"[class]":"\"tooltip in tooltip-\" + placement + \" \" + \"bs-tooltip-\" + placement + \" \" + placement + \" \" + containerClass","[class.show]":"!isBs3","[class.bs3]":"isBs3","[attr.id]":"this.id",role:"tooltip"},template:"\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    ",styles:["\n    :host.tooltip {\n      display: block;\n      pointer-events: none;\n    }\n    :host.bs3.tooltip.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.tooltip.bottom {\n      margin-top: 0px;\n    }\n    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{\n      margin: 0px;\n    }\n    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {\n      margin: .3rem 0;\n    }\n  "]}]}];/** @nocollapse */TooltipContainerComponent.ctorParameters=function(){return[{type:TooltipConfig}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var id=0;var TooltipDirective=/*#__PURE__*/function(){/**
     * @param {?} _viewContainerRef
     * @param {?} cis
     * @param {?} config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _positionService
     */function TooltipDirective(_viewContainerRef,cis,config,_elementRef,_renderer,_positionService){this._elementRef=_elementRef;this._renderer=_renderer;this._positionService=_positionService;this.tooltipId=id++;/**
         * Fired when tooltip content changes
         */ /* tslint:disable-next-line:no-any */this.tooltipChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * Css class for tooltip container
         */this.containerClass="";/**
         * @deprecated - removed, will be added to configuration
         */this.tooltipAnimation=true;/**
         * @deprecated
         */this.tooltipFadeDuration=150;/**
         * @deprecated
         */this.tooltipStateChanged=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this._tooltip=cis.createLoader(this._elementRef,_viewContainerRef,this._renderer).provide({provide:TooltipConfig,useValue:config});Object.assign(this,config);this.onShown=this._tooltip.onShown;this.onHidden=this._tooltip.onHidden}/**
     * Returns whether or not the tooltip is currently being shown
     * @return {?}
     */var _proto60=TooltipDirective.prototype;/**
     * @return {?}
     */_proto60.ngOnInit=function ngOnInit(){var _this65=this;this._tooltip.listen({triggers:this.triggers,show:/**
             * @return {?}
             */function show(){return _this65.show()}});/* tslint:disable-next-line:no-any */this.tooltipChange.subscribe(/**
         * @param {?} value
         * @return {?}
         */function(value){if(!value){_this65._tooltip.hide()}});this.onShown.subscribe(/**
         * @return {?}
         */function(){_this65.setAriaDescribedBy()});this.onHidden.subscribe(/**
         * @return {?}
         */function(){_this65.setAriaDescribedBy()})}/**
     * @return {?}
     */;_proto60.setAriaDescribedBy=function setAriaDescribedBy(){this._ariaDescribedby=this.isOpen?"tooltip-"+this.tooltipId:null;if(this._ariaDescribedby){this._renderer.setAttribute(this._elementRef.nativeElement,"aria-describedby",this._ariaDescribedby)}else{this._renderer.removeAttribute(this._elementRef.nativeElement,"aria-describedby")}}/**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */;_proto60.toggle=function toggle(){if(this.isOpen){return this.hide()}this.show()}/**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */;_proto60.show=function show(){var _this66=this;this._positionService.setOptions({modifiers:{flip:{enabled:this.adaptivePosition},preventOverflow:{enabled:this.adaptivePosition}}});if(this.isOpen||this.isDisabled||this._delayTimeoutId||!this.tooltip){return}/** @type {?} */var showTooltip=/**
         * @return {?}
         */function showTooltip(){if(_this66._delayTimeoutId){_this66._delayTimeoutId=undefined}_this66._tooltip.attach(TooltipContainerComponent).to(_this66.container).position({attachment:_this66.placement}).show({content:_this66.tooltip,placement:_this66.placement,containerClass:_this66.containerClass,id:"tooltip-"+_this66.tooltipId})};/** @type {?} */var cancelDelayedTooltipShowing=/**
         * @return {?}
         */function cancelDelayedTooltipShowing(){if(_this66._tooltipCancelShowFn){_this66._tooltipCancelShowFn()}};if(this.delay){/** @type {?} */var _timer=Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(this.delay).subscribe(/**
             * @return {?}
             */function(){showTooltip();cancelDelayedTooltipShowing()});if(this.triggers){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["parseTriggers"])(this.triggers).forEach(/**
                 * @param {?} trigger
                 * @return {?}
                 */function(trigger){_this66._tooltipCancelShowFn=_this66._renderer.listen(_this66._elementRef.nativeElement,trigger.close,/**
                     * @return {?}
                     */function(){_timer.unsubscribe();cancelDelayedTooltipShowing()})})}}else{showTooltip()}}/**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */;_proto60.hide=function hide(){var _this67=this;if(this._delayTimeoutId){clearTimeout(this._delayTimeoutId);this._delayTimeoutId=undefined}if(!this._tooltip.isShown){return}this._tooltip.instance.classMap.in=false;setTimeout(/**
         * @return {?}
         */function(){_this67._tooltip.hide()},this.tooltipFadeDuration)}/**
     * @return {?}
     */;_proto60.ngOnDestroy=function ngOnDestroy(){this._tooltip.dispose();this.tooltipChange.unsubscribe();this.onShown.unsubscribe();this.onHidden.unsubscribe()};_createClass(TooltipDirective,[{key:"isOpen",get:function get(){return this._tooltip.isShown}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){if(value){this.show()}else{this.hide()}}/**
     * @deprecated - please use `tooltip` instead
     * @param {?} value
     * @return {?}
     */},{key:"htmlContent",set:function set(value){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])("tooltipHtml was deprecated, please use `tooltip` instead");this.tooltip=value}/**
     * @deprecated - please use `placement` instead
     * @param {?} value
     * @return {?}
     */},{key:"_placement",set:function set(value){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])("tooltipPlacement was deprecated, please use `placement` instead");this.placement=value}/**
     * @deprecated - please use `isOpen` instead
     * @param {?} value
     * @return {?}
     */},{key:"_isOpen",set:function set(value){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])("tooltipIsOpen was deprecated, please use `isOpen` instead");this.isOpen=value}/**
     * @return {?}
     */,get:function get(){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])("tooltipIsOpen was deprecated, please use `isOpen` instead");return this.isOpen}/**
     * @deprecated - please use `isDisabled` instead
     * @param {?} value
     * @return {?}
     */},{key:"_enable",set:function set(value){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])("tooltipEnable was deprecated, please use `isDisabled` instead");this.isDisabled=!value}/**
     * @return {?}
     */,get:function get(){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])("tooltipEnable was deprecated, please use `isDisabled` instead");return this.isDisabled}/**
     * @deprecated - please use `container="body"` instead
     * @param {?} value
     * @return {?}
     */},{key:"_appendToBody",set:function set(value){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])("tooltipAppendToBody was deprecated, please use `container=\"body\"` instead");this.container=value?"body":this.container}/**
     * @return {?}
     */,get:function get(){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])("tooltipAppendToBody was deprecated, please use `container=\"body\"` instead");return this.container==="body"}/**
     * @deprecated - will replaced with customClass
     * @param {?} value
     * @return {?}
     */},{key:"_popupClass",set:function set(value){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])("tooltipClass deprecated")}/**
     * @deprecated - removed
     * @param {?} value
     * @return {?}
     */},{key:"_tooltipContext",set:function set(value){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])("tooltipContext deprecated")}/**
     * @deprecated
     * @param {?} value
     * @return {?}
     */},{key:"_tooltipPopupDelay",set:function set(value){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])("tooltipPopupDelay is deprecated, use `delay` instead");this.delay=value}/**
     * @deprecated -  please use `triggers` instead
     * @return {?}
     */},{key:"_tooltipTrigger",get:function get(){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])("tooltipTrigger was deprecated, please use `triggers` instead");return this.triggers}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])("tooltipTrigger was deprecated, please use `triggers` instead");this.triggers=(value||"").toString()}}]);return TooltipDirective}();TooltipDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[tooltip], [tooltipHtml]",exportAs:"bs-tooltip"}]}];/** @nocollapse */TooltipDirective.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]},{type:ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]},{type:TooltipConfig},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]}]};TooltipDirective.propDecorators={adaptivePosition:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],tooltip:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],tooltipChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],placement:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],triggers:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],container:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],containerClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isOpen:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],delay:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onShown:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],onHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],htmlContent:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["tooltipHtml"]}],_placement:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["tooltipPlacement"]}],_isOpen:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["tooltipIsOpen"]}],_enable:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["tooltipEnable"]}],_appendToBody:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["tooltipAppendToBody"]}],tooltipAnimation:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],_popupClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["tooltipClass"]}],_tooltipContext:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["tooltipContext"]}],_tooltipPopupDelay:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["tooltipPopupDelay"]}],tooltipFadeDuration:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],_tooltipTrigger:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["tooltipTrigger"]}],tooltipStateChanged:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["OnChange"])(),Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type",Object)],TooltipDirective.prototype,"tooltip",void 0);/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TooltipModule=/*#__PURE__*/function(){function TooltipModule(){}/**
     * @return {?}
     */TooltipModule.forRoot=function forRoot(){return{ngModule:TooltipModule,providers:[TooltipConfig,ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"],ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]]}};return TooltipModule}();TooltipModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],declarations:[TooltipDirective,TooltipContainerComponent],exports:[TooltipDirective],entryComponents:[TooltipContainerComponent]}]}];//# sourceMappingURL=ngx-bootstrap-tooltip.js.map
/***/},/***/"./node_modules/ngx-bootstrap/typeahead/fesm2015/ngx-bootstrap-typeahead.js":/*!**********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/typeahead/fesm2015/ngx-bootstrap-typeahead.js ***!
  \**********************************************************************************/ /*! exports provided: TypeaheadConfig, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadMatch, TypeaheadModule, TypeaheadOptions, escapeRegexp, getValueFromObject, latinMap, latinize, tokenize, ɵa */ /***/function node_modulesNgxBootstrapTypeaheadFesm2015NgxBootstrapTypeaheadJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TypeaheadConfig",function(){return TypeaheadConfig});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TypeaheadContainerComponent",function(){return TypeaheadContainerComponent});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TypeaheadDirective",function(){return TypeaheadDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TypeaheadMatch",function(){return TypeaheadMatch});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TypeaheadModule",function(){return TypeaheadModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TypeaheadOptions",function(){return TypeaheadOptions});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"escapeRegexp",function(){return escapeRegexp});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getValueFromObject",function(){return getValueFromObject});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"latinMap",function(){return latinMap});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"latinize",function(){return latinize});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"tokenize",function(){return tokenize});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275a",function(){return typeaheadAnimation});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ngx-bootstrap/utils */"./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");/* harmony import */var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ngx-bootstrap/positioning */"./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");/* harmony import */var _angular_animations__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");/* harmony import */var _angular_forms__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ngx-bootstrap/component-loader */"./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");/* harmony import */var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /* tslint:disable */ /** @type {?} */var latinMap={"\xC1":"A","\u0102":"A","\u1EAE":"A","\u1EB6":"A","\u1EB0":"A","\u1EB2":"A","\u1EB4":"A","\u01CD":"A","\xC2":"A","\u1EA4":"A","\u1EAC":"A","\u1EA6":"A","\u1EA8":"A","\u1EAA":"A","\xC4":"A","\u01DE":"A","\u0226":"A","\u01E0":"A","\u1EA0":"A","\u0200":"A","\xC0":"A","\u1EA2":"A","\u0202":"A","\u0100":"A","\u0104":"A","\xC5":"A","\u01FA":"A","\u1E00":"A","\u023A":"A","\xC3":"A","\uA732":"AA","\xC6":"AE","\u01FC":"AE","\u01E2":"AE","\uA734":"AO","\uA736":"AU","\uA738":"AV","\uA73A":"AV","\uA73C":"AY","\u1E02":"B","\u1E04":"B","\u0181":"B","\u1E06":"B","\u0243":"B","\u0182":"B","\u0106":"C","\u010C":"C","\xC7":"C","\u1E08":"C","\u0108":"C","\u010A":"C","\u0187":"C","\u023B":"C","\u010E":"D","\u1E10":"D","\u1E12":"D","\u1E0A":"D","\u1E0C":"D","\u018A":"D","\u1E0E":"D","\u01F2":"D","\u01C5":"D","\u0110":"D","\u018B":"D","\u01F1":"DZ","\u01C4":"DZ","\xC9":"E","\u0114":"E","\u011A":"E","\u0228":"E","\u1E1C":"E","\xCA":"E","\u1EBE":"E","\u1EC6":"E","\u1EC0":"E","\u1EC2":"E","\u1EC4":"E","\u1E18":"E","\xCB":"E","\u0116":"E","\u1EB8":"E","\u0204":"E","\xC8":"E","\u1EBA":"E","\u0206":"E","\u0112":"E","\u1E16":"E","\u1E14":"E","\u0118":"E","\u0246":"E","\u1EBC":"E","\u1E1A":"E","\uA76A":"ET","\u1E1E":"F","\u0191":"F","\u01F4":"G","\u011E":"G","\u01E6":"G","\u0122":"G","\u011C":"G","\u0120":"G","\u0193":"G","\u1E20":"G","\u01E4":"G","\u1E2A":"H","\u021E":"H","\u1E28":"H","\u0124":"H","\u2C67":"H","\u1E26":"H","\u1E22":"H","\u1E24":"H","\u0126":"H","\xCD":"I","\u012C":"I","\u01CF":"I","\xCE":"I","\xCF":"I","\u1E2E":"I","\u0130":"I","\u1ECA":"I","\u0208":"I","\xCC":"I","\u1EC8":"I","\u020A":"I","\u012A":"I","\u012E":"I","\u0197":"I","\u0128":"I","\u1E2C":"I","\uA779":"D","\uA77B":"F","\uA77D":"G","\uA782":"R","\uA784":"S","\uA786":"T","\uA76C":"IS","\u0134":"J","\u0248":"J","\u1E30":"K","\u01E8":"K","\u0136":"K","\u2C69":"K","\uA742":"K","\u1E32":"K","\u0198":"K","\u1E34":"K","\uA740":"K","\uA744":"K","\u0139":"L","\u023D":"L","\u013D":"L","\u013B":"L","\u1E3C":"L","\u1E36":"L","\u1E38":"L","\u2C60":"L","\uA748":"L","\u1E3A":"L","\u013F":"L","\u2C62":"L","\u01C8":"L","\u0141":"L","\u01C7":"LJ","\u1E3E":"M","\u1E40":"M","\u1E42":"M","\u2C6E":"M","\u0143":"N","\u0147":"N","\u0145":"N","\u1E4A":"N","\u1E44":"N","\u1E46":"N","\u01F8":"N","\u019D":"N","\u1E48":"N","\u0220":"N","\u01CB":"N","\xD1":"N","\u01CA":"NJ","\xD3":"O","\u014E":"O","\u01D1":"O","\xD4":"O","\u1ED0":"O","\u1ED8":"O","\u1ED2":"O","\u1ED4":"O","\u1ED6":"O","\xD6":"O","\u022A":"O","\u022E":"O","\u0230":"O","\u1ECC":"O","\u0150":"O","\u020C":"O","\xD2":"O","\u1ECE":"O","\u01A0":"O","\u1EDA":"O","\u1EE2":"O","\u1EDC":"O","\u1EDE":"O","\u1EE0":"O","\u020E":"O","\uA74A":"O","\uA74C":"O","\u014C":"O","\u1E52":"O","\u1E50":"O","\u019F":"O","\u01EA":"O","\u01EC":"O","\xD8":"O","\u01FE":"O","\xD5":"O","\u1E4C":"O","\u1E4E":"O","\u022C":"O","\u01A2":"OI","\uA74E":"OO","\u0190":"E","\u0186":"O","\u0222":"OU","\u1E54":"P","\u1E56":"P","\uA752":"P","\u01A4":"P","\uA754":"P","\u2C63":"P","\uA750":"P","\uA758":"Q","\uA756":"Q","\u0154":"R","\u0158":"R","\u0156":"R","\u1E58":"R","\u1E5A":"R","\u1E5C":"R","\u0210":"R","\u0212":"R","\u1E5E":"R","\u024C":"R","\u2C64":"R","\uA73E":"C","\u018E":"E","\u015A":"S","\u1E64":"S","\u0160":"S","\u1E66":"S","\u015E":"S","\u015C":"S","\u0218":"S","\u1E60":"S","\u1E62":"S","\u1E68":"S","\u0164":"T","\u0162":"T","\u1E70":"T","\u021A":"T","\u023E":"T","\u1E6A":"T","\u1E6C":"T","\u01AC":"T","\u1E6E":"T","\u01AE":"T","\u0166":"T","\u2C6F":"A","\uA780":"L","\u019C":"M","\u0245":"V","\uA728":"TZ","\xDA":"U","\u016C":"U","\u01D3":"U","\xDB":"U","\u1E76":"U","\xDC":"U","\u01D7":"U","\u01D9":"U","\u01DB":"U","\u01D5":"U","\u1E72":"U","\u1EE4":"U","\u0170":"U","\u0214":"U","\xD9":"U","\u1EE6":"U","\u01AF":"U","\u1EE8":"U","\u1EF0":"U","\u1EEA":"U","\u1EEC":"U","\u1EEE":"U","\u0216":"U","\u016A":"U","\u1E7A":"U","\u0172":"U","\u016E":"U","\u0168":"U","\u1E78":"U","\u1E74":"U","\uA75E":"V","\u1E7E":"V","\u01B2":"V","\u1E7C":"V","\uA760":"VY","\u1E82":"W","\u0174":"W","\u1E84":"W","\u1E86":"W","\u1E88":"W","\u1E80":"W","\u2C72":"W","\u1E8C":"X","\u1E8A":"X","\xDD":"Y","\u0176":"Y","\u0178":"Y","\u1E8E":"Y","\u1EF4":"Y","\u1EF2":"Y","\u01B3":"Y","\u1EF6":"Y","\u1EFE":"Y","\u0232":"Y","\u024E":"Y","\u1EF8":"Y","\u0179":"Z","\u017D":"Z","\u1E90":"Z","\u2C6B":"Z","\u017B":"Z","\u1E92":"Z","\u0224":"Z","\u1E94":"Z","\u01B5":"Z","\u0132":"IJ","\u0152":"OE","\u1D00":"A","\u1D01":"AE","\u0299":"B","\u1D03":"B","\u1D04":"C","\u1D05":"D","\u1D07":"E","\uA730":"F","\u0262":"G","\u029B":"G","\u029C":"H","\u026A":"I","\u0281":"R","\u1D0A":"J","\u1D0B":"K","\u029F":"L","\u1D0C":"L","\u1D0D":"M","\u0274":"N","\u1D0F":"O","\u0276":"OE","\u1D10":"O","\u1D15":"OU","\u1D18":"P","\u0280":"R","\u1D0E":"N","\u1D19":"R","\uA731":"S","\u1D1B":"T","\u2C7B":"E","\u1D1A":"R","\u1D1C":"U","\u1D20":"V","\u1D21":"W","\u028F":"Y","\u1D22":"Z","\xE1":"a","\u0103":"a","\u1EAF":"a","\u1EB7":"a","\u1EB1":"a","\u1EB3":"a","\u1EB5":"a","\u01CE":"a","\xE2":"a","\u1EA5":"a","\u1EAD":"a","\u1EA7":"a","\u1EA9":"a","\u1EAB":"a","\xE4":"a","\u01DF":"a","\u0227":"a","\u01E1":"a","\u1EA1":"a","\u0201":"a","\xE0":"a","\u1EA3":"a","\u0203":"a","\u0101":"a","\u0105":"a","\u1D8F":"a","\u1E9A":"a","\xE5":"a","\u01FB":"a","\u1E01":"a","\u2C65":"a","\xE3":"a","\uA733":"aa","\xE6":"ae","\u01FD":"ae","\u01E3":"ae","\uA735":"ao","\uA737":"au","\uA739":"av","\uA73B":"av","\uA73D":"ay","\u1E03":"b","\u1E05":"b","\u0253":"b","\u1E07":"b","\u1D6C":"b","\u1D80":"b","\u0180":"b","\u0183":"b","\u0275":"o","\u0107":"c","\u010D":"c","\xE7":"c","\u1E09":"c","\u0109":"c","\u0255":"c","\u010B":"c","\u0188":"c","\u023C":"c","\u010F":"d","\u1E11":"d","\u1E13":"d","\u0221":"d","\u1E0B":"d","\u1E0D":"d","\u0257":"d","\u1D91":"d","\u1E0F":"d","\u1D6D":"d","\u1D81":"d","\u0111":"d","\u0256":"d","\u018C":"d","\u0131":"i","\u0237":"j","\u025F":"j","\u0284":"j","\u01F3":"dz","\u01C6":"dz","\xE9":"e","\u0115":"e","\u011B":"e","\u0229":"e","\u1E1D":"e","\xEA":"e","\u1EBF":"e","\u1EC7":"e","\u1EC1":"e","\u1EC3":"e","\u1EC5":"e","\u1E19":"e","\xEB":"e","\u0117":"e","\u1EB9":"e","\u0205":"e","\xE8":"e","\u1EBB":"e","\u0207":"e","\u0113":"e","\u1E17":"e","\u1E15":"e","\u2C78":"e","\u0119":"e","\u1D92":"e","\u0247":"e","\u1EBD":"e","\u1E1B":"e","\uA76B":"et","\u1E1F":"f","\u0192":"f","\u1D6E":"f","\u1D82":"f","\u01F5":"g","\u011F":"g","\u01E7":"g","\u0123":"g","\u011D":"g","\u0121":"g","\u0260":"g","\u1E21":"g","\u1D83":"g","\u01E5":"g","\u1E2B":"h","\u021F":"h","\u1E29":"h","\u0125":"h","\u2C68":"h","\u1E27":"h","\u1E23":"h","\u1E25":"h","\u0266":"h","\u1E96":"h","\u0127":"h","\u0195":"hv","\xED":"i","\u012D":"i","\u01D0":"i","\xEE":"i","\xEF":"i","\u1E2F":"i","\u1ECB":"i","\u0209":"i","\xEC":"i","\u1EC9":"i","\u020B":"i","\u012B":"i","\u012F":"i","\u1D96":"i","\u0268":"i","\u0129":"i","\u1E2D":"i","\uA77A":"d","\uA77C":"f","\u1D79":"g","\uA783":"r","\uA785":"s","\uA787":"t","\uA76D":"is","\u01F0":"j","\u0135":"j","\u029D":"j","\u0249":"j","\u1E31":"k","\u01E9":"k","\u0137":"k","\u2C6A":"k","\uA743":"k","\u1E33":"k","\u0199":"k","\u1E35":"k","\u1D84":"k","\uA741":"k","\uA745":"k","\u013A":"l","\u019A":"l","\u026C":"l","\u013E":"l","\u013C":"l","\u1E3D":"l","\u0234":"l","\u1E37":"l","\u1E39":"l","\u2C61":"l","\uA749":"l","\u1E3B":"l","\u0140":"l","\u026B":"l","\u1D85":"l","\u026D":"l","\u0142":"l","\u01C9":"lj","\u017F":"s","\u1E9C":"s","\u1E9B":"s","\u1E9D":"s","\u1E3F":"m","\u1E41":"m","\u1E43":"m","\u0271":"m","\u1D6F":"m","\u1D86":"m","\u0144":"n","\u0148":"n","\u0146":"n","\u1E4B":"n","\u0235":"n","\u1E45":"n","\u1E47":"n","\u01F9":"n","\u0272":"n","\u1E49":"n","\u019E":"n","\u1D70":"n","\u1D87":"n","\u0273":"n","\xF1":"n","\u01CC":"nj","\xF3":"o","\u014F":"o","\u01D2":"o","\xF4":"o","\u1ED1":"o","\u1ED9":"o","\u1ED3":"o","\u1ED5":"o","\u1ED7":"o","\xF6":"o","\u022B":"o","\u022F":"o","\u0231":"o","\u1ECD":"o","\u0151":"o","\u020D":"o","\xF2":"o","\u1ECF":"o","\u01A1":"o","\u1EDB":"o","\u1EE3":"o","\u1EDD":"o","\u1EDF":"o","\u1EE1":"o","\u020F":"o","\uA74B":"o","\uA74D":"o","\u2C7A":"o","\u014D":"o","\u1E53":"o","\u1E51":"o","\u01EB":"o","\u01ED":"o","\xF8":"o","\u01FF":"o","\xF5":"o","\u1E4D":"o","\u1E4F":"o","\u022D":"o","\u01A3":"oi","\uA74F":"oo","\u025B":"e","\u1D93":"e","\u0254":"o","\u1D97":"o","\u0223":"ou","\u1E55":"p","\u1E57":"p","\uA753":"p","\u01A5":"p","\u1D71":"p","\u1D88":"p","\uA755":"p","\u1D7D":"p","\uA751":"p","\uA759":"q","\u02A0":"q","\u024B":"q","\uA757":"q","\u0155":"r","\u0159":"r","\u0157":"r","\u1E59":"r","\u1E5B":"r","\u1E5D":"r","\u0211":"r","\u027E":"r","\u1D73":"r","\u0213":"r","\u1E5F":"r","\u027C":"r","\u1D72":"r","\u1D89":"r","\u024D":"r","\u027D":"r","\u2184":"c","\uA73F":"c","\u0258":"e","\u027F":"r","\u015B":"s","\u1E65":"s","\u0161":"s","\u1E67":"s","\u015F":"s","\u015D":"s","\u0219":"s","\u1E61":"s","\u1E63":"s","\u1E69":"s","\u0282":"s","\u1D74":"s","\u1D8A":"s","\u023F":"s","\u0261":"g","\u1D11":"o","\u1D13":"o","\u1D1D":"u","\u0165":"t","\u0163":"t","\u1E71":"t","\u021B":"t","\u0236":"t","\u1E97":"t","\u2C66":"t","\u1E6B":"t","\u1E6D":"t","\u01AD":"t","\u1E6F":"t","\u1D75":"t","\u01AB":"t","\u0288":"t","\u0167":"t","\u1D7A":"th","\u0250":"a","\u1D02":"ae","\u01DD":"e","\u1D77":"g","\u0265":"h","\u02AE":"h","\u02AF":"h","\u1D09":"i","\u029E":"k","\uA781":"l","\u026F":"m","\u0270":"m","\u1D14":"oe","\u0279":"r","\u027B":"r","\u027A":"r","\u2C79":"r","\u0287":"t","\u028C":"v","\u028D":"w","\u028E":"y","\uA729":"tz","\xFA":"u","\u016D":"u","\u01D4":"u","\xFB":"u","\u1E77":"u","\xFC":"u","\u01D8":"u","\u01DA":"u","\u01DC":"u","\u01D6":"u","\u1E73":"u","\u1EE5":"u","\u0171":"u","\u0215":"u","\xF9":"u","\u1EE7":"u","\u01B0":"u","\u1EE9":"u","\u1EF1":"u","\u1EEB":"u","\u1EED":"u","\u1EEF":"u","\u0217":"u","\u016B":"u","\u1E7B":"u","\u0173":"u","\u1D99":"u","\u016F":"u","\u0169":"u","\u1E79":"u","\u1E75":"u","\u1D6B":"ue","\uA778":"um","\u2C74":"v","\uA75F":"v","\u1E7F":"v","\u028B":"v","\u1D8C":"v","\u2C71":"v","\u1E7D":"v","\uA761":"vy","\u1E83":"w","\u0175":"w","\u1E85":"w","\u1E87":"w","\u1E89":"w","\u1E81":"w","\u2C73":"w","\u1E98":"w","\u1E8D":"x","\u1E8B":"x","\u1D8D":"x","\xFD":"y","\u0177":"y","\xFF":"y","\u1E8F":"y","\u1EF5":"y","\u1EF3":"y","\u01B4":"y","\u1EF7":"y","\u1EFF":"y","\u0233":"y","\u1E99":"y","\u024F":"y","\u1EF9":"y","\u017A":"z","\u017E":"z","\u1E91":"z","\u0291":"z","\u2C6C":"z","\u017C":"z","\u1E93":"z","\u0225":"z","\u1E95":"z","\u1D76":"z","\u1D8E":"z","\u0290":"z","\u01B6":"z","\u0240":"z","\uFB00":"ff","\uFB03":"ffi","\uFB04":"ffl","\uFB01":"fi","\uFB02":"fl","\u0133":"ij","\u0153":"oe","\uFB06":"st","\u2090":"a","\u2091":"e","\u1D62":"i","\u2C7C":"j","\u2092":"o","\u1D63":"r","\u1D64":"u","\u1D65":"v","\u2093":"x"};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TypeaheadOptions=/**
     * @param {?} options
     */function TypeaheadOptions(options){Object.assign(this,options)};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TypeaheadMatch=/*#__PURE__*/function(){// tslint:disable-next-line:no-any
/**
     * @param {?} item
     * @param {?=} value
     * @param {?=} header
     */function TypeaheadMatch(item,value,header){if(value===void 0){value=item}if(header===void 0){header=false}this.item=item;this.value=value;this.header=header}/**
     * @return {?}
     */var _proto61=TypeaheadMatch.prototype;_proto61.isHeader=function isHeader(){return this.header}/**
     * @return {?}
     */;_proto61.toString=function toString(){return this.value};return TypeaheadMatch}();/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} str
 * @return {?}
 */function latinize(str){if(!str){return""}return str.replace(/[^A-Za-z0-9\[\] ]/g,/**
     * @param {?} a
     * @return {?}
     */function(a){return latinMap[a]||a})}/**
 * @param {?} queryToEscape
 * @return {?}
 */function escapeRegexp(queryToEscape){// Regex: capture the whole query string and replace it with the string
// that will be used to match the results, for example if the capture is
// 'a' the result will be \a
return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}/* tslint:disable */ /**
 * @param {?} str
 * @param {?=} wordRegexDelimiters
 * @param {?=} phraseRegexDelimiters
 * @return {?}
 */function tokenize(str,wordRegexDelimiters,phraseRegexDelimiters){if(wordRegexDelimiters===void 0){wordRegexDelimiters=" "}if(phraseRegexDelimiters===void 0){phraseRegexDelimiters=""}/* tslint:enable */ /** @type {?} */var regexStr="(?:["+phraseRegexDelimiters+"])([^"+phraseRegexDelimiters+"]+)"+("(?:["+phraseRegexDelimiters+"])|([^"+wordRegexDelimiters+"]+)");/** @type {?} */var preTokenized=str.split(new RegExp(regexStr,"g"));/** @type {?} */var result=[];/** @type {?} */var preTokenizedLength=preTokenized.length;/** @type {?} */var token;/** @type {?} */var replacePhraseDelimiters=new RegExp("["+phraseRegexDelimiters+"]+","g");for(var i=0;i<preTokenizedLength;i+=1){token=preTokenized[i];if(token&&token.length&&token!==wordRegexDelimiters){result.push(token.replace(replacePhraseDelimiters,""))}}return result}// tslint:disable-next-line:no-any
/**
 * @param {?} object
 * @param {?} option
 * @return {?}
 */function getValueFromObject(object,option){if(!option||typeof object!=="object"){return object.toString()}if(option.endsWith("()")){/** @type {?} */var functionName=option.slice(0,option.length-2);return object[functionName]().toString()}/** @type {?} */var properties=option.replace(/\[(\w+)\]/g,".$1").replace(/^\./,"");/** @type {?} */var propertiesArray=properties.split(".");for(var _iterator8=_createForOfIteratorHelperLoose(propertiesArray),_step9;!(_step9=_iterator8()).done;){var property=_step9.value;if(property in object){// tslint:disable-next-line
object=object[property]}}if(!object){return""}return object.toString()}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var TYPEAHEAD_ANIMATION_TIMING="220ms cubic-bezier(0, 0, 0.2, 1)";/** @type {?} */var typeaheadAnimation=Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])("typeaheadAnimation",[Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])("animated-down",Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({height:"*",overflow:"hidden"})),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("* => animated-down",[Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({height:0,overflow:"hidden"}),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(TYPEAHEAD_ANIMATION_TIMING)]),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])("animated-up",Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({height:"*",overflow:"hidden"})),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("* => animated-up",[Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({height:"*",overflow:"hidden"}),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(TYPEAHEAD_ANIMATION_TIMING)]),Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("* => unanimated",Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("0s"))]);/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TypeaheadContainerComponent=/*#__PURE__*/function(){/**
     * @param {?} positionService
     * @param {?} renderer
     * @param {?} element
     * @param {?} changeDetectorRef
     */function TypeaheadContainerComponent(positionService,renderer,element,changeDetectorRef){var _this68=this;this.positionService=positionService;this.renderer=renderer;this.element=element;this.changeDetectorRef=changeDetectorRef;this.isFocused=false;this.height=0;this._matches=[];this.isScrolledIntoView=/**
         * @param {?} elem
         * @return {?}
         */function(elem){/** @type {?} */var containerViewTop=this.ulElement.nativeElement.scrollTop;/** @type {?} */var containerViewBottom=containerViewTop+Number(this.ulElement.nativeElement.offsetHeight);/** @type {?} */var elemTop=elem.offsetTop;/** @type {?} */var elemBottom=elemTop+elem.offsetHeight;return elemBottom<=containerViewBottom&&elemTop>=containerViewTop};this.positionServiceSubscription=this.positionService.event$.subscribe(/**
         * @return {?}
         */function(){if(_this68.isAnimated){_this68.animationState=_this68.isTopPosition?"animated-up":"animated-down";_this68.changeDetectorRef.detectChanges();return}_this68.animationState="unanimated";_this68.changeDetectorRef.detectChanges()})}/**
     * @return {?}
     */var _proto62=TypeaheadContainerComponent.prototype;/**
     * @param {?=} isActiveItemChanged
     * @return {?}
     */_proto62.selectActiveMatch=function selectActiveMatch(isActiveItemChanged){if(this._active&&this.parent.typeaheadSelectFirstItem){this.selectMatch(this._active)}if(!this.parent.typeaheadSelectFirstItem&&isActiveItemChanged){this.selectMatch(this._active)}}/**
     * @return {?}
     */;_proto62.prevActiveMatch=function prevActiveMatch(){/** @type {?} */var index=this.matches.indexOf(this._active);this._active=this.matches[index-1<0?this.matches.length-1:index-1];if(this._active.isHeader()){this.prevActiveMatch()}if(this.typeaheadScrollable){this.scrollPrevious(index)}}/**
     * @return {?}
     */;_proto62.nextActiveMatch=function nextActiveMatch(){/** @type {?} */var index=this.matches.indexOf(this._active);this._active=this.matches[index+1>this.matches.length-1?0:index+1];if(this._active.isHeader()){this.nextActiveMatch()}if(this.typeaheadScrollable){this.scrollNext(index)}}/**
     * @param {?} value
     * @return {?}
     */;_proto62.selectActive=function selectActive(value){this.isFocused=true;this._active=value}/**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */;_proto62.highlight=function highlight(match,query){/** @type {?} */var itemStr=match.value;/** @type {?} */var itemStrHelper=(this.parent&&this.parent.typeaheadLatinize?latinize(itemStr):itemStr).toLowerCase();/** @type {?} */var startIdx;/** @type {?} */var tokenLen;// Replaces the capture string with the same string inside of a "strong" tag
if(typeof query==="object"){/** @type {?} */var queryLen=query.length;for(var i=0;i<queryLen;i+=1){// query[i] is already latinized and lower case
startIdx=itemStrHelper.indexOf(query[i]);tokenLen=query[i].length;if(startIdx>=0&&tokenLen>0){itemStr=itemStr.substring(0,startIdx)+"<strong>"+itemStr.substring(startIdx,startIdx+tokenLen)+"</strong>"+(""+itemStr.substring(startIdx+tokenLen));itemStrHelper=itemStrHelper.substring(0,startIdx)+"        "+" ".repeat(tokenLen)+"         "+(""+itemStrHelper.substring(startIdx+tokenLen))}}}else if(query){// query is already latinized and lower case
startIdx=itemStrHelper.indexOf(query);tokenLen=query.length;if(startIdx>=0&&tokenLen>0){itemStr=itemStr.substring(0,startIdx)+"<strong>"+itemStr.substring(startIdx,startIdx+tokenLen)+"</strong>"+(""+itemStr.substring(startIdx+tokenLen))}}return itemStr}/**
     * @return {?}
     */;_proto62.focusLost=function focusLost(){this.isFocused=false}/**
     * @param {?} value
     * @return {?}
     */;_proto62.isActive=function isActive(value){return this._active===value}/**
     * @param {?} value
     * @param {?=} e
     * @return {?}
     */;_proto62.selectMatch=function selectMatch(value,e){var _this69=this;if(e===void 0){e=void 0}if(e){e.stopPropagation();e.preventDefault()}this.parent.changeModel(value);setTimeout(/**
         * @return {?}
         */function(){return _this69.parent.typeaheadOnSelect.emit(value)},0);return false}/**
     * @return {?}
     */;_proto62.setScrollableMode=function setScrollableMode(){if(!this.ulElement){this.ulElement=this.element}if(this.liElements.first){/** @type {?} */var ulStyles=ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getStyles(this.ulElement.nativeElement);/** @type {?} */var liStyles=ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getStyles(this.liElements.first.nativeElement);/** @type {?} */var ulPaddingBottom=parseFloat((ulStyles["padding-bottom"]?ulStyles["padding-bottom"]:"").replace("px",""));/** @type {?} */var ulPaddingTop=parseFloat((ulStyles["padding-top"]?ulStyles["padding-top"]:"0").replace("px",""));/** @type {?} */var optionHeight=parseFloat((liStyles.height?liStyles.height:"0").replace("px",""));/** @type {?} */var height=this.typeaheadOptionsInScrollableView*optionHeight;this.guiHeight=height+ulPaddingTop+ulPaddingBottom+"px"}this.renderer.setStyle(this.element.nativeElement,"visibility","visible")}/**
     * @param {?} index
     * @return {?}
     */;_proto62.scrollPrevious=function scrollPrevious(index){if(index===0){this.scrollToBottom();return}if(this.liElements){/** @type {?} */var liElement=this.liElements.toArray()[index-1];if(liElement&&!this.isScrolledIntoView(liElement.nativeElement)){this.ulElement.nativeElement.scrollTop=liElement.nativeElement.offsetTop}}}/**
     * @param {?} index
     * @return {?}
     */;_proto62.scrollNext=function scrollNext(index){if(index+1>this.matches.length-1){this.scrollToTop();return}if(this.liElements){/** @type {?} */var liElement=this.liElements.toArray()[index+1];if(liElement&&!this.isScrolledIntoView(liElement.nativeElement)){this.ulElement.nativeElement.scrollTop=liElement.nativeElement.offsetTop-Number(this.ulElement.nativeElement.offsetHeight)+Number(liElement.nativeElement.offsetHeight)}}}/**
     * @return {?}
     */;_proto62.ngOnDestroy=function ngOnDestroy(){this.positionServiceSubscription.unsubscribe()}/**
     * @private
     * @return {?}
     */;_proto62.scrollToBottom=function scrollToBottom(){this.ulElement.nativeElement.scrollTop=this.ulElement.nativeElement.scrollHeight}/**
     * @private
     * @return {?}
     */;_proto62.scrollToTop=function scrollToTop(){this.ulElement.nativeElement.scrollTop=0};_createClass(TypeaheadContainerComponent,[{key:"isBs4",get:function get(){return!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()}/**
     * @return {?}
     */},{key:"active",get:function get(){return this._active}/**
     * @return {?}
     */},{key:"matches",get:function get(){return this._matches}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){var _this70=this;this.positionService.setOptions({modifiers:{flip:{enabled:this.adaptivePosition}},allowedPositions:["top","bottom"]});this._matches=value;this.needScrollbar=this.typeaheadScrollable&&this.typeaheadOptionsInScrollableView<this.matches.length;if(this.typeaheadScrollable){setTimeout(/**
             * @return {?}
             */function(){_this70.setScrollableMode()})}if(this.typeaheadIsFirstItemActive&&this._matches.length>0){this._active=this._matches[0];if(this._active.isHeader()){this.nextActiveMatch()}}if(this._active&&!this.typeaheadIsFirstItemActive){/** @type {?} */var concurrency=this._matches.find(/**
             * @param {?} match
             * @return {?}
             */function(match){return match.value===_this70._active.value});if(concurrency){this.selectActive(concurrency);return}this._active=null}}/**
     * @return {?}
     */},{key:"isTopPosition",get:function get(){return this.element.nativeElement.classList.contains("top")}// tslint:disable-next-line:no-any
/**
     * @return {?}
     */},{key:"optionsListTemplate",get:function get(){return this.parent?this.parent.optionsListTemplate:undefined}/**
     * @return {?}
     */},{key:"isAnimated",get:function get(){return this.parent?this.parent.isAnimated:false}/**
     * @return {?}
     */},{key:"adaptivePosition",get:function get(){return this.parent?this.parent.adaptivePosition:false}/**
     * @return {?}
     */},{key:"typeaheadScrollable",get:function get(){return this.parent?this.parent.typeaheadScrollable:false}/**
     * @return {?}
     */},{key:"typeaheadOptionsInScrollableView",get:function get(){return this.parent?this.parent.typeaheadOptionsInScrollableView:5}/**
     * @return {?}
     */},{key:"typeaheadIsFirstItemActive",get:function get(){return this.parent?this.parent.typeaheadIsFirstItemActive:true}// tslint:disable-next-line:no-any
/**
     * @return {?}
     */},{key:"itemTemplate",get:function get(){return this.parent?this.parent.typeaheadItemTemplate:undefined}}]);return TypeaheadContainerComponent}();TypeaheadContainerComponent.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],args:[{selector:"typeahead-container",template:"<!-- inject options list template -->\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\n             [ngTemplateOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template>\n\n<!-- default options item template -->\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"highlight(match, query)\"></span>\n</ng-template>\n\n<!-- Bootstrap 3 options list template -->\n<ng-template #bs3Template>\n  <ul class=\"dropdown-menu\"\n      #ulElement\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\n      <li #liElements\n          *ngIf=\"!match.isHeader()\"\n          [@typeaheadAnimation]=\"animationState\"\n          [class.active]=\"isActive(match)\"\n          (mouseenter)=\"selectActive(match)\">\n\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                       [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n        </a>\n      </li>\n    </ng-template>\n  </ul>\n</ng-template>\n\n<!-- Bootstrap 4 options list template -->\n<ng-template #bs4Template>\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\n    <ng-template [ngIf]=\"!match.isHeader()\">\n      <button #liElements\n              [@typeaheadAnimation]=\"animationState\"\n              class=\"dropdown-item\"\n              (click)=\"selectMatch(match, $event)\"\n              (mouseenter)=\"selectActive(match)\"\n              [class.active]=\"isActive(match)\">\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                     [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n      </button>\n    </ng-template>\n  </ng-template>\n</ng-template>\n",host:{class:"dropdown open bottom","[class.dropdown-menu]":"isBs4","[style.height]":"isBs4 && needScrollbar ? guiHeight: 'auto'","[style.visibility]":"'inherit'","[class.dropup]":"dropup",style:"position: absolute;display: block;"},animations:[typeaheadAnimation],styles:["\n    :host.dropdown {\n      z-index: 1000;\n    }\n\n    :host.dropdown-menu, .dropdown-menu {\n      overflow-y: auto;\n      height: 100px;\n    }\n  "]}]}];/** @nocollapse */TypeaheadContainerComponent.ctorParameters=function(){return[{type:ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]}]};TypeaheadContainerComponent.propDecorators={ulElement:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],args:["ulElement",{static:false}]}],liElements:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],args:["liElements"]}],focusLost:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["mouseleave"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["blur"]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Default values provider for typeahead
 */var TypeaheadConfig=function TypeaheadConfig(){/**
         * sets use adaptive position
         */this.adaptivePosition=false;/**
         * turn on/off animation
         */this.isAnimated=false;/**
         * used to hide results on blur
         */this.hideResultsOnBlur=true;/**
         * used to choose the first item in typeahead container
         */this.selectFirstItem=true;/**
         * used to active/inactive the first item in typeahead container
         */this.isFirstItemActive=true;/**
         * used to choose set minimal no of characters that needs to
         * be entered before typeahead kicks-in
         */this.minLength=1};TypeaheadConfig.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TypeaheadDirective=/*#__PURE__*/function(){/**
     * @param {?} cis
     * @param {?} config
     * @param {?} changeDetection
     * @param {?} element
     * @param {?} ngControl
     * @param {?} renderer
     * @param {?} viewContainerRef
     */function TypeaheadDirective(cis,config,changeDetection,element,ngControl,renderer,viewContainerRef){this.changeDetection=changeDetection;this.element=element;this.ngControl=ngControl;this.renderer=renderer;/**
         * minimal no of characters that needs to be entered before
         * typeahead kicks-in. When set to 0, typeahead shows on focus with full
         * list of options (limited as normal by typeaheadOptionsLimit)
         */this.typeaheadMinLength=void 0;/**
         * turn on/off animation
         */this.isAnimated=false;/**
         * should be used only in case of typeahead attribute is Observable of array.
         * If true - loading of options will be async, otherwise - sync.
         * true make sense if options array is large.
         */this.typeaheadAsync=void 0;/**
         * match latin symbols.
         * If true the word súper would match super and vice versa.
         */this.typeaheadLatinize=true;/**
         * Can be use to search words by inserting a single white space between each characters
         *  for example 'C a l i f o r n i a' will match 'California'.
         */this.typeaheadSingleWords=true;/**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to break words. Defaults to space.
         */this.typeaheadWordDelimiters=" ";/**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to match exact phrase.
         * Defaults to simple and double quotes.
         */this.typeaheadPhraseDelimiters="'\"";/**
         * specifies if typeahead is scrollable
         */this.typeaheadScrollable=false;/**
         * specifies number of options to show in scroll view
         */this.typeaheadOptionsInScrollableView=5;/**
         * fired when an options list was opened and the user clicked Tab
         * If a value equal true, it will be chosen first or active item in the list
         * If value equal false, it will be chosen an active item in the list or nothing
         */this.typeaheadSelectFirstItem=true;/**
         * makes active first item in a list
         */this.typeaheadIsFirstItemActive=true;/**
         * fired when 'busy' state of this component was changed,
         * fired on async mode only, returns boolean
         */this.typeaheadLoading=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * fired on every key event and returns true
         * in case of matches are not detected
         */this.typeaheadNoResults=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * fired when option was selected, return object with data of this option
         */this.typeaheadOnSelect=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * fired when blur event occurs. returns the active item
         */ // tslint:disable-next-line:no-any
this.typeaheadOnBlur=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * This attribute indicates that the dropdown should be opened upwards
         */this.dropup=false;this.isActiveItemChanged=false;this.isTypeaheadOptionsListActive=false;// tslint:disable-next-line:no-any
this.keyUpEventEmitter=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];this.placement="bottom-left";this._subscriptions=[];this._typeahead=cis.createLoader(element,viewContainerRef,renderer).provide({provide:TypeaheadConfig,useValue:config});Object.assign(this,{typeaheadHideResultsOnBlur:config.hideResultsOnBlur,typeaheadSelectFirstItem:config.selectFirstItem,typeaheadIsFirstItemActive:config.isFirstItemActive,typeaheadMinLength:config.minLength,adaptivePosition:config.adaptivePosition,isAnimated:config.isAnimated})}/**
     * @return {?}
     */var _proto63=TypeaheadDirective.prototype;_proto63.ngOnInit=function ngOnInit(){this.typeaheadOptionsLimit=this.typeaheadOptionsLimit||20;this.typeaheadMinLength=this.typeaheadMinLength===void 0?1:this.typeaheadMinLength;this.typeaheadWaitMs=this.typeaheadWaitMs||0;// async should be false in case of array
if(this.typeaheadAsync===undefined&&!Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["isObservable"])(this.typeahead)){this.typeaheadAsync=false}if(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["isObservable"])(this.typeahead)){this.typeaheadAsync=true}if(this.typeaheadAsync){this.asyncActions()}else{this.syncActions()}}/**
     * @param {?} e
     * @return {?}
     */ // tslint:disable-next-line:no-any
;_proto63.onInput=function onInput(e){// For `<input>`s, use the `value` property. For others that don't have a
// `value` (such as `<span contenteditable="true">`), use either
// `textContent` or `innerText` (depending on which one is supported, i.e.
// Firefox or IE).
/** @type {?} */var value=e.target.value!==undefined?e.target.value:e.target.textContent!==undefined?e.target.textContent:e.target.innerText;if(value!=null&&value.trim().length>=this.typeaheadMinLength){this.typeaheadLoading.emit(true);this.keyUpEventEmitter.emit(e.target.value)}else{this.typeaheadLoading.emit(false);this.typeaheadNoResults.emit(false);this.hide()}}/**
     * @param {?} event
     * @return {?}
     */;_proto63.onChange=function onChange(event){if(this._container){// esc
/* tslint:disable-next-line: deprecation */if(event.keyCode===27||event.key==="Escape"){this.hide();return}// up
/* tslint:disable-next-line: deprecation */if(event.keyCode===38||event.key==="ArrowUp"){this.isActiveItemChanged=true;this._container.prevActiveMatch();return}// down
/* tslint:disable-next-line: deprecation */if(event.keyCode===40||event.key==="ArrowDown"){this.isActiveItemChanged=true;this._container.nextActiveMatch();return}// enter
/* tslint:disable-next-line: deprecation */if(event.keyCode===13||event.key==="Enter"){this._container.selectActiveMatch();return}}}/**
     * @return {?}
     */;_proto63.onFocus=function onFocus(){if(this.typeaheadMinLength===0){this.typeaheadLoading.emit(true);this.keyUpEventEmitter.emit(this.element.nativeElement.value||"")}}/**
     * @return {?}
     */;_proto63.onBlur=function onBlur(){if(this._container&&!this._container.isFocused){this.typeaheadOnBlur.emit(this._container.active)}}/**
     * @param {?} event
     * @return {?}
     */;_proto63.onKeydown=function onKeydown(event){// no container - no problems
if(!this._container){return}/* tslint:disable-next-line: deprecation */if(event.keyCode===9||event.key==="Tab"||event.keyCode===13||event.key==="Enter"){event.preventDefault();if(this.typeaheadSelectFirstItem){this._container.selectActiveMatch();return}if(!this.typeaheadSelectFirstItem){this._container.selectActiveMatch(this.isActiveItemChanged);this.isActiveItemChanged=false;this.hide()}}}/**
     * @param {?} match
     * @return {?}
     */;_proto63.changeModel=function changeModel(match){/** @type {?} */var valueStr=match.value;this.ngControl.viewToModelUpdate(valueStr);this.ngControl.control.setValue(valueStr);this.changeDetection.markForCheck();this.hide()}/**
     * @return {?}
     */;/**
     * @return {?}
     */_proto63.show=function show(){var _this71=this;this._typeahead.attach(TypeaheadContainerComponent).to(this.container).position({attachment:(this.dropup?"top":"bottom")+" start"}).show({typeaheadRef:this,placement:this.placement,animation:false,dropup:this.dropup});this._outsideClickListener=this.renderer.listen("document","click",/**
         * @param {?} e
         * @return {?}
         */function(e){if(_this71.typeaheadMinLength===0&&_this71.element.nativeElement.contains(e.target)){return undefined}if(!_this71.typeaheadHideResultsOnBlur||_this71.element.nativeElement.contains(e.target)){return undefined}_this71.onOutsideClick()});this._container=this._typeahead.instance;this._container.parent=this;// This improves the speed as it won't have to be done for each list item
/** @type {?} */var normalizedQuery=(this.typeaheadLatinize?latinize(this.ngControl.control.value):this.ngControl.control.value).toString().toLowerCase();this._container.query=this.typeaheadSingleWords?tokenize(normalizedQuery,this.typeaheadWordDelimiters,this.typeaheadPhraseDelimiters):normalizedQuery;this._container.matches=this._matches;this.element.nativeElement.focus()}/**
     * @return {?}
     */;_proto63.hide=function hide(){if(this._typeahead.isShown){this._typeahead.hide();this._outsideClickListener();this._container=null}}/**
     * @return {?}
     */;_proto63.onOutsideClick=function onOutsideClick(){if(this._container&&!this._container.isFocused){this.hide()}}/**
     * @return {?}
     */;_proto63.ngOnDestroy=function ngOnDestroy(){// clean up subscriptions
for(var _iterator9=_createForOfIteratorHelperLoose(this._subscriptions),_step10;!(_step10=_iterator9()).done;){var sub=_step10.value;sub.unsubscribe()}this._typeahead.dispose()}/**
     * @protected
     * @return {?}
     */;_proto63.asyncActions=function asyncActions(){var _this72=this;this._subscriptions.push(this.keyUpEventEmitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(this.typeaheadWaitMs),Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(/**
         * @param {?} value
         * @return {?}
         */function(value){return _this72.typeahead.pipe(// tslint:disable-next-line:no-any
Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(/**
             * @param {?} typeahead
             * @return {?}
             */function(typeahead){/** @type {?} */var normalizedQuery=_this72.normalizeQuery(value);return typeahead.filter(/**
                 * @param {?} option
                 * @return {?}
                 */function(option){return option&&_this72.testMatch(_this72.normalizeOption(option),normalizedQuery)})}))})).subscribe(/**
         * @param {?} matches
         * @return {?}
         */function(matches){_this72.finalizeAsyncCall(matches)}))}/**
     * @protected
     * @return {?}
     */;_proto63.syncActions=function syncActions(){var _this73=this;this._subscriptions.push(this.keyUpEventEmitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(this.typeaheadWaitMs),Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(/**
         * @param {?} value
         * @return {?}
         */function(value){/** @type {?} */var normalizedQuery=_this73.normalizeQuery(value);return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(_this73.typeahead).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(/**
             * @param {?} option
             * @return {?}
             */function(option){return option&&_this73.testMatch(_this73.normalizeOption(option),normalizedQuery)}),Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["toArray"])())})).subscribe(/**
         * @param {?} matches
         * @return {?}
         */function(matches){_this73.finalizeAsyncCall(matches)}))}// tslint:disable-next-line:no-any
/**
     * @protected
     * @param {?} option
     * @return {?}
     */;_proto63.normalizeOption=function normalizeOption(option){/** @type {?} */var optionValue=getValueFromObject(option,this.typeaheadOptionField);/** @type {?} */var normalizedOption=this.typeaheadLatinize?latinize(optionValue):optionValue;return normalizedOption.toLowerCase()}/**
     * @protected
     * @param {?} value
     * @return {?}
     */;_proto63.normalizeQuery=function normalizeQuery(value){// If singleWords, break model here to not be doing extra work on each
// iteration
/** @type {?} */var normalizedQuery=(this.typeaheadLatinize?latinize(value):value).toString().toLowerCase();normalizedQuery=this.typeaheadSingleWords?tokenize(normalizedQuery,this.typeaheadWordDelimiters,this.typeaheadPhraseDelimiters):normalizedQuery;return normalizedQuery}/**
     * @protected
     * @param {?} match
     * @param {?} test
     * @return {?}
     */;_proto63.testMatch=function testMatch(match,test){/** @type {?} */var spaceLength;if(typeof test==="object"){spaceLength=test.length;for(var i=0;i<spaceLength;i+=1){if(test[i].length>0&&match.indexOf(test[i])<0){return false}}return true}return match.indexOf(test)>=0}/**
     * @protected
     * @param {?} matches
     * @return {?}
     */;_proto63.finalizeAsyncCall=function finalizeAsyncCall(matches){this.prepareMatches(matches||[]);this.typeaheadLoading.emit(false);this.typeaheadNoResults.emit(!this.hasMatches());if(!this.hasMatches()){this.hide();return}if(this._container){// fix: remove usage of ngControl internals
/** @type {?} */var _controlValue=(this.typeaheadLatinize?latinize(this.ngControl.control.value):this.ngControl.control.value)||"";// This improves the speed as it won't have to be done for each list item
/** @type {?} */var normalizedQuery=_controlValue.toString().toLowerCase();this._container.query=this.typeaheadSingleWords?tokenize(normalizedQuery,this.typeaheadWordDelimiters,this.typeaheadPhraseDelimiters):normalizedQuery;this._container.matches=this._matches}else{this.show()}}/**
     * @protected
     * @param {?} options
     * @return {?}
     */;_proto63.prepareMatches=function prepareMatches(options){var _this74=this;/** @type {?} */var limited=options.slice(0,this.typeaheadOptionsLimit);if(this.typeaheadGroupField){/** @type {?} */var matches=[];// extract all group names
/** @type {?} */var groups=limited.map(/**
             * @param {?} option
             * @return {?}
             */function(option){return getValueFromObject(option,_this74.typeaheadGroupField)}).filter(/**
             * @param {?} v
             * @param {?} i
             * @param {?} a
             * @return {?}
             */function(v,i,a){return a.indexOf(v)===i});groups.forEach(/**
             * @param {?} group
             * @return {?}
             */function(group){// add group header to array of matches
matches.push(new TypeaheadMatch(group,group,true));// add each item of group to array of matches
matches=matches.concat(limited.filter(// tslint:disable-next-line:no-any
/**
                 * @param {?} option
                 * @return {?}
                 */function(option){return getValueFromObject(option,_this74.typeaheadGroupField)===group}).map(// tslint:disable-next-line:no-any
/**
                 * @param {?} option
                 * @return {?}
                 */function(option){return new TypeaheadMatch(option,getValueFromObject(option,_this74.typeaheadOptionField))}))});this._matches=matches}else{this._matches=limited.map(// tslint:disable-next-line:no-any
/**
             * @param {?} option
             * @return {?}
             */function(option){return new TypeaheadMatch(option,getValueFromObject(option,_this74.typeaheadOptionField))})}}/**
     * @protected
     * @return {?}
     */;_proto63.hasMatches=function hasMatches(){return this._matches.length>0};_createClass(TypeaheadDirective,[{key:"matches",get:function get(){return this._matches}}]);return TypeaheadDirective}();TypeaheadDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[typeahead]",exportAs:"bs-typeahead"}]}];/** @nocollapse */TypeaheadDirective.ctorParameters=function(){return[{type:ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_6__["ComponentLoaderFactory"]},{type:TypeaheadConfig},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]}]};TypeaheadDirective.propDecorators={typeahead:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadMinLength:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],adaptivePosition:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isAnimated:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadWaitMs:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadOptionsLimit:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadOptionField:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadGroupField:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadAsync:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadLatinize:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadSingleWords:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadWordDelimiters:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadPhraseDelimiters:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadItemTemplate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],optionsListTemplate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadScrollable:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadOptionsInScrollableView:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadHideResultsOnBlur:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadSelectFirstItem:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadIsFirstItemActive:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],typeaheadLoading:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],typeaheadNoResults:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],typeaheadOnSelect:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],typeaheadOnBlur:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}],container:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],dropup:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],onInput:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["input",["$event"]]}],onChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["keyup",["$event"]]}],onFocus:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["click"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["focus"]}],onBlur:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["blur"]}],onKeydown:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],args:["keydown",["$event"]]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TypeaheadModule=/*#__PURE__*/function(){function TypeaheadModule(){}/**
     * @return {?}
     */TypeaheadModule.forRoot=function forRoot(){return{ngModule:TypeaheadModule,providers:[ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_6__["ComponentLoaderFactory"],ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"],TypeaheadConfig]}};return TypeaheadModule}();TypeaheadModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{imports:[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]],declarations:[TypeaheadContainerComponent,TypeaheadDirective],exports:[TypeaheadContainerComponent,TypeaheadDirective],entryComponents:[TypeaheadContainerComponent]}]}];//# sourceMappingURL=ngx-bootstrap-typeahead.js.map
/***/},/***/"./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js":/*!**************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js ***!
  \**************************************************************************/ /*! exports provided: LinkedList, OnChange, Trigger, Utils, document, isBs3, listenToTriggers, listenToTriggersV2, parseTriggers, registerEscClick, registerOutsideClick, setTheme, warnOnce, window */ /***/function node_modulesNgxBootstrapUtilsFesm2015NgxBootstrapUtilsJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"LinkedList",function(){return LinkedList});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"OnChange",function(){return OnChange});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Trigger",function(){return Trigger});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Utils",function(){return Utils});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"document",function(){return document$1});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isBs3",function(){return isBs3});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"listenToTriggers",function(){return listenToTriggers});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"listenToTriggersV2",function(){return listenToTriggersV2});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parseTriggers",function(){return parseTriggers});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"registerEscClick",function(){return registerEscClick});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"registerOutsideClick",function(){return registerOutsideClick});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"setTheme",function(){return setTheme});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"warnOnce",function(){return warnOnce});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"window",function(){return win});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */var Trigger=/*#__PURE__*/function(){/**
     * @param {?} open
     * @param {?=} close
     */function Trigger(open,close){this.open=open;this.close=close||open}/**
     * @return {?}
     */var _proto64=Trigger.prototype;_proto64.isManual=function isManual(){return this.open==="manual"||this.close==="manual"};return Trigger}();/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var DEFAULT_ALIASES={hover:["mouseover","mouseout"],focus:["focusin","focusout"]};/* tslint:disable-next-line: no-any */ /**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */function parseTriggers(triggers,aliases){if(aliases===void 0){aliases=DEFAULT_ALIASES}/** @type {?} */var trimmedTriggers=(triggers||"").trim();if(trimmedTriggers.length===0){return[]}/** @type {?} */var parsedTriggers=trimmedTriggers.split(/\s+/).map(/**
     * @param {?} trigger
     * @return {?}
     */function(trigger){return trigger.split(":")}).map(/**
     * @param {?} triggerPair
     * @return {?}
     */function(triggerPair){/** @type {?} */var alias=aliases[triggerPair[0]]||triggerPair;return new Trigger(alias[0],alias[1])});/** @type {?} */var manualTriggers=parsedTriggers.filter(/**
     * @param {?} triggerPair
     * @return {?}
     */function(triggerPair){return triggerPair.isManual()});if(manualTriggers.length>1){throw new Error("Triggers parse error: only one manual trigger is allowed")}if(manualTriggers.length===1&&parsedTriggers.length>1){throw new Error("Triggers parse error: manual trigger can't be mixed with other triggers")}return parsedTriggers}/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */function listenToTriggers(renderer,/* tslint:disable-next-line: no-any */target,triggers,showFn,hideFn,toggleFn){/** @type {?} */var parsedTriggers=parseTriggers(triggers);/* tslint:disable-next-line: no-any */ /** @type {?} */var listeners=[];if(parsedTriggers.length===1&&parsedTriggers[0].isManual()){return Function.prototype}parsedTriggers.forEach(/**
     * @param {?} trigger
     * @return {?}
     */function(trigger){if(trigger.open===trigger.close){listeners.push(renderer.listen(target,trigger.open,toggleFn));return}listeners.push(renderer.listen(target,trigger.open,showFn),renderer.listen(target,trigger.close,hideFn))});return(/**
     * @return {?}
     */function(){listeners.forEach(/**
         * @param {?} unsubscribeFn
         * @return {?}
         */function(unsubscribeFn){return unsubscribeFn()})})}/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */function listenToTriggersV2(renderer,options){/** @type {?} */var parsedTriggers=parseTriggers(options.triggers);/** @type {?} */var target=options.target;// do nothing
if(parsedTriggers.length===1&&parsedTriggers[0].isManual()){return Function.prototype}// all listeners
/* tslint:disable-next-line: no-any */ /** @type {?} */var listeners=[];// lazy listeners registration
/** @type {?} */var _registerHide=[];/** @type {?} */var registerHide=/**
     * @return {?}
     */function registerHide(){// add hide listeners to unregister array
_registerHide.forEach(/**
         * @param {?} fn
         * @return {?}
         */function(fn){return listeners.push(fn())});// register hide events only once
_registerHide.length=0};// register open\close\toggle listeners
parsedTriggers.forEach(/**
     * @param {?} trigger
     * @return {?}
     */function(trigger){/** @type {?} */var useToggle=trigger.open===trigger.close;/** @type {?} */var showFn=useToggle?options.toggle:options.show;if(!useToggle){_registerHide.push(/**
             * @return {?}
             */function(){return renderer.listen(target,trigger.close,options.hide)})}listeners.push(renderer.listen(target,trigger.open,/**
         * @return {?}
         */function(){return showFn(registerHide)}))});return(/**
     * @return {?}
     */function(){listeners.forEach(/**
         * @param {?} unsubscribeFn
         * @return {?}
         */function(unsubscribeFn){return unsubscribeFn()})})}/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */function registerOutsideClick(renderer,options){if(!options.outsideClick){return Function.prototype}/* tslint:disable-next-line: no-any */return renderer.listen("document","click",/**
     * @param {?} event
     * @return {?}
     */function(event){if(options.target&&options.target.contains(event.target)){return undefined}if(options.targets&&options.targets.some(/**
             * @param {?} target
             * @return {?}
             */function(target){return target.contains(event.target)})){return undefined}options.hide()})}/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */function registerEscClick(renderer,options){if(!options.outsideEsc){return Function.prototype}return renderer.listen("document","keyup.esc",/**
     * @param {?} event
     * @return {?}
     */function(event){if(options.target&&options.target.contains(event.target)){return undefined}if(options.targets&&options.targets.some(/**
             * @param {?} target
             * @return {?}
             */function(target){return target.contains(event.target)})){return undefined}options.hide()})}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * JS version of browser APIs. This library can only run in the browser.
 * @type {?}
 */var win=typeof window!=="undefined"&&window||/** @type {?} */{};/** @type {?} */var document$1=win.document;/** @type {?} */var location=win.location;/** @type {?} */var gc=win.gc?/**
 * @return {?}
 */function(){return win.gc()}:/**
 * @return {?}
 */function(){return null};/** @type {?} */var performance=win.performance?win.performance:null;/** @type {?} */var Event=win.Event;/** @type {?} */var MouseEvent=win.MouseEvent;/** @type {?} */var KeyboardEvent=win.KeyboardEvent;/** @type {?} */var EventTarget=win.EventTarget;/** @type {?} */var History=win.History;/** @type {?} */var Location=win.Location;/** @type {?} */var EventListener=win.EventListener;/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var guessedVersion;/**
 * @return {?}
 */function _guessBsVersion(){if(typeof document==="undefined"){return null}/** @type {?} */var spanEl=document.createElement("span");spanEl.innerText="test bs version";document.body.appendChild(spanEl);spanEl.classList.add("d-none");/** @type {?} */var rect=spanEl.getBoundingClientRect();document.body.removeChild(spanEl);if(!rect){return"bs3"}return rect.top===0?"bs4":"bs3"}/**
 * @param {?} theme
 * @return {?}
 */function setTheme(theme){guessedVersion=theme}// todo: in ngx-bootstrap, bs4 will became a default one
/**
 * @return {?}
 */function isBs3(){if(typeof win==="undefined"){return true}if(typeof win.__theme==="undefined"){if(guessedVersion){return guessedVersion==="bs3"}guessedVersion=_guessBsVersion();return guessedVersion==="bs3"}return win.__theme!=="bs4"}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @template T
 */var LinkedList=/*#__PURE__*/function(){function LinkedList(){this.length=0;this.asArray=[];// Array methods overriding END
}/**
     * @param {?} position
     * @return {?}
     */var _proto65=LinkedList.prototype;_proto65.get=function get(position){if(this.length===0||position<0||position>=this.length){return void 0}/** @type {?} */var current=this.head;for(var index=0;index<position;index++){current=current.next}return current.value}/**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */;_proto65.add=function add(value,position){if(position===void 0){position=this.length}if(position<0||position>this.length){throw new Error("Position is out of the list")}/* tslint:disable-next-line: no-any*/ /** @type {?} */var node={value:value,next:undefined,previous:undefined};if(this.length===0){this.head=node;this.tail=node;this.current=node}else{if(position===0){// first node
node.next=this.head;this.head.previous=node;this.head=node}else if(position===this.length){// last node
this.tail.next=node;node.previous=this.tail;this.tail=node}else{// node in middle
/** @type {?} */var currentPreviousNode=this.getNode(position-1);/** @type {?} */var currentNextNode=currentPreviousNode.next;currentPreviousNode.next=node;currentNextNode.previous=node;node.previous=currentPreviousNode;node.next=currentNextNode}}this.length++;this.createInternalArrayRepresentation()}/**
     * @param {?=} position
     * @return {?}
     */;_proto65.remove=function remove(position){if(position===void 0){position=0}if(this.length===0||position<0||position>=this.length){throw new Error("Position is out of the list")}if(position===0){// first node
this.head=this.head.next;if(this.head){// there is no second node
this.head.previous=undefined}else{// there is no second node
this.tail=undefined}}else if(position===this.length-1){// last node
this.tail=this.tail.previous;this.tail.next=undefined}else{// middle node
/** @type {?} */var removedNode=this.getNode(position);removedNode.next.previous=removedNode.previous;removedNode.previous.next=removedNode.next}this.length--;this.createInternalArrayRepresentation()}/**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */;_proto65.set=function set(position,value){if(this.length===0||position<0||position>=this.length){throw new Error("Position is out of the list")}/** @type {?} */var node=this.getNode(position);node.value=value;this.createInternalArrayRepresentation()}/**
     * @return {?}
     */;_proto65.toArray=function toArray(){return this.asArray}/* tslint:disable-next-line: no-any*/ /**
     * @param {?} fn
     * @return {?}
     */;_proto65.findAll=function findAll(fn){/** @type {?} */var current=this.head;/* tslint:disable-next-line: no-any*/ /** @type {?} */var result=[];for(var index=0;index<this.length;index++){if(fn(current.value,index)){result.push({index:index,value:current.value})}current=current.next}return result}// Array methods overriding start
/**
     * @param {...?} args
     * @return {?}
     */;_proto65.push=function push(){var _this75=this;for(var _len=arguments.length,args=new Array(_len),_key2=0;_key2<_len;_key2++){args[_key2]=arguments[_key2]}/* tslint:disable-next-line: no-any*/args.forEach(/**
         * @param {?} arg
         * @return {?}
         */function(arg){_this75.add(arg)});return this.length}/**
     * @return {?}
     */;_proto65.pop=function pop(){if(this.length===0){return undefined}/** @type {?} */var last=this.tail;this.remove(this.length-1);return last.value}/**
     * @param {...?} args
     * @return {?}
     */;_proto65.unshift=function unshift(){var _this76=this;for(var _len2=arguments.length,args=new Array(_len2),_key3=0;_key3<_len2;_key3++){args[_key3]=arguments[_key3]}args.reverse();/* tslint:disable-next-line: no-any*/args.forEach(/**
         * @param {?} arg
         * @return {?}
         */function(arg){_this76.add(arg,0)});return this.length}/**
     * @return {?}
     */;_proto65.shift=function shift(){if(this.length===0){return undefined}/** @type {?} */var lastItem=this.head.value;this.remove();return lastItem}/* tslint:disable-next-line: no-any*/ /**
     * @param {?} fn
     * @return {?}
     */;_proto65.forEach=function forEach(fn){/** @type {?} */var current=this.head;for(var index=0;index<this.length;index++){fn(current.value,index);current=current.next}}/**
     * @param {?} value
     * @return {?}
     */;_proto65.indexOf=function indexOf(value){/** @type {?} */var current=this.head;/** @type {?} */var position=0;for(var index=0;index<this.length;index++){if(current.value===value){position=index;break}current=current.next}return position}/* tslint:disable-next-line: no-any*/ /**
     * @param {?} fn
     * @return {?}
     */;_proto65.some=function some(fn){/** @type {?} */var current=this.head;/** @type {?} */var result=false;while(current&&!result){if(fn(current.value)){result=true;break}current=current.next}return result}/* tslint:disable-next-line: no-any*/ /**
     * @param {?} fn
     * @return {?}
     */;_proto65.every=function every(fn){/** @type {?} */var current=this.head;/** @type {?} */var result=true;while(current&&result){if(!fn(current.value)){result=false}current=current.next}return result}/**
     * @return {?}
     */;_proto65.toString=function toString(){return"[Linked List]"}/* tslint:disable-next-line: no-any*/ /**
     * @param {?} fn
     * @return {?}
     */;_proto65.find=function find(fn){/** @type {?} */var current=this.head;/** @type {?} */var result;for(var index=0;index<this.length;index++){if(fn(current.value,index)){result=current.value;break}current=current.next}return result}/* tslint:disable-next-line: no-any*/ /**
     * @param {?} fn
     * @return {?}
     */;_proto65.findIndex=function findIndex(fn){/** @type {?} */var current=this.head;/** @type {?} */var result;for(var index=0;index<this.length;index++){if(fn(current.value,index)){result=index;break}current=current.next}return result}/* tslint:disable-next-line: no-any*/ /**
     * @protected
     * @param {?} position
     * @return {?}
     */;_proto65.getNode=function getNode(position){if(this.length===0||position<0||position>=this.length){throw new Error("Position is out of the list")}/** @type {?} */var current=this.head;for(var index=0;index<position;index++){current=current.next}return current}/**
     * @protected
     * @return {?}
     */;_proto65.createInternalArrayRepresentation=function createInternalArrayRepresentation(){/* tslint:disable-next-line: no-any*/ /** @type {?} */var outArray=[];/** @type {?} */var current=this.head;while(current){outArray.push(current.value);current=current.next}this.asArray=outArray};return LinkedList}();/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /*tslint:disable:no-invalid-this */ /* tslint:disable-next-line: no-any */ /**
 * @param {?=} defaultValue
 * @return {?}
 */function OnChange(defaultValue){/** @type {?} */var sufix="Change";/* tslint:disable-next-line: no-any */return(/**
     * @param {?} target
     * @param {?} propertyKey
     * @return {?}
     */function OnChangeHandler(target,propertyKey){/** @type {?} */var _key=" __"+propertyKey+"Value";Object.defineProperty(target,propertyKey,{/* tslint:disable-next-line: no-any */ /**
             * @return {?}
             */get:function get(){return this[_key]},/* tslint:disable-next-line: no-any */ /**
             * @param {?} value
             * @return {?}
             */set:function set(value){/** @type {?} */var prevValue=this[_key];this[_key]=value;if(prevValue!==value&&this[propertyKey+sufix]){this[propertyKey+sufix].emit(value)}}})})}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var Utils=/*#__PURE__*/function(){function Utils(){}/* tslint:disable-next-line: no-any */ /**
     * @param {?} element
     * @return {?}
     */Utils.reflow=function reflow(element){/* tslint:disable-next-line: no-any */(/**
         * @param {?} bs
         * @return {?}
         */function(bs){return bs})(element.offsetHeight)}// source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
/* tslint:disable-next-line: no-any */ /**
     * @param {?} elem
     * @return {?}
     */;Utils.getStyles=function getStyles(elem){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
/** @type {?} */var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=win}return view.getComputedStyle(elem)};return Utils}();/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var _messagesHash={};/** @type {?} */var _hideMsg=typeof console==="undefined"||!("warn"in console);/**
 * @param {?} msg
 * @return {?}
 */function warnOnce(msg){if(!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()||_hideMsg||msg in _messagesHash){return}_messagesHash[msg]=true;/*tslint:disable-next-line*/console.warn(msg)}//# sourceMappingURL=ngx-bootstrap-utils.js.map
/***/}}]);//# sourceMappingURL=default~pages-coupon-coupon-module~pages-restaurant-restaurant-module~pages-shuttle-shuttle-module~p~6c06a9eb-es2015.js.map
//# sourceMappingURL=default~pages-coupon-coupon-module~pages-restaurant-restaurant-module~pages-shuttle-shuttle-module~p~6c06a9eb-es5.js.map