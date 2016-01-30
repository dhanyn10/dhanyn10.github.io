document.getElementById('toggle-dropdown').addEventListener('click', toggleOpenMenu);
function toggleOpenMenu(){
    document.querySelector('#navigasi ul').className = "showmenu";
    document.querySelector('#toggle-dropdown').style.color = "white";
    document.getElementById('toggle-dropdown').removeEventListener('click', toggleOpenMenu);
    document.getElementById('toggle-dropdown').addEventListener('click', toggleCloseMenu);
}
function toggleCloseMenu(){
    document.querySelector('#navigasi ul').className = "hidemenu";
    document.querySelector('#toggle-dropdown').style.color = "black";
    document.getElementById('toggle-dropdown').removeEventListener('click', toggleCloseMenu);
    document.getElementById('toggle-dropdown').addEventListener('click', toggleOpenMenu);
}