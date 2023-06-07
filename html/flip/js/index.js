const ranks = [
    {col: 2, row: 2},
    {col: 4, row: 4},
    {col: 6, row: 6},
    {col: 6, row: 8},
    {col: 6, row: 10},
]
const themes = [
    {name: "window", types: 36, ext: ".bmp", format: "/win/win (@).bmp"},
    {name: "emoji", types: 30, ext: ".png", format: "/emoji/emoji (@).png"},
]
var lastFlipIndex= null;
var flipNum = 0
var timer = null;

function init() {
    lastFlipIndex= null;
    flipNum = 0
    var timer = null;
    $("#timeUsed").html("00:00")
}

/**
 * 元素组合
 * @param types   元素种类
 * @param level   等级
 * @returns {*[]}
 */
function func(types, level) {
    const rank = ranks[level]
    const size = rank.col * rank.row;
    let list = [];
    for (let i = 0, len = size / 2; i < len; i++) {
        let x = i % types
        // 数必须出现至少两次
        list.push(x)
        list.push(x)
    }
    return shuffle(list);
}


/**
 * 洗牌函数
 * @param arr 数组
 * @returns {*[]}
 */
function shuffle(arr) {
    let res = [...arr]
    for (let i = arr.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let tmp = res[randomIndex]
        res[randomIndex] = res[i]
        res[i] = tmp
    }
    return res
}

//console.log(func(5, 10))

function render(level) {
    init();
    const rank = ranks[level]
    let row = rank.row;
    let col = rank.col;
    const size = col * row;
    let table = "";
    let index = 0;
    for (let i = 0; i < row; i++) {
        table += "<li>"
        for (let j = 0; j < col; j++) {
            table += "<div id='img"+index+"' onclick='flip(this)'></div>";
            index++
        }
        table += "</li>"
    }
    $(".table").html(table)
    let w = $(".table").width() / col;
    if (w > 62) {
        w = 62
    }
    let theme = themes[0];
    const num = func(theme.types, level);
    for (let i = 0; i < size; i++) {
        let group = (num[i] + 1);
        let imgName = theme.format.replace("@", group);
        let imgPath = "./img/" + imgName;
        $("#img" + i).css({
            "height": w + "px",
            "width": w + "px",
        });
        $("#img" + i).attr("img", imgPath);
        $("#img" + i).attr("group", group);
        $("#img" + i).attr("index", i);
        $("#img" + i).attr("size", size);
    }
}

function flip(thisObj) {
    flipNum++;
    // 判断和上次的翻面是否相同
    if (lastFlipIndex && $(thisObj).attr("group") === $("#img" + lastFlipIndex).attr("group") && lastFlipIndex !== $(thisObj).attr("index")) {
        $(thisObj).attr("show", "true");
        let lastObj = $("#img" + lastFlipIndex);
        // 把上一次的显示出来
        lastObj.attr("show", "true");
        lastObj.css({
            "background": "url('"+lastObj.attr("img")+"') no-repeat",
            "background-size": "100% 100%",
        })
        lastFlipIndex = null;
    } else {
        lastFlipIndex = $(thisObj).attr("index");
    }
    let finish = true;
    // 翻面
    let size = $(thisObj).attr("size");
    for (let i = 0; i < size; i++) {
        let obj = $("#img" + i);
        if (obj.attr("show") !== 'true') {
            obj.css("background", "skyblue");
            finish = false;
        }
    }
    // 显示出来
    $(thisObj).css({
        "background": "url('"+$(thisObj).attr("img")+"') no-repeat",
        "background-size": "100% 100%",
    })
    // 翻面次数
    showResult(finish);
}

function showResult(finish) {
    // 翻面次数
    $("#clickNum").text(flipNum)
    // 计时
    if (flipNum === 1) {
        let count = 0;
        timer = setInterval(function(){
            count++;
            let fen = Math.floor(count / 60)
            let miao = count % 60
            if (fen < 10) {
                fen = "0" + fen;
            }
            if (miao < 10) {
                miao = "0" + miao;
            }
            $("#timeUsed").html(fen + ":" + miao)
        },1000);
    }
    if (finish) {
        if (timer) {
            clearInterval(timer);
        }
    }
}