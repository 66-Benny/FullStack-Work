window.onload = function () {
  let time = 0
  var loading = document.getElementsByClassName('loading')
  var needShow1 = document.getElementsByClassName('needShow1')
  var needShow2 = document.getElementsByClassName('needShow2')
  var needShow3 = document.getElementsByClassName('needShow3')
  const neddShowList = [needShow1, needShow2, needShow3]
  window.onscroll = function () {
    //文档内容实际高度（包括超出视窗的溢出部分）
    var scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    )
    //滚动条滚动距离
    var scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    //窗口可视范围高度
    var clientHeight =
      window.innerHeight ||
      Math.min(
        document.documentElement.clientHeight,
        document.body.clientHeight,
      )
    if (
      clientHeight + scrollTop >= scrollHeight &&
      time < neddShowList.length
    ) {
      loadingShowHide(time)
      time++
    }
  }
  function loadingShowHide(time) {
    loading[0].style.display = 'block'
    setTimeout(() => {
      loading[0].style.display = 'none'
      neddShowList[time][0].style.display = 'flex'
    }, 1000)
  }
  var nav1Id = document.getElementById('nav1')
  var nav2Id = document.getElementById('nav2')
  var nav3Id = document.getElementById('nav3')
  var nav4Id = document.getElementById('nav4')
  var nav1 = document.getElementsByClassName('nav1')
  var nav2 = document.getElementsByClassName('nav2')
  var nav3 = document.getElementsByClassName('nav3')
  var nav4 = document.getElementsByClassName('nav4')
  nav1[0].style.display = 'flex'
  nav2[0].style.display = 'none'
  nav3[0].style.display = 'none'
  nav4[0].style.display = 'none'
  nav1Id.addEventListener('click', function () {
    nav1[0].style.display = 'flex'
    nav2[0].style.display = 'none'
    nav3[0].style.display = 'none'
    nav4[0].style.display = 'none'
  })
  nav2Id.addEventListener('click', function () {
    nav1[0].style.display = 'none'
    nav2[0].style.display = 'flex'
    nav3[0].style.display = 'none'
    nav4[0].style.display = 'none'
  })
  nav3Id.addEventListener('click', function () {
    nav1[0].style.display = 'none'
    nav2[0].style.display = 'none'
    nav3[0].style.display = 'flex'
    nav4[0].style.display = 'none'
  })
  nav4Id.addEventListener('click', function () {
    nav1[0].style.display = 'none'
    nav2[0].style.display = 'none'
    nav3[0].style.display = 'none'
    nav4[0].style.display = 'flex'
  })
}
