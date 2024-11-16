import { asyncLoadImage } from "./load-image.js";

let page = document.querySelector("main")

let magnify = document.createElement("span")
magnify.id = "magnify"
page.appendChild(magnify)

let urls = []
urls.push("images/winter.jpeg")

let imageElms = []
let index = 0;

async function loadNextImage() {

    let img= undefined
    
    if (imageElms.length < urls.length) {
        img = await asyncLoadImage(urls[index++])
        imageElms.push(img)
    }
    else {
        img = imageElms[index++]
    }
    magnify.appendChild(img)
    page.appendChild(img)
    return img
}
page.onmousemove = function(e) {
    document.getElementById("magnify").style.top = e.pageY*1 + "px";
    document.getElementById("magnify").style.left = e.pageX*1 + "px";
}

async function magnifyingLoop(){
    let img = await loadNextImage()
    page.appendChild(img)
   return page
}


export{magnifyingLoop}