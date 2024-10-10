import Traffic from '../models/traffic.model.js';

export const getAllTrafficData = async (req, res) => {
  try {
    const data = await Traffic.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dados", error });
  }
};

export const getTrafficDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Traffic.findById(id);
    if (!data) return res.status(404).json({ message: "Dados não encontrados" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dados", error });
  }
};
