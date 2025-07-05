const refs = {
  usernameField: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
refs.usernameField.addEventListener("input", () => {
  const usernameValue = refs.usernameField.value.trim();

  if (usernameValue === "") {
    refs.output.textContent = "Anonymous";
  } else {
    refs.output.textContent = usernameValue;
  }
});
