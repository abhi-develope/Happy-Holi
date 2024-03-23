let body = document.querySelector('body')
body.onclick = function(e){
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;

    let splash = document.createElement('span')
    splash.style.left = x + 'px';
    splash.style.top = y + 'px';

    this.appendChild(splash);

    setTimeout(()=> {
        splash.remove()
    },4000)
}