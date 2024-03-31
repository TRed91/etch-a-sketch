# etch-a-sketch
assignment for the oden project

1.
create 16x16 grid of square divs using javascript 
within a div container

use flexbox to display divs as a grid

2.
setup hover effect so that the grid divs change color
when the mouse hovers over them leaving a pixelated trail
    HINT: "Hovering" happens when mouse enters a div and
            ends when it leaves. You can setup event listeners
            for both events

            some ways to change the color of the divs is
            to assign a new class to the div and/or changing
            the background-color using Javascript

3.
Add a button on the top of the page that will display a popup
asking for the number of squares per side for the new grid.
once entered the existing grid should be removed and a new one
generated in the same total space as before (e.g 960px wide).
    TIP: set the limit of the user input to a max of 100 to
        prevent lag, freezing or chrashing
        You should be able to enter 64 and have a brand new 
        64x64 grid pop up without changing the total amount of pixels used.

