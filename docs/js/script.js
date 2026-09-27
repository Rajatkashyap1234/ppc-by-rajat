// ==================================================
// PPC BY RAJAT - GITHUB PAGES JAVASCRIPT
// ==================================================


// ==================================================
// GLOBAL FORM TYPE
// ==================================================

let formType = "book";


// ==================================================
// OPEN LEAD FORM
// ==================================================

function openLeadForm(type) {

    formType = type;

    const modal = document.getElementById("leadModal");

    if (modal) {
        modal.style.display = "flex";
    }

}


// ==================================================
// CLOSE LEAD FORM
// ==================================================

function closeLeadForm() {

    const modal = document.getElementById("leadModal");

    if (modal) {
        modal.style.display = "none";
    }

}


// ==================================================
// LEAD FORM SUBMIT
// ==================================================

const leadForm = document.getElementById("leadForm");

if (leadForm) {

    leadForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // ==================================================
        // GET FORM VALUES
        // ==================================================

        const nameElement =
            document.getElementById("name");

        const mobileElement =
            document.getElementById("mobile");

        const cityElement =
            document.getElementById("city");


        const name =
            nameElement
                ? nameElement.value.trim()
                : "";

        const mobile =
            mobileElement
                ? mobileElement.value.trim()
                : "";

        const city =
            cityElement
                ? cityElement.value.trim()
                : "";


        // ==================================================
        // VALIDATION
        // ==================================================

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


        // ==================================================
        // LEAD DATA
        // ==================================================

        const leadData = {

            name: name,

            mobile: mobile,

            city: city,

            formType: formType

        };


        // ==================================================
        // GOOGLE TAG MANAGER / ANALYTICS DATA
        // ==================================================

        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({

            event: "lead_form_submit",

            lead_form_type: formType,

            lead_name: name,

            lead_city: city

        });


        // ==================================================
        // CONSOLE LOG
        // ==================================================

        console.log(
            "PPC by Rajat Lead:",
            leadData
        );


        // ==================================================
        // SUBMIT BUTTON
        // ==================================================

        const submitButton =
            document.querySelector(
                "#leadForm .submit-button"
            );


        if (submitButton) {

            submitButton.disabled = true;

            submitButton.innerText =
                "Submitted";

        }


        // ==================================================
        // CLOSE FORM
        // ==================================================

        closeLeadForm();


        // ==================================================
        // SUCCESS MESSAGE
        // ==================================================

        const thankYouText =
            document.getElementById(
                "thankYouText"
            );


        if (thankYouText) {

            if (formType === "book") {

                thankYouText.innerText =
                    "Thank you for contacting PPC by Rajat. Our team will connect with you shortly.";

            } else {

                thankYouText.innerText =
                    "Thank you for your interest in PPC by Rajat. Our team will contact you shortly.";

            }

        }


        // ==================================================
        // SHOW THANK YOU POPUP
        // ==================================================

        const thankYouPopup =
            document.getElementById(
                "thankYouPopup"
            );


        if (thankYouPopup) {

            thankYouPopup.style.display =
                "flex";

        }


        // ==================================================
        // RESET FORM
        // ==================================================

        leadForm.reset();


        // ==================================================
        // RESTORE BUTTON
        // ==================================================

        setTimeout(function () {

            if (submitButton) {

                submitButton.disabled = false;

                submitButton.innerText =
                    "Get Started";

            }

        }, 1000);

    });

}


// ==================================================
// CLOSE THANK YOU POPUP
// ==================================================

function closeThankYou() {

    const popup =
        document.getElementById(
            "thankYouPopup"
        );


    if (popup) {

        popup.style.display =
            "none";

    }

}


// ==================================================
// WHATSAPP MODAL
// ==================================================

function openWhatsApp() {

    const modal =
        document.getElementById(
            "whatsappModal"
        );


    if (modal) {

        modal.style.display =
            "flex";

    }

}


function closeWhatsApp() {

    const modal =
        document.getElementById(
            "whatsappModal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }

}


// ==================================================
// SEND WHATSAPP MESSAGE
// ==================================================

function sendWhatsApp() {

    const messageElement =
        document.getElementById(
            "whatsappMessage"
        );


    const message =
        messageElement
            ? messageElement.value.trim()
            : "";


    // ==================================================
    // VALIDATION
    // ==================================================

    if (message === "") {

        alert(
            "Please enter your message."
        );

        return;
    }


    // ==================================================
    // WHATSAPP NUMBER
    // ==================================================

    const whatsappNumber =
        "917015732776";


    // ==================================================
    // CREATE WHATSAPP URL
    // ==================================================

    const whatsappURL =
        "https://wa.me/"
        + whatsappNumber
        + "?text="
        + encodeURIComponent(message);


    // ==================================================
    // GTM EVENT
    // ==================================================

    window.dataLayer =
        window.dataLayer || [];


    window.dataLayer.push({

        event: "whatsapp_click",

        whatsapp_message:
            message

    });


    // ==================================================
    // OPEN WHATSAPP
    // ==================================================

    window.open(
        whatsappURL,
        "_blank"
    );


    // ==================================================
    // CLOSE WHATSAPP MODAL
    // ==================================================

    closeWhatsApp();


    // ==================================================
    // THANK YOU POPUP
    // ==================================================

    const thankYouText =
        document.getElementById(
            "thankYouText"
        );


    if (thankYouText) {

        thankYouText.innerText =
            "Thank you for contacting PPC by Rajat. We will connect with you shortly.";

    }


    const thankYouPopup =
        document.getElementById(
            "thankYouPopup"
        );


    if (thankYouPopup) {

        thankYouPopup.style.display =
            "flex";

    }

}


// ==================================================
// CALL BUTTON TRACKING
// ==================================================

function trackCallClick() {

    window.dataLayer =
        window.dataLayer || [];


    window.dataLayer.push({

        event: "call_click"

    });

}


// ==================================================
// GENERAL BUTTON TRACKING
// ==================================================

function trackButtonClick(buttonName) {

    window.dataLayer =
        window.dataLayer || [];


    window.dataLayer.push({

        event: "button_click",

        button_name:
            buttonName

    });

}


// ==================================================
// CLOSE MODALS WHEN CLICKING OUTSIDE
// ==================================================

window.addEventListener(
    "click",
    function (event) {

        const leadModal =
            document.getElementById(
                "leadModal"
            );

        const whatsappModal =
            document.getElementById(
                "whatsappModal"
            );


        if (
            event.target === leadModal
        ) {

            closeLeadForm();

        }


        if (
            event.target === whatsappModal
        ) {

            closeWhatsApp();

        }

    }
);


// ==================================================
// PAGE LOADED
// ==================================================

window.addEventListener(
    "load",
    function () {

        console.log(
            "PPC by Rajat website loaded successfully."
        );


        // GTM page load event

        window.dataLayer =
            window.dataLayer || [];


        window.dataLayer.push({

            event: "website_loaded"

        });

    }
);