const NotificationType = {
    Success: 'success',
    Info: 'info',
    Warning: 'Warning',
    Error: 'error'
}

const NotificationMessage = {
    OutOfStock: 'Product is Out of Stock',
    AddedToCart: 'Product is Added to Cart'
}

const ErrorMessage = {
    Email: 'Email required',
    EmailProper: 'Proper Email required',
    Password: "Password equired",
    FirstName: "First Name equired",
    LastName: 'Last Name required',
    ConfirmPassword: 'Confirm Password required',
    ConfirmPasswordMatch: 'Password not matching'
}

const EmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export { NotificationType, NotificationMessage, ErrorMessage, EmailFormat}