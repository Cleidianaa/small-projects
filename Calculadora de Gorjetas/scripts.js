
function calculateTip(e) {
    e.preventDefault()
    var bill = document.getElementById('bill').value
    var serviceQual = document.getElementById('serviceQual').value
    var people = document.getElementById('people').value
   

    if(bill === '' || serviceQual == 0 || isNaN(bill) || isNaN(people)){
        alert("Por favor, preencha os valores!")
        return
    }

    if(people === "" || people <= 1) {
        people = 1
        document.getElementById("each").style.display = "none"
    } else{
        document.getElementById("each").style.display = "block"
    }

    var totalServiceQual = (bill * serviceQual) / people
    var total = totalServiceQual + (bill / people)

    total = Math.round(total * 100) / 100
    total = total.toFixed(2)

    document.getElementById("each").innerHTML = total
    document.getElementById("totalTip").style.display = "block"
}


document.getElementById("totalTip").style.display = "none"
document.getElementById("each").style.display = "none"

document.getElementById("tipsForm").addEventListener('submit', calculateTip)

