Ext.define('myapp.controller.actividad.ListaActividadController', {
    extend: 'Ext.app.Controller',
    views: ['actividad.ListaActividad'
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
                    
            Ext.MessageBox.show({ title: 'Informaci&oacute;n',
            msg: 'Plan de Accion',
            buttons: Ext.MessageBox.OK, icon: Ext.MessageBox.INFO });       
                             
        }else{
            Ext.MessageBox.show({ title: 'Informaci&oacute;n',
            msg: 'Debe seleccionar por lo menos un Avance',
            buttons: Ext.MessageBox.OK, icon: Ext.MessageBox.INFO });
        }
   
                        
              
    },// fin de la function 



});