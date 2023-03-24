//得点表示を作る
let point = 0
document.getElementById("money").innerText=("￥"+point)

let sec = 200;          //スロットのリール回転速度(実行毎秒数)
let stopReelFlag = [];  
let reelCounts = [];    
let slotFrameHeight;    
let slotReelsHeight;    
let slotReelItemHeight; 
let slotReelStartHeight;
let slot_pattern = [];
let hit_img;
let hit = document.getElementById("hit");
let slot_frame = document.getElementById("slot-frame"); 
let reel = document.getElementsByClassName("reel");
let reels = document.getElementsByClassName("reels");
let start_btn = document.getElementById("start-btn");
let stop_btn = document.getElementsByClassName("stop-btn");
let Slot = {
  init: function() {
    stopReelFlag[0] = stopReelFlag[1] = stopReelFlag[2] = false;
    reelCounts[0] = reelCounts[1] = reelCounts[2] = 0;
  },
//スタートの作成（オブジェクト）
 start: function() {
 Slot.init();
 for (let index =0; index < 3; index++){
   Slot.animation(index);
 }


 },
  stop: function (i) {
    stopReelFlag[i] = true;
    if (stopReelFlag[0] && !stopReelFlag[1] && !stopReelFlag[2]){
      slot_pattern.push(reels[0].children[7 - reelCounts[0]].getAttribute('data-val'));
    } else if (stopReelFlag[0] && stopReelFlag[1] && !stopReelFlag[2]) {
      slot_pattern.push(reels[1].children[7 - reelCounts[1]].getAttribute('data-val'));
    } else if (stopReelFlag[0] && stopReelFlag[1] && stopReelFlag[2]) {
      slot_pattern.push(reels[2].children[7 - reelCounts[2]].getAttribute('data-val'));
    }
    if (stopReelFlag[0] && stopReelFlag[1] && stopReelFlag[2]) {
      start_btn.removeAttribute("disabled");
      if(slot_pattern.every(value => value === slot_pattern[0])){
        hit_img = slot_pattern[0];
        Slot.hit();
      };
      slot_pattern = [];
    }
  },
  hit: function(){
    
    if (hit_img == "は？"){
      point = point - 5000;
    } 
else if (hit_img == "サクランボ") {
    point = point + 150
}
else if (hit_img == "天国行き") {
    point = point + 500
}
else if (hit_img == "Bペン") {
    point = point + 3333
}
else if (hit_img == "m9(^д^)プギャー") {
    point = point - 1000
}
else if (hit_img == "1000") {
    point = point + 1000
}
else if (hit_img == "7") {
    point = point + 7777
};





    hit_img = document.querySelectorAll(`[data-val="${hit_img}"]`);



    document.getElementById("money").innerText=("$"+ point)

  },
  resetLocationInfo: function () {
    slotFrameHeight = slot_frame.offsetHeight;
    slotReelsHeight = reels[0].offsetHeight;
    slotReelItemHeight = reel[0].offsetHeight;
    slotReelStartHeight = -slotReelsHeight;
    slotReelStartHeight = slotReelStartHeight + slotFrameHeight
                             - (slotFrameHeight / 2) + slotReelItemHeight * 3 / 2;
    for (let i = 0; i < reels.length; i++){
      reels[i].style.top = String(slotReelStartHeight) + "px";
    }
  },
  animation: function (index) {
    if (reelCounts[index] >= 7) {
      reelCounts[index] = 0;
    }
    $('.reels').eq(index).animate({
      'top': slotReelStartHeight + (reelCounts[index] * slotReelItemHeight)
    }, {
      duration: sec,
      easing: 'linear',
      complete: function () {
        if (stopReelFlag[index]) {
          return;
        }
        reelCounts[index]++;
        Slot.animation(index);
      }
    });
  },
};
window.onload = function () {
  Slot.init();
  Slot.resetLocationInfo();
  start_btn.addEventListener("click", function(e){
    e.target.setAttribute("disabled", true)
    Slot.start();
    for(let i = 0; i < stop_btn.length; i++){
      stop_btn[i].removeAttribute("disabled");
    }
  });
  for(let i = 0; i < stop_btn.length ; i++ ){
    stop_btn[i].addEventListener("click", function (e) {
      Slot.stop(e.target.getAttribute('data-val'));
    })
  }
};

