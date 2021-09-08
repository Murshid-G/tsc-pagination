import express from 'express';
const tourController  = require('./../controllers/tourController.ts');

const router = express.Router();


router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

module.exports = router;
