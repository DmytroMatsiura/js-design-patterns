const Participant = function (name) {
  this.name = name
  this.chatroom = null
}

Participant.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to)
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`)
  }
}

const Chatroom = function () {
  const participants = {}

  return {

      register: function (participant) {
        participants[participant.name] = participant
        participant.chatroom = this
      },

      send: function (message, from, to) {
          if (to) {
            to.receive(message, from)
          } else {
            for (key in participants) {
              if (participants[key] !== from) {
                participants[key].receive(message, from)
              }
            }
          }
      }
  }
}

function run() {

  const yoko = new Participant('Yoko')
  const john = new Participant('John')
  const paul = new Participant('Paul')
  const ringo = new Participant('Ringo')

  const chatroom = new Chatroom()
  chatroom.register(yoko)
  chatroom.register(john)
  chatroom.register(paul)
  chatroom.register(ringo)

  yoko.send('All you need is love.')
  yoko.send('I love you John.')
  john.send('Hey, no need to broadcast', yoko)
  paul.send('Ha, I heard that!')
  ringo.send('Paul, what do you think?', paul)
}
