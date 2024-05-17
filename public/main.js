
function setInnerHtml(elm, html) {
    elm.innerHTML = html;
    Array.from(elm.querySelectorAll("script")).forEach(oldScript => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes)
        .forEach(attr => newScript.setAttribute(attr.name, attr.value));
      newScript.appendChild(document.createTextNode(oldScript.innerHTML));
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }

const router = async () => {
    const routes = [
        { path: '/', load: () => loadHTML('Home') },
        {path: '/users', load: () => loadHTML('Users')},
    ]

    const loadHTML = async (component) => {
        const response = await fetch(`/components/${component}.html`);
        const html = await response.text();
        return html;
    }

    let promises = routes.map( async route => {
        const htmlRaw = await route.load();
        return {path: route.path, htmlRaw}
    })

    const updatedRoutes = await Promise.all(promises);

    const currentRoute = updatedRoutes.find(route => 
        route.path == location.pathname
    )

    document.getElementById("root").innerHTML = currentRoute.htmlRaw;

    setInnerHtml(document.querySelector('#root'), currentRoute.htmlRaw);



    // currentRoute.loadHTML().then(html => {
    //     document.getElementById("root").innerHTML = html;

    //     setInnerHtml(document.querySelector('#root'), html);
    // })
    // document.getElementById("root").innerHTML = await currentRoute.view();

    // setInnerHtml(document.querySelector('#root'), await currentRoute.view());
}

router();