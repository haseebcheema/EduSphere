import * as StudentService from "../services/student.service.js";

export const createStudent = async (req, res) => {
  const {
    name,
    email,
    assignedGroup,
    assignedTeacher,
    currentGrade,
    previousSchool,
    branchId,
  } = req.body;

  try {
    const { student, branch, password } = await StudentService.createStudent({
      name,
      email,
      assignedGroup,
      assignedTeacher,
      currentGrade,
      previousSchool,
      branchId,
    });
    res.status(201).json({
      student,
      branch,
      message: "Student created successfully.",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while creating the student" });
  }
};

export const getStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await StudentService.getStudent(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while retrieving the student" });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await StudentService.getAllStudents();
    res.json(students);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while retrieving students" });
  }
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await StudentService.deleteStudent(id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while deleting the student" });
  }
};
