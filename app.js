const form=document.querySelector('form');
const news=document.getElementById('news')



function getShows(text){

    news.innerHTML="";
    const url=` https://newsapi.org/v2/everything?q=${text}&sortBy=popularity&apiKey=020ccaae9b9d408691ae94ca404498d3`
    fetch(url).then((res)=>{
        return res.json();
    })
    .then((data)=>{

console.log(data);



for(let item of data.articles){
    
     // const img=document.createElement('img');
     // img.src=item.show.image.medium;
     // img.style.margin="10px";


     const card = document.createElement('div');
card.classList = 'card-body';

    const card1=  ` <div id="newssection"class="card mb-3" style="width: 100vw;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${item.urlToImage}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
       
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.content}</p>
          
          <p class="card-text"><small class="text-muted">${item.description}</small></p>
        </div>
      </div>
    </div>
  </div>`

   


  news.innerHTML +=card1;
 
    
 }

  console.log(data);
})

    

}



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text=form.elements[0].value;
    getShows(text);
    form.elements[0].value="";
    console.log(text);
})