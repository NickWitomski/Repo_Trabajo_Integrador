let apiKey = "399cd9827f714613d04693cee425808c"

// fetch(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}&language=en-US`)
// .then(function(resp){
//     return resp.json()
// })
// .then(function(data){
//     if (valor === data.title){
//         let resultado = mandarFomrulario(evento)
//         console.log(resultado)
//     }
// })
// .catch (function(error){
//     console.log(error)
// })


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
        return
    } else if(valor.length < 3){
        alerta = alert ("Tu busqueda tiene que ser minimo de 3 caracteres");
        return
    }
    this.submit();
}

let container = document.querySelector(".categoria")
let movies = " "

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    for (i=0; i< 5;i++){
        movies += `<article class="articulo">
    <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].title}' />
    <h2 class="titulocategorias"> ${data.results[i].title} </h2>
    <p class="fecha"> ${data.results[i].release_date }</p>
    </article>`
    }
    container.innerHTML = movies
})
.catch (function(error){
    console.log(error)
})
