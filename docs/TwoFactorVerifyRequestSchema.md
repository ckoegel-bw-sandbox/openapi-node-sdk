# NodeSdk.TwoFactorVerifyRequestSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | **String** | The phone number to send the 2fa code to. | 
**applicationId** | **String** | The application unique ID, obtained from Bandwidth. | 
**scope** | **String** | An optional field to denote what scope or action the 2fa code is addressing.  If not supplied, defaults to \&quot;2FA\&quot;. | [optional] 
**expirationTimeInMinutes** | **Number** | The time period, in minutes, to validate the 2fa code.  By setting this to 3 minutes, it will mean any code generated within the last 3 minutes are still valid.  The valid range for expiration time is between 0 and 15 minutes, exclusively and inclusively, respectively. | 
**code** | **String** | The generated 2fa code to check if valid | 


