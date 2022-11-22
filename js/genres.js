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


let container1 = document.querySelector(".section_generos")
let genresPelis = ' '
let apiKey = "399cd9827f714613d04693cee425808c"

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data);
    for (i=0;i<16;i++){
        genresPelis +=`
            <article class="genero"> 
            <a class ='titulo_section' href='./detail-genres.html?id=${data.genres[i].id}&name=${data.genres[i].name}&type=movie'>
            <h2 class='link_det_generos'> ${data.genres[i].name} </h2>
            </a>
            </article>
        `
    }
    container1.innerHTML = genresPelis
    return data
})
.catch(function(error){
    console.log(error)
    return error
})

let container2 = document.querySelector(".section_generos2")
let genresSeries = ' '

fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    for (i=0;i<16;i++){
        genresSeries +=`
            <article class="genero"> 
            <a class ='titulo_section' href='./detail-genres.html?id=${data.genres[i].id}&name=${data.genres[i].name}&type2=null'>
            <h2 class='link_det_generos'> ${data.genres[i].name} </h2>
            </a>
            </article>
        `
    }
    container2.innerHTML = genresSeries
})
.catch(function(error){
    console.log(error)
})