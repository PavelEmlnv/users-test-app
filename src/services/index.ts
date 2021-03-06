import { isEmpty } from 'lodash'

export const request = (
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  { url, body, bodyFormData } : { url: string, body?: any, bodyFormData?: any }
): Promise<IRequestResponse> => new Promise((resolve, reject) => {
  const baseUrl: string = 'https://gorest.co.in/public-api'
  const authorizationToken: string = 'ea7d863068c961cfe45be8a8b44b137db19f7e6f712db3f5134230c973ba6ca8'
  
  const options = {
    method,
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json",
      "Origin": ""
    }
  } as any

  options.headers.Authorization = authorizationToken

  if (body) {
    options.body = JSON.stringify(body)
  } else {
    delete options.headers["Content-type"]
  }
  if (bodyFormData) {
    delete options.headers["Content-type"]
    options.body = bodyFormData
  }

  // console.log("Made request:", method, `${ baseUrl }${ url }`, options)
  
  fetch(`${ baseUrl }${ url }`, options)
    .then(res => {
      const response: IRequestResponse = { code: res.status, message: "" }
      res.json()
        .then(jsonRes => {
          response.message = jsonRes.message || jsonRes.error || (jsonRes.errors && jsonRes.errors[0]) || response.message
          delete jsonRes.message; delete jsonRes.error; delete jsonRes.errors
          response.data = { ...jsonRes }
        })
        .catch(err => {
          // console.log("Error at parsing JSON:", `${ baseUrl }${ url }`, err)
          response.message = response.code !== 200 && response.code !== 201 && response.code !== 204 ? "Something went wrong" : ""
        })
        .finally(() => {
          isEmpty(response.data) && delete response.data
          // console.log("Response:", method, `${ baseUrl }${ url }`, response)
          response.code !== 200 && response.code !== 201 && response.code !== 204 ? reject(response) : resolve(response)
        })
    })
    .catch(err => {
      // console.log('Fetch Error: ', err)
      reject(err)
    })
})

export const formatDate = (date: string) => {
  const d: Date = new Date(date)
  const formattedDate: string = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
            d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2)
  return formattedDate  
}