$('p').on('click', function () {
    console.log(this);
    let dateValue = $(this).text();
    $('#date').val(dateValue);

    target = this; // * target에 this 기억해두기!!!!!!!!!!!
});

function writeSchedule() {
    let content = $('#content').val();

    // 요소 추가
    $(target)
        .parent()
        .append('<span>' + content + '</span><br />');
    // $(target.parentNode).append(~~)

    // 초기화
    $('#content').val('');
    $('#date').val('');
}
