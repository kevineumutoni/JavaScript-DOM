// Question 1
document.body.style.backgroundColor = "silver";

// Question 2

document.getElementById("title").style.color = "green";

// Question 3

const h3Elements = document.getElementsByTagName("h3");
for (let i = 0; i < h3Elements.length; i++) {
    h3Elements[i].style.textTransform = "uppercase";
    h3Elements[i].style.color = "green";
    h3Elements[i].style.fontSize = "30px";



}


// Question 4

const fruitList = document.getElementById("fruList");
const newFruit = document.createElement("li");
newFruit.textContent = "Apples";
fruitList.appendChild(newFruit);

// Question 5

const vegList = document.getElementById("vegList");
const newVegetable = document.createElement("li");
newVegetable.textContent = "Carrots";
vegList.appendChild(newVegetable);


const allListItems = document.querySelectorAll('li');
allListItems.forEach(item => {
    item.style.transition = 'all 0.2s ease';
});

const description = document.getElementById('description');
description.style.fontSize = '28px';
description.style.color= 'green'
description.style.textAlign = 'center';
description.style.fontStyle = 'italic';

//footer and copyright
const footer = document.createElement('footer');
footer.innerHTML = `
    <p>&copy ${new Date().getFullYear()} Greens Kiosk - Fresh Produce Daily</p>
`;
document.body.appendChild(footer);
