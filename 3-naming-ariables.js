//  BAD

let sm = 45;
let pm = 50;
let sa = 10;
let ma = 30;
let r;
if (m > pm && sa > ma) {
    r = true;
}

// GOOD

const PASS_MARK = 50;
const MINIMUM_ATTENDANCE = 30;

let studentMark = 45;
let studentAttendance = 10;

const isStudentPass = studentMark > PASS_MARK && studentAttendance > MINIMUM_ATTENDANCE;
