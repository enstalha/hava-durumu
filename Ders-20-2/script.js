const body = document.querySelector("body");
const cardTitle = document.querySelector(".card-title");
const row = document.querySelector(".row");

fetch('https://fakestoreapi.com/products')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

    // data.forEach(function(veri){
    //     row.innerHTML += `
    //     <div class="col-4 mb-3">
    //             <img src="${veri.url}">
    //         </div>
    //     `
    // })
    

    // for(let i = 0; i < 100; i++){
    //     row.innerHTML += `
    //     <div class="card" style="width: 18rem;">
    //         <img src=${data[i].url} alt="Resim Çalışmıyor">
    //     </div>
    //     `
    // }
    
})

