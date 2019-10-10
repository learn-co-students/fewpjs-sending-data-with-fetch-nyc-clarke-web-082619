
function submitData(name, email) {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(
      {
      'name': name,
      'email': email
    })
  }

  return fetch('http://localhost:3000/users', configObj)
  .then(function(response){
    return response.json()
  })
  .then(function(user) {
    document.body.innerHTML = user['id']
    console.log(user.id)
  })
  .catch(function(error) {
    
  document.body.innerHTML = error.message

  })

}



