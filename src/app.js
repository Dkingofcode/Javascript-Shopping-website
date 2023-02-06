let  shop = document.getElementById('shop');

console.log(shop);


let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((item) => {
    let { id, name, price, desc, img } = item;
    `
    <div id=product-id-${id} class="item">
    <img width="200" src=${img} alt="image">
    <div class="details">
        <h3>${name}</h3>
         <p>${desc}</p>
         <div class="price-quantity">
         <h2>$ ${price} </h2>
         <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">
            ${search.item === undefined ? 0 : search.item}
            </div>
           <i onclick="increment(${id})" class="bi bi-plus-lg"></i> 
         </div>
         </div>
    </div>
</div>
    `; }).join(""));
};

generateShop();

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

    if(search === 0) return;
     else{
        search.itemQty -= 1;
    }

    localStorage.setItem("data", JSON.stringify(basket));
//    console.log("decrement");
    update(selectedItem.id);
};

let update = (id) => {
   let search = basket.find((item) => item.id === id);
   console.log(search.item);
   document.getElementById(id).innerHTML = 
   calculation();

    console.log("the update funtion running");
};


























































