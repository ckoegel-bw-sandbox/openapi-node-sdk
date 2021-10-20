# NodeSdk.CallRecordingMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **String** |  | [optional] 
**accountId** | **String** |  | [optional] 
**callId** | **String** |  | [optional] 
**parentCallId** | **String** |  | [optional] 
**recordingId** | **String** |  | [optional] 
**to** | **String** |  | [optional] 
**from** | **String** |  | [optional] 
**transferCallerId** | **String** |  | [optional] 
**transferTo** | **String** |  | [optional] 
**duration** | **String** | Format is ISO-8601 | [optional] 
**direction** | **String** |  | [optional] 
**channels** | **Number** |  | [optional] 
**startTime** | **Date** |  | [optional] 
**endTime** | **Date** |  | [optional] 
**fileFormat** | **String** |  | [optional] 
**status** | **String** | The current status of the recording. Current values are &#39;processing&#39;, &#39;partial&#39;, &#39;complete&#39;, &#39;deleted&#39; and &#39;error&#39;. Additional states may be added in the future, so your application must be tolerant of unknown values. | [optional] 
**mediaUrl** | **String** |  | [optional] 
**transcription** | [**TranscriptionMetadata**](TranscriptionMetadata.md) |  | [optional] 



## Enum: DirectionEnum


* `inbound` (value: `"inbound"`)

* `outbound` (value: `"outbound"`)





## Enum: FileFormatEnum


* `mp3` (value: `"mp3"`)

* `wav` (value: `"wav"`)




