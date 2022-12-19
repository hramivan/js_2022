let url = new URL(location.href);
let id = url.searchParams.get('id');
let block = document.getElementsByClassName('post')[0];
let block2 = document.getElementsByClassName('comments')[0];
fetch(` https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(posts => posts.json())
    .then(posts => {
        let ul = document.createElement('div')
        for (const post in posts) {
            let li = document.createElement('li');
            li.innerText = ` ${post}: ${posts[post]}`;
            ul.appendChild(li)

        }
        block.appendChild(ul)

    });


fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
.then(value => value.json())
.then(value => {
    let div = document.createElement('div')
    for (const valueKey of value) {
        console.log(value)
        div.innerText = `${valueKey}${value[valueKey]}`

    }

    block2.appendChild(div)
})