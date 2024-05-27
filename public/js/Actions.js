function Actions(socket) {


    socket.on("UI", (page) => {

        console.log("new page loaded");

        document.getElementById('root').innerHTML = '';
        const exe = document.createRange().createContextualFragment(page);
        document.getElementById('root').append(exe);
    });

}
