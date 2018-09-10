
<script>
var defs = require('./terms.json'); 

  general_define_item: function (response) { 

    //Lookup response key in json of data
    var responseText = defs[response.result.parameters.topic];

    console.log("Looking up a definition. The lookup key is: " + response.result.parameters.topic);
    console.log("The definition and response is: " + responseText);

    return responseText;
  }
  </script>