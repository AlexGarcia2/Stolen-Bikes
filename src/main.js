import { BikePromise } from './../src/bike-Promise';
import { BikeParse } from './../src/dataParse';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {

    let bikePromiseObject = new BikePromise();
    let promise = bikePromiseObject.stolenInfo();

    promise.then(function(response) {
      let body = JSON.parse(response);
      keyParse(body)
      // let stolenBikeData= body.bikes;
      console.log(body)
      // $("#stuff").text(`${stolenBikeData}`);
    }, function(error){
      $(".error").text(`There is an error processing your request : ${error.message}`);
    });
    function keyParse (body) {

      let summary = "";
      for (let i = 0; i < body.bikes.length; i++) {
        summary += `<div class="bike"><p>title: ${body.bikes[i].title}<p/></div>`;
      }
      $('#stuff').append(summary);
    }
  // });
});
