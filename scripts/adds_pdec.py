# -*- coding: utf-8 -*-
def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

def m2(a, b, c=None, d=None):
    return merged(a, b) if c is None else merged(a, b) + merged(c, d)

AD = {
0: m2(
    ['decorator काय', 'function घेते', 'सजवलेली परत', '@ ने लागू'],
    ['प्रत्येक शब्द.', 'पुन्हा वाचा.', 'practice करा.', 'मनात ठेवा.',],
    ['wrapper आत', 'fn सजवली'],
    ['तीन मुद्दे.', 'हेच तत्त्व.',],
),
1: m2(
    ['जुने function', 'डकावली जोडणे', 'चहा साखर', 'everything मध्ये'],
    ['न पाडता वाढवा.', 'function शुद्ध.', 'decorator भोवती.', 'नोंद तपासणी.',],
    ['उपमा चांगली', 'अनुभव खुला'],
    ['मराठीत समज.', 'practice करा.',],
),
2: m2(
    ['star decorator', 'wrapper परत', 'तीन तारे', 'नमस्कार मधे'],
    ['function सजवले.', 'आतील wrapper.', '*** जोडले.', 'output अचूक.',],
    ['@star वापर', 'verify करा'],
    ['practice करा.', 'output बरोबर.',],
),
3: m2(
    ['twice decorator', 'fn दुप्पट', 'add_five वापर', 'output 20'],
    ['जोडून पुन्हा.', 'fn(fn(x))', 'दहा + पाच.', 'पुन्हा + पाच.',],
    ['@twice वापर', 'verify करा'],
    ['practice करा.', 'output स्थिर.',],
),
4: m2(
    ['log decorator', 'माहिती print', 'काम झाले', 'output दोन ओळी'],
    ['चालू होते.', 'function नाव.', 'मग काम.', 'output बरोबर.',],
    ['@log वापर', 'verify करा'],
    ['practice करा.', 'अनुभव घ्या.',],
),
5: m2(
    ['wrapper return', 'argument लक्षण', '@ स्थान', 'नियम पाळा'],
    ['विसरू नका.', 'wrapper मध्ये argument द्या.', 'आधी define.', 'अन्यथा error.',],
    ['सामान्य चूक', 'लक्षात घ्या'],
    ['जपा नेहमी.', 'आता करा.',],
),
6: m2(
    ['decorator व्याख्या', '@ का असतो', 'return नक्की', 'arguments द्या'],
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