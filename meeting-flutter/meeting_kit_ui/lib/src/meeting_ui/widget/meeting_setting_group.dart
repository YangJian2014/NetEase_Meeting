// Copyright (c) 2022 NetEase, Inc. All rights reserved.
// Use of this source code is governed by a MIT license that can be
// found in the LICENSE file.

part of meeting_ui;

class MeetingSettingGroup extends StatelessWidget {
  final String? title;
  final Color? titleColor;
  final double? titleFontSize;
  final IconData? iconData;
  final Color? iconColor;
  final List<Widget> children;

  const MeetingSettingGroup(
      {super.key,
      this.title,
      this.iconData,
      this.iconColor,
      this.titleColor,
      this.titleFontSize,
      required this.children});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(top: 16, left: 16, right: 16),
      decoration: BoxDecoration(
        color: _UIColors.white,
        borderRadius: BorderRadius.all(
          Radius.circular(7),
        ),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildTitle(),
          ...children,
        ],
      ),
    );
  }

  /// 构建标题
  Widget _buildTitle() {
    if (title == null && iconData == null) return SizedBox.shrink();
    return Container(
      height: 32,
      alignment: Alignment.bottomLeft,
      padding: EdgeInsets.only(
        left: 16,
        right: 16,
        bottom: 4,
      ),
      child: Row(
        children: [
          if (iconData != null) ...[
            Icon(
              iconData,
              size: 12,
              color: iconColor,
            ),
            SizedBox(width: 4),
          ],
          if (title != null)
            Text(
              title!,
              style: TextStyle(
                fontSize: titleFontSize ?? 12,
                color: titleColor ?? _UIColors.color8D90A0,
                fontWeight: FontWeight.w500,
              ),
            ),
        ],
      ),
    );
  }
}

/// 设置选项开关Widget
class MeetingSwitchItem extends StatelessWidget {
  final String title;
  final String? content;
  final Widget Function(bool enable)? contentBuilder;
  final ValueNotifier<bool> valueNotifier;
  final ValueChanged<bool>? onChanged;
  final EdgeInsetsGeometry? padding;
  final TextStyle? titleTextStyle;
  final double? minHeight;

  const MeetingSwitchItem(
      {super.key,
      required this.title,
      this.content,
      this.contentBuilder,
      this.padding,
      this.titleTextStyle,
      this.minHeight,
      required this.valueNotifier,
      required this.onChanged});

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints:
          BoxConstraints(minHeight: minHeight ?? (Platform.isIOS ? 56 : 48)),
      child: Container(
        padding: padding ??
            EdgeInsets.only(
              left: 16,
              right: 10,
              top: 3,
              bottom: 3,
            ),
        child: Row(
          children: [
            Expanded(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    title,
                    style: titleTextStyle ??
                        TextStyle(
                            fontSize: 14,
                            color: _UIColors.color1E1F27,
                            fontWeight: FontWeight.w500),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                  if (contentBuilder != null) ...[
                    SizedBox(height: 4),
                    ValueListenableBuilder<bool>(
                        valueListenable: valueNotifier,
                        builder: (context, value, child) {
                          return contentBuilder!(value);
                        }),
                  ],
                  if (content != null) ...[
                    SizedBox(height: 4),
                    Container(
                      child: Text(
                        content!,
                        style: TextStyle(
                            fontSize: 12, color: _UIColors.color8D90A0),
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ]
                ],
              ),
            ),
            SizedBox(width: 5),
            GestureDetector(
              onTap: () {
                onChanged?.call(!valueNotifier.value);
              },
              behavior: HitTestBehavior.opaque,
              child: Container(
                margin: EdgeInsets.all(6),
                width: 40,
                height: 24,
                child: Transform.scale(
                  scale: Platform.isIOS ? 0.9 : 0.8,
                  child: ValueListenableBuilder<bool>(
                      valueListenable: valueNotifier,
                      builder: (context, value, child) {
                        return CupertinoSwitch(
                            key: key,
                            value: value,
                            onChanged: onChanged,
                            activeColor: _UIColors.blue_337eff);
                      }),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}

/// 会议列表可复制Widget
class MeetingListCopyable extends StatelessWidget {
  final String? title;
  final String? content;
  final bool justTopCorner;
  final bool justBottomCorner;
  final IconData? iconData;

  /// enableCopyNotifier.value = true
  final ValueNotifier<bool>? enableCopyNotifier;

  /// transformNotifier.value = false
  final ValueNotifier<bool>? transformNotifier;

  const MeetingListCopyable({
    super.key,
    required this.title,
    this.content,
    this.iconData,
    this.justTopCorner = false,
    this.justBottomCorner = false,
    this.enableCopyNotifier,
    this.transformNotifier,
  });

  /// 顶部圆角
  MeetingListCopyable.withTopCorner({
    required this.title,
    this.content,
    this.iconData,
    this.enableCopyNotifier,
    this.transformNotifier,
  })  : justTopCorner = true,
        justBottomCorner = false;

  /// 底部圆角
  MeetingListCopyable.withBottomCorner({
    required this.title,
    this.content,
    this.iconData,
    this.enableCopyNotifier,
    this.transformNotifier,
  })  : justTopCorner = false,
        justBottomCorner = true;

  /// 顶部和底部圆角
  MeetingListCopyable.withAllCorner({
    required this.title,
    this.content,
    this.iconData,
    this.enableCopyNotifier,
    this.transformNotifier,
  })  : justTopCorner = true,
        justBottomCorner = true;

  /// 无圆角
  MeetingListCopyable.withNoCorner({
    required this.title,
    this.content,
    this.iconData,
    this.enableCopyNotifier,
    this.transformNotifier,
  })  : justTopCorner = false,
        justBottomCorner = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(
          // horizontal: 16,
          // vertical: 8,
          ),
      child: _buildCopyItem(title, content,
          transform: transformNotifier?.value ?? false,
          enableCopy: enableCopyNotifier?.value ?? true),
    );
  }

  ///
  /// 构建标题
  /// [itemTitle] 标题
  /// [itemDetail] 详情
  /// [transform] 是否需要转换
  /// [enableCopy] 是否可以复制
  Widget _buildCopyItem(String? itemTitle, String? itemDetail,
      {bool transform = false, required bool enableCopy}) {
    return Container(
      height: _MeetingDimen.primaryItemHeight,
      padding: EdgeInsets.only(
          left: _MeetingDimen.globalPadding,
          right: _MeetingDimen.globalPadding),
      alignment: Alignment.center,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(justTopCorner ? 7 : 0),
          topRight: Radius.circular(justTopCorner ? 7 : 0),
          bottomLeft: Radius.circular(justBottomCorner ? 7 : 0),
          bottomRight: Radius.circular(justBottomCorner ? 7 : 0),
        ),
        color: Colors.white,
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Text(itemTitle ?? '',
              style: TextStyle(
                  fontSize: 14,
                  color: _UIColors.color1E1F27,
                  fontWeight: FontWeight.w500)),
          // Spacer(),
          Expanded(
            child: Text('   ${itemDetail ?? ''}',
                textAlign: TextAlign.right,
                softWrap: false,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(fontSize: 14, color: _UIColors.color53576A)),
          ),
          if (enableCopy)
            GestureDetector(
              key: MeetingUIValueKeys.copy,
              child: Padding(
                padding: const EdgeInsets.only(
                  left: 12.0,
                ),
                child: Icon(iconData ?? NEMeetingIconFont.icon_copy,
                    size: 24, color: _UIColors.blue_337eff),
              ),
              onTap: () {
                if (itemDetail == null) return;
                final value = transform
                    ? itemDetail.replaceAll(RegExp(r'-'), '')
                    : itemDetail;
                Clipboard.setData(ClipboardData(text: value));
                ToastUtils.showBotToast(NEMeetingUIKit.instance
                    .getUIKitLocalizations()
                    .globalCopySuccess);
              },
            ),
        ],
      ),
    );
  }
}

/// 会议列表Item
///
class _MeetingDimen {
  static const double primaryItemHeight = 48.0;
  static const double globalPadding = 16;
}

/// 带勾选Widget
class MeetingCheckItem extends StatelessWidget {
  const MeetingCheckItem({
    super.key,
    required this.title,
    this.subTitle,
    required this.isSelected,
    this.height = 48,
    this.onTap,
  });

