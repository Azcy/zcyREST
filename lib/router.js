'use strict';

const Router  = require('koa-router');
const debug   = require('debug')('koa-restql:router');

const common  = require('./common');
const methods = require('./methods');
const loaders = require('./loaders');

const switchByType = common.switchByType

//TODO
/**
 *
 * @param router koa-router
 * @param method
 * @param model
 * @param name
 * @param options
 */
function loadModelRoutes (router, method, model, name, options) {
  
  let base         = `/${name}`  //model中的key
    , associations = model.associations
    , schema       = model.options.schema;

  if (schema) {
    base = `/${schema}${base}`;
  }

  //获取get、post、put、delete中的一种
  let loader = loaders.model[method];
  if (loader) {
    //调用loader
    loader(router, base, model, options)
  }

  //该方法返回一个数组
  Object.keys(associations).forEach(key => {

    const association = associations[key]

    const {
      isSingleAssociation, associationType
    } = association

    if (common.shouldIgnoreAssociation(method, association.options.restql)) 
      return

    let loaderPath = loaders.model.association

    const associationTypeName = 
      associationType.replace(/^(.)/, $1 => $1.toLowerCase())

    loaderPath = isSingleAssociation ? loaderPath.singular : loaderPath.plural

    let loader = (loaderPath[associationTypeName] && 
        loaderPath[associationTypeName][method]) || loaderPath[method]

    if (loader) {
      loader(router, `${base}/:id/${key}`, model, association, options)
    }
  })

}

function load (models, options) {

  let router = new Router();

  Object.keys(models).forEach(key => {

    let model = models[key];

    methods.forEach(method => {
      loadModelRoutes(router, method.toLowerCase(), model, key, options);
    })
  })

  return router;
}

module.exports.load = load;
