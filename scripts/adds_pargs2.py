# -*- coding: utf-8 -*-
def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

def m2(a, b, c=None, d=None):
    return merged(a, b) if c is None else merged(a, b) + merged(c, d)

AD = {
0: m2(
    ['*args **kwargs', 'किती arguments', 'tuple dict', 'unpacking वापर'],
    ['प्रत्येक function.', 'सर्व positional.', 'सर्व keyword.', 'call मध्ये.',],
    ['अस्थिर विषय', 'आज शिकतो'],
    ['समजले का.', 'practice करा.',],
),
1: m2(
    ['एकूण विद्यार्थी', 'गणना सोपी', 'नावे लिहून', 'गुणधर्म कुठले'],
    ['जितके येतील.', 'तेवढे मोजा.', 'कितीही ठेवा.', 'practice करा.',],
    ['उपमा उजळ', 'सोपे समज'],
    ['शब्दांत सांगा.', 'practice जारी.',],
),
2: m2(
    ['total function', 'sum(nums)', 'चार संख्या', 'output दोन ओळी'],
    ['*nums वापर.', 'एकत्र गोळा.', 'पहिली दहा.', 'दुसरी तीस.',],
    ['*args उदाहरण', 'verify करा'],
    ['अचूक गुणाकार.', 'output बरोबर.',],
),
3: m2(
    ['**details शब्द', 'name score', 'output dict', 'मीरा ९०'],
    ['प्रत्येक keyword.', 'गोळा वस्तू.', 'output दिसते.', 'verify करा.',],
    ['**kwargs उदाहरण', 'output पहा'],
    ['बरोबर आहे.', 'अनुभव घ्या.',],
),
4: m2(
    ['greet function', 'names tuple', 'नमस्कार जोड', 'output दोन ओळी'],
    ['आरोही वेद.', 'greeting आधी.', 'output अचूक.', 'practice करा.',],
    ['*names वापर', 'output तपासा'],
    ['verify करा.', 'पुन्हा चालवा.',],
),
5: m2(
    ['चुका चार', 'comma विसरले', 'tuple unpack', 'error आला'],
    ['संकलन होत नाही.', 'output नाही दिसत.', 'पुन्हा करा.', 'लक्षात घ्या.'],
    ['सामान्य चूक', 'लक्षात घ्या'],
    ['अशा नको.', 'आता करा.',],
),
6: m2(
    ['tuple dict वेगळे', 'परंपरा क्रम', 'arguments order', 'keywords शेवटी'],
    ['*args tuple.', '**kwargs dict.', 'आधी सामान्य.', 'शेवटी keywords.',],
    ['तीन टीपा', 'practice मागे'],
    ['मनात ठेवा.', 'पुन्हा करा.',],
),
7: m2(
    ['scalar function', 'average काढा', 'output 4.0', 'Interactive खेळ'],
    ['तीन संख्या.', 'sum/len.', 'output बरोबर.', 'verify करा.',],
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