// import the data from data.js
const tableData = data;
// Reference the HTML table using d3; declare tbody as a variable and use d3 to look <tobdy> tags in the HTML
var tbody = d3.select("tbody");
// Simple JavaScript console.log statement; creates the function printHello and prints Hello There
function printHello() {
    console.log("Hello there!");
  }
// use fat arrow to reduce code needed for printHello
printHello = () => "Hello there!";
// Original addition function
function addition(a, b) {
    return a + b;
  }
// Converted to an arrow function
addition = (a, b) => a + b;
// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
// converted to an arrow function
doubleAddition = (c, d) => addition(c, d) * 2;
// create for loop
function listLoop(userList) {
  for (var i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  }
}
// create function to build table; tbody clears the exisiting table
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

// Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
      });
    });
  }
// creates function using d3
function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);