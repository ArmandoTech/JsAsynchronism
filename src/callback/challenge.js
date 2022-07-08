// const API= "https://api.escuelajs.co/api/v1"


// const fetchData= (apiUrl, callback) => {
//     let request= new XMLHttpRequest()
//     request.open("GET", apiUrl, true)

//     request.onreadystatechange= event =>{
//         if (request.readystate===4) {
//             if (request.status===200) {
//                 callback(null, JSON.parse(request.responseText))
//             } else {
//                 const error= new Error("Error " + apiUrl)
//                 return callback(error, null)
//             }
//         } 
//     }
//     request.send()
// }

// fetchData(`${API}/products`, ((error1, data1) =>{
//     if (error1) return console.log(error1)
//     fetchData(`${API}/products/${data1[0].id}`, ((error2, data2) =>{
//         if (error2) return console.log(error2)
//         fetchData(`${API}/categories/${data2?.category?.id}`, ((error3, data3) => {
//             if (error3) return console.log(error3)
//             console.log(data1[0])
//             console.log(data2.title)
//             console.log(data3.name)
//         }))
//     }))
// }))


const API2="https://api.escuelajs.co/api/v1"
const XMLHttpRequest= require("xmlhttprequest").XMLHttpRequest

const fetchData2= function(apiUrl, callback) {
    let request= new XMLHttpRequest()
    request.open("GET", apiUrl, true)

    request.onreadystatechange= function(event) {
        if (request.readyState===4) {
            if(request.status===200) {
                callback(null, JSON.parse(request.responseText))
            } else {
                const error= new Error("Error " + apiUrl)
                return callback(error, null)
            }
        }
    }
    request.send()
}

fetchData2(`${API2}/products`, function(error1,data1){
    if (error1) return console.log(error1)
    fetchData2(`${API2}/products/${data1[0].id}`, function(error2, data2){
        if (error2) return console.log(error2)
        fetchData2(`${API2}/categories/${data2?.category?.id}`, function(error3, data3){
            if (error3) return console.log(error3)
            console.log(data1[0])
            console.log(data2.title)
            console.log(data3.name)
        })
    })
})



