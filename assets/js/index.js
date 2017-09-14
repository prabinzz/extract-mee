var outDiv = $("#output-div")
var types = {
  // format:
  //   "type":{
  //    "regex": regex,
  //    *************** Optional ***************
  //    "process":  process function which return list if success and false if faild.
  //   }

  "email": {
    "regex": /(\w+([\.\-\_])*\w+)+@\w+([\.-]?\w+)*(\.\w{2,3})+/,
    "description": "Match email from text"
  }
}

var outputType = {
  "plain":{
    "output": function(list,div){
      for (var i = 0; i < list.length; i++) {
        div.append(list[i]+"<br>");
      }
    }
  },

  "json":{
    "output": function(list,div){
      div.append(JSON.stringify(list, null, 2));
    }
  }

}


$("#get").click(
  function (){
    console.log("clicked");
    // get vars
    var itype = $("#input-type").val();
    var itext = $("#input-text").val();
    var otype = $("#output-type").val();
    var itype = types[itype];

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
