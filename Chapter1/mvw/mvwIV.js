angular
    .module('app')
    .controller('ctrl', function ($http) {
        this.getModelData = function () {
            $http.get('/model').then(function (response) {
                var fetchedData = response.data;
                this.data = new Model(fetchedData.data, fetchedData.otherData)
            }, function (err) {
                console.log('handle the error')
            });
        }

        getModelData();
    });