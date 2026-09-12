# -*- coding: utf-8 -*-
def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

def m2(a, b, c=None, d=None):
    return merged(a, b) if c is None else merged(a, b) + merged(c, d)

AD = {
0: m2(
    ['आज संपत आहे', '*args tuple dict', 'तीन नियम', 'unpacking वापर'],
    ['प्रत्येक शब्द.', 'शिकलो आज.', 'पुन्हा करा.', 'practice जारी.',],
    ['शेवटी नोंदी', 'आठवण राहो'],
    ['तुमचे हे.', 'अभिनंदन.',],
),
1: m2(
    ['उपमा शेवट', 'नावे कितीही', 'गुणधर्म कसे', 'पिशवी वृत्ती'],
    ['आज झाले.', 'सराव करा.', 'पुन्हा येऊ.', 'आत्मविश्वास.',],
    ['शब्दांत सांगा', 'हेच functions'],
    ['practice करा.', 'समजले का.',],
),
2: m2(
    ['total संपत', 'sum गोळा', 'output स्थिर', 'verify करा'],
    ['पहिली दहा.', 'दुसरी तीस.', 'output बरोबर.', 'आज उत्तम.',],
    ['*args उदाहरण', 'practice पूर्ण'],
    ['अनुभव घ्या.', 'पुन्हा चालवा.',],
),
3: m2(
    ['**details शेवट', 'keyword कॅप्चर', 'output dict', 'मीरा ९०'],
    ['प्रत्येक keyword.', 'name score.', 'dict दिसते.', 'verify करा.',],
    ['**kwargs शेवट', 'practice पूर्ण'],
    ['output अचूक.', 'आता करा.',],
),
4: m2(
    ['greet शेवट', 'names tuple', 'नमस्कार वाटा', 'output दोन ओळी'],
    ['आरोही वेद.', 'greeting आधी.', 'output बरोबर.', 'practice करा.',],
    ['*names शेवट', 'output पहा'],
    ['verify करा.', 'पुन्हा चालवा.',],
),
5: m2(
    ['चुका शेवटी', 'comma विसरले', 'unpack विसरले', 'error टाळा'],
    ['संकलन होत नाही.', 'output गायब.', 'dict खुलत नाही.', 'सरळ करा.',],
    ['सामान्य दोष', 'लक्षात घ्या'],
    ['जपा नेहमी.', 'आता चालवा.',],
),
6: m2(
    ['नोंदी शेवट', 'tuple dict', 'परंपरा', 'क्रम'],
    ['*args tuple.', '**kwargs dict.', 'आधी सामान्य.', 'शेवटी keywords.',],
    ['तीन टीपा', 'practice संपूर्ण'],
    ['मनात ठेवा.', 'पुन्हा करा.',],
),
7: m2(
    ['scalar शेवट', 'average मोजा', 'output 4.0', 'Interactive'],
    ['तीन संख्या.', 'sum भाग.', 'output बरोबर.', 'verify करा.',],
    ['*nums गुणोत्तर', 'output तपासा'],
    ['practice करा.', 'स्वतः करा.',],
),
8: m2(
    ['bill शेवट', 'customer items', 'discount वजा', 'output मीरा'],
    ['₹50 + 30.', 'member=10.', 'output ₹70.', 'verify करा.',],
    ['*items **discounts', 'output छापा'],
    ['practice करा.', 'पुन्हा चालवा.',],
),
}