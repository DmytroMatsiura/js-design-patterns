function AdvancedShipping() {
  this.login = function (credentials) { /* ... */ }
  this.setStart = function (start) { /* ... */ }
  this.setDestination = function (destination) { /* ... */ }
  this.calculate = function (weight) { return '$39.50' }
}

function ShippingAdapter(credentials) {
  var shipping = new AdvancedShipping()

  shipping.login(credentials)

  return {
    request: function (zipStart, zipEnd, weight) {
      shipping.setStart(zipStart)
      shipping.setDestination(zipEnd)
      return shipping.calculate(weight)
    }
  }
}

function run() {

  const credentials = { token: '30a8-6ee1' }
  const adapter = new ShippingAdapter(credentials)

  const cost = adapter.request('78701', '10010', '2 lbs')

  console.log(`New cost: ${cost}`)
}
