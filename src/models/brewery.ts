/*
* BreweryGroupModel: models the group of breweries data
* id: string
* breweries: BreweryModel[]: contains the list of breweries
*/
export class BreweryGroupModel {
  id: string = "NotAvailable";
  breweries: BreweryModel[] = [];

  constructor(metadata?: any) {
    if (metadata) {
      if (metadata.id) this.id = metadata.id;
      if (Array.isArray(metadata.breweries)) this.breweries = metadata.breweries;
    }
  }
}

/*
* BreweryModel: models the brewery data
* id: string
* name: string
* country: string
* isMassOwned: boolean
*/
export class BreweryModel {
  id: string = "";
  name: string = "";
  country: string = "";
  isMassOwned: boolean = false;

  constructor(metadata?: any) {
    if (metadata) {
      if (metadata.id) this.id = metadata.id;
      if (metadata.name) this.name = metadata.name;
      if (Array.isArray(metadata.locations)) this.country = metadata.locations[0].countryIsoCode;
      this.isMassOwned = metadata.isMassOwned;
    }
  }
}