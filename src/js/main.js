import Vue from 'vue'
import draggable from 'vuedraggable'
import appOptions from './app.vue'
var app = new Vue(appOptions).$mount('#app');

//import draggOptions from './draggable.vue'
//var dragg = new Vue(draggOptions);

// var vm = new Vue({
//     el: "#main",
//     data: {
//         items:[
//               {no:1, name:'キャベツ', categoryNo:'1'},
//               {no:2, name:'ステーキ', categoryNo:'2'},
//               {no:3, name:'リンゴ', categoryNo:'3'},
//               {no:4, name:'冷蔵庫', categoryNo:'4'},
//               {no:5, name:'きゅうり', categoryNo:'1'},
//               {no:6, name:'ハンバーグ', categoryNo:'2'},
//               {no:7, name:'バナナ', categoryNo:'3'},
//               {no:8, name:'PS4', categoryNo:'4'},
//         ],
//     },
//     methods:{
//         onEnd: function(evt){
//         },
//         checkMove: function(evt,originalEvent){
//             // リンゴだったらドラッグできない
//              return (evt.draggedContext.element.name!=='リンゴ');
//         },
//
//
//         insertItem: function(){
//           var self = this;
//           var newNo = 1;
//           if(self.items.concat().length > 0)
//             newNo =  Math.max.apply(null, self.items.concat().map(function(item){return item.no;})) +1;
//
//           this.items.push(
//             {
//               no:　newNo,
//               name:'バナナ'+newNo,
//               categoryNo:'3'
//             }
//           );
//           self.count =  self.count+1;
//         },
//         deleteItem: function(item, index){
//             this.items.splice(index, 1);
//         },
//     },
//     components: {
//             draggable,
//         }
// });



// var two = new Vue({
//   el: "#two",
//   components: {
//       draggable,
//   },
//   data() {
//     return {
//       tasks: [
//         [
//           {no:1, name:'キャベツ', categoryNo:'1'},
//           {no:2, name:'ニンジン', categoryNo:'1'},
//           {no:3, name:'ピーマン', categoryNo:'1'},
//           {no:4, name:'ジャガイモ', categoryNo:'1'}
//         ],
//         [
//           {no:1, name:'キャベツ', categoryNo:'1'},
//           {no:2, name:'人参', categoryNo:'1'},
//           {no:3, name:'piment', categoryNo:'1'},
//           {no:4, name:'馬鈴薯', categoryNo:'1'}
//         ]
//       ]
//     }
//   },
//   methods:{
//     insertItem: function(){
//       var self = this;
//       var newNo = 1;
//       if(self.tasks[1].concat().length > 0)
//         newNo =  Math.max.apply(null, self.tasks[1].concat().map(function(item){return item.no;})) +1;
//
//       this.tasks[1].push(
//         {
//           no:　newNo,
//           name:'バナナ'+newNo,
//           categoryNo:'3'
//         }
//       );
//       self.count =  self.count+1;
//     },
//     // deleteItem: function(item, index){
//     //     this.tasks[0].splice(index, 1);
//     //     //this.tasks.$remove(item);
//     // },
//     deleteItem: function(item, index, group){
//         switch (group) {
//             case '':
//                 var ITEMS = this.items;
//                 break;
//             case '2':
//                 var ITEMS = this.items2;
//                 break;
//         }
//         ITEMS.splice(index, 1);
//     }
//   }
//
// });



var vm = new Vue({
    el: "#contents",
    components: {
        draggable,
    },
    data: {
        items:[
              {no:1, name:'キャベツ', categoryNo:'1'},
              {no:5, name:'きゅうり', categoryNo:'1'},
              {no:9, name:'にんじん', categoryNo:'1'},
              {no:10, name:'トマト', categoryNo:'1'}
        ],
        items2:[
            {no:2, name:'ステーキ', categoryNo:'2'},
            {no:6, name:'ハンバーグ', categoryNo:'2'},
            {no:11, name:'とんかつ', categoryNo:'2'},
            {no:12, name:'からあげ', categoryNo:'2'}
        ],
        items3:[
            {no:2, name:'ステーキ', categoryNo:'3'},
            {no:6, name:'ハンバーグ', categoryNo:'3'},
            {no:11, name:'とんかつ', categoryNo:'3'},
            {no:12, name:'からあげ', categoryNo:'3'}
        ],

        newNo: 0
    },
    methods:{
        insertItem: function(){
          var self = this;
          var no = 0;

          if(self.items.concat().length > 0){
              no =  Math.max.apply(null, self.items.concat().map(function(item){return item.no;})) +1;

              self.newNo = self.newNo < no ? no:self.newNo;
          }
          if(self.items2.concat().length > 0){
              no =  Math.max.apply(null, self.items2.concat().map(function(item){return item.no;})) +1;

              self.newNo = self.newNo < no ? no:self.newNo;
          }
          if(self.items3.concat().length > 0){
              no =  Math.max.apply(null, self.items3.concat().map(function(item){return item.no;})) +1;

              self.newNo = self.newNo < no ? no:self.newNo;
          }

          this.items2.push(
            {
              no:this.newNo,
              name:'追加リスト'+ this.newNo,
              categoryNo:'5'
            }
          );
          this.items3.push(
            {
              no:this.newNo,
              name:'追加リスト'+ this.newNo,
              categoryNo:'5'
            }
          );

        },
        deleteItem: function(item, index, group){
            switch (group) {
                case '':
                    var ITEMS = this.items;
                    break;
                case '2':
                    var ITEMS = this.items2;
                    break;
                case '3':
                    var ITEMS = this.items3;
                    break;
            }

            ITEMS.splice(index, 1);
        },
    },
    computed: {
        myList: {
            get() {
                return this.items;
            },
            set(value) {
                this.items = value;
            }
        },
        myList2: {
            get() {
                return this.items2;
            },
            set(value) {
                this.items2 = value;
            }
        },
        myList3: {
            get() {
                return this.items3;
            },
            set(value) {
                this.items3 = value;
            }
        }
    }
});
