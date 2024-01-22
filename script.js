var totalBill = ""
var qualityService = ""
var partySize = ""

let tip;

switch (qualityService) {
    case Great:
    tip = totalBill * 0.2
        break;
    case Good:
    tip = totalBill * 0.15
        break;
    case Poor:
    tip = totalBill * 0.1
        break;
}

