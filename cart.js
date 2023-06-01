 const product = [
     {
         id: 0,
         image: 'chair2.jpg',
         title: 'Royal Oak sofa',
         price: 10000,
     },
     {
         id: 1,
         image: 'sofa2.jpg',
         title: 'Wooden table',
         price: 5000,
     },
     {
         id: 2,
         image: 'cupboard1.jpg',
         title: 'cupboard',
         price: 2300,
     },
     {
         id: 3,
         image: 'cupboard2.jpg',
         title: 'modern cupboard',
         price: 8000,
    },
    {
        id: 4,
        image: 'sofa6.png',
        title: ' sofa',
        price: 8000,
    },
    {
        id: 5,
        image: 'table4.jpg',
        title: 'Table',
        price: 8000,
    },
    {
        id: 6,
        image: 'table5.jpg',
        title: 'Table',
        price: 9000,
    },
    {
        id: 7,
        image: 'table6.jpg',
        title: 'Table',
        price: 1200,
    },
     {
         id: 8,
         image: 'chair1.jpg',
         title: 'Chair',
         price: 5000,
     },
 ];
// let idd = localStorage.getItem('newOne');
// let all_data = localStorage.getItem('all_data');
// all_data = JSON.parse(all_data);
// let product = [{
//     id:idd,
//     image: all_data[idd-1]['Image'],
//     title:all_data[idd-1]['Name'],
//     price:all_data[idd-1]['Price'],
// }];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
  
    
}