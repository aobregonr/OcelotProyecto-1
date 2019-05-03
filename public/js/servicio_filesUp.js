
  cod=sessionStorage.getItem('id_usuario');



$(function() {
    let fileUrl = '';
    $.cloudinary.config({ cloud_name: 'ocelotfile', api_key: '528542337325244'});

    // Upload button
    let uploadButton = $('#BtnUpFile');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'ocelotfile', upload_preset: 'ml_default', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let url = result[0].url;
            let fileName = result[0].original_filename;
            let varios=result[1];
            console.log(result);
             console.log(id);
            fileUrl = url ;
            registrar_file(url, fileName,cod);
            
            var midiv1 = document.createElement("li");
            midiv1.setAttribute("id","filein");
                var midiv2 = document.createElement("img");
                midiv2.setAttribute("id","imgfile");
                midiv2.setAttribute("class","schoolLogo1");
                midiv2.setAttribute("src","imgs/FileUp.png");
                var midiv5 = document.createElement("a");
                midiv5.setAttribute("href",fileUrl);
                midiv5.innerHTML=fileName+"<br>";
           

                document.querySelector("#fileList").appendChild(midiv1);
                document.querySelector("#filein").appendChild(midiv2);
                document.querySelector("#filein").appendChild(midiv5);
                              
          console.log(fileUrl);
        });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
};




function registrar_file(purl, pfileName,pcod){
    let request= $.ajax({
        url: 'http://localhost:4000/api/registrar_fileUp',
        method: "POST",
        data: {
            url: purl,
            fileName: pfileName,
            cod: pcod
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function(res){
        swal.fire({
            type: 'info',
            title: 'Atención',
            text: res.msg
        });
    });

    request.fail(function(res){
        swal.fire({
            type: 'error',
            title: 'Proceso inconcluso',
            text: res.msg
        });
    });
};


function obtener_listaFiles(){
    let listaFile = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_fileUp',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(listaFiles){
        listaFile = listaFiles;
      });
    
      peticion.fail(function(){
       
      });
      
    return listaFile;
};

