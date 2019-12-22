import { BreweryModel } from '@/models/brewery'
import { getBreweriesRequest } from './api'

/*
* getBreweries
* invokes getBreweriesRequest (./api)
* returns an array of breweries ordered alphabetically
*/
export async function getBreweries(): Promise<BreweryModel[]> {
  const breweriesResponse = await getBreweriesRequest();
  const responseData = breweriesResponse.data;
  const dataList = responseData.data;

  const breweriesList: BreweryModel[] = [];
  if (Array.isArray(dataList) && dataList.length > 0) {
    dataList.forEach((beerData: any) => {
      breweriesList.push(new BreweryModel(beerData));
    });
  }

  breweriesList.sort((a, b) => a.country.localeCompare(b.country))

  return breweriesList;
}