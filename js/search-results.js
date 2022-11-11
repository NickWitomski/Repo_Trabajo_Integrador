let apiKey = "399cd9827f714613d04693cee425808c"

window.addEventListener('load',function(){

let container = document.querySelector(".section_pel")
let movies = ' '
let movie =location.search
console.log(location)
let objMovie = new URLSearchParams(movie)
let keyword = objMovie.get('name')
let series = ' '
let container2 = document.querySelector(".section_ser")


fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${keyword}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    for (i=0; i< 5;i++){
        if (data.results[i].media_type === 'movie'){
        movies += `<article class="articulo">
    <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].title}' />
    <h2 class="titulocategorias"> ${data.results[i].title} </h2>
    <p class="fecha"> ${data.results[i].release_date }</p>
    </article>`
} else {
    series += `<article class="articulo">
    <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].original_name}' />
    <h2 class="titulocategorias"> ${data.results[i].original_name} </h2>
    <p class="fecha"> ${data.results[i].first_air_date }</p>
    </article>`
    console.log(data)
}}
    
    container.innerHTML = movies
    container2.innerHTML = series
})
.then(function(error){
    console.log(error)
})
})
