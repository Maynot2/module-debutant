


let obj = {
  coords: [0, 2, 3], 
  length: 5,
  normalize: function() {
    console.log(this.coords.map(function(n, i, arr) {
      return n / this.length;
    }))
  }
};

obj.normalize();


