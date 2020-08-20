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
    const $descriptionContentSelectedHovered = $description.data('selectedhovered');

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

    $card.hover(handlerHoverMouseIn, handlerHoverMouseOut);
    $footer.on('mouseenter', '.cat-card__footer-button', handlerHoverMouseIn);
    $footer.on('mouseleave', '.cat-card__footer-button', handlerHoverMouseOut);

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

          $card.removeClass('cat-card__container_selected-hovered');
          $containerCorner.removeClass('cat-card__container-corner_selected-hovered');
          $containerBorder.removeClass('cat-card__container-border_selected-hovered');
          $weightCircle.removeClass('cat-card__weight-circle_selected-hovered');

          $description.removeClass('cat-card__description_selected-hovered');
          $description.html($descriptionContent);
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

    $card.click(handlerSelect);
    $footer.on('click', '.cat-card__footer-button', handlerSelect);

    function handlerSelectedMouseOut(eventObj) {
      if ($card.hasClass('cat-card__container_disabled')) {
        return;
      } else {
        $card.removeClass('cat-card__container_selected-hovered');
        $containerCorner.removeClass('cat-card__container-corner_selected-hovered');
        $containerBorder.removeClass('cat-card__container-border_selected-hovered');
        $weightCircle.removeClass('cat-card__weight-circle_selected-hovered');

        $description.removeClass('cat-card__description_selected-hovered');
        $description.html($descriptionContent);


      }
    }

    function handlerSelectedMouseIn(eventObj) {
      if ($card.hasClass('cat-card__container_disabled')) {
        return;
      } else if ($card.hasClass('cat-card__container_selected')) {
        $card.addClass('cat-card__container_selected-hovered');
        $containerCorner.addClass('cat-card__container-corner_selected-hovered');
        $containerBorder.addClass('cat-card__container-border_selected-hovered');
        $weightCircle.addClass('cat-card__weight-circle_selected-hovered');

        $description.addClass('cat-card__description_selected-hovered');
        $description.html($descriptionContentSelectedHovered);
      }
    }

    $card.hover(handlerSelectedMouseIn, handlerSelectedMouseOut);





  });

});