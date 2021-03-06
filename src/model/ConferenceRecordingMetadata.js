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
 * The ConferenceRecordingMetadata model module.
 * @module model/ConferenceRecordingMetadata
 * @version 1.0.0
 */
class ConferenceRecordingMetadata {
    /**
     * Constructs a new <code>ConferenceRecordingMetadata</code>.
     * @alias module:model/ConferenceRecordingMetadata
     */
    constructor() { 
        
        ConferenceRecordingMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConferenceRecordingMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConferenceRecordingMetadata} obj Optional instance to populate.
     * @return {module:model/ConferenceRecordingMetadata} The populated <code>ConferenceRecordingMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConferenceRecordingMetadata();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('conferenceId')) {
                obj['conferenceId'] = ApiClient.convertToType(data['conferenceId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('recordingId')) {
                obj['recordingId'] = ApiClient.convertToType(data['recordingId'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'String');
            }
            if (data.hasOwnProperty('channels')) {
                obj['channels'] = ApiClient.convertToType(data['channels'], 'Number');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
            }
            if (data.hasOwnProperty('fileFormat')) {
                obj['fileFormat'] = ApiClient.convertToType(data['fileFormat'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('mediaUrl')) {
                obj['mediaUrl'] = ApiClient.convertToType(data['mediaUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} accountId
 */
ConferenceRecordingMetadata.prototype['accountId'] = undefined;

/**
 * @member {String} conferenceId
 */
ConferenceRecordingMetadata.prototype['conferenceId'] = undefined;

/**
 * @member {String} name
 */
ConferenceRecordingMetadata.prototype['name'] = undefined;

/**
 * @member {String} recordingId
 */
ConferenceRecordingMetadata.prototype['recordingId'] = undefined;

/**
 * Format is ISO-8601
 * @member {String} duration
 */
ConferenceRecordingMetadata.prototype['duration'] = undefined;

/**
 * @member {Number} channels
 */
ConferenceRecordingMetadata.prototype['channels'] = undefined;

/**
 * @member {Date} startTime
 */
ConferenceRecordingMetadata.prototype['startTime'] = undefined;

/**
 * @member {Date} endTime
 */
ConferenceRecordingMetadata.prototype['endTime'] = undefined;

/**
 * @member {module:model/ConferenceRecordingMetadata.FileFormatEnum} fileFormat
 */
ConferenceRecordingMetadata.prototype['fileFormat'] = undefined;

/**
 * The current status of the recording. Current possible values are 'processing', 'partial', 'complete', 'deleted', and 'error'. Additional states may be added in the future, so your application must be tolerant of unknown values.
 * @member {String} status
 */
ConferenceRecordingMetadata.prototype['status'] = undefined;

/**
 * @member {String} mediaUrl
 */
ConferenceRecordingMetadata.prototype['mediaUrl'] = undefined;





/**
 * Allowed values for the <code>fileFormat</code> property.
 * @enum {String}
 * @readonly
 */
ConferenceRecordingMetadata['FileFormatEnum'] = {

    /**
     * value: "mp3"
     * @const
     */
    "mp3": "mp3",

    /**
     * value: "wav"
     * @const
     */
    "wav": "wav"
};



export default ConferenceRecordingMetadata;

