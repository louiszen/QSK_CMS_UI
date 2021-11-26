import DefTC from "IZOArc/_DefaultLocale/DefTC";

let TC = {
  __IZO: {...DefTC},
  AskConfirm: {
    title: "確認遞交申請",
    content: "確認資料填寫無誤，並遞交申請?"
  },
  Application: {
    success: {
      title: "成功提交申請",
      message: "這是你的申請編號 @refID"
    },
    fail: {
      title: "申請提交失敗",
      message: "請稍後再試。"
    } 
  },
  Authorization: {
    success: {
      title: "成功提交授權指令",
      message: "申請的狀態已更新。"
    },
    fail: {
      title: "提交授權指令失敗",
      message: "請稍後再試。"
    } 
  },
  Menu: {
    Dashboard: "主頁面",
    SubmitPermit: "提交申請",
    Submission: "瀏覽申請"
  },
  Dashboard: {
    Submit: "提交工作證申請",
    View: "瀏覽工作證申請"
  },
  SubmitPermit: {
    PageTitle: "工作許可證",
    Title: "工作許可證",
    Table: {
      id: "工作許可證編號",
      name: "工作許可證名稱",
    },
    Add: {
      title: "新增工作許可證",
      success: "成功新增工作許可證",
      fail: "新增工作許可證失敗: "
    },
    Delete: {
      title: "刪除工作許可證?",
      content: "注意: 這操作不可逆轉",
      success: "成功刪除工作許可證",
      fail: "刪除工作許可證失敗: "
    },
    Duplicate: {
      title: "複製工作許可證",
      success: "成功複製工作許可證",
      fail: "複製工作許可證失敗: "
    },
    Edit: {
      title: "編輯工作許可證",
      success: "成功編輯工作許可證",
      fail: "編輯工作許可證失敗: ",     
    },
    Info: {
      title: "工作許可證",
      success: "成功載入工作許可證",
      fail: "載入工作許可證失敗: ",
    },
    Import: {
      title: "導入工作許可證",
      success: "成功導入工作許可證",
      fail: "導入工作許可證失敗: ",
    },
    Export: {
      title: "導出工作許可證",
      success: "成功導出工作許可證",
      fail: "導出工作許可證失敗: ",
    },
    DeleteBulk: {
      title: "刪除這@n個工作許可證?",
      content: "注意: 這操作不可逆轉",
      success: "成功刪除工作許可證",
      fail: "刪除工作許可證失敗: "
    },
    ButtonCaption: {
      Add: "新增工作許可證",
      Edit: "編輯",
      Info: "詳細資料",
      Delete: "刪除",
      DeleteBulk: "刪除(@n)",
      Export: "導出(@n)",
      Import: "導入",
      Duplicate: "複製"
    }
  },
  Permit: {
    NotFound: "對不起，找不到相關工作許可證申請表。<br/>請與系統管理員鹽絡。"
  },
  Submission: {
    PageTitle: "申請",
    Title: "申請",
    Add: {
      title: "新增申請",
      success: "成功新增申請",
      fail: "新增申請失敗: "
    },
    Delete: {
      title: "刪除申請?",
      content: "注意: 這操作不可逆轉",
      success: "成功刪除申請",
      fail: "刪除申請失敗: "
    },
    Duplicate: {
      title: "複製申請",
      success: "成功複製申請",
      fail: "複製申請失敗: "
    },
    Edit: {
      title: "編輯申請",
      success: "成功編輯申請",
      fail: "編輯申請失敗: ",     
    },
    Info: {
      title: "申請",
      success: "成功載入申請",
      fail: "載入申請失敗: ",
    },
    Import: {
      title: "導入申請",
      success: "成功導入申請",
      fail: "導入申請失敗: ",
    },
    Export: {
      title: "導出申請",
      success: "成功導出申請",
      fail: "導出申請失敗: ",
    },
    DeleteBulk: {
      title: "刪除這@n個申請?",
      content: "注意: 這操作不可逆轉",
      success: "成功刪除申請",
      fail: "刪除申請失敗: "
    },
    ButtonCaption: {
      Add: "新增申請",
      Edit: "編輯",
      Info: "詳細資料",
      Delete: "刪除",
      DeleteBulk: "刪除(@n)",
      Export: "導出(@n)",
      Import: "導入",
      Duplicate: "複製"
    }
  }
};

export default TC;