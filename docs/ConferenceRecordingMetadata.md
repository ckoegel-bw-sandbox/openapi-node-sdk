# NodeSdk.ConferenceRecordingMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** |  | [optional] 
**conferenceId** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**recordingId** | **String** |  | [optional] 
**duration** | **String** | Format is ISO-8601 | [optional] 
**channels** | **Number** |  | [optional] 
**startTime** | **Date** |  | [optional] 
**endTime** | **Date** |  | [optional] 
**fileFormat** | **String** |  | [optional] 
**status** | **String** | The current status of the recording. Current possible values are &#39;processing&#39;, &#39;partial&#39;, &#39;complete&#39;, &#39;deleted&#39;, and &#39;error&#39;. Additional states may be added in the future, so your application must be tolerant of unknown values. | [optional] 
**mediaUrl** | **String** |  | [optional] 



## Enum: FileFormatEnum


* `mp3` (value: `"mp3"`)

* `wav` (value: `"wav"`)




