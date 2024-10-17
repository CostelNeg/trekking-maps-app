import express from "express";
import upload from "../middleware/upload.js";
import { isAdmin, authenticateToken } from "../middleware/auth.js";
import Map from "../models/Map.js";
import {checkDownloadLimit} from '../middleware/checkDownload.js'

const router = express.Router();
//POST, aggiungigiamo una nuova mappa, nel caso sei admin
router.post(
  "/",
  authenticateToken,
  isAdmin,
  upload.fields([{ name: "image" }, { name: "file" }]),
  async (req, res) => {
      const { name, description } = req.body;

      //newMap

      const newMap = new Map({
        name,
        description,
        imageUrl: req.files["image"] ? req.files["image"][0].path : "",
        downloadUrl: req.files["file"] ? req.files["file"][0].path : "",
      });
    try {
      await newMap.save();
      res.status(201).json(newMap);
    } catch (err) {
      res.status(500).json({ message: "Errore nel caricamento della mappa" });
    }
  }
);

//GET, otteniamo tutte le mappe

router.get("/", async (req, res) => {
  try {
    const maps = await Map.find();
    res.json(maps);
  } catch (err) {
    res.status(500).json({ message: "Errore nel recupero delle mappe" });
  }
});

router.get('/download/:mapId', checkDownloadLimit, async (req, res) => {
  const mapId = req.params.mapId;
  const user = req.user;

  // Incrementa il contatore dei download
  user.downloadCount += 1;
  await user.save();

  res.download(`/path/to/maps/${mapId}`); 
});

export default router;
