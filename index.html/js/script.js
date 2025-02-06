

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1057},"pages":[{"id":"page-home","displayName":"Home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false}]}
function validateForm() {
    const form = document.forms["RegisterIndustryContest2025"];
    const name = form["name"].value.trim();
    const surname = form["surname"].value.trim();
    const gender = form["gender"].value;
    const institute = form["institute"].value.trim();
    const course = form["course"].value.trim();
    const graduationYear = form["graduationYear"].value;
    const email = form["email"].value.trim();
    const phone = form["phone"].value.trim();
    const acceptRegulations = form["acceptRegulations"].checked;
    const acceptPrivacy = form["acceptPrivacy"].checked;

    // Check all fields are filled
    if (!name || !surname || !gender || !institute || !course || !graduationYear || !email || !phone) {
        alert("All fields must be filled out.");
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate phone number (basic mobile number format)
    const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid mobile phone number.");
        return false;
    }

    // Check acceptance of regulations and privacy
    if (!acceptRegulations) {
        alert("You must accept the Contest Regulations.");
        return false;
    }

    if (!acceptPrivacy) {
        alert("You must accept the Privacy Policy.");
        return false;
    }

    return true;
}