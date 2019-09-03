# hexo-filter-image

Automatically maps absolute paths to images in hexo

# Usege

```bash
npm install hexo-filter-image --save
```

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

## License

[![LICENSE](https://img.shields.io/github/license/JoeyBling/hexo-filter-image "LICENSE")](./LICENSE "LICENSE")
