'use strict';

const Router = require('koa-router');
const debug = require('debug')('koa-restql:router');

const common = require('./common');
const methods = require('./methods');
const loaders = require('./loaders');

const switchByType = common.switchByType


/**
 *  加载模型路由器，即调用loaders的方法
 * @param router koa-router
 * @param method http
 * @param model 模型
 * @param name 模型名称
 * @param options 附加选项设置
 */
function loadModelRoutes(router, method, model, name, options) {

    let base = `/${name}`  //model的名字
        , associations = model.associations
        , schema = model.options.schema;

    if (schema) {
        base = `/${schema}${base}`;
    }

    //获取get、post、put、delete中的一种
    let loader = loaders.model[method];
    if (loader) {



        //调用loader，get..etc
        loader(router, base, model, options)
    }

    //如果有associations，则获取对应参数，调用associations的loaders方法，五个参数
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

/**
 * 加载loaders方法
 * @param models 模型集合
 * @param options 附加设置参数
 * @returns {Router}
 */
function load(models, options) {

    let router = new Router();

    //Object.keys()返还一个数组
    Object.keys(models).forEach(key => {

        //遍历获取模型
        let model = models[key];

        //遍历调用model ，get、post、put、delete， http方法
        methods.forEach(method => {
            loadModelRoutes(router, method.toLowerCase(), model, key, options);
        })
    })

    return router;
}

module.exports.load = load;
