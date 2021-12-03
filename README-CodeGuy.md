# Coding Instructions - Quick Starter Kit (**ReactJS** Frontend) **IZOArc Base**

## **Step-by-step Add a Page**

In this session, we will learn how to add a page and link a button in the menu bar to this newly created page.

### **1. Adding necessary folder and files**

First, give your page a name which would be used to name the component that renders the page. <br/>
In the folder `src/Pages`, create a folder with the same name. <br/>
Then in the created folder `src/Pages/<pagename>`, create a `.js` file with the same name. <br/>

For example, we want to create a `Dashboard` page.
We first create a folder `Dashboard` under `src/Pages`
Then create a `Dashboard.js` under `src/Pages/Dashboard`.

The directory should be now like this:
```
src
`-- Pages
    |
    +-- Dashboard
        +--   Dashboard.js
``` 

### **2. Implement Dashbaord.js**

You can use template `~react-component.js` or create a component on your own.
```jsx
import React, { Component } from 'react';
import { Accessor } from 'IZOArc/STATIC';
import PropsType from 'prop-types';

/**
 * @augments {Component<Props, State>}
 */
class Dashboard extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Dashboard.defaultProps))){
      //used to prevent useless re-rendering
      this._setAllStates();
    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  _setAllStates = (callback) => {
    this.setState((state, props) => ({
      ...props,
    }), callback);
  }

  render(){
    return (
      <div>

      </div>
    );
  }

}

export default Dashboard;
```

### **3. Add route to `index.js`**

In the script [src/index.js](./src/index.js), 
add the import statement under comment `//pages` <br/>
```jsx
import Dashboard from "src/Pages/Dashboard/Dashboard";
```

add the following code in the block of array under `renderPages()`. <br/>
`key` can be any unique value in this array. 
```jsx
<Route key={0} path="/Dasbboard" exact component={Dashboard}>
```

### **4. Add the button to page in Menu bar**

Open [src/__SYSDefault/Menu.js](./src/__SYSDefault/Menu.js) <br/>
Add the following block into the array of `MenuConfig`:

```jsx
{
  caption: "Dashboard", //page name
  link: "/Dashboard", //routing that set in index.js
  faIcon: "fas fa-chart-line", //icon, you can use your own JSX or fontawesome class
}
```

:star: FINISH :star:

## **Step-by-step Quick Data Management Page - Datumizo**

We would like to add a page that connecting the `/Tables/Item/*` API in `QSK_CMS_BE`.
The page would be call `MItems` which stands for managing items.

### **1. Adding necessary folder and files**

Beside the main component, `datalink.js` and `schema.js` is also needed.

The directory should be now like this:
```
src
`-- Pages
    |
    +-- MItems
        +--   MItems.js
        +--   datalink.js
        +--   schema.js
```

### **2. Implement `MItem.js`**

You can use template `~react-datumizo.js`. <br/>
Remember to tab through the document to fill the blanks.
```jsx
import React, { Component } from 'react';
import PropsType from 'prop-types';
import { observer } from 'mobx-react';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from 'IZOArc/LabIZO/Datumizo/Datumizo';
import { VStack } from 'IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority, STORE } from 'IZOArc/STATIC';
import { IZOTheme } from '__SYSDefault/Theme';
import { Denied } from 'IZOArc/Fallback';

/**
 * add ~react-datalink.js as datalink.js in the same scope
 * add ~react-schema.js as schema.js in the same scope
 * @augments {Component<Props, State>}
 */
class MItems extends Component {

  static propTypes = {
    addOns: PropsType.object,
    onDataChange: PropsType.func
  }

  static defaultProps = {
    addOns: {},
    onDataChange: undefined
  }

