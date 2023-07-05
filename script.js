let counter = 0;

// const removeCardOnClick = function(data){
//     let deleteButtons = document.querySelectorAll('.card button')
// console.log(deleteButtons)
// deleteButtons.forEach(btn =>{
//     btn.addEventListener('click', function(){
//         console.log(this.parentNode.parentNode)
//         this.parentNode.parentNode.innerHTML = `
//                     <img src="${data[counter].img}" class="card-img-top" alt="..." style=" height: 21rem; width: 100%; object-fit: cover">
//                     <div class="card-body">
//                       <h5 class="card-title">${data[counter].title}</h5>
//                       <p class="card-text">${data[counter].price}</p>
//                       <a href="#" class="btn btn-primary">Add</a>
//                       <button class="scarta btn btn-danger">scarta</button>
//                     </div>
//         `
//         counter ++;
//     })
// })
// }

const getBooks = function(){
    fetch('https://striveschool-api.herokuapp.com/books')
        .then( res => {
            if(res.ok){
                // console.log(res.json());
                return res.json();
            } else{
                throw new Error('azz')
            }
        })
        .then(data => {
            let cardsContainer = document.getElementById('cardsContainer');
            cardsContainer.innerHTML = ``
            console.log(data[3].title)
            let count = counter;
            for(let i = counter; i < counter + 6; i++){
                
                let card = document.createElement('div');
                card.classList.add('card');
                card.style.width = '18rem'
                card.innerHTML = `
                    <img src="${data[i].img}" class="card-img-top" alt="..." style=" height: 21rem; width: 100%; object-fit: cover">
                    <div class="card-body">
                      <h5 class="card-title">${data[i].title}</h5>
                      <p class="card-text">${data[i].price}$</p>
                      <a href="#" class="btn btn-primary">Add</a>
                      <button onclick="changeCard(this)" class="scarta btn btn-danger">scarta</button>
                    </div>
                `
                cardsContainer.appendChild(card)
                count ++;
            }
            counter = count;
            
        })
        
        .catch(err => {
            console.log(err);
        })

}

const changeCard = function(thisEl){
    console.log(thisEl)
    let questaCard = thisEl.parentNode.parentNode
    questaCard.innerHTML = ``

    fetch('https://striveschool-api.herokuapp.com/books')
    .then( function(res){
        if(res.ok){
            // console.log(res.json());
            return res.json();
        } else{
            throw new Error('azz')
        }
    })
    .then( function(data){
        
            
        questaCard.innerHTML = `
                    <img src="${data[counter].img}" class="card-img-top" alt="..." style=" height: 21rem; width: 100%; object-fit: cover">
                    <div class="card-body">
                      <h5 class="card-title">${data[counter].title}</h5>
                      <p class="card-text">${data[counter].price}$</p>
                      <a href="#" class="btn btn-primary">Add</a>
                      <button onclick="changeCard(this)" class="scarta btn btn-danger">scarta</button>
                    </div>
                `
                
               
            
            counter++
    })
    .catch(err => {
        console.log(err);
    })
}



getBooks()