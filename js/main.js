class Node {
  constructor(Key , Value) {
    this.Key = Key;
    this.Value = Value;
  }
  setLeft(left){
    this.left = new Node(left.Key , left.Value);
  }

  setRight(right){
    this.right = new Node(right.Key , right.Value);
  }
  printNode(){
    console.log(this.Key , this.Value);
  }

  compareTo(other){
    var res;
    if (this.key < other.key) {
      res = -1;
    }else if (this.key > other.key) {
      res = 1;
    }else if (this.key == other.key) {
      res=0;
    }
    return res;
  }
}

var n = new Node(10,10);

var other = new Node(20,20);

var o = n.compareTo(other);
function removeFn() {
  console.log("Removed");
}

var btn = document.getElementById('the-button');
btn.addEventListener("click",function(){
  alert("Button Clicked.");
  btn.removeEventListener("click",removeFn);
});
