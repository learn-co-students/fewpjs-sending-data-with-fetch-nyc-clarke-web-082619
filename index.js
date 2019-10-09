// Add your code here
document.addEventListener("DOMContentLoaded", function(){




})

function submitData(name, email){
    let bodyData = {
        name: name,
        email: email
    }
    let headersBody = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(bodyData)
        
    }
    return fetch("http://localhost:3000/users", headersBody)
    .then(function(resp) {
        return resp.json()
        })
        .then(function(object){
            document.body.innerHTML = object['id']
        })
        .catch( function ( error ) {
            document.body.innerHTML = error.message
        } )
};