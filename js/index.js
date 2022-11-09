// FALTA: La búsqueda debe obtener resultados de películas y de series usando el endpoint "Search Movies" y "Search TV Shows"
document.addEventListener("click",function(){
    document.getElementById("form").addEventListener("submit",mandarFomrulario);
});

document.addEventListener("keydown",function(){
    document.getElementById("form").addEventListener("submit",mandarFomrulario);
    //falta agregar que cuando apretas el campo de formulario denuevo, se vaya el alert solo
});

function mandarFomrulario(evento){
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

// let apiKey = "399cd9827f714613d04693cee425808c"
// let endPoint = "https://api.themoviedb.org/3/movie/popular?api_key="

// fetch(`${endPoint}${apiKey}`)
// .then(function(resp){
//     return resp.json()
// })
// .then(function(data){
//     console.log(data)
// })
// .catch (function(error){
//     console.log(error)
// })