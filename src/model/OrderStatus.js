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
import OrderStatusResult from './OrderStatusResult';

/**
 * The OrderStatus model module.
 * @module model/OrderStatus
 * @version 1.0.0
 */
class OrderStatus {
    /**
     * Constructs a new <code>OrderStatus</code>.
     * If requestId exists, the result for that request is returned. See the Examples for details on the various responses that you can receive.  Generally, if you see a Response Code of 0 in a result for a TN, information will be available for it.  Any other Response Code will indicate no information was available for the TN.
     * @alias module:model/OrderStatus
     */
    constructor() { 
        
        OrderStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderStatus} obj Optional instance to populate.
     * @return {module:model/OrderStatus} The populated <code>OrderStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderStatus();

            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('failedTelephoneNumbers')) {
                obj['failedTelephoneNumbers'] = ApiClient.convertToType(data['failedTelephoneNumbers'], ['String']);
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], [OrderStatusResult]);
            }
        }
        return obj;
    }


}

/**
 * The requestId.
 * @member {String} requestId
 */
OrderStatus.prototype['requestId'] = undefined;

/**
 * The status of the request (IN_PROGRESS, COMPLETE, PARTIAL_COMPLETE, or FAILED).
 * @member {String} status
 */
OrderStatus.prototype['status'] = undefined;

/**
 * The telephone numbers whose lookup failed
 * @member {Array.<String>} failedTelephoneNumbers
 */
OrderStatus.prototype['failedTelephoneNumbers'] = undefined;

/**
 * The carrier information results for the specified telephone number.
 * @member {Array.<module:model/OrderStatusResult>} result
 */
OrderStatus.prototype['result'] = undefined;






export default OrderStatus;

