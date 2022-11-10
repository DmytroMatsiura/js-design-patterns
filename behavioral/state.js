const TrafficLight = function () {
  let count = 0
  const currentState = new Red(this)

  this.change = function (state) {
    if (count++ >= 10) return
    currentState = state
    currentState.go()
  }

  this.start = function () {
    currentState.go()
  }
}

const Red = function (light) {
  this.light = light

  this.go = function () {
    console.log('Red --> for 1 minute')
    light.change(new Green(light))
  }
}

const Yellow = function (light) {
  this.light = light

  this.go = function () {
    console.log('Yellow --> for 10 seconds')
    light.change(new Red(light))
  }
}

const Green = function (light) {
  this.light = light

  this.go = function () {
    console.log('Green --> for 1 minute')
    light.change(new Yellow(light))
  }
}

function run() {

  const light = new TrafficLight()
  light.start()
}
