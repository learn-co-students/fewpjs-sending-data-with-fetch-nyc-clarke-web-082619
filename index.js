// Add your code here
//find the form input value and save them as variables

// let form = document.querySelector('form');

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     let name = form.userName.value;
//     let email = form.userEmail.value;
//     submitData(name, email);
// });

// let name = form.userName.value;
// let email = form.userEmail.value;

function submitData(name, email){
    let formatData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formatData)
      };
  
    return fetch("http://localhost:3000/users", configObj)
      .then( response => response.json())
      .then(function(data){
        document.body.innerHTML = data.id;
      })
      .catch(function(error){document.body.innerHTML = error.message;
      });
}

