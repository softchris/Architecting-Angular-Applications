
angular
    .module('app')
    .factory('Model', function () {
        function Model(data, otherData) {
            this.data = data;
            this.otherData = otherData;
        }

        return Model;
    });