import express, {Request, Response } from 'express';
const Tour =require ('./../models/tourModel') ;
exports.getAllTours = async (req:Request, res:Response) => {
 
    try{
    const queryObj = { ...req.query};
    let query = Tour.find(queryObj)
         let page =  req.query.page || 1;
          let limit = req.query.limit  || 100;
        //   let skip = (page - 1) * limit;
  
          query = query.limit(limit)
        //   if(req.query.page){
        //       const numTours = await Tour.countDocuments();
        //       if(skip>= numTours) throw new Error ('This page does not exist')
        //   }
     const tours = await query
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
    }catch(err){
        console.log(err)
    }
  
};
exports.createTour = async (req:Request, res:Response) => {
  try{
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });

  } catch(err){
      console.log(err)
  }
}  
