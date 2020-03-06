@echo off
mode con cols=200 lines=60
echo 久坐提醒，温馨提示：
echo 不要听音乐
echo 不要跷二郎腿
echo 身子要坐正
echo 必定坚持午休
color 2f
echo 每40分钟起来活动一下

for /l %%a in (3 -1 1) do (
    title 倒计时%%a秒自动关闭...
    if exist "%temp%\#" (
        del "%temp%\#"
        exit
    )
    ping -n 2 127.1>nul
)

exit

rem for /l %%a in (3 -1 1) do (   最前面的表示几秒，要是3秒就写3