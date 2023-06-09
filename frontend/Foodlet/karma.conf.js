process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-junit-reporter"),
      require("karma-puppeteer-launcher"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "artifacts/coverage"),
      reporters: [
        { type: "html", subdir: "report-html" },
        { type: "cobertura", subdir: ".", file: "cobertura.txt" },
      ],
    },
    junitReporter: {
      outputDir: require("path").join(__dirname, "artifacts/tests"),
      outputFile: "junit-test-results.xml",
    },
    reporters: ["coverage", "junit"],
    port: 9876,
    colors: true,
    singleRun: true,
    logLevel: config.LOG_DEBUG,
    browsers: ["ChromeHeadlessNoSandbox"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
    captureTimeout: 180000,
  });
};
