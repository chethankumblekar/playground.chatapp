import { RequestType } from "./requestType";
import GetWebApiToken from "../auth/tokenProvider";

export function callService(
  serviceName: string,
  methodName: string,
  requestType: RequestType,
  postObject?: any,
  skipResp?: boolean
): any {
  const baseUrl = "https://localhost:7058/api";
  if (baseUrl === undefined) {
    throw new Error("Server URL is not defined.");
  }
  const completeURL: string = baseUrl + "/" + serviceName + "/" + methodName;
  let token = GetWebApiToken();
  if (skipResp) {
    return fetch(
      getRequest(completeURL, requestType, token, JSON.stringify(postObject))
    ).then((response) => checkStatus(response));
  } else {
    return fetch(
      getRequest(completeURL, requestType, token, JSON.stringify(postObject))
    )
      .then((response) => checkStatus(response))
      .then((response) => parseJSON(response));
  }
}

function getRequest(
  requestUri: string,
  requestType: RequestType,
  token: string | null,
  body?: string | FormData
): Request {
  if (token !== null) {
    return new Request(
      requestUri,
      getRequestInitilization(body, requestType, token)
    );
  }
  return new Request(
    requestUri,
    getRequestInitilization(body, requestType, token)
  );
}

function getRequestInitilization(
  body: string | undefined | FormData,
  requestType: RequestType,
  token: string | null
): RequestInit {
  const headers = new Headers();
  if (token !== null) {
    headers.append("Authorization", `Bearer ${token}`);
  }
  headers.append("Cache-Control", "no-cache");
  headers.append("Access-Control-Allow-Methods", "*");
  headers.append("Content-Type", "application/json");

  const requestInit: RequestInit = {
    body: body,
    headers: headers,
    method: requestType,
  };
  return requestInit;
}

async function checkStatus(response: Response): Promise<Response> {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    // toast.error(
    //   await response.json().then(() => {
    //     return response.statusText;
    //   })
    // );
    console.log(response);

    return response.json().then((errMsg: object) => {
      throw {
        errorMessage: errMsg,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
      };
    });
  }
}

function parseJSON(response: Response): Promise<object> {
  return response.text().then((text) => {
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  });
}
