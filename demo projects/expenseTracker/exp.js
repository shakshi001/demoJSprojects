document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseTracker = document.getElementById("expense-tracker");
  const expenseAmount = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalDiv = document.getElementById("total");
    const totalAmount = document.getElementById("total-amount");
    const addExpense = document.getElementById("addExpense");

  console.log(expenseForm);
  console.log(expenseTracker);
  console.log(expenseAmount);
  console.log(expenseList);
  console.log(totalDiv);
    console.log(totalAmount);
    console.log(addExpense);
    
    const expense = JSON.parse(localStorage.getItem("exp")) || [];
    
    expense.forEach(item => {
        renderData(item);
    });











    addExpense.addEventListener("click", () => {
        const expName = expenseTracker.value.trim();
        const expAmount = expenseAmount.value
        // console.log(expName);
        // console.log(expAmount);
        if (expName === "" || expAmount === "") return;
        const expTrack = {
            id: Date.now(),
            name: expName,
            amount: expAmount
        };

        expense.push(expTrack);
        console.log(expense);
        saveExp();
        expName.value = "";
        expAmount.value = ""
    })
     
    function renderData(exp) {
        const li = document.createElement("li");
        let totalPrice = 0;
        li.setAttribute("data-id", exp.id);
        li.innerHTML = 
            `<span>${exp.name} - $ ${exp.amount} </span>
            <span><button>Delete</button></span>`
        expenseList.appendChild(li);
        expense.forEach(exp => {
            totalPrice += parseInt(exp.amount);
        });
        li.querySelector("button").addEventListener("click", (e) => {
            exp = expense.filter((t) => t.id === exp.id);
            li.remove();
            saveExp();
        })
        totalAmount.textContent = totalPrice;
    }

    // function calculate_Total(expense) {
    //     const totalPrice = 0;
    //     if (expense.length > 0)
    //     {
    //         expense.forEach(el => {
    //             totalPrice += parseInt(el.amount);
    //         });

    //         totalAmount.textContent = totalPrice;
    //         console.log(totalAmount);
    //     }
    // }

    function saveExp()
    {
        localStorage.setItem("exp", JSON.stringify(expense));
    }

});
