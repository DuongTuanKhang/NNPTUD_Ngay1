router.post("/change-password", authMiddleware, authController.changePassword);
