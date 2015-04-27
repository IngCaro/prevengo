Ext.define('myapp.view.registrar.ActividadForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.actividadForm',
  itemId: 'actividadForm',
  requires:['Ext.form.*'],
    
  layout: {
    type: 'fit'
  },
  initComponent: function() {
    var me = this;
    me.items = me.buildItem();
    me.callParent();
  },
  buildItem : function(){
    return [{
    
                    xtype: 'fieldset',
                    x: 10,
                    y: 80,
                    height: 120,
                    width: 650,
                    layout: 'absolute',
                    title: '',
                    items: [
                         {
                            xtype: 'textfield',
                            anchor: '100%',
                            x: 0,
                            y: 45,
                            width: 620,
                            name:'txtDescripcion',
                            id:'txtDescripcion',
                            fieldLabel: 'Descripción:'
                        },  
                        {
                            xtype: 'datefield',
                            x: 0,
                            y: 70,
                            width: 300,
                            fieldLabel: 'Fecha del Tope:'
                        },
                        {
                            xtype: 'datefield',
                            x: 20,
                            y: 70,
                            width: 300,
                            fieldLabel: 'Fecha del Preaviso:'
                        }   

        ]// fin del contenedor
    }]// el del Return
  },
     dockedItems:[{ 
     
            xtype   : 'button',
            iconCls :'icon-limpiar',
            name      :'btnLimpiar',
            text    : 'Limpiar'
          },{
            xtype   : 'button',
            iconCls :'save',
            name    :'btnGuardar',
           // itemId: 'addAvance', 
            text    : 'Guardar',
            disabled:false,
            //formBind: true,
            scope   : this,


          
      }]
     
});