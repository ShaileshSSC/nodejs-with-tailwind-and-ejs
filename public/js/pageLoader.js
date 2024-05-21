async function pageLoader(socket) {

    const pages = [
        {name: 'Home'},
        {name: 'Page1'},
        {name: 'Page2'},
        {name: 'Page3'},
    ];

    const fetchHTML = async (page) => {
        const response = await fetch(`./pages/${page}.html`);
        const html = await response.text();
        return html;
    }

    //
    const htmlArray = await Promise.all(pages.map(async page => {
        const response = await fetchHTML(page.name)
        return {name: page.name, html: response}
    }));

    console.log(htmlArray);

    socket.on("loadPage", (page) => {
        const obj = htmlArray.find(el => 
            el.name == page
        )
        document.getElementById('app').innerHTML = '';
        const exe = document.createRange().createContextualFragment(obj.html);
        document.getElementById('app').append(exe);
    });
}


