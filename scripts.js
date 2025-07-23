document.addEventListener("DOMContentLoaded", function() {
   
    const botones = document.querySelectorAll(".btn");
    const resultado = document.getElementById("Valores");

    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", function() {
            
            if(resultado.textContent === "ERROR MATH") {
                resultado.textContent = ""
                resultado.innerHTML += botones[i].value;
           
            } else if(botones[i].value === "=") {
                resultado.textContent = eval(resultado.textContent);
                if(resultado.textContent === "Infinity") resultado.textContent = "ERROR MATH";
            }
            
            else if(botones[i].value === "reiniciar") resultado.innerHTML = "";

            else if(botones[i].value === "borrar") resultado.innerHTML = resultado.innerHTML.slice(0, -1)
            
            else resultado.innerHTML += botones[i].value;
        })
    }
})


