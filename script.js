
//Function so Occurs on Click
function calculateAndDisplay(){

    //Getting Values from HTML
    let bill = parseFloat(document.getElementById('totalBill').value)
    let partySize = parseInt(document.getElementById('partySize').value)
    let serviceQuality = document.getElementById('serviceQuality').value


 // Calculate Tip, Total, and Amount Per Person

    let tip = calculateTip(bill, serviceQuality);
    let totalBill = calculateTotalBill(bill, tip);
    let amtPerPers = calculateAmtPerPers(totalBill, partySize);

    //Display Results
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText = 'Total: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersResult').innerText = 'Amount Per Person: $' + amtPerPers.toFixed(2)
    
}

//Helper Functions
function calculateTip(bill, serviceQuality){
    
    if (serviceQuality === 'great'){
        return bill * .2
    } else if (serviceQuality === 'good'){
        return bill * .15
    } else if (serviceQuality === 'poor'){
        return bill * .1
    }
    
}
function calculateTotalBill(bill, tip){
    return bill + tip
}
function calculateAmtPerPers(totalBill, partySize){
    return totalBill / partySize
}