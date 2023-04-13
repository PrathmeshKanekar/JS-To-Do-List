let myworks = Array();
function savework(){
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let work = document.getElementById("work").value;

    if(date == ""){
        alert("select Date")
        document.getElementById("date").focus();
        return false;
    }
    if(time == ""){
        alert("select Time")
        document.getElementById("time").focus();
        return false;
    }
    if(work == ""){
        alert("select Work")
        document.getElementById("work").focus();
        return false;
    }
    let newid = getmaxidplus1();
    let mywork = {id: newid,workdate: date, worktime: time, actualwork: work}

    myworks.push(mywork);

    document.getElementById("date").value = "";            
    document.getElementById("time").value = "";
    document.getElementById("work").value = "";  
    
    showworks();
}


function getmaxidplus1(){
    let maxid = 0;
    for(i=0;i< myworks.length;i++)
        {
            if(myworks[i].id > maxid){
                maxid = myworks[i].id;
            }
        }
        return maxid + 1;
}
function showworks(){
    let workstr = "<table class='table table-striped' >";
        workstr += "<tr>";
        workstr += "<th>No</th>";
        workstr += "<th>Date</th>";
        workstr += "<th>Time</th>";
        workstr += "<th>Work</th>";
        workstr += "<th>Action</th>";
        workstr += "</tr>";

        for(i=0;i< myworks.length;i++)
        {
            workstr += "<tr>";
        workstr += "<td>" + (i + 1) + "</td>";
        workstr += "<td>" + myworks[i].workdate + "</td>";
        workstr += "<td>" + myworks[i].worktime + "</td>";
        workstr += "<td>" + myworks[i].actualwork + "</td>";
        workstr += "<td><button type='button' onclick='deletework("+ myworks[i].id +")' class='btn-close'></button></td>";
        workstr += "</tr>";

        }


         workstr += "</table>";
         document.getElementById("divWorks").innerHTML = workstr;
}

function deletework(id){
    if(confirm("sure to delete?"))
    {
        for(i=0;i< myworks.length;i++)
        {
            if(myworks[i].id == id){
                let index = i;
            myworks.splice(index,1)
            break;
            }
        }
        showworks();
    }
    
}

showworks();