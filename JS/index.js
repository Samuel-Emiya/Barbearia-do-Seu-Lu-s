let lima = 0

document.getElementById("egg").addEventListener("click", veriFica)

function veriFica() {
    if (lima == 0) {
        lima++
    }
    else if (lima == 1) {
        alert("Pare");
        lima++
    }
    else if (lima == 2) {
        alert("Eu Falei pra parar")
        lima++
    }
    else if (lima == 3) {
        alert("Tá esperando o que aqui?")
        lima++
    }
    else if (lima == 4) {
        alert("Não, sério, ta esperando uma recompensa?")
        lima++
    }
    else if (lima == 5) {
        alert("...")
        lima++
    }
    else if (lima == 6) {
        alert("Não")
        lima = 0
    }
}