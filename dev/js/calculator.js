;(function ($) {
    $(function () {

// ********************* section with calculator  ********************

        let adultPrice3starHotel = 100,
            adultPrice4starHotel = 150,
            adultPrice5starHotel = 200,
            kidsPrice3starHotel = 50,
            kidsPrice4starHotel = 70,
            kidsPrice5starHotel = 90;

        function quantityMinus(elem) {
            if (elem.val() > 0) {
                elem.val(elem.val() - 1);
            }
        }

        function quantityPlus(elem) {
            if (elem.val() < 30) {
                elem.val(+elem.val() + 1);
            }
        }

        function getHotelStarsCount() {
            return $('input:radio:checked').val();
        }

        function calculateTotalSum(adults, kids, hotel, days) {
            let totalSum;
            if (hotel === 3) {
                totalSum = (adults * adultPrice3starHotel + kids * kidsPrice3starHotel) * days;
            } else if (hotel === 4) {
                totalSum = (adults * adultPrice4starHotel + kids * kidsPrice4starHotel) * days;
            } else {
                totalSum = (adults * adultPrice5starHotel + kids * kidsPrice5starHotel) * days;
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