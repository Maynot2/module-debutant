// Goal find out if appointement ends before EOD
// appointement starts: 15:40
// EOD: 16:30
// appointement length: variable
// if appointement ends before EOD, display: "RDV OK"
// if appointement ends after EOD, display: "RDV impossible"
// display end of appointement: "Le RDV se terminera a: HHhMM"

// A Time is a String
// String String Number -> String
// Computes a String to check if an appointement can
// be booked before the EOD and display the answer with the time
// of the appointement end
// expects: canBookAppointement(15) to produce: "RDV OK.
// Le RDV se terminera a: 15h55"

function canMakeApt(eod, aptStart, duration) {
  const aptEnd = timeToMinutes(aptStart) + duration;
  const finishAfterEod =  aptEnd > timeToMinutes(eod);

  if (finishAfterEod) {
    console.log("RDV impossible!");
    console.log(`Le RDV se terminerait à ${formatTime(aptEnd)} alors que la journée finie à ${eod}`);
  } else {
    console.log("RDV OK");
    console.log(`Le RDV se terminera à ${formatTime(aptEnd)}`);
  }
}

function timeToMinutes(time) {
  let hours, minutes;
  [hours, minutes] = time.split("h").map((n)=>Number(n));

  return hours * 60 + minutes;
}

function formatTime(minutes) {
  return `${formatHours(minutes)}h${formatMinutes(minutes)}`;
}

function formatHours(minutes) {
  return padLeft(Math.floor(minutes / 60));
}

function formatMinutes(minutes) {
  return padLeft(minutes % 60);
}

function padLeft(number) {
  const str = String(number)
  if (str.length === 1) {
    return "0" + str;
  }
  return str;
}

console.log(canMakeApt("16h30", "09h01", 55));