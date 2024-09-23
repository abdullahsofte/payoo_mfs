// account check and go to home page
document.getElementById('btn-login').addEventListener('click', function (event) {
        event.preventDefault();
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        if (phoneNumber === '01776637858' && pinNumber === '1234') {
            console.log('you are logged in');
            window.location.href = "./home.html"

        } else {
            alert('phone number or pin wrong');

        }

    });


    
