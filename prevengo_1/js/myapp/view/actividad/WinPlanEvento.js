Ext.define('myapp.view.actividad.WinPlanEvento', {
extend: 'Ext.window.Window',
  alias: 'widget.winPlanEvento',
  itemId: 'winPlanEvento',
  title:'Actividad',
  height: 350,
  width: 250,
  modal:true,
  requires: [
   'myapp.view.actividad.ListaPlanEvento'
  ],
  layout: {
   	type: 'fit'
  },
  initComponent: function() {
    var me = this;
    me.items = me.buildItem();
    me.dockedItems = me.buildDockedItems();
    me.callParent();
  },
  buildItem : function(){
    return [{
      xtype: 'listaPlanEvento',
    }]
  },
  buildDockedItems : function(){
    return [{
      xtype : 'toolbar',
      flex  : 1,
      dock  : 'bottom',
      items: []
    }]
  }
});