<template>
  <div class="my">
    <v-footer></v-footer>
    <div id="app1" class="mui-views">
      <div class="mui-view">
        <div class="mui-navbar">
        </div>
        <div class="mui-pages">
        </div>
      </div>
    </div>
    <!--页面主结构结束-->
    <!--单页面开始-->
    <div id="setting" class="mui-page">
      <!--页面标题栏开始-->
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
          <span class="mui-icon mui-icon-left-nav"></span>
        </button>
        <h1 class="mui-center mui-title">设置</h1>
      </div>
      <!--页面标题栏结束-->
      <!--页面主内容区开始-->
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell mui-media">
                <a class="mui-navigate-right" href="#account">
                  <img class="mui-media-object mui-pull-left head-img" id="head-img" src="../../static/images/logo1.png">
                  <div class="mui-media-body">
                    Hello MUI
                    <p class='mui-ellipsis'>账号:hellomui</p>
                  </div>
                </a>
              </li>
            </ul>
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell">
                <a href="#account" class="mui-navigate-right">账号与安全</a>
              </li>
            </ul>
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell">
                <a href="#notifications" class="mui-navigate-right">新消息通知</a>
              </li>
              <li class="mui-table-view-cell">
                <a href="#privacy" class="mui-navigate-right">隐私</a>
              </li>
              <li class="mui-table-view-cell">
                <a href="#general" class="mui-navigate-right">通用</a>
              </li>
            </ul>
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell">
                <a href="#about" class="mui-navigate-right">关于MUI <i class="mui-pull-right update">V3.1.0</i></a>
              </li>
            </ul>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell" style="text-align: center;">
                <a>退出登录</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--页面主内容区结束-->
    </div>
    <!--单页面结束-->
    <div id="account" class="mui-page">
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
          <span class="mui-icon mui-icon-left-nav"></span>设置
        </button>
        <h1 class="mui-center mui-title">账号与安全</h1>
      </div>
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                <a id="head" class="mui-navigate-right">头像
                  <span class="mui-pull-right head">
									<img class="head-img mui-action-preview" id="head-img1" src=""/>
								</span>
                </a>
              </li>
              <li class="mui-table-view-cell">
                <a>姓名<span class="mui-pull-right">Hbuilder</span></a>
              </li>
              <li class="mui-table-view-cell">
                <a>HBuilder账号<span class="mui-pull-right">hbuilder@dcloud.io</span></a>
              </li>
            </ul>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                <a>QQ号<span class="mui-pull-right">88888888</span></a>
              </li>
              <li class="mui-table-view-cell">
                <a>手机号<span class="mui-pull-right">18601234567</span></a>
              </li>
              <li class="mui-table-view-cell">
                <a>邮箱地址<span class="mui-pull-right">hbuilder@dcloud.io</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="notifications" class="mui-page">
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
          <span class="mui-icon mui-icon-left-nav"></span>设置
        </button>
        <h1 class="mui-center mui-title">新消息通知</h1>
      </div>
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                <a>接收新消息通知<span class="mui-pull-right">已开启</span></a>
              </li>
            </ul>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                通知显示消息详情
                <div class="mui-switch mui-active mui-switch-mini">
                  <div class="mui-switch-handle"></div>
                </div>
              </li>
            </ul>
            <div class="mui-content-padded">
              <p>若关闭，当收到新消息时，通知提示将不显示发信人和内容摘要</p>
            </div>

            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell">
                <a href="#notifications_disturb" class="mui-navigate-right">功能消息免打扰</a>
              </li>
            </ul>
            <div class="mui-content-padded">
              <p>设置系统功能消息提示声音和震动的时段</p>
            </div>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                <a>接收新消息通知<span class="mui-pull-right">已开启</span></a>
              </li>
            </ul>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                声音
                <div class="mui-switch mui-active mui-switch-mini">
                  <div class="mui-switch-handle"></div>
                </div>
              </li>
              <li class="mui-table-view-cell">
                震动
                <div class="mui-switch mui-active mui-switch-mini">
                  <div class="mui-switch-handle"></div>
                </div>
              </li>
            </ul>
            <div class="mui-content-padded">
              <p>当HelloMUI在运行时，你可以设置是否需要声音或者震动</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div id="notifications_disturb" class="mui-page">
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
          <span class="mui-icon mui-icon-left-nav"></span>新消息通知
        </button>
        <h1 class="mui-center mui-title">功能消息免打扰</h1>
      </div>
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <ul class="mui-table-view mui-table-view-radio">
              <li class="mui-table-view-cell">
                <a class="mui-navigate-right">开启</a>
              </li>
              <li class="mui-table-view-cell">
                <a class="mui-navigate-right">只在夜间开启</a>
              </li>
              <li class="mui-table-view-cell">
                <a class="mui-navigate-right">关闭</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="privacy" class="mui-page">
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
          <span class="mui-icon mui-icon-left-nav"></span>设置
        </button>
        <h1 class="mui-center mui-title">隐私</h1>
      </div>
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <ul class="mui-table-view">
              <li class="mui-table-view-divider">通讯录</li>
              <li class="mui-table-view-cell">
                加我为朋友时需要验证
                <div class="mui-switch mui-active mui-switch-mini">
                  <div class="mui-switch-handle"></div>
                </div>
              </li>
            </ul>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                向我推荐QQ好友
                <div class="mui-switch mui-switch-mini">
                  <div class="mui-switch-handle"></div>
                </div>
              </li>
              <li class="mui-table-view-cell">
                通过QQ号搜索到我
                <div class="mui-switch mui-switch-mini">
                  <div class="mui-switch-handle"></div>
                </div>
              </li>
            </ul>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                可通过手机号搜索到我
                <div class="mui-switch mui-active mui-switch-mini">
                  <div class="mui-switch-handle"></div>
                </div>
              </li>
              <li class="mui-table-view-cell">
                向我推荐通讯录朋友
                <div class="mui-switch mui-switch-mini">
                  <div class="mui-switch-handle"></div>
                </div>
              </li>
              <li class="mui-table-view-divider">开启后，为你推荐已经开通HBuilder的手机联系人</li>
            </ul>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                通过HBuilder账号搜索到我
                <div class="mui-switch mui-active mui-switch-mini">
                  <div class="mui-switch-handle"></div>
                </div>
              </li>
              <li class="mui-table-view-divider">关闭后，其他用户将不能通过HBuilder号搜索到你</li>
            </ul>

          </div>
        </div>
      </div>
    </div>
    <div id="general" class="mui-page">
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
          <span class="mui-icon mui-icon-left-nav"></span>设置
        </button>
        <h1 class="mui-center mui-title">通用</h1>
      </div>
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                多语言
              </li>
            </ul>

            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                听筒模式
                <div class="mui-switch mui-switch-mini">
                  <div class="mui-switch-handle"></div>
                </div>
              </li>
            </ul>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                功能
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="about" class="mui-page">
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
          <span class="mui-icon mui-icon-left-nav"></span>设置
        </button>
        <h1 class="mui-center mui-title">关于MUI</h1>
      </div>
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <ul class="mui-table-view">
              <li class="mui-table-view-cell mui-plus-visible mui-stream-hidden">
                <a id="rate" class="mui-navigate-right">评分鼓励</a>
              </li>
              <li class="mui-table-view-cell mui-plus-visible">
                <a id="welcome" class="mui-navigate-right">欢迎页</a>
              </li>
              <li class="mui-table-view-cell mui-plus-visible">
                <a id="share" class="mui-navigate-right">分享推荐</a>
              </li>
              <li class="mui-table-view-cell">
                <a id="tel" class="mui-navigate-right">客服电话</a>
              </li>
              <li class="mui-table-view-cell">
                <a id="feedback-btn" href="#feedback" class="mui-navigate-right">问题反馈</a>
              </li>
              <li id="check_update" class="mui-table-view-cell mui-plus-visible">
                <a id="update" class="mui-navigate-right">检查更新</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="feedback" class="mui-page feedback">
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
          <span class="mui-icon mui-icon-left-nav"></span>关于MUI
        </button>
        <button id="submit" class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">发送</button>
        <h1 class="mui-center mui-title">问题反馈</h1>
      </div>
      <div class="mui-page-content">
        <div class="mui-content-padded">
          <div class="mui-inline">问题和意见</div>
          <a class="mui-pull-right mui-inline" href="#popover">
            快捷输入
            <span class="mui-icon mui-icon-arrowdown"></span>
          </a>
          <!--快捷输入具体内容，开发者可自己替换常用语-->
          <div id="popover" class="mui-popover">
            <div class="mui-popover-arrow"></div>
            <div class="mui-scroll-wrapper">
              <div class="mui-scroll">
                <ul class="mui-table-view">
                  <!--仅流应用环境下显示-->
                  <li class="mui-table-view-cell stream">
                    <a href="#">桌面快捷方式创建失败</a>
                  </li>
                  <li class="mui-table-view-cell"><a href="#">界面显示错乱</a></li>
                  <li class="mui-table-view-cell"><a href="#">启动缓慢，卡出翔了</a></li>
                  <li class="mui-table-view-cell"><a href="#">偶发性崩溃</a></li>
                  <li class="mui-table-view-cell"><a href="#">UI无法直视，丑哭了</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row mui-input-row">
          <textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
        </div>
        <p>图片(选填,提供问题截图,总大小10M以下)</p>
        <div id='image-list' class="row image-list"></div>
        <p>QQ/邮箱</p>
        <div class="mui-input-row">
          <input id='contact' type="text" class="mui-input-clear contact" placeholder="(选填,方便我们联系你 )" />
        </div>
        <div class="mui-content-padded">
          <div class="mui-inline">应用评分</div>
          <div class="icons mui-inline" style="margin-left: 6px;">
            <i data-index="1" class="mui-icon mui-icon-star"></i>
            <i data-index="2" class="mui-icon mui-icon-star"></i>
            <i data-index="3" class="mui-icon mui-icon-star"></i>
            <i data-index="4" class="mui-icon mui-icon-star"></i>
            <i data-index="5" class="mui-icon mui-icon-star"></i>
          </div>
        </div><br />
      </div>
    </div>


  </div>
