---
---

function onLogin(token) {
  if( window.location.pathname === '/') {
    console.log("Logged in at root - going to home")
    window.location = "/home"
  }
  if(typeof visiting !== 'undefined') {
    visiting.LTB_API_KEY = `{{ site.learntrack.api_key }}`
    visiting.makeVisit(token);
    visiting.loadVisited(token, $("body"));
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
