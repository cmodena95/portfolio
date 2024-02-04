require "open-uri"


# user
User.destroy_all
User.create(
  email: "dkflsd9@gmail.com",
  password: "Newzealand1!"
)


# illustrations
Illustration.destroy_all
i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/1.png'), filename: "1", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/1-1.png'), filename: "1-1", content_type: "image/png")
i.save


i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/2.png'), filename: "2", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/2-1.png'), filename: "2-1", content_type: "image/png")
i.save


i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/3.png'), filename: "3", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/3-1.png'), filename: "3-1", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/3-2.png'), filename: "3-2", content_type: "image/png")
i.save


i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/4.png'), filename: "4", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/4-1.png'), filename: "4-1", content_type: "image/png")
i.save


i = Illustration.new(
  description: "I told her my dreams.
  I told her about the big snake of the world that was coiled in the earth like a worm in an apple and would some day nudge up a hill to be there - after known as snake hill and fold out upon the plain, a hundred miles long, and devouring as it went along. I told her this snake was called satan.
  'What's going to happen?' she squealed; meanwhile she held me tight.
  'A saint called Doctor Sax will destroy it with secret herbs which he is at this very moment cooking up in his underground shack somewhere in america. It may also be disclosed that the snake is just a husk of doves; when the snake dies great clouds of seminal-gray doves will flutter out and bring tidings of peace around the world.
  
  From 'On the Road' by Jack Kerouac"
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/5.png'), filename: "5", content_type: "image/png")
i.save


i = Illustration.new(
  description: "",
  dimension: "H"
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/6.png'), filename: "6", content_type: "image/png")
i.save


i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/8.png'), filename: "8", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/8-1.png'), filename: "8-1", content_type: "image/png")
i.save


i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/9.png'), filename: "9", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/9-1.png'), filename: "9-1", content_type: "image/png")
i.save


i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/10.png'), filename: "10", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/10-1.png'), filename: "10-1", content_type: "image/png")
i.save


i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/11.png'), filename: "11", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/11-1.png'), filename: "11-1", content_type: "image/png")
i.save


i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/12.png'), filename: "12", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/12-1.png'), filename: "12-1", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/12-2.png'), filename: "12-2", content_type: "image/png")
i.save


i = Illustration.new(
  description: "O Criador deixou a humanidade aqui na Terra
  E foi pra algum outro lugar do cosmos
  Um dia, ele se lembrou de nós e disse
  'Ah, eu deixei minhas criaturas lá na Terra
  Preciso ver o que elas se tornaram'
  Mas, enquanto fazia esse movimento incrível de vir até aqui nos ver
  Ele pensou
  'E se eles tiverem se tornado algo pior do que eu posso conceber?
  O melhor seria não ter um encontro pessoal com eles
  Vou fazer o seguinte, vou me transformar em uma outra criatura
  Para ver as minhas criaturas'
  Ele se transformou num tamanduá e saiu pela campina
  Em certo momento, um grupo de caçadores, munidos de bordunas e laços
  Se encostaram numa paisagem, avançaram sobre ele, o prenderam
  E levaram pro acampamento com a intenção óbvia de comê-lo
  Duas crianças gêmeas, que observavam a cena
  Evitaram que ele fosse levado para a fogueira
  Ele então se revelou para os meninos
  Que antes que os adultos descobrissem, acobertaram a sua fuga
  Do lado de uma colina, os meninos gritaram
  'Avô, avô, que você achou da gente, das suas criaturas?'
  E Deus respondeu 'mais ou menos!'
  
  'É Tudo Pra Ontem', Emicida
  "
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/13.png'), filename: "13", content_type: "image/png")
i.save




i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/14.png'), filename: "14", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/14-1.png'), filename: "14-1", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/14-2.png'), filename: "14-2", content_type: "image/png")
i.save


i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/15.png'), filename: "15", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/15-1.png'), filename: "15-1", content_type: "image/png")
i.save


i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/16.png'), filename: "16", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/16-1.png'), filename: "16-1", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/16-2.png'), filename: "16-2", content_type: "image/png")
i.save


i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/17.png'), filename: "17", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/17-1.png'), filename: "17-1", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/17-2.png'), filename: "17-2", content_type: "image/png")
i.save


i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/18.png'), filename: "18", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/18-1.png'), filename: "18-1", content_type: "image/png")
i.save


i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/19.png'), filename: "19", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/19-1.png'), filename: "19-1", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/19-2.png'), filename: "19-2", content_type: "image/png")
i.save


i = Illustration.new(
  description: ""
)
i.main_photo.attach(io: File.open('app/assets/images/drawings/20.png'), filename: "20", content_type: "image/png")
i.photos.attach(io: File.open('app/assets/images/drawings/20-1.png'), filename: "20-1", content_type: "image/png")
i.save