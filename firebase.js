window.onload = function () {
    document.querySelector('#save_search').addEventListener('click', saveSearch);
    setUp();
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
    addPost: (q) => {
        const db = firebase.firestore();
        return db.collection('searches').add({
            q: q,
        })
    },
    getPost: () => {
        const snapshot = db.collection('searches');
        return snapshot.get({
        })
    },
}

let saveSearch = () => {

    event.preventDefault();
    let q = document.getElementById("query");

    Controller.addPost(q.value)
        .then((snapshot) => {
            console.log('Document written with ID: ', snapshot.id);
        })
        .catch(function (error) {
            console.log(error.code);
            console.log(error.message);
        })

}
