var app = angular.module('studentApp', []);

app.controller('StudentController', function ($scope) {

    $scope.students = [
        "Arpan",
        "Rahul",
        "Priya"
    ];

    $scope.addStudent = function () {

        if ($scope.studentName) {

            $scope.students.push($scope.studentName);

            $scope.studentName = "";

        }

    };

});