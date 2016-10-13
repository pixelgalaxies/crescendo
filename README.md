# Crescendo
### Crescendo is a mobile-first grid framework built with the Flexible Box Layout Module or as you might know it, Flexbox. Besides the grid, Crescendo features a few utility/ styling classes for things like jumbotrons and ghost buttons. 

### Support
Crescendo was built in Google Chrome. However, it will work in Firefox, Edge, and Opera as well. Safari does not support the functionality used in Crescendo.

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

>#### .cols-\* .colm-\* .coll-\*
>> Class syntax: cols-1, colm-9, coll-10, etc. As long as the numbers add up to twelve, the grid will work. Columns flex downward into a, you guessed it, column. The s, m, and l before the dashes indicate the behavior at different sizes. If you want a column to have the same behavior at all screen sizes, just initialize it with cols-\* and it will inherit this behavior all the way up to desktop screens. Just remember, if you want multiple behaviors, all col\*-\* need to add up to twelve in their respective rows.

>> The following code will have the columns flex 100% at small screen sizes and then split 50/50 starting at medium screen sizes.

```
<div class="grid">
  <div class="row">
    <div class="cols-12 colm-6"></div>
    <div class="cols-12 colm-6"></div>
  </div>
</div>
```
>> \*note that all columns have a right and left margin of 0.5%

>> .col\*-1 will flex 7.33%

>> .col\*-2 will flex 15.66%

>> .col\*-3 will flex 24%

>> .col\*-4 will flex 32.33%

>> .col\*-5 will flex 40.66%

>> .col\*-6 will flex 49%

>> .col\*-7 will flex 57.33%

>> .col\*-8 will flex 65.66%

>> .col\*-9 will flex 74%

>> .col\*-10 will flex 82.33% 

>> .col\*-11 will flex 90.66%

>> .col\*-12 will flex 99%



>#### .inner-between
>> Use this class in a div to flex content horizontally inside of a column. It’s like a row inside of a column specifically for content you may want to push apart horizontally, instead of making a whole new grid. Uses the justify-content: space-between css rule.

```
<div class="grid">
  <div class="row">
    <div class="colm-6">
      <div class="inner-between"></div>
    </div>
    <div class="colm-6">
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
    <div class="colm-6">
      <div class="inner-around"></div>
    </div>
    <div class="colm-6">
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
<div class="cols-10 center"></div>
```

>#### .right 
>> Aligns content to the right of a column.

```
<div class="cols-10 right"></div>
```

>#### .left
>> Aligns content to the left of a column.

```
<div class="cols-10 left"></div>
```

>#### .just-center
>> Shifts content to the center of their flex box. Determined by flex-direction.

```
<div class="cols-10 just-center"></div>
```

>#### .start 
>> Shifts content to the start of their flex box. Determined by flex-direction.

```
<div class="cols-10 start"></div>
```

>#### .end
>> Shifts content to the end of their flex box. Determined by flex-direction.

```
<div class="cols-10 end"></div>
```


###Headers:

>#### Headers take on alternate sizes in Crescendo. 

>> h1: 2.5rem

>> h2: 2.3rem

>> h3: 2rem

>> h4: 1.8rem

>> h5: 1.6rem

>> h6: 1.4rem
