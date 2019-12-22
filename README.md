# brewery-assesment

## Project folders structure

### components
- BreweriesList: renders the information of each list of breweries
- Brewery: renders the information of each brewery

### models
- brewery:
  - BreweryGroupModel: models the data of each group of breweries
  - BreweryModel: models the data of each brewery

### services
- api: contains a list of functions, each of which is a link to the API endpoint
- data: for each function contained in the api.ts file it manages the result

### store

### views
- Home: displays a search input form used to filter breweries by name; displays a list of breweries that are filtered by country and type when the search is performed

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
