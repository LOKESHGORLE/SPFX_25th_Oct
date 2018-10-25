import { Version, EnvironmentType, Environment } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jQuery from 'jquery';

import styles from './ProdDispWebPart.module.scss';
import * as strings from 'ProdDispWebPartStrings';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

export interface IProdDispWebPartProps {
  description: string;
}

export default class ProdDispWebPart extends BaseClientSideWebPart<IProdDispWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.prodDisp}">
        <div class="${ styles.container}">
          <div class="${ styles.row}">
            <div class="${ styles.column}">
              <span class="${ styles.title}">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle}">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description}">${escape(this.properties.description)}</p>
              <a href="#" id="democall" class="${ styles.button}">
                <span class="${ styles.label}">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
         <select id="CategoryDD" >
         </select>
         <button id="dummyclick">dummyclick</button>
       </div>
      <div id="products">
      
      </div>
      <div id="dummy">
     
      </div>`;
    this.getCategoryInfo();
    // this.EVentListener();
    // this.getProductsByCategory();
    this.getready();


  }

  private getready() {
    var ParentSiteUrl= this.context.pageContext.web.absoluteUrl;

    jQuery(document).ready(function () {
      jQuery("#dummyclick").click(function () {
        alert("alertready");
        var selectedoption= jQuery("#CategoryDD").val();
        var callProdDisplay= jQuery.ajax({
          url:ParentSiteUrl+"/_api/web/lists/getByTitle('Products')/items?$select=Title,Category/Title&$filter=(Category/Title eq '"+selectedoption+"')&$expand=Category/Title",
          type: "GET",
          dataType: "json",
           headers: {
            Accept: "application/json;odata=verbose"
        }
        });
        var call= jQuery.when(callProdDisplay);
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
  }

  private EVentListener() {
    alert("event handler");
    document.getElementById("CategoryDD").addEventListener("change", () => this.getProductsByCategory());
  }

  private EventTesting() {
    alert("Testing");
  }

  private getCategoryInfo() {

    // $("#democall").click(function(){
    //   alert("called");
    // });

    let html: string = '';
    if (Environment.type === EnvironmentType.Local) {
      this.domElement.querySelector('#dummy').innerHTML = "Sorry this does not work in local workbench";
    } else {
      this.context.spHttpClient.get
        (
        this.context.pageContext.web.absoluteUrl + `/_api/web/lists/getByTitle('Category')/items?$select=Title,ID`,
        SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) => {
          response.json().then((listsObjects: any) => {
            listsObjects.value.forEach(listObject => {
              html += `
                    <option value="${listObject.Title}">
                        ${listObject.Title}
                    </option>`;
            });
            this.domElement.querySelector('#CategoryDD').innerHTML = html;
          });
        });
    }
  }

  private getProductsByCategory() {

    let html: string = '';
    // var selectedoption="Clothing";
    var selectedoption = document.getElementById("CategoryDD")["value"];
    if (Environment.type === EnvironmentType.Local) {
      this.domElement.querySelector('#products').innerHTML = "Sorry this does not work in local workbench";
    } else {
      this.context.spHttpClient.get
        (
        this.context.pageContext.web.absoluteUrl + `/_api/web/lists/getByTitle('Products')/items?$select=Title,Category/Title&$filter=(Category/Title eq '${selectedoption}')&$expand=Category/Title`,
        SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) => {
          response.json().then((listsObjects: any) => {
            listsObjects.value.forEach(listObject => {
              html += `
            <ul>
            <li>
                <span class="ms-font-l">${listObject.Title}</span>
            </li>
        </ul>`;
            });
            this.domElement.querySelector('#products').innerHTML = html;
          });
        });
    }
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
