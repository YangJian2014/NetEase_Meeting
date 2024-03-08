// Copyright (c) 2022 NetEase, Inc. All rights reserved.
// Use of this source code is governed by a MIT license that can be
// found in the LICENSE file.

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:nemeeting/utils/privacy_util.dart';
import '../uikit/state/meeting_base_state.dart';
import '../uikit/values/colors.dart';

abstract class AuthBaseState<T extends StatefulWidget>
    extends MeetingBaseState<T> {
  @override
  Widget buildBody() {
    return GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: () {
          FocusScope.of(context).unfocus();
        },
        child: Container(
          color: AppColors.white,
          child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Align(
                  alignment: Alignment.topLeft,
                  child: Container(
                    margin: EdgeInsets.only(left: 30, top: 16),
                    child: Text(
                      getSubTitle(),
                      textAlign: TextAlign.left,
                      style: TextStyle(
                        color: AppColors.black_222222,
                        fontWeight: FontWeight.w500,
                        fontSize: 28,
                      ),
                    ),
                  ),
                ),
                getSubject(),
                Spacer(),
              ]),
        ));
  }

  @override
  String getTitle() {
    return '';
  }

  String getSubTitle();

  Widget getSubject();
}
