'use strict';

const Service = require('egg').Service;

class LegoV2Service extends Service {

  async updatePageInfo(data) {
    let result = await this.app.mysql.get('dbLego').query(`update tb_page set page_content = ? , page_editdate = ? , last_save_erp = ? 
        where page_id= ? ` 
    , [data.pageContent, data.updateTime , data.user , data.pageId]);
    return result.affectedRows === 1;
  }

  async queryThemeList() {
    let queryList = await this.app.mysql.get('dbLego').query(`select t_theme_style_id, t_theme_id, label, config from t_theme_style where t_theme_id = 1 `);
    return queryList;
  }

  async getWidgetList(data) {
/*     const sql = `SELECT t_component.com_id, 
		t_component.name, 
		t_component.tag_name,
		t_component.component_group, 
    t_component.thumb, 
    t_component.component_type,
		t_theme_component_style.id as component_style_id, 
		t_theme_component_style.com_config, 
		t_theme_component_style.com_desc, 
		t_theme_component_style.com_js, 
		t_theme_component_style.com_css, 
		t_theme_component_style.thumb as com_img  FROM t_component
    INNER JOIN t_theme_component_style ON t_component.com_id = t_theme_component_style.com_id
    WHERE t_theme_id = ?
    ORDER BY  t_component.component_group ASC, t_component.priority ASC, t_component.com_id	ASC 
    `*/
    const sql = `
    SELECT t_component.com_id, 
		t_component.name, 
		t_component.tag_name,
		t_component.component_group, 
    t_component.thumb, 
    t_component.component_type,
    t_theme_component_style_version.style_id as component_style_id, 
		t_theme_component_style_version.id as component_style_version_id, 
		t_theme_component_style_version.com_config, 
		t_theme_component_style_version.com_desc, 
		t_theme_component_style_version.com_js, 
		t_theme_component_style_version.com_css, 
    t_theme_component_style_version.thumb as com_img  FROM t_component
    INNER JOIN t_theme_component_style ON t_component.com_id = t_theme_component_style.com_id
    INNER JOIN t_theme_component_style_version ON t_theme_component_style.new_version_id = t_theme_component_style_version.id
    WHERE t_theme_id = ?
    ORDER BY  t_component.component_group ASC, t_component.priority ASC, t_component.com_id	ASC`;


    // ORDER BY  FIELD(t_component.component_group, 1, 2, 3), t_component.priority ASC

    let result = await this.app.mysql.get('dbLego').query(sql
    , [data.theme_id]);
    return result;
  }
  /**
   * @description 新增活动页面
   * @param {*} data 
   */
  async insertPageInfo(data) {
    this.ctx.logger.info('新增活动页面配置 ');
    let insertData = this.app.mysql.get('dbLego').insert('t_page', {
      page_content: data.pageContent,
      page_editdate: data.updateTime,
      // page_act_id: data.actId
    })
    return insertData;
  }
  async updatePageInfo(data) {
    this.ctx.logger.info('更新活动页面配置 ');
    let result = await this.app.mysql.get('dbLego').query(`
    update t_page set 
    page_content = ? , 
    page_editdate = ? , 
    last_save_erp = ? 
    where id= ? ` , 
     [data.pageContent, data.updateTime , data.user , data.pageId]);
    return result.affectedRows === 1;
  }

  async getPage(data) {
    this.ctx.logger.info('获取活动页面配置 ');
/*     let result = await this.app.mysql.get('dbLego').query(`
    SELECT page_content, id FROM  t_page set 
    where id= ? ` , 
     [data.pageId]);
    return result; */

    let result = await this.app.mysql.get('dbLego').get('t_page', {id: data.pageId})
    return result;
  }
}

module.exports = LegoV2Service;
