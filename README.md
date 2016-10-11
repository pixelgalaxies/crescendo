# Crescendo
### Crescendo is a mobile-first grid framework built with the Flexible Box Layout Module or as you might know it, Flexbox. Besides the grid, Crescendo features a few utility/ styling classes for things like jumbotrons and ghost buttons. 

### Support
Crescendo was built in Google Chrome. However, it will work in Firefox, Edge, and Opera as well. Safari does not support the functionionality used in Crescendo.

To use Crescendo, just paste this snippet into your head tags:

```
<link type="text/css" rel="stylesheet" href="https://pixelgalaxies.github.io/crescendo/crescendo.css">
```

A little demo of Crescendo in action: https://pixelgalaxies.github.io/crescendo/

### Navigation classes:

>#### .nav-wrapper
>>This class goes in the nav tag or in a div tag. It will flex its children column-wise at mobile sizes and then into a row starting at 768px. Also at 768px, flex items are automatically separated equally across the navigation. 

```
<nav class="nav-wrapper"></nav>
```

>#### .nav-fixed
>>This class will make your navigation fixed to the top of the screen, but only at screen sizes of 768px or larger.

```
<nav class="nav wrapper nav-fixed"></nav>
```

>#### .nav-list
>>This class goes in unordered list tags that are placed in the navigation bar. Like it’s wrapper, nav-list will flex its children in a column at mobile sizes and then into a row starting at screen sizes 768px wide.

```
<ul class="nav-list></ul>
```

>#### .nav-item
>>This class goes in the children of list item tags. Usually anchors.

```
<li><a href="#" class="nav-item">Link</a></li>
```

### Grid classes:

>#### .grid
>> Width is set to 100% of the viewport. The grid flexes in a column with the content starting in the default position(flex-start).

```
<div class="grid"></div>
```

>#### .row
>> Flex-basis is set to 100% to span the entire width of the grid. The row class div houses your column divs. 

```
<div class="grid">
  <div class="row"></div>
</div>
```

>#### .col-*
>> Class syntax: col-1, col-9, col-10, etc. As long as the numbers add up to ten, the grid will work. If for some reason you put too few columns in a row, the columns will flex themselves horizontally to fill up the row. If you put too many, it will wrap into a new line, and flex the width of the viewport. Columns flex downward into a, you guessed it, column.

```
<div class="grid">
  <div class="row">
    <div class="col-5"></div>
    <div class="col-5"></div>
  </div>
</div>
```

>> As Crescendo was designed mobile-first, the columns’ widths will get bigger based on screen size. 

>> Small Screens (300px):
>> .col-* (all columns) will flex 100% of the viewport.

>> Medium Screens (768px):
>> .col-10 will flex 100%

>> .col-9 to .col-1 and .col-fourth will flex 50%

>> .col-third and .col-sixth will flex ~33%

>> Large Screens (1100px):

>> .col-1will flex 10%

>> .col-2 will flex 20%

>> .col-3 will flex 30%

>> .col-4 will flex 40%

>> .col-5 will flex 50%

>> .col-6 will flex 60%

>> .col-7 will flex 70%

>> .col-8 will flex 80%

>> .col-9 will flex 90%

>> .col-10 will flex 100% 

>> .col-third will flex 1/3 or ~33%

>> .col-fourth will flex 1/4 or 25%

>> .col-sixth will flex 1/6 or ~16%


>#### .inner-between
>> Use this class in a div to flex content horizontally inside of a column. It’s like a row inside of a column specifically for content you may want to push apart horizontally, instead of making a whole new grid. Uses the justify-content: space-between css rule.

```
<div class="grid">
  <div class="row">
    <div class="col-5">
      <div class="inner-between"></div>
    </div>
    <div class="col-5">
      <div class="inner-between"></div>
    </div>
  </div>
</div>
```

>#### .inner-around
>> Use this class in a div to flex content horizontally inside of a column. It’s like a row inside of a column for content you may want to distribute equally across the span of a column, instead of making a whole new grid. Uses the justify-content: space-around css rule.

```
<div class="grid">
  <div class="row">
    <div class="col-5">
      <div class="inner-around"></div>
    </div>
    <div class="col-5">
      <div class="inner-around"></div>
    </div>
  </div>
</div>
```

### Misc. Classes:

>#### .btn
>>This class can be used on button or anchor tags to give it Crescendo’s button styling and behavior. Padding is set to .5 rem.

```
<a href="#" class="btn">Link</a>
```

>#### .ghost-btn 
>> This class will style a button, input[type=‘button’], or anchor tag with a white border, white text, and take away the default background color.

```
<a href="#" class="btn ghost-btn">Link</a>
```

>#### .ghost-dark-btn
>> This class will style a button or anchor tag with a black border, black text, and take away the default background color.

```
<a href="#" class="btn ghost-dark-btn">Link</a>
```

>#### .default-btn 
>> This class will style a button or anchor tag light gray background color, a dark gray border, and darker gray text(almost black).

```
<a href="#" class="btn default-btn">Link</a>
```

>#### .jumbo
>> This class when used in a div creates a jumbotron spanning the entire viewport. The jumbotron flexes it’s items into a column.

```
<div class="jumbo"></div>
```

>> h1 tags and p tags are sized to be bigger in a jumbotron div and will adjust depending on the size of the viewport. 

>> Additional styling of the jumbotron can of course be applied by the user. 


>#### .true-center
>>Centers items vertically and horizontally.

```
<div class="jumbo true-center"></div>
```

>#### .center
>> Aligns content to the center of a column.

```
<div class="col-10 center"></div>
```

>#### .right 
>> Aligns content to the right of a column.

```
<div class="col-10 right"></div>
```

>#### .left
>> Aligns content to the left of a column.

```
<div class="col-10 left"></div>
```

>#### .just-center
>> Shifts content to the center of their flex box. Determined by flex-direction.

```
<div class="col-10 just-center"></div>
```

>#### .start 
>> Shifts content to the start of their flex box. Determined by flex-direction.

```
<div class="col-10 start"></div>
```

>#### .end
>> Shifts content to the end of their flex box. Determined by flex-direction.

```
<div class="col-10 end"></div>
```


###Headers:

>#### Headers take on alternate sizes in Crescendo. 

>> h1: 2.5rem

>> h2: 2.3rem

>> h3: 2rem

>> h4: 1.8rem

>> h5: 1.6rem

>> h6: 1.4rem
