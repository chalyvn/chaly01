var fakeAPI = 'http://localhost:3000/posts';

fetch(fakeAPI)
    .then(function (response){
        return response.json();
    })
    .then(function (post){
        console.log(post);
    })
