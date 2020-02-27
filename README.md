# Crescendo 
### Crescendo is a css library to help create grid layouts using the Flexible Box Layout Module or as you might know it, Flexbox. 
current version: 3
### Support
Crescendo was tested on all modern browsers: Google Chrome, Opera, Mozilla Firefox, Microsoft Edge, Safari.

### Installation:
To use Crescendo, just paste these snippets into your head tags:
```
<link type="text/css" rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/pg-crescendo/crescendo.js">
<link type="text/css" rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/pg-crescendo/crescendo-mini.css">

<link type="text/css" rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/pg-crescendo/crescendo.css">
```
Or you can download it [**here**](https://github.com/pixelgalaxies/crescendo/raw/master/crescendo.zip).

#### Changes in version 3
-Removed all styling on elements

-Rebuilt with Sass

-Removed some utility classes

-Cleaned up SCSS in general

-New class names!

### Resets and Presets:
>Complete reset and preset CSS styles:
```
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
html,
body {
	width: 100%;
	height: 100%;
}

img {
	max-height: 100%;
	max-width: 100%;
}
```


### Navigation classes:
#### .navbar
>This class goes in the nav tag. It will make sure its width is 100% of available space.
```
<nav class="navbar"></nav>
```

#### .navbar-set
>This class goes in the nav tag. It will make sure its max-width doesn't exceed 992px or 1200px depending on the size of the window.
```
<nav class="navbar-set"></nav>
```

#### .nav-logo
>This class belongs in an achor tag that will contain your logo.
```
<a class="nav-logo href="#"><img src=""></a>
```
	    
#### .nav-icon
>This class belongs in the div that is nested in the nav-bar div. It will hold your mobile icons for the menu and the close buttons. 
```
<div class="nav-icon></div>
```    

#### .nav-icon--menu
>This class goes in the img tag you want to use as your menu icon. It disappears on larger screens and will only appear on mobile devices. Be sure to include the onclick attribute for the drop down functionality.
```
<img class="menu-icon" src="#" onclick="menuOpen()">
```

#### .close-icon
>This class goes in the img tag you want to use as your close icon. It disappears when you press it and will only appear when the menu-icon img is pressed.
```
<img class="close-icon" src="#" onclick="menuClose()">
```

#### .nav-list
>This class belongs in a ul that is nested in the navbar. It will hold your links and will disappear at smaller screens but will slide open when the menu icon is pressed. 
```
<div class="nav-links></div>
```

#### Example:
```
<header>
	<nav class="navbar-set">
		<div class="nav-icon">
			<i class="im im-menu nav-icon--menu"></i>
			<i class="im im-x-mark nav-icon--close"></i>
		</div>
		<a href="#" class="nav-logo"><img src="/images/logo.png" alt="" /></a>
		<ul class="nav-list">
			<li class="nav-item"><a href="#">About</a></li>
			<li class="nav-item"><a href="#">Features</a></li>
			<li class="nav-item"><a href="#">Components</a></li>
			<li class="nav-item"><a href="https://github.com/pixelgalaxies/crescendo">Documentation</a></li>
		</ul>
	</nav>
</header>
```

### Grid classes:
#### .grid-container (not necessary, but recommended for ease of styling entire grid, including the "outside" of it)
>This is the div that holds your grids. The grid-container is where you apply background images or color. 
```
<div class="grid-container"></div>
```

#### .grid
>Width is set to 100% of the viewport. The grid flexes in a column with the content starting in the default position(flex-start).

```
<div class="grid"></div>
```

#### .grid-set
>This is the fixed-width grid. It will flex the entire viewport until it reaches a width of 992px or 1200px depending on the screen size, then it will stop expanding. The grid flexes in a column with the content starting in the default position(flex-start). 
```
<div class="grid-set"></div>
```

#### .row
>Flex-basis is set to 100% to span the entire width of available space. The row houses your column divs. 
```
<div class="row"></div>
```

#### .col-12
>The col-12 class will span 100% of the row at all viewport sizes. It replaces the need for col-\*\*-12 classes.
```
<div class="col-12"></div>
```

#### .col-xs-\*, .col-sm-\*, .col-md-\*, .col-lg-\*, .col-xl-\*
>Syntax: col-sm-4, col-md-6, col-lg-3, etc. As long as the numbers add up to twelve, the grid will work. Columns flex downward into a column. The xs, sm, md, lg, and xl indicate the behavior at different sizes. If you want a column to have the same behavior at all screen sizes, just initialize it with col-xs-\* and it will inherit this behavior all the way up to desktop screens. 
```
<div class="col-xs-6"></div>
<div class="col-xs-6"></div>
```


#### All together now.
>The following code will have the columns flex 100% at small screen sizes and then split 50/50 starting at medium screen sizes.
```
<div class="grid">
  <div class="row">
    <div class="cols-12 colm-6"></div>
    <div class="cols-12 colm-6"></div>
  </div>
</div>
```

### Button Classes:
#### .btn
>Use this class on anything you want to look like a button. It centers text and adds a padding of 10px. Also, when clicked, the item fades a teeny tiny bit to resemble a click. Crescendo leaves the font-size (*remember Crescendo defaults font-size to 10px*) and width up to the user to specify. 
```
<a href="#" class="btn">Anchor</a>
<button class="btn">Button</button>
```
#### .btn-primary, .btn-success, .btn-warning, .btn-error
>Crescendo comes with four buttons everyone should be familiar with. They feature familiar but more muted, less vibrant colors. These classes with have round edges and set width of 120px;

### Utility Classes:
#### .inner-between
>Use this class in a div to flex content horizontally inside of a column. It’s like a row inside of a column specifically for content you may want to push apart horizontally, instead of making a whole new grid.
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

#### .inner-around
>> Use this class in a div to flex content horizontally inside of a column. It’s like a row inside of a column for content you may want to distribute equally across the span of a column, instead of making a whole new grid. 
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

#### .jumbo
>This class when given to a div creates a jumbotron spanning the entire viewport horizontally. The jumbotron flexes it’s items into a column. Combine with other utility classes to arrange content.
>> h1 tags and p tags have a larger font-size in a jumbotron div and will adjust depending on the size of the viewport. 
```
<div class="jumbo"></div>
```

#### .true-center
>Centers items vertically and horizontally.
```
<div class="jumbo true-center"></div>
```

#### .center
>Aligns content to the center of a column.
```
<div class="cols-10 center"></div>
```

#### .right 
>Aligns content to the right of a column and "down" in a row.
```
<div class="cols-10 right"></div>
```

#### .left
>Aligns content to the left of a column and "up" in a row.
```
<div class="cols-10 left"></div>
```

#### .just-center
>Shifts content to the center of their flex box. Determined by flex-direction.
```
<div class="cols-10 just-center"></div>
```

#### .start 
>Shifts content to the start of their flex box. Determined by flex-direction.
```
<div class="cols-10 start"></div>
```

#### .end
>Shifts content to the end of their flex box. Determined by flex-direction.
```
<div class="cols-10 end"></div>
```

#### .round
>Gives the rounded edges (25px).
```
<img src=#" class="round">
```

#### .round
>Items becomes circular (50%).
```
<img src=#" class="circle">
```


###Headers:

>#### Headers take on alternate sizes in Crescendo. 

Smallest screens:
```
h1 { font-size: 2.6rem;}
h2 { font-size: 2.4rem; }
h3 { font-size: 2.2rem; }
h4 { font-size: 2rem; }
h5 { font-size: 1.8rem; }
h6 { font-size: 1.6rem; }
```

Medium and Large screens:
```
h1 { font-size: 4rem;}
h2 { font-size: 3.5rem; }
h3 { font-size: 3rem; }
h4 { font-size: 2.5rem; }
h5 { font-size: 2rem; }
h6 { font-size: 1.5rem; }
```
