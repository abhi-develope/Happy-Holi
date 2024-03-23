let body = document.querySelector('body')
body.onclick = function(e){
    let images = [
        'url("holi1.png")',
        'url("holi2.png")',
        'url("holi3.png")',
        'url("holi4.png")',
        'url("holi5.png")',
        'url("holi6.png")',
        'url("holi7.png")',
        'url("holi8.png")',
        'url("holi9.png")',
        'url("holi10.png")',
        'url("holi11.png")',
        'url("holi12.png")',
    ]
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;

    let splash = document.createElement('span')
    splash.style.left = x + 'px';
    splash.style.top = y + 'px';

    let bg = images[Math.floor(Math.random() * images.length)];

    splash.style.backgroundImage = bg;

    this.appendChild(splash);

    setTimeout(()=> {
        splash.remove()
    },2000)
}