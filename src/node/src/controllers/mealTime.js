import mealTime from '../models/mealTime';

export const getMealTimes = async (req, res) => {
  let arrMealTimes = await mealTime.findAll();
  res.send({
      data: arrMealTimes
  });
}

export const createMealTime = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({
      message: 'Need a name to create a mealTime',
    });
  }
  let mealTimeExists = await product.findOne({
    where: {
      name,
    },
  });
  if (mealTimeExists) {
    return res.status(400).send({
      message: 'A mealTime with this name already exists',
    });
  }
  try {
    let newMealTime = await mealTime.create({name});
    return res.send(newMealTime);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

