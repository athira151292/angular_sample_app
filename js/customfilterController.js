var app = angular.module("customApp",[]);
app.filter("myFormat",function() {
	return function(x) {
		var i,c="",txt="";
		for(i=0; i < x.length; i++) {
			c = x[i];
			if(i % 2 == 0)
				c = c.toUpperCase();
			txt += c;
		}
		return txt;
	}
});
app.controller("filterCntrl",function($scope) {
	$scope.names = ["Neethu","Nitin","Priti","Rose"];
});