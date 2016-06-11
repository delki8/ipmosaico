import { Template } from 'meteor/templating';

import './eventos.html';

Template.eventos.onCreated(function eventosOnCreated() {
  eventoSelecionado = new ReactiveVar();
  podeInserirEventos = new ReactiveVar();
  Meteor.call('podeInserirEventos', Meteor.userId(), function(error, result) {
    podeInserirEventos.set(result);
    if (result) {
      Meteor.subscribe('eventos');
    } else {
      Meteor.subscribe('eventosAtivos');
    }
  });
  Meteor.subscribe('usuarios');
});

Template.eventos.helpers({
  todosEventos() {
    return Eventos.find({});
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
    return podeInserirEventos.get();
  },
  inscritos() {
    if (!eventoSelecionado.get()) {
      return [];
    }
    return Meteor.users
      .find( { _id : { $in : eventoSelecionado.get().userIds } } );
  },
  nomeEventoSelecionado() {
    if (!eventoSelecionado.get()) {
      return [];
    }
    return eventoSelecionado.get().nome;
  }
});

Template.eventos.events({
  'click .ativar'() {
    Meteor.call('ativarDesativar-evento', this._id);
  },
  'click .modal-trigger'() {
    eventoSelecionado.set(this);
    $('#modal1').openModal();
  },
  'click .modal-close'() {
    $('#modal1').closeModal();
  },
  'click .apagar'() {
    Meteor.call('delete-evento', this._id);
  }
});
