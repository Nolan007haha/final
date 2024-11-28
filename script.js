document.getElementById("runCode").addEventListener("click", () => {
  const code = document.getElementById("codeEditor").value;
  const output = document.getElementById("output");

  try {
    const result = eval(code); // Chạy code JavaScript
    output.textContent = result !== undefined ? result : "Code executed successfully.";
  } catch (error) {
    output.textContent = `Lỗi: ${error.message}`; // Báo lỗi nếu code sai
  }
});
