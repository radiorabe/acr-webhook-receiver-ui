/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axios[method](queryUrl, body, config)
  } else if (method === 'get') {
    return axios[method](queryUrl, {
      params: form
    }, config)
  } else {
    return axios[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    Hooks to receive ACRCloud events on and a simple API to query the received data.
Stores all data in a PostgreSQL database for later querying.

 ==========================================================*/
/**
 * This hook is called by the ACRCloud service when it knows what song we weere playing.
 * request: addResult
 * url: addResultURL
 * method: addResult_TYPE
 * raw_url: addResult_RAW_URL
 * @param xRequestId - 
 * @param body - ACRCloud results entry
 */
export const addResult = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/v1/_webhooks/results'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addResult_RAW_URL = function() {
  return '/v1/_webhooks/results'
}
export const addResult_TYPE = function() {
  return 'post'
}
export const addResultURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/v1/_webhooks/results'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * This endpoint implements the same API as upstream ACRCloud does.
 * request: getCustomStream
 * url: getCustomStreamURL
 * method: getCustomStream_TYPE
 * raw_url: getCustomStream_RAW_URL
 * @param xRequestId - 
 * @param streamId - Stream ID, default is the non-realtime RaBe program.
 * @param accessKey - Ignored but available for compatibility with upstream.
 * @param date - The UTC date in the format 'YYYYMMDD'
 */
export const getCustomStream = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/v1/monitor-streams/{streamId}/results'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{streamId}', `${parameters['streamId']}`)
  if (parameters['streamId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: streamId'))
  }
  if (parameters['accessKey'] !== undefined) {
    queryParameters['access_key'] = parameters['accessKey']
  }
  if (parameters['date'] !== undefined) {
    queryParameters['date'] = parameters['date']
  }
  if (parameters['date'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: date'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getCustomStream_RAW_URL = function() {
  return '/v1/monitor-streams/{streamId}/results'
}
export const getCustomStream_TYPE = function() {
  return 'get'
}
export const getCustomStreamURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/v1/monitor-streams/{streamId}/results'
  path = path.replace('{streamId}', `${parameters['streamId']}`)
  if (parameters['accessKey'] !== undefined) {
    queryParameters['access_key'] = parameters['accessKey']
  }
  if (parameters['date'] !== undefined) {
    queryParameters['date'] = parameters['date']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * This is endpoint is useful for looking into and exporting the dataset.
 * request: getResults
 * url: getResultsURL
 * method: getResults_TYPE
 * raw_url: getResults_RAW_URL
 * @param xRequestId - 
 * @param offset - The number of items to skip before starting to collect the result set.
 * @param limit - The numbers of items to return.
 * @param from - 
 * @param to - 
 */
export const getResults = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/v1/results'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['from'] !== undefined) {
    queryParameters['from'] = parameters['from']
  }
  if (parameters['to'] !== undefined) {
    queryParameters['to'] = parameters['to']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getResults_RAW_URL = function() {
  return '/v1/results'
}
export const getResults_TYPE = function() {
  return 'get'
}
export const getResultsURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/v1/results'
  if (parameters['offset'] !== undefined) {
    queryParameters['offset'] = parameters['offset']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['from'] !== undefined) {
    queryParameters['from'] = parameters['from']
  }
  if (parameters['to'] !== undefined) {
    queryParameters['to'] = parameters['to']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Use this endpoint to fetch information on an exact entry.
 * request: getResult
 * url: getResultURL
 * method: getResult_TYPE
 * raw_url: getResult_RAW_URL
 * @param xRequestId - 
 * @param resultId - 
 */
export const getResult = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/v1/results/{resultId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{resultId}', `${parameters['resultId']}`)
  if (parameters['resultId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: resultId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getResult_RAW_URL = function() {
  return '/v1/results/{resultId}'
}
export const getResult_TYPE = function() {
  return 'get'
}
export const getResultURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/v1/results/{resultId}'
  path = path.replace('{resultId}', `${parameters['resultId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}