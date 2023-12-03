//accessing form elements 
let form = document.getElementById('form');
let formUrl = document.getElementById('form-url');
let formDescription = document.getElementById('form-description');

//accessing post elements
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

//adding values from form
img.src = formUrl.value;
paragraph.src = formDescription.value;

//EventListeners
form.addEventListener('submit', createPost);

function createPost(e) {
    e.preventDefault();
    console.log("Working");
}