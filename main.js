import "./src/02.js";
import styles from "./src/assets/03.css?inline";
console.log(styles);
const styleE1 = document.createElement("style");
styleE1.innerHTML = styles;

document.querySelector("head").append(styleE1);
