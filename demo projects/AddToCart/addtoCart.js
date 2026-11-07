document.addEventListener('DOMContentLoaded', () => {
    const product = [
        { id: 1, name: "Product 1", price: 29.99 },
        { id: 2, name: "Product 2", price: 59.99 },
        { id: 3, name: "Product 3", price: 99.99 },
              
    ];

    const cart = [];
    const productList = document.getElementById("product-list");
    const cartItem = document.getElementById("cart-item");
    const cartTotal = document.getElementById("cart-total");
    const emptyCartMessage = document.getElementById("empty-cart");
    const total = document.getElementById("total-price");
    const checkOutbtn = document.getElementById("checkout");
    console.log(productList);
    console.log(cartItem);
    console.log(cartTotal);
    console.log(emptyCartMessage);
    console.log(total);
    console.log(checkOutbtn);
    
    product.forEach((products) => {
      const productDiv = document.createElement("div");
      //    productDiv.className.add('product')
      productDiv.innerHTML = `
          <span>${products.name} -$ ${products.price.toFixed(2)} </span>
          <button data-id = "${products.id}">Add to Cart</button>
       `;

      productList.appendChild(productDiv);
    });
    
    productList.addEventListener("click", (e) => {
        if (e.target.tagName === 'BUTTON')
        {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const products = product.find(p => p.id === productId);
            addToCart(products);
        }
    });


    function addToCart(product_item)
    {
        cart.push(product_item);
        renderCart();
    }

    function renderCart() {
        cartItem.innerHTML = "";
        let totalPrice = 0;
        if (cart.length > 0) {
            emptyCartMessage.classList.add("hidden");
            cartTotal.classList.remove("hidden");
            cart.forEach((item, index) => {
            totalPrice += item.price;
                let item_in_cart = document.createElement("div");
                item_in_cart.innerHTML = `
                ${item.name} - ${item.price.toFixed(2)}
                `
                cartItem.appendChild(item_in_cart);
                total.textContent = totalPrice;
            })
        }
        else
        {
            emptyCartMessage.classList.remove('hidden');
            cartTotal.classList.add("hidden");
        }
    }

    checkOutbtn.addEventListener("click", function () {
        cart.length = 0;
        alert("directing towards payment");
        renderCart();
    })

    });
       
      
    
