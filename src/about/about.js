import "./about.css"

export default function() {
    const about = createDiv("about-container")
    const content = createDiv("about-content")
    content.appendChild(createAboutHeader())
    content.appendChild(createStory())
    content.appendChild(createContact())
    about.appendChild(content)
    return about
}

function createDiv(divName) {
    const div = document.createElement("div")
    div.className = divName
    return div
}

function createText(string) {
    const text = document.createElement("p")
    text.textContent = string
    return text
}

function createAboutHeader() {
    const header = createDiv("about-header")
    const img = createDiv("about-img")
    const left = createDiv("left-header")

    const text = createDiv("about-text")
    const aboutTitle = createText("Our Story")
    const sentence = createText("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.")
    text.appendChild(aboutTitle)
    text.appendChild(sentence)
    
    left.appendChild(text)
   
    header.appendChild(img)
    header.appendChild(left)
    return header
}

function createStory() {
    const story = createDiv("story")
    const img = createDiv("story-img")
    const paragraphs = createDiv("paragraphs")
    paragraphs.appendChild(createText("Title"))
    paragraphs.appendChild(createText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"))
    paragraphs.appendChild(createText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))

    story.appendChild(paragraphs)
    story.appendChild(img)
    return story
}

function createFormItem(formLabel, id, type) {
    const item = createDiv("form-item")
    const label = document.createElement("label")
    label.textContent = formLabel
    label.setAttribute.for = id

    const input = document.createElement("input")
    input.className = id
    input.setAttribute.type = type
    input.setAttribute.id = id
    item.appendChild(label)
    item.appendChild(input)
    return item
}
function createContact() {
    const contact = createDiv("contact")
    const img = createDiv("contact-img")
    const right = createDiv("contact-right")

    const header = createText("Contact Us.")
    header.className = "contact-header"
    right.appendChild(header)

    const formDiv = createDiv("contact-form-container")
    const form = document.createElement("form")
    form.className = "contact-form"

    const formLeft = createDiv("form-left")
    formLeft.appendChild(createFormItem("Full Name", "full-name", "text"))
    formLeft.appendChild(createFormItem("Email", "email", "email"))
    formLeft.appendChild(createFormItem("Message", "message", "text"))
    const btn = document.createElement("button")
    btn.textContent = "Contact Us"
    btn.setAttribute.type = "button"
    btn.disabled = true
    formLeft.appendChild(btn)

    const formRight = createDiv("form-right")
    const div1 = document.createElement("div")
    div1.appendChild(createText("Contact"))
    div1.appendChild(createText("hi@brunch.com"))
    const div2 = document.createElement("div")
    div2.appendChild(createText("Based in"))
    div2.appendChild(createText("San Francisco, California"))
    formRight.appendChild(div1)
    formRight.appendChild(div2)

    form.appendChild(formLeft)
    form.appendChild(formRight)
    formDiv.appendChild(form)
    right.appendChild(header)
    right.appendChild(formDiv)
    contact.appendChild(img)
    contact.appendChild(right)

    return contact
}
