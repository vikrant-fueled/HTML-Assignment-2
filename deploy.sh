git add --all
git status
git commit -av
grunt build
git checkout gh-pages
echo 'In gh-pages'
cd ./dist
mv * ../
cd -
rm -rf dist
echo 'Removed dist'
git add --all
git commit -am 'Updated Build'
git push origin gh-pages
git reset --hard
git checkout master
echo 'Deploy Success'