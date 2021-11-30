(function () {
    const table = document.createDocumentFragment();

    let arr = [];
    for (let i = 0; i < 11; i++) {
        const tr = document.createElement('tr');
        arr[i] = [];
        for(let j = 0; j < 11; j++) {
            const td = document.createElement('td');
            td.innerHTML = arr[i][j] = getRandom();
            tr.appendChild(td);
            if(td.innerHTML == 0){
               td.style.backgroundColor = '#94f7d3';
            }

        }
        table.appendChild(tr);
    }
    document.getElementById('matrix').appendChild(table);

    function getRandom(){
        const min = 0;
        const max = 2;
        return Math.floor(Math.random()*(max-min))+min;
    }
    
})();
