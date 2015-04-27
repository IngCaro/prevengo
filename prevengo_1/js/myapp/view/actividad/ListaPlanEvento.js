Ext.define('myapp.view.registrar.ListaPlanEvento', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaPlanEvento',
    itemId: 'listaPlanEvento',
    requires: [
        'Ext.selection.CellModel',
        'Ext.selection.CheckboxModel',
        'Ext.ux.ajax.SimManager',
    ],
    features: [ ],
    store: Ext.create('myapp.store.actividad.ActividadEventoStore'),
    
    emptyText: 'No hay Plan de Acción registrado',
    columnLines: true,
    initComponent: function () {
        var me = this;
        me.columns = me.buildColumns();
        me.dockedItems = me.buildDockedItems();
        me.callParent();
    },
    buildColumns: function () {
        return [ {
                dataIndex: 'id',
                hidden: true,
                flex: 0.2,
                text: '',
               
            }, {
                dataIndex: 'descripcion',
                flex: 1,
                text: 'Descripcion',
              
            },  
            ]
    },
    buildDockedItems: function () {
        return [{
                xtype: 'toolbar',
                dock: 'top',
                store: this.store,
                displayInfo: true,
                  items:[{
                        xtype: 'button',
                        name: 'btnNuevoPlan',
                        text: 'Nuevo',
                        iconCls: 'accept'
                    },
                    {
                        xtype: 'button',
                        name: 'btnEditarPlan',
                        text: 'Editar',
                        iconCls: 'edit'
                    }]
            }];
    }
});