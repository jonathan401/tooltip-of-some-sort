# Hey there 👋🏽

This is a project that helps create customizable tooltips in terms of background colour, width and height and position.

 This could come-in handy when working on my react projects. For example
clicking on an avatar to reveal some information about the user. The information about the user can be passed to the tooltip component using `props.children`. 
But since this is just a vanilla
JavaScript project, that functionality may not work properly.
I built this project using typescript in order to sharpen my typescript skills and also help me understand better how typescript works 🙂.

# Notes

1. For the tooltip to work properly, you'd have to position it relative to its parent. i.e.

```
.tooltip-parent {
  position: relative;
}

.tooltip {
  position: absolute;
}

```

This is because since the tooltip has to be inside a container (in this case, the element that would be used to toggle the visibility of the tooltip).

2. Tooltips usually have little arrows pointing to the element that encloses them. I tried implementing this but couldn't figure out how to make the arrow inherit the colour of it's parent (i.e the tooltip) :). So I decided not to include it in the tooltip.

3. For now, the only positions the tooltip can be positioned in are the:

- **bottom left**,
- **center**,
- **bottom right**.

4. Also, for now, the only way to change the background colour of the tooltip
is by directly changing the colour prop passed to an instance of the tooltip.

5. The approach I used in dynamically positioning the tooltip might not be the best 😆.
 It was the only solution I could find for now 😁. I'll try finding a cleaner way to do this 👍🏾


# Props

The tootip accepts the following props:

1. *width* **(required)** - of type number that will be used to customize the width of the tooltip in pixels.

2. *height* **(required)** - of type number that will be used to customize the height of the tooltip in pixels.

3. *color* - this is an optional prop that will be used to customize the background colour of the tooltip. If none is specified, a light grey background colour is used.

4. *position* - this is an optional prop that can be used to place the tooltip in a specific position. For now it accepts on the three values:

- *bottom-left* - which positions the tooltip at the bottom left corner of it's parent.
- *center* - which places the tooltip at the center of the parent.
- *bottom-right* - which places the tooltip at the bottom right corner of it's parent;

# Resources

- Tooltip Arrow - I learnt how to create a triangle in css from [this article](https://alvaromontoro.com/blog/67970/drawing-a-triangle-with-css) by [Alvaro Montoro](https://alvaromontoro.com/blog/67970/drawing-a-triangle-with-css). [This Youtube Video tutorial](https://youtu.be/ujlpzTyJp-M) by [Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified) also helped.

# conclusion

This project tested my css layout skills as well as my typescript skills. There might be a library to do this but I wanted to improve my problem solving skills 🙂.
Hope you find it useful in your projects 😀


Thanks for checking this out 😁
