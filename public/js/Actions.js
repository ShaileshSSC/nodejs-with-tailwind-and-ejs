function Actions(socket) {


    socket.on("UI", (page) => {

        console.log("shai");
        
        delete aa;

        document.getElementById('root').innerHTML = '';
        const exe = document.createRange().createContextualFragment(page);
        document.getElementById('root').append(exe);
    });

}
