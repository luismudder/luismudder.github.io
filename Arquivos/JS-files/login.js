function mobile() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
   document.getElementById('css').href = 'Archives/CSS-files/login.mobile.css'
   console.log('mobile')
  }
 else {
   document.getElementById('css').href = 'Archives/CSS-files/login.css'
   console.log('pc')
  }
}
mobile()
