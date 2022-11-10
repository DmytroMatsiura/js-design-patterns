
const Request = function (amount) {
  this.amount = amount
  console.log(`Requested: $${amount}\n`)
}

Request.prototype = {
  get: function (bill) {
      const count = Math.floor(this.amount / bill)
      this.amount -= count * bill
      console.log(`Dispense ${count} $${bill} bills`)
      return this
  }
}
function run() {
  const request = new Request(378)

  request.get(100).get(50).get(20).get(10).get(5).get(1)
}
