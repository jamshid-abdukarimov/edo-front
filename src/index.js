window.document.addEventListener("DOMContentLoaded", () => {
  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8888");
      const data = response.data;

      const tableBody = document.querySelector("#data-table tbody");

      data.slice(1).forEach((item, index) => {
        const row = document.createElement("tr");
        row.classList.add(data.length - 2 === index ? "bg-gray-700" : "new");
        row.setAttribute("data-name", item[0]);
        row.innerHTML = `
          <td class="text-center px-4 py-2 border">
          <img class="min-w-14 w-14 h-14 rounded-full overflow-hidden object-cover object-center" src=${
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
      const response = await axios.get("http://localhost:8888");
      const data = response.data;
      const tableBody = document.querySelector("#data-table tbody");
      data.slice(1, data.length - 1).forEach((item, index) => {
        let row = tableBody.querySelector(`tr[data-name="${item[0]}"]`);
        row.innerHTML = `
          <td class="text-center px-4 py-2 border">
          <img class="min-w-14 w-14 h-14 rounded-full overflow-hidden object-cover object-center" src=${
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
              : "text-green-400"
          }">${item[2]}</td>
          <td class="text-center px-6 py-3 border ${
            data.length - 2 === index
              ? "bg-blue-500 text-white"
              : "text-blue-400"
          }">${item[3]}</td>
          <td class="text-center px-6 py-3 border ${
            data.length - 2 === index ? "bg-red-500 text-white" : "text-red-400"
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
  }, 5000);
});
