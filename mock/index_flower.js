const item = [
  {
    title:'鲜花/一心一意',
    price:'￥126',
    img:'http://okmtvwn51.bkt.clouddn.com/img/id1.jpg',
    id:'1'
  },
  {
    title:'鲜花/一往情深',
    price:'￥239',
    img:'http://okmtvwn51.bkt.clouddn.com/img/id2.jpg',
    id:'2'
  },
  {
    title:'鲜花/阳光海岸',
    price:'￥219',
    img:'http://okmtvwn51.bkt.clouddn.com/img/id3.jpg',
    id:'3'
  },
  {
    title:'鲜花/幸福久久',
    price:'￥518',
    img:'http://okmtvwn51.bkt.clouddn.com/img/id4.jpg',
    id:'4'
  },
  {
    title:'鲜花/一心一意',
    price:'￥126',
    img:'http://okmtvwn51.bkt.clouddn.com/img/id1.jpg',
    id:'1'
  },
  {
    title:'鲜花/一往情深',
    price:'￥239',
    img:'http://okmtvwn51.bkt.clouddn.com/img/id2.jpg',
    id:'2'
  },
  {
    title:'鲜花/阳光海岸',
    price:'￥219',
    img:'http://okmtvwn51.bkt.clouddn.com/img/id3.jpg',
    id:'3'
  },
  {
    title:'鲜花/幸福久久',
    price:'￥518',
    img:'http://okmtvwn51.bkt.clouddn.com/img/id4.jpg',
    id:'4'
  }
]

module.exports = {
  api: '/api/indexflower',
  response: function (req, res) {
    res.send(item);
  }
}