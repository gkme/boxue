@echo off
mode con cols=200 lines=60
echo �������ѣ���ܰ��ʾ��
echo ��Ҫ������
echo ��Ҫ�ζ�����
echo ����Ҫ����
echo �ض��������
color 2f
echo ÿ40���������һ��

for /l %%a in (3 -1 1) do (
    title ����ʱ%%a���Զ��ر�...
    if exist "%temp%\#" (
        del "%temp%\#"
        exit
    )
    ping -n 2 127.1>nul
)

exit

rem for /l %%a in (3 -1 1) do (   ��ǰ��ı�ʾ���룬Ҫ��3���д3