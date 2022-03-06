export class KhmerDate {
  inputDate: Date = new Date();
  date: Date;

  constructor(date: Date) {
    this.date = date;
  }


  getDate() {
    let date_str: string = this.date.toString();
    let inputDate_str: string = this.inputDate.toString();
    let date_num: number = Date.parse(date_str);
    let inputDate_num: number = Date.parse(inputDate_str);
    let time: number = inputDate_num - date_num;
    
    //calculator
    let minutes = Math.floor(time / 60000);
    let second: number = Math.floor(60 * minutes);
    let hour: number = Math.floor(minutes / 60);
    let day: number =  Math.floor(hour / 24);
    let week: number = Math.floor(day / 7);
    let month: number = Math.floor(week / 4);
    let result = "";

    if (minutes < 1) {
      result = "មុននេះបន្តិច";
    } else if (minutes >= 1 && minutes < 60) {
      result = minutes + " នាទីមុន";
    } else if (minutes >= 60 && minutes < 1440) {
      result = hour + " ម៉ោងមុន";
    } else if (minutes >= 60 * 24 && minutes < 10080) {
      result = Math.ceil(day) + " ថ្ងៃមុន";
    } else if (minutes >= 10080 && minutes < 44640) {
      result = Math.ceil(week) + " សប្តាហ៍មុន";
    } else if (minutes >= 44640) {
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
  }
}
