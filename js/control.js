function selectTick(checkbox, answer, no) {
    if($('#question' + no).val() == 0)
    {
        if (!$('#' + checkbox).is(":checked"))
        {
            //$('.' +checkbox).css("background-color", "red");
            $('#' + checkbox).prop('checked', true);
            $('#' +answer).val(2);
            $('#question' + no).val(parseInt($('#question' + no).val()) + 1);
            $('.' +checkbox).animate({
                backgroundColor: "#314e4e"
            }, 1000 );
        }
        else
        {
            //$('.' +checkbox).css("background-color", "");
            $('.' +checkbox).animate({
                backgroundColor: "#72a7a7"
            }, 1000 );
            $('#' + checkbox).prop('checked', false);
            $('#' +answer).val(0);
            $('#question' + no).val(parseInt($('#question' + no).val()) - 1);
        }
    } else if($('#question' + no).val() == 1)
    {
        if (!$('#' + checkbox).is(":checked"))
        {
            //$('.' +checkbox).css("background-color", "red");
            $('.' +checkbox).animate({
                backgroundColor: "#314e4e"
            }, 1000 );
            $('#' + checkbox).prop('checked', true);
            $('#' +answer).val(1);
            $('#question' + no).val(parseInt($('#question' + no).val()) + 1);
        }
        else
        {
            //$('.' +checkbox).css("background-color", "");
            $('.' +checkbox).animate({
                backgroundColor: "#72a7a7"
            }, 1000 );
            $('#' + checkbox).prop('checked', false);
            $('#' +answer).val(0);
            $('#question' + no).val(parseInt($('#question' + no).val()) - 1);
        }

    } else if($('#question' + no).val() == 2 && $('#' + checkbox).is(":checked"))
    {
        //$('.' +checkbox).css("background-color", "");
        $('.' +checkbox).animate({
            backgroundColor: "#72a7a7"
        }, 1000 );
        $('#' + checkbox).prop('checked', false);
        $('#' +answer).val(0);
        $('#question' + no).val(parseInt($('#question' + no).val()) - 1);

        $(".Ans" + no).each(function() {
            var element = $(this);
            if (element.val() == 1) {
                element.val(2);
            }
        });

    }
    else if($('#question' + no).val() == 2 && !$('#' + checkbox).is(":checked"))
    {
        alert("En fazla 2 seçenek işretleyebilirsiniz!");
    }

}