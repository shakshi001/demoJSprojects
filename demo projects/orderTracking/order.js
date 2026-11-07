let order = document.getElementById("btn-order");
// let shipped = document.getElementById("btn-shipped");
// let Delivery = document.getElementById("btn-delivery");
// let Deliverd = document.getElementById("btn-delivered");




// order_info(1)
//     .then(() => order_shipped(1))
//     .then(() => out_for_delievry(1))
//     .then(() => order_deliverd(1))
//     .catch(err => console.log("order failed : ", err));


function order_info()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ordered = 1;
            if (ordered === 1)
            {
                resolve("Item is orderd");
            }
            else
            {
                reject("Item is out-of-stock");
            }
        },1000)
    })
}

 order_info();

function order_shipped(){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          let shipped = 1;
      if (shipped === 1) {
        resolve("Your Order is Shipped");
      } else {
        reject("We Are Extremly Sorry Checking On Your Order Information");
      }
    }, 2000);
  });
}

// let Shipping_info = order_shipped();
// console.log(Shipping_info);


function out_for_delievry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        let delivery_person = 1;
      if (delivery_person === 1) {
          resolve("Your Order is on the way");
      } else {
          reject("Odered Item will be delivered soon ...");
      }
    }, 3000);
  });
}

// let outForDelivey = out_for_delievry();
// console.log(outForDelivey);


function order_deliverd() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          let orderDeliverd = 1;
      if (orderDeliverd === 1) {
        resolve("Item Deliverd");
      } else {
        reject("Sorry for the delay ... orderd item will be reached shortly ");
      }
    }, 4000);
  });
}



// let order_reached = order_deliverd();
// console.log(order_reached);




order.addEventListener("click", function () {
  order_info()
    .then(() => order_shipped())
    .then(() => out_for_delievry())
    .then(() => order_deliverd())
    .catch((err) => console.log("order failed : ", err));
    console.log("completed");
});


console.log(order_info()
  .then(() => order_shipped())
  .then(() => out_for_delievry())
  .then(() => order_deliverd())
  .catch((err) => console.log("order failed : ", err)));












