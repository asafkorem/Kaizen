<p align="center">
<img src="https://github.com/asafkorem/Kaizen/blob/master/logo.png" alt="Kaizen logo" width="200"/>
</p>

## Smart hot-spots detection

Kaizen (改善, "continuous improvement" in Japanese) is a powerful code analysis tool designed to identify and visualize hot-spots in your codebase.

By leveraging Git history and static analysis, Kaizen provides actionable insights to guide your refactoring efforts and improve code quality.

## Usage

### Installation

You can install Kaizen globally using npm, yarn, or Homebrew.

```shell
# Using npm 
npm install -g code-kaizen

# Using yarn
yarn global add code-kaizen

# Using Homebrew
brew tap asafkorem/kaizen
brew install asafkorem/kaizen/code-kaizen
```

### Project Requirements

- Kaizen works only with node.js projects that use Git for version control.

### Running Kaizen

To run Kaizen, simply provide the path to your repository and the path to the directory where you want to store the artifacts.

```
kaizen <path-to-repo> <path-to-artifacts>
```

## Contributing

I like all contributions, big or small. 

If you have a feature request, bug report, or patch, feel free to open an issue or a pull request.
You can also find me on [Kaizen's server on Discord](https://discord.gg/EWfmnnfb5T).
