
/**Bookmark glow */
let bookmarkBtn = document.querySelector(".section-1__bookmark-btn");
let bookmarkCircle = document.querySelector(".bookmark-circle");
let bookmarkPath = document.querySelector(".bookmark-path");
let bookmarkIcon = document.querySelector(".section-1__bookmark-img");
bookmarkBtn.addEventListener("click", ()=>{
   bookmarkCircle.classList.toggle("circle-bookmarked")
   bookmarkPath.classList.toggle("path-bookmarked");
   bookmarkBtn.classList.toggle("section-1__bookmark-btn--active");
})
bookmarkIcon.addEventListener("click", ()=>{
    bookmarkCircle.classList.toggle("circle-bookmarked")
    bookmarkPath.classList.toggle("path-bookmarked");
    bookmarkBtn.classList.toggle("section-1__bookmark-btn--active");
})


/**Close menu and close */
let openMenuMobile = document.querySelector(".header__hamburger--open");
let closeMenuMobile = document.querySelector(".header__hamburger--close");
let menuItems = document.querySelector(".header__drop-down");

openMenuMobile.addEventListener("click", ()=>{
    openMenuMobile.style.display = "none";
    closeMenuMobile.style.display = "block";
    menuItems.classList.add("make-visible");
})
closeMenuMobile.addEventListener("click", ()=>{
    closeMenuMobile.style.display = "none";
    openMenuMobile.style.display = "block";
    menuItems.classList.remove("make-visible");
})

/**rewardselection modal and complete-modal */

let modalSelectionContainer = document.querySelector(".content-container-2");
let closeModalSelectionContainer = document.querySelector(".selection-modal__close")

let modalCompletedContainer = document.querySelector(".content-container-3");
let closeModalCompletedContainer = document.querySelector(".completed-modal__button");

closeModalSelectionContainer.addEventListener("click", ()=>{ 
    modalSelectionContainer.classList.add("hide-container");
})

