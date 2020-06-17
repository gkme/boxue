git pull
git add .
git status
echo;
set /p declation=description:
git commit -m "%declation%"
git push
exit