import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './eventosBonitos.html';

Template.eventosBonitos.onCreated(function eventosBonitosOnCreated() {
    Meteor.subscribe('eventosPublicos');
    Meteor.subscribe('usuarios');
});

Template.eventosBonitos.helpers({
  eventos() {
    return Eventos.find({});
  },
  inscreverDesinscrever(eventoId) {
    const ev = Eventos.findOne(eventoId);
    if (ev.userIds != null && ev.userIds.indexOf(Meteor.userId()) > -1) {
      return 'Desinscrever';
    } else {
      return 'Inscrever';
    }
  },
  inscrito(userId) {
    const inscrito = Meteor.users.findOne(userId);
    if (inscrito != null) {
      return inscrito.username;
    } else {
      return inscrito;
    }
  },
  numeroInscritos(id) {
    const ev = Eventos.findOne(id);
    qtd = ev.userIds.length;
    if (qtd == 0) {
      return 'Nenhum inscrito'
    } else if (qtd == 1) {
      return '1 inscrito'
    } else {
      return ev.userIds.length + ' inscritos';
    }
  }
});

Template.eventosBonitos.events({
  'click .inscrever'() {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Meteor.call('inscreverDesinscrever-evento', this._id, Meteor.userId());
  }
});
