# NodeSdk.MessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **String** | The ID of the Application your from number is associated with in the Bandwidth Phone Number Dashboard. | 
**to** | **[String]** | The phone number(s) the message should be sent to in E164 format | 
**from** | **String** | One of your telephone numbers the message should come from in E164 format | 
**text** | **String** | The contents of the text message. Must be 2048 characters or less. | [optional] 
**media** | **[String]** | A list of URLs to include as media attachments as part of the message. | [optional] 
**tag** | **String** | A custom string that will be included in callback events of the message. Max 1024 characters | [optional] 
**priority** | **String** | The message&#39;s priority, currently for toll-free or short code SMS only. Messages with a priority value of &#x60;\&quot;high\&quot;&#x60; are given preference over your other traffic. | [optional] 



## Enum: PriorityEnum


* `default` (value: `"default"`)

* `high` (value: `"high"`)




