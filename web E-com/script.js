function menuetoggle(){
    var MenuItems=document.getElementById("MenuItems");
    if(MenuItems.style.maxHeight=="0px")
    {
        MenuItems.style.maxHeight="200px";
    }
    else
    {
        MenuItems.style.maxHeight="0px";
    }
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

function addToCart(name, price, image){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let product = cart.find(item => item.name === name);

  if(product){
    product.qty += 1;
  }else{
    cart.push({ name, price, image, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = cart.reduce((sum,item)=>sum + item.qty,0);
  document.getElementById("cartCount").innerText = count;
}
let user = JSON.parse(localStorage.getItem("loggedUser"));

if(user){
  document.getElementById("loginLink").style.display="none";
  document.getElementById("logoutLink").style.display="block";
}

function logout(){
  localStorage.removeItem("loggedUser");
  window.location.reload();
}