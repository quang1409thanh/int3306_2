
function sortTable(NoColumn) {
  const table = document.getElementById("table");
  const rows = Array.from(table.rows).slice(1);

  const direction =
    table.getAttribute("data-direction") === "ascending"
      ? "descending"
      : "ascending";

  rows.sort((a, b) => {
    const x = a.cells[NoColumn].textContent.toLowerCase();
    const y = b.cells[NoColumn].textContent.toLowerCase();

    if (direction === "ascending") {
      return x.localeCompare(y);
    } else {
      return y.localeCompare(x);
    }
  });
  document
    .querySelectorAll("th")
    .forEach((th) => th.classList.remove("ascending", "descending"));

  document
    .querySelector(`th:nth-child(${NoColumn + 1}`)
    .classList.add(direction);

  rows.forEach((row) => table.appendChild(row));

  table.setAttribute("data-direction", direction);
}

/**Code thuan theo thu tu, o trn la sau khi dung thu vien toi uu */
// function sortTable(NoColumn) {
//   let table;
//   table = document.getElementById("table");
//   var rows,
//     i,
//     x,
//     y,
//     count = 0;
//   var switching = true;
//   var direction = "ascending";
//   var rows = table.rows;
//   var addClassList = false;
//   while (switching) {
//     switching = false;
//     let checkSw = false;
//     for (i = 1; i < rows.length - 1; i++) {
//       x = rows[i].getElementsByTagName("td")[NoColumn];
//       y = rows[i + 1].getElementsByTagName("td")[NoColumn];
//       if (direction == "ascending") {
//         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//           checkSw = true;
//           break;
//         }
//       } else if (direction == "descending") {
//         if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//           checkSw = true;
//           break;
//         }
//       }
//     }
//     if (checkSw) {
//       addClassList = true;
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//       count++;
//     } else {
//       if (count == 0 && direction == "ascending") {
//         direction = "descending";
//         switching = true;
//       }
//     }
//   }
//   if (addClassList) {
//     var headers = document.querySelectorAll("th");
//     for (var i = 0; i < headers.length; i++) {
//       if (i === NoColumn) {
//         // remove direction class
//         if (headers[i].classList.contains("ascending")) {
//           headers[i].classList.remove("ascending");
//         } else if (headers[i].classList.contains("descending")) {
//           headers[i].classList.remove("descending");
//         }
//         headers[i].classList.add(direction);
//         console.log(headers[i].classList);
//         break;
//       }
//     }
//   }
// }
