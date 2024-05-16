import csv
import json


def csv_to_json(csv_file_path, json_file_path):
    with open(csv_file_path, mode='r', newline='', encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file, delimiter=';')
        data = list(csv_reader)

    for element in data:
        element["precoContratual"] = element["precoContratual"].replace(',','.')
        element["precoContratual"] = float(element["precoContratual"])
        element["prazoExecucao"] = int(element["prazoExecucao"])

    with open(json_file_path, mode='w', encoding='utf-8') as json_file:
        json.dump(data, json_file,ensure_ascii=False, indent=4)

csv_file_path = 'contratos2024.csv'
json_file_path = 'contratos2024.json'
csv_to_json(csv_file_path, json_file_path)