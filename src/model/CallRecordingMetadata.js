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
import TranscriptionMetadata from './TranscriptionMetadata';

/**
 * The CallRecordingMetadata model module.
 * @module model/CallRecordingMetadata
 * @version 1.0.0
 */
class CallRecordingMetadata {
    /**
     * Constructs a new <code>CallRecordingMetadata</code>.
     * @alias module:model/CallRecordingMetadata
     */
    constructor() { 
        
        CallRecordingMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CallRecordingMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CallRecordingMetadata} obj Optional instance to populate.
     * @return {module:model/CallRecordingMetadata} The populated <code>CallRecordingMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CallRecordingMetadata();

            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('callId')) {
                obj['callId'] = ApiClient.convertToType(data['callId'], 'String');
            }
            if (data.hasOwnProperty('parentCallId')) {
                obj['parentCallId'] = ApiClient.convertToType(data['parentCallId'], 'String');
            }
            if (data.hasOwnProperty('recordingId')) {
                obj['recordingId'] = ApiClient.convertToType(data['recordingId'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('transferCallerId')) {
                obj['transferCallerId'] = ApiClient.convertToType(data['transferCallerId'], 'String');
            }
            if (data.hasOwnProperty('transferTo')) {
                obj['transferTo'] = ApiClient.convertToType(data['transferTo'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'String');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
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
            if (data.hasOwnProperty('transcription')) {
                obj['transcription'] = TranscriptionMetadata.constructFromObject(data['transcription']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} applicationId
 */
CallRecordingMetadata.prototype['applicationId'] = undefined;

/**
 * @member {String} accountId
 */
CallRecordingMetadata.prototype['accountId'] = undefined;

/**
 * @member {String} callId
 */
CallRecordingMetadata.prototype['callId'] = undefined;

/**
 * @member {String} parentCallId
 */
CallRecordingMetadata.prototype['parentCallId'] = undefined;

/**
 * @member {String} recordingId
 */
CallRecordingMetadata.prototype['recordingId'] = undefined;

/**
 * @member {String} to
 */
CallRecordingMetadata.prototype['to'] = undefined;

/**
 * @member {String} from
 */
CallRecordingMetadata.prototype['from'] = undefined;

/**
 * @member {String} transferCallerId
 */
CallRecordingMetadata.prototype['transferCallerId'] = undefined;

/**
 * @member {String} transferTo
 */
CallRecordingMetadata.prototype['transferTo'] = undefined;

/**
 * Format is ISO-8601
 * @member {String} duration
 */
CallRecordingMetadata.prototype['duration'] = undefined;

/**
 * @member {module:model/CallRecordingMetadata.DirectionEnum} direction
 */
CallRecordingMetadata.prototype['direction'] = undefined;

/**
 * @member {Number} channels
 */
CallRecordingMetadata.prototype['channels'] = undefined;

/**
 * @member {Date} startTime
 */
CallRecordingMetadata.prototype['startTime'] = undefined;

/**
 * @member {Date} endTime
 */
CallRecordingMetadata.prototype['endTime'] = undefined;

/**
 * @member {module:model/CallRecordingMetadata.FileFormatEnum} fileFormat
 */
CallRecordingMetadata.prototype['fileFormat'] = undefined;

/**
 * The current status of the recording. Current values are 'processing', 'partial', 'complete', 'deleted' and 'error'. Additional states may be added in the future, so your application must be tolerant of unknown values.
 * @member {String} status
 */
CallRecordingMetadata.prototype['status'] = undefined;

/**
 * @member {String} mediaUrl
 */
CallRecordingMetadata.prototype['mediaUrl'] = undefined;

/**
 * @member {module:model/TranscriptionMetadata} transcription
 */
CallRecordingMetadata.prototype['transcription'] = undefined;





/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
CallRecordingMetadata['DirectionEnum'] = {

    /**
     * value: "inbound"
     * @const
     */
    "inbound": "inbound",

    /**
     * value: "outbound"
     * @const
     */
    "outbound": "outbound"
};


/**
 * Allowed values for the <code>fileFormat</code> property.
 * @enum {String}
 * @readonly
 */
CallRecordingMetadata['FileFormatEnum'] = {

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



export default CallRecordingMetadata;

