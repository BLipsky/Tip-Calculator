

function calculateAndDisplay(){
    
    let bill = parseFloat(document.getElementById('totalBill').value)
    let partySize = parseInt(document.getElementById('partySize').value)
    let serviceQuality = document.getElementById('serviceQuality').value


    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calculateAmtPerPers(totalBill, partySize)


    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBill').innerText = 'Total: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPers').innerText = 'Amount Per Person: $' + amtPerPers.toFixed(2)

}


