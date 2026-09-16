"""Generate the public AI-tool research PDF with an embedded CJK font.

This report is a desktop-research selection guide, not a controlled benchmark.
Set PORTFOLIO_CJK_FONT to an alternate CJK TrueType font when needed.
"""

from __future__ import annotations

import os
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "reports" / "ai-script-tool-research-2026.pdf"
W, H = A4
FONT = "PortfolioCJK"
INK, MUTED, RED = colors.HexColor("#15171A"), colors.HexColor("#666B70"), colors.HexColor("#D7262E")
PAPER, LIGHT, LINE = colors.HexColor("#FAF9F6"), colors.HexColor("#F2F1ED"), colors.HexColor("#D9D6CF")


def font_path() -> Path:
    for value in (os.environ.get("PORTFOLIO_CJK_FONT"), r"C:\Windows\Fonts\NotoSansSC-VF.ttf", r"C:\Windows\Fonts\Deng.ttf"):
        if value and Path(value).is_file():
            return Path(value)
    raise FileNotFoundError("Set PORTFOLIO_CJK_FONT to a CJK TrueType font.")


def wrapped(text: str, size: float, width: float) -> list[str]:
    lines, current = [], ""
    for char in text:
        candidate = current + char
        if current and pdfmetrics.stringWidth(candidate, FONT, size) > width:
            lines.append(current)
            current = char
        else:
            current = candidate
    if current:
        lines.append(current)
    return lines


def draw_text(c, text, x, y, width, size=9, leading=14, color=INK, max_lines=None):
    c.setFont(FONT, size)
    c.setFillColor(color)
    lines = wrapped(text, size, width)
    if max_lines:
        lines = lines[:max_lines]
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def page(c, number, eyebrow, title):
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(RED)
    c.setFont(FONT, 8)
    c.drawString(18 * mm, H - 19 * mm, eyebrow)
    c.setFillColor(INK)
    c.setFont(FONT, 22)
    c.drawString(18 * mm, H - 31 * mm, title)
    c.setStrokeColor(LINE)
    c.line(18 * mm, 14 * mm, W - 18 * mm, 14 * mm)
    c.setFillColor(MUTED)
    c.setFont(FONT, 7)
    c.drawString(18 * mm, 9 * mm, "YINHAO · AI 短剧 / AI 剧本工具市场测评")
    c.drawRightString(W - 18 * mm, 9 * mm, str(number))
    return H - 42 * mm


def section(c, text, y):
    c.setFillColor(RED)
    c.setFont(FONT, 8)
    c.drawString(18 * mm, y, text)
    return y - 6 * mm


def card(c, label, text, x, y, width, height):
    c.setFillColor(LIGHT)
    c.setStrokeColor(LINE)
    c.roundRect(x, y - height, width, height, 2 * mm, fill=1, stroke=1)
    c.setFillColor(RED)
    c.setFont(FONT, 8)
    c.drawString(x + 4 * mm, y - 6 * mm, label)
    draw_text(c, text, x + 4 * mm, y - 13 * mm, width - 8 * mm, 8.2, 12)


def table(c, headers, rows, widths, y, row_h, font_size=7.2):
    x = 18 * mm
    total = sum(widths)
    c.setFillColor(INK)
    c.rect(x, y - row_h, total, row_h, fill=1, stroke=0)
    xx = x
    for header, width in zip(headers, widths):
        draw_text(c, header, xx + 2 * mm, y - 5 * mm, width - 4 * mm, 7.4, 9, colors.white, 2)
        xx += width
    y -= row_h
    for index, row in enumerate(rows):
        c.setFillColor(colors.white if index % 2 == 0 else LIGHT)
        c.setStrokeColor(LINE)
        c.rect(x, y - row_h, total, row_h, fill=1, stroke=1)
        xx = x
        for value, width in zip(row, widths):
            draw_text(c, str(value), xx + 2 * mm, y - 4.5 * mm, width - 4 * mm, font_size, font_size + 2.7, INK, 3)
            xx += width
        y -= row_h
    return y


