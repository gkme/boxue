@echo off
cd\
E:
cd "work\workspace\xpmPlusApp"
call npm run build
del /f /s /q /a D:\work\cordova-project\xpmplusCordova\www\index.html
del /f /s /q /a D:\work\cordova-project\xpmplusCordova\www\static\*.*
cd D:\work\cordova-project\xpmplusCordova\www\static
rd /s /q  D:\work\cordova-project\xpmplusCordova\www\static\css
rd /s /q  D:\work\cordova-project\xpmplusCordova\www\static\js
rd /s /q  D:\work\cordova-project\xpmplusCordova\www\static\img
cd D:\work\cordova-project\xpmplusCordova\www
rd /s /q  D:\work\cordova-project\xpmplusCordova\www\static
xcopy E:\work\workspace\xpmPlusApp\dist\*.* D:\work\cordova-project\xpmplusCordova\www\ /s /e /c /y /h /r
cd\
D:
cd "work\cordova-project\xpmplusCordova\www"
call cordova build android
start "" "D:\work\cordova-project\xpmplusCordova\platforms\android\app\build\outputs\apk\debug"