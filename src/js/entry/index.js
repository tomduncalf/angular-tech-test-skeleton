// Entry point for the Webpack bundle

// Load Bootstrap and custom SASS via Webpack style-loader
require('bootstrap-sass-loader');
require('index.scss');

// Load Javascript dependencies
require('angular');

// Load Angular modules
require('modules/techTest/module');
