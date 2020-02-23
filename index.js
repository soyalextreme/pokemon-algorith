// 
/// Variables
var jigglypuffVida = 100
var pikachuVida = 100

var jigglypuffAtack = 40
var pikachuAtack = 60
var turno 
var jigglypuffVel = 50
var pikachuVel = 50
var mensajePi = "Pikachu Ataca";
var mensajeJi = "Jigglypuff Ataca";

// do { 
//     if(turno === 1 )
//     {
//         jigglypuffVida = jigglypuffVida - pikachuAtack;
//         turno = 0;
//     }else if (turno === 0) {
//         pikachuVida = pikachuVida - jigglypuffAtack;
//         turno = 1;

//     }
//     console.log(`Vida Pikachu: ${pikachuVida}     Vida JigglyPuff: ${jigglypuffVida}`);


// // } while (jigglypuffVida > 0 && pikachuVida > 0)

// if(jigglypuffVida <= 0){
//     console.log("pikachu wins");
// }if(pikachuVida <= 0 ){
//     console.log("jigglypuff wins");
// }

if(pikachuVel > jigglypuffVel){
    turno = 1;

}else if(pikachuVel < jigglypuffVel){
    turno = 0;
}else{
    var factorProbabilad = Math.random()

    if(factorProbabilad >= 0.5){
        turno = 1;
    }else{
        turno = 0;
    }
}


if(turno === 0){
    console.log("Jigglypuff empieza");
}else if(turno === 1){
    console.log("Pikachu empieza");
}

for (let round = 0; pikachuVida>0 && jigglypuffVida>0; round++) {
    console.log(`Turno: ${round}`);
    if(round === 0 && turno === 1){
        mensajeJi = "Jigglypuff contra ataca";
        mensajePi = "Pikachu Ataca";
    }else if(round === 0 && turno === 0){
        mensajeJi = "Jigglypuff Ataca";
        mensajePi = "Pikachu contra ataca";
    }else if(round != 0){
        mensajePi = "Pikachu contra ataca";
        mensajeJi = "Jigglypuff contra ataca";
    }



    if (turno === 1) {
        console.log(mensajePi)
        jigglypuffVida -=pikachuAtack;
        if(jigglypuffVida < 0){
            jigglypuffVida = 0;
            console.log("Se murio Jigglypufff que sad :C")
        }
        turno = 0;
    }else{
        console.log(mensajeJi)
        pikachuVida -= jigglypuffAtack;
        if(pikachuVida < 0){
            pikachuVida = 0;
            console.log("Se murio Pikachuuuu que sad :C")
        }
        turno = 1;
    }
    
    console.log(`Pikachu Vida: ${pikachuVida}   JigglyPuff: ${jigglypuffVida}`);
}


if (pikachuVida <= 0) {
    console.log("Jigglypuff WINSSSSSSSSSSSSSSSSSSSSSS");
}else{
    console.log("Pikachu WINSSSSSSSSSSSSSSSSSSSSSS");
}
