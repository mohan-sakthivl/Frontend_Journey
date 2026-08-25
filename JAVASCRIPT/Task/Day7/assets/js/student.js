let students =  [{name:"mohan",mark: 85},{name: "vinoth",mark: 92},{name: "tharun",mark: 78}];

let targetName = "vinoth";

for (let i = 0; i < students.length; i++) {
    if (students[i].name === targetName) {
        console.log("Name:", students[i].name);
        console.log("Mark:", students[i].mark);
    }
}