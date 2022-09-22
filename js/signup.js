window.addEventListener("load", function () {
  /* email validation */
  const signupEmail = document.querySelector(".signup-email");
  signupEmail.addEventListener("input", function (e) {
    const value = e.target.value;
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value) {
      signupEmail.classList.remove("invalid");
      return;
    }
    if (!regexEmail.test(value)) {
      signupEmail.classList.add("invalid");
      signupEmail.classList.remove("valid");
    } else {
      signupEmail.classList.remove("invalid");
      signupEmail.classList.add("valid");
    }
  });
  /* show hide password */
  const iconEyes = document.querySelectorAll(".signup-icon-eye");
  iconEyes.forEach((item) =>
    item.addEventListener("click", function (e) {
      const signupPass = e.target.previousElementSibling;
      const typeSignupPass = signupPass.getAttribute("type");
      if (typeSignupPass === "password") {
        signupPass.setAttribute("type", "text");
        e.target.classList.remove("fa-eye-slash");
        e.target.classList.add("fa-eye");
      } else {
        signupPass.setAttribute("type", "password");
        e.target.classList.add("fa-eye-slash");
        e.target.classList.remove("fa-eye");
      }
    })
  );
  /* check terms and privacy policy */
  const signupCheck = document.querySelector(".signup-check");
  signupCheck.addEventListener("click", function (e) {
    e.target.classList.toggle("is-active");
  });
  /* password validation */
  const signupPass = document.querySelector(".signup-pass");
  const signupListRequest = document.querySelector(".signup-list-request");
  function inputValidation(selector, value, regex) {
    if (!regex.test(value)) {
      selector.classList.add("invalid");
      selector.classList.remove("valid");
    } else {
      selector.classList.remove("invalid");
      selector.classList.add("valid");
    }
  }
  signupPass.addEventListener("input", function (e) {
    signupListRequest.classList.add("is-active");
    const value = e.target.value;
    const signupItemsRequest = e.target.parentNode.parentNode.querySelectorAll(
      ".signup-item-request"
    );
    const signupLength =
      e.target.parentNode.nextElementSibling.querySelector(".signup-length");
    const signupLower =
      e.target.parentNode.nextElementSibling.querySelector(".signup-lower");
    const signupUpper =
      e.target.parentNode.nextElementSibling.querySelector(".signup-upper");
    const singnupNumber =
      e.target.parentNode.nextElementSibling.querySelector(".signup-number");
    const singnupSpecial =
      e.target.parentNode.nextElementSibling.querySelector(".signup-special");
    if (
      value.length >= 9 &&
      /[a-z]/.test(value) &&
      /[A-Z]/.test(value) &&
      /[0-9]/.test(value) &&
      /[$@%^&*(){}![\]#]/.test(value)
    ) {
      signupListRequest.classList.remove("is-active");
    } else {
      signupListRequest.classList.add("is-active");
    }
    if (!value) {
      signupItemsRequest.forEach((item) => {
        item.classList.remove("invalid");
        item.classList.remove("valid");
      });
      return;
    }
    if (value.length < 9) {
      signupLength.classList.add("invalid");
      signupLength.classList.remove("valid");
    } else {
      signupLength.classList.remove("invalid");
      signupLength.classList.add("valid");
    }
    inputValidation(signupLower, value, /[a-z]/);
    inputValidation(signupUpper, value, /[A-Z]/);
    inputValidation(singnupNumber, value, /[0-9]/);
    inputValidation(singnupSpecial, value, /[$@%^&*(){}![\]#]/);
  });
  signupPass.addEventListener("blur", function () {
    signupListRequest.classList.remove("is-active");
  });
  /* notification sign up */
  const signupForm = document.querySelector(".signup-form");
  function createModalSignup(title) {
    const template = `<div class="modal-signup">
    <div class="modal-signup-content">
      <span class="modal-signup-text">${title}</span>
      <i class="fa fa-times modal-signup-icon"></i>
    </div>
  </div>`;
    document.body.insertAdjacentHTML("afterbegin", template);
  }
  function removeModalSignup() {
    const modalSignup = document.querySelector(".modal-signup");
    setTimeout(function () {
      modalSignup.parentNode.removeChild(modalSignup);
    }, 2500);
  }
  document.body.addEventListener("click", function (e) {
    if (e.target.matches(".modal-signup")) {
      e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".modal-signup-icon")) {
      const modalSignup = e.target.parentNode.parentNode;
      if (!modalSignup) return;
      modalSignup.parentNode.removeChild(modalSignup);
    }
  });
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const valueName = this.elements["username"].value;
    const valueEmail = this.elements["email"].value;
    const valuePass = this.elements["password"].value;
    const valueConfirm = this.elements["confirm"].value;
    if (!valueName) createModalSignup("Username is empty");
    else if (!valueEmail) createModalSignup("Email is empty");
    else if (!valuePass) createModalSignup("Password is empty");
    else if (valuePass.length < 9)
      createModalSignup("Password needs to contain at least 9 characters");
    else if (!/[a-z]/.test(valuePass))
      createModalSignup("Password needs to contain at least 1 lower letter");
    else if (!/[A-Z]/.test(valuePass))
      createModalSignup(
        "Password needs to contain at least 1 uppercase letter"
      );
    else if (!/[0-9]/.test(valuePass))
      createModalSignup("Password needs to contain at least 1 number");
    else if (!/[$@%^&*(){}![\]#]/.test(valuePass))
      createModalSignup(
        "Password needs to contain at least 1 special character"
      );
    else if (!valueConfirm) createModalSignup("Confirm password is empty");
    else if (valuePass !== valueConfirm)
      createModalSignup("2 passwords didn't match");
    else if (!signupCheck.classList.contains("is-active"))
      createModalSignup("You haven't agreed to our terms and privacy policy");
    else {
      createModalSignup("Signed up successfully");
      removeModalSignup();
    }
  });
});
