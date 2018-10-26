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
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import { SPComponentLoader } from '@microsoft/sp-loader';
import * as jQuery from 'jquery';
//import 'bootstrap';
require('bootstrap');
import styles from './JqueryPostWebPart.module.scss';
import * as strings from 'JqueryPostWebPartStrings';
var JqueryPostWebPart = (function (_super) {
    __extends(JqueryPostWebPart, _super);
    function JqueryPostWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JqueryPostWebPart.prototype.render = function () {
        var cssURL = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
        SPComponentLoader.loadCss(cssURL);
        this.domElement.innerHTML = "\n    \n      <div class=\"" + styles.jqueryPost + "\">\n        <div class=\"" + styles.container + "\">\n          <div class=\"" + styles.row + "\">\n            \n            \n              \n          <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n          <!-- Indicators -->\n          <ul class=\"carousel-indicators\">\n            <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n            <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n          </ul>\n          \n          <!-- The slideshow -->\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <p>1slid</p>\n            </div>\n            <div class=\"carousel-item \">\n            <p>2slid</p>\n            </div>\n            <div class=\"carousel-item\">\n            <p>3slid</p>\n            </div>\n          </div>\n          \n        \n        </div>\n\n\n\n\n\n\n\n\n           </div>        \n        </div>\n      </div>";
        jQuery(document).ready(function () {
        });
    };
    Object.defineProperty(JqueryPostWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    JqueryPostWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return JqueryPostWebPart;
}(BaseClientSideWebPart));
export default JqueryPostWebPart;
//# sourceMappingURL=JqueryPostWebPart.js.map