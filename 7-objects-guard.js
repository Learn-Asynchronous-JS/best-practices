// BAD

const sendEmail = (to, subject, body) => {
    if (to) {
        // send email
    } else {
        return "Wrong recipient";
    }
};

sendEmail("asitha@cts.com", "Ugly code", "this is the body"); // <-- if we mix this it wont work

// GOOD

const sendEmail = ({ to, subject, body }) => {
    if (!to) return "Wrong recipient";
    // send email
};

const emailData = {
    to: "asitha@cerativesoftware.com",
    subject: "Clean code",
    body: "Please write clean code",
};
sendEmail(emailData); // <-- if we mix this it wont work
