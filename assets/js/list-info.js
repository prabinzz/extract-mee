var types = {
  // format:
  //   "type":{
  //    "regex": regex,
  //    *************** Optional ***************
  //    "process":  process function which return list if success and false if faild.
  //   }

  "email": {
    "regex": /(\w+([\.\-\_])*\w+)+@\w+([\.-]?\w+)*(\.\w{2,3})+/,
    "description": "Match email formet"
  },
  "url": {
    "regex": /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    "description": "Match Url format"
  }
}



// ======================================================================


var outputType = {
  "plain":{
    "output": function(list,div){
      for (var i = 0; i < list.length; i++) {
        div.append(list[i]+"<br>");
      }
      afterOut();
    }
  },

  "json":{
    "output": function(list,div){
      div.append(JSON.stringify(list, null, 2));
      afterOut();
    }
  }

}
