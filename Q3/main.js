//JavaScript Document

//access the JSON file using an XHR object
let requestURL = "https://kavitabhardwaj19.github.io/COMP1073FinalExam/Q3/cats.json";

//create new XHR object, XHR object allows us to fetch data without a page refresh
let request = new XMLHttpRequest();

//opening a new reqquest
request.open('GET', requestURL);

//request type
request.responseType = 'json';

//send the request using the send method
request.send();

//wait for the request to be returned, store the response in a variable, invoke cats function with cats as argument
request.onload = function() {
  let differentCats = request.response;
  console.log(differentCats);
  cats(differentCats);
};

let button = document.querySelector('button');
button.addEventListener(onclick,function(cats));
function cats(jsonObj) {
  let cats = jsonObj.cats;
  let section = document.querySelector('section');
  for(let i = 0; i < cats.length; i++) {
    //build HTML elements dynamically
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let ul = document.createElement('ul');
    let p2 = document.createElement('p');

    img.setAttribute('src', 'https://kavitabhardwaj19.github.io/COMP1073FinalExam/Q3/assets/' + cats[i].photo);
    img.setAttribute('alt', cats[i].photo);
    h2.textContent = cats[i].name;
    p1.textContent = 'Species: ' + cats[i].species;
    let favFoods = cats[i].favFoods;
    for( let j = 0; j < favFoods.length; j++) {
      let listItem = document.createElement('li');
      listItem.textContent = favFoods[j];
      ul.appendChild(listItem);
    }
    p2.textContent = 'Age: ' + cats[i].age;

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(ul);
    article.appendChild(p2);
    section.appendChild(article);

  }
}
