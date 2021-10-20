/**
 * FrankenSpec
 * Bandwidth's Frankensteined API Spec
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DeferredResult model module.
 * @module model/DeferredResult
 * @version 1.0.0
 */
class DeferredResult {
    /**
     * Constructs a new <code>DeferredResult</code>.
     * @alias module:model/DeferredResult
     */
    constructor() { 
        
        DeferredResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeferredResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeferredResult} obj Optional instance to populate.
     * @return {module:model/DeferredResult} The populated <code>DeferredResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeferredResult();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], Object);
            }
            if (data.hasOwnProperty('setOrExpired')) {
                obj['setOrExpired'] = ApiClient.convertToType(data['setOrExpired'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} result
 */
DeferredResult.prototype['result'] = undefined;

/**
 * @member {Boolean} setOrExpired
 */
DeferredResult.prototype['setOrExpired'] = undefined;






export default DeferredResult;

