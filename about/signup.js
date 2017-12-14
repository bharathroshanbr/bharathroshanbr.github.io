$(function(){
        var form;
        viewform()
       
        $("#btnSubmit").click(function(){
            addform();   
            viewform();
            
        });
    
        $('.delete').click(function(){
            var name = $(this).attr('id');
               for ( var i in form){
                        console.log(i);
                        var form = JSON.parse(form[i]);
                        if(form.name === name){
                            form.splice(i,1);
                            localStorage.setItem("form", JSON.stringify(form));
                            viewform();
                            break;
                        }    
               
               }
            
        });
        function addform(){
       
            
            contact = {
                    firstname:$("#firstname").val(),
                    lastname:$("#lastname").val(),
                    mail:$("#mail").val(),
                    dob:$("#dob").val(),
                    usn:$("#usn").val(),
                    phone:$("#phone").val(),
                    password:$("#password").val()
            }
           
            form.push(JSON.stringify(form));
	        localStorage.setItem("contacts", JSON.stringify(form));
            resetForm();
        }
        
        function resetForm(){
            $("#firstname").val(),
            $("#lastname").val(),
            $("#mail").val(),
            $("#dob").val(),
            $("#usn").val(),
            $("#phone").val(),
            $("#password").val()
        }
    
        function viewform(){
            
            form=JSON.parse(localStorage.getItem("form"));
          
            if(form!=null && form.length>0){
         
                str="<thead>";
                str+=("<tr>");
                str+=("<th>FirstName</th>");
                str+=("<th>LastName</th>");
                str+=("<th>Email</th>");
                str+=("<th>USN</th>");
                str+=("<th>Phone</th>");
                str+=("<th>Password</th>");
                str+=("<th>Edit</th>");
                str+=("<th>Delete</th>");
                str+=("</tr>");
                str+=("</thead>");
                str+=("<tbody>");
                str+=("</tbody>");
            
            $("#viewlist").html(str);
            
                for ( var i in contacts){
                        var contact = JSON.parse(contacts[i]);
                    
                        var trow="";
                            trow+="<tr><td>";
                            trow+=form.firstname;
                            trow+="</td>";
                            trow+="<td>";
                            trow+=form.lastname;
                            trow+="</td>";
                            trow+="<td>";
                            trow+=form.mail;
                            trow+="</td>";
                            trow+="<td>";
                            trow+=form.usn;
                            trow+="</td>";
                            trow+="<td>";
                            trow+=form.phone;
                            trow+="</td>";
                            trow+="<td>";
                            trow+="<span class='glyphicon glyphicon-edit edit' id=e'"+form.name+"'></span>";
                            trow+="</td>";
                            trow+="<td>";
                            trow+="<span class='glyphicon glyphicon-trash delete' id='"+form.name+"'></span>";
                            trow+="</td>";
                             
                            trow+="</tr>";
                        $("#viewlist tbody").append(trow);
                }
        }else{
             form = [];
            $("#viewlist").html("");
        }
       
        }
      
    
});