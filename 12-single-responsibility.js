// BAD

function emailUsers(users) {
    users.forEach(user => {
        const userRecord = db.lookup(user);
        if(userRecord.isEmailNotification()) {
            sendEmail(user);
        }
    });
}


//  GOOD

//  function shuould perform only one task

function emailUsers(users) {
    users
        .filter(isUserEmailNotification)
        .forEach(sendEmail);
}

function isUserEmailNotification(user) {
    const userRecord = db.lookup(user);
    return userRecord.isEmailNotification;
}
