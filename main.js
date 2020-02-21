window.onscroll = function () {
    onScrollNavbar();
}

function onScrollNavbar () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('navbarId').style.backgroundColor = "#FFFFFF";
        document.getElementById('logoId').style.color= 'black';
    } else {
        document.getElementById('navbarId').style.backgroundColor='transparent';
        document.getElementById('logoId').style.color= 'white';
    }
}

