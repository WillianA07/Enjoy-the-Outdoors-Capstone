
"use strict"

window.onload = init;

function init(){
    addOptionsToDropdown();
    const mountainDropdown = document.getElementById("mountainDropDown");
    mountainDropdown.onchange = displayCardWithMountain;
    
}

function addOptionsToDropdown () {
    const mountainDropdown = document.getElementById("mountainDropDown");
    mountainDropdown.length = 0;

    let defaultOpt = document.createElement("option");
    defaultOpt.value = "";
    defaultOpt.text = "Choose one";
    mountainDropdown.appendChild(defaultOpt);

    for ( let mountain of mountainsArray ) {
        let mountOpt = document.createElement("option");
        mountOpt.value = mountain.name;
        mountOpt.text = mountain.name;
        mountainDropdown.appendChild(mountOpt);
    }
}

function displayCardWithMountain() {
    const divToPutResults = document.getElementById("divToPutResults");
    const mountainDropdown = document.getElementById("mountainDropDown");
    let dropdownValue = mountainDropdown.value;
    divToPutResults.textContent = "";

    if ( dropdownValue == "" ) {
        divToPutResults.textContent = "";
        return;
    }

    let divWithCardClass = document.createElement("div");
    divWithCardClass.className = "card text-bg-dark";
    divToPutResults.appendChild(divWithCardClass);

    let cardBgImg = document.createElement("img");
    cardBgImg.src = getMountainImg();
    cardBgImg.className = "card-img";
    divWithCardClass.appendChild(cardBgImg);


    let divWithCardText = document.createElement("div");
    divWithCardText.className = "card-img-overlay";
    divWithCardClass.appendChild(divWithCardText);

    let cardTitle = document.createElement("h1");
    cardTitle.className = "card-title text-dark";
    cardTitle.textContent = getMountainName(); 
    divWithCardText.appendChild(cardTitle);

    let cardDescriptionText = document.createElement("p")
    cardDescriptionText.className = "card-text text-dark";
    cardDescriptionText.textContent = getMountainDescription();
    divWithCardText.appendChild(cardDescriptionText);

    let cardElevationText = document.createElement("p");
    cardElevationText.className = "card-text text-dark";
    cardElevationText.textContent = "Elevation: " + getMountainElevation();
    divWithCardText.appendChild(cardElevationText);

    // let showImgOnlyBtn = document.createElement("button");
    // showImgOnlyBtn.className = "btn btn-primary";
    // showImgOnlyBtn.id = "";
    // showImgOnlyBtn.type = "button";
    // divWithCardClass.appendChild(showImgOnlyBtn);

    // showImgOnlyBtn.onclick = imgOnlyBtnOnClicked;
}

// function imgOnlyBtnOnClicked() {

// }

function getMountainImg() {
    const mountainDropdown = document.getElementById("mountainDropDown");
    let dropdownValue = mountainDropdown.value;

    for ( let mountain of mountainsArray ) {
        if ( dropdownValue == mountain.name ) {
            return mountain.img;
        }
    }
}

function getMountainName() {
    const mountainDropdown = document.getElementById("mountainDropDown");
    let dropdownValue = mountainDropdown.value;

    for ( let mountain of mountainsArray ) {
        if ( dropdownValue == mountain.name ) {
            return mountain.name;
        }
    }
}

function getMountainDescription() {
    const mountainDropdown = document.getElementById("mountainDropDown");
    let dropdownValue = mountainDropdown.value;

    for ( let mountain of mountainsArray ) {
        if ( dropdownValue == mountain.name ) {
            return mountain.desc;
        }
    }
}

function getMountainElevation() {
    const mountainDropdown = document.getElementById("mountainDropDown");
    let dropdownValue = mountainDropdown.value;

    for ( let mountain of mountainsArray ) {
        if ( dropdownValue == mountain.name ) {
            return mountain.elevation;
        }
    }
}
