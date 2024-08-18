class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.17.tar.gz"
  sha256 "b4154c4520743267757284bf7feda7ee8153e88261f9b71a5efc28eed41ecae9"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
