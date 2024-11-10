import generatePassword from "../utils/password.util.js";
import { hashPassword } from "./password.service.js";
import Teacher from "../models/Teacher.js";
import Branch from "../models/Branch.js";

export const createTeacher = async ({
  name,
  email,
  subject,
  experienceYears,
  qualifications,
  certifications,
  branchId,
}) => {
  const password = generatePassword();
  const passwordHash = await hashPassword(password);

  const newTeacher = new Teacher({
    name,
    email,
    passwordHash,
    role: "Teacher",
    subject,
    experienceYears,
    qualifications,
    certifications,
  });

  await newTeacher.save();

  const updatedBranch = await Branch.findByIdAndUpdate(
    branchId,
    { $push: { teachers: newTeacher._id } },
    { new: true }
  );

  if (!updatedBranch) {
    throw new Error("Branch not found");
  }

  return { teacher: newTeacher, branch: updatedBranch, password };
};

export const getTeacher = async (teacherId) => {
  return await Teacher.findById(teacherId);
};

export const getAllTeachers = async () => {
  return await Teacher.find();
};

export const deleteTeacher = async (teacherId) => {
  const deletedTeacher = await Teacher.findByIdAndDelete(teacherId);
  if (!deletedTeacher) throw new Error("Teacher not found");

  await Branch.updateMany(
    { teachers: teacherId },
    { $pull: { teachers: teacherId } }
  );

  return deletedTeacher;
};
