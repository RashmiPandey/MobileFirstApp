
/* JavaScript content from app/js/controllers/First_time_setup.js in folder common */
/**
 *
 * @author Schubert Generated Code</br>
 * Date Created: </br>
 * @since  </br>
   build:   </p>
 *
 * code was generated by the Schubert System </br>
 * Schubert system Copyright - NewPortBay LLC copy_right_range</br>
 * The generated code is free to use by anyone</p>
 *
 *
 *
*/

app.controller("First_time_setup", [ '$scope', '$rootScope', '$location', '$window', '$q', '$http',
				    function( $scope, $rootScope, $location, $window, $q, $http) {

		$scope.People_test = {
		_Id: '',
		_First_name : '', 
		_Last_name : '', 
		_Organization_id : ''
		};





		function handle_search_result(search_result){
			$scope.items = search_result;
		}

}]);