  constructor(){
    super();
    this.state = {
      title: "Manage Items",
      serverSidePagination: false, 
      base: {
        title: "Items",
        exportDoc: "items",
        schema: schema,
        reqAuth: "",

        noDefaultTable: false,
        noDefaultButtons: false,

        tablizo: {
          columnsToolbar: true,
          filterToolbar: true,
          densityToolbar: true,
          exportToolbar: false,
          density: "compact", //compact, standard, comfortable
          defaultPageSize: 50,
          showSelector: true,
        },

        formizo: {

        },

        Connect: {
          DBInfo: datalink.Request.DBInfo,
          List: datalink.Request.List,
          schema: schema.Table
        },

        operations: {
          Add: {
            title: "Add Items",
            url: datalink.Request.Add,
            success: "Items Added Successfully",
            fail: "Items Add Failed: ",
            schema: schema.Add,
            buttons: ["Clear", "Submit"],
            onSubmit: "Add"
          },
          Delete: {
            title: "Delete this Items?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.Delete,
            success: "Items Deleted Successfully.",
            fail: "Items Delete Failed: ",
            onSubmit: "Delete"
          },
          Edit: {
            title: "Edit Items ",
            url: datalink.Request.Edit,
            success: "Items Edited Successfully",
            fail: "Items Edit Failed: ",
            schema: schema.Edit,
            buttons: ["Revert", "Submit"],
            onSubmit: "Edit"
          },
          Info: {
            title: "Items ",
            url: datalink.Request.Info,
            success: "Items Load Successfully",
            fail: "Items Load Failed: ",
            schema: schema.Info,
            readOnly: true
          },
          Duplicate: { //direct duplicate, for to Add, plz use func: "DuplicateAdd"
            title: "Duplicate this Items?",
            url: datalink.Request.Duplicate,
            success: "Items Duplicated Successfully.",
            fail: "Items Duplicated Failed: ",
            onSubmit: "Duplicate"
          },
          Import: {
            title: "Items Import",
            content: "",
            url: datalink.Request.Import,
            success: "Items Imported Successfully.",
            fail: "Items Import Failed: ",
            schema: schema.ImportFormat,
            replace: false
          },
          Export: {
            url: datalink.Request.Export,
            schema: schema.Export,
          },
          DeleteBulk: {
            title: (n) => "Delete these " + n + " Items?",
            content: "Caution: This is irrevertable.",
            url: datalink.Request.DeleteBulk,
            success: "Items Deleted Successfully.",
            fail: "Items Delete Failed: ",
            onSubmit: "DeleteBulk",
          },
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            //{ icon: "duplicate", func: "Duplicate", caption: "Duplicate", reqFunc: "Duplicate" },
            //{ icon: "duplicate", func: "DuplicateAdd", caption: "Duplicate", reqFunc: "Duplicate" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [
            { icon: "add", func: "Add", caption: "Add Items", reqFunc: "Add" }
          ],
          right: [
            { icon: "deletebulk", func: "DeleteBulk", caption: (n) => "Delete (" + n + ")", reqFunc: "Delete", theme: "caution" },
            //{ icon: "export", func: "Export", caption: (n) => "Export (" + (n === 0 ? "All" : n) + ")", reqFunc: "Export" },
            //{ icon: "import", func: "Import", caption: "Import", reqFunc: "Import" },
          ],
        },
      }
    };
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(MItems.defaultProps))){
      this._setAllStates();
    }
  }

  componentWillUnmount(){
    this.setState = (state, callback) => {
      return;
    };
  }

  _setAllStates = (callback) => {
    this.setState((state, props) => ({
      ...props,
    }), callback);
  }

  onMountDatumizo = (callbacks) => {
    this.MountDatumizo = callbacks;
  }

  render(){
    let {addOns, onDataChange} = this.props;
    let {base, serverSidePagination, title} = this.state;
    if(!Authority.IsAccessibleQ("")) return <Denied/>;
    return (
      <VStack>
        <Box padding={1} width="100%">
          <Typography style={{
            textAlign: "left", 
            width: "100%",
            fontSize: 25,
            color: ColorX.GetColorCSS(IZOTheme.foreground)
            }}>
            {title}
          </Typography>
        </Box>
        <Datumizo lang={STORE.lang}
          base={base}
          addOns={addOns} 
          serverSidePagination={serverSidePagination} 
          onMounted={this.onMountDatumizo} 
          onDataChange={onDataChange}
          />
      </VStack>
    );
  }

}

export default observer(MItems);
```

### **3. Implement `datalink.js`**
You can use template `~react-datalink.js`

```jsx
const Request = {
  DBInfo: "/Tables/Item/Info",
  List: "/Tables/Item/List",
  Add: "/Tables/Item/Add",
  Delete: "/Tables/Item/Delete",
  Duplicate: "/Tables/Item/Duplicate",
  Edit: "/Tables/Item/Edit",
  Export: "/Tables/Item/Export",
  Import: "/Tables/Item/Import",
  DeleteBulk: "/Tables/Item/DeleteBulk",
};

let exports = {
  Request
};

export default exports;
```

### **4. Implement `schema.js`**
You can use template `~react-schema.js`.
You have to know the schema of [`Tablizo`](./src/IZOArc/LabIZO/Tablizo/README.md) and [`Formizo`](./src/IZOArc/LabIZO/Formizo/README.md)

let say the format of item document is:
```jsx
{
  _id: String,
  name: String
  producer: {
    name: String,
    country: String
  }
}
```

Here is an example of the schema.js
```jsx
const Table = [
  {
    label: "Item ID",
    name: "_id"
  },
  {
    label: "Item Name",
    name: "name"
  },
  {
    label: "Producer Name",
    name: "producer.name"
  },
  {
    label: "Producer Country",
    name: "producer.country"
  },
];

const Add = [
  {
    label: "Item Name",
    name: "name",
    format: "text"
  },
  {
    label: "Producer Name",
    name: "producer.name",
    format: "text"
  },
  {
    label: "Producer Country",
    name: "producer.country",
    format: "text"
  }
];

const Info = [
  {
    label: "Item ID",
    name: "_id",
    format: "text"
  },
  ...Add
];

const Edit = [
  ...Info
];

const Export = [
  ...Info
];

const Import = [];

const ImportFormat = [...Export];

const Filter = [];

const AdvFilter = [];

const schema = {
  Table,
  Info,
  Add,
  Edit,
  Export,
  Import,
  ImportFormat,
  Filter,
  AdvFilter
};

export default schema;
```

### **5. Add route to `index.js`**

### **6. Add the button to page in Menu bar**

:star: FINISH :star: