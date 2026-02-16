module.exports = async function (context, req) {

    const { phone, password } = req.body || {};

    if (!phone || !password) {
        context.res = {
            status: 400,
            body: { message: "Missing phone or password" }
        };
        return;
    }

    // Dummy login check (for now)
    if (phone === "1234567890" && password === "admin") {
        context.res = {
            status: 200,
            body: { message: "Login successful 🎉" }
        };
    } else {
        context.res = {
            status: 401,
            body: { message: "Invalid credentials ❌" }
        };
    }
};
