# toolbar
Trying to create a clickable tooltip or toolbar (I'd be using these interchangeably) that can be customized to appear at specific positions. This could come-in handy when working on my react projects. For example
clicking on an avatar to reveal some information about the user. The contents can be passed to the tooltip component using `props.children`. 
I built this project to test typescript skills and increase my problem solving skills

# Notes
1. For the toolbar to work properly, you'd have to position it relative to the parent. i.e. 
```
.toolbar-parent {
  position: relative;
}

.toolbar {
  position: absolute;
}

This is because since the toolbar has to be inside a container (in this case, the element that would be used to toggle the visibility of the tooltip).

2. Tooltips usually have little arrows pointing to the element that encloses them. I tried implementing this but couldn't figure out how to make sure the arrow inherited the color of it's parent (i.e the tooltip) :). So I decided not to include it in the tooltip.

# Props
The tootip accepts the following props:
-width - A number which will determine the width of the tooltip.

