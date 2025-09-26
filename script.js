/* style.css */

/* إعادة ضبط القيم الأساسية */
* {margin:0; padding:0; box-sizing:border-box;}

body {
  font-family: 'Cairo', 'Tahoma', sans-serif;
  background-image: url('assets/images/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #1f2937;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

body::before {
  content:"";
  position:fixed;
  top:0; left:0;
  width:100%; height:100%;
  background: rgba(248,250,252,0.6);
  z-index:-1;
}

/* نافذة التسجيل */
#login-section {
  background: linear-gradient(145deg, rgba(14,165,164,0.85), rgba(22,211,135,0.85));
  padding: 40px 30px;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  width: 100%;
  max-width: 400px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
}

#login-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.3);
}

#login-section h1 {
  font-size:28px;
  font-weight:700;
  margin-bottom:25px;
  color:#ffffff;
}

#login-section input {
  width:100%;
  padding:14px 18px;
  margin-bottom:20px;
  border-radius:20px;
  border:1px solid rgba(255,255,255,0.6);
  outline:none;
  font-size:16px;
  transition: all 0.3s ease;
  background: rgba(255,255,255,0.25);
  color:#ffffff;
}

#login-section input::placeholder {
  color: rgba(255,255,255,0.7);
}

#login-section input:focus {
  border-color:#ffffff;
  box-shadow: 0 0 8px rgba(255,255,255,0.5);
}

#login-section button {
  width:48%;
  padding:12px 0;
  border-radius:20px;
  font-size:16px;
  font-weight:600;
  border:none;
  cursor:pointer;
  transition: all 0.3s ease;
}

#login-btn {
  background-color:#ffffff;
  color:#0ea5a4;
}
#login-btn:hover {background-color: rgba(255,255,255,0.9);}

#register-btn {
  background-color: rgba(255,255,255,0.3);
  color:#ffffff;
  border:1px solid rgba(255,255,255,0.5);
}
#register-btn:hover {background-color: rgba(255,255,255,0.5);}

/* رسالة الخطأ */
#login-msg {margin-top:15px; font-size:14px; color:red; min-height:20px; transition: all 0.3s ease;}

/* واجهة المهام */
#tasks-section {
  width: 90%;
  max-width: 1100px;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 25px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

#tasks-section h1 {
  font-size:28px;
  font-weight:700;
  margin-bottom:25px;
}

/* أزرار اختيار اليوم */
.day-btn {
  background-color: #22d3ee;
  color:white;
  padding:10px 15px;
  border-radius:25px;
  font-weight:600;
  transition: all 0.3s ease;
  margin: 3px;
}

.day-btn:hover {background-color: #06b6d4;}

/* قائمة المهام */
#tasks-list li {
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:15px 20px;
  background: rgba(255,255,255,0.8);
  border-radius:25px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  margin-bottom:10px;
}

#tasks-list li:hover {
  transform: translateY(-3px);
  box-shadow:0 15px 25px rgba(0,0,0,0.15);
}

/* أزرار المهام */
.done-btn, .fail-btn {
  padding:8px 12px;
  border-radius:20px;
  font-weight:600;
  font-size:14px;
  border:none;
  cursor:pointer;
}

.done-b
