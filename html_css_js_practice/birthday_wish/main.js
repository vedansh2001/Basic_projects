document.getElementById('button').addEventListener('click', function() {
    let p = document.getElementById('inputbox');
    let text = p.value;
    let q = document.getElementById('box');
    q.remove();
    let r = document.getElementById('fullpage');
    r.style.backgroundImage = "url('https://images.unsplash.com/photo-1482731910308-31e96e5d1d28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";

    const newdiv = document.createElement('newdiv');
    newdiv.innerHTML = `Happy Birthday ${text}`

    newdiv.style.cssText = 'color: white; font-size: 130px; font-weight:800; font-family: cursive; -webkit-text-stroke: 8px black; background-color: purple; height:600px; width:600px; margin-left: 450px; margin-bottom: 120px; opacity:0.15; box-shadow: inset 5px 5px 50px 50px rgba(180, 165, 0, 0.4), 5px 5px 50px 50px rgba(128, 0, 128, 0.4); '

    r.appendChild(newdiv);
})