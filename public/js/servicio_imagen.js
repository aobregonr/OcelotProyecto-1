
$(function() {
    let imagenUrl = '';
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'veromorera', api_key: '481452668495596'});

    // Upload button
    let uploadButton = $('#btnSeleccionarImagen');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'veromorera', upload_preset: 'educatecr', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            imagenUrl = 'https://res.cloudinary.com/veromorera/image/upload/' + id ;
            document.querySelector('#image_preview').src = imagenUrl;
          console.log(imagenUrl);
        });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}



///foto del encargado del centro


$(function() {
    let imagenUrl2 = '';
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'veromorera', api_key: '481452668495596'});

    // Upload button
    let uploadButton2 = $('#btnSeleccionarImagen2');

    // Upload button event
    uploadButton2.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'veromorera', upload_preset: 'educatecr', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            imagenUrl2 = 'https://res.cloudinary.com/veromorera/image/upload/' + id ;
            document.querySelector('#image_preview2').src = imagenUrl2;
          console.log(imagenUrl2);
        });
    });
})

function processImage(id) {
    let options2 = {
        client_hints: true,
    };
    return  $.cloudinary.url(id2, options2);
}
