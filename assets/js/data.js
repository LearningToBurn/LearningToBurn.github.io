---
---


function GetData(token){
  return function(path, data, handler){
    $.ajax({
      url: `{{ site.learntrack.url }}/api/${path}`,
      headers: { 
        "Authorization": `Bearer ${token}`,
        "X-API-KEY": `{{ site.learntrack.api_key }}`
      },
      method: "GET",
      data: data,
    })
    .done(handler)
    // .fail(failed);
  }
}

function loadPies(token){
  const api = GetData(token)
  api("countByRoot", {}, data =>{
    data.forEach(thm => {
      if( thm.label in charts){
        if( charts[thm.label].data.values[0] <= thm.value ){ //because the page crashes if we have a zero or negative number!
          charts[thm.label].data = {
            labels: [ "complete" ],
            values: [ thm.value ]
          }
          charts[thm.label].colors = ['green']
        }else{
          charts[thm.label].data = {
            labels: ["unread", "complete" ],
            values: [ charts[thm.label].data.values[0] - thm.value , thm.value]
          }
        }
        charts[thm.label].roughSvg.replaceChildren()
        charts[thm.label].setTitle(thm.label)
        charts[thm.label].drawFromObject()
      }
    })
  })
}

function loadLast(token){
  const api = GetData(token)
  api("lastVisited", {}, data =>{
    $('#lastPage').text(data.src.replaceAll("+", " "))
    $('#lastPage').attr("href", data.src.replaceAll("+", " "))
    $('#lastPageAt').text(Date(data.at))
  })
}

function loadHomeData(token){
  loadLast(token)
  loadPies(token)
}