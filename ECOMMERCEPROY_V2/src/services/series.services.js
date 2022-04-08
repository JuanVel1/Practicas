const serieSchema = require('../models/serie.model')

class seriesService{
  async createSerie(serie){
    serie.save()
    return serie
  }
  async listSerie(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve(serieSchema.find())}, 3000)
    })
  }
  async showSerie(serieId){
    return serieSchema.findById({_id:serieId})
  }
  async editSerie(serieId, series, num_episodes, num_seasons, description){
    return serieSchema.findById({_id:serieId}).then((serieFind)=>{
      if(!serieFind) throw Error('Serie no encontrada')
      return serieSchema.updateOne(
        { serieId },
        {series, num_episodes, num_seasons, description}
      )
    })
  }
  async removeSerie(serieId){
    const serieRemove = serieSchema.findById({_id:serieId})
    return serieSchema.deleteOne(serieRemove)
  }
}

module.exports = seriesService