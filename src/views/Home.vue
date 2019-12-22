<template>
  <div class="home">
    <p>
      Search by name:
      <input v-model="searchInput" placeholder="Type for searching" />
    </p>
    <h2 v-if="breweriesList">Breweries list:</h2>
    <BreweriesList
      class="breweries-list"
      v-for="breweryGroup of breweriesGroups"
      :brewery-group="breweryGroup"
      :key="breweryGroup.id"
    />
    <h3 v-if="!breweriesGroups.length">Any result found!</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getBreweries } from "@/services/data";
import { BreweryGroupModel, BreweryModel } from "@/models/brewery";
import BreweriesList from "@/components/BreweriesList.vue";
import _ from "underscore";

@Component({
  components: {
    BreweriesList
  }
})
export default class App extends Vue {
  /*************************************************/
  /* PROPERTIES */
  /*************************************************/
  breweriesList: BreweryModel[] = [];
  searchInput: string = "";

  /*************************************************/
  /* LIFECYCLE */
  /*************************************************/
  mounted() {
    this.init();
  }

  /*************************************************/
  /* METHODS */
  /*************************************************/
  async init() {
    try {
      this.breweriesList = await getBreweries();
    } catch (error) {
      console.log("Error during fetch of beers list", error);
    }
  }

  /*************************************************/
  /* COMPUTED */
  /*************************************************/

  /* returns a list of breweries filtered by the searchInput value */
  get filteredList() {
    return _.filter(this.breweriesList, (brewery: BreweryModel) =>
      brewery.name.toLowerCase().startsWith(this.searchInput.toLowerCase())
    );
  }

  /* returns an array of groups of breweries */
  get breweriesGroups(): BreweryGroupModel[] {
    /* returns the initial list of breweries if the search is not performed */
    if (!this.searchInput) {
      return [
        new BreweryGroupModel({
          id: "ALL",
          breweries: this.breweriesList
        })
      ];
    }

    /* creates an array of groups of breweries grouped by country */
    const countryGroups = _.groupBy(this.filteredList, function(brewery) {
      return brewery.country;
    });

    let groups: BreweryGroupModel[] = [];

    for (let country in countryGroups) {
      /* creates an array of groups of breweries grouped by type */
      const typeGroups = _.groupBy(countryGroups[country], function(brewery) {
        return brewery.isMassOwned;
      });

      /* pushes in the group variable each group */
      for (let type in typeGroups) {
        groups.push(
          new BreweryGroupModel({
            id: `${country || "NotAvailable"}_${type}`,
            breweries: typeGroups[type]
          })
        );
      }
    }

    return groups;
  }
}
</script>
