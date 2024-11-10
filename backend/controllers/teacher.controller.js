import * as TeacherService from "../services/teacher.service.js";

export const createTeacher = async (req, res) => {
  const {
    name,
    email,
    subject,
    experienceYears,
    qualifications,
    certifications,
    branchId,
  } = req.body;

  try {
    const { teacher, branch, password } = await TeacherService.createTeacher({
      name,
      email,
      subject,
      experienceYears,
      qualifications,
      certifications,
      branchId,
    });
    res.status(201).json({
      message: "Teacher created successfully.",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while creating the teacher" });
  }
};

export const getTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const teacher = await TeacherService.getTeacher(id);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.json(teacher);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while retrieving the teacher" });
  }
};

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await TeacherService.getAllTeachers();
    res.json(teachers);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while retrieving teachers" });
  }
};

export const deleteTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTeacher = await TeacherService.deleteTeacher(id);
    if (!deletedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.status(200).json({ message: "Teacher deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while deleting the teacher" });
  }
};
