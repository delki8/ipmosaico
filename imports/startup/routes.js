FlowRouter.route('/', {
  name: 'home',
  action: function() {
    console.log('Im at home again ');
  }
});

FlowRouter.route('/evento/list', {
  name: 'Evento.list',
  action: function(params, queryParams) {
    BlazeLayout.render('corpo', {nome: 'eventos'});
  }
});

FlowRouter.route('/evento/new', {
  name: 'Evento.new',
  action: function(params, queryParams) {
    BlazeLayout.render('corpo', {nome: 'evento'});
  }
});

FlowRouter.route('/usuario/list', {
  name: 'Usuario.list',
  action: function(params, queryParams) {
    BlazeLayout.render('corpo', {nome: 'usuarios'});
  }
});
