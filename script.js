document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('togglePassword');
    const emailInput = document.getElementById('email');
    const roleSelect = document.getElementById('role');
    const submitButton = document.getElementById('submitButton');

    // Toggle password visibility
    togglePasswordButton.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        togglePasswordButton.textContent = type === 'password' ? 'Hiện' : 'Ẩn';
    });

    // Enable submit button based on form validation
    const validateForm = () => {
        const isValid = usernameInput.value && passwordInput.value && emailInput.value && roleSelect.value;
        submitButton.disabled = !isValid;
    };

    usernameInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    roleSelect.addEventListener('change', validateForm);

    // Preview image when uploaded
    const profilePictureInput = document.getElementById('profilePicture');
    const imageURLInput = document.getElementById('imageURL');
    const imagePreview = document.getElementById('imagePreview');

    profilePictureInput.addEventListener('change', () => {
        const file = profilePictureInput.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            imagePreview.innerHTML = `<img src="${reader.result}" alt="Image Preview" style="max-width: 100%; height: auto; border-radius: 4px;">`;
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    });

    imageURLInput.addEventListener('input', () => {
        imagePreview.innerHTML = `<img src="${imageURLInput.value}" alt="Image Preview" style="max-width: 100%; height: auto; border-radius: 4px;">`;
    });
});
