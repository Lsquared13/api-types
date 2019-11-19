export interface AuthResponseContext {
  [name: string]: any;
}

// My model for a simple token-based Lambda Authorizer function
// is based off of these docs: https://github.com/awsdocs/amazon-api-gateway-developer-guide/blob/master/doc_source/apigateway-use-lambda-authorizer.md#example-create-a-token-based-lambda-authorizer-function
// which described an object like this one below.
export interface APIGatewayAuthorizerEvent {
  authorizationToken: string
  methodArn: string
}

// API Gateway "event" request context
export interface APIGatewayEventRequestContext {
  accountId: string;
  apiId: string;
  authorizer: AuthResponseContext;
  connectedAt?: number;
  connectionId?: string;
  domainName?: string;
  eventType?: string;
  extendedRequestId?: string;
  httpMethod: string;
  identity: {
      accessKey: string | null;
      accountId: string | null;
      apiKey: string | null;
      apiKeyId: string | null;
      caller: string | null;
      cognitoAuthenticationProvider: string | null;
      cognitoAuthenticationType: string | null;
      cognitoIdentityId: string | null;
      cognitoIdentityPoolId: string | null;
      sourceIp: string;
      user: string | null;
      userAgent: string | null;
      userArn: string | null;
  };
  messageDirection?: string;
  messageId?: string | null;
  path: string;
  stage: string;
  requestId: string;
  requestTime?: string;
  requestTimeEpoch: number;
  resourceId: string;
  resourcePath: string;
  routeKey?: string;
}

// API Gateway "event"
export interface APIGatewayProxyEvent {
  body: string | null;
  headers: { [name: string]: string };
  multiValueHeaders: { [name: string]: string[] };
  httpMethod: string;
  isBase64Encoded: boolean;
  path: string;
  pathParameters: { [name: string]: string };
  queryStringParameters: { [name: string]: string } | null;
  multiValueQueryStringParameters: { [name: string]: string[] } | null;
  stageVariables: { [name: string]: string } | null;
  requestContext: APIGatewayEventRequestContext;
  resource: string;
}
export type APIGatewayEvent = APIGatewayProxyEvent; // Old name