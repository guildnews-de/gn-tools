const mix = require('laravel-mix');
require('laravel-mix-modernizr');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js('resources/js/app.js', 'public/js')
    .sass('resources/scss/app.scss', 'public/css');

// Aetherium Calculator Mix
mix.js('resources/tool_aetherium/calculator.js', 'public/js/calc.js')
    .css('resources/tool_aetherium/css/calculator.css', 'public/css/calc.css');

// Gold per hour Mix
mix.js([
        'resources/tool_gold/vendor/fix-timer.min.js'
        // 'resources/tool_gold/vendor/modernizr-2.8.3.min.js'
        // 'resources/tool_gold/vendor/fix-timer-worker.min.js'
        // 'resources/tool_gold/vendor/highcharts.js'
    ], 'public/js/gold_head.js')
    .js([
        'resources/tool_gold/vendor/jquery-ui.min.js',
        'resources/tool_gold/vendor/highstock.js'
    ], 'public/js/gold_vendor.js')
    .js([
        'resources/tool_gold/console.js',
        'resources/tool_gold/main.js'
    ], 'public/js/gold_main.js')

    .css('resources/tool_gold/css/goldPerHour.css', 'public/css/gold.css');

// Timer Mix
mix.js('resources/tool_timer/index.js', 'public/js/timer.js')
    .css('resources/tool_timer/css/timer.css', 'public/css/timer.css');
