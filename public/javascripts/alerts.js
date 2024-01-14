 // Show the success alert
 const successAlert = document.getElementById('successAlert');
 if (successAlert) {
   successAlert.classList.add('alert-show');
   setTimeout(() => {
     successAlert.classList.remove('alert-show');
   }, 4000);
 }

 // Show the error alert
 const errorAlert = document.getElementById('errorAlert');
 if (errorAlert) {
   errorAlert.classList.add('alert-show');
   setTimeout(() => {
     errorAlert.classList.remove('alert-show');
   }, 4000);
 }
