/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

$(document).bind("mobileinit", function () {
    // Make your jQuery Mobile framework configuration changes here!
    $.mobile.allowCrossDomainPages = true;
});

//page init Home

$(document).on("pageinit", "#home", function (event) {
    $("#login-test").html('jQuery is running on phone gap');
    var loginState = localStorage.login;
    if (loginState == 'false') {
        $("#loginbtnContainer").show();
        $("#logoutbtnContainer").hide();

        $("#login-test").html('');
    } else if (loginState == 'true') {
        $("#loginbtnContainer").hide();
        $("#logoutbtnContainer").show();

        $("#login-test").html('Bienvenido');
    }


    $("#logoutBtn").click(function () {
        localStorage.login = "false";
        window.location.href = "index.html";
    });


});

$(document).on("pageinit", "#userlogin", function (event) {
    $("#phongapTest").html('jQuery is running on phone gap');

    // on click login ajax
    $("#login").click(function () {
        var email = $("#email").val();
        var password = $("#password").val();
        var url = "http://soloinnova.net/app_hotel/login.php";
        //console.log(fullname + email + password);
        //navigator.notification.beep(1);
        $.ajax({
                method: "POST",
                url: url,
                data: {email: email, password: password}
            })
            .done(function (data) {
                //$("#phongapTest").html(data);
                if (data == "login") {
                    /*$("#phongapTest").html(data);
                     navigator.notification.alert(
                     'Usuario creado exitosamente',  // message
                     alertDismissed,         // callback
                     'Oferta',            // title
                     'Cerrar'                  // buttonName
                     );*/
                    localStorage.login = "true";
                    localStorage.email = email;
                    window.location.href = "index.html";
                    navigator.notification.beep(2);
                    navigator.vibrate(3000);
                }
                else if (data == "exist") {
                    $("#phongapTest").html(data);
                    stop();
                }
                else if (data == "failed") {
                    $("#phongapTest").html(data);
                    stop();
                }
            });

    });


});



//Page Init paquetes

$(document).on("pageinit", "#ofertas", function (event) {
    $("#phongapTest").html('jQuery is running on phone gap');
    var content;
    var url;
    content  = '<ul data-role="listview">';
    content +='<li>';
    content +='<a href="#actividades-actividades">';
    content +='Actividades ';
    content +='<span class="ui-li-count">3</span>';
    content +='</a>';
    content +='</li>';
    content +='</ul>';

    //$("#content-tareas").html(content);

    url = 'http://soloinnova.net/app_hotel/controller/populatePaquetes.php';

    $.ajax({
            method: "POST",
            url: url,
            data: {email: '', password: ''}
        })
        .done(function (data) {
            console.log(data);
            $("#paquetesList").html(data);
            $( "#paquetesList" ).listview( "refresh" );
            $( "#paquetesList" ).trigger( "updatelayout");
        });


});



$(document).on("pageinit", "#ofertas", function (event) {
    $("#phongapTest1").html('jQuery is running on phone gap');
    var content;
    var url;
    content  = '<ul data-role="listview">';
    content +='<li>';
    content +='<a href="#actividades-actividades">';
    content +='Actividades ';
    content +='<span class="ui-li-count">3</span>';
    content +='</a>';
    content +='</li>';
    content +='</ul>';

    //$("#content-tareas").html(content);

    url = 'http://soloinnova.net/app_hotel/controller/populateOfertas.php';

    $.ajax({
            method: "POST",
            url: url,
            data: {email: '', password: ''}
        })
        .done(function (data) {
            console.log(data);
            $("#paquetesList1").html(data);
            $( "#paquetesList1" ).listview( "refresh" );
            $( "#paquetesList1" ).trigger( "updatelayout");
        });


});


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};
