---
title: 为你的hexo主题添加黑幕！
tags:
  - 教程
  - Hexo
  - Blog
categories: 教程 hexo
date: 2022-05-03 14:05:19
updated: 2022-05-03 14:05:19
top: 1
---

## 黑幕

黑幕就是平时在网页上见到的类似这样的黑色条条或者白色条条

![image.png](https://s2.loli.net/2022/05/03/Jk4uM7oEnxHQlWP.png)_神秘的黑幕.png_

而且只要把鼠标放上去文字就会显示出来，非常的好用<span class="heimu">（尤其是用来写一些不太正经的话的时候）</span>

<!--more-->

## 步骤

### 定位hexo主题

如果你使用了包管理器安装了hexo主题，那么hexo主题就在`node_modules`目录下

如果你把主题下载到了`theme`目录的话，hexo主题就在`theme/name`里面

### 修改主题的css样式

打开hexo主题下的`source/css`，找到styl文件

插入这一段css样式

```css
//heimu
.heimu {
    background-color: var(--hty-text-color);
    transition: .2s;}

.heimu:hover{
    cursor:pointer;
    background-color:transparent;}
```

这样，我们就完成了对hexo主题的修改！

### 使用方法

在你要编辑的markdown文件中

使用`<span class="heimu">text</span>`就能让`text`披上黑幕了！

    


