//QUESTION 1

document.body.style.backgroundColor = 'silver'

//QUESTION 2

const heading = document.getElementById('title')
heading.style.color = 'green'

//QUESTION 3

const h3Elements = document.querySelectorAll('h3');

h3Elements.forEach(h3 => {
  h3.style.textTransform = "uppercase";
});

//QUESTION 4

const fruitsList = document.querySelector("#fruList"); 

if (fruitsList) {
  const newFruit = document.createElement("li");
  newFruit.textContent = "Apples";  
  fruitsList.appendChild(newFruit);
}

//QUESTION 5

const vegetableList = document.querySelector("#vegList")

if(vegetableList){
    const newVeggie = document.createElement("li")
    newVeggie.textContent = "Spinach"
    vegetableList.appendChild(newVeggie)
}












