import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';


import { SPComponentLoader } from '@microsoft/sp-loader';
import  'jquery';
require('bootstrap');

import styles from './BootStrapExampleWebPart.module.scss';
import * as strings from 'BootStrapExampleWebPartStrings';

export interface IBootStrapExampleWebPartProps {
  description: string;
}

export default class BootStrapExampleWebPart extends BaseClientSideWebPart<IBootStrapExampleWebPartProps> {

  public render(): void {
    let cssURL = "https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);


    this.domElement.innerHTML = `
    <div class="container">
    
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
      </ol>
  
      <!-- Wrapper for slides -->
      <div class="carousel-inner" id="CarousalInner">
        
      <!-- Left and right controls -->
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

  
  <div class="modal fade" id="myModal" >
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        
                   
          <div class="modal-body" id="ModalBody">
            
            </div>
        
          
       
        <div class="modal-footer" height:10px;>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
`;
      this.getready();
  }

  private getready() {

    var ParentSiteUrl = this.context.pageContext.web.absoluteUrl;


    jQuery(document).ready(function () {
      //jQuery("#dummyclick").click(function () {
       
        
        var callAssignDisplayItems = jQuery.ajax({
          url: ParentSiteUrl + "/_api/web/lists/getByTitle('Managers Speaks')/items?$select=ImageUrl,ID,Subject,Description&$orderby=Created desc&$top=5",
          type: "GET",
          dataType: "json",
          headers: {
            Accept: "application/json;odata=verbose"
          }
        });
        var call = jQuery.when(callAssignDisplayItems);
        call.done(function (data, textStatus, jqXHR) {
          var  Carousalinner= jQuery("#CarousalInner");
         var SlideCreation;
         var ItemClass;
          jQuery.each(data.d.results, function (index, value) {
           if(index=='0'){ItemClass="item active"}else{ItemClass="item"};
            SlideCreation= "<div class='"+ItemClass+"'><img src='"+value.ImageUrl+"' alt='Oops Its Our Fault' style='width:100%;'><div class='carousel-caption'><h3>"+value.Subject+"</h3><button type='button' class='ModalBt' id='"+value.ID+"' data-toggle='modal' data-target='#myModal'>More</button></div>";
            Carousalinner.append(SlideCreation);
            
          });
        });
        call.fail(function (jqXHR, textStatus, errorThrown) {
          var response = JSON.parse(jqXHR.responseText);
          var message = response ? response.error.message.value : textStatus;
          alert("Call failed. Error: " + message);
        });
      //});
        
      $(document).on("click", ".ModalBt" , function() {
          var BtnID= $(this).attr('id');
          
          ModalById(BtnID);
          
          
       });
      
    });
   
    function ModalById(id){
      
      var callGetItemById = jQuery.ajax({
        url: ParentSiteUrl + "/_api/web/lists/getByTitle('Managers Speaks')/GetItemById("+id+")?$select=ImageUrl,ID,Subject,Description",
        type: "GET",
        dataType: "json",
        headers: {
          Accept: "application/json;odata=verbose"
        }
      });
      var call = jQuery.when(callGetItemById);
      call.done(function (data, textStatus, jqXHR) {
        
           var  Modalbody= jQuery("#ModalBody");
           Modalbody.empty();
        var SlideCreation="<div class='table'><div class='row'><div class='col-sm-8'><img src='"+data.d.ImageUrl+"' alt='Chicago' style='width:70%;'/> </div><div class='col-sm-2'>"+data.d.Subject+" </div></div><div class='row'><p>"+data.d.Description+"</p></div></div>";
        Modalbody.append(SlideCreation);
      //  var ItemClass;
      //   jQuery.each(data.d.results, function (index, value) {
      //    if(index=='0'){ItemClass="item active"}else{ItemClass="item"};
      //     SlideCreation= "<div class='"+ItemClass+"'><img src='"+value.ImageUrl+"' alt='Oops Its Our Fault' style='width:100%;'><div class='carousel-caption'><h3>"+value.Subject+"</h3><button type='button' class='ModalBt' id='"+value.ID+"' data-toggle='modal' data-target='#myModal'>More</button></div>";
      //     
          
        // });
      });
      call.fail(function (jqXHR, textStatus, errorThrown) {
        var response = JSON.parse(jqXHR.responseText);
        var message = response ? response.error.message.value : textStatus;
        alert("Call failed. Error: " + message);
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
