// Copyright (c) 2022 NetEase, Inc. All rights reserved.
// Use of this source code is governed by a MIT license that can be
// found in the LICENSE file.

part of meeting_service;

/// 小应用对象
class NEMeetingWebAppItem {
  /// 应用Id
  final String pluginId;

  /// 应用名称
  final String name;

  /// 应用图标
  final NEMeetingWebAppIconItem icon;

  /// 应用描述
  final String? description;

  /// 应用类型
  final NEMeetingWebAppItemType type;

  /// 应用首页地址
  final String homeUrl;

  /// 会话Id
  final String? sessionId;

  NEMeetingWebAppItem({
    required this.pluginId,
    required this.name,
    required this.icon,
    this.description,
    this.type = NEMeetingWebAppItemType.kOfficial,
    required this.homeUrl,
    required this.sessionId,
  });

  factory NEMeetingWebAppItem.fromMap(Map<String, dynamic> map) {
    return NEMeetingWebAppItem(
      pluginId: map['pluginId'] as String,
      name: map['name'] as String,
      icon: NEMeetingWebAppIconItem.fromMap(map['icon']),
      description: map['description'] as String?,
      type: MeetingWebAppItemTypeExtension.fromType(map['type'] as int),
      homeUrl: map['homeUrl'] as String,
      sessionId: map['notifySenderAccid'] as String,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'pluginId': pluginId,
      'name': name,
      'icon': icon.toMap(),
      'description': description,
      'type': type.index,
      'homeUrl': homeUrl,
      'sessionId': sessionId,
    };
  }
}

/// 小应用图标
class NEMeetingWebAppIconItem {
  /// 应用图标url
  final String defaultIcon;

  /// 通知图标url
  final String? notifyIcon;

  NEMeetingWebAppIconItem({
    required this.defaultIcon,
    required this.notifyIcon,
  });

  factory NEMeetingWebAppIconItem.fromMap(Map<String, dynamic> map) {
    return NEMeetingWebAppIconItem(
      defaultIcon: map['defaultIcon'] as String,
      notifyIcon: map['notifyIcon'] as String?,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'defaultIcon': defaultIcon,
      'notifyIcon': notifyIcon,
    };
  }
}

/// 应用类型
enum NEMeetingWebAppItemType {
  /// 官方应用
  kOfficial,

  /// 企业自建应用
  kCorporate,
}

extension MeetingWebAppItemTypeExtension on NEMeetingWebAppItemType {
  static NEMeetingWebAppItemType fromType(int type) {
    switch (type) {
      case 0:
        return NEMeetingWebAppItemType.kOfficial;
      case 1:
        return NEMeetingWebAppItemType.kCorporate;
      default:
        return NEMeetingWebAppItemType.kOfficial;
    }
  }
}
