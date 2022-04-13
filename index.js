// getting my general hook
const wrapper = document.getElementById('page-wrapper');

class Person {
    constructor(name, quote, skills) {
        this.name = name;
        this.quote = quote;
        this.skills = skills;
    }
    getSkills() {
        return this.skills
    }
}

const John = new Person(
    'John Doe',
    'My inspirational quote here...',
    ['HTML', 'CSS', 'JavaScript']
)

const Ann = new Person(
    'Ann Doe',
    'My inspirational quote here...',
    ['HTML', 'CSS', 'JavaScript']
)

const Jane = new Person(
    'Jane Smit',
    'My inspirational quote here...',
    ['HTML', 'CSS', 'JavaScript']
)

const listOfCohort = [John, Jane, Ann];

// my object person
// const person = {
//     name: 'John Doe',
//     quote: 'My inspirational quote here...',
//     skills: [
//         'HTML',
//         'CSS',
//         'JavaScript'
//     ],
//     getSkills() {
//         return this.skills
//     }
// }

// pages options
const landingPage = 'home';
let page = landingPage;

const changePage = (newPage, person) => {
    // change the page variable
    if (newPage === page) return
    page = newPage;
    // empty the content of my page
    wrapper.innerHTML = ""
    // fill the content of the new page
    loadPage(page, person)
}

const loadHomePage = () => {
    // how to set a h1 inside my wrapper
    const title = document.createElement('h1')
    title.setAttribute('id', 'myTitle')
    title.setAttribute('class', 'title')
    
    title.innerHTML = "This is the Home Page!"
    wrapper.appendChild(title)

    const goToProfileButton = document.createElement('button')
    goToProfileButton.setAttribute('class', 'button')
    goToProfileButton.innerHTML = 'Go to profile page'

    wrapper.appendChild(goToProfileButton)

    goToProfileButton.addEventListener(
        'click',
        () => {
            console.log('clicked')
            changePage('profile')
        }
    )

    // here I would like to map over my list of people
    // show a column content for each one of them
    const ulist = document.createElement('div');
    ulist.setAttribute('class', 'cohort-list');
    wrapper.appendChild(ulist);

    listOfCohort.forEach((person) => {
        const listItem = document.createElement('div');
        listItem.setAttribute('class', `profile-item`)
        listItem.innerHTML = person.name
        console.log(listItem)
        ulist.appendChild(listItem)

        const viewButton = document.createElement('button')
        viewButton.setAttribute('class', 'button')
        viewButton.innerHTML = 'view'
    
        listItem.appendChild(viewButton)
    
        viewButton.addEventListener(
            'click',
            () => changePage('profile', person)
        )
    })
}

const loadProfilePage = (person) => {
    // how to set a h1 inside my wrapper
    const title = document.createElement('h1')
    title.setAttribute('id', 'myTitle')
    title.setAttribute('class', 'title')

    title.innerHTML = person.name
    wrapper.appendChild(title)

    // let's set a quote
    const quote = document.createElement('p')
    quote.setAttribute('class', 'quote')
    quote.innerHTML = `"${person.quote}"`
    wrapper.appendChild(quote)

    // let's add the skills
    const ulist = document.createElement('ul');
    ulist.setAttribute('class', 'skill-list');
    wrapper.appendChild(ulist);

    person.skills.forEach((skill, iter) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('class', `list-item skill-${iter}`)
        listItem.innerHTML = skill
        ulist.appendChild(listItem)
    })

    const backToCohortButton = document.createElement('button')
    backToCohortButton.setAttribute('class', 'button')
    backToCohortButton.innerHTML = 'Back to cohort'

    wrapper.appendChild(backToCohortButton)

    backToCohortButton.addEventListener(
        'click',
        () => changePage('home')
    )
}

const loadPage = (page, person) => {
    if (page === 'profile') {
        loadProfilePage(person)
    } else if (page === 'home') {
        loadHomePage()
    }
}

// first load
loadPage(landingPage); // home

// what happens when the page loads in the browser
// 1. the browser looks for the html file
// 2. html is loading css
// 3. html is creating a div
// 4. html is loading js