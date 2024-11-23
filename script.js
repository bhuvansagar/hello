
let parkingSlots = [
    { id: 1, occupied: false, vehicle: "" },
    { id: 2, occupied: false, vehicle: "" },
    { id: 3, occupied: false, vehicle: "" },
    { id: 4, occupied: false, vehicle: "" },
    { id: 5, occupied: false, vehicle: "" },
    { id: 6,  occupied: false, vehicle:""}
];

function updateParkingDisplay() {
    const parkingDiv = document.getElementById("parkingSlots");
    parkingDiv.innerHTML = "";
    parkingSlots.forEach(slot => {
        const slotDiv = document.createElement("div");
        slotDiv.innerText = slot.occupied ? `Occupied: ${slot.vehicle}` : "Available";
        slotDiv.style.backgroundColor = slot.occupied ? "#FF4C4C" : "#4CAF50";
        parkingDiv.appendChild(slotDiv);
    });
}

function parkVehicle() {
    const vehicleNumber = document.getElementById("vehicleNumber").value;
    const availableSlot = parkingSlots.find(slot => !slot.occupied);

    if (availableSlot) {
        availableSlot.occupied = true;
        availableSlot.vehicle = vehicleNumber;
        updateParkingDisplay();
        alert("Vehicle parked successfully.");
    } else {
        alert("No available slots.");
    }
}

function removeVehicle() {
    const vehicleNumber = document.getElementById("vehicleNumber").value;
    const slot = parkingSlots.find(slot => slot.vehicle === vehicleNumber);

    if (slot) {
        slot.occupied = false;
        slot.vehicle = "";
        updateParkingDisplay();
        alert("Vehicle removed successfully.");
    } else {
        alert("Vehicle not found.");
    }
}


updateParkingDisplay();



// Token storage for verification
let generatedToken = "";

// Generate a random token
function generateToken() {
  return Math.random().toString(36).substr(2, 8).toUpperCase();
}

// Initialize QR Code generation and token display
document.getElementById("generateBtn").addEventListener("click", () => {
  // Generate a new token
  generatedToken = generateToken();
  
  // Display the token
  document.getElementById("tokenDisplay").textContent = `Token: ${generatedToken}`;

  // Clear previous QR code
  document.getElementById("qrcode").innerHTML = "";

  // Generate a QR code with the token
  new QRCode(document.getElementById("qrcode"), {
    text: generatedToken,
    width: 150,
    height: 150,
  });
});
