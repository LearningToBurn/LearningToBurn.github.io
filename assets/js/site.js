
function authSuccess(token) {
  if(typeof visiting !== 'undefined') {
    visiting.makeVisit(token);
    visiting.loadVisited(token, $("body"));
  }
}