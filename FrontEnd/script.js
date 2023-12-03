//accessing form elements 
let form = document.getElementById('form');
let formUrl = document.getElementById('form-url');
let formDescription = document.getElementById('form-description');

//accessing post elements
let postContainer = document.getElementById('post-container');
let addComment = document.getElementById('add-new-comment-btn');
let typedComment = document.getElementById('new-comment');
let sentComment = document.getElementById('send-comment');

//creating elements required
let post = document.createElement('div');
let postImage = document.createElement('div');
let img = document.createElement('img');
let postDescription = document.createElement('div');
let paragraph = document.createElement('p');
let addComentBtn = document.createElement('div');
let addNewCommentBtn = document.createElement('input');
let addCommentForm = document.createElement('div');
let newComment = document.createElement('input');
let sendComment = document.createElement('input');
let allComments = document.createElement('div');
let commentList = document.createElement('ul');

//adding classes for the elements
post.className = 'post';
postImage.className = 'postImage';
postDescription.className = 'postDescription';
addNewCommentBtn.className = 'addNewCommentBtn';
newComment.className = 'newComment';
sendComment.className = 'sendComment';
allComments.className = 'allComments';
commentList.className = 'commentList';

//setting attributes for the elements
addNewCommentBtn.setAttribute('type', 'button');
addNewCommentBtn.setAttribute('id', 'add-new-comment-btn');
addNewCommentBtn.setAttribute('name', 'addComment');
addNewCommentBtn.setAttribute('value', 'Add Comment');

newComment.setAttribute('type', 'text');
newComment.setAttribute('id', 'new-comment');
addNewCommentBtn.setAttribute('name', 'typedComment');
newComment.setAttribute('placeholder', 'type...');

sendComment.setAttribute('type', 'button');
sendComment.setAttribute('id', 'send-comment');
sendComment.setAttribute('name', 'sentComment');
sendComment.setAttribute('value', 'send');

//EventListeners
form.addEventListener('submit', createPost);

function createPost(e) {
    e.preventDefault();
    //appending childs to parent
    postImage.appendChild(img);
    postDescription.appendChild(paragraph);
    addComentBtn.appendChild(addNewCommentBtn);
    addCommentForm.appendChild(newComment);
    addCommentForm.appendChild(sendComment);
    allComments.appendChild(commentList);
    post.appendChild(postImage);
    post.appendChild(postDescription);
    post.appendChild(addComentBtn);
    post.appendChild(addCommentForm);
    post.appendChild(allComments);
    postContainer.appendChild(post);

    //adding values from form
    img.src = formUrl.value;
    paragraph.innerText = formDescription.value;

    console.log("Working");
}