(function () {
  const table = document.createDocumentFragment();
  const size = 11;

  let arr = [];
  for (let i = 0; i < size; i++) {
    const tr = document.createElement("tr");
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      const td = document.createElement("td");
      td.innerHTML = arr[i][j] = getRandom();

      tr.appendChild(td);

      if (td.innerHTML == 0) {
        td.style.backgroundColor = "#94f7d3";
      }
    }
    table.appendChild(tr);
  }
  document.getElementById("matrix").appendChild(table);

  const startRow = Math.round(Math.random() * size);
  const endRow = Math.round(Math.random() * size);
  const startCol = Math.round(Math.random() * size);
  const endCol = Math.round(Math.random() * size);

  console.log(`StartPoint: [${startRow},${startCol}]`);
  console.log(`EndPoint: [${endRow},${endCol}]`);

  function getRandom() {
    const min = 0;
    const max = 2;
    return Math.floor(Math.random() * (max - min)) + min;
  }
})();
