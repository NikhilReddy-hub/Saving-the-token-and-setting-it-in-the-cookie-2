const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  // Set token expiry time (e.g., 1 hour)
  const options = {
    expiresIn: '1h' // You can use '10s', '2d', etc.
  };

  // Generate JWT token
  const token = jwt.sign(payload, secret, options);
  return token;
};

// Example usage (optional)
const payload = { userId: 101, role: 'user' };
const secret = 'my_jwt_secret';
const token = encrypt(payload, secret);
console.log('Generated JWT:', token);

module.exports = encrypt;
