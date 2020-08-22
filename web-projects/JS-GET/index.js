
    jQuery( document ).ready(function( $ ) {
	// variable to hold request
	var request;
	// bind to the submit event of our form
	   $("#formCreate").submit(function(event){
        // abort any pending request
        if (request) {
            request.abort();
        }
        // setup some local variables
        var $form = $(this);
        // let's select and cache all the fields
        var $inputs = $form.find("input, select, button, textarea");
        // serialize the data in the form
        var serializedData = $form.serialize();
        
        // let's disable the inputs for the duration of the ajax request
        // Note: we disable elements AFTER the form data has been serialized.
        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);
        $('#result').text('Sending data...');
    
        // fire off the request to /form.php
        request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxa2Zn-LoeWrceHLsrqIO9fP_G51JztyRf6w1ri0PgtWPdnpV7D/exec",
            type: "post",
            data: serializedData,
        });
    
        // callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR){
            // log a message to the console
            $('#result').html('<a href="https://docs.google.com/spreadsheets/d/1_8Acmn17MUifXDCFK_lgFMyo9kNHaitI86IQ3-_qnWc/edit?usp=sharing" target="_blank">Success - see Google Sheet</a>');
            console.log("Created.");
            //console.log(response);
            //console.log(textStatus);
            //console.log(jqXHR);
            resetForm(); 
            $("#btnRetrieve").click();
            
        });
    
        // callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // log the error to the console
            console.error(
                "The following error occured: "+
                textStatus, errorThrown
            );
        });
    
        // callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            // reenable the inputs
            $inputs.prop("disabled", false);
        });
    
        // prevent default posting of form
        event.preventDefault();
    });
  
  
	   $("#formRetrieve").submit(function(event){
        // abort any pending request
        if (request) {
            request.abort();
        }
        // setup some local variables
        var $form = $(this);
        // let's select and cache all the fields
        var $inputs = $form.find("input, select, button, textarea");
        // serialize the data in the form
        var serializedData = $form.serialize();
    
        // let's disable the inputs for the duration of the ajax request
        // Note: we disable elements AFTER the form data has been serialized.
        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);
        resetForm();
        $('#messageRetrieve').text('Requesting data...');
                 $('#datatable').text("");

    
        // fire off the request to /form.php
        request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxa2Zn-LoeWrceHLsrqIO9fP_G51JztyRf6w1ri0PgtWPdnpV7D/exec",
            type: "post",
            data: serializedData
        });
    
        // callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR){
            // log a message to the console
            $('#result').html('<a href="https://docs.google.com/spreadsheets/d/1_8Acmn17MUifXDCFK_lgFMyo9kNHaitI86IQ3-_qnWc/edit?usp=sharing" target="_blank">Success - see Google Sheet</a>');
      //console.log("Retrieved.");
      //console.log(response);
      //console.log(textStatus);
      //console.log(jqXHR);
      var data = response.values;
      //console.log(data);      
                   var trHTML ="";

    $.each(data, function (i, item) {
      var tdHTML="";     
      //prepare first two columns
      if (i==0){
        tdHTML= "<td>Delete</td><td>Edit</td>" + tdHTML;
        tdHTML=tdHTML.replace(/td>/gi,"th>");
      }else{
        tdHTML+= "<td><button onclick='recordDelete(this)'>delete</button></td>";
        tdHTML+= "<td><button onclick='recordEdit(this)'>edit</button></td>";
      }
      //prepare remaining columns
      for (j = 0; j < item.length; j++) { 
        tdHTML += "<td>" + item[j] + "</td>";
      }
      trHTML += "<tr>" + tdHTML + "</tr>";  
    }); //end each records

    //append records to table element
    $('#datatable').append(trHTML);
    //reset 
    $('#messageRetrieve').text('');
    $('#messageRetrieve')[0].scrollIntoView(false);
        });
    
        // callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // log the error to the console
            console.error(
                "The following error occured: "+
                textStatus, errorThrown
            );
        });
    
        // callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            // reenable the inputs
            $inputs.prop("disabled", false);
        });
    
        // prevent default posting of form
        event.preventDefault();
    });

	   $("#formUpdate").submit(function(event){
        // abort any pending request
        if (request) {
            request.abort();
        }
        // setup some local variables
        var $form = $(this);
        // let's select and cache all the fields
        var $inputs = $form.find("input, select, button, textarea");
        // serialize the data in the form
        var serializedData = $form.serialize();
    
        // let's disable the inputs for the duration of the ajax request
        // Note: we disable elements AFTER the form data has been serialized.
        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);
        resetForm();
        $('#messageUpdate').text('Updating data...');
    
        // fire off the request to /form.php
        request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxa2Zn-LoeWrceHLsrqIO9fP_G51JztyRf6w1ri0PgtWPdnpV7D/exec",
            type: "post",
            data: serializedData
        });
    
        // callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR){
            // log a message to the console
            $('#result').html('<a href="https://docs.google.com/spreadsheets/d/1_8Acmn17MUifXDCFK_lgFMyo9kNHaitI86IQ3-_qnWc/edit?usp=sharing" target="_blank">Success - see Google Sheet</a>');
            console.log("Updated.");
            //console.log(response);
            //console.log(textStatus);
            //console.log(jqXHR);
            resetForm(); 
            $('#messageUpdate').text('');
            $("#btnRetrieve").click(); 
        });
    
        // callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // log the error to the console
            console.error(
                "The following error occured: "+
                textStatus, errorThrown
            );
        });
    
        // callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            // reenable the inputs
            $inputs.prop("disabled", false);
        });
    
        // prevent default posting of form
        event.preventDefault();
    });

  
	   $("#formDelete").submit(function(event){
        // abort any pending request
        if (request) {
            request.abort();
        }
        // setup some local variables
        var $form = $(this);
        // let's select and cache all the fields
        var $inputs = $form.find("input, select, button, textarea");
        // serialize the data in the form
        var serializedData = $form.serialize();
    
        // let's disable the inputs for the duration of the ajax request
        // Note: we disable elements AFTER the form data has been serialized.
        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);
        resetForm();
        $('#messageDelete').text('Deleting data...');
    
        // fire off the request to /form.php
        request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxa2Zn-LoeWrceHLsrqIO9fP_G51JztyRf6w1ri0PgtWPdnpV7D/exec",
            type: "post",
            data: serializedData
        });
    
        // callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR){
            // log a message to the console
            $('#result').html('<a href="https://docs.google.com/spreadsheets/d/1_8Acmn17MUifXDCFK_lgFMyo9kNHaitI86IQ3-_qnWc/edit?usp=sharing" target="_blank">Success - see Google Sheet</a>');
      //console.log("Deleted.");
      //console.log(response);
      //console.log(textStatus);
      //console.log(jqXHR);
      resetForm(); 
      $('#messageDelete').text('');
      $("#btnRetrieve").click(); 
        });
    
        // callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // log the error to the console
            console.error(
                "The following error occured: "+
                textStatus, errorThrown
            );
        });
    
        // callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            // reenable the inputs
            $inputs.prop("disabled", false);
        });
    
        // prevent default posting of form
        event.preventDefault();
    });
  
  
  });




