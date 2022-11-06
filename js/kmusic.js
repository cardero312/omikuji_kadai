
$('#pop').on('click', function () {
    const min = 0
    const max = 2;
    const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log(randomnumber);



    if (randomnumber === 0) {
        // alert("グー");
        $('#com_hand').text('ダンス重視');
        $('#result').text('あいこ');

    } else if (randomnumber === 1) {
        // alert("チョキ");
        $('#com_hand').text('歌重視');
        $('#result').text('負け');
    } else {
        // alert("パー");
        $('#com_hand').text('ヤバい世界観');
        $('#result').text('勝ち');
    }
});

// ヒッポはじまり
$('#hiphop').on('click', function () {
    const min = 0
    const max = 2;
    const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomnumber);

    if (randomnumber === 0) {
        // alert("グー");
        $('#com_hand').text('グー');
        $('#result').text('勝ち');

    } else if (randomnumber === 1) {
        // alert("チョキ");
        $('#com_hand').text('チョキ');
        $('#result').text('あいこ');
    } else {
        // alert("パー");
        $('#com_hand').text('パー');
        $('#result').text('負け');
    }
});

// ロックはじまり
$('#par_btn').on('click', function () {
    const min = 0
    const max = 2;
    const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomnumber);

    if (randomnumber === 0) {
        // alert("グー");
        $('#com_hand').text('グー');
        $('#result').text('負け');

    } else if (randomnumber === 1) {
        // alert("チョキ");
        $('#com_hand').text('チョキ');
        $('#result').text('勝ち');
    } else {
        // alert("パー");
        $('#com_hand').text('パー');
        $('#result').text('あいこ');
    }
});

$(function () {
    // buttonのクリック時
    $('button').on('click', function () {
        // 属性値を取得
        let data = $(this).data('id');
        // 結果表示
        $('p').text(data);
    });
});