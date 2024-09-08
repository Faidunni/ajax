const btn = document.querySelector(".btn");
const btnJson = document.querySelector(".button-json");

// xml
btn.addEventListener("click", () => {
  getData();
});

function getData() {
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.open("GET", "../api/sample.txt");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const text = document.createElement("p");
      text.textContent = xhr.responseText;
      document.body.appendChild(text);
    } else {
      console.log({ status: xhr.status, text: xhr.statusText });
    }
  };
  xhr.send();
}

// JSON
const url = "../api/people.json";
btnJson.addEventListener("click", () => {
  getUrl(url);
});

function getUrl(url) {
  const jsonXhr = new XMLHttpRequest();
  // console.log(jsonXhr);

  jsonXhr.open("GET", url);
  jsonXhr.onreadystatechange = function () {
    if (jsonXhr.readyState === 4 && jsonXhr.status === 200) {
      // parse
      const data = JSON.parse(jsonXhr.responseText);
      console.log(typeof data);
      const displayData = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join("");
      const element = document.createElement("div");
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: jsonXhr.status,
        text: jsonXhr.statusText,
        status: jsonXhr.readyState,
      });
    }
  };
  jsonXhr.send();
}
