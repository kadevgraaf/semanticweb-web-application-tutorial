# Knowledge and Data

This tutorial shows the basics for building Sem-Web apps based on what you have learnt so far.

## Goals of the tutorial

In this session you will learn how to:

* set up a web-app
* connect your web-app with your triplestore
* create nice visualisations of your data  
* create dynamic interactions between your web-app and your Stardog triplestore. 
  
### Things we will be using 
 
* `communication.ttl` as data example
* HTML to generate the content in a web page
* CSS style, following the [Bootstrap](https://getbootstrap.com/docs/4.0/components) toolkit 
* [Angular](https://angular.io/), a Javascript framework to facilitate the bindings between  
* The [Chart.js](http://jtblin.github.io/angular-chart.js/) library to visualise data  

**N.B. The information above is only for reference!!** No need to install anything, everything you need is already in the .zip file. 

Just open:
* a text editor (Notepad, TextEdit) to modify the files, and 
* a browser (in inspection mode!) to visualise your data.

## Setting up

* Start your Stardog instance. If you do not know how to do it, see instructions at <https://github.com/kadevgraaf/semanticweb-web-application-tutorial/blob/master/tools.md#4-the-stardog-triple-store-version-4-or-higher>
* Download the files (`index.html`, `main.js`, `communication.ttl` as well as the css + js subdir) from the Assignment5 directory.
* Load `communication.ttl` into your Stardog instance : 
```bash
 ./bin/stardog-admin db create -n myDB ./communication.ttl
```

Make a couple of SPARQL queries:
* which data are there?
* which classes and properties? 

## Ex 1 : Play with the interface 

You can  associate a number of variables to the $scope in the `main.js`, and these will be "shown" (we say _bound_) to the HTML.  
  
Try to associate a variable to the $scope in the `main.js` file, e.g.
``` javascript
$scope.myAppName = "My App Name";
```
and create an html element in the `index.html` to show the variable:
``` html
<h3>This is my app name : {{myAppName}}</h3>
```
now open your `index.html` (or refresh the page). Do you see your App name? 

**Optional** A more difficult one: create a new list in the $scope with 3 classes from the `communication.ttl` file, e.g.:
``` javascript
$scope.myAppList = [ "codaonto:Study", "codaonto:Treatment", "codaonto:Variable" ]; 
```
and visualise it nicely :
```html
<ul ng-repeat="element in myAppList" class="list-group">
  <li class="list-group-item">{{element}}</li>
</ul>
```
N.B. `ng-repeat` is a "keyword" that allows you to iterate through elements of a list. 

You can find lots of HTML elements to add in the [Bootstrap documentation](http://getbootstrap.com/docs/4.1/components)!  

### Connect with your triplestore

The web-app needs to be connected with your Stardog server to ask for data. For convenience, we create a $scope variable associated to our endpoint:
``` javascript
$scope.endpoint = "http://localhost:5820/myDB/query?query="
```
Do not forget to replace myDB with the name of your database, and to add the `query?query=` flag to tell your server that you will be asking SPARQL queries! Finally, visualise the endpoint name in the `index.html`:
``` html
 <p>My SPARQL endpoint is: {{mysparqlendpoint}}<p>
```

## Ex 2 : Our first chart 

Let's ask our triplestore for the classes per number of instances
``` SPARQL
SELECT ?class (COUNT(?s) AS ?c) WHERE { ?s a ?class } GROUP BY ?class
```
A chart alway needs a list of data and a list of labels. Hence, we create a $scope list for the instances, and one for the labels. In your `main.js` :
```
$scope.myInstances = [310, 339, 133, 14, 11, 80, 7, 8, 5];
$scope.myClasses = "Study","Treatment", "Variable","Statistical Test", "Paper", "DilemmaType", "Analysis Level" , "Discipline"];
```
Let's create a chart in `index.html`:
```html
<canvas class="chart chart-bar" chart-data="myInstances" chart-labels="myClasses" > </canvas>
```
Can you try to visualise the SPARQL query you executed on the page, too?

*(Optional)* Try to change the class of the canvas to obtain a different chart, e.g.:
```HTML
<canvas class="chart chart-pie" chart-data="myInstances" chart-labels="myClasses" ></canvas> 
``` 
What type of chart do you have now? See more on the [Chart.js docs](http://jtblin.github.io/angular-chart.js/)!

## Ex 3: A dynamic interaction 

A dynamic interaction is one where the user gives an input from the webpage and gets some results from the triplestore. 

First, let's create an HTML element taking the input of the user (see [Bootstrap's input groups](https://getbootstrap.com/docs/4.0/components/input-group/)):
```HTML
<div class="input-group mb-3">
  <input type="text" class="form-control" ng-model="myInput" placeholder="Type here" >
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">GO!</button>
  </div>
</div>
``` 
N.B. : the `ng-model` will bind the type input to the $scope! Do not forget it when you use input elements. 

Now, we need to create an action that will be performed by the javascript code when the button will be clikced. We can do this by adding a function and the keyword `ng-click` to the button element:
```HTML
<button class="btn btn-outline-secondary" ng-click="doMyAction()" type="button">GO!</button>
```
Then, you need to create the function in the `main.js`. For your convenience, the function is already there. Try to add create a behaviour, e.g. :
```javascript
$scope.result = "Here is my input: " +$scope.myInput+"!";
``` 
and then add in the `index.html`:
```HTML
<p>{{result}}</p>
```
Now refresh the page, type something in the input, and click on the button. Do you see anything?

We will do the same with the triplestore, and try to send a SPARQL query from the interface. The triplestore will be called through an _http call_, which needs to be placed in your _doAction()_ function:
```javascript
$http( {
 	method: "GET",
	url : // TODO : your endpoint + your query here,
	headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
	} )
	.success(function(data, status ) {
	      // TODO : your code here 
  })
	.error(function(error ){
	    console.log('Error '+error);
	});
```
Then replace the URL with your $scope.endpoint  and the $scope.myInput :
``` javascript
$scope.myQuery = encodeURI($scope.myInput).replace(/#/g, '%23');
```  
N.B. The _encodeURI_ and _replace_ functions are needed to transform a SPARQL query into a server-friendly string.

Now, we need to associate the result of the _http_ call to a variable, i.e. :
``` javascript
$scope.result = data;
```
Save and refresh `index.html`. Type a SPARQL query, click the button and see what happens:
```SPARQL
SELECT ?disc (COUNT(?s) AS ?c) WHERE { ?s <http://data.vu.nl/coda/ontology/property/hasDiscipline> ?disc } GROUP BY ?disc  order by ?c
```
The result is okay but we want to create a chart, so we will manipulate the response. We can do this in the function in  _http.success()_ .
```
// // Use the console to see how your response looks like
// console.log(data);
$scope.myDynamicLabels = [];
$scope.myDynamicData = [];
				  
 // now iterate on the results
angular.forEach(data.results.bindings, function(val) {
	$scope.myDynamicLabels.push(val.disc.value);
	$scope.myDynamicData.push(val.c.value);
});
```
Finally, we add the chart in the `index.html`:
```HTML
<canvas class="chart chart-bar" chart-data="myDynamicData" chart-labels="myDynamicLabels" > </canvas>
``` 

## Problems? Some trouble-shooting:

* _I modified something on the `index.html` or `main.js`, but nothing has changed_
Did you save your files again?

* _where do I put my HTML elements in the `index.html`?_ : Wherever! It will only change its position. As long as it is within the `body` HTML tag. Try it yourself :)

* _my style is weird! My HTML elements are not centered!_ : try to look at [Bootstrap's layout](http://getbootstrap.com/docs/4.1/layout/overview/) to understand which .css you need to use for your elements to appear in the right place.

* _My scope variables do not appear on the web page! I only see {{}}!_ : are you sure you have bound the (right) variable to the $scope in the `main.js`?

* _My webpage is completely blank!_ : You probably have a syntax error in your `main.js` : open the broser inspector and try to analyse the problem. You will find which line is your error.
