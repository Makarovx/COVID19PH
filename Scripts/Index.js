
var defaultAPI = "https://corona-api.com/countries/PH";

var confirmed = "";
var confirmedToday = "";
var death = "";
var recovered = "";
var updatedDate = "";


$(document).ready(function () {


    loadLatestUpdate();


    setInterval(loadLatestUpdate, 5000);


    loadTimeline();

});


function loadLatestUpdate() {
    $.ajax({

        url: defaultAPI,
        type: 'GET',
        //data: {
        //    'numberOfWords': 10
        //},
        dataType: 'json',
        success: function (data) {
            data = data.data;


            confirmed = data.latest_data.confirmed;;
            confirmedToday = data.today.confirmed;
            death = data.latest_data.deaths;
            recovered = data.latest_data.recovered;

            $(".cnt1").text(confirmed);
            $(".cnt2").text(confirmedToday);
            $(".cnt3").text(death);
            $(".cnt4").text(recovered);

            var upDate = data.updated_at;
            updatedDate = new Date(upDate);

            $(".dateLabel").text("-" + updatedDate + "");



            //$('#content').html();
        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    });

    console.log("Request API 5 Seconds");


}


function loadTimeline() {

    
    $.ajax({

        url: defaultAPI,
        type: 'GET',
        //data: {
        //    'numberOfWords': 10
        //},
        dataType: 'json',
        success: function (data) {
            data = data.data;
            var c = "";

            for (var i = 0; i < data.timeline.length; i++) {

                var date = data.timeline[i].date;
                var confirmed = data.timeline[i].confirmed;
                var new_confirmed = data.timeline[i].new_confirmed;
                var deaths = data.timeline[i].deaths;
                var new_deaths = data.timeline[i].new_deaths;
                var recovered = data.timeline[i].recovered;
                var new_recovered = data.timeline[i].new_recovered;



                

                c += ' <tr>';
                c += ' <td><img src="https://www.countryflags.io/ph/flat/64.png" style="height:18px; margin-top:-2px;"></td>';
                c += ' <td>Philippines</td>';
                c += '  <td>'+date+'</td>';
                c += '   <td class="text-primary">' + confirmed + '</td>';
                c += '   <td>' + new_confirmed + '</td>';
                c += '   <td class="text-danger">' + deaths + '</td>';
                c += '   <td>' + new_deaths + '</td>';
                c += '   <td class="text-info">' + recovered + '</td>';
                c += '   <td>' + new_recovered + '</td>';
                c += '  </tr>';


            }

            //<th>Date</th>
            //          <th>Confirmed</th>
            //          <th>New Confirmed</th>
            //          <th>Deaths</th>
            //          <th>New Deaths</th>
            //          <th>Recovered</th>
            //          <th>New Recovered</th>

             $(".tbl_loadtimeline").html(c);

            //$('#content').html();
        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    });




   

}