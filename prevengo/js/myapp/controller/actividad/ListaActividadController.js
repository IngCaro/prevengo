Ext.define('myapp.controller.actividad.ListaActividadController', {
    extend: 'Ext.app.Controller',
    views: ['actividad.ListaActividad',
             'actividad.WinPlanEvento'
            ],
     requires: [
        'myapp.util.Util'
       
        
    ],
   
    refs: [
           {
              ref: 'ListaActividad',
              selector: 'listaActividad'
             }
            
           ],
    
    init: function(application) {
        this.control({
            "listaActividad button[name=btnVerPlan]":{
                click: this.onClickVerPlan
            }
        }); 
    },   

    onClickVerPlan:function (button, e, options) {
         var grid = this.getListaActividad();
         record = grid.getSelectionModel().getSelection();
        // record = Ext.util.JSON.encode(record);
        if(record[0]){

           var win = Ext.create('myapp.view.actividad.WinPlanEvento'); 
            win.show();
          
                             
        }else{
            Ext.MessageBox.show({ title: 'Informaci&oacute;n',
            msg: 'Debe seleccionar por lo menos un Evento',
            buttons: Ext.MessageBox.OK, icon: Ext.MessageBox.INFO });
        }
       },// fin de la function





});



