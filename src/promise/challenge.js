import fetch from "node-fetch"
const API= "https://api.escuelajs.co/api/v1"

// fetch(`${API}/products`)
//     .then(response => response.json())
//     .then(products => console.log(products))
//     .catch(error => console.log(error))

fetch(`${API}/products`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return fetch(`${API}/products/${data[0].id}`)})
    .then(response => response.json())
    .then(product => {
        console.log(product.title)    
        return fetch(`${API}/categories/${product.category.id}`)
    })    
    .then(response => response.json())
    .then(category => console.log(category.name))
    .catch(error => console.log(error))
    