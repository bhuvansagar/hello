// Parking slot simulation
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

// Initial display
updateParkingDisplay();
