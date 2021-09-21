---
title: How to do things in Learning to Burn
layout: basic
functionality: quiz
---

## Basic formatting

- _Italic_: use an underscore "_" around the text - e.g. `_Emphasise Me_`  --> _Emphasise Me_
- _Bold_: use _two_ underscores "_ _" around the text - e.g. `__Bold Me__` --> __Bold Me__
- _Comment_: use a backtick (the one above the ~ sign) around the text - e.g. `` `MyComment` `` -->  `MyComment`
- _Highlight box_: Start a new line with a greater than sign ">". e.g.  
`> Put this in a box`

> Put this in a box

- _You can double this up to get a increased effect_

>> Put this in a big box!


## Headings

Start a line with a number of hash signs.  i.e. one hash for h1, two hashes for h2, three for h3 etc.

e.g. `### my h3 heading` ->  
### my h3 heading

## Lists

For bullet points, **start** a line with a dash "-" or an asterisk "*".  
e.g. `- Point 1`
- Point 1
* A sentence that can be as long as you like. sadklfaskbecurcyaiwleurycbalweur ca;owye rcoawye r;oawy er;oawye r;oaw8ye ro;awy8er o;awey ro;aw8ye ro;aw8y ero;awe8yhf o;awe8hf o;aw8hef o;awh8fe o;awhef ;jash f;ashf;ouasefyagtf yawefiaywgefuk ygasukef gywe

For numbered lists start the line with _any_ number and a full stop (it will auto number).  
e.g. 
```
1. Apple
1. Banana
1. Orange
74. Monkey
```

1. Apple
1. Banana
1. Orange
74. Monkey

Lists can be "nested" using indentation.
```
- What is the capital of NZ?
    1. Auckland
    1. Wellington
    1. Paihia
- Another point.
```

- What is the capital of NZ?
    1. Auckland
    1. Wellington
    1. Paihia
- Another point.

## Links
Use Square brackets, then round brackets.
1. square: the text of the link
2. round: the target of the link

e.g.
- `[Click Here!](http://google.com)` --> [Click Here!](http://google.com)
- `[Go to the "Burn Plan" page in the "Plan" folder ](Plan/Burn Plan)` -->  [Go to the "Burn Plan" page in the "Plan" folder ](Plan/Burn Plan)

## Images
Similar to the links, but with an exclamation mark at the front

e.g. 
- `![The "alt" text goes here](assets/img/achievements/gold.png)` --> ![The "alt" text goes here](assets/img/achievements/gold.png)

## Videos
Youtube videos are "special" and are achieved by including a snippet of code.

- `{% raw %} {% include youtube id="Ip2o4vbAK3s" width="60" %} {% endraw %}`  -> {% include youtube id="Ip2o4vbAK3s" width="60" %}

P.S The _width_ setting is in % of screen width and is optional, and the _id_ setting is the id in the url of the video

## Quizzes

A quiz is a list of questions that includes a list of multi choice answers.

Note that it uses special "tags" in the form `{: XXX="yyy" }` to indicate:
- The name of the quiz (and that it is a quiz!)
- At the end of each set of answers:
  - The "name" of the question which must be unique within the quiz
  - The correct answer(s) to the question

```
{:name="My Quiz Name" class="quiz"}
1. What is the capital of NZ?
    1. (o) Auckland
    1. (o) Wellington
    1. (o) Paihia
    {:name="capital" answer="Wellington"}
1. How old am I? 
    1. (o) Older than you
    1. (o) How rude!
    1. (o) 21 again
    1. (o) All of the above
    {:name="age" answer="All of the above"}
```

{:name="My Quiz Name" class="quiz"}
1. What is the capital of NZ?
    1. (o) Auckland
    1. (o) Wellington
    1. (o) Paihia
    {:name="capital" answer="Wellington"}
1. How old am I? 
    1. (o) Older than you
    1. (o) How rude!
    1. (o) 21 again
    1. (o) All of the above
    {:name="age" answer="All of the above"}
