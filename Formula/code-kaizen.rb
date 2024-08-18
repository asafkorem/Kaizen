class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.20.tar.gz"
  sha256 "089dfb35a44b0093f949a582704202fae8aa37ba036e575db62a27bd41afc529"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
