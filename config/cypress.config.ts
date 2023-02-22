import { defineConfig } from 'cypress';

export default defineConfig({
	projectId: 'c97c8o',
	viewportWidth: 1900,
	viewportHeight: 1300,
	defaultCommandTimeout: 5000,
	requestTimeout: 15000, 
	responseTimeout: 60000,
	fixturesFolder: 'src/tests/e2e/cypress/fixtures',
	downloadsFolder: 'src/tests/e2e/cypress/downloads',
	screenshotsFolder: 'src/tests/e2e/cypress/test-results/screenshots',
	videosFolder: 'src/tests/e2e/cypress/test-results/videos',
	screenshotOnRunFailure: true,
	videoUploadOnPasses: false,
	retries: {
		runMode: 1,
		openMode: 0,
	},
	watchForFileChanges: false,
	numTestsKeptInMemory: 10,
	reporter: 'cypress-multi-reporters',
	reporterOptions: {
		reporterEnabled: 'mochawesome, mocha-junit-reporter',
		mochawesomeReporterOptions: {
			reportDir: 'src/tests/e2e/cypress/test-results/json',
			overwrite: false,
			html: false,
			json: true,
			timestamp: 'ddmmyyyy_HHMMss',
		},
		mochaJunitReporterReporterOptions: {
			mochaFile: 'src/tests/e2e/cypress/test-results/junit/results-[hash].xml',
		},
	},
	e2e: {
		setupNodeEvents(on, config) {
			config.browsers.push(
				{
					name: 'opera',
					channel: 'stable',
					family: 'chromium',
					displayName: 'Opera',
					version: '84.0.4316.42',
					path: 'C:\\Users\\USERNAME\\AppData\\Local\\Programs\\Opera\\opera.exe',
					majorVersion: 84,
					isHeaded: true,
					isHeadless: false
				},
				{
					name: 'brave',
					channel: 'stable',
					family: 'chromium',
					displayName: 'Brave',
					version: '99.1.36.116',
					path: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
					majorVersion: 99,
					isHeaded: true,
					isHeadless: false
				},
				{
					name: 'vivaldi',
					channel: 'stable',
					family: 'chromium',
					displayName: 'Vivaldi',
					version: '5.1.2567.66',
					path: 'C:\\Users\\USERNAME\\AppData\\Local\\Vivaldi\\Application\\vivaldi.exe',
					majorVersion: 5,
					isHeaded: true,
					isHeadless: false
				},
				{
					name: 'srware iron',
					channel: 'stable',
					family: 'chromium',
					displayName: 'SRWare Iron',
					version: '98.0.5000.0', 
					path: 'C:\\Program Files\\SRWare Iron (64-Bit)\\chrome.exe',
					majorVersion: 98,
					isHeaded: true,
					isHeadless: false
				}
			);
			require('@cypress/code-coverage/task')(on, config);
			const webpack = require('@cypress/webpack-preprocessor');
			const del = require('del');
			const options = {
				webpackOptions: require('./src/tests/e2e/cypress/webpack.config.js'),
				watchOptions: {},
			};
			on('file:preprocessor', webpack(options));
			on('after:spec', (spec, results) => {
				if (results.stats.failures === 0 && results.video) {
					return del(results.video);
				}
			});
			return config;
		},
		baseUrl: 'http://localhost:8080',
		excludeSpecPattern: ['*.js', '*.md'],
		chromeWebSecurity: false,
		specPattern: 'src/tests/e2e/cypress/integration/**/*spec.ts',
		supportFile: 'src/tests/e2e/cypress/support/index.js',
		env: {
			graphqlUrl: 'http://localhost:3000/graphql',
			codeCoverage: {
				url: 'http://localhost:8080/__coverage__',
			},
		},
	},
});
