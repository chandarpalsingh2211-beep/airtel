function calculate() {

    const rent =
        parseFloat(document.getElementById("rent").value);

    const food =
        parseFloat(document.getElementById("food").value);

    const electricityUnits =
        parseFloat(document.getElementById("electricity").value);

    const chargePerUnit =
        parseFloat(document.getElementById("charge").value);

    const persons =
        parseInt(document.getElementById("persons").value);


    const error = document.getElementById("error");

    const result = document.getElementById("result");


    // Reset messages

    error.classList.remove("show");

    result.classList.remove("show");


    // Validate input

    if (
        isNaN(rent) ||
        isNaN(food) ||
        isNaN(electricityUnits) ||
        isNaN(chargePerUnit) ||
        isNaN(persons)
    ) {

        showError("Please enter all values.");

        return;
    }


    if (rent < 0 || food < 0) {

        showError("Rent and food cannot be negative.");

        return;
    }


    if (electricityUnits < 0 || chargePerUnit < 0) {

        showError("Electricity values cannot be negative.");

        return;
    }


    if (persons <= 0) {

        showError("Number of persons must be greater than 0.");

        return;
    }


    // Calculation

    const electricityBill =
        electricityUnits * chargePerUnit;


    const totalExpenses =
        rent + food + electricityBill;


    const amountPerPerson =
        totalExpenses / persons;


    // Display result

    document.getElementById("amount").textContent =
        "₹ " + amountPerPerson.toFixed(2);


    document.getElementById("electricityBill").textContent =
        "₹ " + electricityBill.toFixed(2);


    document.getElementById("totalExpenses").textContent =
        "₹ " + totalExpenses.toFixed(2);


    // Show animation

    result.classList.add("show");

}


function showError(message) {

    const error =
        document.getElementById("error");

    error.textContent = message;

    error.classList.add("show");
}


function clearData() {

    document.getElementById("rent").value = "";

    document.getElementById("food").value = "";

    document.getElementById("electricity").value = "";

    document.getElementById("charge").value = "";

    document.getElementById("persons").value = "";


    document.getElementById("amount").textContent =
        "₹ 0.00";


    document.getElementById("electricityBill").textContent =
        "₹ 0.00";


    document.getElementById("totalExpenses").textContent =
        "₹ 0.00";


    document.getElementById("result").classList.remove("show");

    document.getElementById("error").classList.remove("show");

}
