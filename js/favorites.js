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
//

let container = document.querySelector(".container")
let container2 = document.querySelector(".container2")

window.addEventListener("load",function(){
    let favsPelis = getFavsStoragePelis()
    let favsSeries = getFavsStorageSeries()
    if (favsPelis.length && 0 || favsSeries.length === 0){
        container.innerHTML = 
        `
        <h2> NO TENES FAVORITOS </h2>
        `
    } else {
        getFavsPelis(favsPelis)
        getFavsSeries(favsSeries)
    }


function getFavsStorageSeries(){
    let storage = localStorage.getItem("favoritosSeries")

    if (storage !== null && storage!== undefined){
        return JSON.parse(storage)
    }else {
        return []
    }
}

function getFavsStoragePelis(){
    let storage = localStorage.getItem("favoritosPelis")

    if (storage !== null && storage!== undefined){
        return JSON.parse(storage)
    }else {
        return []
    }
}

function getFavsPelis(favsPelis){
    let favoPelis = " "
    for (i=0;i<favsPelis.length;i++){
        fetch(`https://api.themoviedb.org/3/movie/${favsPelis[i]}?api_key=399cd9827f714613d04693cee425808c&language=en-US`)
        .then (function(resp){
            return resp.json()
        })
        .then(function(data){
            console.log(data)
            favoPelis += `
                <article class="articulo"> 
                    <h2> ${data.title}</h2>
                    <a class="a_img" href="./detail-movie.html?id=${data.id}">
                        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt='${data.title}' />
                    </a>
                </article>
                `
        container.innerHTML = favoPelis
        })
        
        .catch(function(error){
            console.log(error)
        })
    }
    return favoPelis
}

function getFavsSeries(favsSeries){
    let favoSeries = " "
    for (i=0;i<favsSeries.length;i++){
        fetch(`https://api.themoviedb.org/3/tv/${favsSeries[i]}?api_key=399cd9827f714613d04693cee425808c&language=en-US`)
        .then (function(resp){
            return resp.json()
        })
        .then(function(data){
            console.log(data)
            favoSeries += `
                <article class="articulo"> 
                    <h2> ${data.original_name}</h2>
                    <a class="a_img" href="./detail-movie.html?id=${data.id}">
                        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt='${data.original_name}' />
                    </a>
                </article>
                `
        container2.innerHTML = favoSeries
        })
        
        .catch(function(error){
            console.log(error)
        })
    }
    return favoSeries
}})