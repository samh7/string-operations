const replaceTextButton = document.getElementById("replace-button");
const replaceFullText = document.getElementById("replace-full-text");
const replaceTextWord = document.getElementById("replace-text-word");

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
