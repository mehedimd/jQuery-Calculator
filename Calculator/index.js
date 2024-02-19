$(document).ready(() => {
  $("#btnCalculate").click(() => {
    let firstNum = $("#firstNum").val();
    let secondNum = $("#secondNum").val();

    let result = Number(firstNum) + Number(secondNum);

    $("#showResult").html(result);
  });
});
