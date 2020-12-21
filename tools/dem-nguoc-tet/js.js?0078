$(document).ready(function() {
    var t = [{
            name: "Máº­u Tuáº¥t",
            m1: Date.parse("Feb 16 2018 00:00:00")
        }, {
            name: "Ká»· Há»£i",
            m1: Date.parse("Feb 5 2019 00:00:00")
        },
		{
            name: "Canh TĂ½",
            m1: Date.parse("Jan 15 2020 00:00:00")
        },
		{
            name: "TĂ¢n Sá»­u",
            m1: Date.parse("Feb 12 2021 00:00:00")
        }],
        e = t.length;
    setInterval(function() {
        for (var n = (new Date).getTime(), a = 0; a < e; a++) {
            var o = t[a].m1 - 864e5,
                r = t[a].m1 + 864e5,
                m = t[a].m1 + 2592e5;
            if (n <= m) {
                var i = t[a].m1,
                    s = !1,
                    c = a + 2018,
                    g = t[a].name + " " + c,
                    p = "Äáº¿m ngÆ°á»£c Ä‘áº¿n Táº¿t " + g + " - Sáº¯p Táº¿t!",
                    l = "Sáº¯p Ä‘áº¿n táº¿t rá»“i anh em Æ¡i, Chá»‰ cĂ²n...",
                    h = "ChĂºc",
                    u = "Má»«ng",
                    x = "NÄƒm",
                    T = "Má»›i",
                    f = "NgĂ y",
                    y = "Giá»",
                    d = "PhĂºt",
                    C = "GiĂ¢y";
                if (n >= t[a].m1 && (i = m, n >= r ? l = "Sáº¯p háº¿t Táº¿t rá»“i!!!" : (s = !0, l = "Táº¿t rá»“i!!!Táº¿t rá»“i!!!", f = "Cung", y = "ChĂºc", d = "TĂ¢n", C = "XuĂ¢n")), !s) {
                    var b = i - n;
                    T = Math.floor(b / 1e3 % 60), x = Math.floor(b / 1e3 / 60 % 60), u = Math.floor(b / 36e5 % 24), h = Math.floor(b / 864e5)
                }
                $("#tetornot").text(l), $("#days").text(h), $("#hours").text(u), $("#mins").text(x), $("#secs").text(T), $("#days-text").text(f), $("#hours-text").text(y), $("#mins-text").text(d), $("#secs-text").text(C), $("#tet").text(g), n >= o && ($("html").css({
                    background: "radial-gradient(ellipse at bottom, #efe81d 0%, #f80f1f 100%)"
                }), $(".clock").toggleClass("tet"), $(".clock .text").toggleClass("tet")), document.title = p, $('meta[name="description"]').attr("content", "CĂ²n bao nhiĂªu ngĂ y ná»¯a Ä‘áº¿n Táº¿t NguyĂªn ÄĂ¡n " + g + "?"), $('meta[property="og\\:title"]').attr("content", p), $('meta[property="og\\:description"]').attr("content", "CĂ²n bao nhiĂªu ngĂ y ná»¯a Ä‘áº¿n Táº¿t NguyĂªn ÄĂ¡n " + g + "?"), $('meta[property="og\\:image"]').attr("content", "https://www.saptet.com/Tulips.jpg");
                break
            }
        }
    }, 1e3)
});
