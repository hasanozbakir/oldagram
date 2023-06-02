import { posts } from "./data.js"

const mainEl = document.querySelector("main")

renderMainHtml()

function renderMainHtml() {
    mainEl.innerHTML = ""

    for(let i=0; i < posts.length; i++) {
        const currentPost = posts[i]       
        let { name, username, location, avatar, post, comment, isLiked, likes } = currentPost 
        const heartUrl = isLiked ? "images/icon-heart-filled.png": "images/icon-heart.png"

        const section = document.createElement("section")
        const divPostUser = document.createElement("section")
        divPostUser.setAttribute("class", "post-user-info-wrapper container")
        divPostUser.innerHTML = `<p>${ name }<span class="text">${ location }</span></p>`

        const divPostInfo = document.createElement("section")
        divPostInfo.setAttribute("class", "post-info-wrapper container")
        divPostInfo.innerHTML = `<p class="post-info-text">${ likes.toLocaleString().replace('.',',') } likes</p>
                                <p class="post-info-text">${ username } <span class="post-info-light-text">${ comment }</span></p>`

        const divIconWrapper = document.createElement("div")
        divIconWrapper.setAttribute("class", "icon-wrapper")
        const imgAvatar = document.createElement("img")
        imgAvatar.setAttribute("class", "avatar")
        imgAvatar.setAttribute("src", avatar)
        
        divPostUser.prepend(imgAvatar)
        
        const imgPostItem = document.createElement("img")
        imgPostItem.setAttribute("class", "post-item")
        imgPostItem.setAttribute("src", post)
        const imgHeartIcon = document.createElement("img")
        imgHeartIcon.setAttribute("class", "icon")
        imgHeartIcon.setAttribute("src", heartUrl)

        imgHeartIcon.addEventListener("click", (e) => {
            e.preventDefault()

            currentPost.isLiked = !isLiked
            
            if( isLiked ) {
                currentPost.likes--
            } else {
                currentPost.likes++
            }
            renderMainHtml()
        
        })

        const imgCommentIcon = document.createElement("img")
        imgCommentIcon.setAttribute("class", "icon")
        imgCommentIcon.setAttribute("src", "images/icon-comment.png")
        const imgDMIcon = document.createElement("img")
        imgDMIcon.setAttribute("class", "icon")
        imgDMIcon.setAttribute("src", "images/icon-dm.png")

        divIconWrapper.append(imgHeartIcon)
        divIconWrapper.append(imgCommentIcon)
        divIconWrapper.append(imgDMIcon)

        divPostInfo.prepend(divIconWrapper)

        section.append(divPostUser)
        section.append(imgPostItem)
        section.append(divPostInfo)

        mainEl.append(section)
    }

}



