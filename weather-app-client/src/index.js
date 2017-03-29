'use strict';
var course = '';
var group = '';

function chooseCourse() {
    var courseEl = document.getElementById('course');
    course = courseEl.options[courseEl.selectedIndex].text;
}

function chooseGroup() {
    var groupEl = document.getElementById('group');
    group = groupEl.options[groupEl.selectedIndex].text;
}

function showTimetable() {
    var url = "http://localhost:3000/timetable/" + course + "/" + group;
    var responseJson;
    fetch(url)
        .then(function (res) {
            return res.json();
        }).then(function (json) {
        renderTable(json);
    });
}

function renderTable(json) {

    var $table = $('<table/>');
    for (var i = 0; i < 3; i++) {
        $table.append('<tr><td>' + 'result' + i + '</td></tr>');
    }
    $('#table').append($table);
}


function showG() {
    $.ajax({
        url: "http://localhost:3000/timetable-groups/" + $('#course').val() + "/",
        context: document.body,
        data: 'json',
        success: function (data) {
            $.each(data, function (key, value) {
                $.each(value, function (index, groupValue) {
                    $('#group')
                        .append($('<option>', {value: groupValue})
                            .text(groupValue));
                })
            });
        }
    });
    course = $('#course').val();
}