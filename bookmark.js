function bookmark() {
    var path = window.location.pathname.split('/');
    localStorage.setItem('bookmark', path[path.length-1])
}


function loadMark() {
    var items = document.getElementsByTagName('p');
    var bookmark = localStorage.getItem('bookmark');
    for(var i = 0; i < items.length; i++) {
        var a = items[i].getElementsByTagName('a')[0];
        if (a == undefined) continue;
        if (bookmark == a.getAttribute('href')  ) {
            var img = new Image();
            img.src = "bookmark.png";
            items[i].insertBefore(img, a);
        }
    }
}