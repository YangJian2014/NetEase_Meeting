// Copyright (c) 2022 NetEase, Inc. All rights reserved.
// Use of this source code is governed by a MIT license that can be
// found in the LICENSE file.

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../utils/integration_test.dart';
import '../values/colors.dart';
import '../values/fonts.dart';
import 'package:netease_meeting_ui/meeting_ui.dart';

abstract class AppBaseState<T extends StatefulWidget>
    extends PlatformAwareLifecycleBaseState<T> {
  @protected
  Color get backgroundColor => AppColors.globalBg;

  @override
  Widget buildWithPlatform(BuildContext context) {
    return Scaffold(
      backgroundColor: backgroundColor,
      resizeToAvoidBottomInset: false,
      appBar: buildCustomAppBar() != null ? null : buildAppBar(),
      body: Column(
        children: [
          if (buildCustomAppBar() != null) buildCustomAppBar()!,
          Expanded(
            child: NEMeetingKitFeatureConfig(
              child: buildBody(),
            ),
          ),
        ],
      ),
    );
  }

  String getTitle();

  Widget buildBody();

  bool isShowBackBtn() {
    return true;
  }

  Color getAppBarBackgroundColor() {
    return Colors.white;
  }

  Future<bool?> shouldPop() {
    return Future.value(true);
  }

  List<Widget> buildActions() {
    return [];
  }

  Widget? buildCustomAppBar() => null;

  /// 构建appBar
  ///
  AppBar buildAppBar() {
    return AppBar(
      title: Text(
        getTitle(),
        style: TextStyle(
            color: AppColors.color_1E1E27,
            fontSize: 16,
            fontWeight: FontWeight.w500),
      ),
      centerTitle: true,
      backgroundColor: getAppBarBackgroundColor(),
      elevation: 0.0,
      leading: isShowBackBtn()
          ? IconButton(
              key: MeetingValueKey.back,
              icon: const Icon(
                IconFont.iconyx_returnx,
                size: 14,
                color: AppColors.color_1E1E27,
              ),
              padding: EdgeInsets.all(5),
              onPressed: () {
                shouldPop().then((value) {
                  if (value != false) Navigator.maybePop(context);
                });
              },
            )
          : null,
      actions: buildActions(),
      // systemOverlayStyle: SystemUiOverlayStyle.light,
    );
  }
}
