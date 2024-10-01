function validateForm(event){
    event.preventDefault();
    
    // hapus error message
    var errorMessage = document.getElementById('errorMessage')
    errorMessage.innerHTML = ''

    //ambil semua valu dari input

    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var confirmPassword = document.getElementById('confirmPassword').value
    var age = document.getElementById('age').value
    var address = document.getElementById('address').value
    var country = document.getElementById('country').value
    var gender = document.querySelector('input[name="gender"]:checked')
    var checkbox = document.querySelector('input[name="checkbox"]:checked')

    //vaidasi
    var isValid = true
    if(name.length < 9 ){
        alert('name must be more than 8 char')
        isValid=false
    }

    //validasi confirm pw harus sama seperti pw
    if(confirmPassword != password){
        alert('Confirm password must be the same as password')
        isValid=false 
    }

    //validasi age
    if(age < 1 || age > 100){
        alert('age must be between 1 - 100')
        isValid=false
    }

    //validasi kosong address
    if(address ==""){
        alert('address must not be null')
        isValid=false
    }

    if(checkbox == null){
        alert('checkbox')
        isValid = false
    }
    if(gender == null){
        alert('gender')
        isValid=false
    }

    if(country == ''){
        alert('country')
        isValid=false
    }

    //alphanumeric -> ada huruf,angka
    //gk boleh simbol
    if(isAlphanumeric(password) == false){
        alert('password salah')
        isValid= false
    }

    if(isValid == false ){
        errorMessage.innerHTML = 'PLEASE SUBMIT FORM'
    }

}
function isAlphanumeric(password){
    var huruf = false
    var angka = false
    var simbol = false

    for (let index = 0; index < password.length; index++) {
        if(password[index]>= 'a' && password[index] <= 'z')
        huruf = true 
        else if(password[index]>= 'A' && password[index]<= 'Z')
        huruf=true
        else if(password[index]>= '0' && password[index] <= '9')
        angka= true 
        else 
        simbol = true
        
    }
    if(simbol == true )
    return false
    else if(angka == false || huruf == false)
    return false 

    return true
}