/*
* Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { FileTemp } from "../../gen/datatype";

export let napiCommonCppTemplate: FileTemp = {
  name: '[fileName]common.cpp',
  content:  `
  #include "[fileName]common.h"
  
  /*[NAPI_GEN]:错误处理,获取错误详细信息*/
  void getErrMessage(napi_status &status, napi_env &env, const napi_extended_error_info *&extended_error_info,
      const char *info, const char *tag)
  {
      status = napi_get_last_error_info(env, &extended_error_info);
      if (status == napi_ok && extended_error_info != NULL) {
          const char *errorMessage =
              extended_error_info->error_message != NULL ? extended_error_info->error_message : "Unknown error";
          OH_LOG_Print(LOG_APP, LOG_ERROR, GLOBAL_RESMGR, tag, "errmsg %{public}s!, engine_err_code %{public}d!.",
          std::to_string(extended_error_info->engine_error_code).c_str(), extended_error_info->error_code);
          std::string myInfo = info;
          std::string res = "Failed to " + myInfo + " em = " + errorMessage +
              ", eec = " + std::to_string(extended_error_info->engine_error_code) +
              ", ec = " + std::to_string(extended_error_info->error_code);
          napi_throw_error(env, NULL, res.c_str());
      }
  }
  `
}