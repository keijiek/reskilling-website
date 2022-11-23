# reskilling-website

*It's describes the procedures for establishing the development environment for this project, at 23th Nov. '22.  
For simple web production using html, css and javascript, this configuration can be reused.*

## 1. some preprocessing

### 1-1. Make 'hoge.code-workspace'.

#### console

```bash
touch hoge.code-workspace
```

Reopen hoge.code-workspace.

#### Input next json to hoge.code-workspace

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

### 1-2. Make directories and files

#### console
```bash
mkdir -pv ./src/{htmls,styles,scripts,images}
touch ./src/{htmls/index.html,styles/index.css,scripts/index.js}
touch ./{webpack.common.js,webpack.dev.js,webpack.prod.js}
```

#### mkdir's options
```
-p, --parents     no error if existing, make parent directories as needed
-v, --verbose     print a message for each created directory
```

### 1-3 Git setting

*Prerequisite:  
New remote-repository on Github.  
The path like 'git@github.com:accountName/repositoryName.git', not 'https~', to the clipboard.*

#### console
```bash
git init
git add -A
git commit -m 'first commit'
git branch -M main
git remote add origin git@github.com:keijiek/reskilling-website.git
git push -u origin main
```
---

## 2. Node modules installation

*Prerequisite:  
[nvm](https://github.com/nvm-sh/nvm) installation (see [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script))  
...or any other versio-managing tool for Node.*

### Node installation by nvm

#### console

```bash
echo '18' > .nvmrc
nvm install
```

### Make package.json, Install node_modules.

#### console

```bash
npm init -y
npm i -D webpack webpack-cli webpack-dev-server webpack-merge terser-webpack-plugin css-loader mini-css-extract-plugin css-minimizer-webpack-plugin html-webpack-plugin html-loader 
```

---

## 3. Webpack

### webpack.*.js

#### webpack.common.js
```js
const path = require('path');

```

---

## 4. Actions of after 'git init'ing.

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
