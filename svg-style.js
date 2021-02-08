
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

            var xmlString = (new XMLSerializer()).serializeToString(xhttp.responseXML); // XML to String   
            //document.getElementById("svg-style").outerHTML = xmlString;

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