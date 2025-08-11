id = document.getElementById('inputdata')
it = document.getElementById('inputtime')
enter = document.getElementById('enter')
function editPlan() {
    data = id.value;
    time = it.value;
    if (data && time) {
        document.querySelector(time).innerHTML = data;
        id.value = '';
        it.value = '';
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