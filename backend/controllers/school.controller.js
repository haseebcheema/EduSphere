import * as schoolService from "../services/school.service.js";

export const createSchool = async (req, res) => {
  try {
    const newSchool = await schoolService.createSchool(req.body, req.user.id);
    res.status(201).json(newSchool);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while creating the school" });
  }
};

export const getSchool = async (req, res) => {
  const { id } = req.params;

  try {
    const school = await schoolService.getSchool(id);
    if (!school) {
      return res.status(404).json({ message: "School not found" });
    }
    res.json(school);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while retrieving the school" });
  }
};

export const getAllSchools = async (req, res) => {
  try {
    const schools = await schoolService.getAllSchools();
    res.json(schools);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while retrieving schools" });
  }
};

export const updateSchool = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSchool = await schoolService.updateSchool(id, req.body);
    res.json(updatedSchool);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while updating the school" });
  }
};

export const deleteSchool = async (req, res) => {
  const { id } = req.params;

  try {
    await schoolService.deleteSchool(id);
    res.status(200).json({ message: "School deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while deleting the school" });
  }
};
