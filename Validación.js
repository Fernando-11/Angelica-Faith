const TARGET_DATE = "2025-11-09";
const TARGET_PIN = "2002";

const dateInput = document.getElementById("dateInput");
const btnCheck = document.getElementById("btnCheck");
const pinInput = document.getElementById("pinInput");
const btnPin = document.getElementById("btnPin");
const msg = document.getElementById("msg");
const protectedArea = document.getElementById("protected");
const panel = document.getElementById("panel");

// Function para mostrar el mensaje descrito
function showMessage(text, ok = false) {
  msg.textContent = text;
  msg.style.color = ok ? "#aaf" : "#f88";
}

// Function para desbloquear una vez sea el correcto
function unlock() {
  window.location.href = "floresamarillas.html";
}

btnCheck.addEventListener("click", () => {
  const val = dateInput.value; // Del formato de año
  if (!val) {
    showMessage("Enter a date first.");
    return;
  }
  if (val === TARGET_DATE) {
    showMessage("Correct date. Welcome, beautiful. ❤️", true);
    setTimeout(unlock, 700);
  } else {
    showMessage("Incorrect date. Please try again.");
  }
});

// Creación de PIN
btnPin.addEventListener("click", () => {
  const pin = String(pinInput.value).trim();
  if (!pin) {
    showMessage("Ingresa el PIN.");
    return;
  }
  if (pin === TARGET_PIN) {
    showMessage("Correct PIN. Welcome, beautiful!. ❤️", true);
    setTimeout(unlock, 600);
  } else {
    showMessage("Incorrect PIN. Please try again.");
  }
});

// Para que se permita dar enter.
[dateInput, pinInput].forEach(input => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (input === dateInput) btnCheck.click();
      else btnPin.click();
    }
  });
});