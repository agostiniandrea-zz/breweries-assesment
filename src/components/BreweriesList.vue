<template>
  <ul class="breweries-list">
    <h3 v-if="breweryGroup.id !== 'ALL'">CountryCode: {{ breweryGroup.id || "Not available" }}</h3>
    <div class="list-description">
      <div>Name</div>
      <div>Country code</div>
      <div>isMassOwned</div>
    </div>
    <Brewery
      v-for="brewery in breweryGroup.breweries"
      :key="brewery.id"
      :name="brewery.name"
      :country="brewery.country"
      :is-mass-owned="brewery.isMassOwned"
    />
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BreweryGroupModel } from "@/models/brewery";
import Brewery from "@/components/Brewery.vue";

@Component({
  components: {
    Brewery
  }
})
export default class BreweriesList extends Vue {
  /*************************************************/
  /* EXTERNAL PROPERTIES */
  /*************************************************/
  @Prop({ default: new BreweryGroupModel() })
  breweryGroup!: BreweryGroupModel;
}
</script>

<style lang="scss" scoped>
.list-description {
  margin-bottom: 20px;
  div {
    display: inline-block;
    font-weight: bold;
    width: 400px;
  }
}
</style>
