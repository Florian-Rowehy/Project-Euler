/*
    If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

    If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?

    Note: Do not count spaces or hyphens. 
    
    For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. 
    
    The use of "and" when writing out numbers is in compliance with British usage.
*/

/* 
chiffre 
0-9
10-19
20,30,40,50,60,70,80,90,
100
1000

sum 6511 = 6*sum1000 + sum1-6 + 5*sum100+ sum1-5 + sum
<=100 pas de and
> 100 => and

*/
const NB_LENGTH = {
    1: 'one'.length,
    2: 'two'.length,
    3: 'three'.length,
    4: 'four'.length,
    5: 'five'.length,
    6: 'six'.length,
    7: 'seven'.length,
    8: 'eight'.length,
    9: 'nine'.length,
    10: 'ten'.length,
    11: 'eleven'.length,
    12: 'twelve'.length,
    13: 'thirteen'.length,
    14: 'fourteen'.length,
    15: 'fifteen'.length,
    16: 'sixteen'.length,
    17: 'seventeen'.length,
    18: 'eighteen'.length,
    19: 'nineteen'.length,
    20: 'twenty'.length,
    30: 'thirty'.length,
    40: 'fourty'.length,
    50: 'fifty'.length,
    60: 'sixty'.length,
    70: 'seventy'.length,
    80: 'eighty'.length,
    90: 'ninety'.length,
    100: 'hundred'.length,
    1000: 'thousand'.length,
    'and': 'and'.length,
}
