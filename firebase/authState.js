import initFirebase from './initFirebase.js';

function setUp() {

    initFirebase();
    firebase.firestore();

}
export default setUp;