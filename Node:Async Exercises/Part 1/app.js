let favNumber = 5;
let baseURL = "http://numbersapi.com";

async function p1() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
}
p1();

const favNumbers = [2, 12, 34];
async function p2() {
  let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(data);
}
p2();

async function p3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach((data) => {
    $("body").append(`<p>${data.text}</p>`);
  });
}
p3();
