jQuery(document).ready(function ($) {
	var request;
	$("#formCreate").submit(function (event) {
		if (request) {
			request.abort()
		}
		var $form = $(this);
		var $inputs = $form.find("input, select, button, textarea");
		var serializedData = $form.serialize();
		$inputs.prop("disabled", !0);
		$('#result').text('Sending data...');
		request = $.ajax({
			url: "https://script.google.com/macros/s/AKfycbxa2Zn-LoeWrceHLsrqIO9fP_G51JztyRf6w1ri0PgtWPdnpV7D/exec",
			type: "post",
			data: serializedData,
		});
		request.done(function (response, textStatus, jqXHR) {
			$('#result').html('<a href="https://docs.google.com/spreadsheets/d/1_8Acmn17MUifXDCFK_lgFMyo9kNHaitI86IQ3-_qnWc/edit?usp=sharing" target="_blank">Success - see Google Sheet</a>');
			console.log("Created.");
			resetForm();
			$("#btnRetrieve").click()
		});
		request.fail(function (jqXHR, textStatus, errorThrown) {
			console.error("The following error occured: " + textStatus, errorThrown)
		});
		request.always(function () {
			$inputs.prop("disabled", !1)
		});
		event.preventDefault()
	});
	$("#formRetrieve").submit(function (event) {
		if (request) {
			request.abort()
		}
		var $form = $(this);
		var $inputs = $form.find("input, select, button, textarea");
		var serializedData = $form.serialize();
		$inputs.prop("disabled", !0);
		resetForm();
		$('#messageRetrieve').text('Requesting data...');
		$('#datatable').text("");
		request = $.ajax({
			url: "https://script.google.com/macros/s/AKfycbxa2Zn-LoeWrceHLsrqIO9fP_G51JztyRf6w1ri0PgtWPdnpV7D/exec",
			type: "post",
			data: serializedData
		});
		request.done(function (response, textStatus, jqXHR) {
			$('#result').html('<a href="https://docs.google.com/spreadsheets/d/1_8Acmn17MUifXDCFK_lgFMyo9kNHaitI86IQ3-_qnWc/edit?usp=sharing" target="_blank">Success - see Google Sheet</a>');
			var data = response.values;
			var trHTML = "";
			$.each(data, function (i, item) {
				var tdHTML = "";
				if (i == 0) {
					tdHTML = "<td>Delete</td><td>Edit</td>" + tdHTML;
					tdHTML = tdHTML.replace(/td>/gi, "th>")
				} else {
					tdHTML += "<td ><button class='btn btn-primary' onclick='recordDelete(this)'>Delete</button></td>";
					tdHTML += "<td ><button class='btn btn-primary' onclick='recordEdit(this)'>Edit</button></td>"
				}
				for (j = 0; j < item.length; j++) {
					tdHTML += "<td>" + item[j] + "</td>"
				}
				trHTML += "<tr>" + tdHTML + "</tr>"
			});
			$('#datatable').append(trHTML);
			$('#messageRetrieve').text('');
			$('#messageRetrieve')[0].scrollIntoView(!1)
		});
		request.fail(function (jqXHR, textStatus, errorThrown) {
			console.error("The following error occured: " + textStatus, errorThrown)
		});
		request.always(function () {
			$inputs.prop("disabled", !1)
		});
		event.preventDefault()
	});
	$("#formUpdate").submit(function (event) {
		if (request) {
			request.abort()
		}
		var $form = $(this);
		var $inputs = $form.find("input, select, button, textarea");
		var serializedData = $form.serialize();
		$inputs.prop("disabled", !0);
		resetForm();
		$('#messageUpdate').text('Updating data...');
		request = $.ajax({
			url: "https://script.google.com/macros/s/AKfycbxa2Zn-LoeWrceHLsrqIO9fP_G51JztyRf6w1ri0PgtWPdnpV7D/exec",
			type: "post",
			data: serializedData
		});
		request.done(function (response, textStatus, jqXHR) {
			$('#result').html('<a href="https://docs.google.com/spreadsheets/d/1_8Acmn17MUifXDCFK_lgFMyo9kNHaitI86IQ3-_qnWc/edit?usp=sharing" target="_blank">Success - see Google Sheet</a>');
			console.log("Updated.");
			resetForm();
			$('#messageUpdate').text('');
			$("#btnRetrieve").click()
		});
		request.fail(function (jqXHR, textStatus, errorThrown) {
			console.error("The following error occured: " + textStatus, errorThrown)
		});
		request.always(function () {
			$inputs.prop("disabled", !1)
		});
		event.preventDefault()
	});
	$("#formDelete").submit(function (event) {
		if (request) {
			request.abort()
		}
		var $form = $(this);
		var $inputs = $form.find("input, select, button, textarea");
		var serializedData = $form.serialize();
		$inputs.prop("disabled", !0);
		resetForm();
		$('#messageDelete').text('Deleting data...');
		request = $.ajax({
			url: "https://script.google.com/macros/s/AKfycbxa2Zn-LoeWrceHLsrqIO9fP_G51JztyRf6w1ri0PgtWPdnpV7D/exec",
			type: "post",
			data: serializedData
		});
		request.done(function (response, textStatus, jqXHR) {
			$('#result').html('<a href="https://docs.google.com/spreadsheets/d/1_8Acmn17MUifXDCFK_lgFMyo9kNHaitI86IQ3-_qnWc/edit?usp=sharing" target="_blank">Success - see Google Sheet</a>');
			resetForm();
			$('#messageDelete').text('');
			$("#btnRetrieve").click()
		});
		request.fail(function (jqXHR, textStatus, errorThrown) {
			console.error("The following error occured: " + textStatus, errorThrown)
		});
		request.always(function () {
			$inputs.prop("disabled", !1)
		});
		event.preventDefault()
	})
});

function recordEdit(param) {
	var arrRecord = [];
	$(param).closest('tr').find('td').not(':first').each(function () {
		arrRecord.push($(this).html())
	});
	$("#formUpdate #tid").val(arrRecord[1]);
	$("#formUpdate #name").val(arrRecord[2]);
	//$("#formUpdate #edcomment").val(arrRecord[3]);
	$("#formUpdate #note").val(arrRecord[4]);
	$("#formUpdate #imgurl").val(arrRecord[6]);
	CKEDITOR.instances.edcategory.insertHtml(arrRecord[5]);
	CKEDITOR.instances.edcomment.insertHtml(arrRecord[3]);
	$('#formUpdate')[0].scrollIntoView()
};

function recordDelete(param) {
	resetForm();
	var arrRecord = [];
	$(param).closest('tr').find('td').not(':first').each(function () {
		arrRecord.push($(this).text())
	});
	$("#formDelete #dtid").val(arrRecord[1]);
	$("#formDelete #dname").val(arrRecord[2]);
	$('#formDelete')[0].scrollIntoView()
};

function resetForm() {
	$('#formCreate')[0].reset();
	$('#formUpdate')[0].reset();
	$("#formUpdate tid").prop("disabled", !0);
	$('#formDelete')[0].reset();
	$("#formDelete dtid").prop("disabled", !0);
	$("#formUpdate dname").prop("disabled", !0);
	CKEDITOR.instances.category.setData('');
	CKEDITOR.instances.edcategory.setData('')
	CKEDITOR.instances.comment.setData('');
	CKEDITOR.instances.edcomment.setData('')
}