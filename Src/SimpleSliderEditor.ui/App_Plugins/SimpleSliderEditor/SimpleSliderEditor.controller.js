angular.module("umbraco").controller("SimpleSliderEditor.controller",
    function ($scope, assetsService, $http, dialogService, mediaHelper) {

        var defaultItem = { name: "", summary: "", img: "", link: undefined };

        if (!$scope.model.value) {
            $scope.model.value = [];
        }

        if ($scope.model.value.length > 0) {
            $scope.selected = $scope.model.value[0];
        }

        $scope.select = function (index) {
            $scope.selected = index;
        };

        $scope.remove = function ($index) {
            $scope.model.value.splice($index, 1);
        };

        $scope.add = function () {
            $scope.model.value.splice($scope.model.value.length + 1, 0, angular.copy(defaultItem));
            $scope.selected = $scope.model.value[$scope.model.value.length-1];
        };

        $scope.pick = function (slide) {
            dialogService.mediaPicker({
                multiPicker: false,
                callback: function (data) {
                    slide.img = mediaHelper.resolveFile(data, false);
                }
            });
        };

        $scope.pickContent = function (slide) {
            dialogService.treePicker({
                multiPicker: false,
                section: "content",
                treeAlias: "content",
                callback: function (data) {
                    slide.link = { name: data.name, id: data.id };
                }
            });
        };

        $scope.sortableOptions = {
            handle: ".icon-navigation",
            axis: "y",
            delay: 150,
            distance: 5
        };

        // Load css asset
        assetsService.loadCss("/App_Plugins/SimpleSliderEditor/assets/SimpleSliderEditor.css");

});