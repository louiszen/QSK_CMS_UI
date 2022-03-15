# Configuration - Quick Starter Kit (**ReactJS** Frontend) **IZOArc Base**

## **`__SYSDefault`**

### **Basic Settings**
Open [Config.js](./src/__SYSDefault/Config.js)

| Variable | Description |
| :--- | :--- |
| `ProjectName` | The full project name which would be shown at the top-right corner |
| `ProjectID` | The short code representing the project which would be used in pipelines |
| `hasContainer` | Show the IZO container |
| `serverCheck` | Connect to server upon starting the page |
| `loginSys` | Enable pre-default login system |
| `StartDate` | System start date |
| `FirstPage` | Redirect to route after login |

### **Theme Settings**
Open [Theme.js](./src/__SYSDefault/Theme.js)

| Variable | Description |
| :--- | :--- |
| `IZOTheme` | The theme of the system by IZO ID |
| `ProjectDis` | JSX shown at the top-right corner |
| `GateDis` | JSX shown at the left-hand-side of the login page |
| `NavbarDis` | JSX shown at the top-right corner covering the version |
| `CompanyDis` | JSX shown at the right-hand-side of the login name |

### **Domain Settings** 
Open [Domain.js](./src/__SYSDefault/Domain.js)

You can set the backend domain in the object `_domain` with `<env>` as the key.

### **SysAPI** 
:warning: Edit only if not using IZO QSK backend

Open [SysAPI.js](./src/IZOArc/API/SysAPI.js)

### **Menu Settings**
Open [Menu.js](./src/__SYSDefault/Menu.js)

You can setup the menu button list here.
