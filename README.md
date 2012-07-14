npm-yaml
========

YAML support for npm's `package.json`. Yes, write your dependencies in YAML.


## Installation

1. Install npm-yaml via `npm install -g npm-yaml`
2. Set `npm-yaml` as your npm pre-hook: `npm set onload-script npm-yaml`

## WTF is it doing?

npm-yaml looks for your `package.json` file and initially converts it to YAML. Afterwards, everytime you run `npm install` it will convert your `package.yml` to JSON before installing.

## WTF WHY?

Here's why:

1. No annoying brackets
2. JSON (in _my_ opinion) is the most ugly Object Notation language ever.
3. I actually did this because I wanted comments in my package.json. Now I have them in my package.yml. Yay!

## License

Lawl i have no idea about licenses. Let's just say it's **MIT licensed** although i have no idea what the hell that means.