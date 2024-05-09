var wrap = document.getElementById('wrap');
var y; // 縦方向の加速度を取得するための変数
var size = 5; // 振ったと認識するサイズ
var shakeFlag = true; // trueであればcountをプラス、falseであればマイナスにするためのフラグ
var count = 0; // 振ったらこれがたまる。たまった量に応じて何かする

//Mobile
// 加速度が変化すると
window.addEventListener('devicemotion',  function (event) {
  // 加速度 Y軸
  y = event.acceleration.y;
  // 加速度が、sizeに指定した量より大きいもしくは-sizeより小さいときに、countを操作
  if (y < -size || y > size) {
    // shakeFlagがtrueなら
    if (shakeFlag) {
      // countをプラス
      count++;
    }
    // shakeFlagがfalseなら
    else {
      // countをプラス
      count++;
    }
  }
  
  if (count >= 0, count <= 100) {
    shakeFlag = true; // shakeFlagをtrueにする
    wrap.style.opacity = count * 0.01;
  }
  else {
    wrap.style.opacity = 1;
  }
});

//PC
function konamicommand(func, cmd) {
	if (!(func instanceof Function)) return;
	var kc = {};
	kc.func = func;
	kc.cmd = (typeof(cmd) == "string" || cmd instanceof String) ? cmd : '|38|38|40|40|37|39|37|39|66|65|';
	kc.count = 0;
	kc.input = '|';
	kc.up = function(event) {
		event = event ? event : window.event;
		if (kc.cmd.indexOf('|' + event.keyCode + '|') == -1) {
			kc.input = '|';
			return;
		}
		kc.input += event.keyCode + '|';
		if (kc.input.indexOf(kc.cmd) != -1) {
			kc.func(kc.count);
			kc.count++;
			kc.input = '|';
		}
	}
	if (document.attachEvent) {
		document.attachEvent('onkeyup', kc.up);
	} else if (document.addEventListener) {
		document.addEventListener('keyup', kc.up , false);
	}
}

konamicommand(function() {
  wrap.style.opacity = 1;
});