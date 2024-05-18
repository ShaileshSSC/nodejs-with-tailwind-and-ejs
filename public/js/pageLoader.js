 export default function pageLoader(socket) {

    socket.on("loadLobby", () => {
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
}


