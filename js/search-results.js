let apiKey = "399cd9827f714613d04693cee425808c"
window.addEventListener('load',function(){

let movie =location.search
console.log(location)
let objMovie = new URLSearchParams(movie)
let keyword = objMovie.get('pelicula')
let busca = 'spiderman'
//spiderman = movie

fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${busca}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    for (let i = 0; i < data(length); i++){

    }
})
.then(function(error){
    console.log(error)
})
})
