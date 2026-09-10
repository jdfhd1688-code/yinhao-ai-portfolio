export type DramaSource = { zh: string; en: string };
export type DramaWork = {
  id: string;
  title: string;
  altTitle: string;
  source: DramaSource;
  sourceUrl: string;
  facts: { zh: string[]; en: string[] };
  engine: { zh: string; en: string };
  decisions: { zh: string[]; en: string[] };
  watchUrl: string;
  fullWatchUrl: string;
};

export const dramaWorks: DramaWork[] = [
  {
    id: "moral-kidnapping",
    title: "《道德绑架？笑死，我根本没有好吗》",
    altTitle: "《怼天怼地怼圣母，系统帮我打地鼠》",
    source: { zh: "根据番茄同名 IP 改编", en: "Adapted from a Tomato novel IP of the same name" },
    sourceUrl: "",
    fullWatchUrl: "https://novelquickapp.com/hongguo/ug/pages/video-animation-share?encrypt_did=MDIEDDsqZfiwF9vbB1PRVQQQfzMExHfzUnNk1w7be2DpiQQQhdA%2BR1O2ZoYsUwfWe2hLWg%3D%3D&uid=c1016ed964f265b335ed4313c6b0cfc0&zlink=https%3A%2F%2Fapplink.novelquickapp.com%2FdVu4P%3FschemeParams%3D%257B%2522video_series_id%2522%253A%2522%2522%252C%2522vs_id_type%2522%253A%25221%2522%252C%2522source%2522%253A%25228%2522%252C%2522module_name%2522%253A%2522share%2522%252C%2522vid%2522%253A%25227681708950344977433%2522%252C%2522share_toast_vid%2522%253A%25227681708950344977433%2522%252C%2522share_ab_group%2522%253A2%252C%2522video_id%2522%253A%25227681625230011272216%2522%257D&gd_label=click_schema_lhft_share_novelread_ios&share_type=4&landing_source=share&use_open_launch_app_novel=1&user_id=&did=c1016ed964f265b335ed4313c6b0cfc0&share_channel=wechat&report_params=%7B%22content_id_key%22%3A%22material_id%22%2C%22share_timestamp%22%3A1788865388%2C%22entrance%22%3A%22video_player_share_button%22%2C%22extra%22%3A%22%7B%5C%22profile_tab_name%5C%22%3A%5C%22profile_starred_video%5C%22%2C%5C%22show_rule%5C%22%3A%5C%22%5C%22%2C%5C%22is_consume_guide%5C%22%3A0%7D%22%2C%22content_id%22%3A%227681708950344977433%22%2C%22if_full_screen%22%3A0%2C%22type%22%3A%22video_player%22%2C%22read_progress%22%3A%220.07%22%2C%22content_type%22%3A%22motion_comic%22%7D&page_type=video-animation-share&ug_token=%23HG2O3tUuMM3TA%23",
    facts: { zh: ["女频", "都市脑洞", "系统题材", "64 集", "1.5–3 分钟 / 集"], en: ["Female-oriented", "Urban", "System", "64 episodes", "1.5–3 min / episode"] },
    engine: { zh: "现实冲突 + 真人秀直播 + 弹幕舆论 + 系统奖励", en: "Real-life conflict + reality livestream + audience comments + system rewards" },
    decisions: {
      zh: ["用高频现实冲突制造即时情绪回报", "让弹幕同时承担围观视角与舆论变化", "把系统技能作为后续冲突中的回收点", "让日常摩擦逐步升级到网暴、胁迫与依法维权"],
      en: ["Frequent real-life conflicts create immediate emotional payoff", "Audience comments carry both public perspective and shifting sentiment", "System abilities return later as narrative payoffs", "Everyday friction escalates toward harassment, coercion and legal action"],
    },
    watchUrl: "https://novelquickapp.com/hongguo/ug/pages/video-animation-share?zlink=https%3A%2F%2Fapplink.novelquickapp.com%2FdVu4P%3FschemeParams%3D%257B%2522video_series_id%2522%253A%2522%2522%252C%2522vs_id_type%2522%253A%25221%2522%252C%2522source%2522%253A%25228%2522%252C%2522module_name%2522%253A%2522share%2522%252C%2522vid%2522%253A%25227681708950344977433%2522%252C%2522video_id%2522%253A%25227681625230011272216%2522%257D&page_type=video-animation-share",
  },
  {
    id: "wrong-marriage",
    title: "《错嫁藏拙天作之合》",
    altTitle: "《掀错盖头娶对妻》",
    source: { zh: "改编自快乐小跑驴《盖头掀错，这波血赚》", en: "Adapted from 快乐小跑驴's《盖头掀错，这波血赚》" },
    sourceUrl: "https://fanqienovel.com/page/7508980176810691609?enter_from=search",
    fullWatchUrl: "https://novelquickapp.com/hongguo/ug/pages/video-animation-share?encrypt_did=MDIEDHrr4ztz1M591wKMbQQQi0muqsuk6iVJvBUJGlR%2F%2BgQQAEE1M7HqMy%2Bm84ficy4kUA%3D%3D&uid=c1016ed964f265b335ed4313c6b0cfc0&zlink=https%3A%2F%2Fapplink.novelquickapp.com%2FdVu4P%3FschemeParams%3D%257B%2522video_series_id%2522%253A%2522%2522%252C%2522vs_id_type%2522%253A%25221%2522%252C%2522source%2522%253A%25228%2522%252C%2522module_name%2522%253A%2522share%2522%252C%2522vid%2522%253A%25227678804523124542526%2522%252C%2522share_toast_vid%2522%253A%25227678804537024465982%2522%252C%2522share_ab_group%2522%253A2%252C%2522video_id%2522%253A%25227678727661362875416%2522%257D&gd_label=click_schema_lhft_share_novelread_ios&share_type=4&landing_source=share&use_open_launch_app_novel=1&user_id=&did=c1016ed964f265b335ed4313c6b0cfc0&share_channel=wechat&report_params=%7B%22content_id_key%22%3A%22material_id%22%2C%22share_timestamp%22%3A1788014503%2C%22entrance%22%3A%22video_player_share_button%22%2C%22extra%22%3A%22%7B%5C%22profile_tab_name%5C%22%3A%5C%22profile_starred_video%5C%22%2C%5C%22show_rule%5C%22%3A%5C%22%5C%22%2C%5C%22is_consume_guide%5C%22%3A0%7D%22%2C%22content_id%22%3A%227678804523124542526%22%2C%22if_full_screen%22%3A0%2C%22type%22%3A%22video_player%22%2C%22read_progress%22%3A%220.29%22%2C%22content_type%22%3A%22motion_comic%22%7D&page_type=video-animation-share&ug_token=%23HG-LefnkI0zOE%23",
    facts: { zh: ["男频", "古装权谋", "双强", "先婚后爱", "68 集", "2–3 分钟 / 集"], en: ["Male-oriented", "Historical intrigue", "Two strong leads", "Arranged marriage to love", "68 episodes", "2–3 min / episode"] },
    engine: { zh: "错嫁信息差 + 扮猪吃虎 + 夫妻试探 + 皇室与家族权谋", en: "Mistaken-marriage information gap + hidden ability + marital testing + royal and family intrigue" },
    decisions: {
      zh: ["第一集以掀错盖头直接建立身份信息差", "男主的纨绔表象同时承担喜剧与隐藏实力悬念", "用棋局、站队与风险共担推进关系", "让情感变化与权谋压力在同一场景中发生"],
      en: ["The first episode opens with the wrong veil and an immediate identity gap", "The hero's playboy façade carries comedy and the mystery of hidden ability", "Chess, public allegiance and shared risk move the relationship forward", "Romantic change and political pressure happen inside the same scenes"],
    },
    watchUrl: "https://novelquickapp.com/hongguo/ug/pages/video-animation-share?zlink=https%3A%2F%2Fapplink.novelquickapp.com%2FdVu4P%3FschemeParams%3D%257B%2522video_series_id%2522%253A%2522%2522%252C%2522vs_id_type%2522%253A%25221%2522%252C%2522source%2522%253A%25228%2522%252C%2522module_name%2522%253A%2522share%2522%252C%2522vid%2522%253A%25227678804523124542526%2522%252C%2522video_id%2522%253A%25227678727661362875416%2522%257D&page_type=video-animation-share",
  },
];

export const dramaCapabilities = ["IP Analysis", "Audience Positioning", "Story Restructuring", "Character Adaptation", "Episode Design", "Hook Design", "Conflict Design", "Short-form Screenwriting", "Narrative Pacing"];
