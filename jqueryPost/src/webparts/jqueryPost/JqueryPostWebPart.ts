import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import { SPComponentLoader } from '@microsoft/sp-loader';
import * as jQuery from 'jquery';
//import 'bootstrap';
require('bootstrap');

import styles from './JqueryPostWebPart.module.scss';
import * as strings from 'JqueryPostWebPartStrings';

export interface IJqueryPostWebPartProps {
  description: string;
}

export default class JqueryPostWebPart extends BaseClientSideWebPart<IJqueryPostWebPartProps> {

  public render(): void {
    let cssURL = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);

    this.domElement.innerHTML = `
    
      <div class="${ styles.jqueryPost}">
        <div class="${ styles.container}">
          <div class="${ styles.row}">
            
            
              
          <div id="demo" class="carousel slide" data-ride="carousel">

          <!-- Indicators -->
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
          
          <!-- The slideshow -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <p>1slid</p>
            </div>
            <div class="carousel-item ">
            <p>2slid</p>
            </div>
            <div class="carousel-item">
            <p>3slid</p>
            </div>
          </div>
          
        
        </div>








           </div>        
        </div>
      </div>`;

    jQuery(document).ready(function () {

    })
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
