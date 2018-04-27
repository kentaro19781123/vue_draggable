<style>
.p20{
  padding:20px
}

.normal {
    background-color: grey;
}

.dragArea{
     min-height: 10px;
}

.sortable-chosen {
    opacity: 0.7;
    background-color:#dcdcdc;
}
.sortable-ghost {
    background-color:#dcdcdc;
}
</style>

<template>
  <div id="main">
      <div class="p20">
        <button class="btn btn-info" type="button" v-on:click="insertItem">リスト追加</button>
     </div>
      <ul class="list-group drag p20">
        <draggable class="dragArea"
                   @end="onEnd"
                   :move="checkMove">
        <li class="list-group-item"
            v-for="item, index in items"
            :key="item.no">
            <label>
            {{item.name}}-(No.{{item.no}})
          </label>
          <p><span v-on:click="deleteItem(item, index)">削除</span></p>
        </li>
        </draggable>
      </ul>
  </div>
</template>

<script>
//module.exports = {
export default {
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

}
</script>
