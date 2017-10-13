angular
    .module('app', [])
    .controller('ctrl', function () {
        this.data = 'some data';
        this.action = function () { console.log('action') };
    });