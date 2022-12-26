function submit() {
     if(document.getElementById('program').value == ''){
       document.getElementById('program').focus()
       return false
     }else{
       var input = document.getElementById('program').value;
       var regex = new RegExp("^[a-zA-Z]+$");
       if(regex.test(input)) {
       }else {
         document.getElementById('program').focus()
           return false;
       }
     }

     if(document.getElementById('kategori').value == ''){
       document.getElementById('kategori').focus()
       return false
     }else{
       var input = document.getElementById('kategori').value;
       var regex = new RegExp("^[a-zA-Z]+$");
       if(regex.test(input)) {
       }else {
         document.getElementById('kategori').focus()
           return false;
       }
     }

     if(document.getElementById('nama').value == ''){
       document.getElementById('nama').focus()
       return false
     }else{
       var input = document.getElementById('nama').value;
       var regex = new RegExp("^[a-zA-Z ]+$");
       if(regex.test(input)) {
       }else {
         document.getElementById('nama').focus()
           return false;
       }
     }

     if(document.getElementById('email').value == ''){
       document.getElementById('email').focus()
       return false
     }else{
       var input = document.getElementById('email').value;
       var regex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
       if(regex.test(input)) {
       }else {
         document.getElementById('email').focus()
           return false;
       }
     }

     if(document.getElementById('no_telp').value == ''){
       document.getElementById('no_telp').focus()
       return false
     }else{
       var input = document.getElementById('no_telp').value;
       var regex = new RegExp("^[0-9]+$");
       if(regex.test(input)) {
       }else {
         document.getElementById('no_telp').focus()
           return false;
       }
     }
     
     if(document.getElementById('tempat_lahir').value == ''){
       document.getElementById('tempat_lahir').focus()
       return false
     }else{
       var input = document.getElementById('tempat_lahir').value;
       var regex = new RegExp("^[a-zA-Z0-9 ]*$");
       if(regex.test(input)) {
       }else {
         document.getElementById('tempat_lahir').focus()
           return false;
       }
     }

     if(document.getElementById('tanggal_lahir').value == ''){
       document.getElementById('tanggal_lahir').focus()
       return false
     }

     if(document.getElementById('jenis_kelamin').value == ''){
       document.getElementById('jenis_kelamin').focus()
       return false
     }

     if(document.getElementById('pendidikan').value == ''){
       document.getElementById('pendidikan').focus()
       return false
     }else{
       var input = document.getElementById('pendidikan').value;
       var regex = new RegExp("^[a-zA-Z0-9]*$");
       if(regex.test(input)) {
       }else {
         document.getElementById('pendidikan').focus()
           return false;
       }
     }

     if(document.getElementById('alamat').value == ''){
       document.getElementById('alamat').focus()
       return false
     }else{
       var input = document.getElementById('alamat').value;
       var regex = new RegExp("^[a-zA-Z0-9 .,]*$");
       if(regex.test(input)) {
       }else {
         document.getElementById('alamat').focus()
           return false;
       }
     }

     var input = document.getElementById('motivasi').value;
       var regex = new RegExp("^[a-zA-Z0-9 ]*$");
       if(regex.test(input)) {
       }else {
         document.getElementById('motivasi').focus()
           return false;
       }

     localStorage.setItem("program", document.getElementById('program').value);
     localStorage.setItem("kategori", document.getElementById('kategori').value);
     localStorage.setItem("nama", document.getElementById('nama').value);
     localStorage.setItem("email", document.getElementById('email').value);
     localStorage.setItem("no_telp", document.getElementById('no_telp').value);
     localStorage.setItem("tempat_lahir", document.getElementById('tempat_lahir').value);
     localStorage.setItem("tanggal_lahir", document.getElementById('tanggal_lahir').value);
     localStorage.setItem("jenis_kelamin", document.getElementById('jenis_kelamin').value);
     localStorage.setItem("pendidikan", document.getElementById('pendidikan').value);
     localStorage.setItem("kode_referal", document.getElementById('kode_referal').value);
     localStorage.setItem("alamat", document.getElementById('alamat').value);
     localStorage.setItem("motivasi", document.getElementById('motivasi').value);
     localStorage.setItem("status", 'register');
       Toastify({
       text: "please wait a few seconds...",
       duration: 3000,
       gravity: "top", // `top` or `bottom`
       position: "right", // `left`, `center` or `right`
       stopOnFocus: true, // Prevents dismissing of toast on hover
       close: true,
       style: {
         background: "linear-gradient(to right, #d63384, #d63384)",
       },
     }).showToast();
    
 $('#loads').html(`  <div class="screen">
     <div class="loader">
       <div class="dot"></div>
       <div class="dot"></div>
       <div class="dot"></div>
     </div>
     </div>`)
     setTimeout(() => {
       location.href ='success.html'
     }, 4000);
   }