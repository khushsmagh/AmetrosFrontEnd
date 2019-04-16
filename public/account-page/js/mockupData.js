// // Hardcoded Data
// var Simulations = [
//     new Simulation("CHANGE MANAGEMENT", "31/12/2018", "31/12/2019", "Completed", [80, 40, 90, 65, 70]),
//     new Simulation("COLLABORATION", "01/03/2019", "01/05/2019", "Ongoing", [70, 30, 10, 40, 0]),
//     new Simulation("CORPORATE COMMUNICATION", "15/02/2019", "15/03/2019", "Completed", [100, 90, 80, 75, 88]),
//     new Simulation("CRISIS COMMUNICATION", "01/01/2019", "21/02/2019", "Failed", [65, 25, 15, 35, 25]),
//     new Simulation("DATA STORYTELLING", "15/03/2019", "15/12/2019", "Standby", [68, 72, 80, 90, 0]),
//     new Simulation("KNOWLEDGE TRANSLATION", "01/12/2018", "01/12/2019", "Ongoing", [90, 80, 70, 60, 0]),
//     new Simulation("NEGOTIATION", "20/03/2018", "20/05/2019", "Ongoing", [20, 45, 60, 0, 0]),
//     new Simulation("PERSUASION", "15/02/2019", "15/03/2019", "Completed", [80, 95, 100, 85, 95]),
//     new Simulation("SOCIAL WORK (INTERVIEWING SKILLS)", "25/02/2018", "25/03/2018", "Failed", [50, 10, 25, 35, 40])];

// // Update Simulation Details
// function Simulation(title, startDate, endDate, status, progress) {
//     this.title = title;
//     this.startDate = startDate;
//     this.endDate = endDate;
//     this.status = status;
//     this.progress = progress;
// };

// // // Update Simulation Details
// // function showDetails(title) {
// //     const detailsElement = document.getElementById("sim-details");
// //     const detailsTitle = document.getElementById("title-details");
// //     const startDate = document.getElementById("startDate");
// //     const endDate = document.getElementById("endDate");
// //     const status = document.getElementById("status");
// //     const module1Score = document.getElementById("module1Score");
// //     const module2Score = document.getElementById("module2Score");
// //     const module3Score = document.getElementById("module3Score");
// //     const module4Score = document.getElementById("module4Score");
// //     const module5Score = document.getElementById("module5Score");
// //     const bar1 = document.getElementById("bar1");
// //     const bar2 = document.getElementById("bar2");
// //     const bar3 = document.getElementById("bar3");
// //     const bar4 = document.getElementById("bar4");
// //     const bar5 = document.getElementById("bar5");

// //     detailsElement.style.display = "block";
// //     detailsTitle.innerHTML = title;

// //     (function () {
// //         Simulations.forEach(element => {
// //             if (element["title"] == detailsTitle.innerHTML) {
// //                 startDate.innerHTML = element["startDate"];
// //                 endDate.innerHTML = element["endDate"];
// //                 status.innerHTML = element["status"];
// //                 module1Score.innerHTML = element["progress"][0];
// //                 module2Score.innerHTML = element["progress"][1];
// //                 module3Score.innerHTML = element["progress"][2];
// //                 module4Score.innerHTML = element["progress"][3];
// //                 module5Score.innerHTML = element["progress"][4];
// //                 bar1.style.width = element["progress"][0] + "%";
// //                 bar2.style.width = element["progress"][1] + "%";
// //                 bar3.style.width = element["progress"][2] + "%";
// //                 bar4.style.width = element["progress"][3] + "%";
// //                 bar5.style.width = element["progress"][4] + "%";
// //             }
// //         });
// //     })()

// // };

