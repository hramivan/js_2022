let url = new URL(location.href);
let id = url.searchParams.get('id');
let block = document.getElementsByClassName('post')[0];
let block2 = document.getElementsByClassName('comments')[0];
fetch(` https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(posts => posts.json())
    .then(posts => {
        for (const post in posts) {
            let li = document.createElement('li');
            li.innerText = ` ${post}: ${posts[post]}`;
            block.appendChild(li)

        }


    });



fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
.then(value => value.json())
.then(value => {

    for (const valueKey in value) {
        let div = document.createElement('div')
        div.classList.add('comment')
        if (typeof value[valueKey] !== 'object') {

        }else{

            for (const item in value[valueKey]) {
                let div2 = document.createElement('div')

                if (typeof value[valueKey][item] !== 'object'){
                    div2.innerText = `${item}:${value[valueKey][item]}`
                }
                div.appendChild(div2)

            }
        }
        block2.appendChild(div)

    }


})

