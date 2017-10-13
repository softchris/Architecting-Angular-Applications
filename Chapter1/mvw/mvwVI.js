angular.module('app').controller('ctrl', function (service) {
    var that = this;
    service.getModelData.then(function (data) {
        that.data = data;
    }, function (err) {  // now of type BusinessException
        // display our nicely wrapped error in a suitable way
    });
});