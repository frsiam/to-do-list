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
        <td><button class="btn btn-danger px-2 m-1">Delete</button><button class="btn btn-success px-2 m-1">Done</button></td>`;
        content.appendChild(rowContent);
        document.getElementById('new-item').value = '';
    }
})