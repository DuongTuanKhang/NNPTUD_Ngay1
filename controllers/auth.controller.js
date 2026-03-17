exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    // validate dữ liệu
    if (!oldPassword || !newPassword) {
      return res.status(400).json({ message: "Missing fields" });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        message: "New password must be at least 6 characters"
      });
    }

    // lấy user từ token (middleware đã decode)
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // kiểm tra mật khẩu cũ
    if (user.password !== oldPassword) {
      return res.status(400).json({ message: "Old password incorrect" });
    }

    // cập nhật password
    user.password = newPassword;
    await user.save();

    res.json({
      message: "Password changed successfully"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};