// fetch is built-in
const btn = document.querySelector(".button-json");
const url = "../api/people.json";

btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data);
  } catch (err) {
    console.log(err);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};

// catch the error
// try {
//   console.log("hello");
//   console.log(random);
// } catch (error) {
//   console.log(erroe);
// }
