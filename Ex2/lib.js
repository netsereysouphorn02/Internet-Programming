"use strict";
exports.__esModule = true;
exports.KhmerDate = void 0;
var KhmerDate = /** @class */ (function () {
    function KhmerDate(date) {
        this.inputDate = new Date();
        this.date = date;
    }
    KhmerDate.prototype.getDate = function () {
        var date_str = this.date.toString();
        var inputDate_str = this.inputDate.toString();
        var date_num = Date.parse(date_str);
        var inputDate_num = Date.parse(inputDate_str);
        var time = inputDate_num - date_num;
        //calculator
        var minutes = Math.floor(time / 60000);
        var second = Math.floor(60 * minutes);
        var hour = Math.floor(minutes / 60);
        var day = Math.floor(hour / 24);
        var week = Math.floor(day / 7);
        var month = Math.floor(week / 4);
        var result = "";
        if (minutes < 1) {
            result = "មុននេះបន្តិច";
        }
        else if (minutes >= 1 && minutes < 60) {
            result = minutes + " នាទីមុន";
        }
        else if (minutes >= 60 && minutes < 1440) {
            result = hour + " ម៉ោងមុន";
        }
        else if (minutes >= 60 * 24 && minutes < 10080) {
            result = Math.ceil(day) + " ថ្ងៃមុន";
        }
        else if (minutes >= 10080 && minutes < 44640) {
            result = Math.ceil(week) + " សប្តាហ៍មុន";
        }
        else if (minutes >= 44640) {
            result = Math.ceil(month) + " ខែមុន";
        }
        result = result.replaceAll("0", "០");
        result = result.replaceAll("1", "១");
        result = result.replaceAll("2", "២");
        result = result.replaceAll("3", "៣");
        result = result.replaceAll("4", "៤");
        result = result.replaceAll("5", "៥");
        result = result.replaceAll("6", "៦");
        result = result.replaceAll("7", "៧");
        result = result.replaceAll("8", "៨");
        result = result.replaceAll("9", "៩");
        return result;
    };
    return KhmerDate;
}());
exports.KhmerDate = KhmerDate;
