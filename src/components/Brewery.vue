<template>
  <li class="brewery">
    <div class="name">{{ name }}</div>
    <div class="country" :class="{ 'not-available': isCountryEmpty }">{{ displayedCountry }}</div>
    <div class="mass-owned">{{ isMassOwned }}</div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Brewery extends Vue {
  /*************************************************/
  /* EXTERNAL PROPERTIES */
  /*************************************************/
  @Prop({ default: "" })
  id!: string;

  @Prop({ default: "" })
  name!: string;

  @Prop({ default: false })
  isMassOwned!: boolean;

  @Prop({ default: "" })
  country!: string;

  /*************************************************/
  /* COMPUTED */
  /*************************************************/

  get isCountryEmpty() {
    return this.country === "";
  }

  /* returns "Not Available" if the country value is empty */
  get displayedCountry() {
    if (!this.country) return "Not Available";
    return this.country;
  }
}
</script>

<style lang="scss" scoped>
.brewery {
  div {
    width: 400px;
    display: inline-block;
  }

  .country.not-available {
    font-style: italic;
  }
}
</style>