const link = document.querySelectorAll(".nav_link")
const input = document.querySelector(".nav_imput")

link.forEach(element => {
    element.addEventListener("click", function(event){
        if(input.checked){
            input.checked = false;
        }
    })
})