closeModalCompletedContainer.addEventListener("click", ()=>{
     modalCompletedContainer.classList.add("hide-container");
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

 let totalBackedAmount = document.querySelector(".section-2__stats-backed");
 let totalBackedAmountNumber = 89914;
 let totalBackedAmountText = String(totalBackedAmountNumber);
 totalBackedAmount.textContent = `$${totalBackedAmountText[0]}${totalBackedAmountText[1]},${totalBackedAmountText[2]}${totalBackedAmountText[3]}${totalBackedAmountText[4]}`

//pledge-amount


//bambo stand
 let bamboStandAmount = document.querySelector(".bambo-stand-left");
 let bamboStandLeft = 101;
     bamboStandAmount.textContent = String(bamboStandLeft);

//black edition stand
let blackEditionStandAmount = document.querySelector(".black-edition-left");
let blackEditionStandLeft = 64;
    blackEditionStandAmount.textContent = String(blackEditionStandLeft);
//Select reward Buttons
let bamboSelectRewardBtn = document.querySelector(".section-3__reward-button-bambo-stand");
let blackEditionSelectRewardBtn = document.querySelector(".section-3__reward-button-black-edition");

//pledge checked and input
let noRewardPledge = document.querySelector(".selection-modal__radio--no-pledge");
let noRewardPledgeModal = document.querySelector(".modal-no-reward")
let bamboPledge = document.querySelector(".selection-modal__radio--bambo");
let bamboPledgeModal = document.querySelector(".modal-bambo-stand");
let blackEditionPledge = document.querySelector(".selection-modal__radio--black-edition");
let blackEditionPledgeModal = document.querySelector(".modal-black-edition");
let inputPledge = document.querySelector(".selection-modal__input-box-dispatch-input");

let noRewardVal = document.querySelector(".no-reward-input");
let noRewardValSubmit = document.querySelector(".no-reward-input-btn");

let bamboPledgeVal = document.querySelector(".bambo-pledge-input");
let bamboPledgeValSubmit = document.querySelector(".bambo-pledge-input-btn");

let blackEditionPledgeVal = document.querySelector(".black-edition-input");
let blackEditionPledgeValSubmit = document.querySelector(".black-edition-input-btn");

blackEditionPledgeValSubmit.addEventListener("click", ()=>{
    if(currentStatus >= 100){
        return;
    }
    numberOfBackers = numberOfBackers + 0.001;
    let numberOfBackersString = String(numberOfBackers);
    totalBackersText.textContent = `${numberOfBackersString[0]},${numberOfBackersString[2]}${numberOfBackersString[3]}${numberOfBackersString[4]}`;
    
    currentStatus = currentStatus + .5;
    statusBar.style.width = `${currentStatus}%`;
    let newVal = totalBackedAmountNumber + Number(blackEditionPledgeVal.value);
    totalBackedAmountNumber = newVal;
    let totalBackedAmountText = String(totalBackedAmountNumber);
    totalBackedAmount.textContent = `$${totalBackedAmountText[0]}${totalBackedAmountText[1]},${totalBackedAmountText[2]}${totalBackedAmountText[3]}${totalBackedAmountText[4]}`

    modalSelectionContainer.classList.add("hide-container");
    modalCompletedContainer.classList.remove("hide-container");
    blackEditionPledgeVal.value = "";
})

noRewardValSubmit.addEventListener("click", ()=>{
    if(currentStatus >= 100){
        return;
    }
    numberOfBackers = numberOfBackers + 0.001;
    let numberOfBackersString = String(numberOfBackers);
    totalBackersText.textContent = `${numberOfBackersString[0]},${numberOfBackersString[2]}${numberOfBackersString[3]}${numberOfBackersString[4]}`;
    
    currentStatus = currentStatus + .5;
    statusBar.style.width = `${currentStatus}%`;
    let newVal = totalBackedAmountNumber + Number(noRewardVal.value);
    totalBackedAmountNumber = newVal;
    let totalBackedAmountText = String(totalBackedAmountNumber);
    totalBackedAmount.textContent = `$${totalBackedAmountText[0]}${totalBackedAmountText[1]},${totalBackedAmountText[2]}${totalBackedAmountText[3]}${totalBackedAmountText[4]}`

    modalSelectionContainer.classList.add("hide-container");
    modalCompletedContainer.classList.remove("hide-container");
    noRewardVal.value = "";
})
bamboPledgeValSubmit.addEventListener("click", ()=>{
    if(currentStatus >= 100){
        return;
    }
    numberOfBackers = numberOfBackers + 0.001;
    let numberOfBackersString = String(numberOfBackers);
    totalBackersText.textContent = `${numberOfBackersString[0]},${numberOfBackersString[2]}${numberOfBackersString[3]}${numberOfBackersString[4]}`;
    
    currentStatus = currentStatus + .5;
    statusBar.style.width = `${currentStatus}%`;
    let newVal = totalBackedAmountNumber + Number(bamboPledgeVal.value);
    totalBackedAmountNumber = newVal;
    let totalBackedAmountText = String(totalBackedAmountNumber);
    totalBackedAmount.textContent = `$${totalBackedAmountText[0]}${totalBackedAmountText[1]},${totalBackedAmountText[2]}${totalBackedAmountText[3]}${totalBackedAmountText[4]}`

    modalSelectionContainer.classList.add("hide-container");
    modalCompletedContainer.classList.remove("hide-container");
    bamboPledgeVal.value = "";
})

bamboSelectRewardBtn.addEventListener("click", ()=>{
    modalSelectionContainer.classList.remove("hide-container");
    bamboPledgeModal.scrollIntoView(alignToTop = true);
    let ourRadio = bamboPledgeModal.getElementsByTagName("input");
    ourRadio[0].checked = true;
    bamboPledgeModal.classList.remove("selection-modal__pledge--not-selected")
    bamboPledgeModal.classList.add("selection-modal__pledge--selected")
    if(blackEditionPledgeModal.classList.contains("selection-modal__pledge--selected")){
        blackEditionPledgeModal.classList.add("selection-modal__pledge--not-selected")
        blackEditionPledgeModal.classList.remove("selection-modal__pledge--selected")
    }
    if(noRewardPledgeModal.classList.contains("selection-modal__pledge--selected")){
    noRewardPledgeModal.classList.add("selection-modal__pledge--not-selected")
    noRewardPledgeModal.classList.remove("selection-modal__pledge--selected")        
    }

})
blackEditionSelectRewardBtn.addEventListener("click", ()=>{
    modalSelectionContainer.classList.remove("hide-container");
    blackEditionPledgeModal.scrollIntoView(alignToTop = true);
    let ourRadio = blackEditionPledgeModal.getElementsByTagName("input");
    ourRadio[0].checked = true;
    blackEditionPledgeModal.classList.remove("selection-modal__pledge--not-selected")
    blackEditionPledgeModal.classList.add("selection-modal__pledge--selected")
    if(bamboPledgeModal.classList.contains("selection-modal__pledge--selected")){
        bamboPledgeModal.classList.add("selection-modal__pledge--not-selected")
        bamboPledgeModal.classList.remove("selection-modal__pledge--selected")
    }
    if(noRewardPledgeModal.classList.contains("selection-modal__pledge--selected")){
    noRewardPledgeModal.classList.add("selection-modal__pledge--not-selected")
    noRewardPledgeModal.classList.remove("selection-modal__pledge--selected")        
    }
})
backProjectBtn.addEventListener("click", ()=>{
    modalSelectionContainer.classList.remove("hide-container");
    noRewardPledgeModal.scrollIntoView(alignToTop = true);
    let ourRadio = noRewardPledgeModal.getElementsByTagName("input");
    ourRadio[0].checked = true;
    noRewardPledgeModal.classList.remove("selection-modal__pledge--not-selected")
    noRewardPledgeModal.classList.add("selection-modal__pledge--selected")
    if(bamboPledgeModal.classList.contains("selection-modal__pledge--selected")){
        bamboPledgeModal.classList.add("selection-modal__pledge--not-selected")
        bamboPledgeModal.classList.remove("selection-modal__pledge--selected")
    }
    if(blackEditionPledgeModal.classList.contains("selection-modal__pledge--selected")){
    blackEditionPledgeModal.classList.add("selection-modal__pledge--not-selected")
    blackEditionPledgeModal.classList.remove("selection-modal__pledge--selected")        
    }
})


//
//
//




