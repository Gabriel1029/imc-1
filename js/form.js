let boton = document.querySelector("#ingresar-persona");
boton.addEventListener('click',function(event){
   event.preventDefault();

    let form2 = document.querySelector("#form-ingreso");

    let nombre = form2.nombre.value;
    let peso = form2.peso.value;
    let altura = form2.altura.value;

    let personaTr = document.createElement("tr");
    let nombreTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let imcTd = document.createElement("td");

    let tabla = document.querySelector("#tabla-familiar");

    nombreTd.textContent = nombre;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    imcTd.textContent = calcularIMC(peso,altura);

    personaTr.appendChild(nombreTd);
    personaTr.appendChild(pesoTd);
    personaTr.appendChild(alturaTd);
    personaTr.appendChild(imcTd);

    tabla.appendChild(personaTr);
});



