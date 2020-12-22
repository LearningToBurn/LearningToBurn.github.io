---
title: Learning to Burn
description: Learning site for FIRE!
layout: lesson
user_access: anon
---

## Get Started!

{% assign items_grouped = site.lessons | group_by: 'theme' %}
{% for group in items_grouped %}
### {{group.name}}
{% assign sorted = group.items | sort: 'module_order' %}
{% for lesson in sorted %}
1. [{{ lesson.module }} - {{ lesson.title }}]({{lesson.url}}){% endfor %}
{% endfor %}
