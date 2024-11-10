import Branch from "../models/Branch.js";
import School from "../models/School.js";

export const createBranch = async (branchData) => {
  const { schoolId, branchName, address } = branchData;

  const newBranch = new Branch({
    schoolId,
    branchName,
    address,
  });

  await newBranch.save();

  await School.findByIdAndUpdate(schoolId, {
    $push: { branches: newBranch._id },
  });

  return newBranch;
};

export const getBranch = async (branchId) => {
  return await Branch.findById(branchId);
};

export const getAllBranches = async () => {
  return await Branch.find();
};

export const updateBranch = async (branchId, branchData) => {
  return await Branch.findByIdAndUpdate(branchId, branchData, { new: true });
};

export const deleteBranch = async (branchId) => {
  const deletedBranch = await Branch.findByIdAndDelete(branchId);
  if (!deletedBranch) throw new Error("Branch not found");
  await School.findByIdAndUpdate(deletedBranch.schoolId, {
    $pull: { branches: branchId },
  });
  return deletedBranch;
};
