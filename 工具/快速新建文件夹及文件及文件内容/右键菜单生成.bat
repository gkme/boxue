
echo=>%cd%\index.html
echo=>%cd%\index.css
echo=>%cd%\index.js
md %cd%\image

echo ^<!DOCTYPE html^>>%cd%\index.html
echo ^<html lang="en"^>>>%cd%\index.html
echo ^<head^>>>%cd%\index.html
echo     ^<meta charset="UTF-8" /^>>>%cd%\index.html
echo     ^<title^>Document^</title^>>>%cd%\index.html
echo     ^<link rel="stylesheet" type="text/css" href="./index.css"^>>>%cd%\index.html
echo ^</head^>>>%cd%\index.html
echo ^<body^>>>%cd%\index.html
echo=>> %cd%\index.html
echo=>> %cd%\index.html
echo     ^<script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"^>^</script^>>>%cd%\index.html
echo     ^<script src="./index.js"^>^</script^>>>%cd%\index.html
echo     ^<script^>>>%cd%\index.html
echo         $(function(){>>%cd%\index.html
echo=>> %cd%\index.html
echo         })>>%cd%\index.html
echo     ^</script^>>>%cd%\index.html
echo ^</body^>>>%cd%\index.html
echo ^</html^>>>%cd%\index.html

echo *{>%cd%\index.css
echo     padding: 0;>>%cd%\index.css
echo     margin: 0;>>%cd%\index.css
echo }>>%cd%\index.css
echo ul,li{>>%cd%\index.css
echo     list-style:none;>>%cd%\index.css
echo }>>%cd%\index.css
echo .clearfix:after{>>%cd%\index.css
echo     content: ".";>>%cd%\index.css
echo     display:block;>>%cd%\index.css
echo     clear: both;>>%cd%\index.css
echo     height: 0;>>%cd%\index.css
echo     visibility: hidden;>>%cd%\index.css
echo }>>%cd%\index.css
echo .clearfix{>>%cd%\index.css
echo     *zoom:1;>>%cd%\index.css
echo }>>%cd%\index.css
