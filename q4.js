// Create simple event system
//write .on and .fire method such that

var $ = {
  mapping: {},
  on: function (event, cb) {
    this.mapping[event] = cb;
  },
  fire: function (event) {
    this.mapping[event]();
  },
};

$.on("click", function () {
  console.log("Hello Dude you clicked me");
});

$.on("move", function () {
  console.log("Hello Dude you moved over me");
});

$.fire("click");
//should print 'Hello Dude you clicked me'

$.fire("move");
//should print 'Hello Dude you moved over me'
