
    let jug1
    let jug2

window.onload = () => {

    const juegoVista = document.getElementById("juego-vista")
    const inicioVista = document.getElementById("inicio-vista")
    document.getElementById("screen").innerHTML = inicioVista.innerHTML
    // document.getElementById("screen").innerHTML = juegoVista.innerHTML

    const aceptar = document.getElementById("aceptar")

    aceptar.addEventListener("click", (e) => {
        e.preventDefault()
        
        jug1 = document.getElementById("nj1").value
        jug2 = document.getElementById("nj2").value

        document.getElementById("screen").innerHTML = juegoVista.innerHTML
        juego()
        // console.log(jug2)

        document.getElementById("j1").innerHTML = jug1 + ": X"
        document.getElementById("j2").innerHTML = jug2 + ": O"

        
        

    })


    
}

const juego = () => {
    
    let infoCuadro = document.getElementsByClassName("cuadro")
    let id1
    let xOrO = true
    let ganador = document.getElementById("ganador")


    for(let i=0; i < 9; i++){
        infoCuadro[i].addEventListener("click", function(){
            infoCuadro = document.getElementsByClassName("cuadro")
            id1 = this.id
            let cuadro = document.getElementById(id1)
            // console.log(id1)

            if (infoCuadro[i].id === id1 && cuadro.innerHTML === "" && xOrO === true){
                cuadro.innerHTML = "X"
                cuadro.disabled = true
                xOrO = false
            }
            else{
                cuadro.innerHTML = "O"
                cuadro.disabled = true
                xOrO = true
            }

           if ((infoCuadro[0].innerHTML === "X" && infoCuadro[3].innerHTML === "X" && infoCuadro[6].innerHTML === "X") || 
               (infoCuadro[1].innerHTML === "X" && infoCuadro[4].innerHTML === "X" && infoCuadro[7].innerHTML === "X") ||
               (infoCuadro[2].innerHTML === "X" && infoCuadro[5].innerHTML === "X" && infoCuadro[8].innerHTML === "X") ||
               (infoCuadro[0].innerHTML === "X" && infoCuadro[1].innerHTML === "X" && infoCuadro[2].innerHTML === "X") ||
               (infoCuadro[3].innerHTML === "X" && infoCuadro[4].innerHTML === "X" && infoCuadro[5].innerHTML === "X") ||
               (infoCuadro[6].innerHTML === "X" && infoCuadro[7].innerHTML === "X" && infoCuadro[8].innerHTML === "X") ||
               (infoCuadro[0].innerHTML === "X" && infoCuadro[4].innerHTML === "X" && infoCuadro[8].innerHTML === "X") ||
               (infoCuadro[2].innerHTML === "X" && infoCuadro[4].innerHTML === "X" && infoCuadro[6].innerHTML === "X") )
               {
                ganador.innerHTML = "Ganador: " + jug1 
                
               }
                


            if ((infoCuadro[0].innerHTML === "O" && infoCuadro[3].innerHTML === "O" && infoCuadro[6].innerHTML === "O") || 
               (infoCuadro[1].innerHTML === "O" && infoCuadro[4].innerHTML === "O" && infoCuadro[7].innerHTML === "O") ||
               (infoCuadro[2].innerHTML === "O" && infoCuadro[5].innerHTML === "O" && infoCuadro[8].innerHTML === "O") ||
               (infoCuadro[0].innerHTML === "O" && infoCuadro[1].innerHTML === "O" && infoCuadro[2].innerHTML === "O") ||
               (infoCuadro[3].innerHTML === "O" && infoCuadro[4].innerHTML === "O" && infoCuadro[5].innerHTML === "O") ||
               (infoCuadro[6].innerHTML === "O" && infoCuadro[7].innerHTML === "O" && infoCuadro[8].innerHTML === "O") ||
               (infoCuadro[0].innerHTML === "O" && infoCuadro[4].innerHTML === "O" && infoCuadro[8].innerHTML === "O") ||
               (infoCuadro[2].innerHTML === "O" && infoCuadro[4].innerHTML === "O" && infoCuadro[6].innerHTML === "O") )
               {
                ganador.innerHTML = "Ganador: " + jug2

               }

        })

        
    }
}
 
