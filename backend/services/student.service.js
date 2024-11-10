import generatePassword from "../utils/password.util.js";
import { hashPassword } from "./password.service.js";
import Student from "../models/Student.js";
import Branch from "../models/Branch.js";

export const createStudent = async ({
  name,
  email,
  assignedGroup,
  assignedTeacher,
  currentGrade,
  previousSchool,
  branchId,
}) => {
  const password = generatePassword();
  const passwordHash = await hashPassword(password);

  const newStudent = new Student({
    name,
    email,
    passwordHash,
    role: "Student",
    assignedGroup,
    assignedTeacher,
    currentGrade,
    previousSchool,
  });

  await newStudent.save();

  const updatedBranch = await Branch.findByIdAndUpdate(
    branchId,
    { $push: { students: newStudent._id } },
    { new: true }
  );

  if (!updatedBranch) {
    throw new Error("Branch not found");
  }

  return { student: newStudent, branch: updatedBranch, password };
};

export const getStudent = async (studentId) => {
  return await Student.findById(studentId);
};

export const getAllStudents = async () => {
  return await Student.find();
};

export const deleteStudent = async (studentId) => {
  const deletedStudent = await Student.findByIdAndDelete(studentId);
  if (!deletedStudent) throw new Error("Student not found");

  await Branch.updateMany(
    { students: studentId },
    { $pull: { students: studentId } }
  );

  return deletedStudent;
};
