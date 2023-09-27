

var isTouchScreen = 'createTouch' in document || screen.width <= 699 ||
    navigator.userAgent.match(/(iPhone|iPod|iPad)/) || navigator.userAgent.match(/BlackBerry/) ||
    navigator.userAgent.match(/Android/);

console.log(isTouchScreen);
