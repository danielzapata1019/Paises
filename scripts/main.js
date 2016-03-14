/**
 * Created by Daniel on 13/03/2016.
 */

"use strict";

console.log("ya tengo el main");

var tal = "hola";
console.log(tal);
var modal=document.getElementById('myModal');
//https://restcountries.eu/rest/v1/alpha/co

$.ajax( "https://restcountries.eu/rest/v1/all" )
    .done(function(info) {
        for(var i=0; i< info.length; i++) {
            var datos = info[i];
            console.log(datos);
            $('.list-countries').append('' +
                '<div class="col-md-4">'+
                '<div class="country">'+
                '<div class="flag"> ' +
                '<img src="assets/flags/'+ datos.alpha2Code +'.png" onclick="masInfo()"/> ' +
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

function masInfo() {
    $('#myModal').modal()                      // initialized with defaults
    $('#myModal').modal({ keyboard: false })   // initialized with no keyboard
    $('#myModal').modal('show')
}