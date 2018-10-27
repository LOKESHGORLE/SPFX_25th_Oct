import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import { SPComponentLoader } from '@microsoft/sp-loader';
//import  * as $ from 'jquery';
import 'jquery';
require('bootstrap');

import styles from './PollingAppWebPart.module.scss';
import * as strings from 'PollingAppWebPartStrings';

export interface IPollingAppWebPartProps {
  description: string;
}

export default class PollingAppWebPart extends BaseClientSideWebPart<IPollingAppWebPartProps> {

  public render(): void {
    let cssURL = "https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);

    this.domElement.innerHTML = `

    <div class="container-fluid">
 
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Venue</th>
          <th>Poll</th>
        </tr>
      </thead>
      <tbody id="PollTabBody">
       
      </tbody>
     </table>
      <div class="row-centered">
        <button type='button center-block' id='VoteSubmit'class='VoteSubmitClass'>Submit Vote</button>
      </div>
  </div>
  






     `;

      this.getReady();
  }

  private getReady(){
    var ParentSiteUrl = this.context.pageContext.web.absoluteUrl;

    $(document).ready(function(){
      alert("enetred jquery");
      
     
          var callAssignDisplayItems = jQuery.ajax({
              url: ParentSiteUrl + "/_api/web/lists/getByTitle('LokPollingVenues')/items?$select=Title,ID,Description",
              type: "GET",
              dataType: "json",
              headers: {
                Accept: "application/json;odata=verbose"
              }
            });
  
          var call = jQuery.when(callAssignDisplayItems);
            call.done(function (data, textStatus, jqXHR) {
              var  PollTabbody= jQuery("#PollTabBody");
            var VoteItemCreation;
            var ItemClass= "btn btn-primary VotePollbut";
              jQuery.each(data.d.results, function (index, value) {

                //  if(index=='0'){ItemClass="item active"}else{ItemClass="item"};
          
          VoteItemCreation= "<tr><td>"+value.Description+"</td><td><button type='button' id='"+value.ID+"'class='"+ItemClass+"'>"+value.Title+"</button></td></tr>";    
           
           PollTabbody.append(VoteItemCreation);
  
            });
            });
  
          call.fail(function (jqXHR, textStatus, errorThrown) {
              var response = JSON.parse(jqXHR.responseText);
              var message = response ? response.error.message.value : textStatus;
              alert("Call failed. Error: " + message);
            });
    });
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
