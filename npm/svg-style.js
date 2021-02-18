
/* 
svg-style
Author: Lee Wannacott
Licence: MIT License Copyright (c) 2021 Lee Wannacott 
GitHub Repository: https://github.com/LeeWannacott/svg-style

Instructions: Add this script <script src="svg-style.js"></script>.

Call svgStyle(imageClass,svgFile, style) after script loaded and img tags defined.

imageClass: The class you have put on the img tags.
svgFile: the svg file that src="" is loading on the img tag.
style: What you want the style="" to contain e.g. "fill:yellow; filter:invert(80%)"

*/

function svgStyle(imageClass="svg-style",svgFile,style="fill:black"){

    var path = document.location.pathname
    var directory = path.substring(path.indexOf('/'), path.lastIndexOf('/'))
    svgFilePath = directory + svgFile
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:

            pathTag = xhttp.responseXML.getElementsByTagName("path")

            for (const styleTag of pathTag){
                styleTag.setAttribute("style",style);
            }

            var xmlString = (new XMLSerializer()).serializeToString(xhttp.responseXML); 

            for(let svg of document.getElementsByTagName("img")){
                if (svg.classList.contains(imageClass)){
                    svg.outerHTML = xmlString
                    }
            }   
        }
    };
    xhttp.open("GET", svgFilePath, true);
    xhttp.send();
}
