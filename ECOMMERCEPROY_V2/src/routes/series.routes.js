const seriesService = require('../services/series.services');
const service = new seriesService();
const express = require('express');
const serieModel = require('../models/serie.model');
const seriesRouter = express.Router();

seriesRouter.post('/serie', async (req, res) => {
  try {
    const serie = serieModel(req.body);
    const data = await service.createSerie(serie);
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

seriesRouter.get('/', async (req, res) => {
  try {
    await service.listSerie().then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ message: err });
  }
});

seriesRouter.get('/:serieId', async (req, res) => {
  try {
    const { serieId } = req.params;
    const data = await service.showSerie(serieId);
    res.status(200).json(data);
  } catch (error) {
    res.status(204).json({ message: error });
  }
});
seriesRouter.put('/:serieId', async (req, res) => {
  try {
    const { serieId } = req.params;
    const { series, num_episodes, num_seasons, description } = req.body;
    const data = await service.editSerie(
      serieId,
      series,
      num_episodes,
      num_seasons,
      description
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(204).json({ message: error });
  }
});
seriesRouter.delete('/:serieId', async (req, res) => {
  const { serieId } = req.params;

  await service
    .removeSerie(serieId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(204).json({ message: err });
    });
});

module.exports = seriesRouter;
