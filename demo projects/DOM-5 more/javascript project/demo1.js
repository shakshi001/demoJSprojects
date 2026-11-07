// alert("connected");// nerver use this

//document.querySelector('#')
//1
let hold = document
  .getElementById("changeTextbutton")
  .addEventListener("click",()=> {
    let paragraph = document.getElementById("myParagraph");
    console.log(paragraph);
    paragraph.textContent = "hii shakshi";
  });

console.log(hold);
//2
document
  .getElementById("hightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    console.log(citiesList.firstElementChild);
    console.log(citiesList);
    console.log(citiesList.firstElementChild.classList); 
    citiesList.firstElementChild.classList.add("highlight");
  });

//3
document
  .getElementById("changeOrder")
  .addEventListener("click", function()
  {
    let info = document.getElementById("cofferrType");
    console.log(info);
    // let info2 = document.getElementById("changeOrder");
    // info.textContent = info2;
    cofferrType.textContent = "expresso";
    cofferrType.style.backgroundColor = "brown";
    cofferrType.style.padding = "5px";
});


//4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement('li');
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});


//5
// document.getElementById("removebtn").addEventListener("click", function(){
//   let taskList = document.getElementById("removelist");
//   taskList.remove();
// });



// to remove one by one
document.getElementById("removebtn").addEventListener("click", function () {
  let taskList = document.getElementById("removelist");
  taskList.lastElementChild.remove();
});










