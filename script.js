
            fetch('https://reqres.in/api/users?page=1')
            .then((res) =>{return res.json();
        })
        .then((page)=>{
            const mydata = page.data;            
            for(var i=0; i<mydata.length; i++){
                var component = '<div class="box"><div class="img"><img id="image" src="' + mydata[i].avatar +'" alt="" class="img"></div><div class="text"><p id="fname">'+ mydata[i].first_name +'</p><p id="lname">'+ mydata[i].last_name +'</p><a id="email" href="#">'+ mydata[i].email +'</a></div></div>';
                $('#myMenu').append(component);
            } 
        })        
        .catch((err) =>{
            console.log(err);
        });