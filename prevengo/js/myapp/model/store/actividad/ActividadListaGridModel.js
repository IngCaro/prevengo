Ext.define('myapp.model.store.actividad.ActividadListaGridModel', { 
   extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        { name: 'id'},
        { name: 'evento'},
        { name: 'descripcion'},
        { name: 'fecha'},
        {name: 'activ'},
        {name: 'descripEvento'},
    ] 
});