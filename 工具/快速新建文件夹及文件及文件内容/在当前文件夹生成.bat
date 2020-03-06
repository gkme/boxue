

echo=>%~dp0\index.html
echo=>%~dp0\index.css
echo=>%~dp0\index.js
md %~dp0\image

echo ^<!DOCTYPE html^>>%~dp0\index.html
echo ^<html lang="en"^>>>%~dp0\index.html
echo ^<head^>>>%~dp0\index.html
echo     ^<meta charset="UTF-8" /^>>>%~dp0\index.html
echo     ^<title^>Document^</title^>>>%~dp0\index.html
echo     ^<link rel="stylesheet" type="text/css" href="./index.css"^>>>%~dp0\index.html
echo ^</head^>>>%~dp0\index.html
echo ^<body^>>>%~dp0\index.html
echo=>> %~dp0\index.html
echo=>> %~dp0\index.html
echo     ^<script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"^>^</script^>>>%~dp0\index.html
echo     ^<script src="./index.js"^>^</script^>>>%~dp0\index.html
echo     ^<script^>>>%~dp0\index.html
echo         $(function(){>>%~dp0\index.html
echo=>> %~dp0\index.html
echo         })>>%~dp0\index.html
echo     ^</script^>>>%~dp0\index.html
echo ^</body^>>>%~dp0\index.html
echo ^</html^>>>%~dp0\index.html

echo *{>%~dp0\index.css
echo     padding: 0;>>%~dp0\index.css
echo     margin: 0;>>%~dp0\index.css
echo }>>%~dp0\index.css
echo ul,li{>>%~dp0\index.css
echo     list-style:none;>>%~dp0\index.css
echo }>>%~dp0\index.css
echo .clearfix:after{>>%~dp0\index.css
echo     content: ".";>>%~dp0\index.css
echo     display:block;>>%~dp0\index.css
echo     clear: both;>>%~dp0\index.css
echo     height: 0;>>%~dp0\index.css
echo     visibility: hidden;>>%~dp0\index.css
echo }>>%~dp0\index.css
echo .clearfix{>>%~dp0\index.css
echo     *zoom:1;>>%~dp0\index.css
echo }>>%~dp0\index.css
