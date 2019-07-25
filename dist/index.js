"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function zeropad(number) {
    return String(number).padStart(2, '0');
}
function convertFormat(hh, mm, ss, format, sep) {
    if (format == 'hms') {
        return `${hh}${sep}${mm}${sep}${ss}`;
    }
    else if (format == 'hm') {
        return `${hh}${sep}${mm}`;
    }
    else {
        return `${hh}`;
    }
}
function num2time(number, format = 'hms', sep = ':') {
    if (number < 60) {
        const f_ss = zeropad(number);
        return {
            hh: '00',
            mm: '00',
            ss: f_ss,
            timeformat: convertFormat('00', '00', f_ss, format, sep)
        };
    }
    else {
        const ss = number % 60;
        const mm = Math.floor(number / 60);
        if (mm < 60) {
            const f_ss = zeropad(ss);
            const f_mm = zeropad(mm);
            return {
                hh: '00',
                mm: f_mm,
                ss: f_ss,
                timeformat: convertFormat('00', f_mm, f_ss, format, sep)
            };
        }
        else {
            const tmp_mm = mm % 60;
            const hh = Math.floor(mm / 60);
            const f_ss = zeropad(ss);
            const f_mm = zeropad(tmp_mm);
            const f_hh = zeropad(hh);
            return {
                hh: f_hh,
                mm: f_mm,
                ss: f_ss,
                timeformat: convertFormat(f_hh, f_mm, f_ss, format, sep)
            };
        }
    }
}
exports.default = num2time;
