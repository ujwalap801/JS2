let options = {
    method: "GET"
  };
  
  fetch("https://gorest.co.in/public-api/users", options)

.then(function(response)
{
    return response.json();
})

.then(function(Jsondata)
{

    console.log(Jsondata);
})



