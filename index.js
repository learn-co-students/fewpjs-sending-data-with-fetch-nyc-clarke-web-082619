// Add your code here


function submitData(userName, userEmail){

    let formData = {
        name: userName,
        email: userEmail
    }

    let configObj = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', configObj)
    .then(response => response.json())
    .then(json => {
        document.body.innerHTML = json.id
    })
    .catch(function(error){
        alert("Bad things! Ragnarok!");
        document.body.innerHTML = error.message;
    });
  };

