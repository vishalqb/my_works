//app.run(["$rootScope", "$state","users", function ($rootScope, $state, users) {
//    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
//        console.log("entered");
//       if (users.loggedin === null) {
//           console.log(fromState);
//           event.preventDefault();
//           $state.go("login");
//        } else {
//           $state.go("home");
//       }
//    });
//}]);