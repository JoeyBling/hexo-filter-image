'use strict';

const _ = require('lodash');
/** Jquery库 */
const cheerio = require('cheerio');

// 项目访问上下文路径
var blogRoot = hexo.config.root || '/';
blogRoot = blogRoot.endsWith("/") ? blogRoot : blogRoot + '/';

/** 默认配置 */
const defaultConfig = {
  // 日志是否启用
  'log': true
};

// Apply options with default
let config = _.defaultsDeep({}, hexo.config.filter_image, hexo.theme.config.filter_image, defaultConfig);

/** 获取图片绝对路径 */
function urlForHelper(path = '/') {
  if (path[0] === '#' || path.startsWith('//') || path.startsWith(blogRoot)) {
    return path;
  }

  // Prepend path
  path = blogRoot + path;

  // path.replace(/\/{2,}/g, '/');
  return path.replace(/(\\|\/){2,}/g, '/');
}

/** 在文章渲染完成后执行 */
hexo.extend.filter.register('after_post_render', function (data) {
  // console.log("excerpt === " + data.excerpt);
  // console.log("more === " + data.more);
  // console.log("content === " + data.content);
  // const config = hexo.config;
  /** 摘录、详情、内容 */
  const dispose = ['excerpt', 'more', 'content'];
  for (var i = 0; i < dispose.length; i++) {
    var key = dispose[i];

    var $ = cheerio.load(data[key], {
      ignoreWhitespace: false,
      xmlMode: false,
      lowerCaseTags: false,
      decodeEntities: false
    });

    $('img').each(function () {
      if ($(this).attr('src')) {
        // For windows style path, we replace '\' to '/'.
        var src = $(this).attr('src').replace('\\', '/');
        if (!(/http[s]*.*|\/\/.*/.test(src) ||
            /^\s+\//.test(src))) {
          /* || /^\s*\/uploads|images\//.test(src) */
          $(this).attr('src', urlForHelper(src));
          if (config.log) {
            console.info && console.info("update link as:-->" + urlForHelper(src));
          }
        }
      } else {
        if (config.log) {
          console.info && console.info("no src attr, skipped...");
          console.info && console.info($(this));
        }
      }
    });
    data[key] = $.html();
  }
});