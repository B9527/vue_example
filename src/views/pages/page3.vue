<template>
<div>
    <div>
        <ul>
            <li v-for="site in sites" :key="site">{{site}}</li>
        </ul>
    </div>
    <div class="obj">
        <ul>
            <li v-for="(value) in object" :key="value">{{ value }}</li>
        </ul>
    </div>
    <div>
        <ol>
            <li v-for="obj in objlist" :key="obj.name">{{ obj.name }}</li>
        </ol>
    </div>
</div>
</template>
<script>
export default {
  data(){
      return {
           object: {
                2: 'BestMind',
                1: 'http://www.baidu.com',
                0: '学的不仅是技术，更是梦想！'
            },
            sites: [
                "site1", "site2", "site3" 
            ],
            objlist: [
                { name: 'BestMind3',},
                { name: 'BestMind2',},
                { name: 'BestMind1',}
            ]
      }
  }
}
</script>
<style scoped>
.obj{
    background-color:aliceblue;
}
</style>
