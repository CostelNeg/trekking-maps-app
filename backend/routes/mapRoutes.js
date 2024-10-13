// import express from "express";
// import upload from "../middleware/upload.js";
// //import { isAdmin, isAutenticated } from "../middleware/auth.js";
// import Map from "../models/Map.js";

// const router = express.Router();
// //POST, aggiungigiamo una nuova mappa, nel caso sei admin
// router.post(
//   "/",
//   isAutenticated,
//   isAdmin,
//   upload.fields([{ name: "image" }, { name: "file" }]),
//   async (req, res) => {
//       const { name, description } = req.body;

//       //newMap

//       const newMap = new Map({
//         name,
//         description,
//         imageUrl: req.files["image"] ? req.files["image"][0].path : "",
//         downloadUrl: req.files["file"] ? req.files["file"][0].path : "",
//       });
//     try {
//       await newMap.save();
//       res.status(201).json(newMap);
//     } catch (err) {
//       res.status(500).json({ message: "Errore nel caricamento della mappa" });
//     }
//   }
// );

// //GET, otteniamo tutte le mappe

// router.get("/", async (req, res) => {
//   try {
//     const maps = await Map.find();
//     res.json(maps);
//   } catch (err) {
//     res.status(500).json({ message: "Errore nel recupero delle mappe" });
//   }
// });

// export default router;
