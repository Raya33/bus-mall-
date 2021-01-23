"use strict";
var ctx = document.getElementById("myChart").getContext('2d');

var first =document.getElementById("first");
var second =document.getElementById("second");
var third =document.getElementById("third");
var showresluts=document.getElementById("final-results");
var submitButten=document.getElementById('max');
var max =25;
var Counter = 0;
var imgpr =document.getElementById("img-pr");
var firstIndex;
var secondIndex;
var thirdIndex;

var lastShowFirstIndex= -1;
var lastShowSecondIndex=-1;
var lastShowThirdIndex=-1;

var votesArray = [];
var watchArray=[];
var names = [];



function Product (name,source ){
this.name=name;
this.source=source ;
this.votes=0;
this.watch=0;
Product.prototype.allProduct.push(this);
productsName.push(name);

}

var productsName=[];


Product.prototype.allProduct=[];
new Product('bag','img/bag.jpg');
new Product('banana','img/banana.jpg');
new Product('bathroom','img/bathroom.jpg');
new Product('boots','img/boots.jpg');
new Product('breakfast','img/breakfast.jpg');
new Product('bubblegum','img/bubblegum.jpg');
new Product('chair','img/chair.jpg');
new Product('cthulhu','img/cthulhu.jpg');
new Product('dog-duck','img/dog-duck.jpg');
new Product('dragon','img/dragon.jpg');
new Product('pen','img/pen.jpg');
new Product('pet-sweep','img/pet-sweep.jpg');
new Product('scissors','img/scissors.jpg');
new Product('shark','img/shark.jpg');
new Product('sweep','img/sweep.png');
new Product('tauntaun','img/tauntaun.jpg');
new Product('unicorn','img/unicorn.jpg');
new Product('usb','img/usb.gif');
new Product('water-can','img/water-can.jpg');
new Product('wine-glass','img/wine-glass.jpg');

function randomlyGenerate(){
  return Math.floor(Math.random() * Product.prototype.allProduct.length);
}

function ProductRandomly(){
  var forbiddenIndex=[lastShowFirstIndex,lastShowSecondIndex,lastShowThirdIndex]


     
      do{
        firstIndex = randomlyGenerate();
        
    } while (forbiddenIndex.includes(firstIndex));
    lastShowFirstIndex=firstIndex;
        forbiddenIndex.push(firstIndex);
     

     do{
      secondIndex = randomlyGenerate();
  
  }while (forbiddenIndex.includes(secondIndex)) ;
  lastShowSecondIndex=secondIndex;
     forbiddenIndex.push(secondIndex);
  
     do{
      thirdIndex = randomlyGenerate();
  }while ( forbiddenIndex.includes( thirdIndex));
  lastShowThirdIndex= thirdIndex;
 


     first.src= Product.prototype.allProduct[firstIndex].source ;
     Product.prototype.allProduct[firstIndex].watch++;           
     second.src= Product.prototype.allProduct[secondIndex].source ;
     Product.prototype.allProduct[secondIndex].watch++;            
     third.src= Product.prototype.allProduct[thirdIndex].source ;
     Product.prototype.allProduct[thirdIndex].watch++;            
    
}
ProductRandomly();
getTheData();

imgpr.addEventListener('click', handleClick);
showresluts.addEventListener('click',showreslut);
submitButten.addEventListener('submit', setMaxUserRounds);

function handleClick (event) {

  if(Counter < max){

    if(event.target.id ==='first'){

      Counter++
      Product.prototype.allProduct[firstIndex].votes++;           
      ProductRandomly();

    }else if(event.target.id ==='second'){
      
      Counter++
      Product.prototype.allProduct[secondIndex].votes++;            
      ProductRandomly();

    }else if(event.target.id ==='third'){
      
      Counter++
      Product.prototype.allProduct[thirdIndex].votes++;            
      ProductRandomly();

    }
  }else {
   
    imgdiv.removeEventListener('click',handleClick);
    showresluts.disabled = false;
for(var i=0;i<Product.prototype.allProduct.length;i++){
votesArray.push(Product.prototype.allProduct[i].votes);
watchArray.push(Product.prototype.allProduct[i].watch);

}
 }
  
}


 function showreslut(event){
  var resultList =document.getElementById('results');

  var finalResult;
  for(var i=0;i < Product.prototype.allProduct.length;i++){
    finalResult=document.createElement('li');
    finalResult.textContent=Product.prototype.allProduct[i].name+
    'has'+Product.prototype.allProduct[i].votes+'votes ,and was seen'+Product.prototype.allProduct[i].watch+'times. And the prsentge = '+Product.prototype.allProduct[i].votes/
max    ;
    resultList.appendChild(finalResult);
    
 var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: productsName,
      datasets: [{
          label: 'BusMall votes',
          data:votesArray ,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }
  ,{
    label: 'BusMall watch',
    data:watchArray ,
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
}]

  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});
  }


 }

 function setMaxUserRounds (event){
    event.preventDefault();
   max= event.target.rounds.value;
    var StorageData =JSON.stringify(Product.prototype.allProduct);
    localStorage.setItem('product',StorageData);
  }
  
 






function getTheData (){
  var ProductList =localStorage.getItem('product');
  var jsProductList = JSON.parse(ProductList);

  if(jsProductList != null )
  Product.prototype.allProduct = jsProductList ;


}