def build():
    path = font_path()
    pdfmetrics.registerFont(TTFont(FONT, str(path)))
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
    c.setTitle("AI 短剧 / AI 剧本工具市场测评")
    c.setAuthor("YINHAO")

    y = page(c, 1, "AI RESEARCH · TOOL EVALUATION · WORKFLOW", "AI 短剧 / AI 剧本工具市场测评")
    y = draw_text(c, "通用模型、专业编剧工具、短剧 Agent 与多模型协同工作流的桌面研究", 18 * mm, y, 174 * mm, 11, 17, MUTED) - 4 * mm
    card(c, "研究范围", "公开产品能力、行业报道、第三方横评与创作者社区反馈", 18 * mm, y, 83 * mm, 26 * mm)
    card(c, "研究输出", "共性痛点、工具角色、八步 Workflow 与 100 分评测框架", 109 * mm, y, 83 * mm, 26 * mm)
    y -= 35 * mm
    y = section(c, "核心研究问题", y)
    questions = ["为什么单一模型难以一键生成精品短剧？", "不同类型工具分别适合什么环节？", "如何通过 Story Bible、多模型审稿与人工终审降低设定漂移？", "如何建立统一、可解释、可复用的选型框架？"]
    for i, item in enumerate(questions, 1):
        c.setFillColor(RED); c.setFont(FONT, 15); c.drawString(18 * mm, y, f"{i:02d}")
        y = draw_text(c, item, 34 * mm, y, 158 * mm, 9.2, 14) - 4 * mm
    y = section(c, "三个关键发现", y - 2 * mm)
    findings = ["精品短剧不是单一模型的一次性生成任务，而是研究、架构、写作、审稿与生产之间的协同系统。", "不同工具更适合承担不同角色；选型重点是任务匹配，而不是制造脱离场景的总排名。", "长篇一致性、人物动机和对白质感仍需要结构化记忆、交叉审稿与人工判断。"]
    for i, item in enumerate(findings, 1):
        y = draw_text(c, f"{i}. {item}", 18 * mm, y, 174 * mm, 8.8, 13) - 2 * mm
    card(c, "方法边界", "本报告是桌面研究，不是在统一输入、参数和环境下完成的实验室 Benchmark；不提供模型总分或星级排名。", 18 * mm, y - 2 * mm, 174 * mm, 27 * mm)
    c.showPage()

    y = page(c, 2, "01 · PROBLEM SPACE", "五类共性痛点")
    pain = [("剧情模板化", "高频套路被重复调用，多集后相似度迅速上升。"), ("人物工具化", "角色缺少真实动机，容易成为推动情节的功能件。"), ("长篇一致性不足", "设定、关系、时间线与能力边界在几十集后漂移。"), ("对白机械化", "潜台词被直接说出，缺少个性、停顿、回避与情绪层次。"), ("短剧工业规则理解不足", "前几秒冲突、单集情绪目标、阶段回报与尾钩执行不稳定。")]
    y = table(c, ["痛点", "具体表现"], pain, [47 * mm, 127 * mm], y, 18 * mm, 8.2) - 9 * mm
    y = section(c, "02 · TOOL LANDSCAPE", y)
    c.setFillColor(INK); c.setFont(FONT, 16); c.drawString(18 * mm, y, "工具角色，而非单一胜负"); y -= 8 * mm
    landscape = [("通用大模型", "架构、长文本、素材解析与创意", "按任务分工，避免一键生成承担全部责任"), ("专业编剧工具", "Story Bible、标准格式与人物管理", "适合维持事实边界和衔接专业流程"), ("短剧 / 漫剧 Agent", "分镜、资产、视频与生产链路", "适合生产衔接，仍需人工终审"), ("人工编剧 / 制片", "动机、情绪、节奏、合规与适配", "对最终质量和责任边界不可替代")]
    y = table(c, ["类别", "更适合承担", "使用原则"], landscape, [38 * mm, 66 * mm, 70 * mm], y, 19 * mm, 7.7) - 8 * mm
    card(c, "选型原则", "先定义任务、事实边界和验收标准，再选择工具；公开信息与创作者反馈不能替代具体项目中的实测。", 18 * mm, y, 174 * mm, 25 * mm)
    c.showPage()

    y = page(c, 3, "03 · ROLE MAP", "工具角色地图 · 非排名")
    general = [("Claude", "主笔 / 人物医生", "长文本、人物关系与对白", "长期自由生成可能表达趋同"), ("ChatGPT", "剧情架构 / Agent", "结构推理、拆解与工作流", "宽泛 Prompt 下容易模板化"), ("Gemini", "IP 解析 / 第二审稿", "长上下文、多模态与时间线", "最终对白仍需主笔判断"), ("DeepSeek", "剧情陪练 / 逻辑检查", "中文推理、因果与伏笔推演", "专业节奏与格式需要补足"), ("豆包", "本土创意 / 爽点发散", "中文语感、热点与短视频表达", "不宜单独承担长线一致性")]
    y = table(c, ["工具", "建议角色", "相对优势", "使用边界"], general, [25 * mm, 43 * mm, 56 * mm, 50 * mm], y, 17 * mm, 7.0) - 7 * mm
    vertical = [("Sudowrite", "Story Bible / 世界观", "持续引用人物、世界、概要与场景事实"), ("NolanAI", "Screenplay / 标准格式", "影视结构、场景、人物与前期制作衔接"), ("小云雀AI", "短剧工业流程", "故事、剧本、分镜、资产到视频"), ("纳逗Pro", "影视短片 / 分镜导演", "景别、构图、运镜、时长与声音设计"), ("万兴剧厂", "剧本到成片衔接", "人物、场景、道具、分镜与 AI 视频"), ("天工短剧工作台", "生产 Workflow 参考", "剧本识别、分镜拆分、Prompt 到视频"), ("巨日禄AI", "批量生产 / 多 Agent", "一致性、分镜、审片、剪辑与协作")]
    y = table(c, ["工具", "建议角色", "观察重点"], vertical, [39 * mm, 53 * mm, 82 * mm], y, 14.5 * mm, 6.9) - 4 * mm
    draw_text(c, "说明：以上是任务匹配地图，不代表统一条件下的质量高低、市场份额或采购建议。", 18 * mm, y, 174 * mm, 7.4, 11, MUTED)
    c.showPage()

    y = page(c, 4, "04 · MULTI-MODEL WORKFLOW", "八步协同工作流")
    workflow = [("01", "市场 / 题材研究", "豆包 + DeepSeek + ChatGPT", "竞品、受众、标签、爽点与桥段拆解"), ("02", "故事架构", "ChatGPT + Claude", "世界观、矛盾、关系、成长弧与总线"), ("03", "Story Bible", "借鉴 Sudowrite", "人物卡、规则、禁区、时间线与伏笔"), ("04", "短剧化", "短剧工具 + 人工编剧", "单集目标、冲突、峰值、释放与尾钩"), ("05", "剧本一稿", "Claude / 主笔模型", "完成可读、可审的剧本初稿"), ("06", "多模型审稿", "多模型交叉检查", "逻辑、一致性、因果、人物与对白"), ("07", "人工终审", "人工编剧 / 制片", "动机、真实、节奏、合规与平台适配"), ("08", "进入生产", "生产工具链", "分镜、资产、视频、配音与剪辑")]
    y = table(c, ["步骤", "阶段", "协作角色", "交付 / 检查重点"], workflow, [17 * mm, 35 * mm, 55 * mm, 67 * mm], y, 20 * mm, 7.0) - 9 * mm
    card(c, "质量闸门", "每一步保留输入、约束与版本记录；多模型审稿是交叉检查，不是多数投票；最终发布责任由人工承担。", 18 * mm, y, 174 * mm, 26 * mm)
    y -= 35 * mm
    c.setFillColor(INK); c.setFont(FONT, 14); c.drawString(18 * mm, y, "从“选择最强模型”转向“设计可控流程”")
    draw_text(c, "把创意发散、事实记忆、结构推理、语言写作、风险审查和生产执行拆成可验证环节，让不同工具在明确边界内协同。", 18 * mm, y - 8 * mm, 174 * mm, 9, 14)
    c.showPage()

    y = page(c, 5, "05 · EVALUATION FRAMEWORK", "100 分评测框架")
    scoring = [("剧情原创度", "10", "题材组合、事件设计与表达避免机械复刻"), ("人物立体度", "12", "动机、欲望、缺陷、关系与成长成立"), ("人物一致性", "10", "设定、能力、语气、关系和行为稳定"), ("对白自然度", "10", "口语、潜台词、节奏、个性与情绪"), ("冲突强度", "10", "冲突清晰、递进且服务人物与主题"), ("爽点密度", "10", "阶段回报有效且不过度重复"), ("单集尾钩", "10", "形成明确、可信的继续观看动机"), ("长篇一致性", "10", "时间线、事实、伏笔与因果链跨集维持"), ("Prompt 可控性", "8", "约束遵循、可修改性与输出稳定程度"), ("短剧生产适配度", "10", "格式、拆分、分镜、资产与后续流程衔接")]
    y = table(c, ["维度", "权重", "评估关注点"], scoring, [43 * mm, 21 * mm, 110 * mm], y, 15 * mm, 7.1) - 8 * mm
    card(c, "如何使用", "先用同一项目样本定义评分锚点，再由至少两名评审独立记录证据与分数；分数用于定位差距，不用于发布脱离任务上下文的模型排行榜。", 18 * mm, y, 174 * mm, 29 * mm)
    y -= 38 * mm
    y = section(c, "研究限制", y)
    y = draw_text(c, "产品能力、价格和可用性持续变化；公开资料不能替代采购前验证。报告未在统一环境下复测全部工具，也不作商业背书。最终选择应结合内容类型、团队能力、数据安全、预算与交付链路。", 18 * mm, y, 174 * mm, 8.5, 13)
    draw_text(c, "结论：稳定的创作质量来自清晰任务、持续记忆、多轮审稿与人工责任，而不是一个无法解释的总分。", 18 * mm, y - 5 * mm, 174 * mm, 10, 15, INK)
    c.save()
    print(f"Generated {OUTPUT} with embedded font {path}")


if __name__ == "__main__":
    build()
