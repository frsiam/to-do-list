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
        <td><button class="btn btn-danger px-2 m-1 delete-btn">Delete</button><button class="btn btn-success px-2 m-1 done-btn">Done</button></td>`;
        content.appendChild(rowContent);
        document.getElementById('new-item').value = '';

        const deleteButton = document.getElementsByClassName('delete-btn');
        const doneButton = document.getElementsByClassName('done-btn');
        //for delete
        for(const button of deleteButton){
            button.addEventListener('click',function(e){
                e.target.parentNode.parentNode.style.display = "none";
            })
        }
    }
})