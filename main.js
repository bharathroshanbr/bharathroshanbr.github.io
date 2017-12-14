$(function(){
    var contacts;
    viewContacts()
   
    $("#btnSubmit").click(function(){
        addContact();   
        viewContacts();
        
    });

    $(".delete").click(function(){
        var name = $(this).attr('id');
           for ( var i in contacts){
                    console.log(i);
                    var contact = JSON.parse(contacts[i]);
                    if(contact.name === name){
                        contacts.splice(i,1);
                        localStorage.setItem("contacts", JSON.stringify(contacts));
                        viewContacts();
                        //reload();
                        
                        break;
                    }    
           
           }
           window.location.reload(true);

        
    });
    function addContact(){
   
        
        contact = {
                Sid:$("#Sid").val(),
                name:$("#name").val(),
                dob:$("#dob").val(),
                Qualification:$("#Qualification").val()
        }
       if(contact.Sid !=null && contact.name !=null && contact.dob !=null && contact.Qualification !=null){
        contacts.push(JSON.stringify(contact));
        localStorage.setItem("contacts", JSON.stringify(contacts));
        resetForm();
        window.location.reload(true);
    }else{
        alert("All Fields are required");
    }
}
    
    function resetForm(){
        $("#Sid").val(""),
        $("#name").val(''),
        $("#dob").val(''),
        $("#Qualification").val('')
    }

    function viewContacts(){
        
        contacts=JSON.parse(localStorage.getItem("contacts"));
      
        if(contacts!=null && contacts.length>0){
     
            str="<thead>";
            str+=("<tr>");
            str+=("<th>SID</th>");
            str+=("<th>Name</th>");
            str+=("<th>DOB</th>");
            str+=("<th>Qualification</th>");
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
                        trow+=contact.Sid;
                        trow+="</td>";
                        trow+="<td>";
                        trow+=contact.name;
                        trow+="</td>";
                        trow+="<td>";
                        trow+=contact.dob;
                        trow+="</td>";
                        trow+="<td>";
                        trow+=contact.Qualification;
                        trow+="</td>";
                        trow+="<td>";
                        trow+="<span class='glyphicon glyphicon-edit edit' id=e'"+contact.name+"'></span>";
                        trow+="</td>";
                        trow+="<td>";
                        trow+="<span class='glyphicon glyphicon-trash delete' id='"+contact.name+"'></span>";
                        trow+="</td>";
                         
                        trow+="</tr>";
                    $("#viewlist tbody").append(trow);
            }
    }else{
         contacts = [];
        $("#viewlist").html("");
    }
   
    }
  

});