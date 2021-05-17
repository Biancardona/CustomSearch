let key = "AIzaSyA5gbq4gQ83AEP633ET52IbloKJiKlOAks"; // API KEY
let id = "9a352a89890a7adf4"; // CSE ID

let allStatesMap = new Map();

allStatesMap["California"] = "site%3Awww.pharmacy.ca.gov";
allStatesMap["Florida"] = "site%3Afloridaspharmacy.gov";
allStatesMap["Kentucky"] = "site%3Apharmacy.ky.gov";
allStatesMap["Pennsylvania"] = "site%3Awww.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/Pharmacy";
allStatesMap["SD"] = "site%3Adoh.sd.gov/boards/pharmacy";
allStatesMap["Texas"] = "site%3Awww.pharmacy.texas.gov";



window.onload = function () {
    document.querySelector('#search').addEventListener('click', triggerSearch);
    document.querySelector('#save_search').addEventListener('click', saveSearch);
    setUp();
}

function hndlr(response) {
    console.log(response) // a way to see your results
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];

        document.getElementById("content").innerHTML += "<br>" + item.htmlTitle + "<br>" + "<a href =URL> " + item.link + "</a>";
    }
}

const idContainer = document.querySelector('#container');
const inputSearch = document.querySelector("#query");
const results = document.querySelector("#content");
const searchButton = document.querySelector("#start");
const excludeWordParameter = document.querySelector("#textAreaExample4");
const inlcudeWordParameter = document.querySelector("#textAreaExample3");


function triggerSearch() {
    event.preventDefault();
    const input = inputSearch.value;
    const excludeWords = excludeWordParameter.value;
    const includeWords = inlcudeWordParameter.value;
    if (inputSearch.value.length === 0) {
        window.alert("Enter a search term")
    } else {
        let selectedStates = document.getElementsByClassName("dropdown-item selected")
        console.log(selectedStates);
        let statesSearchString = "";
        for (let i = 0; i < selectedStates.length; i++) {
            statesSearchString += allStatesMap[selectedStates[i].text];
            statesSearchString += " OR "
            console.log(statesSearchString);
        }
        results.innerHTML = '';
        let JSElement = document.createElement('script');
        JSElement.src = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${id}&q=${input}&orTerms="${statesSearchString}"&excludeTerms="${excludeWords}"&exactTerms="${includeWords}"` + '&callback=hndlr';
        document.getElementsByTagName('head')[0].appendChild(JSElement);

    };
}

const initFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBjE_o5Yn2kFS1pznRhMTsiKgJ8dSkG5Qg",
        authDomain: "customsearch-8c1e9.firebaseapp.com",
        projectId: "customsearch-8c1e9",
        storageBucket: "customsearch-8c1e9.appspot.com",
        messagingSenderId: "928794993271",
        appId: "1:928794993271:web:4ffafbfb933e3add84dc72",
        measurementId: "G-SC4PNYP74M"
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

function setUp() {

    initFirebase();
    firebase.firestore();
}


let Controller = {
    addPost: (q, includeWord, excludeWord, statesSearchArray, searchName) => {
        const db = firebase.firestore();
        return db.collection('searches').doc(searchName).set({
            q: q,
            includeWord: includeWord,
            excludeWord: excludeWord,
            statesSearchArray: statesSearchArray,

        })
    },
    getPost: () => {
        const snapshot = db.collection('searches');
        return snapshot.get({})
    },
}



let saveSearch = () => {

    event.preventDefault();
    let q = document.getElementById("query");
    let includeWord = document.getElementById("textAreaExample3");
    let excludeWord = document.getElementById("textAreaExample4");
    let searchName = prompt("Please enter a name for your search");


    let cities = document.getElementsByClassName("dropdown-item selected")
    let statesSearchArray = [];
    for (let i = 0; i < cities.length; i++) {
        statesSearchArray += allStatesMap[cities[i].text];
        statesSearchArray += " OR "
        console.log(statesSearchArray);
    }


    Controller.addPost(q.value, includeWord.value, excludeWord.value, statesSearchArray, searchName)
        .then(() => {
            console.log('New search successfully saved!');
        })
        .catch(function (error) {
            console.log(error.code);
            console.log(error.message);
        })

}