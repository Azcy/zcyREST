'use strict'
/**
 * Sequlize的dao
 */
const co = require('co')
const qs = require('qs')

const _ = require('lodash')
const parse = require('co-body')
const fs = require('fs')
const yaml = require('js-yaml');
const debug = require('debug')('koa-restql:middlewares')


const yaml_global = yaml.safeLoad(fs.readFileSync('../date/GLOBAL.yaml', 'utf8'));
const yaml_local = yaml.safeLoad(fs.readFileSync('../date/HAT_SAAS.yaml', 'utf8'));
const yaml_attr = {...yaml_global['ATTR'], ...yaml_local['ATTR']};
const yaml_model = {...yaml_global['MODEL'], ...yaml_local['MODEL']};