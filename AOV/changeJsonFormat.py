import os
import json

script_dir = os.path.dirname(os.path.abspath(__file__))

directories = [
    os.path.join(script_dir, name)
    for name in os.listdir(script_dir)
    if os.path.isdir(os.path.join(script_dir, name))
]

for directory in directories:
    category = os.path.basename(directory)

    files = [
        file
        for file in os.listdir(directory)
        if os.path.isfile(os.path.join(directory, file))
    ]

    for file in files:
        file_path = os.path.join(directory, file)
        file_name = os.path.splitext(file)[0]

        if os.path.getsize(file_path) == 0:
            file_data = {}
        else:
            with open(file_path, "r", encoding="utf-8") as f:
                file_data = json.load(f)

        file_data["heroName"] = file_name
        file_data["heroCategory"] = category
        file_data["heroImage"] = file_data.get("heroImage") or ""

        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(file_data, f, ensure_ascii=False)
