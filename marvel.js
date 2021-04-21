
const baseURL = 'https://gateway.marvel.com:443/v1/public/characters'; 
const apikey = 'b2f68b7fd5712db617074cd33d82f507'; //public key
const privateKey = '55d6632e1252b51fefff9dede1372ffde46b85ca'
let url; 



//Search Form
const submitBtn = document.querySelector('.submit');
const searchForm = document.querySelector('.search-form');
const searchName = document.querySelector('.search');
//button

searchForm.addEventListener('click', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    let startsWith = searchName.value
    url = baseURL + '?name=' + '&apikey=' + apikey
    fetch(url)
    .then(function(result) {
        return result.json()
    }).then(json => {
        console.log(json)
    })
}