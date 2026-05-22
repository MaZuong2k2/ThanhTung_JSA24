function validateForm(){

    let email = document.getElementById("email").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailPattern.test(email) == false){
        alert("Email không hợp lệ!");
        return false;
    }

    alert("Đăng ký thành công!");
    return true;
}