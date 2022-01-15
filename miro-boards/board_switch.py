import argparse
from mako.template import Template
import json

if __name__ == "__main__":
    sessiondict = {}
    with open("config.json") as fileptr:
        sessiondict = json.load(fileptr)

    parser = argparse.ArgumentParser(description='Switch to next session.')
    parser.add_argument('-to', dest='session', type=str,
                        help='Name of the session you want to switch to')

    args = parser.parse_args()

    template=""
    with open("./templates/iframe.html") as fileptr:
        template = fileptr.read()


    rooms = sessiondict[args.session]

    for room in rooms.keys():
        target_url = rooms[room]
        rendered = Template(template).render(website= target_url)

        with open("html/%s.html" % room, "w") as fileptr:
            fileptr.write(rendered)

