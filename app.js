
function calculateTip() {
    let bill = parseFloat(document.getElementById("bill").value);
    let tip = parseFloat(document.getElementById("tip").value);
    let people = parseInt(document.getElementById("people").value);

    // default values if empty
    if (isNaN(bill)) bill = 0;
    if (isNaN(tip)) tip = 0;
    if (isNaN(people) || people <= 0) people = 1;

    let tipAmount = (bill * (tip / 100)) / people;
    let totalAmount = (bill / people) + tipAmount;

    document.getElementById("tipPerPerson").innerText = tipAmount.toFixed(2);
    document.getElementById("totalPerPerson").innerText = totalAmount.toFixed(2);
}
