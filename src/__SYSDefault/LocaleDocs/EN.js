import DefEN from "IZOArc/_DefaultLocale/DefEN";

let EN = {
  __IZO: {...DefEN},
  AskConfirm: {
    title: "Confirm Submission",
    content: "Confirm the information is filled in correctly and submit the application?"
  },
  Application: {
    success: {
      title: "Application Submit Success",
      message: "This is your application reference No. @refID"
    },
    fail: {
      title: "Application Submit Fails.",
      message: "Please try again later."
    } 
  },
  Authorization: {
    success: {
      title: "Authorization Submit Success",
      message: "The status of the application is updated."
    },
    fail: {
      title: "Authorization Submit Fails.",
      message: "Please try again later."
    } 
  },
  Menu: {
    Dashboard: "Main Page",
    SubmitPermit: "Submit Permit Application",
    Submission: "View Submitted Application"
  },
  Dashboard: {
    Submit: "Submit Permit Application",
    View: "View Permit Applications"
  },
  SubmitPermit: {
    PageTitle: "Permits",
    Title: "Permit",
    Table: {
      id: "Permit ID",
      name: "Permit Name",
    },
    Add: {
      title: "Add Permit",
      success: "Permit Added Successfully",
      fail: "Permit Add Failed: "
    },
    Delete: {
      title: "Delete this Permit?",
      content: "Caution: This is irrevertable.",
      success: "Permit Deleted Successfully.",
      fail: "Permit Delete Failed: "
    },
    Duplicate: {
      title: "Duplicate",
      success: "Permit Duplicated Successfully.",
      fail: "Permit Duplicate Failed: "
    },
    Edit: {
      title: "Edit Permit",
      success: "Permit Edited Successfully",
      fail: "Permit Edit Failed: ",     
    },
    Info: {
      title: "Permit",
      success: "Permit Load Successfully",
      fail: "Permit Load Failed: ",
    },
    Import: {
      title: "Import Permits",
      success: "Permits Imported Successfully.",
      fail: "Permits Import Failed: ",
    },
    Export: {
      title: "Export Permits",
      success: "Permits exported Successfully.",
      fail: "Permits Export Failed: ",
    },
    DeleteBulk: {
      title: "Delete these @n Permit?",
      content: "Caution: This is irrevertable.",
      success: "Permit Deleted Successfully.",
      fail: "Permit Delete Failed: ",
    },
    ButtonCaption: {
      Add: "Add Permit",
      Edit: "Edit",
      Info: "Details",
      Delete: "Delete",
      DeleteBulk: "Delete(@n)",
      Export: "Export(@n)",
      Import: "Import",
      Duplicate: "Duplicate"
    }
  },
  Permit: {
    NotFound: "Sorry, cannot find relevant permit application form.<br/>Please contact system administrator."
  },
  Submission: {
    PageTitle: "Applications",
    Title: "Applications",
    Add: {
      title: "Add Applications",
      success: "Applications Added Successfully",
      fail: "Applications Add Failed: "
    },
    Delete: {
      title: "Delete this Applications?",
      content: "Caution: This is irrevertable.",
      success: "Applications Deleted Successfully.",
      fail: "Applications Delete Failed: "
    },
    Duplicate: {
      title: "Duplicate",
      success: "Applications Duplicated Successfully.",
      fail: "Applications Duplicate Failed: "
    },
    Edit: {
      title: "Edit Applications",
      success: "Applications Edited Successfully",
      fail: "Applications Edit Failed: ",     
    },
    Info: {
      title: "Applications",
      success: "Applications Load Successfully",
      fail: "Applications Load Failed: ",
    },
    Import: {
      title: "Import Applicationss",
      success: "Applicationss Imported Successfully.",
      fail: "Applicationss Import Failed: ",
    },
    Export: {
      title: "Export Applicationss",
      success: "Applicationss exported Successfully.",
      fail: "Applicationss Export Failed: ",
    },
    DeleteBulk: {
      title: "Delete these @n Applications?",
      content: "Caution: This is irrevertable.",
      success: "Applications Deleted Successfully.",
      fail: "Applications Delete Failed: ",
    },
    ButtonCaption: {
      Add: "Add Applications",
      Edit: "Edit",
      Info: "Details",
      Delete: "Delete",
      DeleteBulk: "Delete(@n)",
      Export: "Export(@n)",
      Import: "Import",
      Duplicate: "Duplicate"
    }
  }
};

export default EN;