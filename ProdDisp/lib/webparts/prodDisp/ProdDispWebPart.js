var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version, EnvironmentType, Environment } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jQuery from 'jquery';
import styles from './ProdDispWebPart.module.scss';
import * as strings from 'ProdDispWebPartStrings';
import { SPHttpClient } from '@microsoft/sp-http';
var ProdDispWebPart = (function (_super) {
    __extends(ProdDispWebPart, _super);
    function ProdDispWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProdDispWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + styles.prodDisp + "\">\n        <div class=\"" + styles.container + "\">\n          <div class=\"" + styles.row + "\">\n            <div class=\"" + styles.column + "\">\n              <span class=\"" + styles.title + "\">Welcome to SharePoint!</span>\n              <p class=\"" + styles.subTitle + "\">Customize SharePoint experiences using Web Parts.</p>\n              <p class=\"" + styles.description + "\">" + escape(this.properties.description) + "</p>\n              <a href=\"#\" id=\"democall\" class=\"" + styles.button + "\">\n                <span class=\"" + styles.label + "\">Learn more</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div>\n         <select id=\"CategoryDD\" >\n         </select>\n         <button id=\"dummyclick\">dummyclick</button>\n       </div>\n      <div id=\"products\">\n      \n      </div>\n      <div id=\"dummy\">\n     \n      </div>";
        this.getCategoryInfo();
        // this.EVentListener();
        // this.getProductsByCategory();
        this.getready();
    };
    ProdDispWebPart.prototype.getready = function () {
        var ParentSiteUrl = this.context.pageContext.web.absoluteUrl;
        jQuery(document).ready(function () {
            jQuery("#dummyclick").click(function () {
                alert("alertready");
                var selectedoption = jQuery("#CategoryDD").val();
                var callProdDisplay = jQuery.ajax({
                    url: ParentSiteUrl + "/_api/web/lists/getByTitle('Products')/items?$select=Title,Category/Title&$filter=(Category/Title eq '" + selectedoption + "')&$expand=Category/Title",
                    type: "GET",
                    dataType: "json",
                    headers: {
                        Accept: "application/json;odata=verbose"
                    }
                });
                var call = jQuery.when(callProdDisplay);
                call.done(function (data, textStatus, jqXHR) {
                    var message = jQuery("#products");
                    message.append("<br/>");
                    jQuery.each(data.d.results, function (index, value) {
                        message.append(value.Title);
                        message.append("<br/>");
                    });
                });
                call.fail(function (jqXHR, textStatus, errorThrown) {
                    var response = JSON.parse(jqXHR.responseText);
                    var message = response ? response.error.message.value : textStatus;
                    alert("Call failed. Error: " + message);
                });
            });
        });
    };
    ProdDispWebPart.prototype.EVentListener = function () {
        var _this = this;
        alert("event handler");
        document.getElementById("CategoryDD").addEventListener("change", function () { return _this.getProductsByCategory(); });
    };
    ProdDispWebPart.prototype.EventTesting = function () {
        alert("Testing");
    };
    ProdDispWebPart.prototype.getCategoryInfo = function () {
        // $("#democall").click(function(){
        //   alert("called");
        // });
        var _this = this;
        var html = '';
        if (Environment.type === EnvironmentType.Local) {
            this.domElement.querySelector('#dummy').innerHTML = "Sorry this does not work in local workbench";
        }
        else {
            this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getByTitle('Category')/items?$select=Title,ID", SPHttpClient.configurations.v1)
                .then(function (response) {
                response.json().then(function (listsObjects) {
                    listsObjects.value.forEach(function (listObject) {
                        html += "\n                    <option value=\"" + listObject.Title + "\">\n                        " + listObject.Title + "\n                    </option>";
                    });
                    _this.domElement.querySelector('#CategoryDD').innerHTML = html;
                });
            });
        }
    };
    ProdDispWebPart.prototype.getProductsByCategory = function () {
        var _this = this;
        var html = '';
        // var selectedoption="Clothing";
        var selectedoption = document.getElementById("CategoryDD")["value"];
        if (Environment.type === EnvironmentType.Local) {
            this.domElement.querySelector('#products').innerHTML = "Sorry this does not work in local workbench";
        }
        else {
            this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + ("/_api/web/lists/getByTitle('Products')/items?$select=Title,Category/Title&$filter=(Category/Title eq '" + selectedoption + "')&$expand=Category/Title"), SPHttpClient.configurations.v1)
                .then(function (response) {
                response.json().then(function (listsObjects) {
                    listsObjects.value.forEach(function (listObject) {
                        html += "\n            <ul>\n            <li>\n                <span class=\"ms-font-l\">" + listObject.Title + "</span>\n            </li>\n        </ul>";
                    });
                    _this.domElement.querySelector('#products').innerHTML = html;
                });
            });
        }
    };
    Object.defineProperty(ProdDispWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ProdDispWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ProdDispWebPart;
}(BaseClientSideWebPart));
export default ProdDispWebPart;
//# sourceMappingURL=ProdDispWebPart.js.map