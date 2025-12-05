const BASE_PATH = '/vocab-test/';
const vocabByUnit = {
  "unit1": [
    {
      "word": "able",
      "definition": "能夠"
    },
    {
      "word": "agreement",
      "definition": "協議；同意"
    },
    {
      "word": "apply",
      "definition": "申請；塗抹"
    },
    {
      "word": "balance",
      "definition": "平衡"
    },
    {
      "word": "barrier",
      "definition": "障礙"
    },
    {
      "word": "capture",
      "definition": "捕獲；逮捕"
    },
    {
      "word": "clearly",
      "definition": "清楚地；明白地"
    },
    {
      "word": "coach",
      "definition": "教練"
    },
    {
      "word": "condition",
      "definition": "狀況"
    },
    {
      "word": "coward",
      "definition": "懦夫"
    },
    {
      "word": "deal",
      "definition": "交易； 處理"
    },
    {
      "word": "deliver",
      "definition": "傳遞"
    },
    {
      "word": "disease",
      "definition": "疾病"
    },
    {
      "word": "emerge",
      "definition": "浮現"
    },
    {
      "word": "eventual",
      "definition": "最終的"
    },
    {
      "word": "following",
      "definition": "下列的"
    },
    {
      "word": "handy",
      "definition": "便利的；靈巧的"
    },
    {
      "word": "hang",
      "definition": "懸掛"
    },
    {
      "word": "humble",
      "definition": "謙遜的"
    },
    {
      "word": "independent",
      "definition": "獨立的；自主的"
    },
    {
      "word": "invest",
      "definition": "投資；投入"
    },
    {
      "word": "likely",
      "definition": "有可能的；有可能地"
    },
    {
      "word": "lotion",
      "definition": "護膚乳液"
    },
    {
      "word": "mass",
      "definition": "大量；大規模的"
    },
    {
      "word": "mineral",
      "definition": "礦物 (質)"
    },
    {
      "word": "mistakenly",
      "definition": "錯誤地"
    },
    {
      "word": "neighborhood",
      "definition": "街區；附近地區"
    },
    {
      "word": "opinion",
      "definition": "意見"
    },
    {
      "word": "passion",
      "definition": "熱情"
    },
    {
      "word": "praise",
      "definition": "讚美；讚揚"
    },
    {
      "word": "primary",
      "definition": "主要的"
    },
    {
      "word": "proof",
      "definition": "證據；證物"
    },
    {
      "word": "purchase",
      "definition": "購買；購買之物"
    },
    {
      "word": "recent",
      "definition": "最近的"
    },
    {
      "word": "relative",
      "definition": "相對的；親戚"
    },
    {
      "word": "resource",
      "definition": "資源"
    },
    {
      "word": "scream",
      "definition": "尖叫"
    },
    {
      "word": "uspirit",
      "definition": "精神；"
    },
    {
      "word": "sufficient",
      "definition": "足夠的"
    },
    {
      "word": "suggest",
      "definition": "建議；推薦"
    },
    {
      "word": "temperature",
      "definition": "溫度；熱度"
    },
    {
      "word": "transportation",
      "definition": "運輸(工具)"
    },
    {
      "word": "unexpectedly",
      "definition": "出人意料地"
    },
    {
      "word": "vehicle",
      "definition": "交通工具；車輛"
    },
    {
      "word": "virus",
      "definition": "(電腦)病毒"
    },
    {
      "word": "discriminate",
      "definition": "歧視"
    },
    {
      "word": "equal",
      "definition": "pay 同工同酬"
    },
    {
      "word": "parade",
      "definition": "遊行"
    },
    {
      "word": "prejudice",
      "definition": "偏見"
    },
    {
      "word": "stereotype",
      "definition": "刻板印象"
    }
  ],
  "unit2": [
    {
      "word": "absent",
      "definition": "缺席的"
    },
    {
      "word": "aim",
      "definition": "目的；力求達到"
    },
    {
      "word": "amazingly",
      "definition": "驚人地"
    },
    {
      "word": "announce",
      "definition": "宣布"
    },
    {
      "word": "appreciate",
      "definition": "賞識；感激；察覺"
    },
    {
      "word": "bargain",
      "definition": "特價商品；討價還價"
    },
    {
      "word": "career",
      "definition": "生涯；職業"
    },
    {
      "word": "coast",
      "definition": "海岸；海濱"
    },
    {
      "word": "crash",
      "definition": "碰撞；交通事故) 碰撞"
    },
    {
      "word": "demand",
      "definition": "要求； (堅決的) 要求；需求"
    },
    {
      "word": "distant",
      "definition": "遙遠的"
    },
    {
      "word": "dominate",
      "definition": "支配"
    },
    {
      "word": "emergency",
      "definition": "緊急情況"
    },
    {
      "word": "evidence",
      "definition": "證據；證詞"
    },
    {
      "word": "fear",
      "definition": "害怕；恐懼；害怕"
    },
    {
      "word": "fool",
      "definition": "愚弄；傻子；受騙者"
    },
    {
      "word": "generation",
      "definition": "世代；一代"
    },
    {
      "word": "generous",
      "definition": "寬厚的；慷慨的"
    },
    {
      "word": "hardly",
      "definition": "幾乎不；簡直不"
    },
    {
      "word": "humid",
      "definition": "潮濕的"
    },
    {
      "word": "infection",
      "definition": "感染；傳染病"
    },
    {
      "word": "instrument",
      "definition": "儀器；樂器"
    },
    {
      "word": "lately",
      "definition": "最近地"
    },
    {
      "word": "lottery",
      "definition": "樂透；彩券"
    },
    {
      "word": "massive",
      "definition": "厚重的；大規模的"
    },
    {
      "word": "nerve",
      "definition": "神經；膽量"
    },
    {
      "word": "opportunity",
      "definition": "時機；機會"
    },
    {
      "word": "passport",
      "definition": "護照"
    },
    {
      "word": "plain",
      "definition": "簡樸的；平原"
    },
    {
      "word": "pray",
      "definition": "祈求；祈禱"
    },
    {
      "word": "principal",
      "definition": "主要的；校長"
    },
    {
      "word": "proper",
      "definition": "適當的；合適的"
    },
    {
      "word": "pure",
      "definition": "純潔的；純粹的"
    },
    {
      "word": "recharge",
      "definition": "再充電；控告；充電；收費"
    },
    {
      "word": "relatively",
      "definition": "相對地"
    },
    {
      "word": "relax",
      "definition": "放鬆；鬆懈"
    },
    {
      "word": "religion",
      "definition": "宗教；…教"
    },
    {
      "word": "respect",
      "definition": "尊敬；尊敬"
    },
    {
      "word": "screen",
      "definition": "螢幕"
    },
    {
      "word": "sight",
      "definition": "景象；視力"
    },
    {
      "word": "spoil",
      "definition": "寵愛；破壞"
    },
    {
      "word": "suit",
      "definition": "適合； 套裝；西裝"
    },
    {
      "word": "tend",
      "definition": "傾向於；照顧"
    },
    {
      "word": "travel",
      "definition": "旅行；行進； 旅行"
    },
    {
      "word": "vitamin",
      "definition": "維他命"
    },
    {
      "word": "aftershock",
      "definition": "餘震"
    },
    {
      "word": "disaster",
      "definition": "災害"
    },
    {
      "word": "outbreak",
      "definition": "爆發"
    },
    {
      "word": "rescue",
      "definition": "救援；拯救"
    },
    {
      "word": "security",
      "definition": "安全"
    }
  ],
  "unit3": [
    {
      "word": "accept",
      "definition": "同意；接受"
    },
    {
      "word": "addicted",
      "definition": "上癮的；沉迷的"
    },
    {
      "word": "applicant",
      "definition": "申請者"
    },
    {
      "word": "appropriate",
      "definition": "適當的"
    },
    {
      "word": "bacteria",
      "definition": "細菌"
    },
    {
      "word": "base",
      "definition": "基礎；底部"
    },
    {
      "word": "cash",
      "definition": "現金；兌現"
    },
    {
      "word": "colorful",
      "definition": "色彩鮮豔的；多采多姿的"
    },
    {
      "word": "confident",
      "definition": "有信心的；確信的"
    },
    {
      "word": "create",
      "definition": "創造；產生"
    },
    {
      "word": "definitely",
      "definition": "當然，確實"
    },
    {
      "word": "deserve",
      "definition": "值得；應得"
    },
    {
      "word": "display",
      "definition": "展出；表現；展覽 (品)；"
    },
    {
      "word": "emotion",
      "definition": "情感；情緒"
    },
    {
      "word": "examine",
      "definition": "檢查；考試"
    },
    {
      "word": "extremely",
      "definition": "非常地"
    },
    {
      "word": "feature",
      "definition": "特徵；特色；以…為特色"
    },
    {
      "word": "forgive",
      "definition": "寬恕，原諒"
    },
    {
      "word": "gentle",
      "definition": "溫和的；輕柔的"
    },
    {
      "word": "harm",
      "definition": "傷害"
    },
    {
      "word": "humor",
      "definition": "幽默 (感)"
    },
    {
      "word": "inferior",
      "definition": "較差的；低於的"
    },
    {
      "word": "journal",
      "definition": "期刊；日記"
    },
    {
      "word": "loosely",
      "definition": "鬆散地"
    },
    {
      "word": "lower",
      "definition": "降低；放下；較低的"
    },
    {
      "word": "master",
      "definition": "主人；精通"
    },
    {
      "word": "missing",
      "definition": "失蹤的；缺少的"
    },
    {
      "word": "normal",
      "definition": "普通的；正常的"
    },
    {
      "word": "opposite",
      "definition": "相反的；對面的"
    },
    {
      "word": "password",
      "definition": "(通關)密碼；口令"
    },
    {
      "word": "plane",
      "definition": "行星"
    },
    {
      "word": "precious",
      "definition": "珍奇的；貴重的"
    },
    {
      "word": "primarily",
      "definition": "主要地"
    },
    {
      "word": "property",
      "definition": "財產；所有物"
    },
    {
      "word": "quality",
      "definition": "品質；特性"
    },
    {
      "word": "recognize",
      "definition": "認出；承認"
    },
    {
      "word": "release",
      "definition": "釋放；發行"
    },
    {
      "word": "respond",
      "definition": "反應；回答"
    },
    {
      "word": "search",
      "definition": "搜尋；尋找"
    },
    {
      "word": "sign",
      "definition": "簽名；標誌；徵兆；手勢"
    },
    {
      "word": "spread",
      "definition": "散佈； 擴散"
    },
    {
      "word": "suitable",
      "definition": "適當的；合適的"
    },
    {
      "word": "tension",
      "definition": "緊張狀況；繃緊"
    },
    {
      "word": "treasure",
      "definition": "寶物；財物"
    },
    {
      "word": "vocabulary",
      "definition": "字彙；詞彙"
    },
    {
      "word": "allowance",
      "definition": "零用錢"
    },
    {
      "word": "childrearing",
      "definition": "養育小孩"
    },
    {
      "word": "discipline",
      "definition": "教養"
    },
    {
      "word": "housework",
      "definition": "家事"
    },
    {
      "word": "sibling",
      "definition": "兄弟姊妹"
    }
  ],
  "unit4": [
    {
      "word": "accident",
      "definition": "意外事故"
    },
    {
      "word": "alive",
      "definition": "活著的；存在的"
    },
    {
      "word": "asleep",
      "definition": "睡著的"
    },
    {
      "word": "barely",
      "definition": "勉強地"
    },
    {
      "word": "battery",
      "definition": "電池"
    },
    {
      "word": "casual",
      "definition": "偶然的；非正式的"
    },
    {
      "word": "combine",
      "definition": "結合；聯合"
    },
    {
      "word": "confirm",
      "definition": "證實；確認"
    },
    {
      "word": "design",
      "definition": "設計；設計；構思"
    },
    {
      "word": "distance",
      "definition": "距離"
    },
    {
      "word": "divide",
      "definition": "分開；分組"
    },
    {
      "word": "effective",
      "definition": "有效的"
    },
    {
      "word": "emphasize",
      "definition": "強調；著重"
    },
    {
      "word": "fee",
      "definition": "費用"
    },
    {
      "word": "fluently",
      "definition": "流利地"
    },
    {
      "word": "fortune",
      "definition": "財富；運氣"
    },
    {
      "word": "frequently",
      "definition": "經常地"
    },
    {
      "word": "harvest",
      "definition": "收成；收獲；收割"
    },
    {
      "word": "inflate",
      "definition": "膨脹；抬高 (價格)"
    },
    {
      "word": "journey",
      "definition": "旅程；旅行"
    },
    {
      "word": "leak",
      "definition": "漏；洩漏；漏洞；漏出量"
    },
    {
      "word": "luck",
      "definition": "運氣；好運"
    },
    {
      "word": "matter",
      "definition": "事情；事件；要緊；重要"
    },
    {
      "word": "misuse",
      "definition": "誤用；濫用"
    },
    {
      "word": "neglect",
      "definition": "忽視；疏忽；疏忽"
    },
    {
      "word": "notice",
      "definition": "注意到；察覺到"
    },
    {
      "word": "optimistic",
      "definition": "樂觀的"
    },
    {
      "word": "overcome",
      "definition": "克服；戰勝"
    },
    {
      "word": "patient",
      "definition": "有耐心的"
    },
    {
      "word": "plastic",
      "definition": "塑膠的"
    },
    {
      "word": "predict",
      "definition": "預言；預測"
    },
    {
      "word": "print",
      "definition": "列印；印刷"
    },
    {
      "word": "propose",
      "definition": "提議；求婚"
    },
    {
      "word": "quantity",
      "definition": "數量；大量"
    },
    {
      "word": "recommend",
      "definition": "推薦；建議"
    },
    {
      "word": "relief",
      "definition": "慰藉；解脫； (疼痛)減緩"
    },
    {
      "word": "respectfully",
      "definition": "恭敬地；有禮地"
    },
    {
      "word": "responsible",
      "definition": "有責任的；負責的"
    },
    {
      "word": "secret",
      "definition": "祕密；adj. 祕密的；神祕的"
    },
    {
      "word": "similar",
      "definition": "相似的；類似的"
    },
    {
      "word": "square",
      "definition": "正方形；廣場"
    },
    {
      "word": "superb",
      "definition": "極好的；一流的"
    },
    {
      "word": "text",
      "definition": "正文；訊息；發訊息"
    },
    {
      "word": "treat",
      "definition": "對待；醫治；請客"
    },
    {
      "word": "vocational",
      "definition": "職業的"
    },
    {
      "word": "ethical",
      "definition": "道德的"
    },
    {
      "word": "moral",
      "definition": "道德教訓"
    },
    {
      "word": "obligation",
      "definition": "義務"
    },
    {
      "word": "public",
      "definition": "morality 公德心"
    },
    {
      "word": "virtue",
      "definition": "美德"
    }
  ],
  "unit5": [
    {
      "word": "alergic",
      "definition": "過敏的"
    },
    {
      "word": "associate",
      "definition": "聯想"
    },
    {
      "word": "beep",
      "definition": "發出嗶嗶聲；嗶嗶聲"
    },
    {
      "word": "cause",
      "definition": "造成；原因；理由"
    },
    {
      "word": "ceremony",
      "definition": "典禮"
    },
    {
      "word": "comment",
      "definition": "評論；意見"
    },
    {
      "word": "connect",
      "definition": "銜接；連接"
    },
    {
      "word": "credit",
      "definition": "信用；學分"
    },
    {
      "word": "desire",
      "definition": "慾望；渴望；渴望"
    },
    {
      "word": "distinguish",
      "definition": "區分；辨別"
    },
    {
      "word": "employ",
      "definition": "僱用"
    },
    {
      "word": "exchange",
      "definition": "交換；交換"
    },
    {
      "word": "export",
      "definition": "出口；出口；出口物"
    },
    {
      "word": "feed",
      "definition": "飼養；養活"
    },
    {
      "word": "fortunate",
      "definition": "幸運的"
    },
    {
      "word": "found",
      "definition": "建立；創辦"
    },
    {
      "word": "gesture",
      "definition": "手勢；姿勢"
    },
    {
      "word": "haven",
      "definition": "避難所"
    },
    {
      "word": "screa",
      "definition": "忽略；忽視"
    },
    {
      "word": "influence",
      "definition": "影響；影響"
    },
    {
      "word": "judge",
      "definition": "判斷；法官，裁判"
    },
    {
      "word": "lung",
      "definition": "肺"
    },
    {
      "word": "mature",
      "definition": "成熟的"
    },
    {
      "word": "mix",
      "definition": "混合"
    },
    {
      "word": "notion",
      "definition": "概念；想法"
    },
    {
      "word": "nowhere",
      "definition": "任何地方都沒"
    },
    {
      "word": "option",
      "definition": "選擇"
    },
    {
      "word": "otherwise",
      "definition": "否則"
    },
    {
      "word": "pattern",
      "definition": "模式；圖案"
    },
    {
      "word": "pleasant",
      "definition": "愉快的；舒適的"
    },
    {
      "word": "prefer",
      "definition": "較喜歡；寧願"
    },
    {
      "word": "prison",
      "definition": "監獄"
    },
    {
      "word": "protect",
      "definition": "保衛；保護"
    },
    {
      "word": "quarrel",
      "definition": "爭吵；吵架"
    },
    {
      "word": "record",
      "definition": "紀錄；紀錄；唱片"
    },
    {
      "word": "religious",
      "definition": "宗教的；虔誠的"
    },
    {
      "word": "result",
      "definition": "結果"
    },
    {
      "word": "secretary",
      "definition": "祕書"
    },
    {
      "word": "simply",
      "definition": "簡直；僅僅"
    },
    {
      "word": "smooth",
      "definition": "平滑的；順利的"
    },
    {
      "word": "standard",
      "definition": "標準"
    },
    {
      "word": "superstition",
      "definition": "迷信"
    },
    {
      "word": "thereafter",
      "definition": "從那以後"
    },
    {
      "word": "tremble",
      "definition": "擔心；顫抖"
    },
    {
      "word": "vote",
      "definition": "投票；表決；選票；表決"
    },
    {
      "word": "job",
      "definition": "market 就業市場"
    },
    {
      "word": "profession",
      "definition": "職業；專業"
    },
    {
      "word": "selfemployed",
      "definition": "自雇的"
    },
    {
      "word": "strength",
      "definition": "優點；長處"
    },
    {
      "word": "weakness",
      "definition": "弱點；缺點"
    }
  ],
  "unit6": [
    {
      "word": "achieve",
      "definition": "完成；實現"
    },
    {
      "word": "advocate",
      "definition": "主張；擁護"
    },
    {
      "word": "allow",
      "definition": "允許；准許"
    },
    {
      "word": "athlete",
      "definition": "運動員"
    },
    {
      "word": "behave",
      "definition": "表現；行為"
    },
    {
      "word": "cautious",
      "definition": "小心的"
    },
    {
      "word": "commercial",
      "definition": "商業的；商業廣告"
    },
    {
      "word": "conservative",
      "definition": "保守的；傳統的"
    },
    {
      "word": "device",
      "definition": "裝置"
    },
    {
      "word": "disturb",
      "definition": "打擾；使不安"
    },
    {
      "word": "effec",
      "definition": "影響；效果"
    },
    {
      "word": "enable",
      "definition": "使能夠"
    },
    {
      "word": "exhibition",
      "definition": "展覽 (會)"
    },
    {
      "word": "fight",
      "definition": "對抗；吵架"
    },
    {
      "word": "frank",
      "definition": "坦白的"
    },
    {
      "word": "global",
      "definition": "全球的；整體的"
    },
    {
      "word": "headache",
      "definition": "頭痛；令人頭痛的事"
    },
    {
      "word": "image",
      "definition": "形象；印象"
    },
    {
      "word": "inform",
      "definition": "通知"
    },
    {
      "word": "instead",
      "definition": "取而代之"
    },
    {
      "word": "kick",
      "definition": "踢；踢"
    },
    {
      "word": "likewise",
      "definition": "同樣地"
    },
    {
      "word": "luxurious",
      "definition": "豪華的"
    },
    {
      "word": "maximize",
      "definition": "使最大化"
    },
    {
      "word": "model",
      "definition": "模型；模特兒"
    },
    {
      "word": "novel",
      "definition": "(長篇)小說；新奇的"
    },
    {
      "word": "nutrition",
      "definition": "營養"
    },
    {
      "word": "overall",
      "definition": "整體的；整體上"
    },
    {
      "word": "payment",
      "definition": "支付款項；支付"
    },
    {
      "word": "polite",
      "definition": "有禮貌的"
    },
    {
      "word": "prepare",
      "definition": "準備；籌劃"
    },
    {
      "word": "private",
      "definition": "私人的；非公開的"
    },
    {
      "word": "prohibit",
      "definition": "禁止；阻止"
    },
    {
      "word": "proud",
      "definition": "驕傲的"
    },
    {
      "word": "quit",
      "definition": "停止(做)；放棄"
    },
    {
      "word": "rapidly",
      "definition": "快速地"
    },
    {
      "word": "recover",
      "definition": "恢復；痊癒；重新獲得"
    },
    {
      "word": "reluctant",
      "definition": "不情願的；勉強的"
    },
    {
      "word": "reveal",
      "definition": "展示；揭露"
    },
    {
      "word": "security",
      "definition": "安全(措施)"
    },
    {
      "word": "single",
      "definition": "單一的；單身的"
    },
    {
      "word": "stare",
      "definition": "盯；凝視"
    },
    {
      "word": "therefore",
      "definition": "因此"
    },
    {
      "word": "tropical",
      "definition": "熱帶的"
    },
    {
      "word": "wage",
      "definition": "工資"
    },
    {
      "word": "ambassador",
      "definition": "大使"
    },
    {
      "word": "diplomacy",
      "definition": "外交"
    },
    {
      "word": "multinational",
      "definition": "國的；跨國的"
    },
    {
      "word": "sister",
      "definition": "city 姊妹市"
    },
    {
      "word": "treaty",
      "definition": "條約"
    }
  ],
  "unit7": [
    {
      "word": "active",
      "definition": "積極的；活躍的"
    },
    {
      "word": "ally",
      "definition": "同盟國，盟友"
    },
    {
      "word": "apparently",
      "definition": "顯然地；似乎"
    },
    {
      "word": "appropriately",
      "definition": "適當地"
    },
    {
      "word": "attack",
      "definition": "攻擊"
    },
    {
      "word": "being",
      "definition": "存在；生物"
    },
    {
      "word": "celebrate",
      "definition": "慶祝"
    },
    {
      "word": "communicate",
      "definition": "溝通"
    },
    {
      "word": "conflict",
      "definition": "衝突；衝突"
    },
    {
      "word": "consist",
      "definition": "由…組成"
    },
    {
      "word": "crime",
      "definition": "罪行；犯罪活動"
    },
    {
      "word": "dialogue",
      "definition": "對話"
    },
    {
      "word": "doubt",
      "definition": "懷疑；懷疑"
    },
    {
      "word": "encourage",
      "definition": "鼓勵"
    },
    {
      "word": "eventually",
      "definition": "最終"
    },
    {
      "word": "exist",
      "definition": "存在"
    },
    {
      "word": "figure",
      "definition": "認為；料到；數字；人物；身材"
    },
    {
      "word": "freedom",
      "definition": "自由"
    },
    {
      "word": "goal",
      "definition": "目標"
    },
    {
      "word": "headline",
      "definition": "(報紙的) 標題"
    },
    {
      "word": "immediate",
      "definition": "立即的"
    },
    {
      "word": "information",
      "definition": "資訊"
    },
    {
      "word": "legal",
      "definition": "合法的；法律的"
    },
    {
      "word": "mad",
      "definition": "瘋狂的"
    },
    {
      "word": "means",
      "definition": "手段，方法"
    },
    {
      "word": "murder",
      "definition": "謀殺"
    },
    {
      "word": "nowadays",
      "definition": "現今"
    },
    {
      "word": "ordinary",
      "definition": "普通的"
    },
    {
      "word": "peace",
      "definition": "和平"
    },
    {
      "word": "pollute",
      "definition": "汙染"
    },
    {
      "word": "prescribe",
      "definition": "(醫師)開處方"
    },
    {
      "word": "prize",
      "definition": "獎賞"
    },
    {
      "word": "prove",
      "definition": "證明"
    },
    {
      "word": "rapid",
      "definition": "快速的"
    },
    {
      "word": "recycle",
      "definition": "回收再利用"
    },
    {
      "word": "remain",
      "definition": "保持"
    },
    {
      "word": "review",
      "definition": "複習；審查；評論"
    },
    {
      "word": "seek",
      "definition": "尋找"
    },
    {
      "word": "site",
      "definition": "場所，地點"
    },
    {
      "word": "starve",
      "definition": "挨餓"
    },
    {
      "word": "supply",
      "definition": "供應；補給品"
    },
    {
      "word": "temporarily",
      "definition": "暫時地"
    },
    {
      "word": "thick",
      "definition": "厚的；濃密的"
    },
    {
      "word": "unforgettable",
      "definition": "難忘的"
    },
    {
      "word": "wagon",
      "definition": "(四輪的)運貨馬車"
    },
    {
      "word": "diversity",
      "definition": "多樣性"
    },
    {
      "word": "immigrant",
      "definition": "移民"
    },
    {
      "word": "melting",
      "definition": "pot 大熔爐"
    },
    {
      "word": "pluralism",
      "definition": "多元化"
    },
    {
      "word": "tolerance",
      "definition": "寬容"
    }
  ],
  "unit8": [
    {
      "word": "activity",
      "definition": "活動；活躍"
    },
    {
      "word": "alphabet",
      "definition": "字母"
    },
    {
      "word": "attemp",
      "definition": "企圖；試圖"
    },
    {
      "word": "belief",
      "definition": "相信；信仰"
    },
    {
      "word": "casually",
      "definition": "隨便地"
    },
    {
      "word": "community",
      "definition": "社區"
    },
    {
      "word": "consciously",
      "definition": "有意識地"
    },
    {
      "word": "construct",
      "definition": "建造；構思"
    },
    {
      "word": "crowd",
      "definition": "群眾；聚集；擠滿"
    },
    {
      "word": "democratic",
      "definition": "民主的"
    },
    {
      "word": "diary",
      "definition": "日記"
    },
    {
      "word": "enemy",
      "definition": "敵人"
    },
    {
      "word": "expand",
      "definition": "擴展"
    },
    {
      "word": "film",
      "definition": "影片；電影"
    },
    {
      "word": "frequent",
      "definition": "經常的"
    },
    {
      "word": "gold",
      "definition": "金；金色"
    },
    {
      "word": "heal",
      "definition": "癒合；治癒"
    },
    {
      "word": "impact",
      "definition": "衝擊；影響"
    },
    {
      "word": "injure",
      "definition": "受傷"
    },
    {
      "word": "kilogram",
      "definition": "公斤"
    },
    {
      "word": "magic",
      "definition": "魔術；魔法； 魔法的"
    },
    {
      "word": "medal",
      "definition": "獎牌"
    },
    {
      "word": "muscle",
      "definition": "肌肉"
    },
    {
      "word": "naturally",
      "definition": "自然地；天生地"
    },
    {
      "word": "numerous",
      "definition": "許多的"
    },
    {
      "word": "organize",
      "definition": "組織；安排"
    },
    {
      "word": "partially",
      "definition": "不完全地"
    },
    {
      "word": "population",
      "definition": "人口"
    },
    {
      "word": "possibly",
      "definition": "可能地"
    },
    {
      "word": "presence",
      "definition": "出席"
    },
    {
      "word": "probable",
      "definition": "可能的"
    },
    {
      "word": "provide",
      "definition": "提供"
    },
    {
      "word": "public",
      "definition": "公開的；公共的；社會大眾"
    },
    {
      "word": "rage",
      "definition": "憤怒"
    },
    {
      "word": "rare",
      "definition": "稀少的"
    },
    {
      "word": "reduce",
      "definition": "減少，降低"
    },
    {
      "word": "remarkable",
      "definition": "卓越的；顯著的"
    },
    {
      "word": "reward",
      "definition": "報酬；獎賞；獎勵"
    },
    {
      "word": "seem",
      "definition": "似乎"
    },
    {
      "word": "skill",
      "definition": "技巧；技能"
    },
    {
      "word": "state",
      "definition": "州；狀況"
    },
    {
      "word": "support",
      "definition": "支持；支持"
    },
    {
      "word": "tremendous",
      "definition": "巨大的；驚人的"
    },
    {
      "word": "uniform",
      "definition": "制服"
    },
    {
      "word": "warn",
      "definition": "警告"
    },
    {
      "word": "declaration",
      "definition": "宣言"
    },
    {
      "word": "dignity",
      "definition": "尊嚴"
    },
    {
      "word": "inalienable",
      "definition": "不可剝奪的"
    },
    {
      "word": "liberty",
      "definition": "自由"
    },
    {
      "word": "torture",
      "definition": "折磨"
    }
  ],
  "unit9": [
    {
      "word": "actual",
      "definition": "事實上的；真實的"
    },
    {
      "word": "alternative",
      "definition": "選擇；可替代的；可供選擇的"
    },
    {
      "word": "pproximately",
      "definition": "大約"
    },
    {
      "word": "attend",
      "definition": "參加"
    },
    {
      "word": "benefit",
      "definition": "益處；受益"
    },
    {
      "word": "central",
      "definition": "中心的；主要的"
    },
    {
      "word": "commonly",
      "definition": "一般地、普遍地"
    },
    {
      "word": "company",
      "definition": "公司；陪伴"
    },
    {
      "word": "consumer",
      "definition": "消費者"
    },
    {
      "word": "culture",
      "definition": "文化"
    },
    {
      "word": "diet",
      "definition": "飲食；節食"
    },
    {
      "word": "energy",
      "definition": "精力；能源"
    },
    {
      "word": "exactly",
      "definition": "確實"
    },
    {
      "word": "expect",
      "definition": "預期；期待"
    },
    {
      "word": "firm",
      "definition": "堅定的；堅硬的"
    },
    {
      "word": "friendly",
      "definition": "友善的"
    },
    {
      "word": "gossip",
      "definition": "流言蜚語；愛說三道四的人"
    },
    {
      "word": "heaven",
      "definition": "天堂"
    },
    {
      "word": "identity",
      "definition": "身分"
    },
    {
      "word": "insist",
      "definition": "堅持"
    },
    {
      "word": "import",
      "definition": "進口；進口商品；進口"
    },
    {
      "word": "language",
      "definition": "語言"
    },
    {
      "word": "main",
      "definition": "主要的"
    },
    {
      "word": "media",
      "definition": "媒體；媒介"
    },
    {
      "word": "mushroom",
      "definition": "蘑菇"
    },
    {
      "word": "observe",
      "definition": "觀察"
    },
    {
      "word": "origin",
      "definition": "由來；起源"
    },
    {
      "word": "perform",
      "definition": "表演；執行"
    },
    {
      "word": "poisonous",
      "definition": "有毒的"
    },
    {
      "word": "practice",
      "definition": "練習；實踐"
    },
    {
      "word": "present",
      "definition": "出席的；現在的"
    },
    {
      "word": "process",
      "definition": "過程；加工"
    },
    {
      "word": "refer",
      "definition": "提起"
    },
    {
      "word": "remind",
      "definition": "提醒；(使)想起"
    },
    {
      "word": "request",
      "definition": "要求"
    },
    {
      "word": "retired",
      "definition": "退休的"
    },
    {
      "word": "risk",
      "definition": "險；危險；冒…危險"
    },
    {
      "word": "sensitive",
      "definition": "敏感的；善於理解的"
    },
    {
      "word": "serve",
      "definition": "服務；供應"
    },
    {
      "word": "skillful",
      "definition": "技巧好的，熟練的"
    },
    {
      "word": "survey",
      "definition": "調查；調查"
    },
    {
      "word": "threat",
      "definition": "威脅"
    },
    {
      "word": "unfortunately",
      "definition": "不幸地"
    },
    {
      "word": "unite",
      "definition": "(使)聯合"
    },
    {
      "word": "wealthy",
      "definition": "富有的"
    },
    {
      "word": "ecotourism",
      "definition": "生態旅遊"
    },
    {
      "word": "expedition",
      "definition": "探險"
    },
    {
      "word": "experiential",
      "definition": "體驗式的"
    },
    {
      "word": "pastime",
      "definition": "消遣"
    },
    {
      "word": "wilderness",
      "definition": "荒野"
    }
  ],
  "unit10": [
    {
      "word": "add",
      "definition": "添加；增加"
    },
    {
      "word": "amaze",
      "definition": "使驚訝"
    },
    {
      "word": "attendant",
      "definition": "侍者；隨從"
    },
    {
      "word": "century",
      "definition": "世紀；一百年"
    },
    {
      "word": "compare",
      "definition": "比較"
    },
    {
      "word": "contact",
      "definition": "聯絡；接觸"
    },
    {
      "word": "crisis",
      "definition": "危機"
    },
    {
      "word": "curious",
      "definition": "好奇的"
    },
    {
      "word": "differ",
      "definition": "不同；相異"
    },
    {
      "word": "directly",
      "definition": "直接地"
    },
    {
      "word": "drop",
      "definition": "掉落"
    },
    {
      "word": "enlargement",
      "definition": "放大；放大物"
    },
    {
      "word": "expense",
      "definition": "費用；支出"
    },
    {
      "word": "fit",
      "definition": "合適的"
    },
    {
      "word": "friendship",
      "definition": "友誼"
    },
    {
      "word": "gradual",
      "definition": "逐漸的"
    },
    {
      "word": "hesitate",
      "definition": "猶豫"
    },
    {
      "word": "importance",
      "definition": "重要性"
    },
    {
      "word": "institution",
      "definition": "機構"
    },
    {
      "word": "leader",
      "definition": "領導者"
    },
    {
      "word": "maintain",
      "definition": "維持"
    },
    {
      "word": "member",
      "definition": "成員"
    },
    {
      "word": "musical",
      "definition": "音樂的；音樂劇"
    },
    {
      "word": "notorious",
      "definition": "惡名昭彰的"
    },
    {
      "word": "nuclear",
      "definition": "核能的"
    },
    {
      "word": "obtain",
      "definition": "獲得"
    },
    {
      "word": "obviously",
      "definition": "明顯地"
    },
    {
      "word": "outstanding",
      "definition": "傑出的"
    },
    {
      "word": "period",
      "definition": "時期"
    },
    {
      "word": "port",
      "definition": "港口"
    },
    {
      "word": "president",
      "definition": "總統；總裁"
    },
    {
      "word": "produce",
      "definition": "製造，生產"
    },
    {
      "word": "publication",
      "definition": "出版品；出版"
    },
    {
      "word": "rate",
      "definition": "比率"
    },
    {
      "word": "reflect",
      "definition": "反映"
    },
    {
      "word": "remote",
      "definition": "遙遠的"
    },
    {
      "word": "role",
      "definition": "角色"
    },
    {
      "word": "settle",
      "definition": "解決；安頓；定居"
    },
    {
      "word": "stationary",
      "definition": "不動的"
    },
    {
      "word": "steadily",
      "definition": "穩定地"
    },
    {
      "word": "strictly",
      "definition": "嚴格地"
    },
    {
      "word": "survive",
      "definition": "倖存"
    },
    {
      "word": "tidy",
      "definition": "整齊的；整潔的"
    },
    {
      "word": "university",
      "definition": "大學"
    },
    {
      "word": "website",
      "definition": "網站"
    },
    {
      "word": "aquarium",
      "definition": "水族館"
    },
    {
      "word": "coastline",
      "definition": "海岸線"
    },
    {
      "word": "conservation",
      "definition": "保育"
    },
    {
      "word": "coral",
      "definition": "reef 珊瑚礁"
    },
    {
      "word": "marine",
      "definition": "海洋的"
    }
  ]
};
