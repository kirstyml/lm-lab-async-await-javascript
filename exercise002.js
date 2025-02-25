import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";
const randomDog = "https://random.dog/woof.json";

// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// };

const fetchData = async(apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);
fetchData(randomDog);
