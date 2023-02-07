//card position
let aPos;
let bPos; 
//card
let cardA = null;
let cardB = null;

const snapped = [];

function flip(x, snapSymbol) {
  document.getElementById("fl" + x).style.transform = "rotateY(180deg)";

  if (cardA === null) {
    aPos = x;
    cardA = snapSymbol;
  }
  else if (cardB === null) {    
    bPos = x;
    cardB = snapSymbol;    
    snap(cardA, cardB, aPos, bPos);
  }
  else {
    snap(cardA, cardB, aPos, bPos);
  }
}

function unflip(y) {
  for (let a = 0; a < snapped.length; a++) {
    if (y === snapped[a]) {
      return;
    }
  }
    document.getElementById("fl" + y).style.transform = "rotateY(0deg)";
    cardA = null;
}

function snap(cA, cB, aPosition, bPosition) {
  if (cA === cB) {
    console.log("SNAP");
    cardA = null;
    cardB = null;
    snapped.push(aPosition);
    snapped.push(bPosition);
    console.log("eeee " + aPosition);
    console.log("eeee " + bPosition);
    cardDrag(bPosition);
  }
  else {
    console.log("NO! BAD!");
    cardA = null;
    cardB = null;
    setTimeout(unflip, 1000, aPosition);
    setTimeout(unflip, 1000, bPosition);    
  }
}

function cardDrag(b) {

  /*
  let card = document.getElementById("fl" + b + "b");
  card.setAttribute("id", "follow");
  document.getElementById("cover").style.display = "initial";

  $(document).mousemove(function(e) {
    $("#follow").css({
      left: (e.offsetX * -1) + 900,
      top: e.offsetY - 600
    });
  });
  */
}