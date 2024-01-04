// I am unable send a direct request to the W3School server. So i am Pasting  all JavaScript in the HTML file and, then using the whole HTML file to send a server request from w3school's website
async function change_myselect(sel) {
  // Sel is the value selected from the drop down menu
  const dbParam = JSON.stringify({ table: sel, limit: 20 });

  // In the fetch method, in the second parameter if we do not incluide any second parameter, the fetch method will be sent as a GET request.

  // However in the second parameter if we provide an object with method property set to POST, some header information and a body, which we are trying to post in the server, It will be treated as a POST request
  const response = await fetch(
    "https://www.w3schools.com/js/json_demo_table.php",
    {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: "x=" + dbParam,
    }
  );
}
