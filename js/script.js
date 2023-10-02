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

// 

const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");

const applyOverlayMask = (e) => {
    const overlayEl = e.currentTarget;
    const x = e.pageX - cardsContainer.offsetLeft;
    const y = e.pageY - cardsContainer.offsetTop;

    overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
    const overlayCta = document.createElement("div");
    overlayCta.classList.add("cta");
    overlayCta.textContent = ctaEl.textContent;
    overlayCta.setAttribute("aria-hidden", true);
    overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
        const cardIndex = cards.indexOf(entry.target);
        let width = entry.borderBoxSize[0].inlineSize;
        let height = entry.borderBoxSize[0].blockSize;

        if (cardIndex >= 0) {
            overlay.children[cardIndex].style.width = `${width}px`;
            overlay.children[cardIndex].style.height = `${height}px`;
        }
    });
});

const initOverlayCard = (cardEl) => {
    const overlayCard = document.createElement("div");
    overlayCard.classList.add("card");
    createOverlayCta(overlayCard, cardEl.lastElementChild);
    overlay.append(overlayCard);
    observer.observe(cardEl);
};

cards.forEach(initOverlayCard);
document.body.addEventListener("pointermove", applyOverlayMask);

// 

var random = Math.floor((Math.random() * 2000)) + 500;
$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass('loaded');
    }, random);
});