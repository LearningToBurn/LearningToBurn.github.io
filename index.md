---
title: Learning to Burn
description: Learning site for FIRE!
layout: lesson
user_access: anon
---

## Get Started!
{% for theme in site.data.themes %}
### {{theme}}
{% assign sorted = site.lessons | where: 'theme',theme | sort: 'module_order' %}
{% for lesson in sorted %}
1. [{{ lesson.title }}]({{lesson.url}}){% endfor %}
{% endfor %}

