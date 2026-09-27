// ========================================
// GLOBAL FORM TYPE
// ========================================

let formType = "book";


// ========================================
// OPEN LEAD FORM
// ========================================

function openLeadForm(type) {

    formType = type;

    document.getElementById("leadModal").style.display = "flex";
}


// ========================================
// CLOSE LEAD FORM
// ========================================

function closeLeadForm() {

    document.getElementById("leadModal").style.display = "none";
}


// ========================================
// FORM SUBMIT
// ========================================

document
    .getElementById("leadForm")
    .addEventListener("submit", async function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name")
                .value
                .trim();


        const mobile =
            document.getElementById("mobile")
                .value
                .trim();


        const city =
            document.getElementById("city")
                .value
                .trim();


        // ========================================
        // VALIDATION
        // ========================================

        if (name.length < 2) {

            alert("Please enter a valid name.");

            return;
        }


        if (!/^[0-9]{10}$/.test(mobile)) {

            alert(
                "Please enter a valid 10 digit mobile number."
            );

            return;
        }


        if (city.length < 2) {

            alert("Please enter your city.");

            return;
        }


        // ========================================
        // CREATE REQUEST
        // ========================================

        const leadData = {

            name: name,

            mobile: mobile,

            city: city,

            formType: formType

        };


        // ========================================
        // SUBMIT BUTTON
        // ========================================

        const submitButton =
            document.querySelector(
                "#leadForm .submit-button"
            );


        submitButton.disabled = true;

        submitButton.innerText = "Submitting...";


        try {


            // ========================================
            // SPRING BOOT API
            // ========================================

            const response = await fetch(
                "/api/leads",
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify(leadData)

                }
            );


            const result =
                await response.text();


            console.log(
                "Server response:",
                result
            );


            // ========================================
            // SUCCESS
            // ========================================

            if (response.ok) {

                closeLeadForm();


                // ====================================
                // LET'S CONNECT
                // ====================================

                if (formType === "book") {

                    window.location.href =
                        "/thank-you.html";

                }


                // ====================================
                // FREE CONSULTATION
                // ====================================

                else {

                    document.getElementById(
                        "thankYouText"
                    ).innerText =
                        "Thank you for your interest in PPC by Rajat. Our team will contact you shortly.";


                    document.getElementById(
                        "thankYouPopup"
                    ).style.display = "flex";

                }


                // Clear form

                document.getElementById(
                    "leadForm"
                ).reset();


            } else {

                alert(
                    result ||
                    "Unable to submit your details."
                );

            }


        } catch (error) {

            console.error(
                "API Error:",
                error
            );


            alert(
                "Server connection failed. Please try again."
            );


        } finally {

            submitButton.disabled = false;

            submitButton.innerText = "Get Started";

        }

    });


// ========================================
// CLOSE THANK YOU POPUP
// ========================================

function closeThankYou() {

    document.getElementById(
        "thankYouPopup"
    ).style.display = "none";
}


// ========================================
// WHATSAPP
// ========================================

function openWhatsApp() {

    document.getElementById(
        "whatsappModal"
    ).style.display = "flex";
}


function closeWhatsApp() {

    document.getElementById(
        "whatsappModal"
    ).style.display = "none";
}


// ========================================
// SEND WHATSAPP
// ========================================

function sendWhatsApp() {

    const message =
        document.getElementById(
            "whatsappMessage"
        )
        .value
        .trim();


    if (message === "") {

        alert(
            "Please enter your message."
        );

        return;
    }


    // ========================================
    // PPC BY RAJAT WHATSAPP NUMBER
    // ========================================

    // India country code + number
    // No +, spaces or hyphens

    const whatsappNumber =
        "917015732776";


    const whatsappURL =
        "https://wa.me/"
        + whatsappNumber
        + "?text="
        + encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );


    closeWhatsApp();


    document.getElementById(
        "thankYouText"
    ).innerText =
        "Thank you for contacting PPC by Rajat. We will connect with you shortly.";


    document.getElementById(
        "thankYouPopup"
    ).style.display = "flex";

}