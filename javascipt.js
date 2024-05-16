let buttonValue;
let output = "";
let result;

let getButton = document
  .querySelectorAll(".buttonValue")
  .forEach((item, index) => {
    item.addEventListener("click", () => {
      displayFunction(item.textContent);
    });
  });

function displayFunction(itemValues) {
  if (typeof itemValues == "number") {
    document.querySelectorAll(".inputValue2").forEach((item) => {
      item.value += "";
    });
  } else {
    document.querySelectorAll(".inputValue2").forEach((item) => {
      item.value += itemValues;
    });
  }
}

function anotherDisplay(itemValues) {
  if (typeof itemValues == "number") {
    document.querySelectorAll(".inputValue2").forEach((item) => {
      item.value = itemValues;
    });
  }
}

function equalValues2() {
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

  anotherDisplay(result);
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
    });
  });
