import * as branchService from "../services/branch.service.js";

export const createBranch = async (req, res) => {
  try {
    const newBranch = await branchService.createBranch(req.body);
    res.status(201).json(newBranch);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while creating the branch" });
  }
};

export const getBranch = async (req, res) => {
  const { id } = req.params;

  try {
    const branch = await branchService.getBranch(id);
    if (!branch) {
      return res.status(404).json({ message: "Branch not found" });
    }
    res.json(branch);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while retrieving the branch" });
  }
};

export const getAllBranches = async (req, res) => {
  try {
    const branches = await branchService.getAllBranches();
    res.json(branches);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while retrieving branches" });
  }
};

export const updateBranch = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedBranch = await branchService.updateBranch(id, req.body);
    res.json(updatedBranch);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while updating the branch" });
  }
};

export const deleteBranch = async (req, res) => {
  const { id } = req.params;

  try {
    await branchService.deleteBranch(id);
    res.status(200).json({ message: "Branch deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while deleting the branch" });
  }
};
