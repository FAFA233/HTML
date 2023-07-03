/*牛魔*/
//别玩舰c了
// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('我最喜欢舰娘響了。');
// } else {
//   alert('但是響才是我的最爱呀……');
// }
// document.querySelector("h5").addEventListener("click", function () {
//     alert("雪風様なのだ！！~");
//   });
  let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/233.png') {
      myImage.setAttribute('src', 'images/LFY4.png');
    } else {
      myImage.setAttribute('src', 'images/233.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = '用户：' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '用户：' + storedName;
  }/*保持登录状态*/
  myButton.onclick = function() {
    setUserName();
 }
 var music = document.getElementById('music');
 var PlayButton = document.getElementById('play-button');
 PlayButton.addEventListener('click', function() {
    if (music.paused){
        music.play();
        PlayButton.innerHTML = '雪風様なのだ！！';
    }
    else{
        music.pause();
        PlayButton.innerHTML = '雪風様なのだ！！';
    }
 });