<p align="center">
<img src="https://github.com/asafkorem/Kaizen/blob/master/logo.png" alt="Kaizen logo" width="200"/>
</p>

# Code Kaizen

## Smart hot-spots detection

Kaizen (改善, "continuous improvement" in Japanese) is a powerful code analysis tool designed to identify and visualize hot-spots in your codebase.

By leveraging Git history and static analysis, Kaizen provides actionable insights to guide your refactoring efforts and improve code quality.

## Demo

You can check out the live demo at [https://asafkorem.github.io/Kaizen/](https://asafkorem.github.io/Kaizen/).

## Usage

### Project Requirements

Kaizen works only with Node.js projects that use Git for version control.

### Running Kaizen

You can simply run Code Kaizen using `npx` without installing it.

```shell
npx code-kaizen
```

You can configure the path to the repository and the path to the directory where you want to store the artifacts.

```
npx code-kaizen <path-to-repo> <path-to-artifacts>
```

- Default path to the repository is the **current working directory**.
- Default output is **'kaizen' directory** in the current working directory.

### Installation

If you don't want to use `npx`, you can install Kaizen globally using npm, yarn, or Homebrew.

#### Using npm

```shell
npm install -g code-kaizen
```

#### Using yarn

```shell
yarn global add code-kaizen
```

#### Using Homebrew

```shell
brew tap asafkorem/kaizen
brew install asafkorem/kaizen/code-kaizen
```

## Contributing

I like all contributions, big or small. 

If you have a feature request, bug report, or patch, feel free to open an issue or a pull request.
You can also find me on [Kaizen's server on Discord](https://discord.gg/EWfmnnfb5T) or at `asafk@wix.com`.
