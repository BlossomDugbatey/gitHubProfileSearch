const apiUrl = 'https://api.github.com/users';

fetchData('Dugbatey-Blossom20')

// function fetchData(username) {
//     axios.get(apiUrl + '/' + username).then(response => {
//         console.log(response)
//     }).then(err => {
//         if(err) throw err
//     })
// }

async function fetchData(username) {
    const response = await axios.get(apiUrl + '/' + username)
    console.log(response)
}