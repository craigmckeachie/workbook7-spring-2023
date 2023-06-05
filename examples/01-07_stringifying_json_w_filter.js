let job = {
  title: "Web Designer",
  startDate: "October 2022",
  company: "AT&T",
  minSalary: 52000,
  maxSalary: 86000,
};

let filter = ["title", "company"];
let str = JSON.stringify(job, filter);
console.log(str);
