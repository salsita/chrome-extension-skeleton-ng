/*global browser sleep element describe beforeEach it expect */

(function () {

    'use strict';

    var protractor = require('protractor');
    require('protractor/jasminewd');


    describe('My Application', function () {
        var ptor;

        describe('Test Option', function () {
            ptor = protractor.getInstance();

            it('user can click', function () {
                ptor.get('chrome-extension://kdaafnldkicchmkjkllomgmifliacakb/html/application.html#/options');
                ptor.findElement(protractor.By.id('someOptions')).click();
            });

        });

    });

})();