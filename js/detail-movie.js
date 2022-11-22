window.addEventListener("load",function(){
    document.getElementById("loader").classList.toggle("loader2")
})

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
            this.submit() 
        }
    })
}
//

let query = location.search
let objQuery = new URLSearchParams(query)
let id = objQuery.get("id")
let container = document.querySelector(".detalleMovies")

fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=399cd9827f714613d04693cee425808c&language=en-US`)
.then (function(resp){
    return resp.json()
})
.then (function(data){
    console.log(data) 

    let listaGeneros = ""
    for (i=0;i<data.genres.length;i++){
        genero = data.genres[i].name
        listaGeneros += `${genero} `
    }

    let favoritos = getStorage();
    let estaMiBusqueda = favoritos.includes(data.id)
    let textoInicial = " "
    if (estaMiBusqueda){
        textoInicial = "SACAR DE FAVORITOS" // esta funcion solo esta para cuando se renderiza la pagina
    } else {
        textoInicial = "AGREGAR A FAVORITOS"
    }
   
    container.innerHTML = `
        <section class="section_peli1">
            <h1>${data.title}</h1>
            <article class="articulo1"> 
                <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt='${data.title}' />
            </article>
        </section>

        <section class="section_peli2">
            <article class="articulo2"> 
                <p class="texto"> Fecha de estreno: ${data.release_date}</p>
                <p class="texto"> Rating: ${data.vote_average}</p>
                <p class="texto"> Resumen: ${data.overview}</p>
                <p class="texto"> Duración: ${data.runtime} mins</p>
                <p class="texto"> Generos: ${listaGeneros}</p>
            </article>

            <article class="articulo_boton">
                <button class="favoritos"> ${textoInicial} </button>
            </article>
        </section>

        <section class ="section_recomendaciones">
            <button class="boton_recomendaciones"> VER RECOMENDACIONES </button>
            <ul class="recomendaciones">
            </ul>
        </section>
        `

    let boton= document.querySelector(".boton_recomendaciones")
    boton.addEventListener("click",function(evento){
        getRecomendaciones()
    })

    let btnFavs = document.querySelector(".favoritos") //boton
    btnFavs.addEventListener("click", function(e){
        let favoritos = getStorage()
        let estaMiBusqueda = favoritos.includes(data.id)
        if (estaMiBusqueda){
            removeFavorite(data.id,favoritos)
            e.target.innerText = "AGREGAR A FAVORITOS"
        }else {
            addFavorite(data.id,favoritos)
            e.target.innerText = "SACAR DE FAVORITOS"
        }
    }) 

    let boton_rev = document.querySelector(".boton_reviews")
    boton_rev.addEventListener("click",function(e){
        container_review.style.display = "block"
        getReviews()
    })


})
.catch (function(error){
    console.log(error)
})

function getStorage(){
    let storage = localStorage.getItem("favoritosPelis")
    if (storage !== null && storage!== undefined){
        return JSON.parse(storage)
    } else {
        return []
    }
}

function addFavorite(id, storage){
    storage.push(id)
    let storageToString = JSON.stringify(storage)
    localStorage.setItem("favoritosPelis",storageToString)
}

function removeFavorite(id,storage){
    let position = storage.indexOf(id)
    storage.splice(position,1)
    let storageToString = JSON.stringify(storage)
    localStorage.setItem("favoritosPelis", storageToString)
}

//get proveedores
    fetch (`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=399cd9827f714613d04693cee425808c`)
    .then (function(resp){
        return resp.json()
    })
    .then(function(data){
        console.log(data)
        let container = document.querySelector(".proveedores")
        let proveedores = ""
        for (i=0; i<data.results.US.flatrate.length;i++){
            proveedores += `
            <li class="elemento_prov">
            <img class="logo_prov" src="https://image.tmdb.org/t/p/w500/${data.results.US.flatrate[i].logo_path}" alt='${data.results.US.flatrate[i].provider_name}' />
            </li>`
        }
        container.innerHTML = proveedores

    })
    .catch(function(error){
        console.log(error)
    })


//recomendaciones
function getRecomendaciones(){
    fetch (`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1`)
    .then (function(resp){
        return resp.json()
    })
    .then (function(data){
        console.log(data)
        let recommend = ``
        let list = document.querySelector(".recomendaciones")
        for (i=0;i<5;i++){
            recommend += `
            <li class="elemento_lista"> 
                <img class="imagen_recomendaciones" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].original_title}' />
            </li>
            `
        }
        list.innerHTML = recommend
    })
    .catch (function(error){
        console.log(error)
    })
}



//para poner trailers (punto extra)

let container_trailers = document.querySelector(".trailers")
let trailers = ""

fetch (`https://api.themoviedb.org/3/movie/${id}/videos?api_key=399cd9827f714613d04693cee425808c&language=en-US`)
.then (function(resp){
    return resp.json()
})
.then (function(data){
    console.log(data)
    for (i=0; i< 6;i++){
        trailers += `
        <article class="articulo"> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${data.results[i].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </article>`
    }
    container_trailers.innerHTML = trailers
})
.catch (function(error){
    console.log(error)
})

//recomendaciones (punto extra)
let container_review = document.querySelector(".reviews")
let reviews = ' '
let apiKey = "399cd9827f714613d04693cee425808c"

function getReviews(){
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        console.log(data)
        for (let i=0;i<data.results.length;i++){
            reviews += `<article class="articulo_r">
            <h4> ${data.results[i].author}</h4>
            <p class="texto_r"> ${data.results[i].content}</p>
            </article>`
        }
        container_review.innerHTML = reviews
    })
    .catch(function(error){
        console.log(error)
    })
}
