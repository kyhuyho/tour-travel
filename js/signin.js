window.addEventListener("load", function () {
  /* show hide password */
  const iconEye = document.querySelector(".signin-icon-eye");
  const signinForm = document.querySelector(".signin-form");
  iconEye.addEventListener("click", function (e) {
    const signinPass = e.target.previousElementSibling;
    const inputType = signinPass.getAttribute("type");
    if (inputType === "password") {
      signinPass.setAttribute("type", "text");
      iconEye.classList.remove("fa-eye-slash");
      iconEye.classList.add("fa-eye");
    } else {
      signinPass.setAttribute("type", "password");
      iconEye.classList.add("fa-eye-slash");
      iconEye.classList.remove("fa-eye");
    }
  });
  /* notification sign in */
  function createModalSignin(title) {
    const template = `<div class="modal-signin">
    <div class="modal-signin-content">
      <span class="modal-signin-text">${title}</span>
      <i class="fa fa-times modal-signin-icon"></i>
    </div>
  </div>`;
    document.body.insertAdjacentHTML("afterbegin", template);
  }
  function removeModalSignin() {
    const modalSignin = document.querySelector(".modal-signin");
    setTimeout(function () {
      modalSignin.parentNode.removeChild(modalSignin);
    }, 2500);
  }
  document.body.addEventListener("click", function (e) {
    if (e.target.matches(".modal-signin")) {
      e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".modal-signin-icon")) {
      const modalSignin = e.target.parentNode.parentNode;
      if (!modalSignin) return;
      modalSignin.parentNode.removeChild(modalSignin);
    }
  });
  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const valueName = this.elements["username"].value;
    const valuePass = this.elements["password"].value;
    if (!valueName) createModalSignin("Username is empty");
    else if (!valuePass) createModalSignin("Password is empty");
    else if (valuePass.length < 9)
      createModalSignin("Password needs to contain at least 9 characters");
    else if (!/[a-z]/.test(valuePass))
      createModalSignin("Password needs to contain at least 1 lower letter");
    else if (!/[A-Z]/.test(valuePass))
      createModalSignin(
        "Password needs to contain at least 1 uppercase letter"
      );
    else if (!/[0-9]/.test(valuePass))
      createModalSignin("Password needs to contain at least 1 number");
    else if (!/[$@%^&*(){}![\]#]/.test(valuePass))
      createModalSignin(
        "Password needs to contain at least 1 special character"
      );
    else {
      createModalSignin("Signed in successfully");
      removeModalSignin();
    }
  });
});