</template>

<script>
  import footer from './footer/footer.vue'
export default {
  name: 'my',
  data () {
    return {
      msg: '个人中心'
    }
  },
  components:{
    'v-footer':footer
  },
  mounted(){
      this.$nextTick(function () {
        mui.init();
        //初始化单页view
        var viewApi = mui('#app1').view({
          defaultPage: '#setting'
        });
        //初始化单页的区域滚动
        mui('.mui-scroll-wrapper').scroll();
        //分享操作
        var shares = {};

        mui.plusReady(function() {
          plus.share.getServices(function(s) {
            if (s && s.length > 0) {
              for (var i = 0; i < s.length; i++) {
                var t = s[i];
                shares[t.id] = t;
              }
            }
          }, function() {
            console.log("获取分享服务列表失败");
          });
        });
        var view = viewApi.view;
        (function($) {
          //处理view的后退与webview后退
          var oldBack = $.back;
          $.back = function() {
            if (viewApi.canBack()) { //如果view可以后退，则执行view的后退
              viewApi.back();
            } else { //执行webview后退
              oldBack();
            }
          };
          //监听页面切换事件方案1,通过view元素监听所有页面切换事件，目前提供pageBeforeShow|pageShow|pageBeforeBack|pageBack四种事件(before事件为动画开始前触发)
          //第一个参数为事件名称，第二个参数为事件回调，其中e.detail.page为当前页面的html对象
          view.addEventListener('pageBeforeShow', function(e) {
            //				console.log(e.detail.page.id + ' beforeShow');
          });
          view.addEventListener('pageShow', function(e) {
            //				console.log(e.detail.page.id + ' show');
          });
          view.addEventListener('pageBeforeBack', function(e) {
            //				console.log(e.detail.page.id + ' beforeBack');
          });
          view.addEventListener('pageBack', function(e) {
            //				console.log(e.detail.page.id + ' back');
          });
        })(mui);

        $(".mui-pages").css("margin-top",$(".mui-navbar").height())
        $(".mui-pages").css("margin-bottom",$(".index_footer").height())


      })

  },
}
</script>

