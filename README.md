## Duplicate for use

1. Create a repo <reponame> on Github

2. At root directory:
```
git clone --recurse-submodules https://github.com/louiszen/QSK_CMS_UI.git

```

3. rename folder to <reponame>

4. At project folder:
```
git remote set-url origin https://github.com/<userName>/<reponame>
git remote add upstream https://github.com/<userName>/<reponame>
git push origin master
git push --all
```