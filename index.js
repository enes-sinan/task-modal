$(document).on("click", ".accept-button", () => {
  let email = $(".form-email").val();
  let phone = $(".form-phone").val();
  let box = $(".form-checkbox").is(":checked");

  let isValidEmail = checkEmail(email);
  let isValidPhone = checkPhone(phone);
  let isCheckedBox = checkBox(box);

  isValidEmail && isValidPhone && isCheckedBox ? nextPhase() : false;
});

$(document).on("click", ".coupon-copy", () => {
  navigator.clipboard.writeText($(".coupon-code").text());
});

$(document).on("click", (element) => {
  element.target.className == "background" || element.target.className == "close-form" ? closeForm() : null;
});

function checkEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);
  isValidEmail ? $(".form-email").removeClass("wrong") : $(".form-email").addClass("wrong");
  return isValidEmail;
}

function checkPhone(phone) {
  const phoneRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  const isValidPhone = phoneRegex.test(phone);
  isValidPhone ? $(".form-phone").removeClass("wrong") : $(".form-phone").addClass("wrong");
  return isValidPhone;
}

function checkBox(checkbox) {
  checkbox ? $(".checkbox > p").css("color", "black") : $(".checkbox > p").css("color", "red");
  return checkbox;
}

function nextPhase() {
  $(".first-section").addClass("display-hidden-none");
  $(".second-section").removeClass("display-hidden-none");
  randomCodeGenerator();
}

function randomCodeGenerator() {
  let randomNumber = "";
  for (let i = 0; i < 8; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    randomNumber += randomDigit;
  }
  $(".coupon-code").text(randomNumber);
}

function closeForm() {
  $(".background").addClass("display-hidden-none");
}
