Document.getElementById('contact form').addEventListener('submit'),function(event){
   event.preventDefault();
   const name = document.getElementById('name').Value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;
   if(!name || !email || !message) {
    alert('please fill in all fields.');
    returns;
    alert('form submitted successfully!\nName: ' + name +'\nEmail: ' +email + '\nMessage: ' + message);
    document.getElementById('contact Form').requestFullscreen();





    

   }
}