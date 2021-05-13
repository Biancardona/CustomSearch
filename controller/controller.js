import Utils from '../utils/utils.js';

let Controller = {
    addPost: (post, postUser, postText, emailUser) => {
        const db = firebase.firestore();
        return db.collection(post).add({
            uid: postUser,
            text: postText,
            email: emailUser,
        })
    },
    getAllPosts: (post) => {
        const db = firebase.firestore();
        return db.collection(post).get();
    },
    getUserPosts: (post, userUid) => {
        const db = firebase.firestore();
        return db.collection(post).where('uid', '==', userUid).get();
    },
    deletePost: (post, docRefId) => {
        const db = firebase.firestore();
        return db.collection(post).doc(docRefId).delete();
    },
    editPost: (post, docRefId, postUser) => {
        const db = firebase.firestore();
        return db.collection(post).doc(docRefId).update({
            text: postUser,
        });
    },
    getPost: (post, docRefId) => {
        const db = firebase.firestore();
        return db.collection(post).doc(docRefId).get();
    },
}
export default Controller;