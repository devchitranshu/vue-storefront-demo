<template>
  <div>
    <div class="brdr-bottom-1 brdr-cl-primary pb60">
      <h3 class="m0 mb5 cl-accent summary-title">
        {{ $t('Order Summary') }}
      </h3>
      <product v-for="product in items" :key="product.sku" :product="product"/>
      <div v-if="items.length" class="checkout cl-accent">

        <div v-for="(segment, index) in totals" :key="index" class="row pt15 pb20 pl30 pr55 " v-if="segment.code !== 'grand_total'">
          <div class="col-xs cl-accent">
            {{ segment.title }}
          </div>
          <div v-if="segment.value != null" class="col-xs align-right cl-accent h4">
            {{ segment.value | price }}
          </div>
        </div>

        <div class="row pt20 pb20 pl30 pr55 weight-400 h3" v-for="(segment, index) in totals" :key="index" v-if="segment.code === 'grand_total'">
          <div class="col-xs">
            {{ segment.title }}
          </div>
          <div class="col-xs align-right">
            {{ segment.value | price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartSummary from 'core/components/blocks/Checkout/CartSummary'
import Product from './Product'

export default {
  components: {
    Product
  },
  mixins: [CartSummary]
}
</script>

<style lang="scss" scoped>
  .summary-title {
    @media (max-width: 767px) {
      margin-left: 0;
    }
  }
</style>
