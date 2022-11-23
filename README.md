# reskilling-website

*This note describes the procedures for establishing the development environment for this project.*

## 1. 事前準備

### 1-1.  *.code-workspace

```json
{
  "folders": [
    {
      "path": "."
    }
  ],
  "settings": {
    "editor.insertSpaces": true,
    "editor.tabSize": 2,
    "files.exclude": {
      "**/.git": true,
      "**/node_modules/": true,
      "**/package-lock.json": true,
      "**/.nvmrc": true,
    }
  }
}
```

### 1-2. mkdir

```bash
mkdir -pv ./src/{html,css,img,js}
```
```Text
-p, --parents     no error if existing, make parent directories as needed
-v, --verbose     print a message for each created directory
```

---

## 2. Node

Prerequisite: [nvm](https://github.com/nvm-sh/nvm) installation.
see [Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script)

### npm init で package.json 作成

```bash
echo '18' > .nvmrc
nvm install
npm init -y
```

### npm によるパッケージのインストール

```bash
npm i -D webpack webpack-cli webpack-dev-server
```

---

## 3. Actions of after 'git init'ing.

### 1 ...or create a new repository on the command line

```bash
# echo "# reskilling-website" >> README.md
# git add README.md
git init
git add -A
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:keijiek/reskilling-website.git
git push -u origin main
```

### 2 ...or push an existing repository from the command line

```bash
git remote add origin git@github.com:keijiek/reskilling-website.git
git branch -M main
git push -u origin main
```

### 3 ...or import code from another repository

You can initialize this repository with code from a Subversion, Mercurial, or TFS project.  
[import_code](https://github.com/keijiek/reskilling-website/import)
