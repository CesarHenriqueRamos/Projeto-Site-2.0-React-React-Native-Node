const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const homeSchema = new Schema({
    topTitle: {type:String},
    topSubTitle: {type: String},
    topTextButton: {type: String},
    topLinkButton: {type: String},
    serTitle:{type:String},
    serSubTitle:{type:String},
    serUm:{type:String},
    serUmDesc:{type:String},
    serDois:{type:String},
    serDoisDesc:{type:String},
    serTres:{type:String},
    serTresDesc:{type:String},
    porTitle:{type:String},
    porSubTitle:{type:String},
    porCardUm:{type:String},
    porCardUmDesc:{type:String},
    portcardUmFileName:{type:String},
    porCardDois:{type:String},
    porCardDoisDesc:{type:String},
    portcardDoisFileName:{type:String},
    porCardTres:{type:String},
    porCardTresDesc:{type:String},
    portcardTresFileName:{type:String},
    porItemDestaqueTitle:{type:String},
    porItemDestaqueDesc:{type:String},
    portcardDestaqueFileName:{type:String}
  },
  {
      timestamps: true
  });
  mongoose.model('Home', homeSchema);