// 1. Copy and paste your prototype in here and refactor into class syntax.

class NewCuboidMaker{
    constructor(attrs){
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    volume(){
        return (this.length * this.width * this.height);
    };
    surfaceArea(){
        return (2*(this.length * this.width + this.length * this.height + this.width * this.height));
    }
}
const newCuboid = new NewCuboidMaker({
length: 4,
width: 5,
height: 5
});






// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends NewCuboidMaker {
    constructor(attrs){
      super(attrs);
    }
  }
  
  const Cube = new NewCuboidMaker({
    length:5,
    width:5,
    height:5,
  });
  
  console.log(Cube.volume()); // 5cm volume is 125
  console.log(Cube.surfaceArea()); // 5cm surface area is 150