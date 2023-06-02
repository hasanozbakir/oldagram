import { posts } from "./data.js"

const mainEl = document.querySelector("main")

renderMainHtml()

function renderMainHtml() {
    mainEl.innerHTML = ""

    for(let i=0; i < posts.length; i++) {
        const currentPost = posts[i]       
        const { name, username, location, avatar, post, comment, isLiked, likes } = currentPost 
        const heartUrl = isLiked ? "images/icon-heart-filled.png": "images/icon-heart.png"
        
        mainEl.innerHTML += `
            <section>
                <div class="post-user-info-wrapper container">
                    <img class="avatar ${username}" >
                    <p>${ name }<span class="text">${ location }</span></p>
                </div>
                <img class="post-item" src="${ post }"> 
                <div class="post-info-wrapper container">
                    <div class="icon-wrapper">
                        <img id=${ username } class="icon" >
                        <img class="icon ${username}" >
                        <img class="icon ${username}" >
                    </div>
                    <p class="post-info-text">${ likes.toLocaleString().replace('.',',') } likes</p>
                    <p class="post-info-text">${ username } <span class="post-info-light-text">${ comment }</span></p>
                </div>
            </section>`

            document.getElementById(username).addEventListener("click", changeLikes)
            document.querySelector(`img.avatar.${username}`).setAttribute("src", avatar)
            document.getElementById(username).setAttribute("src",  heartUrl)
            document.querySelectorAll(`img.icon.${username}`)[0].setAttribute("src", "images/icon-comment.png")
            document.querySelectorAll(`img.icon.${username}`)[1].setAttribute("src", "images/icon-dm.png")
    }

    // addOnClickEventListener()
        
}

function getMainHtmlText() {
    let mainHtmlText = "" 
    
    for(let i=0; i < posts.length; i++) {
        const currentPost = posts[i]       
        const { name, username, location, avatar, post, comment, isLiked, likes } = currentPost 
        const heartUrl = isLiked ? "images/icon-heart-filled.png": "images/icon-heart.png"
        
        mainHtmlText += `
            <section>
                <div class="post-user-info-wrapper container">
                    <img class="avatar" src="${ avatar }">
                    <p>${ name }<span class="text">${ location }</span></p>
                </div>
                <img class="post-item" src="${ post }"> 
                <div class="post-info-wrapper container">
                    <div class="icon-wrapper">
                        <img id=${ username } class="icon" src=${ heartUrl } >
                        <img class="icon" src="images/icon-comment.png" >
                        <img class="icon" src="images/icon-dm.png" >
                    </div>
                    <p class="post-info-text">${ likes.toLocaleString().replace('.',',') } likes</p>
                    <p class="post-info-text">${ username } <span class="post-info-light-text">${ comment }</span></p>
                </div>
            </section>`
    }
    console.log(mainHtmlText)
    return mainHtmlText
}

function addOnClickEventListener() {
    for(let i=0; i < posts.length; i++) {
        const currentPost = posts[i];
        const { username } = currentPost;
        
        document.getElementById(username).addEventListener("click", changeLikes)
    }
}

function changeLikes(e) {
    e.preventDefault()
    
    for(let i=0; i < posts.length; i++) {
        let currentPost = posts[i]
        const { username, isLiked, likes } = currentPost
        
        if( e.target.id == username ) {
            currentPost.isLiked = !isLiked
            if( isLiked ) {
                currentPost.likes--
            } else {
                currentPost.likes++
            }
            renderMainHtml()
            return
        }
    }
    
}

