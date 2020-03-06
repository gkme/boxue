git add .
git status
echo;
set /p declation=提交说明:
git commit -m "%declation%"
git push