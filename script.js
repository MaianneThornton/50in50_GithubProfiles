const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
    // { data } = destructuring the res (response) object to only display the data property
    try {
        const { data } = await axios.get(APIURL + username)

        console.log(data)

        // error handling
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if (user) {
        getUser(user)
        // reset search field
        search.value = ''
    }
})