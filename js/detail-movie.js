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
let container = document.querySelector(".detalle_movies")

fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=399cd9827f714613d04693cee425808c&language=en-US`)
.then (function(resp){
    return resp.json
})
.then (function(data){
    console.log(data)
    console.log(id)
    let favoritos = getStorage();
    let estaMiBusqueda = favoritos.includes(data.id)
    let textoInicial = " "
    if (estaMiBusqueda){
        textoInicial = "Sacar de favoritos" // esta funcion solo esta para cuando se renderiza la pagina
    } else {
        textoInicial = "Agregar a favoritos"
    }

    container.innerHTML = `
        <h1>${data.title}</h1>
        <a href="./detail-movie.html?id=${data.results[i].id}"> 
            <img  class ="imagen" src="${data.image}"/>
        </a>
        <p> ${data.release_date}</p>
        <p> ${data.vote_average}</p>
        <p> ${data.overview}</p>
        <p> ${listGenres}</p>
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
    let storage = localStorage.getItem("favoritos")
    if (storage !== null && storage!== undefined){
        return JSON.parse(storage)
    } else {
        return []
    }
}

function addFavorite(id, storage){
    storage.push(id)
    let storageToString = JSON.stringify(storage)
    localStorage.setItem("favoritos",storageToString)
}

function removeFavorite(id,storage){
    let position = storage.indexOf(id)
    storage.splice(position,1)
    let storageToString = JSON.stringify(storage)
    localStorage.setItem("favoritos", storageToString)
}

function getGenres(arrayGenres){
    list_genres_ids = []
    for (i=0;i<arrayGenres.length;i++)
        id = data.results[i].genre_ids
        listGenresIds.push(id)
    return list_genres_ids
}

fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=399cd9827f714613d04693cee425808c&language=en-US`)
.then (function(resp){
    return resp.json
})
.then (function(data){
    genres = getGenres(data.results.genre_ids)
    listGenres = " "
    for (i=0;i<data.genres.length;i++){
        if (genres[i] === data.genres[i].id){
            genre = data.genres[i].name
            listGenres += genre
        }
    }
    return listGenres
})
.catch (function(error){
    console.log(error)
})

function seeRecomemendations (id){
    fetch (`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1`)
    .then (function(resp){
        return resp.json
    })
    .then (function(data){
        recomend = " "
        let list = document.querySelector(".recommendations")
        for (i=0;i<5;i++){
            recommend += `
            <li> ${data.results[i].title} </li>
            `
        }
        list.innerHTML = recommend
    })
    .catch (function(error){
        console.log(error)
    })
    return list
}

//para poner trailers (punto extra)

let container_trailers = document.querySelector(".trailers")
trailers = ""

fetch (`https://api.themoviedb.org/3/movie/${id}/videos?api_key=399cd9827f714613d04693cee425808c&language=en-US`)
.then (function(resp){
    return resp.json
})
.then (function(data){
    for (i=0; i< data.results.length;i++){
        trailers += `
        <article> 
            <iframe width="300px" height="100px" src="https://www.youtube.com/watch?v=${data.results[i].key}"> </iframe>
        </article>`
    }
    container_trailers.innerHTML = trailers
})
.catch (function(error){
    console.log(error)
})
