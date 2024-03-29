'use strict';

const Controller = require('egg').Controller;
const errCode = require('../../constant/errCode');


class LegoPageController extends Controller {
  async editPage() {
    let pageId = this.ctx.query.page_id,
        actId = this.ctx.query.act_id;
    let userId = this.ctx.session.userid;

    let roleMap = this.config.userRole,
      userRoles = this.ctx.session.roles,
      userInfo = {
        userid: this.ctx.session.userid,
        userName: this.ctx.session.userName,
        userAccount: this.ctx.session.userAccount
      };

    // 遍历角色
    for (let role in roleMap) {
      userInfo["is" + role.replace(/\w/, ($1, $2, $3, $4) => $1.toUpperCase())] = userRoles.some(ur => {
        return roleMap[role].indexOf(Number(ur)) != -1
      })
    }
    if(!actId) {
      this.ctx.logger.info('进入乐高活动编辑页，没有活动号');
      await this.ctx.render('error/error', {
        errMsg: '活动号为空，是不是你还没有配置活动？',
        isLock: false,
        redirect: '/#/act/edit',
        buttonText: '去创建活动'
      });
    } else {
      // 通过活动号查询关联的人
      try {
        let actDetail = await this.service.act.detailService.aisleService('/act/getActDetail', {
          act_id: actId
        });
        this.ctx.logger.error('查询活动基础配置详情'+ JSON.stringify(actDetail));
        if(actDetail && actDetail.data) {
          let currentUser = this.ctx.session.userid;
          // 不是活动创建者，或者不在活动关联人员列表里，提示错误
          if(currentUser != actDetail.data.creator && actDetail.data.revisability.indexOf(String(currentUser)) == -1) {
            await this.ctx.render('error/error', {
              errMsg: '你没有权限修改该活动页',
              isLock: false,
              desc: '你不是该活动的创建人并且未加入到该活动的授权名单列表里，请联系该活动的创建人'
            });
          } else {
            if(!pageId) {
              await this.ctx.render('lego/edit', {
                title: actDetail.data.act_title,
                env: this.app.config.env,
                lock: false,
                actId,
                actDetail: JSON.stringify(actDetail.data),
                userInfo: JSON.stringify(userInfo)
              });
              return;
            }
            // 渲染编辑页
            let lockData = await this.app.redis.get(`lego_manage_${pageId}`);
            // 预览
            let lockPreview = await this.app.redis.get(`lego_manage_releaseLock_${pageId}`);
            // 是否预览完
            let previewLock = await this.app.redis.get(`lego_manage_previewLock_${pageId}`);
           
            console.log(previewLock,'----------------previewLock')
            console.log(lockPreview,'----------------lockPreview')
            console.log(this.app.config.env,'----------------app.config.env')
            // 有他人锁定
            if(lockData) {
              lockData = JSON.parse(lockData);
              if(lockData.userid != this.ctx.session.userid) {
                await this.ctx.render('error/error', {
                  errMsg: lockData.userName + '正在编辑该页面，为防止冲突，待解锁后你才能编辑',
                  desc: '如果需要编辑，请联系'+ lockData.userName+ '解除锁定'
                });
                return;
              }
            }

            // 写redis 锁定该页面
            await this.app.redis.set(`lego_manage_${pageId}`, JSON.stringify({
              userid: this.ctx.session.userid,
              userAccount: this.ctx.session.userAccount,
              userName: this.ctx.session.userName,
              time: +new Date()
            }), 'PX', 24 * 60 * 60 * 1000);

            //如果已经预览过但是还没点预发布
            if (!previewLock) {
              // 写redis 区分是预览还是发布
              await this.app.redis.set(`lego_manage_releaseLock_${pageId}`, JSON.stringify({
                lock: true,
                time: +new Date()
              }), 'PX', 24 * 60 * 60 * 1000);
            }

            await this.ctx.render('lego/edit', {
              title: actDetail.data.act_title,
              env: this.app.config.env,
              lock: true,
              lockPreview: lockPreview,
              actId,
              actDetail: JSON.stringify(actDetail.data),
              userInfo: JSON.stringify(userInfo)
            });
          }
        } else {
          await this.ctx.render('error/error', {
            errMsg: '活动号不存在，请检查配置和参数',
            isLock: false
          });
        }
      } catch(e) {
        this.ctx.logger.error('查询活动基础配置详情失败'+ e.message);
        await this.ctx.render('error/error', {
          errMsg: '查询活动基础配置详情失败'+ e.message + '，请联系开发',
          isLock: false
        });
      }
    }
  }
  async homePage() {
    let act_id = this.ctx.query.act_id;
    await this.ctx.render('lego/home', {
      act_id
    });
  }
}

module.exports = LegoPageController;