function recordEdit(param) {
//resetForm();
var arrRecord=[];
$(param).closest('tr').find('td').not(':first').each(function() {
        //var textval = $(this).text(); 
       arrRecord.push( $(this).text());
   });
  $("#formUpdate #tid").val(arrRecord[1]);  
  $("#formUpdate #name").val(arrRecord[2]);
  $("#formUpdate #comment").val(arrRecord[3]);
  $("#formUpdate #note").val(arrRecord[4]);
  //$("#edcategory").val($("#edcategory").val()+arrRecord[5]);
  CKEDITOR.instances['edcategory'].insertHtml(arrRecord[5]);
  //window.location.hash = '#formUpdate';
        // var formUpdate = document.getElementById ("formUpdate");
        //formUpdate.scrollIntoView(true);
        $('#formUpdate')[0].scrollIntoView();
    //alert(address.join('\n'));
    //console.log(arrRecord[5])
}; 







function recordDelete(param) {
resetForm();
var arrRecord=[];
$(param).closest('tr').find('td').not(':first').each(function() {
        //var textval = $(this).text(); 
       arrRecord.push( $(this).text());
   });
  $("#formDelete #dtid").val(arrRecord[1]);  
  $("#formDelete #dname").val(arrRecord[2]);
  //window.location.hash = '#formUpdate';
        // var formUpdate = document.getElementById ("formUpdate");
        //formUpdate.scrollIntoView(true);
        $('#formDelete')[0].scrollIntoView();
    //alert(address.join('\n'));
}; 

function resetForm(){
    $('#formCreate')[0].reset();
    $('#formUpdate')[0].reset();
    $("#formUpdate tid").prop("disabled", true);
    $('#formDelete')[0].reset(); 
    $("#formDelete dtid").prop("disabled", true);     
    $("#formUpdate dname").prop("disabled", true); 
    CKEDITOR.instances.category.setData('');
    CKEDITOR.instances.edcategory.setData('');
    //CKEDITOR.instances['category'].insertHtml("");
    //CKEDITOR.instances['edcategory'].insertHtml("");
}

