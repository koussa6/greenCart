import User from '../models/User.js';
export const updateCart = async (req, res) => {
  try {
    const { userId, cartItems } = req.body;
    await User.findByIdAndUpdate(userId, { cartItems });
    res.json({ success: true, message: 'Updated Cart' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
