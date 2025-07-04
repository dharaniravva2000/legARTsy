let gallery = document.getElementById("gallery");

function purchaseArt(title) {
  alert(`You selected to buy "${title}". Our team will contact you shortly!`);
}

// renderGallery();

  function addToCart(artName) {
    alert(`"${artName}" has been added to your cart.`);
    // Optionally update cart UI or localStorage
  }

  function buyNow(artName) {
    alert(`Proceeding to purchase "${artName}".`);
    // You could redirect to a checkout page or trigger payment flow here
    // location.href = "checkout.html"; // Example
  }

  const slides = [
    {
      title: "Spring Sculpture Showcase",
      text: "Marvel at the harmony of nature and form in this exquisite sculpture exhibition.",
    },
    {
      title: "Legacy Art Festival",
      text: "Art that echoes through time — immersive workshops and interactive galleries await.",
    },
    {
      title: "Royal Paintings Exhibition",
      text: "Witness masterpieces that reflect royal heritage, beauty, and technique.",
    },
  ];

  let currentSlide = 0;
  const slideElement = document.getElementById("slideshow");

  function showSlide() {
    const { title, text } = slides[currentSlide];
    // slideElement.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
    currentSlide = (currentSlide + 1) % slides.length;
  }

  setInterval(showSlide, 4000); // Change every 4 seconds
  showSlide(); // Initial call


  // function addToCart(productName) {
  //   const productData = {
  //     "Emerald Forest Canvas": {
  //       name: "Emerald Forest Canvas",
  //       price: 350,
  //       image: "https://i.etsystatic.com/32138048/r/il/c81511/5042639896/il_570xN.5042639896_8pei.jpg"
  //     },
  //     "Legacy Stroke Canvas": {
  //       name: "Legacy Stroke Canvas",
  //       price: 420,
  //       image: "https://images.squarespace-cdn.com/content/v1/5caa57b7e8ba44f0a1ce6bb3/1554774175607-51X7ARU6W7EPGT1CVGXH/A01.jpg"
  //     },
  //     "Mystic Flow Canvas": {
  //       name: "Mystic Flow Canvas",
  //       price: 290,
  //       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkbGxi5DTRyp2MYOzOE0L8FKxJJM4puxCooA&s"
  //     },
  //     "Stone Grace": {
  //       name: "Stone Grace",
  //       price: 800,
  //       image: "https://dsm2vix2l99vj.cloudfront.net/tmp/image-thumbnails/Web/News/2016/March/11/image-thumb__1436__cover-1200x768/museonacionaldeescultura3_es.jpg"
  //     }
  //   };

    // const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // cart.push(productData[productName]);
    // localStorage.setItem("cart", JSON.stringify(cart));

    // Redirect to cart page
    // window.location.href = "cart.html";
  // }


  // function renderCart() {
  //   const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  //   let cartContainer = document.getElementById("cart-items");
  //   const cartTotal = document.getElementById("cart-total");

  //   if (cartItems.length === 0) {
  //     cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  //     cartTotal.textContent = "Total: £0.00";
  //     return;
  //   }

  //   let total = 0;
  //   cartContainer.innerHTML = "";

  //   cartItems.forEach(item => {
  //     const itemDiv = document.createElement("div");
  //     itemDiv.classList.add("cart-item");

  //     itemDiv.innerHTML = `
  //       <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;" />
  //       <div>
  //         <h3>${item.name}</h3>
  //         <p>Price: £${item.price.toFixed(2)}</p>
  //       </div>
  //     `;

  //     cartContainer.appendChild(itemDiv);
  //     total += item.price;
  //   });

  //   cartTotal.textContent = "Total: £" + total.toFixed(2);
  // }

  // Render cart on load
  // document.addEventListener("DOMContentLoaded", renderCart);

  function toggleMenu() {
    const nav = document.getElementById("main-nav");
    nav.classList.toggle("show");
  }


  let products = document.querySelectorAll('.details');
  let cart = [];


  products.forEach((product)=>{
    // console.log('hfisk', product.children[6].children[0].textContent)
    // console.log('hfisk', product.children[0].innerHTML)
    let btn = product.children[6].children[0]
    btn.addEventListener('click', ()=>{
      // console.log(product.children)
      cart.push(
        {
          heading: product.children[0].textContent,
          Artist: product.children[1].textContent,
          Description: product.children[2].textContent,
          Price: product.children[3].textContent,
          'Copies Available' :product.children[4].textContent,
          Original: product.children[5].textContent,
        }
      )
        
      let db = localStorage.getItem('cart');

      if (db !== null) {
        console.log('Data exists in localStorage.');
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        let old = localStorage.getItem("cart");
        console.log(old)
      }

      // db.localStorage.setItem(cart)    
    })
  })

  // console.log(localStorage.getItem('cart'))



    
