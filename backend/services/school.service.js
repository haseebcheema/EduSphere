import School from "../models/School.js";
import User from "../models/User.js";

export const createSchool = async (schoolData, educatorId) => {
  const { schoolName, address } = schoolData;

  const newSchool = new School({
    schoolName,
    address,
    educatorId,
  });

  await newSchool.save();

  await User.findByIdAndUpdate(educatorId, {
    $push: { schools: newSchool._id },
  });

  return newSchool;
};

export const getSchool = async (schoolId) => {
  return await School.findById(schoolId)
    .populate("educatorId")
    .populate("branches");
};

export const getAllSchools = async () => {
  return await School.find().populate("educatorId").populate("branches");
};

export const updateSchool = async (schoolId, schoolData) => {
  return await School.findByIdAndUpdate(schoolId, schoolData, { new: true });
};

export const deleteSchool = async (schoolId) => {
  const deletedSchool = await School.findByIdAndDelete(schoolId);
  if (!deletedSchool) throw new Error("School not found");
  await User.findByIdAndUpdate(deletedSchool.educatorId, {
    $pull: { schools: schoolId },
  });
  return deletedSchool;
};
