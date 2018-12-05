var socket1 = new WebSocket("ws://localhost:3000/echo/")

socket1.onopen = () => {
      
}
socket1.onmessage = (e) => {
  console.log(e.data)
}

function protocol(form) {
  socket1.send(form.command.value)
}