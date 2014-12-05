angular.module("umbraco").controller("GridInjector.controller",
    function ($scope, assetsService) {

        if ($scope.model.config && $scope.model.config.cssBackendPath && $scope.model.config.cssBackendPath != "") {
            assetsService.loadCss($scope.model.config.cssBackendPath);
        }

    });