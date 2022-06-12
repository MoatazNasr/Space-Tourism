const navBTN = document.querySelector('.navBTN-toggle')
const nav = document.querySelector('.primary-navigation')
const navigation = document.querySelector('#navigation')
const listItem = navigation.querySelectorAll('li')

navBTN.addEventListener("click", () => {

    const visiblity = nav.getAttribute("data-visiblity");
    if (visiblity === "false") {
        nav.setAttribute("data-visiblity", true);
        navBTN.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visiblity", false);
        navBTN.setAttribute("aria-expanded", false);
    }
})

for (let li of listItem) {

    if (li.firstChild.href === location.href) {
        li.classList.add('active')
    }
    else {
        li.classList.remove('active')
    }
}

