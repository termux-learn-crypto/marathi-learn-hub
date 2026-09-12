# -*- coding: utf-8 -*-
def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

AD = {
1: merged(['दिसायला उपमा'], ['मोबाईल जिवंत.',]),
4: merged(['नोंद ताजी'], ['गुण बदलून पहा.',]),
8: merged(['समाप्ती योग'], ['धडा पूर्ण.',]),
}