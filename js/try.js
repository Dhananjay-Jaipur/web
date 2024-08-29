function getData(data, callback) {
    
    setTimeout(() => {
      console.log("data - ", data);
      callback();
    }, 2000);
// 2000ms = 2s
}

//callback hell
  getData(11, () => {
    console.log("getting data.....");
    getData(22, () => {
     console.log("getting data.....");
      getData(33, () => {
        console.log("getting data.....");
      });
    });
  });
  