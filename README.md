# svg-style-js

Description: Change the style attribute(e.g., fill:color) on svg that are nested in HTML 'img' tags. 

Example:
![Screenshot](rainbow.png)
```html
<style>
  .rainbow{
      display: flex;
      justify-content: space-around;
  }
</style>
<body>
    <div class="rainbow">
        <img class="red" src="macos.svg"><img>
        <img class="orange" src="macos.svg"><img>
        <img class="yellow" src="macos.svg"><img>
        <img class="green" src="macos.svg"><img>
        <img class="blue" src="macos.svg"><img>
        <img class="indigo" src="macos.svg"><img>
        <img class="violet" src="macos.svg"><img>

    </div>

// Loading svg-style
<script src="svg-style.js"></script>
// Using svg-style to change the fill property of svg
<script>
    svgStyle("red","macos.svg","fill:red;")
    svgStyle("orange","macos.svg","fill:#FF7F00;")
    svgStyle("yellow","macos.svg", "fill:yellow;")
    svgStyle("green","macos.svg","fill:rgb(0, 255, 0);")
    svgStyle("blue","macos.svg","fill:#FF7F00;")
    svgStyle("indigo","macos.svg","fill:indigo")
    svgStyle("violet","macos.svg", "fill:yellow; filter:invert(80%)")
</script>
</body>
```
