let apiKey = "399cd9827f714613d04693cee425808c"

//VALIDANDO EL FORMULARIO
window.addEventListener("load",function(){
    let form = document.querySelector(".formulario")

    form.addEventListener("click",function(evento){
        mandarFomrulario(evento);
    });
    
    form.addEventListener("keydown",function(evento){
        mandarFomrulario(evento);
    });
})

// document.addEventListener("keydown",function(){
//     document.querySelector("#form").addEventListener("submit",function(e){
//         mandarFomrulario(e)
//     });
// });

function mandarFomrulario(evento){
    evento.preventDefault();
    let valor = document.querySelector(".input").value;
    if (valor.length === 0){
        document.querySelector(".error").innerText =  "No escribiste nada";
        return
    } else if(valor.length < 3){
        document.querySelector(".error").innerText =  "No escribiste nada";
        return
    } else{
        this.submit();
    }
}

//ARAMANDO EL HOME 

let container1 = document.querySelector(".categoria1")
let movies = " "

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    for (i=0; i< 5;i++){
        movies += `<article class="articulo">
    <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].title}' />
    <p class="titulocategorias"> ${data.results[i].title} </p>
    <p class="fecha"> ${data.results[i].release_date }</p>
    </article>`
    }
    container1.innerHTML = movies
})
.catch (function(error){
    console.log(error)
})

let container2 = document.querySelector(".categoria2")
let series = " "

fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    for (i=0; i< 5;i++){
        series += `<article class="articulo">
    <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].title}' />
    <p class="titulocategorias"> ${data.results[i].name} </p>
    <p class="fecha"> ${data.results[i].first_air_date}</p>
    </article>`
    }
    container2.innerHTML = series
})
.catch (function(error){
    console.log(error)
})

let container3 = document.querySelector(".categoria3")
let movies2 = " "

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    for (i=0; i< 5;i++){
        movies2 += `<article class="articulo"> 
        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].title}' />
        <p class="titulocategorias"> ${data.results[i].title} </p>
        <p class="fecha"> ${data.results[i].release_date}</p>
        </article>`
    }
    container3.innerHTML = movies2
})
.catch (function(error){
    console.log(error)
})

//AL HACER CLICK QUE MANDE A DETALLES

/*<a href="./detail-movie.html?id=${data.results[i].id}> 
   </a>
   
    // <button class="boton_ver_ahora" type="submit"> <a class="verahora" href="./detail-movie.html"> VER AHORA </a> </button>
    */