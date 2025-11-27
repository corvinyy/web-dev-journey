function calculateFuel() {
    alert("Calculating fuel option...");

    let alcoholPrice = document.getElementById("alcohol").value;
    let gasolinePrice = document.getElementById("gasoline").value;

    if (alcoholPrice === "" || gasolinePrice === "") {
        alert("Please enter both alcohol and gasoline prices.");
        return;
    }

    let result = (alcoholPrice / gasolinePrice) < 0.7 ? "Alcohol is more cost-effective." : "Gasoline is more cost-effective.";
    document.querySelector(".alert.alert-primary").innerText = result;

}