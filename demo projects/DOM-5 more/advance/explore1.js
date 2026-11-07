function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucess = true;
      if (sucess) {
        resolve("data fetched successfully");
      } else {
        reject("error in fetching the data");
      }
    }, 3000);
  });
}

let response = fetchData();
console.log(response);

fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
