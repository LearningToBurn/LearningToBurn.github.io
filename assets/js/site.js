---
---

function onLogin(token) {
  if( window.location.pathname === '/') {
    console.log("Logged in at root - going to home")
    window.location = "/home"
  }
  if(typeof visiting !== 'undefined') {
    visiting.LTB_API_KEY = `{{ site.learntrack.api_key }}`
    visiting.onVisit = onVisit;
    visiting.makeVisit(token);
    visiting.loadVisited(token, $("body"));
  }
  if(typeof learntrack_quiz !== 'undefined') {
    learntrack_quiz.api_key = `{{ site.learntrack.api_key }}`
    learntrack_quiz.userJwt = token
  }
  if( window.location.pathname === '/home' || window.location.pathname === '/home/') {
    loadHomeData(token)
  }
}
function onAnon() {
  if( window.location.pathname !== '/') {
    console.log("Not logged in - going to root")
    window.location = "/"
  }
}
googleAuthor.authSuccess = onLogin;
googleAuthor.authNone = onAnon;

function toast(msg){
  $('#toast_msg').html(msg)
  $('.toast').addClass('toasting')
  window.setTimeout(() => $('.toast').removeClass('toasting'), 3000)
}


function onVisit(data) {
  data
    .filter(x => x.case === 'Achievement')
    .forEach(visit => {
      toast(`<h3>New Achievement!</h3> <ul class='achievements'><li><img src='{{site.baseurl}}/assets/img/achievements/gold.png'/> ${visit.fields[0]}</li><ul>`)
    })
}