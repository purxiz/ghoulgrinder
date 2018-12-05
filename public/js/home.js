var socket = new WebSocket("ws://localhost:3000/echo/")

socket.onopen = () => {
      
}
socket.onmessage = (e) => {
  console.log(e.data)
}

function protocol(form) {

  socket.send(form.protocol_.value)

}