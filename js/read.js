const select = document.getElementById('classes');
select.addEventListener('change', onFormChange);

const checkboxes = document.querySelectorAll('input[name="cell"]'); // ВСЕ чекбоксы, не только отмеченные

checkboxes.forEach(cb => {
    cb.addEventListener('change', onFormChange);
});

function onFormChange() {
    const state = {
        selectedClass: document.getElementById('classes').value,
        checkedCells: Array.from(
            document.querySelectorAll('input[name="cell"]:checked')
        ).map(cb => cb.value)
    };
    console.log(state);
    return state;
}

