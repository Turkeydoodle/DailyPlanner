let id = document.getElementById('inputdata')
let it = document.getElementById('inputtime')
let enter = document.getElementById('enter')
function editPlan() {
    let data = id.value.trim();
    let time = it.value.trim();
    if (data && time) {
        let cell = document.querySelector('#' + time);
        if (cell) {
            cell.innerHTML = data;
            id.value = '';
            it.value = '';
        } else {
            alert('Invalid time entered.');
        }
    } else {
        alert('Please fill in both fields.');
    }
}
enter.addEventListener('click', editPlan)
id.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        editPlan();
    }
})