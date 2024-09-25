import csv
import os

def read_data(filename):
    data = []
    with open(filename, 'r', newline='') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            # Skip header row if it starts with #
            if row and not row[0].startswith('#'):
                try:
                    data.append([int(num) for num in row])  # Convert to integers
                except ValueError:
                    print(f"Warning: Non-integer value found in row {row}. Skipping...")
    return data

def calc_weighted_average(data_2d, weight):
    average = []
    for row in data_2d:
        m_score, f_score = row
        weighted_avg = weight[0] * m_score + weight[1] * f_score
        average.append(weighted_avg)
    return average

def analyze_data(data_1d):
    n = len(data_1d)
    mean = sum(data_1d) / n
    var = sum((x - mean) ** 2 for x in data_1d) / n
    sorted_data = sorted(data_1d)
    median = (sorted_data[n // 2] if n % 2 == 1 else
              (sorted_data[n // 2 - 1] + sorted_data[n // 2]) / 2)
    return mean, var, median, min(data_1d), max(data_1d)

if __name__ == '__main__':
    # Set the absolute path to the CSV file
    desktop_path = r"C:\Users\kesko\Downloads\python02_lab\data\class_score_en.csv"
    
    data = read_data(desktop_path)
    
    if data and len(data[0]) == 2:  # Check if 'data' is valid
        average = calc_weighted_average(data, [40 / 125, 60 / 100])

        # Print the analysis report in Markdown format
        print('### Individual Score\n')
        print('| Midterm | Final | Average |')
        print('| ------- | ----- | ------- |')
        for ((m_score, f_score), a_score) in zip(data, average):
            print(f'| {m_score} | {f_score} | {a_score:.3f} |')

        print('\n### Examination Analysis')
        data_columns = {
            'Midterm': [m_score for m_score, _ in data],
            'Final'  : [f_score for _, f_score in data],
            'Average': average 
        }
        for name, column in data_columns.items():
            mean, var, median, min_, max_ = analyze_data(column)
            print(f'* {name}')
            print(f'  * Mean: **{mean:.3f}**')
            print(f'  * Variance: {var:.3f}')
            print(f'  * Median: **{median:.3f}**')
            print(f'  * Min/Max: ({min_:.3f}, {max_:.3f})')
