const PC = require("../models/pcModels");
const StatusCodes = require("http-status");

exports.getAllPC = async (req, res) => {
  try {
    const allPcs = await PC.find({});
    res.status(StatusCodes.OK).send(allPcs);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: "No PC found" });
  }
};

exports.updatePC = async (req, res) => {
  try {
    const { id } = req.params;
    const { isAvailable, inputUserName } = req.body;

    const updatedPC = await PC.findByIdAndUpdate(
      id,
      {
        isAvailable,
        userName: inputUserName,
      },
      { new: true }
    );

    if (!updatedPC) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .send({ message: "PC not found" });
    }

    res.status(StatusCodes.OK).send({
      status: "PC Updated",
      data: {
        updatedPC,
      },
    });
  } catch (error) {
    console.error("Error updating PC:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: "Failed to update PC" });
  }
};
