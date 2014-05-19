# chrome-extension-skeleton-ng

[Google chrome extension](http://developer.chrome.com/extensions/index.html) skeleton, based on
*   [angular.js](http://angularjs.org)
*   [require.js](https://github.com/karma-runner/karma)

Main features:
*   js-modules via require.js
*   angular.js (popup page, options page)
*   deploy script (automatically create crx file)
*   logging (one central extension log from all content/background pages)
*   localStorage-base configuration
*   unit-tests (mocha, karma)
*   end to end test (TBD, if possible)



## Directory structure

    /code
        /css
        /html
            /templates
        /images
        /js
            /lib
                /angular
            /modules
                /background
                    /controllers
                /content
                    /controllers
                /util
    /tests
        /pure-unit
            /modules
            /specs

In `code` directory you will find:
*	`css` - any css files used by the extension
* `html` - any html files used by the extension
* `html/templates` - html Angular templates used for rendering html code
* `images` - any graphics used by the extnesion
* `js` - code javascript files (entry point for background script, content
script(s), and popup script
* `js/lib` - third party libraries, see README.md file there for details
* `js/modules` - all extension-specific code in AMD modules (can be
organised in sub-directories)
* `js/modules/background` - Angular.js application for background pages
* `js/modules/content` - Angular.js application for content pages
* `js/util` - common functionality (messaging and templates) for the
extensions, written as AMD modules

In `tests\pure-unit` directory you will find: test related JavaScript code for mocha-node
*	`modules` - unit test-specific utility and RequireJS configuration
*	`specs` - unit test modules

## Run deploy
````
  cd deploy
  ./makecrx.sh
  cp deploy/pkg/chrome-angular-extension-0.0.1.crx to_some_test
````
The script `deploy/makecrx.sh` will create (once) `deploy\dummy-chromium.pem` private key for google chrome extension.
Please don't commit it to public if you don't want.


## Run unit-test

NOTE: We have to plan that end-2-end and unit tests with karma **will** work ok, but it is not worked now.

Unit-test with mocha/require.js (but without angular) works ok:

1. Install mocha-node first:

  `npm install -g mocha`

2. In `tests\pure-unit\` directory run `run-tests.sh` *(it installs required dependencies first)*


## How to debug without deploy

1. Open chrome
2. Go to chrome://extensions/
3. Switch ON for checkbox `Developer mode`
4. Press `Load unpacked extension...` and specify `/code` folder

## How to get console logs

All pages send log to background page, so it is enough to open bg page console logs.

1. Open chrome
2. Go to chrome://extensions/
3. Find `Chrome Angular extension with require.js`
4. Go to extension's `html/background.html`
5. Switch to `Console`

## Useful links:

*   Daniel Prentis    
    RequireJS In Chrome Extensions    
    http://prezi.com/rodnyr5awftr/requirejs-in-chrome-extensions/


*   Salsita    
    Original chrome-skeleton with require.js    
    https://github.com/salsita/chrome-extension-skeleton


*   Fork of [Angular Seed](https://github.com/angular/angular-seed) but with changes needed for requireJS support.    
    https://github.com/tnajdek/angular-requirejs-seed


*   Mark Tucker    
    Chrome Extension using AngularJS - Part 1    
    http://www.youtube.com/watch?v=Bxg-5C3F8qo


*   Mark Tucker    
    Chrome Extension using AngularJS - Part 2: Services    
    http://www.youtube.com/watch?v=1O6YTz1yU10


*   How to test e2e google chrome extension with karma?    
    http://stackoverflow.com/questions/17369462/how-to-test-e2e-google-chrome-extension-with-karma
