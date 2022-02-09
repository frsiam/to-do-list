let count = 0;
document.getElementById('add-item').addEventListener('click',function(){
    const inputValue = document.getElementById('new-item').value;
    count++;
    if(inputValue == ""){
        alert("Please add item !")
    }
    else{
        const content = document.getElementById('table-body');
        const rowContent = document.createElement('tr');
        rowContent.innerHTML = `<th scope="row">${count}</th>
        <td>${inputValue}</td>
        <td>Otto</td>`;
        content.appendChild(rowContent);
        document.getElementById('new-item').value = '';
    }
})