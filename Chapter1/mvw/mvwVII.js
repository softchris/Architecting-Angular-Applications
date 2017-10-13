angular
    .module('app')
    .service('service', function ($http) {
        this.getModelData = function () {
            return $http.get('/model').then(function (response) {
                var fetchedData = response.data;
                return new Model(fetchedData.data, fetchedData.otherData)
            }, function (err) {
                return new BusinessException(err);
            });
        }

        this.save = function (model) {
            return $http
                .post('/model', model)
                .then(
                response => new Model(response),
                err => new BusinessException(response)
                );
        }
    });