alert("Grateful to have customer like you");


document.getElementById("top-heading").addEventListener("mouseover", function () {
    let para = document.getElementById("sector-1");
    console.log(para);
    para.textContent = "Your Changes Our Priority";
    para.style.background = "white";
    para.style.fontSize = "2.5vw";
    para.style.marginTop = "1.5vw";
    para.style.borderRadius = "10px"
});



document.getElementById("submit").addEventListener("click", function () {
    let input = document.getElementById("input-box").value;
    console.log(input);
    let para = document.getElementById("grateful");
    para.textContent = "Thank You";
});



































