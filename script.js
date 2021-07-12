
/**Bookmark glow */
let bookmarkBtn = document.querySelector(".section-1__bookmark-btn");
let bookmarkCircle = document.querySelector(".bookmark-circle");
let bookmarkPath = document.querySelector(".bookmark-path");
bookmarkBtn.addEventListener("click", ()=>{
   bookmarkCircle.classList.toggle("circle-bookmarked")
   bookmarkPath.classList.toggle("path-bookmarked");
   bookmarkBtn.classList.toggle("section-1__bookmark-btn--active");
})
 /**Status bar code */
 let backProjectBtn = document.querySelector(".section-1__back-project-btn");
 let statusBar = document.querySelector(".section-2__status-bar-inner");
 let currentStatus = 65;
 statusBar.style.width = currentStatus + "%";

 let totalBackersText = document.querySelector(".section-2_total-backers");
 let numberOfBackers = 5.007;
 let numberOfBackersString = String(numberOfBackers);
 totalBackersText.textContent = `${numberOfBackersString[0]},${numberOfBackersString[2]}${numberOfBackersString[3]}${numberOfBackersString[4]}`;

backProjectBtn.addEventListener("click", ()=> {
    if(currentStatus >= 100){
        return;
    }
    /**Number of backers event */
    numberOfBackers = numberOfBackers + 0.001;
    let numberOfBackersString = String(numberOfBackers);
    totalBackersText.textContent = `${numberOfBackersString[0]},${numberOfBackersString[2]}${numberOfBackersString[3]}${numberOfBackersString[4]}`;
    /**Statusbar event */
    currentStatus = currentStatus + .5;
    statusBar.style.width = `${currentStatus}%`;
})





