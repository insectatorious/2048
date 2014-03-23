devStages = {
  2:  "New",
  4:  "Research",
  8:  "Chase 3rd Party",
  16: "Business Review",
  32: "Implementation",
  64: "Code Review",
  128: "QA",
  256: "Regression",
  512: "Deployment",
  1024: "Prod Follow-up",
  2048: "Resolved"
};

function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.text             = devStages[value];

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value,
    text:  this.text
  };
};

