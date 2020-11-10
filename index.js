var dropdownMain = document.getElementById('dropdown-main');
var arrow = document.getElementById("arrow");
var dropdownList = document.getElementById("dropdown-list");
var i = true;
dropdownMain.addEventListener('click',function(){
    switch (i){
        case true:
            dropdownList.style.opacity = '1';
            arrow.style.transform = 'rotate(90deg)';
            break;
        
        case false:
            dropdownList.style.opacity = '0';
            arrow.style.transform = 'rotate(0deg)';
            break;
        
    }
    i = !i;
})