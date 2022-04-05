﻿function validateForm() {
    $(".validate-form").validate({
        rules: {
            ExpenseName: {
                required: true,
                pattern: /^[a-zA-Z]+$/,
                rangelength: [3, 15]
            },
            Amount: {
                required: true,
                pattern: /^[0-9]+(,[0-9]{1,3})?$/,
                min: 0.01
            },
            Date: {
                required: true
            },
            TimeSpan: "required"
        },
        messages: {
            ExpenseName: {
                required: "The Name of the expense is required",
                pattern: "The Name should only consist of letters",
                rangelength: "The Name should be at least 3 characters long"
            },
            Amount: {
                required: "The Amount of the expense is required",
                pattern: "The Amount should be numeric and have up to 3 digits after the \",\"",
                min: "The Amount should be greater than zero"
            },
            Date: {
                required: "The Date of the expense is required"
            },
            TimeSpan: "Time span of the expense is required"
        },
        errorPlacement: function (error, element) {
            var name = element.attr('name');
            var errorSelector = '.validation_error_message[for="' + name + '"]';
            var $element = $(errorSelector);
            if ($element.length) {
                $(errorSelector).html(error.html());
            } 
            else {
                error.addClass("text-danger");
                error.insertAfter($element);
            }
        }
    });
}
function convertTimeSpanInput(timeSpan) {
    $(document).ready(function () {
        $(`input[value="${timeSpan}"]`).prop("checked", true);
    });
}
function setUpDatePicker() {
    $(document).ready(function () {
        $("#datepicker").datepicker({
            dateFormat: "dd.mm.yy",
            firstDay: 1
        });
    });
}
function submitDatePicker() {
    $("#submit").click(function () {
        let date = $("#datepicker").val().split(".").reverse().join("-");
        $("#datepicker").val(date);
    });
}

