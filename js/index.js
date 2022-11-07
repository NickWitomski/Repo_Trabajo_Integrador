// let valueInput = document.getElementById("#input").value;
// let accionFormulario = document.getElementById("#form").action;

// if (valueInput === null && valueInput === undefined){
//     alert("No ingreso una búsqueda")
//     accionFormulario = null
// } else if (valueInput.length < 3){
//     alert ("La busqueda debe ser como minimo de 3 caracteres")
//     accionFormulario = null
// } else {
//     accionFormulario = "search-results.html"
// }

// let form = document.getElementById("form");
// form.onclick = function(e){
//   e.preventDefault();
// let name = document.getElementById("name").value;
//   console.log(name);
// document.getElementById('print').innerHTML=name.toUpperCase();
// }

document.addEventListener("click",function(){
    document.getElementById("form").addEventListener("submit",validarFomrulario);
});

document.addEventListener("keydown",function(){
    document.getElementById("form").addEventListener("submit",validarFomrulario);
    //falta agregar que cuando apretas el campo de formulario denuevo, se vaya el alert solo
});

function validarFomrulario(evento){
    evento.preventDefault();
    let valor = document.getElementById("input").value;
    if (valor.length === 0){
        alerta = alert("No escribiste nada");
        return;
    } else if(valor.length < 3){
        alerta = alert ("Tu busqueda tiene que ser minimo de 3 caracteres")
        return;
    }
    this.submit();
}