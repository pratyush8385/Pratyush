<script>
    function sendWhatsAppMessage() 
        var name = document.getElementById("form_name").value;
        var email = document.getElementById("form_email").value;
        var message = document.getElementById("form_message").value;

        var whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
        var phoneNumber = "917008512081"; // Replace with your WhatsApp number (without + or spaces)

        var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, "_blank");
    
</script>