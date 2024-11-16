import { magnifyingLoop} from "./magnifying-loop.js";

let bodyElm = document.querySelector("body")

let magnifier = await magnifyingLoop()

bodyElm.appendChild(magnifier)