document.getElementById('login-button').addEventListener('click',function(){
    const emailField= document.getElementById('user-email');
    const userEmail = emailField.value;
    
    
    // get user password
    const passwordField= document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    if (userEmail == 'mdmahbuborr462@gmail.com' && userPassword == 'mahbub'){
        window.location.href='banking.html';
    }
    else{
        console.log('please! enter your valid email & password')
    }
})