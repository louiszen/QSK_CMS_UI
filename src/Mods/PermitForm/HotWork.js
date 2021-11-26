import { Typography } from "@mui/material"
import { LocaleX } from "IZOArc/STATIC"
import { IZOFontFamily } from "__SYSDefault/Theme"

const Application = [
  {
    label: () => LocaleX.Parse({
      EN: "Job No.",
      TC: "項目編號"
    }),
    name: "jobNo",
    format: "text",
    validate: ["required"]
  },
  {
    inline: [
      {
        label: () => LocaleX.Parse({
          EN: "Name of Permit-to-work In-charge",
          TC: "負責人姓名"
        }),
        name: "PTWIC.Name",
        format: "text",
        validate: ["required"]
      },
      {
        label: () => LocaleX.Parse({
          EN: "Post of Permit-to-work In-charge",
          TC: "負責人職位"
        }),
        name: "PTWIC.Post",
        format: "text",
        validate: ["required"]
      }
    ]
  },
  {
    width: 400,
    header: () => 
    (
      <Typography style={{
        fontFamily: IZOFontFamily,
        fontSize: 18
      }}>
        {
          LocaleX.Parse({
            EN: "Type of Hot Work to be Undertaken:",
            TC: "熱工序種類"
          })
        }
      </Typography>
    ),
  },
  {
    inline: [
      {
        label: "",
        name: "hotworktype",
        format: "select",
        selectStyle: "checkbox",
        selectDirection: "row",
        width: 500,
        selectRef: [
          {
            cap: () => LocaleX.Parse({
              EN: "Arc Welding",
              TC: "電焊"
            }),
            val: "arcWelding"
          },
          {
            cap: () => LocaleX.Parse({
              EN: "Flame Cutting",
              TC: "氣焊"
            }),
            val: "flameCutting"
          }
        ],
        selectCap: "cap",
        selectVal: "val"
      },
      {
        label: () => LocaleX.Parse({
          EN: "Other",
          TC: "其他"
        }),
        name: "hotworktypeOther.selected",
        format: "bool",
        width: 200
      },
      {
        control: "hotworktypeOther.selected",
        fold: [
          {
            label: "",
            name: "hotworktypeOther.value",
            format: "text"
          }
        ]
      }
    ]
  },
  {
    label: () => LocaleX.Parse({
      EN: "Duration of Work",
      TC: "申請日期及時間 "
    }),
    name: "duration",
    format: "daterange"
  },
  {
    label: () => LocaleX.Parse({
      EN: "Safety Precaution Taken",
      TC: "安全預防措施"
    }),
    name: "precaution",
    format: "select", 
    selectStyle: "checkbox",
    selectDirection: "row",
    selectRef: [
      {
        cap: () => LocaleX.Parse({
          EN: "Fire Blanket",
          TC: "防火毯"
        }),
        val: "fireBlanket"
      },
      {
        cap: () => LocaleX.Parse({
          EN: "Weld Yazha",
          TC: "焊矢篼"
        }),
        val: "weldYazha"
      },
      {
        cap: () => LocaleX.Parse({
          EN: "Shading board / cloth",
          TC: "遮光板 / 布"
        }),
        val: "shading"
      }
    ],
    selectCap: "cap",
    selectVal: "val"
  },
  {
    label: () => LocaleX.Parse({
      EN: "Gas welding inspection",
      TC: "氣焊檢查"
    }),
    name: "gasWeldingInspection",
    format: "select", 
    selectStyle: "checkbox",
    selectDirection: "column",
    selectRef: [
      {
        cap: () => LocaleX.Parse({
          EN: "Vertical placement and stabilization of wind coal cylinders",
          TC: "風煤樽垂直擺放及穏固 "
        }),
        val: "stablilization"
      },
      {
        cap: () => LocaleX.Parse({
          EN: "Keep the wind and coal throat away from heat and flames",
          TC: "風煤喉遠離熱源及火焰"
        }),
        val: "keepAwayHeat"
      },
      {
        cap: () => LocaleX.Parse({
          EN: "The ventilating and coal bottle pipes are firmly connected and there is no gas leakage",
          TC: "風煤樽喉接駁穏固及沒有氣體洩漏"
        }),
        val: "leakage"
      }
    ],
    selectCap: "cap",
    selectVal: "val"
  },
  {
    label: () => LocaleX.Parse({
      EN: "Welding inspection",
      TC: "電焊檢查"
    }),
    name: "weldingInspection",
    format: "select", 
    selectStyle: "checkbox",
    selectDirection: "column",
    selectRef: [
      {
        cap: () => LocaleX.Parse({
          EN: "Welder input wire connection position",
          TC: "焊機輸入線接駁位"
        }),
        val: "position"
      },
      {
        cap: () => LocaleX.Parse({
          EN: "Output wire (bonding wire and ground wire)",
          TC: "輸出線 (焊線及地線)"
        }),
        val: "outputWire"
      },
      {
        cap: () => LocaleX.Parse({
          EN: "Welding tongs",
          TC: "焊鉗"
        }),
        val: "tongs"
      },
      {
        cap: () => LocaleX.Parse({
          EN: "Ground clamp / clamp",
          TC: "地線夾 / 鉗"
        }),
        val: "clamp"
      }
    ],
    selectCap: "cap",
    selectVal: "val"
  },
  {
    label: () => LocaleX.Parse({
      EN: "Construction date",
      TC: "施工日期"
    }),
    name: "construction",
    arrayStyle: "card",
    canAdd: true,
    canDelete: true,
    array: [
      {
        label: () => LocaleX.Parse({
          EN: "Construction Date",
          TC: "施工日期"
        }),
        name: "date",
        format: "date"
      },
      {
        label: () => LocaleX.Parse({
          EN: "Fire Fighting Equipment in the vicinity",
          TC: "提供滅火筒"
        }),
        name: "fireFightingEq",
        format: "bool"
      },
      {
        label: () => LocaleX.Parse({
          EN: "All Flammable Materials Removed from the vicinity",
          TC: "易燃物品遠離燒焊範圍 "
        }),
        name: "removeFlammable",
        format: "bool"
      },
      {
        label: () => LocaleX.Parse({
          EN: "Sufficient Ventilation at Working Location",
          TC: "足夠通風"
        }),
        name: "ventilation",
        format: "bool"
      },
      {
        label: () => LocaleX.Parse({
          EN: "All Workers Wear Suitable PPE",
          TC: "工人使用安全防護用品"
        }),
        name: "ppe",
        format: "bool"
      },
      {
        label: () => LocaleX.Parse({
          EN: "All Workers involved in flame cutting received recognized training",
          TC: "工人接安全訓練 "
        }),
        name: "training",
        format: "bool"
      }
    ]
  }
]

const Approval = [
  
]

const Acknowledgement = [
  
]

const Completion = [
  
]

let HotWorkForm = {
  Application,
  Approval,
  Acknowledgement,
  Completion
}

export default HotWorkForm;