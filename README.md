<p align="center">
<img src="https://github.com/asafkorem/Kaizen/blob/master/logo.png" alt="Kaizen logo" width="200"/>
</p>

## Smart hot-spots detection

Kaizen (改善, "continuous improvement" in Japanese) is a powerful code analysis tool designed to identify and visualize hot-spots in your codebase.

By leveraging Git history and static analysis, Kaizen provides actionable insights to guide your refactoring efforts and improve code quality.

## Usage

### Installation

You can install Kaizen globally using npm or yarn.

```shell
npm install -g kaizen
yarn global add kaizen
```

### Running Kaizen

```shell
kaizen --path /path/to/your/repo
```

Default language is JavaScript, but you can specify a different language using the `--language` flag.
```shell
kaizen --path /path/to/your/repo --language python
```

See all available options by running `kaizen --help`.

## Contributing

I like all contributions, big or small. 

If you have a feature request, bug report, or patch, feel free to open an issue or a pull request.
You can also find me on [Kaizen's server on Discord](https://discord.gg/EWfmnnfb5T).
