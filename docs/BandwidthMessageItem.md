# NodeSdk.BandwidthMessageItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messageId** | **String** | The message id | [optional] 
**accountId** | **String** | The account id of the message | [optional] 
**sourceTn** | **String** | The source phone number of the message | [optional] 
**destinationTn** | **String** | The recipient phone number of the message | [optional] 
**messageStatus** | **String** | The status of the message | [optional] 
**messageDirection** | **String** | The direction of the message relative to Bandwidth. INBOUND or OUTBOUND | [optional] 
**messageType** | **String** | The type of message. sms or mms | [optional] 
**segmentCount** | **Number** | The number of segments the message was sent as | [optional] 
**errorCode** | **Number** | The numeric error code of the message | [optional] 
**receiveTime** | **String** | The ISO 8601 datetime of the message | [optional] 
**carrierName** | **String** | The name of the carrier. Not currently supported for MMS, coming soon | [optional] 
**messageSize** | **Number** | The size of the message including message content and headers | [optional] 
**messageLength** | **Number** | The length of the message content | [optional] 
**attachmentCount** | **Number** | The number of attachments the message has | [optional] 
**recipientCount** | **Number** | The number of recipients the message has | [optional] 
**campaignClass** | **String** | The campaign class of the message, if it has one | [optional] 


