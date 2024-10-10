import Traffic from '../models/traffic.model.js';

export const getAllTrafficData = async (req, res) => {
  try {
    const data = await Traffic.find().limit(100);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dados", error });
  }
};

export const getTrafficDataByUf = async (req, res) => {
  const { uf } = req.params;
  try {
    if (!uf) {
      return res.status(400).json({ message: "UF é obrigatório." });
    }
    const data = await Traffic.find({ uf });
    if (data.length === 0) {
      return res.status(404).json({ message: "Nenhum dado encontrado para o UF informado." });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dados", error });
  }
};

export const getTrafficDataByMunicipio = async (req, res) => {
  const { municipio } = req.params;
  try {
    if (!municipio) {
      return res.status(400).json({ message: "Município é obrigatório." });
    }
    const data = await Traffic.find({ municipio });
    if (data.length === 0) {
      return res.status(404).json({ message: "Nenhum dado encontrado para o município informado." });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dados", error });
  }
};

