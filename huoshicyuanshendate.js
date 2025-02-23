        const genshinData = {
            countries: ["蒙德", "璃月", "稻妻", "须弥", "枫丹", "纳塔", "至冬", "其它"],
            genders: ["女", "男"],
            elements: ["风", "火", "雷", "岩", "水", "冰", "草", "无"],
            weapons: ["单手剑", "双手剑", "长柄武器", "法器", "弓"],
            races: ["人类", "魔神", "仙人", "仙狐", "兽人", "半仙", "僵尸", "其他"],
            roles: [

            // 蒙德

                { name: "可莉", country: "蒙德", gender: "女", element: "火", weapon: "法器", occupation: "火花骑士 爱炸鱼", race: "长生种（具体未知）",
                image: "https://patchwiki.biligame.com/images/ys/thumb/2/27/k1htluo5z1wemkwsu6hj084y06b1vvv.png/500px-%E7%94%9F%E8%B4%BA%C2%B7%E5%8F%AF%E8%8E%89%C2%B7%E5%85%B6%E4%B8%80.png.jpeg"  },

                { name: "芭芭拉", country: "蒙德", gender: "女", element: "水", weapon: "法器", occupation: "蒙德城的偶像", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/b/b3/f3e195yufy969dbq48gf967vau34do1.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E8%8A%AD%E8%8A%AD%E6%8B%89%C2%B7%E5%85%B6%E4%B8%80.png" },

                { name: "安柏", country: "蒙德", gender: "女", element: "火", weapon: "弓", occupation: "西风骑士团侦察骑士", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/8/86/8w54wqsx9muxucbxy3gbi91r5qklc5h.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E5%AE%89%E6%9F%8F%C2%B7%E5%85%B6%E4%B8%80.png" },

                { name: "班尼特", country: "蒙德", gender: "男", element: "火", weapon: "单手剑", occupation: "很倒霉", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/e/e1/rr3hulm37ym84iz5f2kq401om11p8mf.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E7%8F%AD%E5%B0%BC%E7%89%B9%C2%B72021.png" },

                { name: "凯亚", country: "蒙德", gender: "男", element: "冰", weapon: "单手剑", occupation: "西风骑士团骑兵队长 ", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/4/43/p9vooxglc9shcx5gafegchyyn0qihe1.png" },

                { name: "温迪", country: "蒙德", gender: "男", element: "风", weapon: "弓", occupation: "风色诗人 - 卖唱的", race: "魔神",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/8/83/ktdfazxanw0k1409m8y7upnqgu7afya.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E6%B8%A9%E8%BF%AA%C2%B7%E5%85%B6%E4%B8%80.png" },

                { name: "优菈·劳伦斯", country: "蒙德", gender: "女", element: "冰", weapon: "双手剑", occupation: "浪花骑士 西风骑士团「游击小队」队长", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/7/7d/n46bfq1ojdsi6u1q7i0a68leftda2j1.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E4%BC%98%E8%8F%88%C2%B7%E5%85%B6%E4%B8%80.png" },

                { name: "琴", country: "蒙德", gender: "女", element: "风", weapon: "单手剑", occupation: "西风骑士团代理团长", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/6/6d/kxrml55n450ka7cpul8kg1f1vvpnj8w.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E7%90%B4%C2%B7%E5%85%B6%E4%B8%80.png" },

                { name: "丽莎", country: "蒙德", gender: "女", element: "雷", weapon: "法器", occupation: "图书馆管理员", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/3/3b/kkwt4bj66n95gqxsojbugqp5c8b4u6s.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E4%B8%BD%E8%8E%8E%C2%B7%E5%85%B6%E4%B8%80.png" },

                { name: "迪卢克", country: "蒙德", gender: "男", element: "火", weapon: "双手剑", occupation: "蒙德城的夜店老板", race: "人类" },

                { name: "阿贝多", country: "蒙德", gender: "男", element: "岩", weapon: "单手剑", occupation: "西风骑士团首席炼金术士", race: "炼金造物" },

                { name: "雷泽", country: "蒙德", gender: "男", element: "雷", weapon: "双手剑", occupation: "奔狼领的传说", race: "人类" }, 

                { name: "迪奥娜", country: "蒙德", gender: "女", element: "冰", weapon: "法器", occupation: "「猫尾酒馆」超人气调酒师", race: "兽人" },

                { name: "莫娜", country: "蒙德", gender: "女", element: "水", weapon: "法器", occupation: "占星术士, 她的全名很长", race: "人类" },

                { name: "罗莎莉亚", country: "蒙德", gender: "女", element: "冰", weapon: "长柄武器", occupation: "不合群的修女", race: "人类" },

                { name: "菲谢尔", country: "蒙德", gender: "女", element: "雷", weapon: "弓", occupation: "幽夜净土之主宰 昵称/外号: 皇女", race: "人类" },

                { name: "砂糖", country: "蒙德", gender: "女", element: "风", weapon: "法器", occupation: "	西风骑士团炼金术士", race: "人类" },

                { name: "小派蒙", country: "蒙德", gender: "女", element: "无", weapon: "神之嘴", occupation: "旅行者的伙伴 “旅行者”的向导", race: "其他",
                    image: "https://i2.hdslb.com/bfs/archive/3301280587c4c5c323ef7e72bb506194e4a8f9ac.jpg" },

                { name: "诺艾尔", country: "蒙德", gender: "女", element: "岩", weapon: "双手剑", occupation: "骑士团女仆", race: "人类" },

                // 其它国度
                { name: "埃洛伊", country: "其它", gender: "女", element: "冰", weapon: "弓", occupation: "诺拉的英勇猎手 棕色头发 绝版角色", race: "未知 绝版角色",
                    image: "https://patchwiki.biligame.com/images/ys/b/b8/spgh6ar3itjue0w0oja9tq0xgsksibq.png"},

                { name: "小派蒙", country: "其它", gender: "女", element: "无", weapon: "神之嘴", occupation: "旅行者的伙伴 “旅行者”的向导", race: "其他",
                    image: "https://i2.hdslb.com/bfs/archive/3301280587c4c5c323ef7e72bb506194e4a8f9ac.jpg"},

                // 璃月

                { name: "往生堂第七十七代堂主 ꧁ 胡桃 ꧂  (๑>◡<๑) ", country: "璃月", gender:"女", element:"火", weapon:"长柄武器", occupation: "堂主", race: "人类",
                    image: "https://i0.hdslb.com/bfs/archive/46e80f06ac18e092bee75b1bc161d9d6a7cb31e1.jpg"},

                { name: "香菱", country: "璃月", gender: "女", element: "火", weapon: "长柄武器", occupation: "璃月港的厨师", race: "人类",
                    image: "https://i2.hdslb.com/bfs/archive/5605901b52a30ccf2486c175dca33b97249b8b2f.jpg"},

                { name: "魈", country: "璃月", gender: "男", element: "风", weapon: "长柄武器", occupation: "守护璃月-护法夜叉", race: "仙人",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/7/7e/2ukmybwmjiwahqzk4072dmfzgnniah3.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E9%AD%88%C2%B7%E5%85%B6%E4%B8%80.png.jpeg" },

                { name: "钟离", country: "璃月", gender: "男", element: "岩", weapon: "长柄武器", occupation: "没魔拉", race: "魔神",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/9/9c/k2w015icih92noiqrec1xwruyr4l8ry.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E9%92%9F%E7%A6%BB%C2%B7%E5%85%B6%E4%B8%80.png" },

                { name: "甘雨", country: "璃月", gender: "女", element: "冰", weapon: "弓", occupation: "「月海亭」秘书", race: "半仙",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/c/ce/pusw3uc2fdzh19ycqgcrh6ixudiwifq.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E7%94%98%E9%9B%A8%C2%B7%E5%85%B6%E4%B8%80.png"},

                { name: "行秋", country: "璃月", gender: "男", element: "水", weapon: "单手剑", occupation: "称号 少年春衫薄", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/f/fc/bwq0remw3mujrhrf07q6uxiay0iih0p.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E8%A1%8C%E7%A7%8B%C2%B7%E5%85%B6%E4%B8%80.png" },

                { name: "凝光", country: "璃月", gender: "女", element: "岩", weapon: "法器", occupation: "群玉阁之主 昵称/外号：富婆", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/3/39/hmycqb6r2w43ccu7kp00rheflzriq52.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E5%87%9D%E5%85%89%C2%B7%E5%85%B6%E4%B8%80.png" },

                { name: "瑶瑶", country: "璃月", gender: "女", element: "草", weapon: "长柄武器", occupation: "歌尘浪市真君弟子 香菱的师妹", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/5/52/ol8cj1rhfg36at11qstlk06dwv85h0d.png/750px-%E4%B8%AD%E7%A7%8B%E8%8A%82%C2%B72020.png.jpeg" },

                { name: "烟绯", country: "璃月", gender: "女", element: "火", weapon: "法器", occupation: "璃月港知名律法咨询师", race: "半仙",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/2/24/tpxgi8ksziddyjsg7nuvu1mayovrzfo.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E7%83%9F%E7%BB%AF%C2%B7%E5%85%B6%E4%B8%80.png" },

                { name: "刻晴", country: "璃月", gender: "女", element: "雷", weapon: "单手剑", occupation: "璃月七星-玉衡星", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/c/c7/be5nyfvfie2dah1udxrrlsb09sm2fyf.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E5%88%BB%E6%99%B4%C2%B7%E5%85%B6%E4%B8%80.png" },

                { name: "辛焱", country: "璃月", gender: "女", element: "火", weapon: "双手剑", occupation: "摇滚乐队主唱 璃月摇滚先行者", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/9/92/igh9t2z7obx37mp3wn8e9o6b3qrdnlg.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E8%BE%9B%E7%84%B1%C2%B7%E5%85%B6%E4%B8%80.png" },

                { name: "云堇", country: "璃月", gender: "女", element: "岩", weapon: "长柄武器", occupation: "云翰社现任当家 云先生", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/8/8f/5eedbfa8wch0gl7cpo12jjopqiy2jre.png" },

                { name: "夜兰", country: "璃月", gender: "女", element: "水", weapon: "弓", occupation: "自称就职于总务司的神秘人士 情报工作者", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/e/e5/rgovaa6wk3jg0f4ifd1a8v98w6iefj0.png/750px-%E6%83%85%E4%BA%BA%E8%8A%82%C2%B7%E5%A4%9C%E5%85%B0%C2%B72023.png" },

                { name: "白术", country: "璃月", gender: "男", element: "草", weapon: "法器", occupation: "「不卜庐」主人 白先生", race: "人类" },

                { name: "叶嘉明", country: "璃月", gender: "男", element: "火", weapon: "双手剑", occupation: "	剑匣镖局镖师 舞狮", race: "人类" },

                { name: "留云借风真君", country: "璃月", gender: "女", element: "风", weapon: "法器", occupation: "璃月港新住户 那个女人", race: "仙人" },

                { name: "蓝砚", country: "璃月", gender: "女", element: "风", weapon: "法器", occupation: "沉玉谷手工艺工会编藤大师 所属: 沉玉谷", race: "人类" },

                { name: "北斗", country: "璃月", gender: "女", element: "雷", weapon: "双手剑", occupation: "南十字之主 大姐头", race: "人类" },

                { name: "七七", country: "璃月", gender: "女", element: "冰", weapon: "单手剑", occupation: "不卜庐采药人 ", race: "僵尸" },

                { name: "重云", country: "璃月", gender: "男", element: "冰", weapon: "双手剑", occupation: "妖邪异闻诛者 蓝色头发 ", race: "人类" },

                { name: "申鹤", country: "璃月", gender: "女", element: "冰", weapon: "长柄武器", occupation: "尘外身，人间客 昵称/外号: 小姨", race: "人类",
                    image: "https://i1.hdslb.com/bfs/archive/ee7626292929e24a0d84c8801cf694ee21c35a9c.jpg"},
                


                { name: "雷电将军", country: "稻妻", gender: "女", element: "雷", weapon: "长柄武器", occupation: "稻妻的统治者", race: "魔神" },

                { name: "神里绫华", country: "稻妻", gender: "女", element: "冰", weapon: "单手剑", occupation: "「社奉行」神里家大小姐 白鹭公主", race: "人类",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/5/5a/g97tb75ek2srf24opl1p7280li9g9zl.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E7%A5%9E%E9%87%8C%E7%BB%AB%E5%8D%8E%C2%B72020.png"},

                { name: "枫原万叶", country: "稻妻", gender: "男", element: "风", weapon: "单手剑", occupation: "浪人武士", race: "人类" },

                { name: "长野原宵宫", country: "稻妻", gender: "女", element: "火", weapon: "弓", occupation: "称号：琉焰华舞 稻妻的烟火师", race: "人类",
                    image: "https://bkimg.cdn.bcebos.com/pic/3c6d55fbb2fb43166d22eac859f3512309f790527573?x-bce-process=image/format,f_auto/resize,m_lfit,limit_1,h_720" },

                { name: "珊瑚宫心海", country: "稻妻", gender: "女", element: "水", weapon: "法器", occupation: "珊瑚宫的宫主", race: "人类" },

                { name: "八重神子", country: "稻妻", gender: "女", element: "雷", weapon: "法器", occupation: "「鸣神大社」宫司", race: "仙狐" },

                { name: "纳西妲", country: "须弥", gender: "女", element: "草", weapon: "法器", occupation: "「小吉祥草王」", race: "魔神",
                    image: "https://i2.hdslb.com/bfs/archive/a2d898106f04d1b2a46fd13e76ff23dc57920c12.jpg"},

                { name: "提纳里", country: "须弥", gender: "男", element: "草", weapon: "弓", occupation: "道成林巡林官", race: "兽人" },

                { name: "赛诺 喜欢讲冷笑话", country: "须弥", gender: "男", element: "雷", weapon: "长柄武器", occupation: "大风纪官 讲冷笑话", race: "人类" },

                { name: "早柚", country: "稻妻", gender: "女", element: "风", weapon: "双手剑", occupation: "「终末番」特属忍者", race: "人类" },

                { name: "久岐忍", country: "稻妻", gender: "女", element: "雷", weapon: "单手剑", occupation: "「荒泷派」二把手 阿忍", race: "人类" },

                { name: "艾尔海森", country: "须弥", gender: "男", element: "草", weapon: "单手剑", occupation: "须弥教令院书记官 大书记官", race: "人类" },

                { name: "迪希雅", country: "须弥", gender: "女", element: "火", weapon: "双手剑", occupation: "	自由的沙漠佣兵", race: "人类" },

                // 枫丹

                { name: "芙宁娜·德·枫丹", country: "枫丹", gender: "女", element: "水", weapon: "单手剑", occupation: "	众水、众方、众民与众律法的女王 喜欢吃甜点", race: "人类/魔神",
                    image: "https://patchwiki.biligame.com/images/ys/thumb/8/89/s8dltubvboh981ynwjo6jszgwqf1zwr.png/750px-%E7%94%9F%E8%B4%BA%C2%B7%E8%8A%99%E5%AE%81%E5%A8%9C%C2%B72024.png"},

                { name: "那维莱特", country: "枫丹", gender: "男", element: "水", weapon: "法器", occupation: "枫丹最高审判官", race: "元素生物 龙",
                    image: "https://imgs.caipus.com/uploadfile/2023/1022/20231022024807696.jpg"},

                { name: "希格雯", country: "枫丹", gender: "女", element: "水", weapon: "弓", occupation: "美露莘护士长 所属 梅洛彼得堡", race: "美露莘",
                    image: "https://i0.hdslb.com/bfs/archive/9694b05e52aa6713f190d650a8471f424fd8a7b5.jpg"}
            ]
        };

        let currentStep = "start";
        let currentOptions = [];
        let selectedOptions = {};
        let messageElement = document.getElementById("message");
        let errorMessageElement = document.getElementById("error-message");



        function displayMessage(message) {
            messageElement.innerHTML = message;
        }

        function displayErrorMessage(message) {
            errorMessageElement.innerHTML = `<p>${message}</p>`;
        }

        function clearErrorMessage() {
            errorMessageElement.innerHTML = "";
        }

        function findCharacter(options) {
            return genshinData.roles.find(role =>
                role.country === options.country &&
                role.gender === options.gender &&
                role.element === options.element &&
                role.weapon === options.weapon &&
                role.occupation === options.occupation &&
                role.race === options.race
            );
        }


        function processInput() {
    const userInput = document.getElementById("userInput").value.trim().toLowerCase();
    document.getElementById("userInput").value = "";


    if (currentStep === "start") {
        if (userInput === "开始") {
            clearErrorMessage();
            // 隐藏角色图片
            document.getElementById("character-image").style.display = "none";
            document.getElementById("character-img").src = "";
            currentStep = "country";
            currentOptions = [...genshinData.countries];
            excludedOptions = []; // 初始化排除列表
            // 随机选择一个国家进行提问
            const randomIndex = Math.floor(Math.random() * currentOptions.length);
            selectedOptions.country = currentOptions[randomIndex];
            displayMessage(`您想到的角色是${selectedOptions.country}的吗？`);
        } else {
            displayErrorMessage("请输入“开始”来开始游戏。");
        }
    } else if (currentStep === "country") {
        if (userInput === "是") {
            clearErrorMessage();
            currentStep = "gender";
            currentOptions = [...genshinData.genders];
            excludedOptions = []; // 重置排除列表
            displayMessage(`您的角色是${selectedOptions.country}的。那么，您的角色是女的吗？`);
        } else if (userInput === "不是") {
            clearErrorMessage();
            excludedOptions.push(selectedOptions.country); // 将当前选项加入排除列表
            currentOptions = currentOptions.filter(option => !excludedOptions.includes(option)); // 移除排除的选项
            if (currentOptions.length > 0) {
                // 再次随机选择一个未排除的国家进行提问
                const randomIndex = Math.floor(Math.random() * currentOptions.length);
                selectedOptions.country = currentOptions[randomIndex];
                displayMessage(`您的角色不是${excludedOptions[excludedOptions.length - 1]}的。那么，您的角色是${selectedOptions.country}的吗？`);
            } else {
                displayMessage("我没有足够的信息来猜测。请重新开始。");
                currentStep = "start";
            }
        } else {
            displayErrorMessage("请输入“是”或“不是”。");
        }
    } else if (currentStep === "gender") {
        if (userInput === "是") {
            clearErrorMessage();
            selectedOptions.gender = currentOptions[0];
            currentStep = "element";
            currentOptions = genshinData.roles
                .filter(role => role.country === selectedOptions.country && role.gender === selectedOptions.gender)
                .map(role => role.element);
            excludedOptions = []; // 重置排除列表
            displayMessage(`您的角色是${selectedOptions.gender}的。那么，您的角色是${currentOptions[0]}元素的吗？`);
        } else if (userInput === "不是") {
            clearErrorMessage();
            excludedOptions.push(currentOptions[0]); // 将当前选项加入排除列表
            currentOptions = currentOptions.filter(option => !excludedOptions.includes(option)); // 移除排除的选项
            if (currentOptions.length > 0) {
                displayMessage(`您的角色不是${excludedOptions[excludedOptions.length - 1]}的。那么，您的角色是${currentOptions[0]}的吗？`);
            } else {
                displayMessage("我没有足够的信息来猜测。请重新开始。");
                currentStep = "start";
            }
        } else {
            displayErrorMessage("请输入“是”或“不是”。");
        }
    } else if (currentStep === "element") {
        if (userInput === "是") {
            clearErrorMessage();
            selectedOptions.element = currentOptions[0];
            currentStep = "weapon";
            currentOptions = genshinData.roles
                .filter(role => role.country === selectedOptions.country && role.gender === selectedOptions.gender && role.element === selectedOptions.element)
                .map(role => role.weapon);
            excludedOptions = []; // 重置排除列表
            displayMessage(`您的角色是${selectedOptions.element}元素的。那么，您的角色使用${currentOptions[0]}吗？`);
        } else if (userInput === "不是") {
            clearErrorMessage();
            excludedOptions.push(currentOptions[0]); // 将当前选项加入排除列表
            currentOptions = currentOptions.filter(option => !excludedOptions.includes(option)); // 移除排除的选项
            if (currentOptions.length > 0) {
                displayMessage(`您的角色不是${excludedOptions[excludedOptions.length - 1]}元素的。那么，您的角色是${currentOptions[0]}元素的吗？`);
            } else {
                displayMessage("我没有足够的信息来猜测。请重新开始。");
                currentStep = "start";
            }
        } else {
            displayErrorMessage("请输入“是”或“不是”。");
        }
    } else if (currentStep === "weapon") {
        if (userInput === "是") {
            clearErrorMessage();
            selectedOptions.weapon = currentOptions[0];
            currentStep = "race"; // 调整为先询问种族
            currentOptions = genshinData.roles
                .filter(role => role.country === selectedOptions.country && role.gender === selectedOptions.gender && role.element === selectedOptions.element && role.weapon === selectedOptions.weapon)
                .map(role => role.race);
            excludedOptions = []; // 重置排除列表
            displayMessage(`您的角色使用${selectedOptions.weapon}。那么，您的角色是${currentOptions[0]}吗？`);
        } else if (userInput === "不是") {
            clearErrorMessage();
            excludedOptions.push(currentOptions[0]); // 将当前选项加入排除列表
            currentOptions = currentOptions.filter(option => !excludedOptions.includes(option)); // 移除排除的选项
            if (currentOptions.length > 0) {
                displayMessage(`您的角色不是使用${excludedOptions[excludedOptions.length - 1]}的。那么，您的角色使用${currentOptions[0]}吗？`);
            } else {
                displayMessage("我没有足够的信息来猜测。请重新开始。");
                currentStep = "start";
            }
        } else {
            displayErrorMessage("请输入“是”或“不是”。");
        }
    } else if (currentStep === "race") {
        if (userInput === "是") {
            clearErrorMessage();
            selectedOptions.race = currentOptions[0];
            currentStep = "occupation"; // 调整为最后询问职业
            currentOptions = genshinData.roles
                .filter(role => role.country === selectedOptions.country && role.gender === selectedOptions.gender && role.element === selectedOptions.element && role.weapon === selectedOptions.weapon && role.race === selectedOptions.race)
                .map(role => role.occupation);
            excludedOptions = []; // 重置排除列表
            displayMessage(`您的角色是${selectedOptions.race}。那么，您的角色的职业是${currentOptions[0]}吗？`);
        } else if (userInput === "不是") {
            clearErrorMessage();
            excludedOptions.push(currentOptions[0]); // 将当前选项加入排除列表
            currentOptions = currentOptions.filter(option => !excludedOptions.includes(option)); // 移除排除的选项
            if (currentOptions.length > 0) {
                displayMessage(`您的角色不是${excludedOptions[excludedOptions.length - 1]}。那么，您的角色是${currentOptions[0]}吗？`);
            } else {
                displayMessage("我没有足够的信息来猜测。请重新开始。");
                currentStep = "start";
            }
        } else {
            displayErrorMessage("请输入“是”或“不是”。");
        }
    } else if (currentStep === "occupation") {
        if (userInput === "是") {
            clearErrorMessage();
            selectedOptions.occupation = currentOptions[0];
            const matchedCharacter = findCharacter(selectedOptions);
            if (matchedCharacter) {
                displayMessage(`根据您的回答，我猜您的角色是：${matchedCharacter.name} ，如果还想继续玩的话，可以直接输入 开始，很高兴和您一起玩！(⁀ᗢ⁀)`);

                // 设置照片路径但先不显示
                document.getElementById("character-img").src = matchedCharacter.image;
                document.getElementById("character-image").style.display = "none";

                // 1.0秒后显示图片
                setTimeout(() => {
                    document.getElementById("character-image").style.display = "block";
                }, 1000);

            } else {
                displayMessage("我没有找到匹配的角色，请重新开始。");
                document.getElementById("character-img").src = "";
                document.getElementById("character-image").style.display = "none";
            }
            currentStep = "start"; // 重置游戏
        } else if (userInput === "不是") {
            clearErrorMessage();
            excludedOptions.push(currentOptions[0]);
            currentOptions = currentOptions.filter(option => !excludedOptions.includes(option));
            if (currentOptions.length > 0) {
                displayMessage(`您的角色的职业不是${excludedOptions[excludedOptions.length - 1]}。那么，您的角色的职业是${currentOptions[0]}吗？`);
            } else {
                displayMessage("我没有足够的信息来猜测。请重新开始。");
                document.getElementById("character-img").src = "";
                document.getElementById("character-image").style.display = "none";
                currentStep = "start";
        }
    } else {
        displayErrorMessage("请输入“是”或“不是”。");
    }
}
        }

        // enter 键

        document.getElementById("userInput").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                processInput();
            }
        });
    
        //思考模拟
    
    function displayMessage(message) {
        messageElement.innerHTML = `<span class="typing">  <span class="typing-dot">◉</span></span>`;
        let index = 0;
        setTimeout(() => {
            let interval = setInterval(() => {
                if (index < message.length) {
                    messageElement.innerHTML = message.substring(0, index + 1);
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 20);
        }, 2000);
    }
    
    function displayErrorMessage(message) {
        errorMessageElement.innerHTML = `<p>${message}</p>`;
    }
    


// 限制输入框 2.0
document.addEventListener("DOMContentLoaded", function () {
    let userInput = document.getElementById("userInput");
    let submitButton = document.querySelector(".button");
    
    function disableInputTemporarily() {
        if (userInput) {
            userInput.disabled = true;
            submitButton.disabled = true;
            setTimeout(() => {
                userInput.disabled = false;
                submitButton.disabled = false;
            }, 2000);
        }
    }

    // 监听提交按钮的点击事件
    if (submitButton) {
        submitButton.addEventListener("click", disableInputTemporarily);
    }

    // 监听 Enter 键的输入事件
    if (userInput) {
        userInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                disableInputTemporarily();
            }
        });
    }
});
