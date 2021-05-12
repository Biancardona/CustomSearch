let key = "AIzaSyA5gbq4gQ83AEP633ET52IbloKJiKlOAks";       // API KEY
let id = "9a352a89890a7adf4";                             // CSE ID

let allStatesMap = new Map();

allStatesMap["California"] = "site:https://www.pharmacy.ca.gov";
allStatesMap["Florida"] = "site:https://floridaspharmacy.gov";


window.onload = function () {
    document.querySelector('#search').addEventListener('click', triggerSearch)
}
function hndlr(response) {
    console.log(response)               // a way to see your results
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];

        document.getElementById("content").innerHTML += "<br>" + item.htmlTitle + "<br>" + "<a href =URL> " + item.link + "</a>";
    }
}

const idContainer = document.querySelector('#container');
const inputSearch = document.querySelector("#query")
const results = document.querySelector("#content")
const searchButton = document.querySelector("#start")


function triggerSearch() {
    event.preventDefault();
    const input = inputSearch.value;
    let selectedStates = document.getElementsByClassName("dropdown-item selected")
    console.log(selectedStates);
    let statesSearchString = "\"";
    for (let i = 0; i < selectedStates.length; i++) {
        statesSearchString += allStatesMap[selectedStates[i].text];
        statesSearchString += " OR "
        console.log(statesSearchString);
    }
    statesSearchString += "\""
    console.log(statesSearchString);
    results.innerHTML = '';
    let JSElement = document.createElement('script');
    JSElement.src = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${id}q=${input}&orTerms=${statesSearchString}` + '&callback=hndlr';
    document.getElementsByTagName('head')[0].appendChild(JSElement);

}


