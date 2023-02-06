let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");


let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((item) => item.itemQty).reduce((item, acc) => item + acc, 0);
 
 
     console.log("calculation function is running");
 }
 
calculation(); 

let generateCartItems = () => {
    if(basket.length !== 0) {
      return (ShoppingCart.innerHTML = basket.map((item) => 
      {
        let { id, itemQty} = item;
        let search = shopItemsData.find((x) => x.id === id) || [];
        return ` <div class="cart-item">
                    <img width="100" src=${search.img} alt="" />
                    <div class="details">

                    <div className="title-price-x">
                       <h4 class="title-price">
                         <p>${search.name}</p>
                         <p class="">$ ${search.price}</p>
                       </h4>
                       <i class="bi bi-x-lg"></i>  
                 </div>  

                 <div class="buttons">
                 <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                 <div id=${id} class="quantity">
                 ${search.itemQty === undefined ? 0 : search.item}
                 </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i> 
              </div>
                 
                 <h3></h3>
               </div>
               </div>  
        `;
      }).join(""));
    }  else {
      ShoppingCart.innerHTML = ` `;
      label.innerHTML = `  
         <h2>Cart is empty</h2>
         <a href="index.html">
           <button class="HomeBtn">Back to home</button>
           </a>
      ` ;
    }
}

generateCartItems();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((item) => item.id === selectedItem.id);

    if(search === undefined){
        basket.push({
          id: selectedItem.id,
          itemQty: 1,  
        });
    }  else{
        search.itemQty += 1;
    }

    console.log(basket);
    update(selectedItem)
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((item) => item.id === selectedItem.id);

    if(search === undefined) return;
    else if(search.itemQty === 0) return;
     else{
        search.itemQty -= 1;
    }


    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
//    console.log("decrement");
    
};

let update = (id) => {
   let search = basket.find((item) => item.id === id);
   console.log(search.item);
   document.getElementById(id).innerHTML = 
   calculation();

    console.log("the update funtion running");
};

