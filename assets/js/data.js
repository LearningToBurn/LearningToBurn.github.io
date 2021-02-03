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

function loadAchievements(token){
  const api = GetData(token)
  const updateRow = function(root, line, suffix=""){
    var row = $(`#ach_${root} li`).first().clone()
    row.find("img").attr("title", line.description)
    row.find("i").text(line.name + suffix)
    $(`#ach_${root}`).append(row)
  }
  api("achievements", {}, data =>{
    data.forEach(line => {
      if (line.status.case==="NotStarted"){
        updateRow("notyet", line)
      }else if(line.status.case==="InProgress"){
        updateRow("inprogress", line, " (in progress)")
      }else if(line.status.case==="Completed"){
        updateRow("completed", line)
      }
    })
    $("#ach_completed li").first().remove()
    $("#ach_inprogress li").first().remove()
    $("#ach_notyet li").first().remove()
  })
}


function loadHomeData(token){
  loadLast(token)
  loadPies(token)
  loadAchievements(token)
}