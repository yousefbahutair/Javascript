function humanReadable (seconds) {
    let time = seconds;
      if( time >= 0){
        let hours = Math.floor(time / 3600)
        hours = (hours <= 9) ? (`0${Math.floor(time / 3600)}`) : Math.floor(time / 3600)
        let min = Math.floor((time % 3600) / 60)
            min = (min <= 9) ? (`0${Math.floor((time % 3600) / 60)}`) : Math.floor((time % 3600) / 60)
        let second = (time % 3600) % 60
        second = (second <= 9) ? (`0${(time % 3600) % 60}`) : (time % 3600) % 60
        var humanFormat = (`${hours}:${min}:${second}`) 
      }
      else{
        console.log("Invalid Input")
      }
      return humanFormat;
    }
    console.log(humanReadable(0))