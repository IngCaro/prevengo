Ext.define('myapp.controller.actividad.ListaPlanEventoController', {
    extend: 'Ext.app.Controller',
    views: ['actividad.WinActividad',
             'actividad.ListaPlanEvento'
            ],
     requires: [
        'myapp.util.Util'
    ],
    refs: [
           {
              ref: 'ListaPlanEvento',
              selector: 'listaPlanEvento'
             }
            
           ],
    
    init: function(application) {
        this.control({
            "listaPlanEvento button[name=btnNuevoPlan]":{
                click: this.onClickNuevoPlan
            }
        }); 
    },   
    onClickNuevoPlan: function(button, e, options)
    {   
           Ext.MessageBox.show({ title: 'Informaci&oacute;n',
            msg: ' Avance',
            buttons: Ext.MessageBox.OK, icon: Ext.MessageBox.INFO });
           
    }, 
});