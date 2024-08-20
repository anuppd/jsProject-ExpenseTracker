const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
let total = 0;

expenseForm.addEventListener("submit", (e) => {
    e.preventDefault(); //to stop reloading after clicking

    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;

    if (description && category && !isNaN(amount)) { // if description exists, category exists, amount not NotANumber 
        const newRow = document.createElement("tr");

        newRow.innerHTML = `<td>${description}</td> <td>${category}</td> <td>${amount}</td>`;

        expenseList.appendChild(newRow);

        document.getElementById("description").value = "";
        document.getElementById("category").value = "";
        document.getElementById("amount").value = "";

        total = total + Number(amount);

        document.getElementById("total").innerHTML = "Total:  " + total;

    } else {
        alert("Please fill out all fields with valid data...")
    }
});
