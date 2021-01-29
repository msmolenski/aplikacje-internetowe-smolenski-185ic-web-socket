self.addEventListener("message", function(e) {
  if(e.data === 0) {
    postMessage(0);
  }
  if(e.data > 0){
    let x = 0, y = 1;
    let arr = [];
    if (e.data === 1) {
      postMessage(e.data);
    } else {
      for(let i = 0; i < e.data; i++) {
        arr.push(" " + y);
        y += x;
        x = y - x;
      }
      postMessage(arr);
    }      
  } else {
    postMessage("Podano złe dane");
  }
}, false);