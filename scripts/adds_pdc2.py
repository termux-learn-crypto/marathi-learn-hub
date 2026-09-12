# -*- coding: utf-8 -*-
def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

def m2(a, b, c=None, d=None):
    return merged(a, b) if c is None else merged(a, b) + merged(c, d)

AD = {
0: m2(
    ['आज विषय dataclass', '@dataclass सोपे', 'init repr eq', 'field वापर'],
    ['प्रत्येक शब्द.', 'पुन्हा अभ्यास.', 'practice करा.', 'मनात घट्ट.',],
    ['default values', 'मोठा class'],
    ['हेच सार.', 'आज शिकतो.',],
),
1: m2(
    ['फॉर्म भरा', 'कागद तयार', 'गुणधर्म फक्त', 'Python लिहितो'],
    ['रटाळ रचना नाही.', 'फक्त माहिती.', 'machinery.', 'सोपे होते.',],
    ['उपमा पुन्हा', 'मराठीत समज'],
    ['practice करा.', 'समजून घ्या.',],
),
2: m2(
    ['Point तपासा', 'x y दोन', 'print आणि sum', 'output तीन ओळी'],
    ['तीन बेरीज.', 'चार बेरीज.', 'समानता True.', 'verify करा.',],
    ['dataclass import', 'practice करा'],
    ['अनुभव घ्या.', 'आज उत्तम.',],
),
3: m2(
    ['Product तपासा', 'दूध किंमत', 'total method', 'output 112'],
    ['default शून्य.', 'किंमत 56.', 'गुणा दोन.', 'verify करा.',],
    ['method वापरा', 'practice करा'],
    ['समजले का.', 'आज उत्तम.',],
),
4: m2(
    ['Team तपासा', 'field factory', 'players appended', 'output संघ'],
    ['मावळे नाव.', 'आरोही वेद.', 'सूची तयार.', 'verify करा.',],
    ['mutable टाळा', 'practice करा'],
    ['अनुभव घ्या.', 'आज उत्तम.',],
),
5: m2(
    ['mutable धोका', 'list थेट', 'types विसरले', '@dataclass हवा'],
    ['default दगडफोड.', 'field योग्य.', 'लिहा नेहमी.', 'विसरू नका.',],
    ['सामान्य दोष', 'practice करा'],
    ['जपा नेहमी.', 'आता करा.',],
),
6: m2(
    ['init repr eq', 'कमी कोड', 'factory कधी', 'asdict वापर'],
    ['आपोआप सर्व.', 'मोठा वर्ग.', 'mutable हवे.', 'साधन उपयोगी.',],
    ['चार नोंदी', 'practice मागे'],
    ['मनात ठेवा.', 'पुन्हा करा.',],
),
7: m2(
    ['Book तपासा', 'श्रीमान योगी', 'दोन गुणधर्म', 'output एकत्र'],
    ['पाने 320.', 'दोन्ही print.', 'verify करा.', 'practice करा.',],
    ['dataclass खेळ', 'output तपासा'],
    ['अनुभव घ्या.', 'अचूक दिसते.',],
),
8: m2(
    ['Card तपासा', 'आरोही मावळे', 'व्यक्तिगत कार्ड', 'output सरळ'],
    ['नाव संघ.', 'एकत्र सांगा.', 'verify करा.', 'practice करा.',],
    ['Mini प्रोजेक्ट', 'धडा संपला'],
    ['अभिनंदन.', 'पुढील विषय.',],
),
}