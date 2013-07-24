git add --all
git status
git commit -av
grunt build
cd ./dist
echo 'In gh-pages'
git add --all
git commit -am 'Updated Build push'
git push origin gh-pages --force
cd -
echo 'Deploy Success'