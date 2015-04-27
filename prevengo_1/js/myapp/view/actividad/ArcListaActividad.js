Ext.define('myapp.view.actividad.ArcListaActividad', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.arcPlandeAccion',
    width: 300,
    layout: {
        type: 'auto'
    },
    collapsible: false,
    hideCollapseTool: false,
    conCls: 'sitemap',
    title: 'Plan de Acción', 
    layout:'accordion',
    layoutConfig:{
        titleCollapse: false,
        animate: true,
        activeOnTop: true,
        width: 100,
        minSize: 5,
        maxSize: 400
    }
});