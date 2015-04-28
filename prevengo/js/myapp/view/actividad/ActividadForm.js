Ext.define('myapp.view.actividad.ActividadForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.actividadForm',
    itemId: 'actividadForm',
    requires: ['Ext.form.*'],
    layout: {
        type: 'fit'
    },
    initComponent: function () {
        var me = this;
        me.items = me.buildItem();
        me.callParent();
    },
    buildItem: function () {
        return [
            {
                xtype: 'container',
                x: -10,
                y: -3,
                height: 260,
                width: 560,
                layout: 'absolute',
                items: [
                    {
                        xtype: 'fieldset',
                        x: 20,
                        y: 10,
                        height: 130,
                        width: 517,
                        layout: 'absolute',
                        title: '',
                        items: [
                            {
                                xtype: 'textareafield',
                                x: 10,
                                y: 10,
                                width: 470,
                                fieldLabel: 'Descripción',
                                name:'txtDescripcion'
                            },
                            {
                                xtype: 'datefield',
                                x: 10,
                                y: 90,
                                width: 220,
                                fieldLabel: 'Fecha Tope',
                                name:'dtfFechaT'
                            },
                            {
                                xtype: 'datefield',
                                x: 260,
                                y: 80,
                                width: 220,
                                fieldLabel: 'Fecha de Preaviso:',
                                name:'dtfFechaPA'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        x: 20,
                        y: 150,
                        height: 80,
                        width: 517,
                        layout: 'absolute',
                        title: '',
                        items: [
                            {
                                xtype: 'checkboxfield',
                                x: 10,
                                y: 10,
                                fieldLabel: 'Esta actividad depende de otra para iniciar?',
                                boxLabel: 'Si',
                                name:'cbfDepende'
                            },
                            {
                                xtype: 'combobox',
                                x: 200,
                                y: 10,
                                fieldLabel: 'Actividad:',
                                name:'cmbActividadDepende'
                            }
                        ]
                    }

                ]


            }]// el del Return
    },
    dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            height: 40,
            width: '100%',
            items: [{
                    xtype: 'tbfill'
                }, {
                    xtype: 'button',
                    iconCls: 'icon-limpiar',
                    name: 'btnLimpiar',
                    text: 'Limpiar'
                }, {
                    xtype: 'button',
                    iconCls: 'save',
                    name: 'btnGuardar',
                    // itemId: 'addAvance', 
                    text: 'Guardar',
                    disabled: false,
                    //formBind: true,
                    scope: this,
                }]
        }]

});









