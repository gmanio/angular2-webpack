"use strict";
///<reference path="../node_modules/@types/node/index.d.ts"/>
require('reflect-metadata');
require('core-js/es6');
require('core-js/es7/reflect');
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=polyfills.js.map