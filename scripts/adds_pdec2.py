# -*- coding: utf-8 -*-
def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

def m2(a, b, c=None, d=None):
    return merged(a, b) if c is None else merged(a, b) + merged(c, d)

AD = {
0: m2(
    ['decorator मूल', 'function परत', '@ स्थान', 'wrapper आत'],
    ['प्रत्येक शब्द.', 'पुन्हा वाचा.', 'practice करा.', 'मनात ठेवा.',],
    ['तीन मुद्दे', 'हे तत्त्व'],
    ['सोपे आहे.', 'आज शिका.',],
),
1: m2(
    ['चहा उपमा', 'function शुद्ध', 'decorator भोवती', 'साखर दूध'],
    ['जुने वाढवा.', 'चहा तसाच.', 'नवी चव.', 'log तपासणी.',],
    ['उपमा सोपी', 'मराठीत समज'],
    ['practice करा.', 'खोल जाणा.',],
),
2: m2(
    ['star चालवा', 'wrapper परत', 'तीन तारे', 'output नमस्कार'],
    ['function सजवले.', 'आतील wrapper.', '*** चारीकडे.', 'output अचूक.',],
    ['@star वापर', 'verify करा'],
    ['practice करा.', 'output बरोबर.',],
),
3: m2(
    ['twice चालवा', 'fn दुप्पट', 'add_five वापर', 'output 20'],
    ['जोडून पुन्हा.', 'fn(fn(x)).', 'दहा + पाच.', 'पुन्हा + पाच.',],
    ['@twice वापर', 'verify करा'],
    ['practice करा.', 'output स्थिर.',],
),
4: m2(
    ['log चालवा', 'माहिती print', 'काम झाले', 'output दोन ओळी'],
    ['चालू होते.', 'function नाव.', 'मग काम.', 'output बरोबर.',],
    ['@log वापर', 'verify करा'],
    ['practice करा.', 'अनुभव घ्या.',],
),
5: m2(
    ['wrapper return', 'argument लक्षण', '@ स्थान', 'नियम पाळा'],
    ['विसरू नका.', 'wrapper मध्ये द्या.', 'आधी define.', 'अन्यथा error.',],
    ['सामान्य चूक', 'लक्षात घ्या'],
    ['जपा नेहमी.', 'आता करा.',],
),
6: m2(
    ['decorator नोंदी', '@ का असतो', 'return नक्की', 'arguments द्या'],
    ['function घेऊन देणे.', 'सोपे सजवणे.', 'wrapper मधे.', 'प्रत्येक वेळी.',],
    ['तीन नोंदी', 'practice मागे'],
    ['मनात ठेवा.', 'पुन्हा करा.',],
),
7: m2(
    ['double_out खेळ', 'score दुप्पट', 'output 42', 'Interactive'],
    ['एकवीस दुप्पट.', 'फलित बेचाळीस.', 'verify करा.', 'practice करा.',],
    ['@double_out', 'output तपासा'],
    ['अनुभव घ्या.', 'अचूक दिसते.',],
),
8: m2(
    ['boxed प्रोजेक्ट', 'चौकटीत उत्तर', 'pong दाखवा', 'output पहा'],
    ['<| pong |>', 'बॉक्स चारीकडे.', 'सजवले निकाल.', 'verify करा.',],
    ['@boxed वापर', 'practice करा'],
    ['धडा संपला.', 'अभिनंदन.',],
),
}