let calculateCost = () => {
    var wage = document.getElementById("hourlyWage").value;
    var hours = document.getElementById("HoursWorked").value;
    var total = wage * hours;

    document.getElementById('totalCost').textContent = total.toFixed(2);
}

let insertProposedValues = () => {
    var selectedOption = document.getElementById("SelectType").value;
    var hourlyWage = document.getElementById("hourlyWage");
    var hoursWorked = document.getElementById("HoursWorked");

    if (selectedOption == 1){
        hourlyWage.value = 40;
        hoursWorked.value = 40;
    } else if (selectedOption == 2){
        hourlyWage.value = 30;
        hoursWorked.value = 10;
    } else if (selectedOption == 3){
        hourlyWage.value = 50;
        hoursWorked.value = 160;
    }

}
