var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope','$http', function($scope,$http) {
    // $scope.Value = "RO";
    $scope.data = ""; 
  
    $scope.fetchData = function(user){
        $http.get('https://api.github.com/search/repositories?q='+$scope.Value+'+language:all&sort=stars&order=desc&APPID=f3212fc2ddbe5cb7d3a033784d095aef254f11a1').then(function(response){
            $scope.data = response.data.items;
        }) 
    }
    

 
}]);






function Insert(elem){
    var x= parseInt(elem.parentNode.parentNode.rowIndex);
    console.log("row " + x);
    var tab1 = document.getElementById("Tab1");
    var tab2 = document.getElementById("Tab2");
    for (var i = 0, row; row = tab2.rows[i]; i++) {
        //iterate through cells
        //cells would be accessed using the "cell" variable assigned in the for loop
        if(tab1.rows[x].cells[0].innerText == tab2.rows[i].cells[0].innerText){
            alert("Already exits");
            return;
        
        }
    }
    
    
    var newRow = tab2.insertRow(tab2.length);
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    cel1.innerHTML = tab1.rows[x].cells[0].innerHTML;
    cel2.innerHTML = tab1.rows[x].cells[1].innerHTML;
    cel3.innerHTML = tab1.rows[x].cells[2].innerHTML;
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("remove");
    btn.setAttribute("id",x);
    btn.appendChild(t);
    //btn.onclick = function(){DeleteRow(4)};  
    btn.setAttribute("onClick", "DeleteRow(this)");
    newRow.appendChild(btn);
    
   
};
function DeleteRow(evt){
     var tr = evt.parentNode;

    console.log("delete row " + tr.rowIndex);
    var tab2 = document.getElementById("Tab2");
    tab2.deleteRow(tr.rowIndex);

    
}



   
    

