//accessing form elements 
let form = document.getElementById('form');
let formUrl = document.getElementById('form-url');
let formDescription = document.getElementById('form-description');

//EventListeners
form.addEventListener('submit', createPost);

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

    //creating post div and assigning class
    let addCommentBtn = document.createElement('div');

    //creating post div and assigning class and setting attributes
    let addNewCommentBtn = document.createElement('input');
    addNewCommentBtn.className = 'addNewCommentBtn';
    addNewCommentBtn.setAttribute('type', 'button');
    addNewCommentBtn.setAttribute('id', 'add-new-comment-btn');
    addNewCommentBtn.setAttribute('name', 'addComment');
    addNewCommentBtn.setAttribute('value', 'Add Comment');

    //appending childs to parent
    postImage.appendChild(img);
    postDescription.appendChild(paragraph);
    addCommentBtn.appendChild(addNewCommentBtn);
    post.appendChild(postImage);
    post.appendChild(postDescription);
    post.appendChild(addCommentBtn);

    //accessing postContainer
    let postContainer = document.getElementById('post-container');
    postContainer.appendChild(post);

    try {
        const response = await axios.post('http://localhost:4000/post/create-post', {
            postUrl: `${formUrl.value}`,
            postDescription: `${formDescription.value}`
        });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }


    console.log("Create post working");

    //accessing add-comment button to listen on it
    let commentBtn = document.getElementById('add-new-comment-btn');
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

            //creating div to enter ul and setting attributes
            let allComments = document.createElement('div');
            allComments.className = 'allComments';
            allComments.setAttribute('id', 'all-comments');

            //creatinf ul to enter all the comments in it
            let commentList = document.createElement('ul');
            commentList.setAttribute('id', 'comment-list');

            //removing and appending elements to parent elements
            addCommentBtn.removeChild(addNewCommentBtn);
            addCommentForm.appendChild(newComment);
            addCommentForm.appendChild(sendComment);
            allComments.appendChild(commentList);
            post.appendChild(addCommentForm);
            post.appendChild(allComments);

            console.log("display form working");

            //accessing typed-comment send-comment button to add comments
            let typed_comment = document.getElementById('new-comment');
            let sendBtn = document.getElementById('send-comment');
            sendBtn.addEventListener('click', (e) => {
                e.preventDefault();

                if (e.target.classList.contains('sendComment')) {
                    //creating li's 
                    let li = document.createElement('li');  
                    
                    //appending/removing elements to/from parent
                    post.removeChild(addCommentForm);
                    addCommentBtn.appendChild(addNewCommentBtn);
                    li.appendChild(document.createTextNode(typed_comment.value));
                    commentList.appendChild(li);

                    console.log("adding comments working");
                }
            })
        }
    });
}