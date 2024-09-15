auto.waitFor();
device.wakeUp();
//device.keepScreenDim();
//console.show(true);
// app.launch("cn.shmaas.maas");
//循环执行3次
for (let t1 = 0; t1 < 2; t1++) {
    shell("am start --user 0 cn.shmaas.maas/cn.shmaas.maas.main.ui.MainActivity", true);
    sleep(10000);
    //如果弹出位置切换弹窗，点击继续
    click_id('tv_continue', 0);
    while (true) {
        //点击底部我的
        if (id_count('tv_navi_tab') == 5) {
            click_id('tv_navi_tab', 4);
            sleep(1000);
            //点击兜豆
            click_text('兜豆', 0);
        }
        sleep(10000);
        click_text('去签到', 0);
        sleep(1000);
        if (text_count('去看看') > 0) {
            click_text('去看看', 0);
            sleep(15000);
            Back();
        }
        click_text('更多', 1);
        sleep(5000);
        swipe(540, 2120, 540, 200, 1);
        while(text_count('去浏览') > 0) {
            click_text('去浏览', 0);
            sleep(15000);
            Back();
        }
        sleep(1000);
        Back();
        sleep(1000);
        click_text('一键领取', 0);
        sleep(1000);
        click_text('游戏中心', 0);
        sleep(10000);
        click(165, 1895);
        sleep(2000);
        Back();
        sleep(2000);
        break;
    }
    shell("am force-stop cn.shmaas.maas", true);
    sleep(3000);
}
//KeyCode("KEYCODE_POWER");
Power();

toast('运行结束');

// var result = shell("am force-stop cn.shmaas.maas", true);
// log(result);
// console.show();
// if (result.code == 0) {
//     toast("执行成功");
// } else {
//     toast("执行失败！请到控制台查看错误信息");
// }


function click_text(str, num) {
    try {
        bb = text(str).find();
        if (bb.length > 0) {
            click(bb[num].boundsCenterX(), bb[num].boundsCenterY());
        }
    } catch (e) {
        console.log(e.text);
    }
}
function click_all_text(str) {
    try {
        bb = text(str).find();
        while (bb.length > 0) {
            click(bb[0].boundsCenterX(), bb[0].boundsCenterY());
            bb = text(str).find();
        }
    } catch (e) {
        console.log(e.text);
    }
}
function click_id(str, num) {
    try {
        bb = id(str).find();
        if (bb.length > 0) {
            click(bb[num].boundsCenterX(), bb[num].boundsCenterY());
        }
    } catch (e) {
        console.log(e.text);
    }
}
function click_all_id(str) {
    try {
        bb = id(str).find();
        while (bb.length > 0) {
            click(bb[0].boundsCenterX(), bb[0].boundsCenterY());
            bb = id(str).find();
        }
    } catch (e) {
        console.log(e.text);
    }
}
function id_count(str) {
    try {
        bb = id(str).find();
        return bb.length;
    } catch (e) {
        console.log(e.text);
    }
}

function text_count(str) {
    try {
        bb = text(str).find();
        return bb.length;
    } catch (e) {
        console.log(e.text);
    }
}



