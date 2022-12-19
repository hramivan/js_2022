let apiURL = 'http://jsonplaceholder.typicode.com/users/';
let url = new URL(location.href);
let id = url.searchParams.get("id");
let div = document.getElementsByClassName('box')[0]
let post1 =document.getElementsByClassName('post1')[0]
let post2 = document.getElementsByClassName('post2')[0]
let butt = document.getElementsByClassName('button')[0]
let button = document.createElement('button')
button.innerText = 'post of current user'
button.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                let a = document.createElement('a')
                a.classList.add('userPost');
                a.innerText =' to post';
                a.href=`postDetail.html?id=${post.id}`;
                if (post.id % 2 === 0) {
                    let div = document.createElement('div');
                    div.classList.add('post');
                    div.innerHTML = `<h3>${post.title}</h3>`;
                    div.appendChild(a)
                    post1.appendChild(div)
                }else{
                    let div = document.createElement('div');
                    div.classList.add('post');
                    div.innerHTML = `<h3> ${post.title}</h3>`;
                    div.appendChild(a)
                    post2.appendChild(div)

                }

            }


        })

};



butt.append(button)

fetch(apiURL + id)
    .then(value => value.json())
    .then(value => {
        for (const item in value) {

            let user = document.createElement('div');
            if (typeof value[item] !== 'object') {
                user.innerText = `${item}: ${value[item]}`;
            } else {
                user.innerText = `${item}`
                for (const key in value[item]) {
                    let addressa = document.createElement('div');
                    if (typeof value[item][key] !== 'object') {
                        addressa.innerText = `${key}: ${value[item][key]}`
                    } else {
                        addressa.innerText = `${key}`
                        for (const element in value[item][key]) {
                            let geo = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object') {
                                geo.innerText = `${element}: ${value[item][key][element]}`
                            }
                            addressa.append(geo)
                        }
                    }
                    user.append(addressa)
                }
            }
            div.append(user)

        }
    })
