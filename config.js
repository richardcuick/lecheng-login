//all the provided keys are examples, go to Amazon Cognito and get yours

AWSCognito.config.region = 'us-east-1'; //This is required to derive the endpoint

var poolData = {
    UserPoolId : 'us-east-1_7OdnLpFxS', // your user pool id here
    ClientId : '70pn1a0u22rtcotmf4tk0mc03t' // your client id here
};

var identityPoolId = 'us-east-1:c536adbd-fbe6-4807-a75c-872a4516020d'; //go to AWS Cognito Federated Identites

var userAttributes = ['phone_number']; //the standard attributes you require in AWS Cognito

var MFARequired = true; //do you require your clients to use MFA?