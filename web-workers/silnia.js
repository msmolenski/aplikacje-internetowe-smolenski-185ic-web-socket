self.addEventListener("message", function(e) {
    if(e.data === 0) {
      postMessage(0);
    }
    if(e.data > 0){
      if (e.data === 1) {
        postMessage(1);
      } else {
          let answer = 1;
          for(i = 1; i <= e.data; i++){
            answer = answer * i;
          }
          postMessage(answer);
      }      
    } else {
      postMessage("Podano złe dane");
    }
  }, false);