let apiKey = "399cd9827f714613d04693cee425808c"

//VALIDANDO FORMULARIO 

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
            this.submit 
        }
    })
}
//

window.addEventListener('load',function(){

let container = document.querySelector(".section_pel")
let movie =location.search
let movies = " "
console.log(location)
let objMovie = new URLSearchParams(movie)
let keyword = objMovie.get('name')
let series = ' '
let container2 = document.querySelector(".section_ser")



fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${keyword}`)
.then(function(resp){
    return resp.json()
})

.then(function(data){
    for (i=0; i< 5;i++){
        if (data.results[i].media_type === 'movie'){
<<<<<<< HEAD
        movies += 
        `<article class="articulo">
            <a href="./detail-movie.html?id=${data.results[i].id}"> 
            <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].title}' />
            </a>
            <h2 class="titulocategorias"> ${data.results[i].title} </h2>
            <p class="fecha"> ${data.results[i].release_date }</p>
        </article>`
} else {
    series += `<article class="articulo">
    <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].original_name}' />
    <h2 class="titulocategorias"> ${data.results[i].original_name} </h2>
    <p class="fecha"> ${data.results[i].first_air_date }</p>
    </article>`
    console.log(data)
}}
    
    container.innerHTML = movies
    container2.innerHTML = series
=======
        movies += `<article class="articulo">
        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].title}' />
        <h2 class="titulocategorias"> ${data.results[i].title} </h2>
        <p class="fecha"> ${data.results[i].release_date }</p>
        </article>`
        console.log(data)
} 
    container.innerHTML = movie
.then(function(error){
    console.log(error)

>>>>>>> bd2f2f49ed3f492a3358c933209e0b267fcc3265
})


fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${keyword}`)
.then(function(resp){
    return resp.json()
})

.then(function(data){
    for (i=0; i< 5;i++){
        if (data.results[i].media_type === 'tv'){
            series += `<article class="articulo">
        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].original_name}' />
        <h2 class="titulocategorias"> ${data.results[i].original_name} </h2>
        <p class="fecha"> ${data.results[i].first_air_date }</p>
        </article>`
        console.log(data)
        
    }}
    container2.innerHTML = series

.then(function(error){
    console.log(error)
})
})
