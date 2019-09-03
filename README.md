# hexo-filter-image

&#160;&#160;&#160;&#160;**自动为hexo中的图片映射绝对路径 | Automatically maps absolute paths to images in hexo**

# 推荐一款Hexo主题
> 一个简洁优雅的hexo主题：https://github.com/JoeyBling/hexo-theme-yilia-plus

# 开始使用

```bash
yarn add hexo-filter-image
# or
npm install hexo-filter-image --save
```

# 配置示例
> 请向Hexo的 `_config.yml` 文件或主题的 `_config.yml` 文件中添加配置.

```yaml
filter_image:
  # 日志是否启用
  log: true
```

## 贡献者

![contributors][contributors]


## 关于我

[![author][author]][author-url]
[![author QQ][author-qq]][author-qq-url]
[![author email][author-email]][author-email-url]

# Example

```bash
MacGesture2-Publish
├── apppicker.jpg
├── logo.jpg
└── rules.jpg
MacGesture2-Publish.md
```

Make sure `post_asset_folder: true` in your `_config.yml`.

Just use `![logo](logo.jpg)` to insert `logo.jpg`.

## LICENSE

[![LICENSE](https://img.shields.io/github/license/JoeyBling/hexo-filter-image "LICENSE")](./LICENSE "LICENSE")
