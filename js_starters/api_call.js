fetch('https://randomuser.me/api').then(response => {
    return response.json()
})
.then(users => {
    console.log(users)
})
