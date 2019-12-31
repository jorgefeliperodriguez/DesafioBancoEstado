var app =angular.module("AppIceAndFire", ["ui.router"]); // (definiendo el modulo)modulo contexto a toda la aplicacion dependecias archivos no base de anfugular

// AppIceAndFire es padre de  la logica de la vista que la definimos en la html index.html raiz padre de otros modulos

app.config(function($stateProvider, $urlRouterProvider) { // parametros por defecto de la funcion

    $urlRouterProvider.otherwise("casas");  // cualquie url que no este controlada me lleva a sasas

    //estados como paginas que voy acceder
    $stateProvider
        .state('casas', {
            bindToController: true,
            controller: "casasController",
            controllerAs: "vm", //  este es el objeto del controler  que se hace referencia en el casas.html
            templateUrl: "casas.html", // template
            url: "/casa"
        })
        .state('personajes', {
            bindToController: true,
            controller: "personajeController",
            controllerAs: "vm",
            url: "/personaje",
            templateUrl: "personajes.html",
        });

});

/*
app.controller("casasController", casasController); // insertando este modulo a la variable app y me llama a la funcion casacontroller
casasController.$inject = ["$scope", "$http"];
function casasController($scope, $http){

    var vm = this;
    vm.http =$http;
  vm.actualizar();

}
casasController.prototype.actualizar=function(){
    var vm=this;
    vm.http.get("https://anapioficeandfire.com/api/houses?page=1&pageSize=100")
        .then(
            function(res){
                vm.casas = res.data;
            },
            function(err){
                console.log("error");
                console.log(err);
            }
        );
}
*/


app.controller("casasController", casasController);
casasController.$inject = ["$scope", "$http"];
function casasController($scope, $http){
    var vm = this;

    $http.get("https://anapioficeandfire.com/api/houses?page=1&pageSize=100")
        .then(
            function(res){ // res toda el codifo cabezera cuerto basura etx
                vm.casas = res.data;
            },
            function(err){
                console.log("error");
                console.log(err);
            }
        );
}



app.controller("personajeController", personajesController);
personajesController.$inject = ["$scope", "$http"];
function personajesController($scope, $http){
    var vm = this;

    $http.get("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=100")
        .then(
            function(res){ // res toda el codifo cabezera cuerto basura etx
                vm.personajes = res.data;
            },
            function(err){
                console.log("error");
                console.log(err);
            }
        );
}