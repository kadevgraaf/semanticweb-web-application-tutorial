
# Recommended Tools

## 1. Introduction

This handout is meant as a guide for installing some of the tools that we will use during the course.

##### Warnings
* If you copy & paste from this document, make sure that the pasted text is exactly the same as the copied one (sometimes quote marks are changed)
* The only exception is when you see the text `YOURUSERNAME`: be sure to replace it with your actual user name!
* If you change any settings in Windows, you need to restart your command prompt (CMD) for the changes to take effect


## 2. Important Stuff
### 2.1 A Programming Editor
A good **programming editor**, such as [Atom](http://atom.io), [Sublime](http://sublimetext.com), [TextMate](http://macromates.com) (Mac only), [Notepad++](https://notepad-plus-plus.org) (Windows only) or one of your own choice, is essential. It helps if it supports syntax highlighting for **Turtle** and/or **SPARQL**.

### 2.2 Java
Make sure that you have Java, and your Java version is up to date.

Install JDK version 8u101 for your platform from:

<http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html>

Running `java -version` in your terminal/command prompt should give:

```
java version "1.8.0_101"
Java(TM) SE Runtime Environment (build 1.8.0_101-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.101-b13, mixed mode)
```

### 2.3 Python
A working version of **Python**, preferably somewhat close to 3.7  for your platform of choice.

(you might need **Python** 2.7 later, but for the time being, please install version 3.7)

* Check what version you have by running `python --version` in a terminal (or command prompt) window

**NB:** if you are an Anaconda user, and you're happy with it (are you?), you should replace all occurrences of `pip` below with the corresponding `conda` command. 

If needed:
* Conda users can install Python 3.7 by running `conda install python=3.7` in the Terminal.
* Windows users can go to <https://www.python.org> to download it.  
  **NB**: make sure to enable the 'Add Python.exe to path' option during installation.
  If the system still has problems in finding Python or pip add `C:\Python27\Scripts` to your `PATH` environment variable.
  To do this by go to the Control Panel and search for "environment variables".
* Linux users should use the package manager of their system (e.g. `sudo apt-get install python`)
* Windows users which encounter a c++ error while using pip.exe, please install: https://www.microsoft.com/en-us/download/details.aspx?id=44266
* MacOS comes with a pre-installed version, but you may consider using [Homebrew](http://brew.sh) to install a clean and up-to-date version.
  - Start the Terminal application
  - Run `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` from the terminal
  - Then run `brew update` and `brew doctor`
  - Run `brew install python`

### 2.4 Programming Libraries
(For the lab session you may want to skip to section 3)

It is not usually a good idea to create and manipulate machine-interpretable files by hand. A good programming library for Linked Data is a real benefit.

Depending on your preferred programming language, examples are:

* [RDFLib](https://rdflib.readthedocs.io/en/stable/), for Python. Simply `pip install rdflib`
* [Jena](http://jena.apache.org) for Java.


### 2.5 IPython Notebook (Jupyter)

Interactive notebooks are simple and effective tools for testing small bits of your code before you integrate it in a larger application. We will use Notebooks for the assignments of the first two modules.

Run `pip install jupyter` in a Terminal or the Command Prompt.

Jupyter documentation is here:  <http://jupyter.readthedocs.org>.

## 3. The **Protégé** Ontology Editor

There are several RDF and OWL editors that you could use (apart from your favourite text-based editor). The main contenders are [Protégé](http://protege.stanford.edu) and [TopBraid Composer](http://www.topquadrant.com/downloads/topbraid-composer-install/).

We advise you to use Protégé for the assignments in Week 3.

* **Protégé** is a stand-alone editor that is very much tailored towards OWL ontology editing.
* It allows you to define OWL axioms using an abstract syntax (Manchester Syntax),
* but it is less transparent if you're interested in knowing what the syntactic RDF representation looks like. This may lead to confusing situations where it is unclear e.g. in what namespace you have defined your classes, instances, etc.  
* Protégé does support all major OWL2 DL reasoners (Fact++, Hermit and Pellet) and is thus quite powerful with respect to inferencing.

### Installing Protégé

* Download the 5.0.0 version from GitHub: <https://github.com/protegeproject/protege-distribution/releases/tag/protege-5.0.0> 
* Install the Pellet plugin from within Protege, but if that doesn't work...
  * Download the **Pellet** reasoner from <https://github.com/Complexible/pellet/archive/master.zip> and place the `com.clarkparsia.protege.plugin.pellet.jar` file (from `pellet/protege/plugin/`) in the `plugins` directory of your **Protégé** installation.
    * On MacOS, you should right-click (ctrl-click) `Protégé.app`, and select "Show Package Contents". You should put the Pellet jar file in the `Contents/Java/plugins` folder.
* To run it:
  * The Windows installer should produce an icon for you, otherwise you will need to run the `run.bat` (or similar) script in the Protégé directory.
  * On Linux, you should run the `run.sh` script in the Protégé directory
  * On MacOS, you should run the `Protégé.app` application in the Protégé directory
* Make sure that the **Pellet** reasoner can be seen in the **Reasoner** menu of the Protégé application window.



## 4 The **Stardog** triple store (version 4 or higher):

Stardog is a reasoning-enabled database for Linked Data and ontologies.

* Apply for Community Edition license at <http://stardog.com> (or a 30-day evaluation)
* You will receive an email with a link to the download, and a license file.
* **NB**: Stardog may require a Java JDK to be installed on your system (not just a JRE, otherwise it will probably not work). Try getting it working without first installing Java. If it complains about it, install a recent JDK from Java.com

Official installation instructions can be found at <http://docs.stardog.com/#_quick_start_guide>

#### 4.1 Windows
One way to get it running:

* Move or copy the unzipped directory `stardog-4.1.3` to your `Documents` folder. You now have a directory called `C:\Users\YOURUSERNAME\Documents\stardog-4.1.3` (where YOURUSERNAME is your actual user name!)
* Create a `data` directory inside it, this is now `C:\Users\YOURUSERNAME\Documents\stardog-4.1.3\data`
* Copy the `stardog-license.bin` file to `C:\Users\YOURUSERNAME\Documents\stardog-4.1.3\data`
* Go to the Control Panel, and search for `environment variables`.
	* Create a system-wide variable called `STARDOG_HOME` and give it the value `C:\Users\YOURUSERNAME\Documents\stardog-4.1.3\data`.
	* Update the system-wide `PATH` variable by adding `C:\Users\YOURUSERNAME\Documents\stardog-4.1.3\bin`
* Start the Command Prompt, and type `stardog-admin.bat server start --disable-security` to start Stardog (you need to do this every time you have rebooted your system. If you want to manually stop the service, type `stardog-admin.bat server stop`)
* Open your browser, and go to <http://localhost:5820> the login details are `admin` and `admin`
* Whee!

Follow the next steps under **4.3**

Alternative installation instructions can be found at <http://docs.stardog.com/#_quick_start_guide>

#### 4.2 Linux/Mac
One way to get it running:

* Move or copy the unzipped directory `stardog-5.3.4` to your `Documents` folder. You now have a directory called `/Users/YOURUSERNAME/Documents/stardog-5.3.4`
* Create a `data` directory inside it, this is now `/Users/YOURUSERNAME/Documents/stardog-5.3.4/data`
* Copy the `stardog-license.bin` to `/Users/YOURUSERNAME/Documents/stardog-5.3.4/data`
* Open up a Terminal window, and type `open ~/.bash_profile`, this opens a TextEdit window on mac. Linux users will know what to do.
* Add the following lines anywhere in the file:

```
export STARDOG_HOME=/Users/YOURUSERNAME/Documents/stardog-5.3.4/data
export PATH=$PATH:/Users/YOURUSERNAME/Documents/stardog-5.3.4/bin
```

* Close the Terminal window, and open a new one
* Move inside the terminal to the bin directory:
`cd /Documents/stardog-5.3.4/bin`
* Run the Stardog server via `./stardog-admin server start --disable-security` while inside the bin directory! (you need to do this every time you have rebooted your system. If you want to manually stop the service, type `./stardog-admin server stop`)
* If Stardog complains about the licence file not being in the correct directory, run the following line within the terminal:
`export STARDOG_HOME=/Users/YOURUSERNAME/Documents/stardog-5.3.4/data`


* Open your browser, and go to <http://localhost:5820> the login details are `admin` and `admin`
* Whee!

Follow the next steps under **4.3**

#### 4.3 Starting and Stopping Stardog

To start: ``stardog-admin server start --disable-security`` (`stardog-admin.bat` on Windows)

To stop: ``stardog-admin server stop`` (`stardog-admin.bat` on Windows)

#### 4.3 All Platforms
* Go to <http://localhost:5820>, create a new Database called `tutorial` (you may need to login using *admin*/*admin*)
* Make sure to set reasoning to `SL` and "SameAs reasoning" to `FULL` otherwise leave the settings unchanged.
* Done!


## 5. Optional but Recommended Tools

### 5.1 brwsr

[brwsr](https://github.com/Data2Semantics/brwsr) is a lightweight Linked Data browser, implemented in Python, that can be run as interface on top of a SPARQL endpoint, or just a list of files.

It supports:
* Rendering of all triples in which a resource plays a role (po, sp, and so)
* It is named-graph aware, allowing you to see what graph a triple belongs to
* It supports content negotiation for RDF clients
* It can browse external URIs, provided that they are published as Cool URIs (dereferencable URIs)
* It retrieves standard labels for URIs from preflabel.org

To install it, download the zip file or, clone it to a directory of your choice.

Open up a terminal, and change into that directory:

* create and activate a `virtualenv` if you so desire
* run `pip install -r requirements.txt`
* rename or copy `config-template.py` to `config.py`
* make appropriate settings in the file (documentation is inline)
* Start it with `python run.py` from within the `src` directory.

### 5.2 curl
`curl` is a simple command line utility for (amongst others) sending HTTP requests. You may need it for testing e.g. whether content negotiation works for your dataset.

You can also use an online service such as <http://hurl.it>.

* Windows users can download `curl` directly from <http://dl.uxnr.de/mirror/curl/curl-7.33.0-win64-ssl-sspi.zip>.  
  **NB**: curl is an executable (`.exe` file) that you should explicitly call on the **command prompt**. Double clicking in an explorer window will just briefly flash a command prompt window.  
  * Create a folder called 'curl' in the `C:\Program Files` directory,
  * copy `curl.exe` from the unzipped file to the `C:\Program Files\curl` directory,
  * then add the `C:\Program Files\curl` directory to the `PATH` system environment variable (in Control Panel, search for `environment variable`).
  * Edit the variable value, different directory names should be separated by a semicolon (`;`)
  * Start the Command Prompt (in Win 8/10 use the search) and type `curl.exe` to see whether it does anything.
* Linux typically comes shipped with `curl`, but you may need to use the package manager of their distribution (e.g. `sudo apt-get install curl`)
* MacOS comes shipped with `curl`

You can test whether it works by going to a Terminal window, or to the Command Prompt and executing: `curl -L -H "Accept: text/turtle" "http://dbpedia.org/resource/Inside_Out_(2015_film)"`

Did you see any triples?

### 5.3 Git
The **git** version control system for your platform of choice. Version control is very important when collaboratively developing code. You could also use Dropbox or equivalent, but these systems do not prevent conflicting copies. Git is the most modern version control mechanism that is currently in use by millions of developers, and [GitHub](http://github.com) is the online cloud service of choice.

Try and learn [here](http://try.github.io) why and how you should use it.

* Windows users can go to <https://git-scm.com> to download it
* Linux users should use the package manager of their system (e.g. `sudo apt-get install git`)
* MacOS users can most easily install it with Homebrew (`brew install git`) or download it from <https://git-scm.com>
* Note: it makes sense to also install a UI-based application, such as [SourceTree](https://www.sourcetreeapp.com).

