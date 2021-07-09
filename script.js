
/**Bookmark glow */
let bookmarkBtn = document.querySelector(".section-1__bookmark-btn");
let bookmarkCircle = document.querySelector(".bookmark-circle");
bookmarkBtn.addEventListener("mouseover", ()=>{
    if(bookmarkCircle.classList.contains("circle-light")){
        return;
    }
   bookmarkCircle.classList.add("circle-light")
      
    bookmarkBtn.addEventListener("mouseout", ()=>{
        bookmarkCircle.classList.remove("circle-light")
    })
})
bookmarkCircle.addEventListener("mouseover", ()=>{
    if(bookmarkCircle.classList.contains("circle-light")){
        return;
    }
    bookmarkCircle.classList.add("circle-light")
       
     bookmarkCircle.addEventListener("mouseout", ()=>{
         bookmarkCircle.classList.remove("circle-light")
     })
 })

 /**Status bar code */
 let backProjectBtn = document.querySelector(".section-1__back-project-btn");
 let statusBar = document.querySelector(".section-2__status-bar-inner");
 let currentStatus = statusBar.style.maxWidth;
 let totalBackers = document.querySelector(".section-2_total-backers");

 backProjectBtn.addEventListener("click", ()=> {
    statusBar.style.maxWidth = `calc("${currentStatus + 1}px")`;
    totalBackers.textContent = Number(totalBackers.textContent);
 })


