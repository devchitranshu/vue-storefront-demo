import Vue from 'vue'
import EventBus from 'core/plugins/event-bus'

import extensionStore from './store'
import extensionRoutes from './router'
import FormComponent from './components/form'

const EXTENSION_KEY = 'payment-creditcard'

export default function (app, router, store, config) {
  router.addRoutes(extensionRoutes) // add custom routes
  store.registerModule(EXTENSION_KEY, extensionStore) // add custom store

  app.$on('application-after-init', () => {
    console.debug(EXTENSION_KEY + ' extension initialised')
  })

  // Add this payment method to the config.
  let paymentMethodConfig = {
    'title': 'Credit Card',
    'code': 'creditcard',
    'cost': 0,
    'costInclTax': 0,
    'default': false,
    'offline': false
  }

  app.$store.dispatch('payment/addMethod', paymentMethodConfig)

  // Mount the info component when required.
  EventBus.$on('checkout-payment-method-changed', (paymentMethodCode) => {
    if (paymentMethodCode === 'creditcard') {
      // Register the handler for what happens when they click the place order button.
      EventBus.$on('checkout-before-placeOrder', placeOrder)
      const Component = Vue.extend(FormComponent)
      const componentInstance = (new Component())
      componentInstance.$mount('#checkout-payment-form-creditcard')
      store.commit('showForm')
      // Dynamically inject a component into the order review section (optional)
    } else {
      // unregister the extensions placeorder handler
      EventBus.$off('checkout-before-placeOrder', placeOrder)
      store.commit('hideForm')
    }
  })

  return { EXTENSION_KEY, extensionRoutes, extensionStore }
}

// Place the order. Payload is empty as we don't have any specific info to add for this payment method '{}'
function placeOrder () {
  EventBus.$emit('checkout-do-placeOrder', {})
}
