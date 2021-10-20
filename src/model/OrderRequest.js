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
 * The OrderRequest model module.
 * @module model/OrderRequest
 * @version 1.0.0
 */
class OrderRequest {
    /**
     * Constructs a new <code>OrderRequest</code>.
     * Create TN Lookup Request
     * @alias module:model/OrderRequest
     */
    constructor() { 
        
        OrderRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderRequest} obj Optional instance to populate.
     * @return {module:model/OrderRequest} The populated <code>OrderRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderRequest();

            if (data.hasOwnProperty('tns')) {
                obj['tns'] = ApiClient.convertToType(data['tns'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} tns
 */
OrderRequest.prototype['tns'] = undefined;






export default OrderRequest;