  final String title;
  final double height;
  final String? subTitle;
  final bool isSelected;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      behavior: HitTestBehavior.opaque,
      onTap: onTap,
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: 16),
        height: height,
        child: Row(
          children: <Widget>[
            Expanded(
              child: Row(
                children: [
                  Text(
                    title,
                    style: TextStyle(
                      fontSize: 14,
                      color: _UIColors.color1E1F27,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  if (subTitle != null)
                    Text(
                      subTitle!,
                      style:
                          TextStyle(fontSize: 14, color: _UIColors.color8D90A0),
                    ),
                ],
              ),
            ),
            isSelected
                ? Icon(
                    NEMeetingIconFont.icon_check_line,
                    size: 16,
                    color: _UIColors.color_337eff,
                  )
                : SizedBox.shrink(),
          ],
        ),
      ),
    );
  }
}

/// 带箭头Widget
class MeetingArrowItem extends StatelessWidget {
  const MeetingArrowItem({
    super.key,
    required this.title,
    this.tag,
    this.content,
    this.minHeight = 48,
    this.onTap,
    this.padding,
    this.titleTextStyle,
    this.showArrow = true,
  });

  final String title;
  final Widget? tag;
  final String? content;
  final double minHeight;
  final VoidCallback? onTap;
  final TextStyle? titleTextStyle;
  final EdgeInsetsGeometry? padding;
  final bool showArrow;

  /// item左侧标题
  Widget getTitle({required String text}) {
    return Text(text,
        softWrap: true,
        style: titleTextStyle ??
            TextStyle(
                color: _UIColors.color1E1E27,
                fontSize: 14,
                fontWeight: FontWeight.w500));
  }

  /// item右侧内容
  Widget getContent({required String text}) {
    return Text(
      text,
      // 解决中文高度显示不居中问题
      strutStyle: StrutStyle(
        forceStrutHeight: true,
      ),
      style: TextStyle(
        fontSize: 14,
        color: _UIColors.color53576A,
        fontWeight: FontWeight.w400,
        decoration: TextDecoration.none,
      ),
      maxLines: 1,
      overflow: TextOverflow.ellipsis,
    );
  }

  @override
  Widget build(BuildContext context) {
    final titleWidget = getTitle(text: title);
    return GestureDetector(
      key: key,
      child: Container(
        constraints: BoxConstraints(
          minHeight: minHeight,
        ),
        padding: padding ??
            EdgeInsets.symmetric(
              horizontal: 16,
              vertical: 3,
            ),
        child: Row(
          children: <Widget>[
            if (content == null)
              Expanded(
                child: titleWidget,
              )
            else
              titleWidget,
            if (tag != null) tag!,
            SizedBox(width: 8),
            if (content != null)
              Expanded(
                  child: Align(
                alignment: Alignment.centerRight,
                child: getContent(text: content!),
              )),
            if (showArrow) ...[
              SizedBox(width: 12),
              Icon(NEMeetingIconFont.icon_yx_allowx,
                  size: 14, color: _UIColors.color8D90A0),
            ]
          ],
        ),
      ),
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
    );
  }
}
