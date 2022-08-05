const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Requests username from the API
async function getUser(username) {
    // { data } = destructuring the res (response) object to only display the data property
    try {
        const { data } = await axios.get(APIURL + username)

        createUserCard(data)
        getRepos(username)

        // Error handling
    } catch (error) {
        if (error.response.status == 404) {
            createErrorCard('No Profile With This Username')
        }
    }
}

// Requests repos from API
async function getRepos(username) {
    try {
        const { data } = await axios.get(APIURL + username + '/repos?sort=created')

        addReposToCard(data)

        // Error handling
    } catch (error) {
        createErrorCard('Problem Fetching Repos')

    }
}

// Builds card with properties from API
function createUserCard(user) {
    const cardHTML = `
    <div class="card">
        <div>
          <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>${user.bio}</p>
          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
          </ul>

          <div id="repos"></div>
        </div>
      </div>
    `
    main.innerHTML = cardHTML
}

// Add repos to card
function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

// Build card to display when no user is found
function createErrorCard(msg) {
    const cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>
    `
    main.innerHTML = cardHTML
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if (user) {
        getUser(user)
        // Reset search field
        search.value = ''
    }
})