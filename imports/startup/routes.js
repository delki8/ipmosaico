FlowRouter.route('/', {
  name: 'home',
  action: function() {
    FlowRouter.go('Evento.bonito');
  }
});

FlowRouter.route('/eventos/inscricoes', {
  name: 'Evento.bonito',
  action: function(params, queryParams) {
    BlazeLayout.render('corpo', {nome: 'eventosBonitos'});
  }
});

FlowRouter.route('/evento', {
  name: 'Evento.list',
  action: function(params, queryParams) {
    BlazeLayout.render('corpo', {nome: 'eventos'});
  }
});

FlowRouter.route('/usuario/list', {
  name: 'Usuario.list',
  action: function(params, queryParams) {
    BlazeLayout.render('corpo', {nome: 'usuarios'});
  }
});
