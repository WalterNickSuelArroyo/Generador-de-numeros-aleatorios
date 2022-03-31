const numero = document.querySelector(".numero");
const btn = document.querySelector(".generar");

const generarNumero = ()=>{
    //Generar numero del 1 al 10
    const numeroAleatorio = Math.floor( Math.random()*10+1);
    numero.innerHTML = numeroAleatorio;
};
btn.addEventListener("click",generarNumero);
generarNumero();

//const rand = Math.floor( Math.random()*10+1);
//console.log(rand);