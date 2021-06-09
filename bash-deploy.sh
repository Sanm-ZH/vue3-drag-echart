#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 获取当前分支名
branch=$(git symbolic-ref --short -q HEAD)

pnpm build

git push origin $branch:$branch
echo -e '\033[32m 已推送至github \n'

pnpx gh-pages -d dist

echo -e '\n'
echo -e '\033[32m 已部署成功至sanm-zh.github.io'
echo -e '\n'

git remote set-url origin git@gitee.com:sanm-zh/vue3-drag-echart.git

git push origin $branch:$branch
echo -e '\033[32m 已推送至gitee \n'

pnpx gh-pages -d dist

echo -e '\n'
echo -e '\033[32m 已部署成功至sanm-zh.gitee.io'
echo -e '\033[32m 如果不是gitee pro用户请手动更新gitee pages服务'
echo -e '\n'

git remote set-url origin git@github.com:Sanm-ZH/vue3-drag-echart.git