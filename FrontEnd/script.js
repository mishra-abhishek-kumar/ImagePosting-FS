//accessing form elements 
let form = document.getElementById('form');
let formUrl = document.getElementById('form-url');
let formDescription = document.getElementById('form-description');

//EventListeners
form.addEventListener('submit', createPost);

//window reload
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const posts = await axios.get('http://localhost:4000/post/get-post');
        for (let i = 0; i < posts.data.length; i++) {
            const comments = await axios.get(`http://localhost:4000/comment/get-comment/${posts.data[i].id}`);
            console.log(comments.data);
            displayPost(posts.data[i], comments.data);
        }
    } catch (error) {
        console.log(error);
    }
})

function displayPost(postData, commentsArr) {
    //creating post div and assigning class
    let post = document.createElement('div');
    post.className = 'post';

    //creating postImage div and assigning class
    let postImage = document.createElement('div');
    postImage.className = 'postImage';

    //creating img tag and assigning src
    let img = document.createElement('img');
    img.src = postData.postUrl;

    //creating postDescription div and assigning class
    let postDescription = document.createElement('div');
    postDescription.className = 'postDescription';

    //creating paragraph and assigning text
    let paragraph = document.createElement('p');
    paragraph.innerText = postData.postDescription;

    //creating div to enter ul and setting attributes
    let allComments = document.createElement('div');
    allComments.className = 'allComments';
    allComments.setAttribute('id', 'all-comments');

    //creatinf ul to enter all the comments in it
    let commentList = document.createElement('ul');
    commentList.setAttribute('id', 'comment-list');

    //creating post div and assigning class
    let addCommentBtn = document.createElement('div');

    //creating post div and assigning class and setting attributes
    let addNewCommentBtn = document.createElement('input');
    addNewCommentBtn.className = 'addNewCommentBtn';
    addNewCommentBtn.setAttribute('type', 'button');
    addNewCommentBtn.setAttribute('name', 'addComment');
    addNewCommentBtn.setAttribute('value', 'Add Comment');

    //appending childs to parent
    postImage.appendChild(img);
    postDescription.appendChild(paragraph);
    allComments.appendChild(commentList);
    addCommentBtn.appendChild(addNewCommentBtn);
    post.appendChild(postImage);
    post.appendChild(postDescription);
    post.appendChild(allComments);
    post.appendChild(addCommentBtn);

    //accessing postContainer
    let postContainer = document.getElementById('post-container');
    postContainer.appendChild(post);

    post.setAttribute('id', postData.id);
    addNewCommentBtn.setAttribute('id', postData.id);
    var postId = postData.id;

    for (let j = 0; j < commentsArr.length; j++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(commentsArr[j].comment));
        commentList.appendChild(li);
    }

    //accessing add-comment button to listen on it
    let commentBtn = document.getElementById(postId);
    commentBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('addNewCommentBtn')) {
            //creating div to add form inside 
            let addCommentForm = document.createElement('div');

            //creating input to type comment and assigning class and setting attributes
            let newComment = document.createElement('input');
            newComment.className = 'newComment';
            newComment.setAttribute('type', 'text');
            newComment.setAttribute('id', 'new-comment');
            newComment.setAttribute('name', 'typedComment');
            newComment.setAttribute('placeholder', 'type...');

            //creating input to send comment and assigning class and setting attributes
            let sendComment = document.createElement('input');
            sendComment.className = 'sendComment';
            sendComment.setAttribute('type', 'button');
            sendComment.setAttribute('id', 'send-comment');
            sendComment.setAttribute('name', 'sentComment');
            sendComment.setAttribute('value', 'send');

            //removing and appending elements to parent elements
            addCommentBtn.removeChild(addNewCommentBtn);
            addCommentForm.appendChild(newComment);
            addCommentForm.appendChild(sendComment);
            post.appendChild(addCommentForm);

            console.log("display form working");

            //accessing typed-comment send-comment button to add comments
            let typed_comment = document.getElementById('new-comment');
            let sendBtn = document.getElementById('send-comment');
            sendBtn.addEventListener('click', async (e) => {
                e.preventDefault();

                if (e.target.classList.contains('sendComment')) {

                    const postId = e.target.parentElement.parentElement.id;

                    //creating li's 
                    let li = document.createElement('li');

                    //appending/removing elements to/from parent
                    post.removeChild(addCommentForm);
                    li.appendChild(document.createTextNode(typed_comment.value));
                    commentList.appendChild(li);
                    addCommentBtn.appendChild(addNewCommentBtn);

                    try {
                        const response = await axios.post(`http://localhost:4000/comment/create-comment/${postId}`, {
                            comment: `${typed_comment.value}`
                        });
                        console.log(response.data);
                    } catch (error) {
                        console.log(error);
                    }

                    console.log("adding comments working");
                }
            })
        }
    });
}

