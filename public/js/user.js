 export default function user(socket) {

    socket.on("connect", () => {
      console.log(`I am user: ${socket.id} `);
      });
}


