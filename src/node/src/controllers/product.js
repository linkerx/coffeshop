import mealType from '../models/mealType';
import product from '../models/product';

export const getProducts = async (req, res) => {

  let products = await product.findAll();

  res.send({
      data: products
  });
}

export const createProduct = async (req, res) => {
  const { name, price, mealTypeId } = req.body;
  
  // NAME VALIDATION
  if (!name) {
    return res.status(400).send({
      message: 'Need a name to create a product',
    });
  }
  let productExists = await product.findOne({ where: {name} });
  if (productExists) {
    return res.status(400).send({
      message: 'A product with this name already exists',
    });
  }

  // MEALTYPE VALIDATION
  if(mealTypeId) {
    let mealTypeExist = await mealType.findOne({ where: { id: mealTypeId } })
    if (!mealTypeExist) {
      return res.status(400).send({
        message: 'Meal Type does not exist',
      });
    }
  }

  // CREATION
  try {
    let newProduct = await product.create({name, price, mealTypeId});
    return res.send(newProduct);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  
  let productExists = await product.findOne({
    where: {
      id
    },
  });
  if (productExists) {
    try {
      let delProduct = await productExists.destroy({id});
      return res.send(delProduct);
    } catch (err) {
      return res.status(500).send({
        message: `Error: ${err.message}`,
      });
    }
  } else {
    return res.status(400).send({
      message: 'The Meal Type you want to de lete does not exist',
    });
  }
};

