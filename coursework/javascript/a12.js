class MagnifyingLoop extends HTMLElement {

    static template = document.createElement("template")

    constructor() {
        super()

        this.attachShadow({ mode: "open" })

        let link = document.createElement("link")
        link.href = "css/a12.css"
        link.type = "text/css"
        link.rel = "stylesheet"
        this.shadowRoot.append(link)

        MagnifyingLoop.template.innerHTML = `
            <slot name="image"></slot>
            <slot name="magnify"></slot>
        `
        let clone = MagnifyingLoop.template.content.cloneNode(true)

        this.shadowRoot.append(clone)

    }

}


window.customElements.define("magnifying-loop", MagnifyingLoop)

let mLoop = document.querySelector("magnifying-loop")

mLoop.onmousemove = function(e) {
    document.getElementById("mLoop").style.top = e.pageY*1 + "px";
    document.getElementById("mLoop").style.left = e.pageX*1 + "px";
}