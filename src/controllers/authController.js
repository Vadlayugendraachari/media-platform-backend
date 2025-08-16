class AuthController {
    async signup(req, res) {
        // Logic for creating a new admin user
        const { email, password } = req.body;
        // Validate input and create user in the database
        // Hash the password and save the user
        // Respond with success or error message
    }

    async login(req, res) {
        // Logic for user login
        const { email, password } = req.body;
        // Validate user credentials
        // Generate JWT token if credentials are valid
        // Respond with token or error message
    }
}

export default new AuthController();