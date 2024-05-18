 export default function user(socket) {

    socket.on("connect", () => {
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
      });
}


