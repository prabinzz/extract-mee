function process(text,regex){
  console.log("processing");
  // match regex with text
  // Return : list / false;
  var temp = [];
  var nText = text;

  while (regex.test(nText)) {
    var fText = regex.exec(nText)[0];
    temp.push(fText);
    nText = nText.replace(fText, "");
  }
  if (temp.length > 0) {
    return temp;
  }else{
    return false;
  }
}

function output(type, list, div) {
  div.html("");
  type = outputType[type];
  type.output(list,div);
}

function afterOut(){
  clipboardInit();
  outContainer.slideDown("fast");
}


function clipboardInit(){
  infoDiv.append($("<button class='btn btn-success btn-sm'>Copy</button>").click(
    function(){
      alert("Coming Soon.");
    }
  ))
}
