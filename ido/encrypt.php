<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Công cụ mã hóa, giải mã cơ số 64</title>
</head>
<body>

<form method="POST" action="?act=ok">
<b>Chuỗi cần mã hóa, giải mã</b><br>
<textarea name="text_base64" style="width:600px;height:250px"><?echo stripslashes($_POST['text_base64']);?></textarea>
<br><b>Công việc cần làm là:</b>
<select size="1" name="act">	
	<? if (isset($_GET['act'])) 
		{
			if ($_POST['act']=="mahoa")
				echo "<option selected value=\"mahoa\">Mã hóa cơ số (Base64 Encode)</option>
						<option value=\"giaima\">Giải mã cơ số 64 (Base64 Decode)</option>";
			else
				echo "<option selected value=\"giaima\">Giải mã cơ số 64 (Base64 Decode)</option>
					<option value=\"mahoa\">Mã hóa cơ số 64 (Base64 Encode)</option>";
		}
		else
			{
				echo "<option selected value=\"mahoa\">Mã hóa cơ số 64 (Base64 Encode)</option>
						<option value=\"giaima\">Giải mã cơ số 64 (Base64 Decode)</option>";
			}
	?>
</select>
<input type="submit" value="Thực hiện">
<input type="reset" value="Nhập lại">
</form>
<?php
if (isset($_GET['act'],$_POST['text_base64']))
	{
		if ($_POST['act']=="mahoa")
			{
				$act="Mã hóa";
				$kq=base64_encode(stripslashes($_POST['text_base64']));
			}
		else
			{
				$act="Giải mã";
				$kq=base64_decode($_POST['text_base64']);
			}
		echo "<br><br><b>Kết quả $act Base64 là: </b><br><textarea name='ketqua_base64'  style=\"width:600px;height:250px\">$kq</textarea>";
	}
?>

</body>
</html>