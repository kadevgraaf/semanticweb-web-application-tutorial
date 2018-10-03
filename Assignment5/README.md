# Knowledge and Data

This tutorial shows the basics for building Sem-Web apps based on what you have learnt so far.

## Goals of the tutorial

In this session you will learn how to:

* set up a web-app
* connect your web-app with your triplestore
* create nice visualisations of your data  
* create dynamic interactions between your web-app and your Stardog triplestore. 
  
### Things we will be using 
 
* `communication-simple.ttl` as data example
* HTML to generate the content in the web page (_index.html_)
* CSS style, following the [Bootstrap][https://getbootstrap.com/docs/4.0/components] toolkit 
* [Angular][https://angular.io/], a Javascript framework to facilitate the bindings between  
* The [Chart.js][http://jtblin.github.io/angular-chart.js/] library to visualise data  

* N.B. The information above is only for reference!!* No need to install anything, everything you need is already in the .zip file. 

Just open:
* a text editor (Notepad, TextEdit) to modify the files, and 
* a browser (in inspection mode!) to visualise your data.

## Pre-requisites

* Start your Stardog instance. If you do not know how to do it, see instructions at <https://github.com/kadevgraaf/semanticweb-web-application-tutorial>
* Download the `Assignment5.zip` from <https://github.com/kadevgraaf/semanticweb-web-application-tutorial>
* Download `communication-simple.ttl` from this repo.

## Setting up

Unzip the file Assignment5.zip in a working directory.
Place the `communication.ttl` file in the same directory.
Load `communication.ttl` into your Stardog instance, e.g. : 
```bash
 ./bin/stardog-admin db create -n myDB ./communication.ttl
```

### Do a couple of SPARQL queries:
* which data are there?
* which classes and properties? 

## Play with the interface 

You can  associate a numbero of variables to the $scope in the `main.js`, and these will be "shown" (we say _bound_) to the HTML.  
  
Try to associate a variable to the $scope in the `main.js` file, e.g.
``` javascript
$scope.myAppName = "My App Name";
```
and create an html element in the `index.html` to show the variable:
``` html
<h3>This is my app name : {{myAppName}}</h3>
```
now open your `index.html` (or refresh the page). Do you see your App name? 

*(Optional)* A more difficult one: create a new list in the $scope with 3 classes from the `communication.ttl` file, e.g.:
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

You can find lots of HTML elements to add in the [Bootstrap documentation][http://getbootstrap.com/docs/4.1/components]!  

## Connect with your triplestore

The web-app needs to be connected with your Stardog server to ask for data. For convenience, we create a $scope variable associated to our endpoint:
``` javascript
$scope.endpoint = "http://localhost:5820/myDB/query?query="
```
Do not forget to replace myDB with the name of your database, and to add the `query?query=` flag to tell your server that you will be asking SPARQL queries! Finally, visualise the endpoint name in the `index.html`:
``` html
 <p>My SPARQL endpoint is: {{mysparqlendpoint}}<p>
```

## Our first chart 

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
What type of chart do you have now? See more on the [Chart.js docs][http://jtblin.github.io/angular-chart.js/]!

## A dynamic interaction 

A dynamic interaction is one where the user gives an input from the webpage and gets some results from the triplestore. 

First, let's create an HTML element taking the input of the user:
```

``` 

## Problems? Some trouble-shooting:
* _where do I put my HTML elements in the index.html?_ : As 
* _my style is weird! My HTML elements are not centered!_ : try to look at [Bootstrap's layout][http://getbootstrap.com/docs/4.1/layout/overview/] to understand which .css you need to use for your elements to appear in the right place.
* _My scope variables do not appear on the web page! I only see {{}}!_ : are you sure you have bound the (right) variable to the $scope in the _main.js_?
* _My webpage is all blank!_ : You probably have a syntax error in your _main.js_ : open the broser inspector and try to analyse the problem. You will find which line is your error.
