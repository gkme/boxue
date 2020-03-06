@echo Off
CLS
set str=%cd%
echo Windows Registry Editor Version 5.00> tmp.reg
echo [HKEY_CLASSES_ROOT\Directory\Background\shell]>> tmp.reg
echo [HKEY_CLASSES_ROOT\Directory\Background\shell\index]>> tmp.reg
echo @="快速新建文件">> tmp.reg
echo "Icon"="\"%str:\=\\%\\index.bat\",0">> tmp.reg
echo [HKEY_CLASSES_ROOT\Directory\Background\shell\index\Command]>> tmp.reg
echo @="\"%str:\=\\%\\index.bat\"">> tmp.reg

echo *=========================================================================*
echo *                                                                         *
echo *   choose Yes                                                            *
echo *                                                                         *
echo *=========================================================================*
tmp.reg
del tmp.reg
GOTO :START