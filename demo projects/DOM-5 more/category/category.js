let Cart = document.getElementById("cart");
let count = 0;
let addTocarts = document.querySelectorAll(".addTocart");

addTocarts.forEach(addTocart => {
  addTocart.addEventListener("click", function() {
    count++;
    Cart.textContent = `Cart +${count}`;
  })
});

let remove = document.getElementById("removeBtn");
console.log(remove);

remove.addEventListener("click", function () {
  count--;
  Cart.textContent = `Cart  -${count}`
});


document.getElementById("menBtn").addEventListener("click", function () {
  let para = document.getElementById("ExploreM");
  para.textContent = "Explore Men's Collection \n click the link"
  para.style.fontSize = "1.4vw";
});


document.getElementById("womenBtn").addEventListener("click", function () {
  let para = document.getElementById("ExploreW");
  para.textContent = "Explore Women's Collection \n click the link";
  para.style.fontSize = "1.4vw";
});


function offer(number)
{
  if (number > 100)
  {
   alert("offer applied")
  }
  else
  {
    alert("shop more for offer to be applied ")
  }
}

document.getElementById("menBtn").addEventListener("dblclick",
  function () {
   let offer_code = Number(prompt("Let's Check weather You are eligible for offers or not \n Enter offer code"));
    offer(offer_code);

  }
)





















