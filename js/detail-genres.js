
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


let discoverMovie = `https://api.themoviedb.org/3/discover/movie?api_key=399cd9827f714613d04693cee425808c`
let queryPelis = location.search
let objetoquery = new URLSearchParams(queryPelis)
let id = objetoquery.get("id")
let nombre = objetoquery.get("name")
let type = objetoquery.get("type")

let discoverSeries = `https://api.themoviedb.org/3/discover/tv?api_key=399cd9827f714613d04693cee425808c`
// let querySeries = location.search
// let objetoquery2 = new URLSearchParams(querySeries)
// let id2 = objetoquery2.get("id")
// let nombre2 = objetoquery2.get("name")
// let type2 = objetoquery2.get("type")


let container = document.querySelector(".categoria")
let container2 = document.querySelector(".categoria2")
let tituloBusqueda=document.querySelector(".titulobusqueda")
console.log(type)
console.log(id)
console.log(nombre)



if (type == "movie"){
fetch(`${discoverMovie}&with_geners=${id}&type=${type}&name=${nombre}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    for (i=0;i<19;i++){
        tituloBusqueda.innerText=`Resultado de busqueda para: ${nombre}`
        // let listaGeneros = []
        // for (j=0; j<data.results.genre_ids;j++){
        //     let idGenero = data.results[i].genre_ids[j]
        //     listaGeneros.push(idGenero)
        // }
        // console.log(listaGeneros)
        // if (listaGeneros.includes(id)){
        let generos = " "
        generos += `<article class="articulo">
        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].original_title}' />
        <p> ${data.results[i].title} </p>
        <p class="fecha"> ${data.results[i].release_date }</p>
        </article>`
        container.innerHTML = generos
        }
    })

.catch(function(error){
    console.log(error)
})
}


if(type=="serie"){
    fetch(`${discoverSeries}&with_geners=${id2}&type=${type2}&name=${nombre2}`)
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        console.log(data)
        for (i=0; i< 5;i++){
                // console.log(data.results[i].genre_ids)
            let generos2 = " "
            generos2 += `<article class="articulo">
            <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].original_title}' />
            <p> ${data.results[i].name} </p>
            <p class="fecha"> ${data.results[i].release_date}</p>
            </article>`
            container2.innerHTML = generos2
    }
    })
    .catch(function(error){
        console.log(error)
    })
}