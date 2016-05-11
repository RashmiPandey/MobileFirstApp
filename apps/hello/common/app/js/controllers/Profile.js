/**
 * Created by Henrikh on 1/20/16.
 */

app.controller('ProfileController', ['$scope', '$state', '$http', '$ionicPopup', 'RestURL', 'People_testId', 'Settings',
  function ($scope, $state, $http, $ionicPopup, RestURL, People_testId, Settings) {

    var self = $scope;
    console.log(Settings);
    self.firstName = Settings.global.firstName;

  }]);
