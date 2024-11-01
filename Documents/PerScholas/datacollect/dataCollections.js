

const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

function processCSV(csv) {
  const rows = [];
  const lines = csv.split('\n');
  const headers = lines[0].split(','); 

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const obj = {};

    for (let j = 0; j < values.length; j++) {
      obj[headers[j]] = values[j];
    }

    rows.push(obj);
  }

  rows.forEach((row, index) => {
    console.log(`Row ${index + 1}:`, row);
  });

  return rows;
}

const result = processCSV(csvString);
console.log(result);

let dataArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
  ];
  
  dataArray.pop();

  dataArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

  dataArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
  
  console.log(dataArray);
  [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ]


  const dataArray1 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];
  
  function arrayToCSV(data) {
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(row => Object.values(row).join(',')).join('\n');
    return `${headers}\n${rows}`;
  }
  
  const csvString1 = arrayToCSV(dataArray1);
  console.log(csvString);

