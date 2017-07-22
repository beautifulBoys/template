<template>
<div class="tree-box">
  <ul>
    <li v-for="item in data">
      <span v-if="item.child">{{item.text}}</span>
      <ul>
        <li v-for="item1 in data.child">
          <span v-if="item1.child">{{item.text}}</span>
          <ul>
            <li v-for="item2 in item1.child">
              <span v-if="item2.child">{{item2.text}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      data: [{
          text: '研发平台',
          child: [{
              text: '金融平台研发部'
            },
            {
              text: '支付结算研发部'
            }
          ]
        },
        {
          text: '运营平台',
          child: [{
            text: '商业网站',
            child: [{
                text: '万达基金会'
              },
              {
                text: '飞凡互助'
              }
            ]
          }]
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.tree-box {
    width: 100%;
    height: 100%;
}
</style>
