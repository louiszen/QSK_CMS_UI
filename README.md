# Quick Starter Kit (**ReactJS** Frontend) **IZOArc Base**

This project offers a standard **ReactJS** *Single-Page Application (SPA)* which works independently or cooperately with [Quick Starter Kiey (**NodeJS** Backend)](https://github.com/louiszen/QSK_CMS_BE.git)

| Features | Details |
| :---| :--- |
| ***LabIZO*** | Customized libraries aimed for CMS building |
| *Authentication support* | Username-Password, SMSOTP, Window Authentication |
| *Authorization method* | JWT |

[Coding Instruction](./README-CodeGuy.md) <br/>
[IZOArc](./src/IZOArc/README.md)

---

## **Getting Started**
You have to clone the object and rebase the project to your own repo before use.

1. Create a repo `<reponame>` on Github

2. Clone the project with `--recurse-submodules` at root directory.
```bash
git clone --recurse-submodules https://github.com/louiszen/QSK_CMS_BE.git

```

3. rename folder to `<reponame>`

4. At the **project folder**:
```bash
git remote set-url origin https://github.com/<userName>/<reponame>
git remote add upstream https://github.com/<userName>/<reponame>
git push origin master
```

5. Install node dependencies
```
npm i
```

---

## **Config the program**

### ***link up to backend***
Please open [Domain.js](./src/__SYSDefault/Domain.js)
Set up the backend domain with the environment code as key in object `_domain`

### **__SYSDefault**

**Files**
| Filename | Description |
| :--- | :--- |

---

## **Modified npm run scripts**
```json
"scripts": {
  "start": "react-scripts start",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "build": "react-scripts build",
  "zen": "cross-env REACT_APP_STAGE=zen npm run build",
  "dev": "cross-env REACT_APP_STAGE=dev npm run build",
  "uat": "cross-env REACT_APP_STAGE=uat npm run build",
  "poc": "cross-env REACT_APP_STAGE=poc npm run build",
  "preprd": "cross-env REACT_APP_STAGE=preprd npm run build",
  "prd": "cross-env REACT_APP_STAGE=prd npm run build",
  "linux": "cross-env REACT_APP_STAGE=$npm_config_env npm run build",
  "docker": "docker build --pull --rm -f \"Dockerfile\" -t test:latest \".\" && docker rmi $(docker images -f \"dangling=true\" -q)",
  "genpipes": "node src/IZOArc/__CodeGen/AzurePipelines.js"
},
```

--- 
## **Create Optimized Build**
You can build an optimized view for specific environment by:
```bash
cross-env REACT_APP_STAGE=${env} npm run build
```

**OR** Using preset functions set in `package.json`:
```bash
npm run dev
```

---

## **Others** 

### **Resolve ../../../path to 'path'**
Modified `jsconfig.json`
```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "jsx": "react"
  },
  "include": ["src"]
}
```

### **Eslint Syntax Checking**
```json
"eslintConfig": {
  "extends": "react-app",
  "rules": {
    "semi": [
      "warn",
      "always"
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "none",
        "ignoreRestSiblings": false
      }
    ],
    "no-empty": [
      "warn",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-console": "off",
    "require-await": "off",
    "no-use-before-define": "warn"    
  }
}
```
### **Dockerize**
```
docker build --pull --rm -f "Dockerfile" -t qsk:latest "."
```

Please use
```bash
npm run envtemp ${env}
npm run docker
```

### **Azure Pipelines**
Generate Azure Pipelines Docs
```bash
npm run genpipes ${ProjectID}
```