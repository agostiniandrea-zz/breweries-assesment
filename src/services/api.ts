import axios, { AxiosInstance } from "axios"

const API_KEY = "659d5c6b8f3d2447f090119e48202fdb"
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

/*************************************************/
/* BASE SETUP */
/*************************************************/
const baseRequest: AxiosInstance = axios.create({
  baseURL: `${CORS_PROXY}https://sandbox-api.brewerydb.com/v2`
});

/*************************************************/
/* METHODS */
/*************************************************/

/* 
* getBreweriesRequest
* returns the list of breweries with locations information
*/
export function getBreweriesRequest() {
  return baseRequest.get(`/breweries/?withLocations=Y&key=${API_KEY}`, {
    headers: ({
      includeToken: true,
      includeCustomerToken: true
    })
  });
}