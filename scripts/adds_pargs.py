# -*- coding: utf-8 -*-
def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

def m2(a, b, c=None, d=None):
    return merged(a, b) if c is None else merged(a, b) + merged(c, d)

AD = {
0: m2(
    ['*args tuple नेमके', '**kwargs dict', 'unpacking *list', 'function किती'],
    ['प्रत्येक शब्द.', 'पुन्हा वाचा.', 'practice करा.', 'मनात ठेवा.',],
    ['कधी कधी', 'अस्थिर arguments'],
    ['हे शिकले.', 'आज उपयुक्त.',],
),
1: m2(
    ['एकूण विद्यार्थी', 'नावे लिहून', 'गुणधर्म द्यावेत', 'पिशवी घेणारी'],
    ['सगळ्यांचे.', 'ठरवले नाही.', 'कितीही माहिती.', 'test करा.',],
    ['उपमा सोपी', 'विद्यार्थी गणना'],
    ['पुन्हा ऐका.', 'समजले का.',],
),
2: m2(
    ['total function', 'sum(nums)', 'चार संख्या', 'output दोन ओळी'],
    ['*nums ने.', 'शेवटी गोळा.', 'पहिली ओळ दहा.', 'दुसरी ओळ तीस.',],
    ['*args उदाहरण', 'verify करा'],
    ['अचूक गुणाकार.', 'output बरोबर.',],
),
3: m2(
    ['**details शब्द', 'name score', 'output शब्दकोश', 'दिसते छापा'],
    ['प्रत्येक keyword.', 'मीरा ९०.', 'dict दिसते.', 'verify करा.',],
    ['**kwargs उदाहरण', 'output तपासा'],
    ['बरोबर आहे.', 'अनुभव घ्या.',],
),
4: m2(
    ['greet function', 'names tuple', 'नमस्कार जोड', 'दोन ओळी छाप'],
    ['पहिले नाव आरोही.', 'दुसरे नाव वेद.', 'greeting आधी.', 'output अचूक.',],
    ['*names वापर', 'output पहा'],
    ['practice करा.', 'पुन्हा चालवा.',],
),
5: m2(
    ['comma विसरले', 'tuple खुलत नाही', 'dict unpack नाही', 'error येतो'],
    ['संकलन होत नाही.', 'output नाही दिसत.', 'पुन्हा करा.', 'लक्षात घ्या.',],
    ['सामान्य चूक', 'लक्षात घ्या'],
    ['अशा नको.', 'आता चालवा.',],
),
6: m2(
    ['tuple dict वेगळे', 'परंपरा नमुना', 'नियमित arguments', 'क्रम लक्षात'],
    ['*args tuple.', '**kwargs dict.', 'आधी सामान्य.', 'शेवटी keywords.',],
    ['तीन नोंदी', 'practice मागे'],
    ['मनात ठेवा.', 'पुन्हा करा.',],
),
7: m2(
    ['scalar function', 'sum(len)', 'output 4.0', 'Interactive खेळ'],
    ['तीन संख्या.', 'सरासरी काढा.', 'output बरोबर.', 'verify करा.',],
    ['*nums गुणोत्तर', 'output तपासा'],
    ['practice करा.', 'स्वतः करा.',],
),
8: m2(
    ['bill function', 'customer items', 'discount जोड', 'output मीरा'],
    ['₹50 + 30.', 'member=10.', 'output ₹70.', 'verify करा.',],
    ['*items **discounts', 'output छापा'],
    ['practice करा.', 'पुन्हा चालवा.',],
),
}