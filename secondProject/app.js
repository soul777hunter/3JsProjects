let data = [
  {
    name: "Mateo",
    age: "30",
    position: "Manager",
    salary: "30.000",
  },
  {
    name: "Sarah",
    age: "32",
    position: "Aux Manager",
    salary: "25.000",
  },
  {
    name: "John",
    age: "20",
    position: "Secretary",
    salary: "15.000",
  },
  {
    name: "Tim",
    age: "27",
    position: "Cleaner",
    salary: "13.500",
  },
  {
    name: "Sam",
    age: "22",
    position: "Cleaner",
    salary: "12.350",
  },
  {
    name: "Joey",
    age: "34",
    position: "Intern",
    salary: "5.000",
  },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
  return `<div><b>Name:</b> ${item.name}<br><b>Age:</b> ${item.age} years old<br><b>Position:</b> ${item.position}<br><b>Salary:</b> ${item.salary} U$</div>`;
});

info.innerHTML = details.join("\n");
