# Knowledge and Data

This tutorial shows the basics for building Sem-Web apps based on what you have learnt so far.

## Goals of the tutorial

In this session you will learn how to:

* set up a web-app
* connect your web-app with your triplestore
* create nice visualisations of your data  
* create dynamic interactions between your web-app and your Stardog triplestore. 
  
### Things we will be using 
 
* _communication-simple.ttl_ as data example
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
* Download the Assignment5.zip from <https://github.com/kadevgraaf/semanticweb-web-application-tutorial>
* Download _communication-simple.ttl_ from this repo.
```

## Setting up

Unzip the file Assignment5.zip in a working directory.
Place the _communication.ttl_ file in the same directory.
Load _communication.ttl_ into your Stardog instance, e.g. : 
```bash
 ./bin/stardog-admin db create -n myDB ./communication.ttl
```

### Do a couple of SPARQL queries:
* which data are there?
* which classes and properties? 

## Play with the interface 

You can  associate a numbero of variables to the $scope in the _main.js_, and these will be "shown" (we say _bound_) to the HTML.  
  
* try to associate a variable to the $scope in the _main.js_ file, e.g.

``` javascript
$scope.myAppName = "My App Name";
```
and create an html element in the _index.html_ to show the variable:
``` html
<h3>This is my app name : {{myAppName}}</h3>
```
now open your _index.html_ (or refresh the page). Do you see your App name? 

* (optional) A more difficult one: let's create a new list in the $scope, e.g.:
``` javascript
$scope.myAppList = [ "My first element", "My second element", "My third element" ]; 
```
and let's visualise it nicely 
```html
<ul ng-repeat="element in myAppList" class="list-group">
  <li class="list-group-item">{{element}}</li>
</ul>
```
The *ng-repeat* is a "keyword" that allows you to iterate through elements of a list.

N.B. You can find lots of HTML elements to add in the [Bootstrap documentation][http://getbootstrap.com/docs/4.1/components]!  

## Connect with your triplestore

The web-app needs to be connected with your Stardog server to ask for data. For convenience, we create a $scope variable associated to your endpoint:
``` javascript
$scope.endpoint = "http://localhost:5820/myDB/query?query="
```
Do not forget to replace myDB with the name of your database, and to add the _query?query=_ flag to tell your server that you will be asking SPARQL queries! Finally, visualise the endpoint name in the _index.html_:
``` html
 <p>My SPARQL endpoint is: {{mysparqlendpoint}}<p>
```

## Interacting with our triplestore


## Problems? Some trouble-shooting:
* _where do I put my HTML elements in the index.html?_ : As 
* _my style is weird! My HTML elements are not centered!_ : try to look at [Bootstrap's layout][http://getbootstrap.com/docs/4.1/layout/overview/] to understand which .css you need to use for your elements to appear in the right place.
* _My scope variables do not appear on the web page! I only see {{}}!_ : are you sure you have bound the (right) variable to the $scope in the _main.js_?
* _My webpage is all blank!_ : You probably have a syntax error in your _main.js_ : open the broser inspector and try to analyse the problem. You will find which line is your error.
