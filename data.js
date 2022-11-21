createData = [];
array=["red","blue","pink","green","yellow"]
function addInput()
{
    n = document.getElementById('value1').value;
    createData.unshift(n);
    //console.log(createData);
    displayData();
}
function mapUser()
{
  temp="";
  array.map((x,i)=>{temp = temp + `<div style="height: auto; width: auto; background-color: ${x}; margin: 5px, 0px, 0px, 0px;
  display: flex; justify-content: space-between;"><h3>${x}</h3></div>`});
  document.getElementById('mapData').innerHTML=temp;

}
function filterUser()
{
  document.getElementById("filterData").innerHTML=array.filter(array=>array!=document.getElementById("value2").value).
  map(array=>`<div style="height: auto; width: auto; background-color: ${array}; margin: 5px, 0px, 0px, 0px;
  display: flex; justify-content: space-between;"><h3>${array}</h3></div>`);

}
function sortUser()
{
  document.getElementById("sortData").innerHTML=array.sort().map(array=>`<div style="height: auto; width: auto; background-color: ${array}; margin: 5px, 0px, 0px, 0px;
  display: flex; justify-content: space-between;"><h3>${array}</h3></div>`);
}
function reverseUser()
{
  document.getElementById("reverseData").innerHTML=array.reverse().map(array=>`<div style="height: auto; width: auto; background-color: ${array}; margin: 5px, 0px, 0px, 0px;
  display: flex; justify-content: space-between;"><h3>${array}</h3></div>`);
}
function displayData()
{
    let temp = "" ;
    for (let i = 0; i < createData.length; i++)
    {
        //console.log(createData[i]);
        temp = temp +  `<div style = "height: auto; width: auto; background-color: cadetblue; margin: 5px, 0px, 0px, 0px;
        display: flex; justify-content: space-between;">
        <h3>${i+1}: ${createData[i]}</h3>
        <div class="button">
            <button id="update">Update</button>
            <button>Delete</button>
        </div>
    </div>`
    }
    document.getElementById('displayUser').innerHTML = temp;
}

// createData=[];
// function createNewfiled()
// {
//   let n=document.getElementById("value1").value;
//   createData.unshift(n);
//   console.log(createData);
//   showData();
//
// }
// function showData()
// {
//   let temp;
//   for (var i = 0; i <= createData.length; i++)
//   {
//     temp =temp +`<div style="width: 80px; height: 80px;color:white; background-color: ${color}">${color}</div>`;
//
//   }
// }
