# -*- coding: utf-8 -*-
def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

def m2(a, b, c=None, d=None):
    return merged(a, b) if c is None else merged(a, b) + merged(c, d)

AD = {
0: m2(
    ['पुनरावृत्ती आज', '*args tuple होते', '**kwargs dict', 'unpacking तीन'],
    ['प्रत्येक शब्द.', 'सर्व positional.', 'सर्व keyword.', 'call मध्ये.',],
    ['चार मुद्दे', 'आज विषय'],
    ['समजले का.', 'practice करा.',],
),
1: m2(
    ['एकूण किती', 'नावे लिहून', 'गुणधर्म कसे', 'पिशवी वैशिष्ट्य'],
    ['जितके विद्यार्थी.', 'तेवढे टीपा.', 'कितीही गोष्टी.', 'अनुभव घ्या.',],
    ['उपमा पुन्हा', 'हेच *args'],
    ['शब्दांत सांगा.', 'सोपे आहे.',],
),
2: m2(
    ['total चालवा', 'sum ने जोडा', 'चार ते दहा', 'output ओळी'],
    ['पहिल्या दहा.', 'दुसऱ्या तीस.', 'verify करा.', 'output बरोबर.',],
    ['*args उदाहरण', 'practice करा'],
    ['आज उत्तम.', 'पुन्हा चालवा.',],
),
3: m2(
    ['**details पहा', 'keyword गोळा', 'output शब्दकोश', 'मीरा ९०'],
    ['प्रत्येक वेळी.', 'name व score.', 'dict दिसते.', 'verify करा.',],
    ['**kwargs उदाहरण', 'practice करा'],
    ['output अचूक.', 'आता करा.',],
),
4: m2(
    ['greet चालवा', 'names tuple', 'नमस्कार जोड', 'output दोन ओळी'],
    ['आरोही वेद.', 'greeting आधी.', 'output बरोबर.', 'practice करा.',],
    ['*names वापर', 'output पहा'],
    ['verify करा.', 'पुन्हा चालवा.',],
),
5: m2(
    ['चुका ओळखा', 'comma विसरले', 'unpack विसरले', 'error स्पष्ट'],
    ['संकलन होत नाही.', 'output गायब.', 'dict खुलत नाही.', 'सुरू करा.',],
    ['सामान्य दोष', 'लक्षात घ्या'],
    ['जपा नेहमी.', 'आता चालवा.',],
),
6: m2(
    ['नोंदी चार', 'tuple dict', 'परंपरा नावे', 'क्रम नियम'],
    ['*args tuple.', '**kwargs dict.', 'प्रत्येक वेळी.', 'आधी शेवटी.',],
    ['तीन टीपा', 'practice मागे'],
    ['मनात ठेवा.', 'पुन्हा करा.',],
),
7: m2(
    ['scalar चालवा', 'average काढा', 'output 4.0', 'Interactive खेळ'],
    ['तीन संख्या.', 'sum भाग.', 'output बरोबर.', 'verify करा.',],
    ['*nums गुणोत्तर', 'output तपासा'],
    ['practice करा.', 'स्वतः करा.',],
),
8: m2(
    ['bill चालवा', 'customer items', 'discount जोड', 'output मीरा'],
    ['₹50 + 30.', 'member=10.', 'output ₹70.', 'verify करा.',],
    ['*items **discounts', 'output छापा'],
    ['practice करा.', 'पुन्हा चालवा.',],
),
}