import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape, isEmpty } from '@microsoft/sp-lodash-subset';

import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import pnp from 'sp-pnp-js';
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
  /*-------------------to get the id of the user ///// failed ////--------  */  
var a;
var b;
      
      pnp.sp.web.lists.getByTitle('LokPollingVenues').items.select('Title, ID').filter(`Title eq 'London'`)
      .get() .then((items: any[]) => {
        console.log(items);
    });
  //.then(response => {
  //   console.log(response.map(field => {
  //     return {
  //       Title: field.Title,
	// ID: field.ID
  //     };
  //   }));
  //})

  }
/*------------------ calling the document ready and all the jquery-------------    */
  private getReady(){
    var ParentSiteUrl = this.context.pageContext.web.absoluteUrl;
    var SelectedBtnID;
    var CurrUseremail=this.context.pageContext.user.email;
    var CurrUserIdInList;
         //alert(CurrUseremail);

    $(document).ready(function(){
      alert("enetred jquery");  
      
      /**------ verifying User in the list ------------------ */

      var callAssignDisplayItems = jQuery.ajax({
        url: ParentSiteUrl + "/_api/web/lists/getByTitle('LokPollingMembers')/items?$select=MemberName,ID,PlaceOfInterest/ID&$expand=PlaceOfInterest/ID",
        type: "GET",
        dataType: "json",
        headers: {
          Accept: "application/json;odata=verbose"
        }
      });

    var call = jQuery.when(callAssignDisplayItems);
      call.done(function (data, textStatus, jqXHR) {
        
        jQuery.each(data.d.results, function (index, value) {

         //alert(value.MemberName+"     "+value.PlaceOfInterest.ID);
         /**---------- verifying if the user is present in the list or not------------- */
          if(value.MemberName==CurrUseremail){
            CurrUserIdInList=value.ID;
            SelectedBtnID=value.PlaceOfInterest.ID;
            CreateVenueButtons(SelectedBtnID);//calling button creation function
          }

      });
      });
      call.fail(function (jqXHR, textStatus, errorThrown) {
        var response = JSON.parse(jqXHR.responseText);
        var message = response ? response.error.message.value : textStatus;
        alert("Call failed. Error: " + message);
      });
      
      /**------------ creating HTML element to show VENUE---------------------- */
      function CreateVenueButtons(SelectedBtnID){
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
            var ItemClass= "";
              jQuery.each(data.d.results, function (index, value) {

                  //if(value.ID==SelectedBtnID){ItemClass="active"}else{ItemClass=""};
          /**-------------------------creating HTML TAG----------------------------- */
          VoteItemCreation= "<tr><td>"+value.Description+"</td><td><button type='button' id='"+value.ID+"'class='btn btn-primary VotePollbut "+ItemClass+"'>"+value.Title+"</button></td></tr>";    
           
           PollTabbody.append(VoteItemCreation);
  
            });
            });
           
  
          call.fail(function (jqXHR, textStatus, errorThrown) {
              var response = JSON.parse(jqXHR.responseText);
              var message = response ? response.error.message.value : textStatus;
              alert("Call failed. Error: " + message);
            });
          }/**--------- ends the HTML creation for Venues  --------------------*/
         
          
    });
    $(document).on("click", ".btn-primary" , function() {
      SelectedBtnID=0;
      var clicked = $(this);
      if(clicked.hasClass('active')){
        $('.VotePollbut').prop('disabled', false);
      clicked.removeClass('active');
      }else{
        $('.VotePollbut').prop('disabled', true);
        clicked.prop('disabled', false).addClass("active");
      }
      

      
    });

    
   
    /**------- Submit Vote clicked,.. list has to be updated------------- */
    $(document).on("click", "#VoteSubmit" , function() {
      UpdateItem(SelectedBtnID);
    });
    function UpdateItem(SelectedBtnID)
    { 
      $('#PollTabBody .active').each(function(){
        /**-------------------------Id Of the active button iscollected------------  */
        SelectedBtnID= $(this).attr('id'); 
        if(isEmpty(SelectedBtnID) ){
          alert("12")
        }{
          alert(SelectedBtnID);
        }
        
        
    });
      /**----------- list updated----------------- */
        pnp.sp.web.lists.getByTitle("LokPollingMembers").items.getById(CurrUserIdInList).update({
         PlaceOfInterestId : SelectedBtnID   });
        
    }
   
  }
 
  
 
  /* ------------ getting user details
  alert(email);
public getUserId(email: string): Promise<number> {
return pnp.sp.site.rootWeb.ensureUser(email).then(result => {
return result.data.Id;
});
} */

  
  



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
