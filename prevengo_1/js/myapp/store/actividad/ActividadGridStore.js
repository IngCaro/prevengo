Ext.define('myapp.store.actividad.ActividadGridStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    fields: ['id', 'evento', 'fecha'],
    data  : [
        {id: '0', evento: 'Final', fecha:'0000-00-00'},
        {id: '1', evento: 'Parcial', fecha:'0000-00-00'}
    ]
});