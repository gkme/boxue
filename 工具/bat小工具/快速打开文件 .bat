@echo off
set /p startip=�����ļ�·��:
set startip=%startip:/xpmPlusGdgj=%
for /f "delims=?" %%a in ("%startip%") do set startip=%%a
start /d "D:\work\eclipse" eclipse.exe "E:\work\workspace\xpmPlusGdgj\webContent%startip%"