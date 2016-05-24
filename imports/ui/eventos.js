import { Template } from 'meteor/templating';

import './eventos.html';

Template.eventos.onCreated(function eventosOnCreated() {
  Meteor.subscribe('eventos');
});


Template.eventos.helpers({
  todosEventos() {
    return Eventos.find({});
  },
  inscreverDesinscrever(eventoId) {
    const ev = Eventos.findOne(eventoId);
    if (ev.userIds != null && ev.userIds.indexOf(Meteor.userId()) > -1) {
      return 'Desinscrever';
    } else {
      return 'Inscrever';
    }
  }
});
