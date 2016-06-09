import '../imports/startup/accounts-config.js';
import '../imports/ui/corpo.js';
import '../imports/startup/routes.js';

import { Eventos } from '../imports/api/EventoSchema.js'

Template.registerHelper("formatDate", function (date) {
    return moment(date).format('DD/MM/YYYY');
});
