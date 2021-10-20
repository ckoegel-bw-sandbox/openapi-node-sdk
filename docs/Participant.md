# NodeSdk.Participant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique id of the participant | [optional] [readonly] 
**callbackUrl** | **String** | Full callback url to use for notifications about this participant | [optional] 
**publishPermissions** | **[String]** | Defines if this participant can publish audio or video | [optional] 
**sessions** | **[String]** | List of session ids this participant is associated with  Capped to one  | [optional] [readonly] 
**subscriptions** | [**Subscriptions**](.md) |  | [optional] 
**tag** | **String** | User defined tag to associate with the participant | [optional] 
**deviceApiVersion** | **String** | Optional field to define the device api version of this participant | [optional] [default to &#39;V2&#39;]



## Enum: [PublishPermissionsEnum]


* `AUDIO` (value: `"AUDIO"`)

* `VIDEO` (value: `"VIDEO"`)





## Enum: DeviceApiVersionEnum


* `V3` (value: `"V3"`)

* `V2` (value: `"V2"`)




