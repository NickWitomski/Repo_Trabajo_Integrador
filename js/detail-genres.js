
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


// window.addEventListener('load',function(){
// let container = document.querySelector(".categoria")
// let movie =location.search
// console.log(location)
// let objMovie = new URLSearchParams(movie)
// let keyword = objMovie.get('name')
// let series = ' '


<<<<<<< HEAD
fetch(`https://api.themoviedb.org/3/search/multi?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1&include_adult=false&query=${keyword}`)
=======
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=399cd9827f714613d04693cee425808c&with_geners=${keyword}`)
>>>>>>> a89d68af68756fc2f5e4e3fbe779d9cae271bb18
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    for (i=0; i< 5;i++){
            series += `<article class="articulo">
        <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].original_title}' />
        <h2 class="titulocategorias"> ${data.results[i].title} </h2>
        <p class="fecha"> ${data.results[i].first_air_date }</p>
        </article>`
        console.log(data)
        
    }
    container.innerHTML = series
})

.catch(function(error){
    console.log(error)
})
