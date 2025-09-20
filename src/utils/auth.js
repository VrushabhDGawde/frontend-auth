

export function isTokenValid(token) {
    if (!token) return false;

    // Your JWT token

    // Split the JWT into parts
    const parts = token.split('.');
    console.log('JWT Parts:', parts);

    // Decode header
    const header = JSON.parse(atob(parts[0]));
    console.log('Header:', header);

    // Decode payload
    const payload = JSON.parse(atob(parts[1]));
    console.log('Payload:', payload);

    // Check expiration
    const now = Date.now();
    const exp = payload.exp * 1000;
    console.log('Current time:', new Date(now));
    console.log('Expiration time:', new Date(exp));
    console.log('Is token valid?', exp > now);
    return exp > now;
}
