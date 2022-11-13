let apiKey = "399cd9827f714613d04693cee425808c"

document.addEventListener("click",function(){
    document.getElementById("form").addEventListener("submit",mandarFomrulario);
});

document.addEventListener("keydown",function(){
    document.getElementById("form").addEventListener("submit",mandarFomrulario);
    //falta agregar que cuando apretas el campo de formulario denuevo, se vaya el alert solo
});

function mandarFomrulario(evento){
    evento.preventDefault();
    let valor = document.getElementById("input").value;
    if (valor.length === 0){
        alerta = alert("No escribiste nada");
        return
    } else if(valor.length < 3){
        alerta = alert ("Tu busqueda tiene que ser minimo de 3 caracteres");
        return
    }
    this.submit();
}


// let queryString = location.search
// let query = new URLSearchParams(queryString)
// let movie_id = query.get("id")
// let  = docuemnt.querySelector(".container")

// fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`)
// .then(function(resp){
//     return resp.json()
// })
// .then(function(data){
//     for (i=0; data.results.length;i++){
//         list.innerHTML += `
//         <li> ${data.results[i].title} 
//             <img class="imagen" src="${data.results[i].image}">
//             <a href="./details.html?id=${data.results[i].id}">
//             <h5>${data.title}</h5>
//             </a>
//         </li>
//         `
//     }
// })
// .catch (function(error){
//     console.log(error)
// })
