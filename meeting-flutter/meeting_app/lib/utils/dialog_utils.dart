// Copyright (c) 2022 NetEase, Inc. All rights reserved.
// Use of this source code is governed by a MIT license that can be
// found in the LICENSE file.

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:nemeeting/language/meeting_localization/meeting_app_localizations.dart';
import 'package:nemeeting/uikit/values/colors.dart';

bool _isEmpty(String? text) {
  return text == null || text.length == 0;
}

class AppDialogUtils {
  static Future showCommonDialog(BuildContext context, String title,
      String content, VoidCallback cancelCallback, VoidCallback acceptCallback,
      {String? cancelText,
      String? acceptText,
      bool canBack = true,
      bool isContentCenter = true}) {
    final meetingAppLocalizations = MeetingAppLocalizations.of(context)!;
    cancelText ??= meetingAppLocalizations.globalCancel;
    acceptText ??= meetingAppLocalizations.globalSure;
    return showDialog(
        context: context,
        useRootNavigator: false,
        builder: (BuildContext context) {
          return WillPopScope(
            child: CupertinoAlertDialog(
              title: _isEmpty(title) ? null : Text(title),
              content: Text(content,
                  textAlign:
                      isContentCenter ? TextAlign.center : TextAlign.left),
              actions: <Widget>[
                CupertinoDialogAction(
                  child: Text(cancelText!),
                  onPressed: cancelCallback,
                  textStyle: TextStyle(color: AppColors.color_666666),
                ),
                CupertinoDialogAction(
                  child: Text(acceptText!),
                  onPressed: acceptCallback,
                  textStyle: TextStyle(color: AppColors.color_337eff),
                ),
              ],
            ),
            onWillPop: () async {
              return canBack;
            },
          );
        });
  }

  static Future showOneButtonCommonDialog(
      BuildContext context, String title, String content, VoidCallback callback,
      {String? acceptText, bool canBack = true, bool isContentCenter = true}) {
    final meetingAppLocalizations = MeetingAppLocalizations.of(context)!;
    acceptText ??= meetingAppLocalizations.globalIKnow;
    return showDialog(
        context: context,
        useRootNavigator: false,
        builder: (BuildContext context) {
          return WillPopScope(
            child: CupertinoAlertDialog(
              title: _isEmpty(title) ? null : Text(title),
              content: Text(content,
                  textAlign:
                      isContentCenter ? TextAlign.center : TextAlign.left),
              actions: <Widget>[
                CupertinoDialogAction(
                  child: Text(acceptText!),
                  onPressed: callback,
                ),
              ],
            ),
            onWillPop: () async {
              return canBack;
            },
          );
        });
  }
}
