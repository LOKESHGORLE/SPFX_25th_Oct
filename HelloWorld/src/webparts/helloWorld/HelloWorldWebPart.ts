import { Version, Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';

import {IHelloWorldWebPartProps} from './loc/HelloWorldWebPartProperties';
import { SPHttpClientResponse, SPHttpClient } from '@microsoft/sp-http';
// export interface IHelloWorldWebPartProps {
//   description: string;
// }


export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.helloWorld }">
        <div class="${ styles.container }">
          <div class="${ styles.row }" style="background-color:${escape(this.properties.Colordropdown)};" >
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <p class="${styles.description}">Name</p>
              <input type="text">
              <select class="GenderDD">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
               </select>
               <a href="https://acuvateuk.sharepoint.com/sites/TrainingDevSite/_layouts/15/workbench.aspx" class="${ styles.button }">save</a>
              <a href="https://aka.ms/spfx" class="${ styles.button }">
               <span class="${ styles.label }">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="lists"></div>`;
      this.getListsInfo();

      //this.LoadColor(this.properties.Colordropdown);
  }
  private getListsInfo() {
    let html: string = '';
    if (Environment.type === EnvironmentType.Local) {
      this.domElement.querySelector('#lists').innerHTML = "Sorry this does not work in local workbench";
    } else {
    this.context.spHttpClient.get
    (
      this.context.pageContext.web.absoluteUrl + `/_api/web/lists?$filter=Hidden eq false`, 
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
          this.domElement.querySelector('#lists').innerHTML = html;
        });
      });        
    }
  }

  //private LoadColor(colour:string): void{    }
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
                }),
                PropertyPaneDropdown('Colordropdown',{
                  label:"Select the color",
                  options:[
                    {key:"#FF0000",text:"RED"},
                    {key:"#800000",text:"Maroon"},
                    {key:"#000000",text:"Black"}

                  ]
                                    
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
