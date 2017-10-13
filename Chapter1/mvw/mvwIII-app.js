function Model(data, otherData) {
    this.data = data;
    this.otherData = otherData;
}

angular
    .module('app')
    .controller('ctrl', function (Model) {
        this.data = new Model('some data', 11)
    });