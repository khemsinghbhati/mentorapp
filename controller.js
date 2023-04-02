
let locked=false;
let n=12

 table=document.getElementById('available');
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
     var arr = [];    
   function insertText(){
  
    for(let i = 0; i <n; i++) {
      arr[i]=[];
        for(let j = 0; j < 6; j++) {
           {
        
           arr[i][j]=randomIntFromInterval(1, 10);
           }
    }
    }   
      let TBODY=document.getElementById("availbody");
      
      var Tr =TBODY.getElementsByTagName("TR");
      for(var i=0;i<n;i++){   
        var sum=arr[i][0]+arr[i][1]+arr[i][2]+arr[i][3]+arr[i][4]+arr[i][5];
        Tr[i].cells[3].innerText=sum;
      }

   }
function deleteRow(btn,type) {
    var row = btn.parentNode.parentNode;
    if(locked) { alert(" you have locked the choice ");return ;}
    if(type==1)
    {     var n=document.getElementById("selected").rows.length;
         if(n==5) {alert("can't add more than 4");return ;}  
         insert_Row(row);
    }
    else 
     insert_Row2(row); 
    
     row.parentNode.removeChild(row);
     
  }
  function insert_Row(row)
  {
  var x=document.getElementById('selected').insertRow(-1);
  x.innerHTML=row.innerHTML;
  x.cells[4].innerHTML=' <a onclick="lookeredit(this)" class="looker-trigger1" href="#" data-target="#looker" data-toggle="modal">Edit</a> <button  onclick="deleteRow(this,2)" class="btn btn-danger">Delete</button>';
  
   }
   function insert_Row2(row)
   {
   var x=document.getElementById('available').insertRow(-1);
   x.innerHTML=row.innerHTML;
   x.cells[4].innerHTML='   <a onclick="lookerdisplay(this)" class="looker-trigger1" href="#" data-target="#looker" data-toggle="modal">View</a> <button type="button" onclick="deleteRow(this,1)" class="btn btn-success">Add</button>';
   
    }
