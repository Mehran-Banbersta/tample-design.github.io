let searchInput = document.getElementById("input-search")
let learnMore = document.getElementById("learn-more")


document.getElementById('search-btn').addEventListener("click", function(){
console.log("click")

searchInput.innerHTML = `<div id="overlay-input">
<input type="text" placeholder="Search">
<button id="close-input">x</button>
</div>
`
document.getElementById("close-input").addEventListener("click", function(){
 document.getElementById("overlay-input").style.display = "none"
})
})



document.getElementById("learn-btn").addEventListener("click", function(){
 //document.getElementById("overlay").style.display = "none"
 console.log("click")

 learnMore.innerHTML =  `<div id="overlay-learn">
 <button id="close-modal-learn">x</button>
 </div>
 `
 document.getElementById("close-modal-learn").addEventListener("click", function(){


  
  learnMore.innerHTML =  `<section id="main-background">
 
  <div class="main-content">
   <h1>GOOD DESIGN IS GOOD BUSINESS</h1>
   <p>Discover everything you need to know about business design. We explain what it is and  
    <br> how it can help you build profitable businesses through customer centricity,  business 
    <br> model innovation, and evidence-based learning.</p>
   <button id="learn-btn">LEARN MORE</button>
  </div>

 </section>
 `
 document.getElementById("overlay-learn").style.display = "none"
  //if(mainBackground === true ) {
  // document.getElementById("learnMore").style.display = "block"
  //}else {
//
 // }

 })
})


//////////////////////////
let showMenu = document.getElementById("Show-menu")
console.log(showMenu)
document.getElementById("menu").addEventListener("click", function(){
  console.log("click")
  
  showMenu.innerHTML = `
   <div id="overlay-menu">
   <button id="close-menu">CLOSE</button>
  <nav class="mobile-menu">

  <ul>
   <li>
     <a href="#" class="active">Home</a>
   </li>
   <li>
     <a href="#">Contact</a>
   </li>
   <li>
     <a href="#">About Us</a>
   </li>
   <li>
     <a href="#">Products</a>
   </li>
   <li>
     <a href="#" class="last-child">Gallery</a>
   </li>
  </ul>
 </nav>
 </div>
`
 document.getElementById("close-menu").addEventListener("click", function(){
 console.log("close")
 document.getElementById("overlay-menu").style.display = "none"
 })

})

