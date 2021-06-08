// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter, StacktraceOption} = require('jasmine-spec-reporter');
const fs = require('fs');
/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 15000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 40000,
    print: function () {
    }
  },
  onPrepare: async function () {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));
    jasmine.getEnv().addReporter({
      specDone: (result) => {
        if (result.failedExpectations.length > 0) {
          let repository = './protractorFailure/' + Date.now();
          fs.mkdir(repository, () => {

          })
          browser.takeScreenshot().then((screenShot) => {

            fs.writeFile(`${repository}/${result.description}.png`, screenShot, 'base64', (err) => {
              if (err) throw err;
            });

          });
          browser.getPageSource().then((src) => {
            fs.writeFile(`${repository}/${result.description}.xml`, src, 'base64', (err) => {
              if (err) throw err;
            });
          });
        }
      }
    });
  }
};
