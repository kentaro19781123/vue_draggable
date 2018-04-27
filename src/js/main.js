import Vue from 'vue'
import draggable from 'vuedraggable'
import appOptions from './app.vue'
var app = new Vue(appOptions).$mount('#app');

//import draggOptions from './draggable.vue'
//var dragg = new Vue(draggOptions);

var vm = new Vue({
    el: "#main",
    data: {
        items:[
              {no:1, name:'キャベツ', categoryNo:'1'},
              {no:2, name:'ステーキ', categoryNo:'2'},
              {no:3, name:'リンゴ', categoryNo:'3'},
              {no:4, name:'冷蔵庫', categoryNo:'4'},
              {no:5, name:'きゅうり', categoryNo:'1'},
              {no:6, name:'ハンバーグ', categoryNo:'2'},
              {no:7, name:'バナナ', categoryNo:'3'},
              {no:8, name:'PS4', categoryNo:'4'},
        ],
    },
    methods:{
        onEnd: function(evt){
        },
        checkMove: function(evt,originalEvent){
            // リンゴだったらドラッグできない
             return (evt.draggedContext.element.name!=='リンゴ');
        },


        insertItem: function(){
          var self = this;
          var newNo = 1;
          if(self.items.concat().length > 0)
            newNo =  Math.max.apply(null, self.items.concat().map(function(item){return item.no;})) +1;

          this.items.push(
            {
              no:　newNo,
              name:'バナナ'+newNo,
              categoryNo:'3'
            }
          );
          self.count =  self.count+1;
        },
        deleteItem: function(item, index){
            this.items.splice(index, 1);
        },
    },
    components: {
            draggable,
        }
});
