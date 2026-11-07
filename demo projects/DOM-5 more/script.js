document.getElementById("clickMebtn").addEventListener("dblclick", function(){
    alert("keep going shakshi");
})


// mouseover , click , dblclick


document.getElementById("teaList").addEventListener("click", function (event) {
    // console.log(event.target);
    if (event.target && event.target.matches(".teaItem")) {
      alert("You selected: " + event.target.textContent);
    }
})

// form handling

document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let feedBack = document.getElementById("feedbackInput").value;
    console.log(feedBack);
    document.getElementById("feedbackDisplay").textContent = `FeedBack  is ${feedBack}`;
});



// 9
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").textContent = "DOM fully loaded";
})
// 10



document.getElementById("toggelHighlight").addEventListener("click", function () {
    document.getElementById("descriptionText").classList.toggle("highlight");
})











































