const Exercise = require('../models/exercise');

exports.getExercises = (req, res, next) => {
  console.log('backend called');
  const exercises = [{
    template: 0,
    title: 'Office365 expiration',
    description: 'Description',
    digram: 'D',
    object: 'This is the subject',
    senderDisplayName: 'Sender Name',
    senderEmail: 'sender@mail.com',
    time: '10:00 PM',
    toMe: 'Me',
    toDisplayName: 'John Doe',
    toYou: 'You',
    toEmail: 'jdoe@scor.com',
    body: '<div style=text-align:center><br><h1 style=color:#ff2727><span class=clickable id=a11>Office 365</span></h1><br><p><span class=clickable id=a12>Hello <span class=link data-original-title=mailto:jdoe@scor.com data-toggle=tooltip>jdoe@scor.com</span>,</span><p><span class=clickable id=a13>Password for <span class=link data-original-title=mailto:jdoe@scor.com data-toggle=tooltip>jdoe@scor.com</span> expires today</span>.<p><span class=clickable id=a14>You can continue using your current password via the link below.</span></p><br><p><span class="clickable link"id=a15 data-original-title="https://urldefense.com/v3/__http://www.sgscor.com.dinamicorecorte.com.br/?tty=YWpvbmVzQHNjb3IuY29t__;!!Ad9y2A!i7nwrmDGehUpoPWRlDiDqnFCPaf_EEuP2Chu73kLJG2lIzYZCSgC0FgvRuV$"data-toggle=tooltip>Keep Current Password</span><p><span class=clickable id=a16>Scor.com Support</span></div>',
    rightAnswer: 'Indeed, this email is suspicious. Now please click on the element(s) that raise your suspiciousness, then click on validate.',
    wrongAnswer: 'Unfortunately, this is a phishing email. You should pay more attention on clues that must raise your suspiciousness.',
    answers: [{
      id: 'a3',
      text: 'SCOR support doesn&#39;t have this display name'
    }, {
      id: 'a4',
      text: 'the email address is suspicious'
    }, {
      id: 'a15',
      text: 'the link when hovering over this text doesn&#39;t seem to be legitimate'
    }, {
      id: 'a16',
      text: 'the support from SCOR doesn&#39;t use this signature'
    }, {
      id: 'a103',
      text: 'the message creates an urgency situation'
    }]
  }, {
    template: 1,
    title: 'SCOR expiration',
    description: "You&#39;re John DOE and working at SCOR.",
    digram: "SP",
    object: "[-Password Expired-]",
    senderDisplayName: "Scor Password",
    senderEmail: "anonymous@ae156.secure.ne.jp",
    time: "10:14 AM",
    toMe: "Me",
    toDisplayName: "DOE John",
    toYou: "You",
    toEmail: "JDOE@scor.com",
    body: '<div style=font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5><p><span class=clickable id=a10>Hi Jdoe,</span><p><span class=clickable id=a11>The password of your email account jdoe@scor.com will expire today <<writeDate({&quot;d&quot;:&quot;0&quot;,&quot;format&quot;:&quot;MMMM d, YYYY&quot;})>></span><p><span class=clickable id=a12>Please click below if you want to keep using same password</span></p><br><p><div style=text-decoration:none;display:inline-block;color:#fff;background-color:#2688d9;font-size:24px;font-weight:700 class="clickable link"data-original-title="https://urldefense.com/v3/__https://anewbike.com/y/?email=jdoe@scor.com__;!!Ad9y2A!i7nwrmDGehUpoPWRlDiDqnFCPaf_EEuP2Chu73kLJG2lIzYZCSgC0FgvRuV$"data-toggle=tooltip id=a13>Keep Same   Password</div><p></p><br><br><br><p><span class=clickable id=a14>Thanks,</span></p><br><p><span class=clickable id=a15>The account team</span><p><span class=clickable id=a16 style=color:#666>Scor | Security</span></div>',
    rightAnswer: "Indeed, this email is suspicious. Now please click on the element(s) that raise your suspiciousness, then click on validate.",
    wrongAnswer: "Unfortunately, this is a phishing email. You should pay more attention on clues that must raise your suspiciousness.",
    answers: [{
      id: "a3",
      text: "SCOR support doesn&#39;t have this name"
    }, {
      id: "a4",
      text: "the email address is suspicious"
    }, {
      id: "a10",
      text: "greeting recipients with their email id makes the email suspicious"
    }, {
      id: "a13",
      text: "the link when hovering over this text doesn&#39;t seem to be legitimate"
    }, {
      id: "a15",
      text: "this team doesn&#39;t exist at SCOR"
    }, {
      id: "a16",
      text: "the signature doesn&#39;t match the SCOR visual guide"
    }, {
      id: "a100",
      text: "you don&#39;t expect to have this message"
    }, {
      id: "a102",
      text: "the message doesn&#39;t follow the SCOR visual guide"
    }, {
      id: "a103",
      text: "the message creates an urgency situation"
    }]
  }];
  res.status(200).json({
    message: "exercises fetched successfully!",
    exercises: exercises
  })
};