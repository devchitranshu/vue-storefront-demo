<template>

  <div v-if="isShow" class="mb15 mt20 payment-paypal">
    Credit Card
  </div>

</template>

<script>
import store from './../store'
export default {
  name: 'PaymentCreditCard',
  data () {
    return {
      isShow: this.$store.state.isShow
    }
  },
  store
}
</script>
