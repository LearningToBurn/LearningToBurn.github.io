---
title: Home
description: Learning site for FIRE!
layout: basic
brand: scion
---

# Your personal start page

> Continue where you left off: [page](page){:id="lastPage"} _time_{:id="lastPageAt"}
> ![Where you left off](/assets/img/pointing.png){:class="rightbottom"}


### Achievements

- {% include achievement.html name="Loading..." title="..." rank="gold" %}
{:class="achievements" id="ach_completed"}

- {% include achievement.html name="Loading..." title="..." rank="silver" %}
{:class="achievements" id="ach_inprogress"}

- {% include achievement.html name="Loading..." title="..." rank="bronze" %}
{:class="achievements" id="ach_notyet"}

![Celebrate. Background photo created by asierromero - www.freepik.com](/assets/img/celebrating.png){:class="leftbottom"}

{:data-bg="/assets/img/checked.png"}
### Completeness
{% for theme in site.data.themes %}
{% include pie.html theme=theme %}
{% endfor %}

### Make a schedule

Do you struggle with finding time to read?

Make a schedule and add it to your calendar!

{:id="calmaker" class="naked"}
- Days:
  - <input value="SU" type="checkbox" name="days"/> Sun
  - <input value="MO" type="checkbox" name="days"/> Mon
  - <input value="TU" type="checkbox" name="days"/> Tue
  - <input value="WE" type="checkbox" name="days"/> Wed
  - <input value="TH" type="checkbox" name="days"/> Thu
  - <input value="FR" type="checkbox" name="days"/> Fri
  - <input value="SA" type="checkbox" name="days"/> Sat
- Time:
  - <input name="timeH" min="0" max="23" placeholder="HH" value="12" type="number"/> : <input name="timeM" min="0" max="59"  placeholder="MM" value="00" type="number"/>
- [Create Schedule for your calendar](javascript:cal.showCal( $("#calmaker").wrap("<form></form>").parent().serializeArray() ))
