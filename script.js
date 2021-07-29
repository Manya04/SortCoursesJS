//Array of objects
const courses = [
    {
        name: "Complete ReactJS course",
        price: "2.3"
    },
    {
        name: "Complete Angular course",
        price: "1.3"
    },
    {
        name: "Complete MERN course",
        price: "2.8"
    },
    {
        name: "Complete C++ course",
        price: "2.0"
    },
    {
        name: "Complete JavaScript course",
        price: "7.0"
    }
];

function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode("$" + course.price);
    span.appendChild(price);   //append it to make it available

    //inject span inside li
    li.appendChild(span);
    ul.appendChild(li);

});
}

// generateList(); 

window.addEventListener("load" , generateList);

const button = document.querySelector(".sort-btn")
button.addEventListener("click" , () => {
    courses.sort( (a,b) => a.price - b.price );
// Array is sorted but we need to diplay it again or regenerate on screen
generateList();
});

const button2 = document.querySelector(".btn-primary")
button2.addEventListener("click" , () => {
    courses.sort( (a,b) => b.price - a.price );
// Array is sorted but we need to diplay it again or regenerate on screen
generateList();
});

