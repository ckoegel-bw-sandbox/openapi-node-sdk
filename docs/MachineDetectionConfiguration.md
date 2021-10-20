# NodeSdk.MachineDetectionConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **String** | The machine detection mode. If set to &#39;async&#39;, the detection result will be sent in a &#39;machineDetectionComplete&#39; callback. If set to &#39;sync&#39;, the &#39;answer&#39; callback will wait for the machine detection to complete and will include its result. Default is &#39;async&#39;. | [optional] 
**detectionTimeout** | **Number** | Total amount of time (in seconds) before giving up. | [optional] 
**silenceTimeout** | **Number** | If no speech is detected in this period, a callback with a &#39;silence&#39; result is sent. Default is 10 seconds. | [optional] 
**speechThreshold** | **Number** | When speech has ended and a result couldn&#39;t be determined based on the audio content itself, this value is used to determine if the speaker is a machine based on the speech duration. If the length of the speech detected is greater than or equal to this threshold, the result will be &#39;answering-machine&#39;. If the length of speech detected is below this threshold, the result will be &#39;human&#39;. Default is 10 seconds. | [optional] 
**speechEndThreshold** | **Number** | Amount of silence (in seconds) before assuming the callee has finished speaking. | [optional] 
**delayResult** | **Boolean** | If set to &#39;true&#39; and if an answering machine is detected, the &#39;answering-machine&#39; callback will be delayed until the machine is done speaking or until the &#39;detectionTimeout&#39; is exceeded. If false, the &#39;answering-machine&#39; result is sent immediately. Default is &#39;false&#39;. | [optional] 
**callbackUrl** | **String** | The URL to send the &#39;machineDetectionComplete&#39; callback when the detection is completed. Only for &#39;async&#39; mode. | [optional] 
**callbackMethod** | **String** |  | [optional] 
**fallbackUrl** | **String** |  | [optional] 
**fallbackMethod** | **String** |  | [optional] 
**username** | **String** |  | [optional] 
**password** | **String** |  | [optional] 
**fallbackUsername** | **String** |  | [optional] 
**fallbackPassword** | **String** |  | [optional] 



## Enum: ModeEnum


* `sync` (value: `"sync"`)

* `async` (value: `"async"`)





## Enum: CallbackMethodEnum


* `POST` (value: `"POST"`)

* `GET` (value: `"GET"`)





## Enum: FallbackMethodEnum


* `POST` (value: `"POST"`)

* `GET` (value: `"GET"`)




