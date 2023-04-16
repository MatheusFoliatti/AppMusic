const files = {
  Idiota: require('./musics/Jão - Idiota.mp3'),
  OhWellOhWell: require('./musics/Mayday Parade - Oh Well Oh Well.mp3'),
  SomebodyThatIUsedToKnow: require('./musics/Mayday Parade - Somebody That I Used To Know.mp3'),
  CourtesyCall: require('./musics/Thousand Foot Krutch - Courtesy Call.mp3'),
  VaiPassarXSaudade: require('./musics/Vai Passar x Saudade (Gaab x Luiz Lins, Konai) DAY & Dreicon.mp3'),
}

const musicas = [
  {
    nome: 'Idiota',
    artita: 'Jão',
    file: files.Idiota
  },
  {
    nome: 'Oh Well Oh Well',
    artita: 'Mayday Parade',
    file: files.OhWellOhWell
  }, 
  {
    nome: 'Somebody That I Used To Know',
    artita: 'Mayday Parade',
    file: files.SomebodyThatIUsedToKnow
  },
  {
    nome: 'Courtesy Call',
    artita: 'Thousand Foot Krutch',
    file: files.CourtesyCall
  }, 
  {
    nome: 'Vai Passar x Saudade',
    artita: 'Gaab x Luiz Lins, Konai) DAY & Dreicon',
    file: files.VaiPassarXSaudade
  }, 
]

musicas.map((value, index) => {
  musicas[index].playing = false
})

export default musicas