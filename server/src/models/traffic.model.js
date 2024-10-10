import { model, Schema } from "mongoose";

const TrafficSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  horario: {
    type: String,
    required: true
  },
  uf: {
    type: String,
    required: true
  },
  br: {
    type: Number,
    required: true
  },
  km: {
    type: String,
    required: true
  },
  municipio: {
    type: String,
    required: true
  },
  causa: {
    type: String,
    required: true
  },
  acidente: {
    type: String,
    required: true
  },
  pessoas: {
    type: Number,
    required: true
  },
  mortos:  {
    type: Number,
    required: true
  },
  feridos:  {
    type: Number,
    required: true
  },
  veiculos:  {
    type: Number,
    required: true
  },
  latitude:  {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
});

const Traffic = model('Traffic', TrafficSchema, 'datas');


export default Traffic;
