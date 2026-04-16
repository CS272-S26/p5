function calculateSavings() {
  const price = document.getElementById("price").value;
  const discount = document.getElementById("discount").value;

  if (!price || !discount) {
    document.getElementById("result").innerText =
      "Please fill out both fields.";
    return;
  }

  const savings = price * (discount / 100);
  const finalPrice = price - savings;

  document.getElementById("result").innerText =
    `You save $${savings.toFixed(2)}. Final price: $${finalPrice.toFixed(2)}`;
}

document.querySelectorAll(".deal-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".deal-card");

    if (card) {
      card.classList.toggle("is-flipped");
    }
  });
});
