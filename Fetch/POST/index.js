
let data = {
    name: "Rahul",
    gender: "Male",
    email: "rahul123@gmail.com",
    status: "Active"
  };

  
let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 5b8faa3592569928a8aa07468fac524e3255d48825a42c698da9b7eb99ef1415"
    },
    body: JSON.stringify(data)
  };
  
  fetch("https://gorest.co.in/public-api/users", options)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      console.log(jsonData);
    });