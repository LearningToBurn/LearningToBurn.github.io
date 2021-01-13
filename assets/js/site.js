---
---

function onLogin(token) {
  if(typeof visiting !== 'undefined') {
    visiting.LTB_API_KEY = `{{ site.learntrack.api_key }}`
    visiting.makeVisit(token);
    visiting.loadVisited(token, $("body"));
  }
}
googleAuthor.authSuccess = onLogin;