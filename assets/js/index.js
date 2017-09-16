var outContainer = $("#output-div");
var outDiv = $("#output-div>pre");
var infoDiv = $("#output-info");
var toolsPrompt = $("#tools-prompt");
$("#get").click(
  function (){
    // get vars
    var itype = $("#input-type").val();
    var itext = $("#input-text").val();
    var otype = $("#output-type").val();
    var itype = types[itype];
    infoDiv.html("");

    // process function selection
    if (itype.process) {
      var out = itype.process(itext,itype.regex);
    }else{
      var out = process(itext,itype.regex);
    }

    // output selection

    if (out) {
      output(otype, out, outDiv);
    }
  }
)
