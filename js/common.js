console.log('현재 브라우저 해상도는 ' + screen.width + ' x ' + screen.height + ' 입니다.');

if(screen.width > 770) {
  var body = document.getElementsByTagName('body');
  // console.log(body);

  for (var i=0; i<body.length; i++) {
    body[i].style.display = 'none'; 
  };

  alert('모바일용 화면입니다. 작은 브라우저에서 확인해주세요');
};