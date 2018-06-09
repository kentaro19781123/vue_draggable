import Vue from 'vue'
import draggable from 'vuedraggable'

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
          {type:1, name:'キャベツ', categoryNo:'1',text:'text1',img:'',img2:'',showImg:false,showInputImg:"true",showText:false,showInputText:"true"},
          {type:1, name:'きゅうり', categoryNo:'1',text:'text2',img:'',img2:'',showImg:false,showInputImg:"true",showText:false,showInputText:"true"},
          {type:2, name:'にんじん', categoryNo:'1',text:'text3',img:'',img2:'',showImg:false,showInputImg:"true",showText:false,showInputText:"true"},
          {type:3, name:'トマト', categoryNo:'1',text:'text4',img:'',img2:'',showImg:false,showInputImg:"true",showText:false,showInputText:"true"}
        ],
        items2:[
          {type:2, name:'２のステーキ', categoryNo:'2',text:'text1',showImg:false,showInputImg:"true",showText:false,showInputText:"true"}
        ],
        items3:[
          {type:3, name:'３のステーキ', categoryNo:'3',text:'text1',img:'',img2:'',showImg:false,showInputImg:"true",showText:false,showInputText:"true"}
        ],
        newNo: 0
    },
    methods:{
        insertItem2: function(){
          var self = this;
          var no = 0;

          // if(self.items.concat().length > 0){
          //     no =  Math.max.apply(null, self.items.concat().map(function(item){return item.no;})) +1;
          //
          //     self.newNo = self.newNo < no ? no:self.newNo;
          // }
          // if(self.items2.concat().length > 0){
          //     no =  Math.max.apply(null, self.items2.concat().map(function(item){return item.no;})) +1;
          //
          //     self.newNo = self.newNo < no ? no:self.newNo;
          // }
          // if(self.items3.concat().length > 0){
          //     no =  Math.max.apply(null, self.items3.concat().map(function(item){return item.no;})) +1;
          //
          //     self.newNo = self.newNo < no ? no:self.newNo;
          // }

          this.items2.push(
            {
              type:2,
              name:'追加リスト',
              categoryNo:'2',
              text:'text',
              showImg:false,
              showInputImg:"true",
              showText:false,
              showInputText:"true"
            }
          );
          // this.items3.push(
          //   {
          //     no:this.newNo,
          //     name:'追加リスト'+ this.newNo,
          //     categoryNo:'3'
          //   }
          // );

        },
        insertItem3: function(){
          var self = this;
          var no = 0;

          // if(self.items.concat().length > 0){
          //     no =  Math.max.apply(null, self.items.concat().map(function(item){return item.no;})) +1;
          //
          //     self.newNo = self.newNo < no ? no:self.newNo;
          // }
          // if(self.items2.concat().length > 0){
          //     no =  Math.max.apply(null, self.items2.concat().map(function(item){return item.no;})) +1;
          //
          //     self.newNo = self.newNo < no ? no:self.newNo;
          // }
          // if(self.items3.concat().length > 0){
          //     no =  Math.max.apply(null, self.items3.concat().map(function(item){return item.no;})) +1;
          //
          //     self.newNo = self.newNo < no ? no:self.newNo;
          // }

          // this.items2.push(
          //   {
          //     no:this.newNo,
          //     name:'追加リスト'+ this.newNo,
          //     categoryNo:'2'
          //   }
          // );
          this.items3.push(
            {
              type:3,
              name:'追加リスト',
              categoryNo:'3',
              text:'text',
              img:'',
              img2:'',
              showImg:false,
              showInputImg:"true",
              showText:false,
              showInputText:"true"
            }
          );

        },
        doActionImgInput: function (item, index) {
          var self = this;
          var itemImg2 = self.items[index].img2;
          self.items[index].img = '<img src="' + itemImg2 + '">';
          self.items[index].showImg = true;
          self.items[index].showInputImg = false;
        },
        doActionImgShow: function (item, index) {
          var self = this;
          self.items[index].showImg = false;
          self.items[index].showInputImg = true;
        },
        doActionTextInput: function (item, index) {
          var self = this;
          self.items[index].showText = true;
          self.items[index].showInputText = false;
        },
        doActionTextShow: function (item, index) {
          var self = this;
          self.items[index].showText = false;
          self.items[index].showInputText = true;
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
