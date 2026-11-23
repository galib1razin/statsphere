/* ============ RESOURCE LIBRARY ============
   Each course has:  name, drive (a Google Drive folder link, or "" to use the semester/root folder).
   To add a course folder link: open the folder in Google Drive -> Share -> "Anyone with the link" -> Copy link,
   then paste it between the quotes after  drive:
   You may also set  embed: true  to show the folder inside the page (works for public folders).
*/
const ROOT = SITE.driveRoot;
const LIBRARY = [
  { year: "2nd Year", semesters: [
    { code: "2-1", folder: "2-1 by N@sir", drive: "", courses: [
      { name: "Theory of Statistics", drive: "" },
      { name: "Probability Distributions", drive: "" },
      { name: "Advance Calculus and Differential Equations", drive: "" },
      { name: "Principles of Microeconomics", drive: "" },
      { name: "STATA and C++", drive: "" },
      { name: "Questions of TT and Semester Final", drive: "", note: "TT = Term Test" } ] },
    { code: "2-2", folder: "2-2 by N@sir", drive: "", courses: [
      { name: "Regression Analysis – I", drive: "" },
      { name: "Numerical Methods", drive: "" },
      { name: "Principles of Macroeconomics", drive: "" },
      { name: "Real Analysis", drive: "" },
      { name: "Database Management & Programming", drive: "" },
      { name: "Questions of Term Test and Semester Final", drive: "" } ] } ] },
  { year: "3rd Year", semesters: [
    { code: "3-1", folder: "3-1 by N@sir", drive: "", courses: [
      { name: "Design & Analysis of Experiments – I", drive: "" },
      { name: "Statistical Inference", drive: "" },
      { name: "Statistical Simulation and Data Analysis with R & Python", drive: "" },
      { name: "Linear Programming", drive: "" },
      { name: "Previous Question", drive: "" },
      { name: "Statistical Tables", drive: "" } ] },
    { code: "3-2", folder: "3-2 by N@sir", drive: "", courses: [
      { name: "Stochastic Processes", drive: "" },
      { name: "Demography", drive: "" },
      { name: "Data Analysis with SAS", drive: "" },
      { name: "Regression Analysis – II", drive: "" },
      { name: "Field Work", drive: "" },
      { name: "Term Test & Semester Final Questions", drive: "" } ] } ] }
];
