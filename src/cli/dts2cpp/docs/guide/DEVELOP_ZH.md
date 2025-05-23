# NAPI框架生成工具开发说明

若当前工具功能不满足开发者需求，开发者需增强工具能力，则可基于已有源码进行工具二次开发，编译打包生成自定义的可执行文件和插件。

## 工具开发

### 可执行文件开发说明

#### 环境说明

系统：建议Ubuntu 20.04或者Windows 10

#### 开发步骤

##### Linux

1.安装typescript：在napi_generator/src/cli/dts2cpp/src目录下执行命令：

	npm i typescript

2.安装stdio：在napi_generator/src/cli/dts2cpp目录下执行命令：

	npm i stdio

3.安装pkg : 在napi_generator/src/cli/dts2cpp目录下执行命令：

	sudo npm i -g pkg

4.集成cla&ng-format（可选步骤）：

  如果需要工具自动格式化生成的C++代码，可执行此步骤。
  将windows版的cla&ng-format.exe程序和linux版的cla&ng-format程序拷贝到napi_generator目录下。
  cla&ng-format程序可从OpenHarmony编译环境获取：
  windows版：OpenHarmony/prebuilts/cla&ng/ohos/windows-x86_64/llvm/bin/cla&ng-format.exe
  Linux版：OpenHarmony/prebuilts/ming&w-w64/ohos/linux-x86_64/cla&ng-ming&w/bin/cla&ng-format

5.打包三个版本 : 执行命令：

	pkg .

执行以上步骤后，即可在napi_generator/src/cli/dts2cpp目录下生成Windows、linux、mac系统下的可执行程序:

	napi_generator-win.exe、napi_generator-linux、napi_generator-macos

6.根据需求打包指定系统下的可执行文件。若想只打包windows系统下可执行文件，可执行命令：

	pkg -t node14-win . -o napi_generator-win.exe

若想只打包linux系统下可执行文件，可执行命令：

	pkg -t node14-linux . -o napi_generator-linux

若想只打包macos系统下可执行文件，可执行命令：

	pkg -t node14-macos . -o napi_generator-macos

备注：参数-t为指定系统，参数-o为指定可执行文件名称。


##### Windows

1.安装typescript：使用管理员身份在napi_generator/src/cli/dts2cpp/src目录下执行命令：

	npm i typescript

2.安装stdio：使用管理员身份在napi_generator/src/cli/dts2cpp目录下执行命令：

	npm i stdio

3.安装pkg : 使用管理员身份在napi_generator/src/cli/dts2cpp目录下执行命令：

	npm i -g pkg

4.集成cla&ng-format（可选步骤）：

  如果需要工具自动格式化生成的C++代码，可执行此步骤。
  将windows版的cla&ng-format.exe程序和linux版的cla&ng-format程序拷贝到napi_generator目录下。
  cla&ng-format程序可从OpenHarmony编译环境获取：
  windows版：OpenHarmony/prebuilts/cla&ng/ohos/windows-x86_64/llvm/bin/cla&ng-format.exe
  Linux版：OpenHarmony/prebuilts/ming&w-w64/ohos/linux-x86_64/cla&ng-ming&w/bin/cla&ng-format

5.打包三个版本 : 使用管理员身份执行命令：

	pkg .

执行以上步骤后，即可在napi_generator/src/cli/dts2cpp目录下生成Windows、linux、mac系统下的可执行程序:

	napi_generator-win.exe、napi_generator-linux、napi_generator-macos

6.根据需求打包指定系统下的可执行文件。若想只打包windows系统下可执行文件，可执行命令：

	pkg -t node14-win . -o napi_generator-win.exe

若想只打包linux系统下可执行文件，可执行命令：

	pkg -t node14-linux . -o napi_generator-linux

若想只打包macos系统下可执行文件，可执行命令：

	pkg -t node14-macos . -o napi_generator-macos

### DevEco Studio上使用的IntelliJ插件开发说明

具体的插件开发步骤，可以左键单击以下链接了解：

[DevEco Studio上使用的IntelliJ插件开发说明](https://gitee.com/openharmony/napi_generator/blob/master/src/intellij_plugin/dts2cpp/napi_IntelliJ_plugin/docs/guide/DEVELOP_ZH.md)

## 工具测试
  进行工具二次开发后，本地可进行单元测试、story特性测试确保工具的可用性。左键单击以下链接了解详情：

  [单元测试](https://gitee.com/openharmony/napi_generator/blob/master/test/unittest/README_ZH.md)

  [story测试](https://gitee.com/openharmony/napi_generator/blob/master/test/storytest/README_ZH.md)

