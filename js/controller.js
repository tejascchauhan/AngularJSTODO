app.controller("todoController", function ($scope, $filter) {
    $scope.task = "";
    $scope.tasks = [];

    $scope.$watch('tasks', function () {
        $scope.remainingCount = $filter('filter')($scope.tasks, { status: false }).length;
    }, true);

    $scope.addTask = function () {
        let taskObj = { title: $scope.task, status: false };
        $scope.tasks.push(taskObj);
        $scope.task = "";
    };

    $scope.removeTask = function (idx) {
        $scope.tasks.splice(idx, 1);
    };

    $scope.clearCompleted = function () {
        $scope.tasks = $scope.tasks.filter(function (task) {
            return !task.status;
        });
    };

    $scope.clearAll = function () {
        $scope.tasks = [];
    };
});

app.filter('capitalize', function () {
    return function (input) {
        return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
    }
});