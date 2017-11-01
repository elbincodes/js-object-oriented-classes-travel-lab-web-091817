class  Driver {
  constructor(name, joined) {
    this.name = name;
    this.startDate = new Date(joined);
  }

  yearsExperienceFromBeginningOf(year){
    let x = this.startDate.toString().slice(11,15)

    return year - parseInt(x)-1;
  }
}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;

    this.endingLocation = endingLocation;

  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    let x = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    let y = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)

    return x + y;
  };

  estimatedTime(bool){
    let time;
    if(bool === true){
      time = 2;
    }else{
      time = 3
    }
    return this.blocksTravelled() / time;
  }

}
