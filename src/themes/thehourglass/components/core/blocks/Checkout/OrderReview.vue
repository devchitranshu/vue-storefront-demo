<template>
  <div class="order-review">
    <div class="row pl20 pr20" v-show="isActive">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="row mb15 mt20">
          <div class="col-xs-12">
            <div class="row">
              <div class="cartsummary-wrapper">
                <cart-summary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-show="isActive">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="row">
          <div class="col-xs-12 col-md-8 px20">
            <button-full
              @click.native="placeOrder"
              data-testid="orderReviewSubmit"
              :class="{ 'button-disabled' : $v.orderReview.$invalid }"
            >
              {{ $t('Place the order') }}
            </button-full>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import Composite from 'core/mixins/composite'

import BaseCheckbox from 'theme/components/core/blocks/Form/BaseCheckbox'
import ButtonFull from 'theme/components/theme/ButtonFull'
import CartSummary from 'theme/components/core/blocks/Checkout/CartSummary'
import Modal from 'theme/components/core/Modal'
import OrderReview from 'core/components/blocks/Checkout/OrderReview'
import ValidationError from 'theme/components/core/ValidationError'

export default {
  components: {
    BaseCheckbox,
    ButtonFull,
    CartSummary,
    Modal,
    ValidationError
  },
  mixins: [OrderReview, Composite],
  validations: {
    orderReview: {
      terms: {
        required
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .link {
    text-decoration: underline;
  }

  .cartsummary-wrapper {
    @media (min-width: 767px) {
      display: none;
    }
  }
</style>
