var wrap = document.getElementById('wrap');
var y; // 縦方向の加速度を取得するための変数
var size = 5; // 振ったと認識するサイズ
var shakeFlag = true; // trueであればcountをプラス、falseであればマイナスにするためのフラグ
var count = 0; // 振ったらこれがたまる。たまった量に応じて何かする


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