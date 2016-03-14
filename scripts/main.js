/**
 * Created by Daniel on 13/03/2016.
 */

"use strict";

var country=[];

//https://restcountries.eu/rest/v1/alpha/co

$.ajax( "https://restcountries.eu/rest/v1/all" )
    .done(function(info) {
        for(var i=0; i< info.length; i++) {
            var datos = info[i];
            country=info[i];
            var posicion;
            //console.log(country);
            $('.list-countries').append('' +
                '<div class="col-md-4">'+
                '<div class="country">'+
                '<div class="flag"> ' +
                '<img src="assets/flags/'+ datos.alpha2Code +'.png" onclick="masInfo('+datos.alpha2Code+');"/> ' +
                '</div> ' +
                '<div class="info"> ' +
                '<div>Nombre: <span>' + datos.name + '</span></div> ' +
                '<div>Capital: <span>' + datos.capital + '</span></div> ' +
                '<div>Poblacion: <span>' + datos.population + '</span></div> ' +
                '</div> ' +
                '</div> ' +
                '</div>');
        }
    })
    .fail(function(err) {
        console.log(err);
    });

function masInfo(code) {
    $('#myModal').modal()                      // initialized with defaults
    $('#myModal').modal({ keyboard: false })   // initialized with no keyboard
    $('#myModal').modal('show')
    console.log(code);

    for(var j=0; j < country.length ; j++){
        if(country.alpha2Code==code){
            console.log(country[j]);
            $('.detail').append('' +
                '<div class="col-sm-6 small">'+
                '<div>Region: <span>' + country.region + '</span></div>'+
                '<div>Subregion: <span>' + country.subregion + '</span></div>'+
                '<div>Area:<span>' + country.area + '</span></div>'+
                '</div>'+
                '<div class="col-sm-6 small">'+
                ' <div>Idiomas: <span>' + country.languages + '</span></div>'+
                '<div>Codigo Postal: <span>' + country.callingCodes + '</span></div>'+
                '<div>Timezones:<span>' + country.timezones + '</span></div>'+
                '</div>');
        }else {
            $('.detail').append('' +
                '<div class="col-sm-12 small text-center">'+
                '<div>No se ha podido encontrar mas información sobre el pais seleccionado</div>'
            );
        }


    }

}










