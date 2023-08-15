// Step 1 : Add click button 
document.getElementById('btn-submit').addEventListener('click',function(){
    // Stp 2: get the email address
    const emailfield = document.getElementById('user-email');
    const email = emailfield.value;
    // console.log(email);
    // step 3: get password
    const passfield = document.getElementById('user-password');
    const password = passfield.value;
    // console.log(password);
    // step 4: varify rmail and pass
    if(email === 'sahaplabon66@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html'

    }
    else{
        alert('Sorry sir you can not login without valid password ')
    }
})