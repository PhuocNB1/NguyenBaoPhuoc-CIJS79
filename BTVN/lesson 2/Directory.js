// Reset INPUT
function resetInput() {
    document.getElementById('inputName').value = ''
    document.getElementById('inputPhone').value = ''
    document.getElementById('search').value = ''
}



function save() {
    let inputName = document.getElementById('inputName').value;
    let inputPhone = document.getElementById('inputPhone').value;
    // ------------------------------------------------
    if (inputName.length === 0) {
        alert('Vui lòng nhập Tên')
    } else if (inputName.length > 50 || inputName.length < 2) {
        inputName = '';
        alert('Vui lòng nhập lại Tên')
    }
    // ------------------------------------------------
    if (inputPhone.length === 0) {
        alert('Vui lòng nhập số điện thoại')
    } else if (inputPhone.length > 14 || inputPhone.length < 10) {
        inputPhone = '';
        alert('Vui lòng nhập lại số điện thoại')
    }
    // ------------------------------------------------
    if (inputName && inputPhone) {
        // Lưu vào danh sách
        let people = localStorage.getItem('people') ? JSON.parse(localStorage.getItem('people')) : [];
        people.push({
            Name: inputName,
            Phone: inputPhone,
        });

        localStorage.setItem('people', JSON.stringify(people));

        this.renderDirectory();
        resetInput()
    }
}
// ------------------------------------------------
// Lấy dữ liệu từ LocalStorage và hiển thị màn hình
// ------------------------------------------------
function renderDirectory() {

    let people = localStorage.getItem('people') ? JSON.parse(localStorage.getItem('people')) : [];

    if (people.length === 0)
        return false;

    let tableContent = `
        <div class="Item" id="view"> 
            <div class="Name"></div>
            <div class="Phone"></div>
        </div>`;
    people.forEach((people, index) => {

        tableContent +=
            `<div class="Item" id="view">
                <div class="Name">${people.Name}</div>
                <div class="Phone">${people.Phone}</div>
            </div> `;
    })

    document.getElementById('outputs').innerHTML = tableContent;
}
// --------------------------------
// -----Xóa dữ liệu trùng----------

function deleteDuplicate(index) {
    let people = localStorage.getItem('people') ? JSON.parse(localStorage.getItem('people')) : [];
}


// --------------------------------


// -----Tìm dữ liệu ---------------
let search = document.getElementById('search').value;

function findData() {
    let people = localStorage.getItem('people') ? JSON.parse(localStorage.getItem('people')) : [];
    
    if (search === people) {
        localStorage.setItem('people', JSON.stringify(people));
        renderDirectory();
    } else {
        resetInput()
        alert('Vui lòng kiểm tra lại thông tin')
    }
    
}