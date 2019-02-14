;(function ($) {
    $(function () {

// ********************* section with calculator  ********************

        function quantityMinus(elem) {
            if (elem.val() > 0) {
                elem.val(elem.val() - 1);
            }
        }

        function quantityPlus(elem) {
            elem.val(+elem.val() + 1);
        }

        function getHotelStarsCount() {
            return $('input:radio:checked').val();
        }

        function calculateTotalSum(adults, kids, hotel, days) {
            let totalSum;
            if (hotel === 3) {
                totalSum = (adults * 100 + kids * 50) * days;
            } else if (hotel === 4) {
                totalSum = (adults * 150 + kids * 70) * days;
            } else {
                totalSum = (adults * 200 + kids * 90) * days;
            }

            return totalSum;

        }

        $('.quantity-arrow-minus').on('click', function () {
            let input = $(this).siblings('.quantity-num');
            quantityMinus(input);
        });

        $('.quantity-arrow-plus').on('click', function () {
            let input = $(this).siblings('.quantity-num');
            quantityPlus(input);
        });

        $('#calculate-it').on('click', function () {
            let adultsQuantity = +$('#adults-quantity').val(),
                kidsQuantity = +$('#kids-quantity').val(),
                hotelStars = +getHotelStarsCount(),
                amountOfDays = +$('#amount-of-days').val(),
                standartPrice = calculateTotalSum(adultsQuantity, kidsQuantity, hotelStars, amountOfDays),
                discount;

            if (amountOfDays >= 10) {
                discount = standartPrice * 0.1
            } else discount = 0;

            let totalPrice = standartPrice - discount;

            $('#standart-price').text(standartPrice);

            $('#discount').text(discount);

            $('#total-price').text(totalPrice);
        });

// **************************************************************************

    });
})(jQuery);