let button = document.getElementById("btn");


button.addEventListener("click", function () {
    let para = document.createElement("p");
    para.textContent = "OTP has sent"
    document.getElementById("container").appendChild(para);
})
