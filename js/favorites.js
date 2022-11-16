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

let container = document.querySelector(".section")

window.addEventListener("load",function(){
    let favs = getFavsStorage
    if (favs.length === 0){
        container.innerHTML = 
        `
        <h4> No tienes favoritos </h4>
        `
    } else {
        getAllFavsAndPrint(favs)
    }
})


function getFavsStorage(){
    let storage = localStorage.getItem("favoritos")

    if (storage !== null && storage!== undefined){
        return JSON.parse(storage)
    }else {
        return []
    }
}

function getAllFavsAndPrint(arrayFavs){
    for (i=0;i<arrayFavs.length;i++){
        fetch(`https://api.themoviedb.org/3/movie/${arrFavs[i]}`) //chequear si este endPoint esta bien, le falta --> //?api_key=399cd9827f714613d04693cee425808c&language=en-US
        .then (function(resp){
            return JSON.resp
        })
        .then(function(data){
            container.innerHTML += `
                <article> 
                    <img class ="imagen" src="${data.image}"/>
                    <a href="./detail-movie.html?id=${data.id}">
                        <p> ${data.title}</p>
                    </a>
                </article>
                `
        })
        .catch(function(error){
            console.log(error)
        })
    }
}