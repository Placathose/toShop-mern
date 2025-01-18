import express from 'express';
import mongoose from 'mongoose';

import ShoppingItem from '../models/shoppingItems.js';

const router = express.Router();

export const getShoppingItems = async (req, res) => {
  try {
    const shoppingItems = await ShoppingItem.find();

    res.status(201).json(shoppingItems);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const postShoppingItem = async (req, res) => {
  const {title, description, brand, price, link, tags} = req.body;
  
  const postItem = new ShoppingItem({title, description, brand, price, link, tags});

  try {
    await postItem.save();
    res.status(201).json(postItem);
  } catch (error) {
    res.status(409).json({message: error.message})
  }

}

export const getSingleItem = async () => {

}

export const deleteShoppingItem = async () => {

}

export const updateShoppingItem = async () => {

}

export default router