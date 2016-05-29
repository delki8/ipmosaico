import { Template } from 'meteor/templating';

import './eventos.html';

Template.eventos.onCreated(function eventosOnCreated() {
  Meteor.call('podeInserirEventos', Meteor.userId(), function(error, result) {
    Session.set('podeInserirEventos', result);
  });
  if(Session.get('podeInserirEventos')) {
    console.log('posso inserir eventos');
    Meteor.subscribe('eventos');
  } else {
    console.log('nem posso');
    Meteor.subscribe('eventosAtivos');
  }
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
  },
  ativarDesativar(eventoId) {
    const ev = Eventos.findOne(eventoId);
    if (ev.ativo) {
      return 'Desativar';
    } else {
      return 'Ativar';
    }
  },
  podeInserirEventos() {
    return Session.get('podeInserirEventos');
  }
});

Template.eventos.events({
  'click .inscrever'() {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Meteor.call('inscreverDesinscrever-evento', this._id, Meteor.userId());
  },
  'click .ativar'() {
    Meteor.call('ativarDesativar-evento', this._id);
  }
});
