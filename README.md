# Crescendo 
### Crescendo is a mobile-first grid framework built with the Flexible Box Layout Module or as you might know it, Flexbox. 

### Support
Crescendo was built in Google Chrome. However, it will work in all modern browsers (Opera, Mozilla Firefox, Microsoft Edge, Safari).

### Install:
To use Crescendo, just paste these snippets into your head tags:
```
<link type="text/css" rel="stylesheet" href="https://rawcdn.githack.com/pixelgalaxies/crescendo/master/crescendo.css">
<link type="text/css" rel="stylesheet" href="https://rawcdn.githack.com/pixelgalaxies/crescendo/master/crescendo.js">

<link type="text/css" rel="stylesheet" href="https://rawcdn.githack.com/pixelgalaxies/crescendo/master/crescendo-min.css">
```
Or you can download it [**here**](https://github.com/pixelgalaxies/crescendo/raw/master/crescendo.zip).

#### Changes in 2.1
-(finally)Added a minified CSS file
-Added the nav-fixed class
-Added the nav-container-fw class
-Added the grid-container class
-Added a favicon
-Added documentation link
-Removed default font-size on btn class
-Changed width on grid-fw from 1000px to 960px
-Cleaned up CSS

### Resets and Presets:
Key Points:
-font-size is defaulted to 10px
-removes the outline of active items when using the keyboard to navigate pages
-removes the underlining of anchor tags
```
*, 
*:before, 
*:after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-size: 10px;
}

button, input[type='button'], input[type='submit'], a { outline: none;}

body, html {
	height: 100%;
}

img {
	height: auto;
	max-width: 100%;
}

a {
	text-decoration: none;
}
```


### Navigation classes:
#### .nav
>This class goes in the nav tag. It will make sure its width is 100% of available space.
```
<nav class="nav"></nav>
```

#### .nav-absolute
>This class goes in the nav tag. It will make sure its width is 100% of available space. Additionally, it sets its position as absolute so it will overlay anything at the top of the screen.
```
<nav class="nav-absolute"></nav>
```

#### .nav-fixed
>This class goes in the nav tag. It will make sure its width is 100% of available space. Additionally, it sets its position to fixed so it will stay fixed to the top of your screen.
```
<nav class="nav-fixed"></nav>
```

#### .nav-container
>This class goes in a div tag that is nested in your nav. It will hold all of your content. 
>*Note this is a flexed div. It will flex its contents in a row and put a space between them.
```
<div class="nav-container"></div>
```

#### .nav-container-fw
>This class goes in a div tag that is nested in your nav. It will hold all of your content. It will have a maximum width of 960px;
>*Note this is a flexed div. It will flex its contents in a row and put a space between them.*
```
<div class="nav-container-fw"></div>
```

#### .nav-links
>This class belongs in a div that is nested in the nav-container. It will hold your links and will disappear at smaller screens.
```
<div class="nav-links></div>
```

#### .menu-icon
>This class goes in the img tag you want to use as your menu icon. It disappears on larger screens and will only appear on mobile devices. Be sure to include the onclick attribute for the drop down functionality.
```
<img class="menu-icon" src="#" onclick="menuDrop()">
```

#### .close-icon
>This class goes in the img tag you want to use as your close icon. It disappears when you press it and will only appear when the menu-icon img is pressed.
```
<img class="close-icon" src="#" onclick="menuClose()">
```

#### .dropdown
>This class goes in a div inside the nav but outside of the nav container. This is because of positioning issues when nav-absolute is used. 
```
<div class="dropdown">
  <ul>
    <li><a href="#" onclick="menuClose()"></a></li>
    <li><a href="#" onclick="menuClose()"></a></li>
    <li><a href="#" onclick="menuClose()"></a></li>
  </ul>
</div>
```

#### All together now.
```
<nav class="nav-absolute">
		<div class="nav-container">
			<div class="nav-links">
				<ul>
					<li><a href="#"></a></li>
					<li><a href="#"></a></li>
					<li><a href="#"></a></li>
				</ul>
			</div>
			<img class="menu-icon" src="#" onclick="menuDrop()">
			<img class="close-icon" src="#" onclick="menuClose()">
		</div>
		<div class="dropdown">
			<ul>
				<li><a href="#" onclick="menuClose()"></a></li>
				<li><a href="#" onclick="menuClose()"></a></li>
				<li><a href="#" onclick="menuClose()"></a></li>
			</ul>
		</div>
	</nav>
```

### Grid classes:
#### .grid-container
>This is the div that holds your grids. It has a padding on top and bottom of 35px. The grid-container is where you apply background images or color. 
```
<div class="grid-container"></div>
```

#### .grid
>Width is set to 100% of the viewport. The grid flexes in a column with the content starting in the default position(flex-start).

```
<div class="grid"></div>
```

#### .grid-fw
>This is the fixed-width grid. It will flex the entire viewport until it reaches a width of 960px, then it will stop expanding. The grid flexes in a column with the content starting in the default position(flex-start). 
```
<div class="grid-fw"></div>
```

#### .row
>Flex-basis is set to 100% to span the entire width of available space. The row class div houses your column divs. 
```
<div class="row"></div>
```

#### .cols-\* .colm-\* .coll-\*
>Syntax: cols-12, colm-6, coll-3, etc. As long as the numbers add up to twelve, the grid will work. Columns flex downward into a column. The s, m, and l before the dashes indicate the behavior at different sizes. If you want a column to have the same behavior at all screen sizes, just initialize it with cols-\* and it will inherit this behavior all the way up to desktop screens. Just remember, if you want multiple behaviors, all col\*-\* need to add up to twelve in their respective rows.
```
<div class="cols-12"></div>
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
