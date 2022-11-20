
// //VALIDANDO FORMULARIO 

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

// window.addEventListener('load',function(){
// let container = document.querySelector(".categoria")
// let movie =location.search
// console.log(location)
// let objMovie = new URLSearchParams(movie)
// let keyword = objMovie.get('name')
// let series = ' '

let discover = `https://api.themoviedb.org/3/discover/movie?api_key=399cd9827f714613d04693cee425808c`
let discoverSeries = `https://api.themoviedb.org/3/discover/tv?api_key=399cd9827f714613d04693cee425808c`
let keyword = location.search
let objetoKeyword = new URLSearchParams(keyword)
let tituloBusqueda=document.querySelector(".titulobusqueda")
let id = objetoKeyword.get("id")
let type = objetoKeyword.get("type")
let generos = " "
let generos2 = " "
let container = document.querySelector(".categoria")
let container2 = document.querySelector(".categoria2")
tituloBusqueda.innerText=`Resultado de busqueda para: ${keyword}`
console.log(type)
console.log(id)

if (type == "movie"){
fetch(`${discover}&with_geners=${id}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    for (i=0; i< 5;i++){
         console.log(data)
            generos += `<article class="articulo">
        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].original_title}' />
        <p> ${data.results[i].title} </p>
        <p class="fecha"> ${data.results[i].release_date }</p>
        </article>`
        console.log(data)
        container.innerHTML = generos
}
})

.catch(function(error){
    console.log(error)
})
}else{
fetch(`${discoverSeries}&with_geners=${id}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    for (i=0; i< 5;i++){
            console.log(data.results[i].genre_ids)
            generos2 += `<article class="articulo">
        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].original_title}' />
        <p> ${data.results[i].name} </p>
        <p class="fecha"> ${data.results[i].vote_average }</p>
        </article>`
        console.log(data)
        container2.innerHTML = generos2
}
})

.catch(function(error){
    console.log(error)
})}
