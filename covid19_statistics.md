def normalize_data(n_cases, n_people, scale):
    # TODO) Calculate the number of cases per its population
    norm_cases = []
    for idx, n in enumerate(n_cases):
        norm_cases.append((n / n_people[idx]) * scale)
    return norm_cases

regions  = ['Seoul', 'Gyeongi', 'Busan', 'Gyeongnam', 'Incheon', 'Gyeongbuk', 'Daegu', 'Chungnam', 'Jeonnam', 'Jeonbuk', 'Chungbuk', 'Gangwon', 'Daejeon', 'Gwangju', 'Ulsan', 'Jeju', 'Sejong']
n_people = [9550227,  13530519, 3359527,     3322373,   2938429,     2630254, 2393626,    2118183,   1838353,   1792476,    1597179,   1536270,   1454679,   1441970, 1124459, 675883,   365309] # 2021-08
n_covid  = [    644,       529,      38,          29,       148,          28,      41,         62,        23,        27,         27,        33,        16,        40,      20,      5,        4] # 2021-09-21

sum_people = sum(n_people) # TODO) The total number of people
sum_covid = sum(n_covid) # TODO) The total number of new cases
norm_covid = normalize_data(n_covid, n_people, 1000000) # The new cases per 1 million people

# Print population by region
print('### Korean Population by Region')
print('* Total population:', sum_people)
print() # Print an empty line
print('| Region | Population | Ratio (%) |')
print('| ------ | ---------- | --------- |')
for idx, pop in enumerate(n_people):
    ratio = (pop / sum_people) * 100 # TODO) The ratio of new cases to the total
    print('| %s | %d | %.1f |' % (regions[idx], pop, ratio))
print()

# TODO) Print COVID-19 new cases by region
print('| Region  | New Cases | Cases per 1M |')
print('| ------- | --------- | ------------ |')
for idx, cases in enumerate(n_covid):
    print('| %s | %d | %.2f |' % (regions[idx], cases, norm_covid[idx]))



### Korean Population by Region
* Total population: 51669716

| Region | Population | Ratio (%) |
| ------ | ---------- | --------- |
| Seoul | 9550227 | 18.5 |
| Gyeongi | 13530519 | 26.2 |
| Busan | 3359527 | 6.5 |
| Gyeongnam | 3322373 | 6.4 |
| Incheon | 2938429 | 5.7 |
| Gyeongbuk | 2630254 | 5.1 |
| Daegu | 2393626 | 4.6 |
| Chungnam | 2118183 | 4.1 |
| Jeonnam | 1838353 | 3.6 |
| Jeonbuk | 1792476 | 3.5 |
| Chungbuk | 1597179 | 3.1 |
| Gangwon | 1536270 | 3.0 |
| Daejeon | 1454679 | 2.8 |
| Gwangju | 1441970 | 2.8 |
| Ulsan | 1124459 | 2.2 |
| Jeju | 675883 | 1.3 |
| Sejong | 365309 | 0.7 |

| Region  | New Cases | Cases per 1M |
| ------- | --------- | ------------ |
| Seoul | 644 | 67.43 |
| Gyeongi | 529 | 39.10 |
| Busan | 38 | 11.31 |
| Gyeongnam | 29 | 8.73 |
| Incheon | 148 | 50.37 |
| Gyeongbuk | 28 | 10.65 |
| Daegu | 41 | 17.13 |
| Chungnam | 62 | 29.27 |
| Jeonnam | 23 | 12.51 |
| Jeonbuk | 27 | 15.06 |
| Chungbuk | 27 | 16.90 |
| Gangwon | 33 | 21.48 |
| Daejeon | 16 | 11.00 |
| Gwangju | 40 | 27.74 |
| Ulsan | 20 | 17.79 |
| Jeju | 5 | 7.40 |
| Sejong | 4 | 10.95 |