const product = [
    {
        id: 0,
        image: 'book_1.jpg',
        title: 'CocoGoose',
        price: 800,
    },
    {
        id: 1,
        image: 'book_2.jpg',
        title: 'Subletter',
        price: 1200,
    },
    {
        id: 2,
        image: 'book_3.jpg',
        title: 'WestPart',
        price: 4500,
    },
    {
        id: 3,
        image: 'book_4.jpg',
        title: 'Beautiful',
        price: 2000,
    },
    {
        id: 4,
        image: 'book_5.jpg',
        title: 'Clever Lands',
        price: 2200,
    },
    {
        id: 5,
        image: 'book_6.jpg',
        title: 'Shattered',
        price: 500,
    },
    {
        id: 6,
        image: 'book_7.png',
        title: 'The Art city',
        price: 900,
    },
    {
        id: 7,
        image: 'book_8.png',
        title: 'Music',
        price: 2400,
    },
    {
        id: 8,
        image: 'book_9.jpg',
        title: 'Free Fall',
        price: 1200,
    },
    {
        id: 9,
        image: 'book_10.png',
        title: 'Illusion',
        price: 850,
    },
    {
        id: 10,
        image: 'book_11.jpg',
        title: 'Boring girls',
        price: 1300,
    },
    {
        id: 11,
        image: 'book_12.png',
        title: 'Thanks on everything',
        price: 2400,
    },
    {
        id: 12,
        image: 'book_13.png',
        title: 'Magic Hands',
        price: 1700,
    },
    {
        id: 13,
        image: 'book_14.png',
        title: 'Simple text',
        price: 600,
    },
    {
        id: 14,
        image: 'book_15.png',
        title: 'Black History',
        price: 1400,
    }

];
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
     alert('Book added to cart');
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