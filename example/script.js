const button = document.querySelector('button')
// console.log(button)
const pokemon = document.querySelector('#pokemon')

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')


let offset = 0


const getPokemon = () => {
    pokemon.innerHTML = ""
    // console.log("I've been clicked")
    // base url: https://pokeapi.co/api/v2/
    // endpoint: pokemon
    // search query params(after question mark): ?limit=100&offset=5
    // & symbol goes between search query params to include more than one
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        .then((res) => res.json())
        .then((resJson) => {
            console.log(resJson.results)
            const results = resJson.results
            results.forEach((result) => {
                console.log(result)
                // create an element for each pokemon
                const poke = document.createElement('h2')
                // give each element the name for each pokemon
                poke.innerText = result.name
                // append the element to the #pokemon
                pokemon.append(poke)

            })
        })
        .catch((err) => console.log(err))
}


button.addEventListener("click", () => {
    offset = 0
    getPokemon()
})


prev.addEventListener("click", () => {
    if(offset >= 10){
        offset -= 10
    }
    getPokemon()
    // console.log(offset)
})


next.addEventListener("click", () => {
    offset += 10
    getPokemon()
    // console.log(offset)
})