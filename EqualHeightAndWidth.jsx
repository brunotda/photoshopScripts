#target photoshop
// get current active document
doc = app.activeDocument; 

if(doc.height > doc.width) {

//Resize canvas
doc.resizeCanvas(doc.height, doc.height, AnchorPosition.MIDDLECENTER);

	
} else {
   doc.resizeCanvas(doc.width, doc.width, AnchorPosition.MIDDLECENTER);
}


//~~~ SAVES OVER ORIGINAL FILE AND CLOSES ~~~
//doc.close(SaveOptions.SAVECHANGES);
//alternately, you can use doc.save(); to save without closing.