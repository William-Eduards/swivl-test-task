document.querySelector('.drop-btn').addEventListener('click', 
function dropDownFunc() {
    document.getElementById("profileOptions").classList.toggle("show");
})

window.onclick = function(e) {
    if (!e.target.matches('.drop-btn')) {
        var myDropdown = document.getElementById("profileOptions");
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
    }
}



