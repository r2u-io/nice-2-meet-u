export interface HTTPResponse {
  statusCode: number;
  headers: {
    'Access-Control-Allow-Origin': string;
    'Access-Control-Allow-Credentials': string;
  };
  body: string;
}

export function OK (body = {}): HTTPResponse {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': '*'
    },
    body: JSON.stringify(body)
  } as HTTPResponse
}

export function ACCEPTED (body = {}): HTTPResponse {
  return {
    statusCode: 202,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': '*'
    },
    body: JSON.stringify(body)
  } as HTTPResponse
}

export function FORBIDDEN (body = {}): HTTPResponse {
  return {
    statusCode: 403,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': '*'
    },
    body: JSON.stringify(body)
  } as HTTPResponse
}

export function NOTFOUND (body = {}): HTTPResponse {
  return {
    statusCode: 404,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': '*'
    },
    body: JSON.stringify(body)
  } as HTTPResponse
}

export function INTERNALERROR (body = {}): HTTPResponse {
  return {
    statusCode: 500,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': '*'
    },
    body: JSON.stringify(body)
  } as HTTPResponse
}
