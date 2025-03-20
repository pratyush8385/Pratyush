document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("whatsapp-button").addEventListener("click", sendWhatsAppMessage);
});

function sendWhatsAppMessage() {
    var name = document.getElementById("form_name").value.trim();
    var email = document.getElementById("form_email").value.trim();
    var message = document.getElementById("form_message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before sending.");
        return;
    }

    var phoneNumber = "917008512081"; // Replace with your WhatsApp number (without + or spaces)
    var whatsappMessage = `Hello, my name is ${name}.\nMy email is ${email}.\nMessage: ${message}`;

    var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
}
