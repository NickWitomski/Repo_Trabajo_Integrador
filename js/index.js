window.addEventListener("load",function(){
    document.getElementById("loader").classList.toggle("loader2")
})


let apiKey = "399cd9827f714613d04693cee425808c"

// //VALIDANDO EL FORMULARIO

window.addEventListener("load",function(){
    let input = document.querySelector(".input")
    let form = document.querySelector(".formulario")

    form.addEventListener("click",function(evento){
        formValidation(form,input);
    });
        
    form.addEventListener("keydown",function(evento){
        formValidation(form,input);
    });
    
    input.addEventListener("click",function(evento){
        document.querySelector(".error").innerText =  " ";
    })

})

function formValidation(form,input){
    form.addEventListener("submit",function(e){
        e.preventDefault()
        if (input.value.length<3 && input.value.length>0){
            document.querySelector(".error").innerText =  "Tu busqueda debe ser minimo de 3 caracteres";
        } else if (input.value.length === 0 || input.value.length === undefined ){
            document.querySelector(".error").innerText =  "No escribiste nada";
        }else{
            this.submit()
        }
    })
}


//ARAMANDO EL HOME 

let container1 = document.querySelector(".categoria1")
let movies = " "

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    for (i=0; i < 5;i++){
        movies += `<article class="articulo">
    <a href="./detail-movie.html?id=${data.results[i].id}"> 
        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].title}' />
    </a>
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
    console.log(data.results[1].id)
    for (i=0; i< 5;i++){
        series += `<article class="articulo">
        <a href="./detail-serie.html?id=${data.results[i].id}"> 
            <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].title}' />
        </a>
        <p class="titulocategorias"> ${data.results[i].original_name} </p>
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
        <a href="./detail-movie.html?id=${data.results[i].id}">     
            <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].title}' />
        </a>
        <p class="titulocategorias"> ${data.results[i].title} </p>
        <p class="fecha"> ${data.results[i].release_date}</p>
        </article>`
    }
    container3.innerHTML = movies2
})
.catch (function(error){
    console.log(error)
})