<style scoped>
  html,
  body {
    background-color: #efeff4;
  }
  .mui-views,
  .mui-view,
  .mui-pages,
  .mui-page,
  .mui-page-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #efeff4;
  }
  .mui-pages {
  }
  .mui-scroll-wrapper,
  .mui-scroll {
    background-color: #efeff4;
  }
  .mui-page.mui-transitioning {
    -webkit-transition: -webkit-transform 300ms ease;
    transition: transform 300ms ease;
  }
  .mui-page-left {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .mui-ios .mui-page-left {
    -webkit-transform: translate3d(-20%, 0, 0);
    transform: translate3d(-20%, 0, 0);
  }
  .mui-navbar {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 10;
    height: 44px;
    background-color: #f7f7f8;
  }
  .mui-navbar .mui-bar {
    position: absolute;
    background: transparent;
    text-align: center;
  }
  .mui-android .mui-navbar-inner.mui-navbar-left {
    opacity: 0;
  }
  .mui-ios .mui-navbar-left .mui-left,
  .mui-ios .mui-navbar-left .mui-center,
  .mui-ios .mui-navbar-left .mui-right {
    opacity: 0;
  }
  .mui-navbar .mui-btn-nav {
    -webkit-transition: none;
    transition: none;
    -webkit-transition-duration: .0s;
    transition-duration: .0s;
  }
  .mui-navbar .mui-bar .mui-title {
    display: inline-block;
    width: auto;
  }
  .mui-page-shadow {
    position: absolute;
    right: 100%;
    top: 0;
    width: 16px;
    height: 100%;
    z-index: -1;
    content: '';
  }
  .mui-page-shadow {
    background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, .01) 50%, rgba(0, 0, 0, .2) 100%);
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, .01) 50%, rgba(0, 0, 0, .2) 100%);
  }
  .mui-navbar-inner.mui-transitioning,
  .mui-navbar-inner .mui-transitioning {
    -webkit-transition: opacity 300ms ease, -webkit-transform 300ms ease;
    transition: opacity 300ms ease, transform 300ms ease;
  }
  .mui-page {
    display: none;
  }
  .mui-pages .mui-page {
    display: block;
  }
  .mui-page .mui-table-view:first-child {
    margin-top: 15px;
  }
  .mui-page .mui-table-view:last-child {
    margin-bottom: 30px;
  }
  .mui-table-view {
    margin-top: 20px;
  }

  .mui-table-view span.mui-pull-right {
    color: #999;
  }
  .mui-table-view-divider {
    background-color: #efeff4;
    font-size: 14px;
  }
  .mui-table-view-divider:before,
  .mui-table-view-divider:after {
    height: 0;
  }
  .head {
    height: 40px;
  }
  #head {
    line-height: 40px;
  }
  .head-img {
    width: 40px;
    height: 40px;
  }
  #head-img1 {
    position: absolute;
    bottom: 10px;
    right: 40px;
    width: 40px;
    height: 40px;
  }
  .update {
    font-style: normal;
    color: #999999;
    margin-right: -25px;
    font-size: 15px
  }
  .mui-fullscreen {
    position: fixed;
    z-index: 20;
    background-color: #000;
  }
  .mui-ios .mui-navbar .mui-bar .mui-title {
    position: static;
  }
  /*问题反馈在setting页面单独的css*/
  #feedback .mui-popover{
    position: fixed;
  }
  #feedback .mui-table-view:last-child {
    margin-bottom: 0px;
  }
  #feedback .mui-table-view:first-child {
    margin-top: 0px;
  }

  .mui-plus.mui-plus-stream .mui-stream-hidden{
    display: none !important;
  }
</style>
