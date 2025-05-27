function checkAnswer(button) {
  const answer = button.textContent;
  const result = document.getElementById("result");
  if (answer === "Hello5") {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Oops! Try again.";
    result.style.color = "red";
  }
}
