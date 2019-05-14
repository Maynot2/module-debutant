/* Mini projet : valider un rendez-vous */

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

function timeToMinutes(time) {
  let [hours, minutes] = time.split("h").map((n)=>Number(n));

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

const midnight = 1440;
const noon = 1440 / 2;

function canMakeApt(eod, aptStart, duration) {
  const eodMinutes = timeToMinutes(eod);
  const aptStartMinutes = timeToMinutes(aptStart);
  const aptEndMinutes = (aptStartMinutes + duration) % midnight;
  let timeLeftBeforeEod;

  if (eodMinutes < noon && aptStartMinutes < midnight) {
    timeLeftBeforeEod = midnight - aptStartMinutes + eodMinutes
  } else {
    timeLeftBeforeEod = eodMinutes - aptStartMinutes
  }

  if (duration > timeLeftBeforeEod) {
    console.log("RDV impossible!");
    console.log(`Le RDV se terminerait à ${formatTime(aptEndMinutes)} alors que la journée finie à ${eod}`);
  } else {
    console.log("RDV OK");
    console.log(`Le RDV se terminera à ${formatTime(aptEndMinutes)}`);
  }
}

console.log(canMakeApt("17h00", "16h30", 25));
console.log(canMakeApt("17h00", "16h30", 35));
console.log(canMakeApt("00h00", "23h30", 29));
console.log(canMakeApt("00h00", "23h30", 30));
console.log(canMakeApt("00h00", "23h30", 31));
console.log(canMakeApt("00h10", "23h30", 25));
console.log(canMakeApt("00h10", "23h00", 65));
console.log(canMakeApt("00h10", "23h00", 75));
console.log(canMakeApt("12h10", "11h00", 65));
console.log(canMakeApt("12h10", "11h00", 85));
console.log(canMakeApt("11h59", "23h50", 721));