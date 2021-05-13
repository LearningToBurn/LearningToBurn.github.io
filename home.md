---
title: Learning to Burn
description: Learning site for FIRE!
layout: basic
---

# Your personal start page

> Continue where you left off: [page](page){:id="lastPage"} _time_{:id="lastPageAt"}


### Achievements

- {% include achievement.html name="Loading..." title="..." rank="gold" %}
{:class="achievements" id="ach_completed"}

- {% include achievement.html name="Loading..." title="..." rank="silver" %}
{:class="achievements" id="ach_inprogress"}

- {% include achievement.html name="Loading..." title="..." rank="bronze" %}
{:class="achievements" id="ach_notyet"}

### Completeness
{% for theme in site.data.themes %}
{% include pie.html theme=theme %}
{% endfor %}

### Make a schedule

Do you struggle with finding time to read?

Make a schedule and add it to your calendar!

- Days:
  - [x] Sun
  - [x] Mon
  - [x] Tue
  - [x] Wed
  - [x] Thu
  - [x] Fri
  - [x] Sat
- Time:
  - [__]
- [Import Schedule](javascript:alert("Not yet implemented"))