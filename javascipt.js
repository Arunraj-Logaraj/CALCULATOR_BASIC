let buttonValue;
let output = "";
console.log("output", output);
let getButton = document
  .querySelectorAll(".buttonValue")
  .forEach((item, index) => {
    item.addEventListener("click", () => {
      displayFunction(item.textContent);
      // equalValue(item.textContent);
    });
  });

function displayFunction(itemValues) {
  document.querySelectorAll(".inputValue2").forEach((item) => {
    item.value += itemValues;
  });
}
function equalValues2() {
  let result;
  document.querySelectorAll(".inputValue2").forEach((item) => {
    const expression = item.value.trim();

    try {
      result = eval(expression);
    } catch (ex) {
      if (ex instanceof Error) result = ex.toString();
      else throw ex;
    }
    return result;
  });
  document.querySelectorAll(".inputValue2").forEach((item) => {
    item.value = result;
  });
}

function clearValue() {
  document.querySelectorAll(".inputValue2").forEach((item) => {
    item.value = "";
  });
}

let getButton2 = document
  .querySelectorAll(".buttonValue2")
  .forEach((item, index) => {
    item.addEventListener("click", () => {
      displayFunction(item.textContent);
      // equalValue(item.textContent);
    });
  });
