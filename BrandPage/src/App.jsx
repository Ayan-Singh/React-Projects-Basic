import './App.css'
function App(){
  
return (

<>
 <nav>
  <div className="logo">
    <img src="src/assets/brand_logo.png" alt="logo" />

</div>
<ul>
  <li href="#">Menu</li>
  <li href="#">Location</li>
  <li href="#">About</li>
  <li href="#">Contact</li>
</ul>
  <button>login</button>
  </nav> 
<main className='hero'>
  <div className='hero-content'>
    <h1>YOUR FEET DESERVE THE BEST</h1>
    <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WIH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WIH OUR SHOES.</p>
    <div className="hero-btn">
      <button>Shop Now</button>
      <button className='secondary-btn'>Category</button>
    </div>
    <div className="shopping">
      <p>Also Available On</p>
      <div className='brand-icons'>
        <img src="/src/assets/shops.png" alt="shop" />
      </div>
    </div>
  </div>
  <div className='hero-image'>
    <img src="/src/assets/shoe_image.png" alt="" />
  </div>

</main>

</>
);
}


export default App