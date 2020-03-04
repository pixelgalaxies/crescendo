# Crescendo 
### Crescendo is a css library to help create grid layouts using the Flexible Box Layout Module or as you might know it, Flexbox. 
current version: 3
### Support
Crescendo was tested on all modern browsers: Google Chrome, Opera, Mozilla Firefox, Microsoft Edge, Safari.

### Ways to use:
https://cdn.jsdelivr.net/gh/pixelgalaxies/crescendo/crescendo.css
https://cdn.jsdelivr.net/gh/pixelgalaxies/crescendo/crescendo.js

You can download it [**here**](https://github.com/pixelgalaxies/crescendo/raw/master/crescendo.zip).

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
>This class goes in the nav tag. It will make sure its width is 100% of available space. Or you can use the navbar-set for a fixed-width navbar. 
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
>This class goes in the img or icon tag you want to use as your menu icon. It disappears on larger screens and will only appear on mobile devices. 
```
<img class=".nav-icon--menu" src="#">
```

#### .nav-icon--close
>This class goes in the img or icon tag you want to use as your close icon. It disappears when you press it and will only appear when the nav-icon--menu img is pressed.
```
<img class="nav-icon--close" src="#">
```

#### .nav-list
>This class belongs in a ul that is nested in the navbar. It will hold your links and will disappear at smaller screens but will slide open when the menu icon is pressed. 
```
<div class="nav-links></div>
```

#### Example:
```
<header>
	<nav class="navbar">
		<div class="nav-icon">
			<i class="im im-menu nav-icon--menu"></i>
			<i class="im im-x-mark nav-icon--close"></i>
		</div>
		<a href="#" class="nav-logo"><img src="#" alt="" /></a>
		<ul class="nav-list">
			<li class="nav-item"><a href="#">Link 1</a></li>
			<li class="nav-item"><a href="#">Link 2</a></li>
			<li class="nav-item"><a href="#">Link 3</a></li>
		</ul>
	</nav>
</header>
```

### Grid classes:
#### .grid-container (not necessary, but recommended for ease of styling entire grid, including the "outside" of it)
>This is the div that holds your grids. The grid-container is where you could apply background images or color. 
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


#### Example:
>The following code will have the columns flex 100% at xs and sm screen sizes and then split 50/50 starting at md screen sizes.
```
<div class="grid">
  <div class="row">
    <div class="colm-6"></div>
    <div class="colm-6"></div>
  </div>
</div>
```

### Utility Classes:
#### .hero
>This class when given to a div creates a hero section spanning the entire viewport horizontally. The hero flexes its items into a column. Combine with other utility classes to arrange content.

```
<div class="hero true-center">
	<h1>A Heading</h1>
	<p>Some descriptive text.</p>
</div>
```

#### .true-center
>Centers items vertically and horizontally.
```
<div class="true-center"></div>
```

#### .hcenter
>Aligns content to the center of a column horizontally.
```
<div class="col-sm-6 center"></div>
```

#### .vcenter
>Aligns content to the center of a column vertically.
```
<div class="col-sm-6 venter"></div>
```

#### .right 
>Aligns content to the right of a column and "down" in a row.
```
<div class="col-sm-6 right"></div>
```

#### .left
>Aligns content to the left of a column and "up" in a row.
```
<div class="col-sm-6 left"></div>
```

#### .start 
>Shifts content to the start of their flex box. Determined by flex-direction.
```
<div class="col-sm-6 start"></div>
```

#### .end
>Shifts content to the end of their flex box. Determined by flex-direction.
```
<div class="col-sm-6 end"></div>
```

### Components
#### The Topple
>The topple is basically a toggle/ collapse component. The data-toggle attribute of the upper element, should always math the id of the lower element. Each element should have the .topple class or the .toTopple class. The classes that show and hide the lower element are .tidy (pulled up) and .spilled (pulled down). 
```
<div class="row topple" data-topple="topple-example">
	<div class="col-12 true-center">
		<div class="topple-title">
			<span> Example Topple <i class="im im-angle-down"></i></span>
		</div>
	</div>
</div>
				
<div class="row toTopple tidy" id="topple-example">
	<div class="col-12">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</div>
</div>
```


