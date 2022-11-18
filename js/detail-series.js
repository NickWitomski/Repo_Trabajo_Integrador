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
let container = document.querySelector(".detalleSeries")

fetch (`https://api.themoviedb.org/3/tv/${id}?api_key=399cd9827f714613d04693cee425808c&language=en-US`)
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
        textoInicial = "Sacar de favoritos" // esta funcion solo esta para cuando se renderiza la pagina
    } else {
        textoInicial = "Agregar a favoritos"
    }
    
    container.innerHTML = `
        <h1>${data.original_name}</h1>
        <article class="articulo1"> 
        <a href="./detail-movie.html?id=${data.id}"> 
            <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt='${data.original_name}' />
        </a>
        </article>

        <article class="articulo2"> 
        <p class="texto"> Fecha de estreno: ${data.first_air_date}</p>
        <p class="texto"> Rating: ${data.vote_average}</p>
        <p class="texto"> Resumen: ${data.overview}</p>
        <p class="texto"> Generos: ${listaGeneros}</p>
        </article>
        <button class="favoritos"> ${textoInicial} </button>`
    
    let imagen = document.querySelector(".imagen")
    imagen.addEventListener("click",function(evento){
        let recommendaciones = seeRecomemendations(data.id)
    })


    let btnFavs = document.querySelector(".favoritos") //boton
    btnFavs.addEventListener("click", function(e){
        let favoritos = getStorage()
        let estaMiBusqueda = favoritos.includes(data.id)
        if (estaMiBusqueda){
            removeFavorite(data.id,favoritos)
            e.target.innerText = "Agregar a favoritos"
        }else {
            addFavorite(data.id,favoritos)
            e.target.innerText = "Sacar de favoritos"
        }
    }) 
})
.catch (function(error){
    console.log(error)
})

function getStorage(){
    let storage = localStorage.getItem("favoritosSeries")
    if (storage !== null && storage!== undefined){
        return JSON.parse(storage)
    } else {
        return []
    }
}

function addFavorite(id, storage){
    storage.push(id)
    let storageToString = JSON.stringify(storage)
    localStorage.setItem("favoritosSeries",storageToString)
}

function removeFavorite(id,storage){
    let position = storage.indexOf(id)
    storage.splice(position,1)
    let storageToString = JSON.stringify(storage)
    localStorage.setItem("favoritosSeries", storageToString)
}