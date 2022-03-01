/**
 * @copyright Copyright (c) 2021 NetEase, Inc. All rights reserved.
 *            Use of this source code is governed by a MIT license that can be found in the LICENSE file.
 */

#ifndef VERSION_H
#define VERSION_H

#include <QtGlobal>

#define APPLICATION_VERSION "1.0.1.1368"
#define COMMIT_HASH "b34491ecce43157be5ab5e40ef20d52003ccf7bd"
#define COMMIT_COUNT 1368
#define NERTC_SDK_VERSION "3.5.2"
#define MEETING_SDK_VERSION "1.0.0.0"

#ifdef Q_OS_MACX
#define MEETING_CLIENT_TYPE "5"
#endif
#ifdef Q_OS_WIN32
#define MEETING_CLIENT_TYPE "4"
#endif

#endif//VERSION_H
