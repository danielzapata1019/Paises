/**
 * Created by Daniel on 13/03/2016.
 */

"use strict";

$.ajax("https://restcountries.eu/rest/v1/all")
    .done(function(info){
        for(var i=0;i<info.length;i++){
            var data=info[i];
            console.log(data);
            $('.list-paises').append(''+
                '<div class="col-md-4">'+
                '<div class="country"> '+
                '<div class="flag">'+
                '<img src="assets/flags/'+ data.alpha2Code +'.png"/> ' +
                '</div>'+
                '<div class="info"> '+
                '<div>Nombre:<span>'+data.name+'</span></div>'+
                '<div>Capital:<span>'+data.capital+'</span></div>'+
                '<div>Capital:<span>'+data.population+'</span></div>'+
                '</div> ' +
                '</div> ' +
                '</div>');
        }
    })
    .fail(function(err) {
        console.log(err);
    });