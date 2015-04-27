Ext.define('myapp.view.registrar.ListaActividad', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaActividad',
    itemId: 'listaActividad',
    requires: [
        'Ext.selection.CellModel',
        'Ext.selection.CheckboxModel',
        'Ext.ux.ajax.SimManager',
        'Ext.ux.grid.FiltersFeature',
    ],
    features: [ ],
    store: Ext.create('myapp.store.actividad.ActividadArcStore'),
    selType: 'checkboxmodel',
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
                items: {
                    xtype: 'textfield',
                    flex: 1,
                    margin: 2,
                    enableKeyEvents: true
                
                }
            }, {
                dataIndex: 'descripcion',
                flex: 1,
                text: 'Descripcion',
                items: {
                    xtype: 'textfield',
                    flex: 1,
                    margin: 2,
                    enableKeyEvents: true
                   
                }
            },  
            ]
    },
    buildDockedItems: function () {
        return [{
                xtype: 'pagingtoolbar',
                dock: 'top',
                store: this.store,
                displayInfo: true,
                  items: [{
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