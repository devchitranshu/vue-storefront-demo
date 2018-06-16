<template>
  <div id="checkout" class="pt25 pb25">
    <div class="container">
      <div class="row" v-show="!orderPlaced">
        <div class="checkout-title py5 px20">
          <h3>{{ $t('Checkout') }}</h3>
          <span v-if="!currentUser" class="loginLink" @click.prevent="gotoAccount">
            {{ $t('Already registered? Click here to log in.') }}
          </span>
        </div>
      </div>
      <div class="row" v-show="!orderPlaced">
        <div class="col-sm-4 col-xs-12 p25">
          <personal-details v-if="!currentUser" class="line relative" :is-active="true"/>
          <shipping class="line relative" :is-active="true"/>
        </div>

        <div class="col-sm-4 col-xs-12 p25">
          <payment class="line relative" :is-active="true"/>
          <div id="custom-steps"/>
        </div>

        <div class="col-sm-4 hidden-xs-12 p25">
          <cart-summary />
          <order-review class="line  relative" :is-active="true"/>
        </div>
      </div>
    </div>
    <thank-you-page v-show="orderPlaced" />
  </div>
</template>

<script>
import Checkout from 'core/pages/Checkout'

import PersonalDetails from 'theme/components/core/blocks/Checkout/PersonalDetails'
import Shipping from 'theme/components/core/blocks/Checkout/Shipping'
import Payment from 'theme/components/core/blocks/Checkout/Payment'
import OrderReview from 'theme/components/core/blocks/Checkout/OrderReview'
import CartSummary from 'theme/components/core/blocks/Checkout/CartSummary'
import ThankYouPage from 'theme/components/core/blocks/Checkout/ThankYouPage'

export default {
  components: {
    PersonalDetails,
    Shipping,
    Payment,
    OrderReview,
    CartSummary,
    ThankYouPage
  },
  mixins: [Checkout]
}
</script>

<style lang="scss">
  @import '~theme/css/base/text';
  @import '~theme/css/variables/colors';
  @import '~theme/css/helpers/functions/color';
  $bg-secondary: color(secondary, $colors-background);
  $color-tertiary: color(tertiary);
  $color-secondary: color(secondary);
  $color-error: color(error);
  $color-white: color(white);
  $color-black: color(black);

  #checkout {
    .loginLink{
      color:#dea724;
      cursor:pointer;
    }
    .container{
      border: 1px solid #cc9900;
    }
    select {
      @extend .h5;
      padding: 10px 0;
      border: none;
      border-bottom: 1px solid $color-tertiary;
      width: 100%;
      -moz-appearance: none;
      -webkit-appearance: none;
      border-radius: 0;
      background-color: transparent;
    }
    .number-circle {
      width: 35px;
      height: 35px;

      @media (max-width: 768px) {
        width: 25px;
        height: 25px;
        line-height: 25px;
      }
    }
    .radioStyled {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 14px;
      line-height: 30px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
      }

      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        border: 1px solid $bg-secondary;

        &:after {
          content: "";
          position: absolute;
          display: none;
          top: 3px;
          left: 3px;
          width: 19px;
          height: 19px;
          border-radius: 50%;
          background: $color-secondary;
        }
      }

      input:checked ~ .checkmark:after {
        display: block;
      }
    }
  }
  .checkout-title {
    width: 100%;
    @media (max-width: 767px) {
      background-color: $bg-secondary;
      margin-bottom: 25px;

      h1 {
        font-size: 36px;
      }
    }
  }
</style>
