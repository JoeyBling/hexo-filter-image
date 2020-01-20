#!/usr/bin/env node

'use strict';

const config = require('./package.json');

function isTrue(value) {
  return !!value && value !== '0' && value !== 'false';
}

// 作者
let authorName = !!config.author.name ? config.author.name : "JoeyBling";
let authorUrl = !!config.author.url ? config.author.url : "https://github.com/JoeyBling";

let envDisable = isTrue(process.env.DISABLE_OPENCOLLECTIVE) || isTrue(process.env.CI);
let logLevel = process.env.npm_config_loglevel;
let logLevelDisplay = ['silent', 'error', 'warn'].indexOf(logLevel) > -1;

// install后在控制台输出一段日志
if (!envDisable && !logLevelDisplay) {
  console.log && console.log('Thank you for installing \u001b[35m' + config.name +
    "[" + config.version + "]" + '\u001b[0m: built with the \u001b[32m' +
    authorName + '\u001b[0m ' + config.description + ' (\u001b[32m' + authorUrl + '\u001b[0m)\n');
}