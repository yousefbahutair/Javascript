function digitalRoot(...n) {
    for (let i = 0; i < n.length; i++) {
      let sum = n.reduce((total, currentVal) => {
        return total + currentVal;
      }, 0);
  
      if (i >= '0' || i <= '9') {
        while (sum >= 10) {
          sum = sum.toString().split('').reduce((total, currentVal) => {
            return total + Number(currentVal);
          }, 0);
        }
        console.log(sum);
      } else {
        console.log(sum);
      }
    }
  }
  