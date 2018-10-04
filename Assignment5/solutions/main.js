angular.module('KRRclass', [ 'chart.js']).controller('MainCtrl', ['$scope','$http', mainCtrl]);


function mainCtrl($scope, $http){

	// TODO : type here code for your Ex 1
	$scope.myAppName = "Awesomename";
    $scope.myAppList = [ "codaonto:Study", "codaonto:Treatment", "codaonto:Variable" ];
    $scope.mysparqlendpoint = "http://localhost:5820/codaDB/query?query="
    //$scope.mysparqlendpoint = "http://localhost:5820/codaDB#!/query"


	// TODO : type here code for your Ex 2
    $scope.myInstances = [310, 339, 133, 14, 11, 80, 7, 8, 5];
    $scope.myClasses = [ "Study","Treatment", "Variable","Statistical Test", "Paper", "DilemmaType", "Analysis Level" , "Discipline" ];

    $scope.myDynamicLabels = [];
    $scope.myDynamicData = [];

    //$scope.sparqlquery2 = "SELECT ?class (COUNT(?s) AS ?c) WHERE { ?s a ?class } GROUP BY ?class"
    $scope.sparqlquery2 = "SELECT ?disc (COUNT(?s) AS ?c) WHERE { ?s <http://data.vu.nl/coda/ontology/property/hasDiscipline> ?disc } GROUP BY ?disc  order by ?c"
    //url : $scope.mysparqlendpoint+encodeURI("Select ?s where { ?s a <http://data.vu.nl/coda/ontology/class#"+$scope.myarg+"> } limit 5").replace(/#/g, '%23'),
    //url : $scope.mysparqlendpoint+encodeURI("SELECT ?class (COUNT(?s) AS ?c) WHERE { ?s a ?class } GROUP BY ?class").replace(/#/g, '%23'),
    //encodeURI("SELECT ?class (COUNT(?s) AS ?c) WHERE { ?s a ?class } GROUP BY ?class").replace(/#/g, '%23'),
    //console.log($scope.mysparqlendpoint+encodeURI($scope.sparqlquery2).replace(/#/g, '%23'));
    console.log($scope.mysparqlendpoint+encodeURI($scope.sparqlquery2).replace(/#/g, '%23'));
        $http( {
        method: "GET",
        headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'},
        url : $scope.mysparqlendpoint+encodeURI($scope.sparqlquery2).replace(/#/g, '%23'),

    } )
    .success(function(data, status ) {

        console.log(data);
        $scope.resultQ1=data;
//        angular.foreach(data, function(value, key){
//            this.push(key +  ' ', value)
//        })
    angular.forEach(data.results.bindings, function(val)
        {
            $scope.myDynamicLabels.push(val.disc.value);
            $scope.myDynamicData.push(val.c.value);
        })
    })
    .error(function(error ){
        console.log('Error');
    });



    $scope.myDynamicLabels1 = [];
    $scope.myDynamicData1 = [];

	// TODO : type here code for your Ex 2
	$scope.doMyAction = function(){
        console.log('test');
        $scope.result = "Here is my input: " +$scope.myInput+"!";

        $scope.dynamicQuery = "Select ?s where { ?s a <http://data.vu.nl/coda/ontology/class#"+$scope.myInput+"> } limit 5";
        //$scope.dynamicQuery = $scope.myInput;
        console.log($scope.mysparqlendpoint+encodeURI($scope.myInput).replace(/#/g, '%23'));
        $http( {
        method: "GET",
        headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'},
        url : $scope.mysparqlendpoint+encodeURI($scope.myInput).replace(/#/g, '%23'),

    } )
    .success(function(data, status ) {

        console.log(data);
        $scope.resultQ2=data;
    })
    .error(function(error ){
        console.log('Error');
    });



	};

}
