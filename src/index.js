import style from "./style.css";
import logo from "./assets/webpack.svg";
import gemini from "./assets/saga-kanon.png";


const arr = [1, 3, 4],
    codeESNext = () => console.log(...arr);

console.log('Hola Mundo sin configuración con Webpack 😫');

codeESNext();

//document.getElementById("app").innerHTML = `<img src="${logo}" alt="Webpack">`;

//alert('Hola mundo');

const d = document,
    $app = d.getElementById("app"),
    $h1 = d.createElement("h1"),
    $logo = d.createElement("img"),
    $img = d.createElement("img");

$h1.textContent = "Hola Mundo con webpack";
$logo.src = logo;
$logo.classList.add('icon');
$img.src = gemini;

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($img);