async function createPost(e) {
    e.preventDefault();

    //creating post div and assigning class
    let post = document.createElement('div');
    post.className = 'post';

    //creating postImage div and assigning class
    let postImage = document.createElement('div');
    postImage.className = 'postImage';

    //creating img tag and assigning src
    let img = document.createElement('img');
    img.src = formUrl.value;

    //creating postDescription div and assigning class
    let postDescription = document.createElement('div');
    postDescription.className = 'postDescription';

    //creating paragraph and assigning text
    let paragraph = document.createElement('p');
    paragraph.innerText = formDescription.value;


    //creating div to enter ul and setting attributes
    let allComments = document.createElement('div');
    allComments.className = 'allComments';
    allComments.setAttribute('id', 'all-comments');

    //creatinf ul to enter all the comments in it
    let commentList = document.createElement('ul');
    commentList.setAttribute('id', 'comment-list');

    //creating post div and assigning class
    let addCommentBtn = document.createElement('div');

    //creating post div and assigning class and setting attributes
    let addNewCommentBtn = document.createElement('input');
    addNewCommentBtn.className = 'addNewCommentBtn';
    addNewCommentBtn.setAttribute('type', 'button');
    addNewCommentBtn.setAttribute('name', 'addComment');
    addNewCommentBtn.setAttribute('value', 'Add Comment');

    //appending childs to parent
    postImage.appendChild(img);
    postDescription.appendChild(paragraph);
    allComments.appendChild(commentList);
    addCommentBtn.appendChild(addNewCommentBtn);
    post.appendChild(postImage);
    post.appendChild(postDescription);
    post.appendChild(allComments);
    post.appendChild(addCommentBtn);

    //accessing postContainer
    let postContainer = document.getElementById('post-container');
    postContainer.appendChild(post);

    try {
        const response = await axios.post('http://localhost:4000/post/create-post', {
            postUrl: `${formUrl.value}`,
            postDescription: `${formDescription.value}`
        });
        post.setAttribute('id', response.data.id);
        addNewCommentBtn.setAttribute('id', response.data.id);
        var postId = response.data.id;
    } catch (error) {
        console.log(error);
    }


    console.log("Create post working");

    //accessing add-comment button to listen on it
    let commentBtn = document.getElementById(postId);
    commentBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('addNewCommentBtn')) {
            //creating div to add form inside 
            let addCommentForm = document.createElement('div');

            //creating input to type comment and assigning class and setting attributes
            let newComment = document.createElement('input');
            newComment.className = 'newComment';
            newComment.setAttribute('type', 'text');
            newComment.setAttribute('id', 'new-comment');
            newComment.setAttribute('name', 'typedComment');
            newComment.setAttribute('placeholder', 'type...');

            //creating input to send comment and assigning class and setting attributes
            let sendComment = document.createElement('input');
            sendComment.className = 'sendComment';
            sendComment.setAttribute('type', 'button');
            sendComment.setAttribute('id', 'send-comment');
            sendComment.setAttribute('name', 'sentComment');
            sendComment.setAttribute('value', 'send');;

            //removing and appending elements to parent elements
            addCommentBtn.removeChild(addNewCommentBtn);
            addCommentForm.appendChild(newComment);
            addCommentForm.appendChild(sendComment);
            post.appendChild(addCommentForm);

            console.log("display form working");

            //accessing typed-comment send-comment button to add comments
            let typed_comment = document.getElementById('new-comment');
            let sendBtn = document.getElementById('send-comment');
            sendBtn.addEventListener('click', async (e) => {
                e.preventDefault();

                if (e.target.classList.contains('sendComment')) {

                    const postId = e.target.parentElement.parentElement.id;

                    //creating li's 
                    let li = document.createElement('li');
                    li.appendChild(document.createTextNode(typed_comment.value));
                    commentList.appendChild(li);

                    //appending/removing elements to/from parent
                    post.removeChild(addCommentForm);
                    addCommentBtn.appendChild(addNewCommentBtn);


                    try {
                        const response = await axios.post(`http://localhost:4000/comment/create-comment/${postId}`, {
                            comment: `${typed_comment.value}`
                        });
                        console.log(response.data);
                    } catch (error) {
                        console.log(error);
                    }

                    console.log("adding comments working");
                }
            })
        }
    });
}