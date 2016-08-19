app.controller('signupCtrl', function($scope, SignupFactory){



	$scope.submit = function(signup){
		$scope.personInfo = {
		 email: signup.email,
		 password: signup.password,
		 firstName: signup.firstName,
		  lastName: signup.lastName	
		}
	}

	$scope.test = function(){
		console.log($scope.personInfo)
	}

})
