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
    $(".pageContent h1").html($(".pageContent h1").html().replace("Your", `${googleAuthor.googleUserName}'s`))
    loadHomeData(token)
  }
}
function onAnon() {
  const isAnonPage = document.getElementsByClassName('pageBack')[0].classList.contains('ua_anon')
  if( !isAnonPage) {
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

$(function(){
  $('.pageContent h3, .pageContent h1').each(function(i, h3){
    const sect = $(h3).nextUntil('h3').addBack().wrapAll(`<section class="section_${ i % 4 }"></section>`);
    [...h3.attributes]
      .filter(x => x.nodeName !== "id")
      .map( x => x.nodeName === "data-bg" ? {"nodeName": "style", "nodeValue": `background-image: url('${x.nodeValue}');`} : x)
      .forEach( attr => {
        const val = h3.parentElement.getAttribute(attr.nodeName) ? h3.parentElement.getAttribute(attr.nodeName) + " " + attr.nodeValue: attr.nodeValue;
        h3.parentElement.setAttribute(attr.nodeName, val) 
      });
    $(h3).parent().addClass(h3.classList)
  })
});

const cal = {
  weekdays: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
  groupMap: (groupKey, mapKey) => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const key = obj[groupKey]
      const value = obj[mapKey]
      objectsByKeyValue[key] = (objectsByKeyValue[key] || []).concat(value)
      return objectsByKeyValue
    }, 
  {}),

  showCal: (xx) => {
    const data = cal.groupMap('name', 'value')(xx)
    console.log(data)
    const now = new Date()
    const start = dayjs().hour(data.timeH[0]).minute(data.timeM[0]).second(0).day(cal.weekdays.indexOf(data.days[0]))
    const end = start.add(30, 'minute')
    const ical = (
      `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SCION RESEARCH//SCION RESEARCH 0.0//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:Learn to Burn!
UID:IK8WXSUMJ428FKOBU5KS72C4
SEQUENCE:1
STATUS:CONFIRMED
CLASS:PUBLIC
TRANSP:TRANSPARENT
DTSTART:${start.format("YYYYMMDDTHHmmss")}
DTSEND:${end.format("YYYYMMDDTHHmmss")}
DTSTAMP:${dayjs().format("YYYYMMDDTHHmmss")}
LAST-MODIFIED:${dayjs().format("YYYYMMDDTHHmmss")}
DESCRIPTION:Learn to burn
RRULE:FREQ=WEEKLY;BYDAY=${data.days.join(",")}
LOCATION:
URL:https://learningtoburn.nz
END:VEVENT
END:VCALENDAR`
    )
    cal.download("learningtoburn.ics", ical)
  },

  download: (filename, text) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/calendar;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
}