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
                name:$("#name").val(),
                tier:$("#tier").val(),
                positionopen:$("#positionopen").val()
                
        }
       
        contacts.push(JSON.stringify(contact));
        localStorage.setItem("contacts", JSON.stringify(contacts));
        resetForm();
        window.location.reload(true);
    }
    
    function resetForm(){
        $("#name").val(""),
        $("#tier").val(''),
        $("#positionopen").val('')
        
    }

    function viewContacts(){
        
        contacts=JSON.parse(localStorage.getItem("contacts"));
      
        if(contacts!=null && contacts.length>0){
     
            str="<thead>";
            str+=("<tr>");
            str+=("<th>Name</th>");
            str+=("<th>TierRating</th>");
            str+=("<th>PositionOpen</th>");
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
                        trow+=contact.name;
                        trow+="</td>";
                        trow+="<td>";
                        trow+=contact.tier;
                        trow+="</td>";
                        trow+="<td>";
                        trow+=contact.positionopen;
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