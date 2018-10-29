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
//import 'charts';
import {GoogleCharts} from 'google-charts';
//import Chart from 'chart.js';
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
  <div id="PieChart1">
   
  </div>
  <div id="PieChart">
    <canvas id="pie-chart" width="30%" height="30%"></canvas>
  </div>
  






     `;
     
    this.getReady();
    //this.drawChart();
    /*-------------------to get the id of the user ///// failed ////--------  */
    var a;
    var b;

    pnp.sp.web.lists.getByTitle('LokPollingVenues').items.select('Title, ID').filter(`Title eq 'London'`)
      .get().then((items: any[]) => {
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







  /*
  private drawChart() {
    alert("entering charts");
    var data = Google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 8],
    ['Eat', 2],
    ['TV', 4],
    ['Gym', 2],
    ['Sleep', 8]
  ]);
  
    // Optional; add a title and set the width and height of the chart
    var options = {'title':'My Average Day', 'width':550, 'height':400};
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new Google.visualization.PieChart(document.getElementById('PieChart1'));
    chart.draw(data, options);
  }*/
  /*------------------ calling the document ready and all the jquery-------------    */
  private getReady() {
    var ParentSiteUrl = this.context.pageContext.web.absoluteUrl;
    var SelectedBtnID;
    var PreviousSelctedOptionID;
    var CurrUseremail = this.context.pageContext.user.email;
    var CurrUserIdInList;
    var ArrayLocation =[];
    var ArrayLocationVotes=[[]];
    var PieChartDataLegends=[['Location','Votes'] ];
    var PieChartData;
    //alert(CurrUseremail);
    
    $(document).ready(function () {
      /************************Pie Chart*****************
      new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
          labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
          datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
    });

 ***********************Pie Chart*****************/
      alert("enetred jquery");
      //ArrayLocation[0]="arra element";
     // alert (ArrayLocation[0]);
     // ArrayLocationVotes[0]=["london",1];
     // alert(ArrayLocationVotes[0][0]);


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
          if (value.MemberName == CurrUseremail) {
            CurrUserIdInList = value.ID;
            PreviousSelctedOptionID = value.PlaceOfInterest.ID;
            alert(PreviousSelctedOptionID);

            CreateVenueButtons(PreviousSelctedOptionID);//calling button creation function
          }
          
        });
        
      });
      call.fail(function (jqXHR, textStatus, errorThrown) {
        var response = JSON.parse(jqXHR.responseText);
        var message = response ? response.error.message.value : textStatus;
        alert("Call failed. Error: " + message);
      });

      /**------------ creating HTML element to show VENUE---------------------- */
      function CreateVenueButtons(PreviousSelctedOptionID) {
        var callAssignDisplayItems = jQuery.ajax({
          url: ParentSiteUrl + "/_api/web/lists/getByTitle('LokPollingVenues')/items?$select=Title,ID,Description,VoteCount",
          type: "GET",
          dataType: "json",
          headers: {
            Accept: "application/json;odata=verbose"
          }
        });

        var call = jQuery.when(callAssignDisplayItems);
        call.done(function (data, textStatus, jqXHR) {
          var PollTabbody = jQuery("#PollTabBody");
          var VoteItemCreation;
          var ItemClass = "";
          jQuery.each(data.d.results, function (index, value) {
            ArrayLocation[index]=value.Title;
            ArrayLocationVotes[index]=[value.Title,value.VoteCount];
           
      
            /**-------------------------creating HTML TAG----------------------------- */
            VoteItemCreation = "<tr><td>" + value.Description + "</td><td><button type='button' id='" + value.ID + "'class='btn btn-primary VotePollbut " + ItemClass + "'>" + value.Title + "</button></td></tr>";

            PollTabbody.append(VoteItemCreation);
            
          });
          GoogleCharts.load(drawChart);
          
          /**-------- Enabling Previous Vote and disabling remaining------ */
          if (PreviousSelctedOptionID!=0) {
            $('.VotePollbut').prop('disabled', true);
            $("#" + PreviousSelctedOptionID).addClass("active").prop('disabled', false);
          }
        }
        );


        call.fail(function (jqXHR, textStatus, errorThrown) {
          var response = JSON.parse(jqXHR.responseText);
          var message = response ? response.error.message.value : textStatus;
          alert("Call failed. Error: " + message);
        });


      }
      /**--------- ends the HTML creation for Venues  --------------------*/
      
 function PieChartDraw(){

  var callAssignDisplayItems = jQuery.ajax({
    url: ParentSiteUrl + "/_api/web/lists/getByTitle('LokPollingVenues')/items?$select=Title,ID,Description,VoteCount",
    type: "GET",
    dataType: "json",
    headers: {
      Accept: "application/json;odata=verbose"
    }
  });

  var call = jQuery.when(callAssignDisplayItems);
  call.done(function (data, textStatus, jqXHR) {
    
    jQuery.each(data.d.results, function (index, value) {
      
     
      
    
    });
    /**-------- take data for pie chart      also cal pie cghart------ */
    
  }
  );


  call.fail(function (jqXHR, textStatus, errorThrown) {
    var response = JSON.parse(jqXHR.responseText);
    var message = response ? response.error.message.value : textStatus;
    alert("Call failed. Error: " + message);
  });


 }




function drawChart() {
  
    PieChartData=PieChartDataLegends;
    ArrayLocationVotes.forEach(element => {
      PieChartData.push(element);
    }); 
    // Standard google charts functionality is available as GoogleCharts.api after load
    const data = GoogleCharts.api.visualization.arrayToDataTable(PieChartData
        // [ 
        //  ['Chart thing', 'Chart amount'],
        //  ['Lorem ipsum', 60],
        //  ['Dolor sit', 22],
        //  ['Sit amet', 18]
        // ]
    );
    const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('PieChart1'));
    pie_1_chart.draw(data);
    
}
      






      /**------- Chart Creation------------------------------------------------------ */
      //ParentSiteUrl + "/_api/web/lists/getByTitle('LokPollingMembers')/items?$select=MemberName,ID,PlaceOfInterest/ID&$expand=PlaceOfInterest/ID"
      /* var dataURL = ParentSiteUrl + "/_api/Lists/getbyTitle('LokPollingMembers')/Items?$top=50&$select=Title,PlaceOfInterest/ID&$expand=PlaceOfInterest/ID";
       $.getJSON(dataURL, function (data) {
           var dataFromSharepointList = data.value;
 
           drawChart(dataFromSharepointList, "PieChart")
       });
       function drawChart(ChartData, DivID) {
           google.load("visualization", "1.0", { packages: ["bar"] });
           google.charts.setOnLoadCallback(draw);
           function draw() {
               var data = new google.visualization.DataTable();
               data.addColumn('string', 'Title');
               data.addColumn('string', 'PlaceOfInterest/ID');
               $.each(ChartData, function (key, value) {
                   data.addRow([value.Title, value.PlaceOfInterest.ID]);
               });
               var chart = new google.visualization.Bar(document.getElementById(DivID));
               chart.draw(data, { allowHtml: true });
           }
       }*/


      /**------- rnds chart */

    });

    /**----------- enable and disable by only voted button-------------  */
    $(document).on("click", ".btn-primary", function () {
      SelectedBtnID = 0;
      var clicked = $(this);
      if (clicked.hasClass('active')) {
        $('.VotePollbut').prop('disabled', false);
        clicked.removeClass('active');
      } else {
        $('.VotePollbut').prop('disabled', true);
        clicked.prop('disabled', false).addClass("active");
      }



    });



    /**------- Submit Vote clicked,.. list has to be updated------------- */
    $(document).on("click", "#VoteSubmit", function () {
      UpdateLists();

      GoogleCharts.load(drawChart1);
 
     function drawChart1() {
      PieChartData=[[]];
      var PieChartDataLegends=[['Location','Votes'] ];
      PieChartData=PieChartDataLegends;
      ArrayLocationVotes.forEach(element => {
        PieChartData.push(element);
      }); 
      
         // Standard google charts functionality is available as GoogleCharts.api after load
         const data = GoogleCharts.api.visualization.arrayToDataTable(PieChartData);
             //[ ['Chart thing', 'Chart amount'],
             // ['Lorem ipsum', 60],
             // ['Dolor sit', 22],
             // ['Sit amet', 18]
             //]
         
         const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('PieChart1'));
         pie_1_chart.draw(data);
     }
     PieChartData=[[]];
    });
    function UpdateLists() {
      $('#PollTabBody .active').each(function () {
        /**-------------------------Id Of the active button iscollected------------  */
        SelectedBtnID = $(this).attr('id');
        if (isEmpty(SelectedBtnID)) {
          alert("12")
        } {
          alert(SelectedBtnID);
        }


      });
            if(SelectedBtnID!=PreviousSelctedOptionID){
            /* increase the vote count.... write function to post in venues votecount*/ 
            var OldLocationIndex=PreviousSelctedOptionID-1;
            var OldVoteCount=ArrayLocationVotes[OldLocationIndex][1]-1;
            

            var NewLocationIndex=SelectedBtnID-1;
            var NewVoteCount=ArrayLocationVotes[NewLocationIndex][1]+1;

            /**----------- Members list updated----------------- */
            pnp.sp.web.lists.getByTitle("LokPollingVenues").items.getById(PreviousSelctedOptionID).update({
              VoteCount: OldVoteCount
              });


            pnp.sp.web.lists.getByTitle("LokPollingVenues").items.getById(SelectedBtnID).update({
            VoteCount: NewVoteCount
            });
            /**----------- Members list updated----------------- */
            pnp.sp.web.lists.getByTitle("LokPollingMembers").items.getById(CurrUserIdInList).update({
              PlaceOfInterestId: SelectedBtnID
            });

            
            

           
 
            }
     /********* sending two votes, the newly selected button must be Prev Selected for second transaction */
     ArrayLocationVotes[OldLocationIndex][1]=OldVoteCount;      
     ArrayLocationVotes[NewLocationIndex][1]=NewVoteCount;

     PreviousSelctedOptionID=SelectedBtnID;

      
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
