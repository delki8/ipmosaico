Eventos = new Mongo.Collection("eventos");
Eventos.attachSchema(new SimpleSchema({
  nome: {
    type: String,
    label: "Nome",
    max: 100
  },
  dataInicio: {
    type: Date,
    label: "Data Início"
  },
  dataFim: {
    type: Date,
    label: "Data Final",
    optional: true
  },
  urlImagem: {
    type: String,
    label: "Url da Imagem",
    optional: true
  },
  usersIds: {
  	type: [String],
  	optional: true,
    autoform: {
      type: "hidden",
      label: false
    }
  }
}));
