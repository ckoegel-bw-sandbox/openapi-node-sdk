# NodeSdk.TwoFactorCodeRequestSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | **String** | The phone number to send the 2fa code to. | 
**from** | **String** | The application phone number, the sender of the 2fa code. | 
**applicationId** | **String** | The application unique ID, obtained from Bandwidth. | 
**scope** | **String** | An optional field to denote what scope or action the 2fa code is addressing.  If not supplied, defaults to \&quot;2FA\&quot;. | [optional] 
**message** | **String** | The message format of the 2fa code.  There are three values that the system will replace \&quot;{CODE}\&quot;, \&quot;{NAME}\&quot;, \&quot;{SCOPE}\&quot;.  The \&quot;{SCOPE}\&quot; and \&quot;{NAME} value template are optional, while \&quot;{CODE}\&quot; must be supplied.  As the name would suggest, code will be replace with the actual 2fa code.  Name is replaced with the application name, configured during provisioning of 2fa.  The scope value is the same value sent during the call and partitioned by the server. | 
**digits** | **Number** | The number of digits for your 2fa code.  The valid number ranges from 2 to 8, inclusively. | 


