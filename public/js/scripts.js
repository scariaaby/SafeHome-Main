
    const getProjects = () => {
        $.get('/api/projects',(response) => {
            if(response.statusCode==200){
                addCards(response.data);
            }
        })
    }
    
    //ajax function...
    const addProjectToApp = (project) => {
        $.ajax({
            url: '/api/projects',
            data: project,
            type: 'POST',
            success: (result) => {
                alert(result.message);
                location.reload(); // it automatically reloads the page 
            }
        })
    }
    
    const submitForm = () => {
        let formData = {};
        formData.customerAcccount = $('#customerAccount').val();
        formData.deviceID = $('#deviceID').val();
        formData.incidentDate = $('#incidentDate').val();
        formData.incidentType = $('#incidentType').val();
        formData.description = $('#description').val();
    
        console.log("Form Data Submitted: ", formData);
        addProjectToApp(formData);
    }
    
    
    /*const addCards = (items) => {
        items.forEach(item => {
            let itemToAppend = '<div class="col s4 center-align">'+
        '</div><div class="card-content">'+
        '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
        '<div class="card-reveal">'+
            '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
            '<p class="card-text card-desc-color">'+item.desciption+'</p>'+
          '</div></div></div>';
          $("#card-section").append(itemToAppend)
        });
    }*/
    
    const clickMe = () => {
        alert("Thanks for clicking me. Hope you have a nice day!")
    }
    
  /*   const submitForm = () => {
        let formData = {};
        formData.first_name = $('#first_name').val();
        formData.last_name = $('#last_name').val();
        formData.password = $('#password').val();
        formData.email = $('#email').val();
    
        console.log("Form Data Submitted: ", formData);
    }
    
   $(document).ready(function(){
        $('.materialboxed').materialbox();
        addCards(cardList);
        $('.modal').modal();
        $('#formSubmit').click(()=>{
            submitForm();
        })
    })*/

    $(document).ready(function(){
        $('.materialboxed').materialbox();
        $('#formSubmit').click(()=>{
            submitForm();
        })
        getProjects();
        $('.modal').modal();
      });
    