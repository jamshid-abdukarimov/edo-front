window.document.addEventListener("DOMContentLoaded", () => {
  const months = [
    "Январ",
    "Феврал",
    "Март",
    "Апрел",
    "Май",
    "Июн",
    "Июл",
    "Август",
    "Сентабр",
    "Октабр",
    "Ноябр",
    "Декабр",
  ];
  // Function to update the date and time
  function updateDate() {
    // Get the current date and time
    var currentDate = new Date();

    // Format the date and time as desired
    var formattedDate = `${currentDate.getFullYear()}-йил ${currentDate.getDate()}-${
      months[currentDate.getMonth()]
    } ҳолатига кўра`;
    // Update the HTML element with the formatted date and time
    document.getElementById("currentDate").innerText = formattedDate;
  }

  // Update the date immediately when the page loads
  updateDate();

  async function fetchData() {
    try {
      const response = await axios.get("https://edo-back.vercel.app");
      const data = response.data;

      const tableBody = document.querySelector("#data-table tbody");

      data.slice(1).forEach((item, index) => {
        const row = document.createElement("tr");
        row.classList.add(data.length - 2 === index ? "bg-gray-700" : "new");
        row.setAttribute("data-name", item[0]);
        row.innerHTML = `
          <td class="text-center px-4 py-2 border">
          <img class="min-w-14 w-14 h-14 rounded-full overflow-hidden object-cover object-center ${
            data.length - 2 === index ? "hidden" : ""
          }" src=${
          item[22]
            ? item[22]
            : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        } />
          </td>
          <td class="px-6 py-3 border ${
            data.length - 2 === index ? "text-white" : ""
          }">${item[0]}</td>
          <td class="text-center px-6 py-3 border ${
            data.length - 2 === index ? "text-white" : ""
          }">${item[1]}</td>
          <td class="text-center px-6 py-3 border ${
            data.length - 2 === index
              ? "bg-green-500 text-white"
              : "text-green-500"
          }">${item[2]}</td>
          <td class="text-center px-6 py-3 border ${
            data.length - 2 === index
              ? "bg-blue-500 text-white"
              : "text-blue-500"
          }">${item[3]}</td>
          <td class="text-center px-6 py-3 border ${
            data.length - 2 === index ? "bg-red-500 text-white" : "text-red-500"
          }">${item[4]}</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function updateData() {
    try {
      const response = await axios.get("https://edo-back.vercel.app");
      const data = response.data;
      const tableBody = document.querySelector("#data-table tbody");
      data.slice(1, data.length - 1).forEach((item, index) => {
        let row = tableBody.querySelector(`tr[data-name="${item[0]}"]`);
        row.innerHTML = `
          <td class="text-center px-4 py-2 border">
          <img class="min-w-14 w-14 h-14 rounded-full overflow-hidden object-cover object-center ${
            data.length - 2 === index ? "hidden" : ""
          }" src=${
          item[22]
            ? item[22]
            : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        } />
          </td>
          <td class="px-6 py-3 border ${
            data.length - 2 === index ? "text-white" : ""
          }">${item[0]}</td>
          <td class="text-center px-6 py-3 border ${
            data.length - 2 === index ? "text-white" : ""
          }">${item[1]}</td>
          <td class="text-center px-6 py-3 border ${
            data.length - 2 === index
              ? "bg-green-500 text-white"
              : "text-green-500"
          }">${item[2]}</td>
          <td class="text-center px-6 py-3 border ${
            data.length - 2 === index
              ? "bg-blue-500 text-white"
              : "text-blue-500"
          }">${item[3]}</td>
          <td class="text-center px-6 py-3 border ${
            data.length - 2 === index ? "bg-red-500 text-white" : "text-red-500"
          }">${item[4]}</td>
        `;
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData();

  setInterval(() => {
    updateData();
    updateDate();
  }, 60000);
});
