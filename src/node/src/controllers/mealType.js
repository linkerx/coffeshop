import mealType from '../models/mealType';

export const getMealTypes = async (req, res) => {
  let arrMealTypes = await mealType.findAll();
  res.send({
      data: arrMealTypes
  });
}

export const createMealType = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({
      message: 'Need a name to create a Meal Type',
    });
  }
  let MealTypeExists = await mealType.findOne({
    where: {
      name,
    },
  });
  if (MealTypeExists) {
    return res.status(400).send({
      message: 'A Meal Type with this name already exists',
    });
  }
  try {
    let newMealType = await mealType.create({name});
    return res.send(newMealType);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

export const deleteMealType = async (req, res) => {
  const { id } = req.params;
  
  let mealTypeExists = await mealType.findOne({
    where: {
      id
    },
  });
  if (!mealTypeExists) {
    return res.status(400).send({
      message: 'The Meal Type you want to de lete does not exist',
    });
  }
  try {
    let delMealType = await mealType.destroy({id});
    return res.send(delMealType);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

