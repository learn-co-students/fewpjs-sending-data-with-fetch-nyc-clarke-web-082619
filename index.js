// Add your code here
function submitData(name, email){
        let formData = {
            name: name,
            email: email
        };
        
        // method: "POST" is missing from the object below
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
            body: JSON.stringify(formData)
        };
        
        return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            console.log(object.id);
            let body = document.getElementsByTagName("BODY")[0];
            let li = document.createElement('li');
            let textNode = document.createTextNode(object.id);
            textNode.textContent = object.id;
            li.appendChild(textNode);
            body.appendChild(li);
        })
        .catch(function(error) {
            alert("Bad things! Ragnarők!");
            let body = document.getElementsByTagName("BODY")[0];
            let li = document.createElement('li');
            let textNode = document.createTextNode(error.message);
            textNode.textContent = error.message;
            li.appendChild(textNode);
            body.appendChild(li);
            console.log(error.message);
        });
}