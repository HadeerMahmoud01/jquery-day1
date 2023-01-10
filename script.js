/////// Code it yourself :)
$("#btnAdd").on ("click", function (){
//selectors
   let items=$(".tasksBox");   
   let taskvalues=$("#taskInput").val();
   let fatherdiv=$("<div></div>");



//creators
   let firstelement=$("<input type='text'></input>");
   let secondelement = $("<button value='Done'>Done</button>");
   let thirdelement= $("<button value='Delete'>delete</button>").clone();



   

    // firstelement
     firstelement.appendTo(fatherdiv).addClass("task");
     firstelement.val(taskvalues);
   

    
     //second element
     secondelement.appendTo(fatherdiv).addClass("done");
     secondelement.val(fatherdiv);

    
   //third element
    thirdelement.appendTo(fatherdiv).addClass("delete");
    fatherdiv.appendTo(items);
    thirdelement.on("click",function(){
        $(this).parent().remove();

    })//end of fn

// done btn
secondelement.on("click",function(){
    $(this).parent().css("background","red");
})









}) // end of fn
