class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.24.tar.gz"
  sha256 "80dec0a09efc18bc188bb2cbf528810d99a874ddb9080330a194e6acdb66e68a"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
