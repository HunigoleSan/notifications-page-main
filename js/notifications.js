const notificationsHtml = document.getElementById("notifications")

const countHtml = document.getElementById("countNoti").value

let user_notification = [{

    name: 'Mark Webber',
    avatar: './assets/images/avatar-mark-webber.webp',
    reaction: 'reacted to your recent post',
    postTitle: 'My first tournament today!',
    notTime: '1m ago',
    active: false
}, {
    name: 'Angela',
    avatar: './assets/images/avatar-angela-gray.webp',
    reaction: 'Gray followed you',
    notTime: '5m ago',
    active: false
}, {
    name: 'Jacob Thompson ',
    avatar: './assets/images/avatar-jacob-thompson.webp',
    reaction: 'has joined your group',
    postTitle: 'Cheese Club',
    notTime: ' 1 day ago',
    active: false
}, {
    name: 'Rizky Hasanuddin',
    avatar: './assets/images/avatar-rizky-hasanuddin.webp',
    reaction: 'sent you a private message',
    message: 'Hello, thanks for setting up the Chess Club. Ive been a member for a few weeks now and Im already having lots of fun and improving my game.',
    notTime: '5 days ago',
    active: false
}, {
    name: 'Kimberly Smith',
    avatar: './assets/images/avatar-kimberly-smith.webp',
    reaction: 'commented on your picture',
    commentPicture: './assets/images/image-chess.webp',
    notTime: '1 week ago',
    active: false
}, {
    name: 'Nathan Peterson',
    avatar: './assets/images/avatar-nathan-peterson.webp',
    reaction: 'reacted to your recent post',
    postTitle: '5 end-game strategies to increase your win rate ',
    notTime: '2 weeks ago',
    active: false
}, {
    name: 'Anna Kim',
    avatar: './assets/images/avatar-anna-kim.webp',
    reaction: 'left the group',
    postTitle: 'Cheese',
    notTime: '2 weeks ago',
    active: false
}
];
let countActive = 0

/* Imprimir Usuarios con notificaciones */
for (let i = 0; i < user_notification.length; i++) {
    let nombre = user_notification[i].name
    let avatar = user_notification[i].avatar
    let reaction = user_notification[i].reaction
    let postTitle = user_notification[i].postTitle
    let active = user_notification[i].active
    let notTime = user_notification[i].notTime
    let commetPicture = user_notification[i].commentPicture
    let messageFriends = user_notification[i].message
    /* concatenar elemento span que existen */
    let spanAvatar = `<img src="${avatar}" alt="${nombre}">`
    let spanNombre = `<span class="name">${nombre}</span>`
    let spanReaction = `<span class="interaction">${reaction}</span>`
    let spanPostTitle = `<span class="publication">${postTitle}</span>`
    let spanNotTime = `<p class="notification_time">${notTime}</p>`
    let spanCommentPicture = `<img class="picture" src="${commetPicture}" class="notification_time"></img>`
    let spanActive = `<span class="active"></span>`
    let spanMessage = `<span class="message">${messageFriends}</span>`

    let container_user = `<div class="container_user show_bg_noti_active">`

    let information_user = `<div class="information">
                                <div class="info">
                                    <p id="span" class="content_info"> `
                                    
    let carHtml = ` `

    if(avatar){
        carHtml += container_user + spanAvatar
    }
    if (nombre) {
        carHtml += information_user + spanNombre
    }
    if (reaction){
        carHtml += spanReaction
    }
    if (postTitle){
        carHtml += spanPostTitle
    }
    if (commetPicture){
        carHtml += spanCommentPicture
    }
    if (active == false) {
        carHtml += spanActive+`</p>`
        countActive +=1
    }
    else{
        carHtml += spanActive +`</p>`
    }
    
    if(notTime){
        carHtml += `<p class="notification_time">
                        ${notTime}
                    </p>`
                    
    }
    console.log(carHtml)
    if (messageFriends){
        carHtml += spanMessage +`</div>
        </div>
        </div>`
    }
    console.log(carHtml)
    /* enviar la cantidad a la vista*/

    notificationsHtml.innerHTML += carHtml
}

/* evento click a cada elemento hijo de notificaciones */
const arrayNotificationsHtml = document.querySelectorAll('.container_user')
const markAllHtml = document.getElementById('markAllNotifications')

document.getElementById("countNoti").innerHTML = ' ' + countActive;
arrayNotificationsHtml.forEach(function callback(currentValue, index, array) {
    /* console.log(array.classList) */
    currentValue.addEventListener('click', e => {
        /* console.log(currentValue.children) */
        var identifiedUser = currentValue.children[1].children[0].children[0].children[0].textContent
        /* var changeActive = currentValue.children[1].children[0].children[0].children[3] */
        var changeActive = currentValue.children[1].children[0].children[0].children
        
        for (let i = 0; i < user_notification.length; i++) {
            let nombre = user_notification[i].name

            if (identifiedUser == user_notification[i].name) {
                console.log("Usuario seleccionado")
                if (user_notification[i].active == false) {
                    
                    user_notification[i].active = true;
                    console.log('nombre:',nombre)
                    console.log('active:',user_notification[i].active)
                    currentValue.classList.remove('show_bg_noti_active')
                    currentValue.classList.add('hidden_bg_noti_not_active')
                    for (let i = 0; i < changeActive.length; i++) {
                        if(changeActive[i].classList == 'publication'){
                            changeActive[i].classList.remove('publication')
                            changeActive[i].classList.add('publication_read')
                        }
                        if (changeActive[i].classList == 'active'){
                            changeActive[i].classList.remove('active')
                            
                        }


                    }
                    countActive -= 1
                    document.getElementById("countNoti").innerHTML = ' ' + countActive;
                } else {
                    console.log("Ya reviso la notificación")
                }
            } else {
                console.log("No se selecciono a este usuario")
            }
        }
        currentValue.classList.remove('show_bg_noti_active')
        currentValue.classList.add('hidden_bg_noti_not_active')
        
    })

})
markAllHtml.addEventListener('click', e => {
    arrayNotificationsHtml.forEach(function callback(currentValue, index, array) {
        var changeActive = currentValue.children[1].children[0].children[0].children
        for (let i = 0; i < user_notification.length; i++) {
            let nombre = user_notification[i].name
            let active = user_notification[i].active
            if (user_notification[i].active == false) {
                
                user_notification[i].active = true;
                countActive -= 1
                console.log("Usuario: ", nombre)
                console.log("Active:", user_notification[i].active)
            } else {
                console.log("No se selecciono a este usuario")
            }
            for (let i = 0; i < changeActive.length; i++) {
                if(changeActive[i].classList == 'publication'){
                    changeActive[i].classList.remove('publication')
                    changeActive[i].classList.add('publication_read')
                }
                if (changeActive[i].classList == 'active'){
                    changeActive[i].classList.remove('active')
                }

            }
            
            currentValue.classList.remove('show_bg_noti_active')
            currentValue.classList.add('hidden_bg_noti_not_active')  
        }
        document.getElementById("countNoti").innerHTML = ' ' + countActive;
    })

})






