const replaceTextButton = document.getElementById("replace-button");
const replaceFullText = document.getElementById("replace-full-text");
const replaceTextWord = document.getElementById("replace-text-word");
const uppercaseInput = document.getElementById("uppercase-input");
const lowercaseInput = document.getElementById("lowercase-input");
const capitalizeInput = document.getElementById("capitalize-input");

replaceTextButton.addEventListener("click", function () {
  if (
    `${replaceFullText.value}`.length !== 0 &&
    `${replaceTextWord.value}`.length !== 0
  ) {
    const replacedText = `${replaceFullText.value}`.replaceAll(
      `${replaceTextWord.value}`,
      ""
    );
    replaceFullText.value = replacedText;
  }
});

uppercaseInput.addEventListener("change", (e) => {
  e.target.value = `${e.target.value}`.toUpperCase();
});

lowercaseInput.addEventListener("change", (e) => {
  e.target.value = `${e.target.value}`.toLowerCase();
});
capitalizeInput.addEventListener("change", (e) => {
  const inputText = `${e.target.value}`;

  if (inputText !== "")
    e.target.value =
      inputText.slice(0, 1).toUpperCase + inputText.slice(1, inputText.length);
});
