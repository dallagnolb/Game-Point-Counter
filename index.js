let scoreHome = document.getElementById("pointHome")
let scoreGuest = document.getElementById("pointGuest")
  
console.log()
  
let resultHome = 0
let resultGuest = 0
  
function addHome1 () {
      resultHome += 1
      scoreHome.textContent = resultHome   
  }
  
function addHome2 () {
      resultHome += 2
      scoreHome.textContent = resultHome 
  }
  
function addHome3 () {
      resultHome += 3
      scoreHome.textContent = resultHome   
  }

function addGuest1 () {
      resultGuest += 1
      scoreGuest.textContent = resultGuest   
  }
  
function addGuest2 () {
      resultGuest += 2
      scoreGuest.textContent = resultGuest  
  }
  
function addGuest3 () {
      resultGuest += 3
      scoreGuest.textContent = resultGuest  
  }