$(document).ready(function () {

  $('.cat-card').each(function (index, element) {
    const $card = $(element).find('.cat-card__container');
    const $buyButton = $(element).find('.cat-card__footer-button');

    const $containerCorner = $(element).find('.cat-card__container-corner');
    const $containerBorder = $(element).find('.cat-card__container-border');
    const $weightCircle = $(element).find('.cat-card__weight-circle');
    const $footer = $(element).find('.cat-card__footer');
    const $description = $(element).find('.cat-card__description');

    const $descriptionContent = $description.html();
    const $footerContent = $footer.html();
    const $footerContentSelected = $footer.data('selected');


    function handlerHoverMouseIn(eventObj) {
      if ($card.hasClass('cat-card__container_disabled') || $card.hasClass('cat-card__container_selected')) {
        return;
      } else {
        $card.addClass('cat-card__container_hovered');
        $containerCorner.addClass('cat-card__container-corner_hovered');
        $containerBorder.addClass('cat-card__container-border_hovered');
        $weightCircle.addClass('cat-card__weight-circle_hovered');
        $buyButton.addClass('cat-card__footer-button_hovered');
      }
    }

    function handlerHoverMouseOut(eventObj) {
      if ($card.hasClass('cat-card__container_disabled') || $card.hasClass('cat-card__container_selected')) {
        return;
      } else {
        $card.removeClass('cat-card__container_hovered');
        $containerCorner.removeClass('cat-card__container-corner_hovered');
        $containerBorder.removeClass('cat-card__container-border_hovered');
        $weightCircle.removeClass('cat-card__weight-circle_hovered');
        $buyButton.removeClass('cat-card__footer-button_hovered');
      }
    }

    function handlerSelect(eventObj) {
      if ($card.hasClass('cat-card__container_disabled')) {
        return;
      } else {
        $card.toggleClass('cat-card__container_hovered');
        $containerCorner.toggleClass('cat-card__container-corner_hovered');
        $containerBorder.toggleClass('cat-card__container-border_hovered');
        $weightCircle.toggleClass('cat-card__weight-circle_hovered');
        $buyButton.toggleClass('cat-card__footer-button_hovered');

        if ($card.hasClass('cat-card__container_selected')) {
          $footer.html($footerContent);
        } else {
          $footer.html($footerContentSelected);
        }

        $card.toggleClass('cat-card__container_selected');
        $containerCorner.toggleClass('cat-card__container-corner_selected');
        $containerBorder.toggleClass('cat-card__container-border_selected');
        $weightCircle.toggleClass('cat-card__weight-circle_selected');
        $buyButton.toggleClass('cat-card__footer-button_selected');
      }
    }

    $card.hover(handlerHoverMouseIn, handlerHoverMouseOut);
    $footer.on('mouseenter', '.cat-card__footer-button', handlerHoverMouseIn);
    $footer.on('mouseleave', '.cat-card__footer-button', handlerHoverMouseOut);

    $card.click(handlerSelect);
    $footer.on('click', '.cat-card__footer-button', handlerSelect);

  });



  $('.exp-checkbox').each(function (index, element) {
    let $arrow = $(element).find('.exp-checkbox__arrow').html();
    let isShown;

    if ($arrow == 'expand_more') {
      isShown = false;
    } else if ($arrow == 'expand_less') {
      isShown = true;
    }

    $(element).find(".exp-checkbox__title").click(function () {
      if (isShown) {
        $(element).find(".exp-checkbox__buttons").hide("slow");
        $(element).find(".exp-checkbox__arrow").html('expand_more')
      } else {
        $(element).find(".exp-checkbox__buttons").show("slow");
        $(element).find(".exp-checkbox__arrow").html('expand_less')
      }
      isShown = !isShown;
    });

  });
});