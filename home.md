---
title: Learning to Burn
description: Learning site for FIRE!
layout: basic
---

# Your personal start page

> Continue where you left off: [page](page){:id="lastPage"} at _time_{:id="lastPageAt"}


## Achievements

### Completed

- {% include achievement.html name="Starter" title="Made a start!  You've read your first page" rank="gold" %}
{:class="achievements"}

### Yet to achieve

- {% include achievement.html name="Prodigal Wanderer" title="You're back!  Return to the site after more than 3 months absence" rank="silver" %}
- {% include achievement.html name="Completionist" title="All done!  You've read every page on the site"  rank="silver" %}
{:class="achievements"}

## Completeness
{% for theme in site.data.themes %}
{% include pie.html theme=theme %}
{% endfor %}

## Make a schedule

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