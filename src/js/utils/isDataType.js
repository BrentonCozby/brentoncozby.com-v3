// From https://webbjocke.com/javascript-check-data-types/

function isBoolean (value) {
    return typeof value === 'boolean'
}

function isString (value) {
    return typeof value === 'string' || value instanceof String
}

function isNumber (value) {
    return typeof value === 'number' && isFinite(value)
}

function isArray (value) {
    return Object.prototype.toString.call(value) === '[object Array]'
}

function isFunction (value) {
    return typeof value === 'function'
}

function isObject(value) {
    return Boolean(value) && typeof value === 'object' && value.constructor === Object
}

function isNull (value) {
    return value === null
}

function isUndefined (value) {
    return typeof value === 'undefined'
}

function isRegExp (value) {
    return Boolean(value) && typeof value === 'object' && value.constructor === RegExp
}

module.exports.isBoolean = isBoolean
module.exports.isString = isString
module.exports.isNumber = isNumber
module.exports.isArray = isArray
module.exports.isFunction = isFunction
module.exports.isObject = isObject
module.exports.isNull = isNull
module.exports.isUndefined = isUndefined
module.exports.isRegExp = isRegExp
