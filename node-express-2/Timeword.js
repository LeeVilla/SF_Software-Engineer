function Timeword(time) {
  let [hours, minutes] = time.split(":").map((x) => parseInt(x));
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  if (hours === 12 && minutes === 0) {
    return "noon";
  } else if (hours === 0 && minutes === 0) {
    return "midnight";
  } else {
    let minutesWord = "o' clock";
    if (minutes === 15) minutesWord = "quarter past";
    if (minutes === 30) minutesWord = "half past";
    if (minutes === 45) minutesWord = "quarter to";
    if (minutes > 0 && minutes < 30) minutesWord = `${minutes} past`;
    if (minutes > 30) {
      minutesWord = `${60 - minutes} to`;
      hours++;
    }
    return `${hours} ${minutesWord} ${ampm}`;
  }
}
