Application.$controller("MainPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action on widgets/variables within this block */
    $scope.onPageReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
         * $scope.Variables.loggedInUser.getData()
         *
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. to get value of text widget named 'username' use following script
         * '$scope.Widgets.username.datavalue'
         */
    };

    $scope.askWatsonWatsonresponse = function($isolateScope) {
        var data = $isolateScope.watsonresponse;
        var output_text = _.get(data, 'output.text');
        console.log("success", output_text);
        var entities = _.get(data, 'entities');
        console.log("success", entities);

    };

}]);