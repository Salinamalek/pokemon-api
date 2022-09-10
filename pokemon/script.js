const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

const form = document.querySelector('form')
// console.log(form)

const id = document.querySelector('#pokemon-id')
// console.log(id)

const pokemon = document.querySelector('.pokemon')

const error = document.querySelector('.error')

form.addEventListener("submit", (event) => {
    // prevents default behavior (page will not refresh)
    event.preventDefault()

    // Check if id.value is empty
    if(id.value === ""){
        // Remove hidden class & add text
        error.classList.remove('hidden')
        error.innerText = "Must input a correct Pokemon ID"
    } else {
        // Add hidden class to error
        error.classList.add('hidden')
        
        fetch(`${BASE_URL}/${id.value}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)

                // Create an article, h2, img tags to house pokemon info
                const article = document.createElement('article')
                const h2 = document.createElement('h2')
                const image = document.createElement('img')
                // Append h2 and image to article
                article.append(h2, image)
                // Append article to .pokemon
                pokemon.append(article)

                // Give the h2 innerText of the pokemon's name
                h2.innerText = res.name
                // Add src attribute to img tag to have pokemon's front_default image
                image.src = res.sprites.front_default


                // Bonus
                // Add event listener to image to flip the picture from front to back & vice versa
                image.addEventListener('click', () => {
                    // Toggles 'back' class on image
                    image.classList.toggle('back')
                    // Contains returns boolean classList contains class
                    if(image.classList.contains('back')){
                        image.src = res.sprites.back_default
                    } else {
                        image.src = res.sprites.front_default
                    }
                })

            })
            .catch((err) => console.log(err))

    }

})
