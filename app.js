

const init = () => {
    //initFirebase();
    setUp();
    // Listen on hash change:
    window.addEventListener('hashchange', createPost);
}

createPost: (userPost, userUid, userEmail) => {
    event.preventDefault();
    const posts = document.getElementById("add_post");

    if (posts.value == '') {
        alert(`The field cannot be empty`)
    } else {
        Controller.addPost(userPost, userUid, posts.value, userEmail)
            .then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
                Profile.showPosts('post', user.uid);
            })
            .catch(function (error) {
                console.log(error.code);
                console.log(error.message);
                Profile.showPosts('post', user.uid);
            })
    }
},