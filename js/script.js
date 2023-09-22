MicroModal.init({
    openTrigger: 'data-custom-open',
    closeTrigger: 'data-custom-close',
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
})
$('[data-custom-open]').click(function () {
    $('.modal [name=form]').val($(this).data('form'))
})
$('[data-custom-close]').click(function () {
    $('.modal [name=form]').val('')
})

$('.home-slider__heading').each(function () {
    let text = $(this).text().split(' '),
        first = text.shift()
    $(this).html(`${first} <br><span>${text.join(' ')}</span>`)
})

$(".select").click(function () {
    $(".select").parent().find(".select").removeClass("active");
    $(this).addClass("active");
});

$("#selected2").hide();
$("#selected3").hide();


$("#select1").click(function () {
    $("#selected1").show();
    $("#selected2").hide();
    $("#selected3").hide();
});
$("#select2").click(function () {
    $("#selected2").show();
    $("#selected1").hide();
    $("#selected3").hide();
});
$("#select3").click(function () {
    $("#selected1").hide();
    $("#selected2").hide();
    $("#selected3").show();
});