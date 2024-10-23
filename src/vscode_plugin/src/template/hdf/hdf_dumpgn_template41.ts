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

import { FileTemp } from "../../datatype";

export let peripheralDumpGn4_1: FileTemp = {
  name: 'BUILD.gn',
  content: ` #Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
  #Licensed under the Apache License, Version 2.0 (the "License");
  #you may not use this file except in compliance with the License.
  #You may obtain a copy of the License at
  #
  #    http://www.apache.org/licenses/LICENSE-2.0
  #
  #Unless required by applicable law or agreed to in writing, software
  #distributed under the License is distributed on an "AS IS" BASIS,
  #WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  #See the License for the specific language governing permissions and
  #limitations under the License.
  #
import("//build/ohos.gni")

config("libhdi_[driverName]_pub_config") {
  visibility = [ ":*" ]
}
ohos_shared_library("hdi_[driverName]") {
  public_configs = [ ":libhdi_[driverName]_pub_config" ]
  sources = [
    "[driverName]_dump.c",
  ]
  include_dirs = [
    "include",
    "../utils/interface",
    "//third_party/bounds_checking_function/include",
  ]
  cflags = [
    "-Wall",
    "-Wextra",
    "-Werror",
    "-fsigned-char",
    "-fno-common",
    "-fno-strict-aliasing",
  ]
  install_images = [ chipset_base_dir ]
  subsystem_name = "hdf"
  part_name = "drivers_peripheral_[driverName]"
  if (is_standard_system) {
    external_deps = [
      "c_utils:utils",
      "hdf_core:libhdf_host",
      "hdf_core:libhdf_utils",
      "hilog:libhilog",
    ]
  } else {
    external_deps = [ "hilog:libhilog" ]
  }
}
  `
}