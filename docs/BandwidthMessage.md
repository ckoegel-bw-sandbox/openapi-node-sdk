# NodeSdk.BandwidthMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The id of the message | [optional] 
**owner** | **String** | The Bandwidth phone number associated with the message | [optional] 
**applicationId** | **String** | The application ID associated with the message | [optional] 
**time** | **String** | The datetime stamp of the message in ISO 8601 | [optional] 
**segmentCount** | **Number** | The number of segments the original message from the user is broken into before sending over to carrier networks | [optional] 
**direction** | **String** | The direction of the message relative to Bandwidth. Can be in or out | [optional] 
**to** | **[String]** | The phone number recipients of the message | [optional] 
**from** | **String** | The phone number the message was sent from | [optional] 
**media** | **[String]** | The list of media URLs sent in the message. Including a &#x60;filename&#x60; field in the &#x60;Content-Disposition&#x60; header of the media linked with a URL will set the displayed file name. This is a best practice to ensure that your media has a readable file name. | [optional] 
**text** | **String** | The contents of the message | [optional] 
**tag** | **String** | The custom string set by the user | [optional] 
**priority** | **String** | The priority specified by the user | [optional] 


