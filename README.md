# AngularJS-Menu
This project was created as part of a AngularJS [course](https://www.coursera.org/learn/angular-js) provided through Coursera.
This repository contains code progress over the course of the material provided via video lectures and coding assignments.
Additonally, the project has been remasked as well as additional features added, including firebase integration. Other tools that have
used as part of the project include gulp and bower as well as npm. If you would like this project in action, visit [spiceshack.tcun.xyz](http://spiceshack.tcun.xyz) to take a look.

<img height="100" align="left" src="https://s3.amazonaws.com/media-p.slid.es/uploads/hugojosefson/images/86267/angularjs-logo.png">

<img height="100" align="left" src="https://lh4.ggpht.com/Jb4QYgFBbFH7hfyOIzdRFF90Uyyx20W2-TB5lJEkdC9gyc0MQNTuC8n_HEGpCfaUgfw=w300">

<img height="100" align="left" src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/13274-1e708e28fa58694493de9b2f3bf08a11-medium_jpg.jpg?buster=1334550800">

<img height="100" align="left" src="https://raw.github.com/gulpjs/artwork/master/gulp.png">

<img height="100" align="left" src="http://bower.io/img/bower-logo.png">

<img height="100" align="left" src="https://seeklogo.com/images/N/npm-node-package-manager-logo-DE93649ED1-seeklogo.com.gif">

<br/><br/><br/><br/>

My intention is use this project as a resource for current and future students of the course and as an example project for anyone learning
AngularJS. As part of my front-end development study I have also completed the next course in coursera's Full Stack Specialization, and have
another repository available for the completed project [here](https://github.com/tcunningham07/Ionic-Menu). This course covers hybrid
mobile-app development using AngularJS and the Ionic Framework.

## Usage

### Clone the repository

Clone the repository on your machine
```
git clone https://github.com/tcunningham07/AngularJS-Menu.git
```

Install the required tools: `gulp`, `bower`
```
npm install -g gulp bower
```

Install npm and bower dependencies:
```
npm install && bower install
```

Once the dependencies have installed, preview the project:
```
gulp watch
```

### Use Gulp tasks

* `gulp` to build an optimized version of your application in `/dist`
* `gulp watch` to launch a server on your optimized application in `/dist`
* `gulp clean` to remove all files in `/dist`

### Test features
* *Unit test (karma)* : out of the box unit test configuration with karma, includes a few example unit tests written for the MenuController.
* *e2e test (protractor)* : out of the box e2e test configuration with protractor, includes a few example test scenarios.

## Thanks
Coursera

## License
MIT
