import './userRole.html';

Template.usuarios.onCreated(function bodyOnCreated() {
  Meteor.subscribe('usuarios');
  Meteor.subscribe('roles');
});

Template.userRole.helpers({
  checkedRole(userId, role) {
    const user = Meteor.users.findOne(userId);
    if (user.roles != null && user.roles.indexOf(role) > -1) {
      return 'checked';
    } else {
      return '';
    }
  }
});

Template.userRole.events({
  'click .roleCheck'(event, template) {
    if (event.target.checked) {
      Meteor.call('adicionar-role', this.userId, this.roleName);
    } else {
      Meteor.call('remover-role', this.userId, this.roleName);
    }
  }
});
