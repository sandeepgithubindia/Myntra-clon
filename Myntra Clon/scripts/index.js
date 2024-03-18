// let item={
//     item_image: 'images/1.jpg',
//     rating: {
//         stars: 4.5,
//         noOfReviews: 1400,
//     },
//     company_name: 'Carlton Lomdon',
//     itemm_name: 'Rhodium-Plated CZ Floral Studs',
//     current_price: 606,
//     original_price: 1045,
//     discount_percentage: 42,

// }

let bagItems;
onLoad();
function onLoad(){
    let bagItemStr=localStorage.getItem('bagItems');
    bagItems=bagItemStr ? JSON.parse(bagItemStr):[];
    displayItemOnHomePage()
    displayBagIcon();
}
function addToBag(item){
    bagItems.push(item);
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    displayBagIcon();
}
function displayBagIcon(){
    let bagItemCountElement=document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerHTML=bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility='hidden';
    }
}
function displayItemOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
    let innerHTML='';
    items.forEach(item=>{
        innerHTML +=`<div class="item-container">
        <img class="item-image" src="${item.image}" alt="item-image">
        <div class="rating">
            ${item.rating.stars} ⭐ |${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="orignal-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>

        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>

    </div>`
});
itemsContainerElement.innerHTML = innerHTML;
}
