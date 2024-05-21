class Actions{
    constructor(socket) {
        socket.on("loadPage", async (page) => {
            const response = await fetch(`./pages/Home.html`);
            const html = await response.text();
            document.getElementById('root').innerHTML = '';
            const exe = document.createRange().createContextualFragment(html);
            document.getElementById('root').append(exe);
        });
    }
}