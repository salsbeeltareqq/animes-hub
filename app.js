'use strict'
function CofData(titleI, selectlist) {
    this.titleI = titleI;
    this.selectlist = selectlist;
    CofData.all.push(this)
}
var getarray =JSON.parse(localStorage.getItem('mymovies'))
if(getarray){
    CofData.all = getarray
    tableofdata();
}else
{
CofData.all = [];
}

function data(event) {
    event.preventDefault();
    var file1 = event.target.titleI.value
    var file2 = event.target.selectlist.value
    var newcate = new CofData(file1, file2)
    localStorage.setItem('mymovies',JSON.stringify(CofData.all))

  
}

var form = document.getElementById('myForm')
myForm.addEventListener('submit', tableofdata)

function tableofdata() {
    var Table = document.getElementById('animesTable')
    for (var i = 0; i < CofData.all.length; i++) {

        var ct1 = document.createElement('td')
        var ct2 = document.createElement('td')
        var rembutton = document.createElement('button')
        rembutton.setAttribute('id', i)
        rembutton.addEventListener('click', removebutton)
        rembutton.textContent='x'



        ct1.textContent = CofData.all[i]
        ct2.textContent = CofData.all[i]

        var tablerow = document.createElement('tr')
        tablerow.appendChild(ct1)
        tablerow.appendChild(ct2)
        tablerow.appendChild(rembutton)
        tablerow.appendChild(Table)
        

    }
    function removebutton(event) {
        var clickeditem = Event.target.id
        CofData.all.splice(clickeditem);

    }


}