let datos = [];
let temp = 0;
let ban = 0;

for(let x=0; x<10; x++){
    let numero = parseInt(prompt(`Ingrese el número ${x + 1}:`));
    datos.push(numero);
}


function ordenar() {
    for(let x=0; x<9; x++){
        for(let y=x+1; y<10; y++){
            if(datos[x]>datos[y]){
                temp = datos[x];
                datos[x]=datos[y];
                datos[y] = temp;
            }
        }
    }
}

function mayMenor(){
    for(let x=0; x<9; x++){
        if(datos[x] != datos[y]){

            }
        }
    }
}