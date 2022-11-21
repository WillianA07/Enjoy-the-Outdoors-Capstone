
"use strict"

window.onload = init;

function init() {
    document.getElementById("searchTypeDropdown").style.display= "none";
    document.getElementById("filterBtn").style.display = "none";
    document.getElementById("locationRadio").onclick = addLocationOpts;
    document.getElementById("parkTypeRadio").onclick = addParkTypeOpts;
    document.getElementById("filterBtn").onclick = finalFilterBtnOnClicked;

}

function addLocationOpts() {
    showDropdown();
    showFilterBtn();
    const searchTypeDropdown = document.getElementById("searchTypeDropdown");
    searchTypeDropdown.length = 0;

    let defaultOpt = document.createElement("option");
    defaultOpt.value = "";
    defaultOpt.textContent = "Choose a State";
    searchTypeDropdown.appendChild(defaultOpt);

    for ( let location of locationsArray ) {
        let locationOpts = document.createElement("option");
        locationOpts.value = location;
        locationOpts.textContent = location;
        searchTypeDropdown.appendChild(locationOpts);
    }
}

function addParkTypeOpts() {
    showDropdown();
    showFilterBtn();
    const searchTypeDropdown = document.getElementById("searchTypeDropdown");
    searchTypeDropdown.length = 0;

    let defaultOpt = document.createElement("option");
    defaultOpt.value = "";
    defaultOpt.textContent = "Choose a Park Type";
    searchTypeDropdown.appendChild(defaultOpt);

    for ( let parkType of parkTypesArray ) {
        let parkTypeOpts = document.createElement("option");
        parkTypeOpts.value = parkType;
        parkTypeOpts.textContent = parkType;
        searchTypeDropdown.appendChild(parkTypeOpts);
    }
}

function showDropdown() {
    document.getElementById("searchTypeDropdown").style.display = "block";
}

function showFilterBtn() {
    document.getElementById("filterBtn").style.display = "block";
}

function finalFilterBtnOnClicked() {
    const locationRadioChecked = document.getElementById("locationRadio").checked;
    const parkTypeRadioChecked = document.getElementById("parkTypeRadio").checked;

        if ( locationRadioChecked ) {
            clearingCards();
            filterByLocation();
        }
        else if ( parkTypeRadioChecked ) {
            clearingCards();
            filterByParkType();
        }
    }

function filterByLocation() {
    const searchTypeDropdown = document.getElementById("searchTypeDropdown");
    let dropdownValue = searchTypeDropdown.value;

    let filterByState = nationalParksArray.filter( (s) =>  s.State == dropdownValue);
    filterByState.forEach( (x) => {
        createCard(x)
    });
}

function filterByParkType() {
    const searchTypeDropdown = document.getElementById("searchTypeDropdown");
    let dropdownValue = searchTypeDropdown.value;

    let filterByParkType = nationalParksArray.filter( (t) => t.LocationName.includes(dropdownValue) );
    filterByParkType.forEach( (x) => { createCard(x) });
}

function createCard(park) {
    const divForResults = document.getElementById("divForResults");

    let divWithCardClass = document.createElement("div");
    divWithCardClass.className = "card col-4 setCardMinSize";
    divForResults.appendChild(divWithCardClass);

    // divWithCardClass.style.display = "inline-block";

    let divWithCardBodyClass = document.createElement("div");
    divWithCardBodyClass.id = "toAddVisitBtn";
    divWithCardBodyClass.className = "card-body";
    divWithCardClass.appendChild(divWithCardBodyClass);

    let cardTitle = document.createElement("h4");
    cardTitle.textContent = park.LocationName;
    divWithCardBodyClass.appendChild(cardTitle);

    let cardSubtitle = document.createElement("h5");
    cardSubtitle.className = "card-subtitle mb-2 text-muted";
    cardSubtitle.textContent = "Contact Info";
    divWithCardBodyClass.appendChild(cardSubtitle);

    let address = document.createElement("p");
    address.textContent = "Address: " + park.Address + " " + park.City + ", " + park.State + " " + park.ZipCode;
    divWithCardBodyClass.appendChild(address);

    let phone = document.createElement("p");
    phone.textContent = "Phone: " + park.Phone;
    divWithCardBodyClass.appendChild(phone);

    let fax = document.createElement("p");
    fax.textContent = "Fax: " + park.Fax;
    divWithCardBodyClass.appendChild(fax);

    let latitude = document.createElement("p");
    latitude.textContent = "Latitude: " + park.Latitude;
    divWithCardBodyClass.appendChild(latitude);

    let longitude = document.createElement("p");
    longitude.textContent = "Longitude: " + park.Longitude;
    divWithCardBodyClass.appendChild(longitude);

    if(park.Visit != undefined){
        let a = document.createElement("a");
        a.href = park.Visit;
        divWithCardBodyClass.appendChild(a);

        let visitBtn = document.createElement("button");
        visitBtn.type = "button";
        visitBtn.textContent = "Park Website"
        visitBtn.className = "btn btn-primary showVisitBtn";
        a.appendChild(visitBtn);
    }
}

function clearingCards() {
    const divForResults = document.getElementById("divForResults");
    divForResults.textContent = "";
}