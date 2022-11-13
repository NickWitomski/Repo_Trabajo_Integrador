let query = location.search
let objQuery = new URLSearchParams(query)
let id = objQuery.get("id")
let container = document.querySelector(".detalle_movies")

fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=399cd9827f714613d04693cee425808c&language=en-US`)
.then (function(resp){
    return resp.json
})
.then (function(data){
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
        <img src="${data.image}"/>
        <p> ${data.release_date}</p>
        <button class="favoritos"> ${textoInicial} </button>`

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