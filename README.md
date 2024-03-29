# Crescendo

### Crescendo is a css library to help create grid layouts using the Flexible Box Layout Module or as you might know it, Flexbox.

current version: 3.1

### Support

Crescendo was tested on all modern browsers: Google Chrome, Opera, Mozilla Firefox, Microsoft Edge, Safari.

### Ways to use:

https://cdn.jsdelivr.net/gh/pixelgalaxies/crescendo@master/crescendo.css
https://cdn.jsdelivr.net/gh/pixelgalaxies/crescendo@master/crescendo.js

You can download it [**here**](https://github.com/pixelgalaxies/crescendo/raw/master/crescendo.zip).

#### Changes in version 3.1

-Cleaned up README

-New class names!

### Resets and Presets:

> Complete reset and preset CSS styles:

```
*, *:before, *:after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
```

### Navigation classes:

#### .navbar-fluid

> This class goes in the nav tag. It will make sure its width is 100% of available space. Or you can use the navbar class for a fixed-width navbar.

```
<nav class="navbar-fluid"></nav>
```

#### .navbar

> This class goes in the nav tag. It will make sure its max-width doesn't exceed 992px or 1200px depending on the size of the window.

```
<nav class="navbar"></nav>
```

#### .nav-logo

> This class belongs in an achor tag that will contain your logo.

```
<a class="nav-logo href="#"><img src=""></a>
```

#### .nav-icon

> This class belongs in the div that is nested in the nav-bar div. It will hold your the spans for the hamburger.

```
<div role="button" class="nav-icon">
	<span></span>
	<span></span>
	<span></span>
</div>
```

#### .nav-list

> This class belongs in a ul that is nested in the navbar. It will hold your links and will disappear at smaller screens but will slide open when the menu icon is pressed.

```
<div class="nav-links></div>
```

#### Example:

```
<header>
	<nav class="navbar">
		<div role="button" class="nav-icon">
			<span></span>
			<span></span>
			<span></span>
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

> This is the div that holds your grids. The grid-container is where you could apply background images or color.

```
<div class="grid-container"></div>
```

#### .grid-fluid

> Width is set to 100% of the viewport. The grid flexes in a column with the content starting in the default position(flex-start).

```
<div class="grid-fluid"></div>
```

#### .grid

> This is the fixed-width grid. It will flex the entire viewport until it reaches a width of 992px or 1200px depending on the screen size, then it will stop expanding. The grid flexes in a column with the content starting in the default position(flex-start).

```
<div class="grid"></div>
```

#### .row

> Flex-basis is set to 100% to span the entire width of available space. The row houses your column divs.

```
<div class="row"></div>
```

#### .col-12

> The col-12 class will span 100% of the row at all viewport sizes. It replaces the need for col-\*\*-12 classes.

```
<div class="col-12"></div>
```

#### The Equal-width Columns

> Syntax: col-xs, col-sm, col-md, col-lg, col-xl. Each column will take up the same width as it's siblings and will break to width: 100% at it's specified breakpoint. The col-xs columns however will never break.

```
<div class="col-xs"></div>
<div class="col-xs"></div>
```

#### Example:

```
<div class="grid">
	<div class="row">
		<div class="col-xl">col-xl</div>
		<div class="col-xl">col-xl</div>
		<div class="col-xl">col-xl</div>
	</div>
	<div class="row">
		<div class="col-lg">col-lg</div>
		<div class="col-lg">col-lg</div>
		<div class="col-lg">col-lg</div>
	</div>
	<div class="row">
		<div class="col-md">col-md</div>
		<div class="col-md">col-md</div>
	</div>
	<div class="row">
		<div class="col-sm">col-sm</div>
		<div class="col-sm">col-sm</div>
	</div>
	<div class="row">
		<div class="col-xs">col-xs</div>
		<div class="col-xs">col-xs</div>
	</div>
</div>
```

#### .col-xs-\*, .col-sm-\*, .col-md-\*, .col-lg-\*, .col-xl-\*

> Syntax: col-sm-4, col-md-6, col-lg-3, etc. As long as the numbers add up to twelve, the grid will work. Columns flex downward into a column. The xs, sm, md, lg, and xl indicate the behavior at different sizes. If you want a column to have the same behavior at all screen sizes, just initialize it with col-xs-\* and it will inherit this behavior all the way up to desktop screens.

```
<div class="col-xs-6"></div>
<div class="col-xs-6"></div>
```

#### Example:

> The following code will have the columns flex 100% at xs and sm screen sizes and then split 50/50 starting at md screen sizes.

```
<div class="grid">
  <div class="row">
    <div class="col-md-6"></div>
    <div class="col-md-6"></div>
  </div>
</div>
```

### Utility Classes:

#### .hero

> This class when given to a div creates a hero section spanning the entire viewport horizontally. The hero flexes its items into a column. Combine with other utility classes to arrange content.

```
<div class="hero true-center">
	<h1>A Heading</h1>
	<p>Some descriptive text.</p>
</div>
```

#### .true-center

> Centers items vertically and horizontally.

```
<div class="true-center"></div>
```

#### .hcenter

> Aligns content to the center of a column horizontally.

```
<div class="col-sm-6 hcenter"></div>
```

#### .vcenter

> Aligns content to the center of a column vertically.

```
<div class="col-sm-6 venter"></div>
```

#### .right

> Aligns content to the right of a column and "down" in a row.

```
<div class="col-sm-6 right"></div>
```

#### .left

> Aligns content to the left of a column and "up" in a row.

```
<div class="col-sm-6 left"></div>
```

#### .start

> Shifts content to the start of their flex box. Determined by flex-direction.

```
<div class="col-sm-6 start"></div>
```

#### .end

> Shifts content to the end of their flex box. Determined by flex-direction.

```
<div class="col-sm-6 end"></div>
```

### Components

#### The Fold

> The Fold is basically a toggle/ collapse component. The data-toggle attribute of the upper element, should always match the id of the lower element. Each element should have the .fold class or the .toFold class. The classes that show and hide the lower element are .folded (pulled up) and .unfolded (pulled down). The icons will automatically toggle between .fold-icon and .unfold-icon based on the .folded/.unfolded classes.

```
<div class="row fold folded" data-fold="fold-example">
	<div class="col-12 true-center">
		<div class="fold-title">
			<span>
				Example Fold
				<i class="im im-angle-down fold-icon"></i>
				<i class="im im-angle-up unfold-icon"></i>
			</span>
		</div>
	</div>
</div>
<div class="row toFold folded" id="fold-example">
	<div class="col-12">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sed in quis. Iste aperiam quis vel optio placeat expedita incidunt, ipsam doloribus rem doloremque accusamus,
			perspiciatis error obcaecati distinctio magnam sit unde quaerat. Dolore ducimus dicta nesciunt iste, veniam earum vitae aliquam praesentium pariatur, officiis accusantium deserunt sequi
			mollitia est excepturi exercitationem tenetur blanditiis necessitatibus. Molestias ad sapiente nobis recusandae ipsam autem! Similique voluptate doloremque harum voluptas odio.
			Laudantium voluptatem nesciunt cum vero aut earum veniam dolor odit nam tempora amet eaque sunt distinctio adipisci libero
		</p>
	</div>
</div>
```
