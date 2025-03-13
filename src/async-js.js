let x = 6;
let y = 7;

const sum = x+y;

// console.log(sum); //13


export const details = () => {

    const p = document.getElementById('details');

    setTimeout(()=> p.innerText="Este es un parrafo", 3000);

    p.style.background = "orange";
};

//API application programming interface
//Web api, app que se ejecuta en el servidor, para envio y recepcion de datos