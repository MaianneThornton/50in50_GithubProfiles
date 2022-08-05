# 50 Projects in 50 Days - Github Profiles

This is a code along project in the [50 Projects In 50 Days - HTML, CSS & JavaScript Udemy Course](https://www.udemy.com/course/50-projects-50-days/). Sharpen your skills by building 50 quick, unique & fun mini projects.

## Table of contents 😌

- [Overview](#overview)
  - [The project](#the-project)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Code snippets](#im-really-proud-of-these-code-snippets%EF%B8%8F)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview👋🏾

Welcome to the 28<sup>th</sup> mini-project of the course!

### The project😥

In this project users will be able to:

- Build a responsive site that accesses the GitHub API to fetch users, allowing us to search for users to display their profile data including the users most recent repositories.

### Screenshot🌇

![](./screenshot.gif)

### Links👩🏾‍💻

- Live Site URL: (https://maianne-github-repos.netlify.app/)

## My process💭

This is a project that I started by marking out initial structure, classes, and id's in HTML. Next I finalized the UI by styling the CSS. I styled both the background, card, and form sections. I then removed the hardcoded structure I created in HTML. I then added functionality by way of JavaScript to call the GitHub REST API to fetch user info. I then created the structure I previously hardcoded dynamically and inserted the data fetched from the API.

### Built with👷🏾‍♀️

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Asynchronous API
- Axios
- Node.js

### What I learned👩🏾‍🏫

I learned how to read API documentation more easlily. I will be applying this to future projects where needed.

I also learned that when using Axios to fetch data, you don't have to include the keyword get as Axios defaults to get when fetching.

### Continued development🔮

In the future I plan on continuing to practice accessing API's using Axios.

### I'm really proud of these code snippets✂️

```js
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
```

### Useful resources📖

- [Resource 1](https://docs.github.com/en/rest/overview) - This is the GitHub REST API docs overview. I'd recommend it to anyone working with this API.
- [Resource 2](https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps) - This a list of the endpoints available for the GitHub REST API. I'd recommend it to anyone working with this API.
- [Resource 3](https://docs.github.com/en/rest/users/users#get-a-user) - This is the doc which details how to get fetch a user's info from the GitHub REST API.
- [Resource 4](https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user) - This is the doc which detailed how to fetch the users repositories fom the GitHub REST API.

## Author🔎

- Website - [Portfolio Site](https://maiannethornton.netlify.app/)
- Frontend Mentor - [@MaianneThornton](https://www.frontendmentor.io/profile/MaianneThornton)
- GitHub - [@MaianneThornton](GitHub.com/MaianneThornton)
- Twitter - [@MaianneThornton](https://twitter.com/MaianneThornton)
- LinkedIn - [@MaianneThornton](https://www.linkedin.com/in/maiannethornton/)

## Acknowledgments🙏🏾

Special Thanks go to [Brad Traversy](http://www.traversymedia.com/) and [Florin Pop](http://www.florin-pop.com/) creating the course and making reviewing concepts fun 😊.
