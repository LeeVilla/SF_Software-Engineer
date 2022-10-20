const chartBox = document.getElementsByClassName("chartBox")[0];
const submitData = document.querySelector("button");
let myName = "Leamsi Villafane";
let myPassword = "Apple123@";
let myaccount = [];

let collectedData = [
  {
    CompanyName: "Barclay",
    DebtAmount: "$2,400.00",
    CreditLimit: "$5,000.00",
    DueDate: "2022-01-01",
    StatementDate: "2022-01-05",
  },
];

const collectData = (e) => {
  e.preventDefault();
  let data = {
    CompanyName: document.getElementById("company").value,
    DebtAmount: document.getElementById("debt").value,
    CreditLimit: document.getElementById("limit").value,
    DueDate: document.getElementById("due").value,
    StatementDate: document.getElementById("statement").value,
  };
  collectedData.push(data);
  document.forms[0].reset();
  console.log(collectedData);
  chartBox.append("Not Yet");
  console.table(collectedData);
};
submitData.addEventListener("click", collectData);

console.log(collectedData);
console.table(collectedData);
