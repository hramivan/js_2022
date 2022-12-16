let apiURL = 'http://jsonplaceholder.typicode.com/users/';
let url = new URL(location.href);
let id = url.searchParams.get("id");
let div = document.getElementsByClassName('user-box')[0]

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
                    }else{
                        addressa.innerText = `${key}`
                        for (const element in value[item][key]) {
                            let geo = document.createElement('div');
                            if(typeof value[item][key][element] !== 'object'){
                                geo.innerText=`${element}: ${value[item][key][element]}`
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
