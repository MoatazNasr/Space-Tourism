const tabList = document.querySelector("[role='tablist']")
const tabs = tabList.querySelectorAll("[role='tab']")
tabs.forEach(ele => {
    const tabID = ele.getAttribute("aria-controls")
    const tabImage = ele.getAttribute('data-image')
    const tabSelected = document.querySelector(`#${tabID}`)
    const tabSelectedImage = document.querySelector(`#${tabImage}`)

    ele.onclick = () => {
        hideElements()
        ele.setAttribute('aria-selected', true)
        ele.classList.add('active')
        tabSelected.removeAttribute('hidden')
        tabSelectedImage.classList.remove('hidden')

    }
})

function hideElements() {
    tabs.forEach(ele => {
        const tabID = ele.getAttribute("aria-controls")
        const tabNotSelected = document.querySelector(`#${tabID}`)
        const tabImage = ele.getAttribute('data-image')
        const tabNotSelectedImage = document.querySelector(`#${tabImage}`)

        ele.classList.remove('active')
        ele.setAttribute('aria-selected', false)
        tabNotSelectedImage.classList.add('hidden')
        tabNotSelected.setAttribute('hidden', 'true')


    })
}
