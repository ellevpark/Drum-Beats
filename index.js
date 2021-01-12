let btnLength = document.querySelectorAll(".drum").length;

for (let i = 0; i < btnLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)

}


function handleClick() {
  switch (audio) {
    case 'w':
      tom1.play()
      break;
    case 'a': 
      tom2.play
    default:
      break;
  }
  
//   w drum">w</button>
//   <button class="a drum">a</button>
//   <button class="s drum">s</button>
//   <button class="d drum">d</button>
//   <button class="j drum">j</button>
//   <button class="k drum">k</button>
//   <button class="l drum">l</button>
// </div> 
 tom1.play()

}

let audio = new Audio("sounds/tom-1.mp3")