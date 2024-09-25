import { User } from "../models/user.model";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { Response } from "../utils/Response";

export const Signup = async (req, res) => {
  try {
    const { fullname, email, password, contact } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return Response(res, 404, false, "User already exists with this email");
    }
    const hashPassword = await bcryptjs.hash(password, 10);

    const verificationToken = Math.floor(100000 + Math.random() * 900000);
    user = await User.create({
      fullname,
      email,
      password: hashPassword,
      contact,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 86400000,
    });

    return Response(res, 201, true, "Sign up successfully", {
      ...user._doc,
      password: undefined,
    });
  } catch (error) {
    return Response(res, 500, false, "Internal server error");
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return Response(res, 404, false, "Invalid email or password");
    }
    const isPasswordMatched = await bcryptjs.compare(password, user.password);
    if (!isPasswordMatched) {
      return Response(res, 404, false, "Invalid email or password");
    }
    user.lastLogin = new Date();
    await user.save();

    return Response(res, 201, true, `Welcome back ${user.name}`, {
      ...user._doc,
      password: undefined,
    });
  } catch (error) {
    return Response(res, 500, false, "Internal server error");
  }
};

export const Logout = async (req, res) => {
  try {
    return res.clearCookie("token").status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return Response(res, 500, false, "Internal server error");
  }
};

export const VerifyEmail = async (req, res) => {
  try {
    const { verificationcode } = req.body;
    let user = await User.findOne({
      verificationToken: verificationcode,
      verificationTokenExpiresAt: { $gt: Date.now() },
    }).select("-password");

    if (!user) {
      return Response(res, 404, false, "Invalid or expired verification token");
    }
    user.isVerfied = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;

    await user.save();
    return Response(res, 200, true, "Email verified successfully");
  } catch (error) {
    return Response(res, 500, false, "Internal server error");
  }
};

export const ForgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return Response(res, 404, false, "User doesn't exists with this email");
    }
    const resetToken = crypto.randomBytes(40).toString("hex");
    const resetTokenExpiresAt = new Date(Date.now() + 1 * 60 * 60 * 1000); // 1 hour expiration
    user.resetPasswordToken = resetToken;
    user.resetPasswordTokenExpiresAt = resetTokenExpiresAt;

    await user.save();
    // send email with reset token

    return Response(res, 200, true, "Verification code sent to your email");
  } catch (error) {
    return Response(res, 500, false, "Internal server error");
  }
};

export const ResetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordTokenExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      return Response(res, 404, false, "Invalid or expired reset token");
    }
    const hashPassword = await bcryptjs.hash(newPassword, 10);
    user.password = hashPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpiresAt = undefined;
    await user.save();
    return Response(res, 200, true, "Password reset successfully");
  } catch (error) {
    return Response(res, 500, false, "Internal server error");
  }
};

export const CheckAuth = async (req, res) => {
  try {
    const userId = req.id;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return Response(res, 404, false, "User not found");
    }
    return Response(res, 200, true, "User found", user);
  } catch (error) {
    return Response(res, 500, false, "Internal server error");
  }
};
export const UpdateProfile = async (req, res) => {
  try {
    const userId = req.id;
    const { fullname, email, address, city, country, profilePicture, contact } =
      req.body;

    let cloudResponse = await cloudinary.uploader.upload(profilePicture);
    const userUpdateData = {
      fullname,
      email,
      address,
      city,
      country,
      profilePicture,
      // profilePicture: cloudResponse.secure_url || "",
      contact,
    };
    const user = await User.findByIdAndUpdate(userId, userUpdateData, {
      new: true,
    }).select("-password");
    return Response(res, 201, true, "Profile updated successfully", user);
  } catch (error) {
    return Response(res, 500, false, "Internal server error");
  }
};
