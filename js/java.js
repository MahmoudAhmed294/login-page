var data_login = [

    {
        email: "user1@gmail.com",
        password: "123",
        name: "mahmoud",
        img: "1.jpg",
        jop: "programming"


    },
    {
        email: "user2@gmail.com",
        password: "1234",
        name: "ahmed",
        img: "2.jpg",
        jop: "seller"

    },
    {
        email: "user3@gmail.com",
        password: "1234",
        name: "youssef",
        img: "3.jpg",
        jop: "Doctor"
    }
]
let get_email = "";
let get_password = "";
let   result_gmail ;
let   result_password;
function get_value() {
    debugger;
    let get_email = document.getElementById('gmaildata').value;
    let get_password = document.getElementById('userpassword').value;
    
    
    for (let i = 0; i < data_login.length; i++) {
       result_gmail =data_login[i].email;
       result_password =data_login[i].password;
        if (get_email == data_login[i].email && get_password == data_login[i].password) {
            localStorage.setItem("user_name", data_login[i].name);
            localStorage.setItem("user_img", data_login[i].img);
            localStorage.setItem("user_jop", data_login[i].jop);
            localStorage.setItem("user_email", data_login[i].email);
           window.location.href='secpage.html';
        
           break;
           
        }
    }
   if(get_email != result_gmail || get_password != result_password){

            document.querySelector('.login_page .continer .login_form .alert_error').innerHTML = `<span>plase Enter Email and password</span>`;
            document.getElementById('gmaildata').onkeydown = function () {
                document.querySelector('.login_page .continer .login_form .alert_error').style.display = "none";
            }

        } 

}
function set_logout(){
    // document.querySelector('.user_info_page').style.display="none"
    // document.querySelector('.login_page').style.display = "block";
window.location.href="index.html";
localStorage.removeItem("user_name");
             localStorage.removeItem("user_img");
          localStorage.removeItem("user_jop");
           localStorage.removeItem("user_email");
}
//  get_password !== data_login[i].password
function sec_page_run(){
     let set_user_name =localStorage.getItem("user_name");
   let set_user_img =localStorage.getItem("user_img");
 let set_user_jop =localStorage.getItem("user_jop");
let  set_user_email =localStorage.getItem("user_email");

    document.querySelector('#sec_page .user_info_page').innerHTML = `   
    <div class="img_background">
    <img src="img/9.jpg" alt="" />
    </div>
    <div class="user_detail">
       <img src="img/${set_user_img}" alt="" />

       <div class="user_data">
         <h5>Name: ${set_user_name}</h5>
         <p>jop: ${set_user_jop}</p>
         <a href="#">email: ${set_user_email}</a>
       </div> 
        <button onclick="set_logout()">LogOut</button> 
     </div>
`;
}
alert('for test :user1@gmail.com password 123,:user2@gmail.com password 1234,:user3@gmail.com password 1234')