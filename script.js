function verifyInternId() {
  var internId = document.getElementById("internId").value;
  var resultDiv = document.getElementById("verificationResult");
  var validImg = document.getElementById("validImg");
  var invalidImg = document.getElementById("invalidImg");
  var resultText = document.getElementById("resultText");


  var validRangeStart = 2404001;
  var validRangeEnd = 2404222;
  var idNumber = parseInt(internId);

  if (idNumber >= validRangeStart && idNumber <= validRangeEnd) {
    resultDiv.style.backgroundColor = "#83eb9b";
    validImg.style.display = "inline";
    invalidImg.style.display = "none";
    resultText.textContent = "Internship ID is valid.";
    
  } else {
    resultDiv.style.backgroundColor = "#f7969f";
    validImg.style.display = "none";
    invalidImg.style.display = "inline";
    resultText.textContent = "Invalid Internship ID. Please enter correct ID.";
  }
}
