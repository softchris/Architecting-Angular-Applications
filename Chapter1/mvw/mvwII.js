angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            controller: 'ctrl',
            controllerAs: 'vm',
            templateUrl: 'controller.html'
        });
    });