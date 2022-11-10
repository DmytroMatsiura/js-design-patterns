const Mortgage = function (name) {
  this.name = name
}

Mortgage.prototype = {

  applyFor: function (amount) {
      var result = 'approved'
      if (!new Bank().verify(this.name, amount)) {
          result = 'denied'
      } else if (!new Credit().get(this.name)) {
          result = 'denied'
      } else if (!new Background().check(this.name)) {
          result = 'denied'
      }
      return `${this.name} has been ${result} for a ${amount} ${mortgage}`
  }
}

const Bank = function () {
  this.verify = function (name, amount) {
    // Some complex logic can be here
    return true
  }
}

const Credit = function () {
  this.get = function (name) {
    // Some complex logic can be here
    return true
  }
}

const Background = function () {
  this.check = function (name) {
    // Some complex logic can be here
    return true
  }
}

function run() {
  const mortgage = new Mortgage('Joan Templeton')
  const result = mortgage.applyFor('$100,000')

  console.log(result)
}
