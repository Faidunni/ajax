// console.log(`I'm first`);
// console.log(`I'm second`);
// console.log(`I'm third`);

// function boilingWater() {
//   console.log("boiling...");
//   for (let i = 0; i < 10000; i++) {
//     console.log("still not done..");
//   }
//   console.log('done')
// }

// "lets make soup-recipe"
// boilwater(10000);
// console.log("chop carrots");

// function boilwater(time) {
//   console.log("boiling...");
//   setTimeout(() => {
//     console.log("done..");
//   }, time);
// }

// boilWater();
// console.log(`chop carrots`);
// console.log(`chop onion`);

// callback hell
// function boilWater() {
//   console.log(`boiling....`);
//   setTimeout(() => {
//     console.log("done.");
//     console.log("add carrot");
//     setTimeout(() => {
//       console.log(`carrots done`);
//       console.log(`àdd onion`);

//       setTimeout(() => {
//         console.log(`onion done`);
//       }, 500);
//     }, 500);
//     console.log(`chop onion`);
//   }, 10000);
// }

// callbacks, promises, async/await
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    heading1.style.color = "red";
    setTimeout(() => {
      heading2.style.color = "green";
      setTimeout(() => {
        heading3.style.color = "blue";
      }, 1000);
    }, 2000);
  }, 1000);
});

// promises
// callbacks, promises, async/await
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

// promises
btn.addEventListener("click", () => {});

const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve("hey value is true");
  } else {
    reject("there was a error, value is false");
  }
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
