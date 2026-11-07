let track_order = document.getElementById("btn-order");
console.log(track_order);
let order = document.getElementById("order");
let ship_details = document.getElementById("shipping");
console.log(ship_details);
let person = document.getElementById("Delivery");
let reached = document.getElementById("customer");








let ordered_item = "1";
let delivery_person = "1";
let customer = "1";

track_order.addEventListener("click", function () {
    getOrder();
});



function fetchBrand()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ordered_item === "1")
            {
                resolve("1");
            }
            else
            {
                reject("Promise rejected");
            }
        }, 1000);
    })
}



 async function getOrder() {
   try {
       console.log("fetching your order details ...");
       let brand = await fetchBrand();
       console.log(brand);
       if (brand === "1")
       {
           order.textContent = "Item ordered";
           order.style.background = "blue";
           order.style.padding = "0.5vw";
           order.style.border = "1px solid black"
           order.style.borderRadius = "5px";
           getshipped();
       }
   } catch (error) {
       order.textContent = "Item out of stock";
       console.error("Item out of stock", error);
   }
 }



function shipping_Details() {
    return new Promise((resolve, reject)  => {
        setTimeout(() => {
            if (ordered_item === "1")
            {
                resolve("1");
            }
            else
            {
                reject("0");
            }
        },2000)
    })
}



async function getshipped()
{
    try {
        console.log("fetching shipping details ....");
        // let ordered_item = await fetchBrand();
        let shipment = await shipping_Details();
    
    
        if (shipment === "1"){
            ship_details.textContent = "Order Shipped"
             ship_details.style.background = "blue";
             ship_details.style.padding = "0.5vw";
             ship_details.style.border = "1px solid black";
             ship_details.style.borderRadius = "5px";
            console.log("item shipped");
            Delivery();
        }
    }catch (error)
    {
        ship_details.textContent = "Delay or Item not reached to the service provider";
        console.error("error: ", error);
    }
}



function out_for_Delivery()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delivery_person === "1") {
                resolve("1");
            }
            else {
                reject("0");
            }
        }, 3000);
    })
}

async function Delivery()
{
    try
    {
        let delivery_person_assign = await out_for_Delivery();
        if (delivery_person_assign === "1")
        {
            person.textContent = "Out-for-delivery";
             person.style.background = "blue";
             person.style.padding = "0.5vw";
             person.style.border = "1px solid black";
             person.style.borderRadius = "5px";
            Reached();
        }
    }
    catch (error)
    {
        person.textContent = "Dealy ... Your order will be delayed shortly";
        console.log("erorr: ", error);
    }
}

function order_item_reached()
{
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if (customer === "1") {
                resolve("1");
            }
            else {
                reject("0");
            }
        }, 9000);
    })
}



async function Reached()
{
    try
    {
        reached.textContent = "Delivered";
         reached.style.background = "blue";
         reached.style.padding = "0.5vw";
         reached.style.border = "1px solid black";
         reached.style.borderRadius = "5px";
        console.log("Delivered");
    }
    catch (error)
    {
        reached.textContent = "Ordered Item Cancelled";
        console.error("error: ", error);
    }
}


























