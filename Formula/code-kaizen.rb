class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.3.tar.gz"
  sha256 "a47c5aa2846096a0059f613bbba39bf69c8a08aca78c4002546f613c931da3b8"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
