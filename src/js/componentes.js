import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {
    console.log('se está ejecutando esto desde la funcion saludar');
    let h1 = document.createElement('h1');
    h1.innerHTML = `Hola ${nombre}!!`;
    document.body.appendChild(h1);
}

// img
// console.log(webpacklogo);
// const img = document.createElement('img');
// img.src = webpacklogo;
// document.body.append(img);