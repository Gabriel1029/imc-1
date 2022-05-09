    
     let cantidad = document.querySelector(".persona");
     console.log(cantidad);

     for(let i = 0; i < cantidad.texContent; i++){
        let cantidades = cantidad[i];
        
        let tdPeso = cantidades.querySelector(".info-peso");
        let peso = tdPeso.texContent;

        let tdAltura = cantidades.querySelector(".info-altura");
        let altura = tdAltura.texContent;

        let tdImc = cantidades.querySelector(".info-imc");

        pesoEsvalido = true;
        alturaEsvalida = true;

        if ((peso < 0)||(peso > 100)) {
            console.log("peso incorrecto");
            tdImc.texContent = "peso incorrecto";
            pesoEsvalido = false;
            cantidades.classList.add("incorrecto");
        }

        if ((altura < 0)||(altura > 2.00)) {
            console.log("altura incorrecta");
            tdImc.texContent = "altura incorrecta";
            pesoEsvalido = false;
            cantidades.classList.add("incorrecto");
        }

        if (pesoEsvalido && alturaEsvalida) {
            tdImc.texContent = calcularIMC(peso,altura);
        }
        
     }  

     function calcularIMC(peso,altura){
         let imc = peso / (altura * altura);
         return imc.toFixed(2);
     }