function lockchoice(id){
    var n=document.getElementById("selected").rows.length;
    if(n<4){
        alert("select atleast 3 students");
        return ;
    }
     id.style.fontSize="20px";
     id.textContent="locked";
     id.style.border="1px solid Green";
     id.style.backgroundColor='Green';
     locked=true;
}
function lookerdisplay(id){
        let curlooker=document.getElementById('displayer');
        let row=id.parentNode.parentNode;
        let rollno=row.cells[0].innerText; 
        let projectname=row.cells[1].innerText;
        let studentname=row.cells[2].innerText;
        let totalscore=row.cells[3].innerText;
        let ideationscore=arr[rollno-1][0];
        let execution=arr[rollno-1][1];
        let viva=arr[rollno-1][2];
        let bonuspoints=arr[rollno-1][3];
        let codequality=arr[rollno-1][4];
        let technologies=arr[rollno-1][5];
        var todisplay="<br><br><br><br>Roll No: "+rollno;
        todisplay+="<br> Project name : "+projectname;
        todisplay+="<br> Student name : "+studentname;
        todisplay+="<br><br><br> SCORES OUT OF 10";
        
        todisplay+="<br><br> Ideation score : "+ideationscore;
        todisplay+="<br> Execution score : "+execution;
        todisplay+="<br> Viva/pitch score : "+viva;
        todisplay+="<br> Bonus points score : "+bonuspoints;
        todisplay+="<br> Code quality score : "+codequality;
        todisplay+="<br> Technologies score : "+technologies;
        todisplay+="<br><br><br> Total Score Out of 60 : "+totalscore;
        curlooker.innerHTML=todisplay;
}
function calc_total(rollno){
  var ans=0;
  for(let i=0;i<6;i++)
   ans+=parseInt(arr[rollno-1][i])  ;
  return ans;
}
function lookeredit(id){
  if(!locked){
    alert("please first lock the choice , click ok to view the student");
     lookerdisplay(id);
    return ;
  }
  let curlooker=document.getElementById('displayer');
  let row=id.parentNode.parentNode;
  let rollno=row.cells[0].innerText; 
  let projectname=row.cells[1].innerText;
  let studentname=row.cells[2].innerText;
  let totalscore=calc_total(rollno);
  let ideationscore=arr[rollno-1][0];
  let execution=arr[rollno-1][1];
  let viva=arr[rollno-1][2];
  let bonuspoints=arr[rollno-1][3];
  let codequality=arr[rollno-1][4];
  let technologies=arr[rollno-1][5];
  var todisplay="<br>Roll No: "+rollno;
  todisplay+="<br> Project name : "+projectname;
  todisplay+="<br> Student name : "+studentname;
  todisplay+="<br><br> SCORES OUT OF 10";
  
  todisplay+="<br><br> Ideation score : ";
  todisplay+='<input id="fir" style="float:right;text-align:center;" type="text" value="'+ideationscore+'" id="fname" name="fname ">';
  todisplay+="<br><br> Execution score : ";
  todisplay+='<input id="sec" style="float:right;text-align:center;" type="text" value="'+execution+'" id="fname" name="fname">';
  todisplay+="<br><br> Viva/pitch score : ";
  todisplay+='<input id="third" style="float:right;text-align:center;" type="text" value="'+viva+'" id="fname" name="fname">';
  todisplay+="<br><br> Bonus points score : ";
  todisplay+='<input id="fourth" style="float:right;text-align:center;" type="text" value="'+bonuspoints+'" id="fname" name="fname">';
  todisplay+="<br> <br>Code quality score : ";
  todisplay+='<input id="fifth"  style="float:right;text-align:center;" type="text" value="'+codequality+'" id="fname" name="fname">';
  todisplay+="<br> <br>Technologies score : ";
  todisplay+='<input id="sixth" style="float:right;text-align:center;" type="text" value="'+technologies+'" id="fname" name="fname">';
  todisplay+='<br><br><div id="lookerscore"> Total Score out of 60 : '+totalscore+'</div>';  
  todisplay+='<input id="savescore" style="border-radius:10px;margin-left:200px;background-color:cyan;"type="button" onclick="datasaver('+rollno+')" value="Save">';

  curlooker.innerHTML=todisplay;
}
let odd=false;
function datasaver(rollno){
  var val1=arr[rollno-1][0]=document.getElementById('fir').value;
  var val2=arr[rollno-1][1]=document.getElementById('sec').value;
  var val3=arr[rollno-1][2]=document.getElementById('third').value;
  var val4=arr[rollno-1][3]=document.getElementById('fourth').value;
  var val5= arr[rollno-1][4]=document.getElementById('fifth').value;
  var val6= arr[rollno-1][5]=document.getElementById('sixth').value;
  if(val1>10 || val1<0 || val2>10 || val2<0 ||val3>10 || val3<0 ||val4>10 || val4<0 ||val5>10 || val5<0 ||val6>10 || val6<0  ){
    alert('invalid values');
    return ;
  }
  let TBODY=document.getElementById("selected");
      //update table
  var Tr =TBODY.getElementsByTagName("TR");
     let i=rollno-1;
     var x = document.getElementById("selected").rows.length;
    var sum=calc_total(rollno);
    for(k=0;k<x;k++)
    if(Tr[k].cells[0].innerText==String(rollno))
       {       Tr[k].cells[3].innerText=sum;
        break;
            }
           let scoreupdate="Total Score out of 60 : "+sum;
  document.getElementById('lookerscore').innerHTML=scoreupdate;
      let scorebutton=document.getElementById('savescore');
      if(odd==true){
      scorebutton.style.backgroundColor="blue";
       odd=false;
      }
      else{
      scorebutton.style.backgroundColor="pink";
      odd=true;
      }
}
function windup(){
     let mainbody=document.getElementById("mainbody");
     mainbody.style.backgroundColor="#000000";
     mainbody.style.fontSize="30px";
     mainbody.style.color="red";
     let finalpage="<br><br><br><br><br> <h3 style='color:#e67c0b;'>Result Evalution Completed</h3><br>  <button onclick='createpdf()' style='background-color:lightgreen;border-radius:10px'>Download Results PDF</button>";
     mainbody.innerHTML=finalpage;
}
function createpdf(){
  var doc = new jsPDF()

  // Simple data example
  doc.setFontSize(15);
  var h=175;
  let s="Roll no.   ideation   Execution    Viva/pitch  BonusPoints  CodeQuality  Technologies \n";
  doc.line(30, 0, 30, h); // vertical line
  doc.line(55, 0, 55, h); // vertical line
  doc.line(81, 0, 81, h); // vertical line
  doc.line(109, 0, 109, h); // vertical line
  doc.line(142, 0, 142, h); // vertical line
  doc.line(175, 0, 175, h ); // vertical line
  doc.line(0,h,250,h);
  doc.text(10,10,s);
  for(let i=0;i<n;i++){
    let p="\n"+(i+1)+"                "+arr[i][0]+"               "+arr[i][1]+"              "+ arr[i][2] +"                           "  + arr[i][3] +"                   "+arr[i][4] +"                "+arr[i][5]+"\n";
    doc.text(10,10*(i+2),p);
  }
  doc.text(80,h+10,"STANDINGS ");
  doc.text(50,h+20,"Position                          RollNo.                  Total Score\n");
  doc.line(81, h+15, 81, h+200); // vertical line
  doc.line(140, h+15, 140, h+200); // vertical line
  
  let finals=[];
 
  for(let i=0;i<n;i++){
       finals[i]=[];
       finals[i][0]=calc_total(i+1);
       finals[i][1]=i+1;
  }
  finals.sort();
  finals.reverse();
  for(i=0;i<n;i++){
    let p="\n"+(i+1)+"                            "+finals[i][1]+"                                  "+finals[i][0];
    doc.text(50,h+20+7*(i+1),p);
  }
  doc.save('table.pdf')
}