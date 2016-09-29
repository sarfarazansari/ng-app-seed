ng-app-seed — the seed for AngularJS app
============

This project is an application skeleton for a typical Angularjs, Ecmascript6, SASS web app. You can use it to quickly bootstrap your project.

- The seed contains a sample AngularJS application by using Angularjs, Ecmascript6, SASS for Frontend.
- And Nodejs on Server side.
- In this seed [consolidate][consolidate] are used for `HTML` engine with [express][express].
- [gulp][gulp] is used for task runner.
- The seed app has much thing, just to show how dist file system works.

For better clearance we work on `src` folder and serve files from `public` folder.
Also we have used so many tools to automate our work. for Eg. you don't need to include manually any library or files in your html file. we have used [gulp-inject][gulp-inject] tool to complete it

## Getting Started

To get you started you can simply clone the ng-app-seed repository and install the dependencies:

### Prerequisites

You need git to clone the ng-app-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test ng-app-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone ng-app-seed

Clone the ng-app-seed repository using [git][git]:

```
git clone https://github.com/sarfarazansari/ng-app-seed.git
cd ng-app-seed
```


If you just want to start a new project without the ng-app-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/sarfarazansari/ng-app-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.


### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].

```
npm install
```

* We get the angular code via `bower`, a [client-side code package manager][bower].

```
bower install
```

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files


### ENV setting

Rename `.env.example` file to `.env` and make settings according to your need.


### Run the Application

We have preconfigured the project with gulp task runner.  The simplest way to start server on `dev mode` is:

```
gulp run
```

*Note that the `gulp run` command take care of all other related tasks. 

Now browse to the app at `http://localhost:5000`.

or on `prod mode`:

```
gulp prod
```

Now browse to the app at `http://localhost:3000`.


## Directory Layout

It's a mixture of moduler app and MVC pattern.
- All .js, .scss files will be concatinate separately in single file and later compile for serve.


```
dummy-app/              --> Project Root 
  src/           				--> all app specific modules
  	images							--> all images
  	styles							--> all css file
  		index.scss    		--> Imp file all file inserted in this file
  		global.scss  			--> all global vars declare
  		home.scss   			--> home specific styles
    js/              		--> all javascript related modules
      index.module.js   --> main application module
      index.run.js 			--> file work on application run
      config/						--> all app related configuration
      controllers/			--> all controllers files
      	home.controller.js -->  home controller logic
      directives/				--> all directives files
      	navbar.directive.js -->  sample directive file
      	navbar.html 		--> navbar html template
      filters/					--> all filters files
      services/					--> all services files
      	home.service.js -->  home service file
	  views/              --> the views template and logic
	    home.html         --> the partial template
	    404.html          --> the error template
	server.js         		--> main node file to serve
  routes/               --> node route specific files or setting file
    routes.js           --> All route specific rules
    util/               --> other utilities files
      settings.js       --> node server specific files
	gulpfile.js         	--> main file for running all tasks
	gulp/           				--> all gulp specific modules
		conf.js 						--> all gulp related settings
		build.js 						--> Build specific task
		server.js 					--> server specific task
		watch.js  					--> watch specific task
		styles.js 					--> styles specific task
		scripts.js 					--> scripts specific task
		inject.js  					--> inject specific task
  .env.example          --> ENV example file
	bower.json         		--> All dependancy listed
	package.json         	--> All dependancy listed
```



## Contribution

Any help or suggestion would be appreciated.


## License

MIT

**Free Software, Hell Yeah!**


[bower]: http://bower.io
[git]: http://git-scm.com/
[gulp]: http://gulpjs.com/
[node]: https://nodejs.org
[npm]: https://www.npmjs.org/
[express]: http://expressjs.com/
[consolidate]: https://www.npmjs.com/package/consolidate
[gulp-inject]: https://www.npmjs.com/package/gulp-inject

